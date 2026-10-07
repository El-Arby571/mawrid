"""
Rebuild `data/sample_input/example_scene.tif` from the public archive.

The sample scene is committed to this repository, so this script is only
needed if you want to verify that the committed file really is a subset of
the public Sentinel-2 archive, or to cut a different window.

Usage
-----
    python src/fetch_scene.py                       # rebuild the committed window
    python src/fetch_scene.py --row0 4032 --col0 5664 --size 1024

Requires network access to https://earth-search.aws.element84.com/v1.
"""

from __future__ import annotations

import argparse
import json
import os

import numpy as np
import rasterio
from pystac_client import Client
from rasterio.enums import Resampling
from rasterio.merge import merge
from rasterio.transform import Affine

# --- The exact scene and grid the committed sample was cut from -------------
STAC_URL = "https://earth-search.aws.element84.com/v1"
COLLECTION = "sentinel-2-l2a"
SATELLITE = "S2B"
DATE = "2026-06-05"

CRS = "EPSG:32628"
RES_M = 10.0
GRID_ORIGIN_X = 301350.0          # easting of grid column 0
GRID_ORIGIN_Y = 2232450.0         # northing of grid row 0
AOI_BBOX = (-16.9009, 19.5247, -16.0495, 20.1863)  # the analysis grid footprint

BANDS = ("blue", "green", "red", "nir")
OUT_DIR = os.path.join(os.path.dirname(__file__), "..", "data", "sample_input")


def passes_for(satellite: str, date: str):
    """Latest processing of every tile that satellite acquired on that date."""
    client = Client.open(STAC_URL)
    search = client.search(
        collections=[COLLECTION], bbox=AOI_BBOX, datetime=f"{date}/{date}"
    )
    tiles = {}
    for item in search.items():
        if item.id.split("_")[0] != satellite:
            continue
        code = item.properties.get("grid:code")
        if code not in tiles or item.id > tiles[code].id:
            tiles[code] = item
    return list(tiles.values())


def read_window(items, asset, bounds, size, dtype="uint16"):
    sources = [rasterio.open(it.assets[asset].href) for it in items]
    try:
        arr, _ = merge(
            sources, bounds=bounds, res=RES_M, nodata=0,
            dtype=dtype, resampling=Resampling.nearest,
        )
    finally:
        for src in sources:
            src.close()
    out = np.zeros((size, size), arr.dtype)
    h, w = min(size, arr.shape[1]), min(size, arr.shape[2])
    out[:h, :w] = arr[0, :h, :w]
    return out


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--row0", type=int, default=4032)
    ap.add_argument("--col0", type=int, default=5664)
    ap.add_argument("--size", type=int, default=1024)
    args = ap.parse_args()

    left = GRID_ORIGIN_X + RES_M * args.col0
    top = GRID_ORIGIN_Y - RES_M * args.row0
    bounds = (left, top - RES_M * args.size, left + RES_M * args.size, top)
    transform = Affine(RES_M, 0, left, 0, -RES_M, top)

    items = passes_for(SATELLITE, DATE)
    if not items:
        raise SystemExit(f"No {SATELLITE} items found for {DATE}")
    print(f"{len(items)} tile(s) for {SATELLITE} {DATE}")

    stack = [read_window(items, b, bounds, args.size) for b in BANDS]
    stack.append(
        read_window(items, "scl", bounds, args.size, dtype="uint8").astype("uint16")
    )

    os.makedirs(OUT_DIR, exist_ok=True)
    tif = os.path.join(OUT_DIR, "example_scene.tif")
    profile = dict(
        driver="GTiff", height=args.size, width=args.size, count=5,
        dtype="uint16", crs=CRS, transform=transform,
        compress="deflate", predictor=2, tiled=True,
    )
    with rasterio.open(tif, "w", **profile) as dst:
        for i, band in enumerate(stack, 1):
            dst.write(band, i)
        dst.descriptions = BANDS + ("scl",)

    with open(os.path.join(OUT_DIR, "example_scene.json"), "w") as fh:
        json.dump(
            dict(
                satellite=SATELLITE, date=DATE, collection=COLLECTION,
                crs=CRS, res_m=int(RES_M),
                window=dict(row0=args.row0, col0=args.col0, size=args.size),
                bands=list(BANDS) + ["scl"],
                note=("Windowed subset of a Sentinel-2 L2A scene, no offset "
                      "applied. Window chosen to intersect the fixed exposed core."),
            ),
            fh, indent=1,
        )
    print(f"wrote {tif} ({os.path.getsize(tif) / 1e6:.1f} MB)")


if __name__ == "__main__":
    main()
