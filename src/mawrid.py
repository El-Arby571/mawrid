"""
Mawrid - core analysis functions for Sentinel-2 L2A intertidal scenes.

Every threshold used here was frozen before the multi-year series was run and
is documented in `results/series.json`. Nothing in this module is tuned per
scene or per year.
"""

from __future__ import annotations

import numpy as np
import rasterio

# ---------------------------------------------------------------------------
# Frozen constants
# ---------------------------------------------------------------------------

#: Sentinel-2 Scene Classification Layer codes rejected as unusable.
#: 0 no-data, 1 saturated, 3 cloud shadow, 8/9 cloud medium/high probability,
#: 10 thin cirrus, 11 snow/ice.
BAD_SCL_CODES = (0, 1, 3, 8, 9, 10, 11)

#: NDVI threshold separating exposed vegetated sediment from bare sediment.
#: Obtained once by Otsu's method on the reference scene, then frozen.
NDVI_THRESHOLD = 0.31554460525512695

#: Green reflectance above which the sea bed is treated as optically visible.
GREEN_VISIBILITY_THRESHOLD = 0.1261

#: Reflectance scale factor for Sentinel-2 L2A COGs. No L2A offset is applied;
#: see the README for why.
REFLECTANCE_SCALE = 1e4

#: Pixel area in hectares at 10 m ground sampling distance.
PIXEL_HA = 0.01

BAND_ORDER = ("blue", "green", "red", "nir", "scl")


# ---------------------------------------------------------------------------
# I/O
# ---------------------------------------------------------------------------

def load_scene(path):
    """Read a 5-band Mawrid sample scene.

    Returns
    -------
    bands : dict of str -> ndarray
        ``blue``, ``green``, ``red`` and ``nir`` as float32 reflectance,
        ``scl`` as uint8 class codes.
    profile : dict
        The rasterio profile of the file.
    """
    with rasterio.open(path) as src:
        raw = {name: src.read(i + 1) for i, name in enumerate(BAND_ORDER)}
        profile = src.profile.copy()

    bands = {
        name: raw[name].astype("float32") / REFLECTANCE_SCALE
        for name in ("blue", "green", "red", "nir")
    }
    bands["scl"] = raw["scl"].astype("uint8")
    bands["_raw_blue"] = raw["blue"]
    return bands, profile


# ---------------------------------------------------------------------------
# Masking
# ---------------------------------------------------------------------------

def valid_mask(bands):
    """Pixels that carry usable optical information.

    A pixel is valid when it holds real data in blue, green and NIR and its
    SCL code is not in :data:`BAD_SCL_CODES`.
    """
    lut = np.zeros(256, dtype=bool)
    lut[list(BAD_SCL_CODES)] = True
    has_data = (
        (bands["blue"] > 0) & (bands["green"] > 0) & (bands["nir"] > 0)
    )
    return has_data & ~lut[bands["scl"]]


def exposed_mask(bands, valid=None):
    """Pixels standing above the water line at acquisition time.

    Water absorbs strongly in the near infrared, so NIR below green means the
    pixel is submerged and NIR above green means it is exposed. This is the
    land/water split used throughout the pipeline.
    """
    if valid is None:
        valid = valid_mask(bands)
    return valid & (bands["green"] < bands["nir"])


def exposure_index(bands, valid=None):
    """Fraction of valid pixels that are exposed.

    This single number stands in for the tide state of the scene: it is high
    at low water and low at high water. The series step uses it to correct
    each year's measurement to a common reference tide.
    """
    if valid is None:
        valid = valid_mask(bands)
    n_valid = int(valid.sum())
    if n_valid == 0:
        return float("nan")
    return float(exposed_mask(bands, valid).sum()) / n_valid


# ---------------------------------------------------------------------------
# Classification
# ---------------------------------------------------------------------------

def ndvi(bands):
    """Normalised difference vegetation index, NaN where undefined."""
    red, nir = bands["red"], bands["nir"]
    denom = nir + red
    with np.errstate(invalid="ignore", divide="ignore"):
        out = np.where(denom > 0, (nir - red) / (denom + 1e-9), np.nan)
    return out.astype("float32")


def classify_meadow(bands, valid=None):
    """Exposed seagrass meadow: exposed sediment with NDVI above threshold."""
    exposed = exposed_mask(bands, valid)
    return exposed & (ndvi(bands) > NDVI_THRESHOLD)


def bottom_visible(bands, valid=None):
    """Submerged pixels whose sea bed still returns light in the green band."""
    if valid is None:
        valid = valid_mask(bands)
    submerged = valid & (bands["green"] >= bands["nir"])
    return submerged & (bands["green"] > GREEN_VISIBILITY_THRESHOLD)


def area_ha(mask):
    """Hectares covered by a boolean mask on the 10 m grid."""
    return float(np.count_nonzero(mask)) * PIXEL_HA
