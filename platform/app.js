/* Mawrid — intertidal seagrass measurement instrument.
 * Rule of the product: every displayed number travels with its detection limit.
 * All values come from data/. The only literal numbers are in the DEMO fallback
 * and in the Arabic translations of the statement / gap reasons (STRINGS.ar).
 */
'use strict';

/* ------------------------------------------------------------------ *
 * UI strings. Edit wording here, never in the logic below.
 * ------------------------------------------------------------------ */
const STRINGS = {
  ar: {
    docTitle: 'مَوْرِد · قياس المروج المدّية · تيدرا',
    brand: 'مَوْرِد',
    hdrCore: 'النواة الثابتة {ha} هكتار',
    hdrLimit: 'حدّ الكشف {dl} نقطة',
    demoBanner: 'بيانات تجريبية — ضعي مجلد data بجانب هذا الملف (وافتحي الصفحة عبر خادم محلي)',
    limitationTitle: 'حدود القياس',
    limitation: 'لا نقيس المروج المغمورة دائماً: عكارة الماء تمنع القياس البصري هناك، والقياس فيها بالسونار. كل رقم في هذه الصفحة يخصّ الطبقة المدّية وحدها، ويُقرأ مع حدّ الكشف المعلن.',
    yearsTitle: 'السنة',
    gapTip: 'لا مشهد مقبول: {reason}',
    gapStatus: '{year}: لا مشهد مقبول — {reason}',
    valueLabel: 'نسبة المرج داخل النواة الثابتة',
    uncLimit: 'حدّ الكشف {dl} نقطة',
    uncDiff: 'الفرق عن {base} = {diff} نقطة',
    above: 'فوق حدّ الكشف',
    within: 'داخل حدّ الكشف ولا يُعلن',
    baseline: 'سنة المقارنة (أدنى قيمة في السلسلة)',
    areaLabel: 'المساحة في المشهد الممثّل (بلا تصحيح المدّ)',
    haUnit: 'هكتار',
    chartTitle: 'السلسلة السنوية',
    chartNoLib: 'تعذّر تحميل مكتبة الرسم البياني؛ الأرقام أعلاه صالحة.',
    bandLegend: 'مدى المشاهد المقبولة في السنة',
    seriesLegend: 'القيمة (وسيط المشاهد المقبولة بعد تصحيح المدّ)',
    ribbonLegend: 'حدّ الكشف ± حول السنة المختارة',
    ttValue: 'القيمة: {v}',
    ttRange: 'مدى المشاهد المقبولة: {range}',
    ttScene: 'المشهد الممثّل: {date} · {sat}',
    ttLimit: 'حدّ الكشف: {dl} نقطة',
    xAxis: 'السنة',
    yAxis: '% المرج داخل النواة الثابتة (انكشاف ≥ 0.60)',
    statementTitle: 'الخلاصة',
    gapsTitle: 'لماذا تغيب بعض السنوات',
    scenesTitle: 'المشاهد المستعملة والمرفوضة',
    colYear: 'السنة',
    colReason: 'السبب',
    colSat: 'القمر',
    colDate: 'التاريخ',
    colNoise: 'الضجيج %',
    colCoverage: 'التغطية %',
    colAccepted: 'مقبول',
    mapNoLib: 'تعذّر تحميل مكتبة الخريطة؛ بقية الصفحة تعمل.',
    layerCore: 'النواة الثابتة (مكشوفة في {pct} من المرور)',
    layerMeadow: 'امتداد المرج المرصود {year}',
    layerObs: 'قابلية الرصد البصري',
    legendCore: 'النواة الثابتة: منطقة القياس نفسها كل سنة',
    legendMeadow: 'المرج المرصود {year} (دقة عرض {res} م، أصغر رقعة {mmu} هكتار)',
    legendMeadowMissing: 'طبقة المرج لسنة {year} غير متوفرة؛ الرقم والرسم صالحان.',
    legendObsTitle: 'قابلية الرصد البصري (نسبة المشاهد التي يُرى فيها القاع):',
    obsCaption: '‏{pct} فقط من المنطقة المائية يراها القمر بثقة (القاع مرئي في {thr} من المشاهد · عدد المشاهد: {scenes})',
    obsShare: '{pct} · {ha} هكتار',
    popupYear: 'السنة', popupDate: 'التاريخ', popupSat: 'القمر',
    popupArea: 'مساحة هذه الرقعة',
    popupClassArea: 'مساحة هذه الفئة (هكتار)',
    // Observability classes: the data's class names are English, so the Arabic wording is built here
    // and only the numbers come from the data.
    obsNames: ['محجوب', 'ضعيف', 'متوسط', 'جيد'],
    obsRangeLow: '{name} — القاع مرئي في أقل من {a} % من المشاهد',
    obsRangeMid: '{name} — {a} إلى {b} %',
    obsRangeHigh: '{name} — {a} % فأكثر',
    obsNote: 'نسبة المشاهد التي كان فيها قاع الماء مرئياً عند كل بكسل. مؤشّر نسبي لقابلية الرصد البصري، لا قياس معاير للعكارة.',
    // Priority sites: toggle buttons, legend rows, popups. Counts are written as "label: number",
    // so they never depend on singular / dual / plural agreement.
    priorityTitle: 'مواقع الأولوية على الخريطة',
    priorityFieldName: 'التحقق الميداني',
    prioritySonarName: 'مسح السونار',
    priorityCount: 'عدد المواقع: {count}',
    priorityMissing: 'الطبقة غير متوفرة',
    legendField: 'مواقع ذات أولوية للتحقق الميداني',
    legendFieldMore: '(الرقم المجاور للنقطة هو رتبتها)',
    legendSonar: 'مواقع ذات أولوية لمسح السونار',
    legendSonarMore: '(حجم الدائرة بحسب المساحة بالهكتار: من {min} إلى {max})',
    popupFieldTitle: 'موقع ذو أولوية للتحقق الميداني',
    popupSonarTitle: 'موقع ذو أولوية لمسح السونار',
    popupRank: 'الرتبة',
    popupAreaHa: 'المساحة (هكتار)',
    popupObs: 'قابلية الرصد البصري',
    popupReason: 'السبب',
    popupCoords: 'الإحداثيات (خط العرض، خط الطول)',
    // Alert banner. Every number in it is computed from series.json.
    alertTag: 'تنبيه:',
    // [noun, "holding"]: a rise is a "jump" (feminine); any other change keeps the neutral word (masculine).
    alertUp: ['قفزة', 'ثابتة'],
    alertOther: ['تغيّر', 'ثابت'],
    alertExceeds: '{tag} {noun} {diff} نقطة بين {from} و{to} — {ratio} × حدّ الكشف ({dl} نقطة){hold}. اتجاه مرجَّح، لا نتيجة مثبتة.',
    alertHold: '، {adj} في {year}',
    alertWithin: 'التغيّر دون حدّ الكشف — لا يُعتدّ به.',
    // Arabic renderings of the data's English statement and gap reasons (supplied by the team).
    statement: 'ارتفاع ملحوظ في الامتداد المرصود بين 2024 و2025، يثبت في 2026، يتجاوز حدّ الكشف المقيس بمرّة ونصف إلى مرّتين. اتجاه مرجَّح، لا نتيجة مثبتة.',
    gapReasons: {
      2017: 'مطابقة مدّ 0.091 · تغطية النواة 56%',
      2018: 'تغطية 54% · ضجيج 26.4%',
      2019: 'انزياح المستشعر +0.111 · ضجيج 19.1% (غبار مرجَّح)',
      2020: 'أقرب مشهد: مطابقة مدّ 0.083 · تغطية 75.6%',
      2022: 'أقرب مشهد: مطابقة مدّ 0.137'
    },
    yes: '✔', no: '—',
    // Count-dependent noun phrases: [zero, one, two, few(3-10), many(11-99), hundred-type]
    scenesAccepted: ['لا مشاهد مقبولة', 'مشهد واحد مقبول', 'مشهدان مقبولان', '{n} مشاهد مقبولة', '{n} مشهداً مقبولاً', '{n} مشهد مقبول']
  },
  en: {
    docTitle: 'Mawrid · intertidal seagrass measurement · Tidra',
    brand: 'Mawrid',
    hdrCore: 'fixed core {ha} ha',
    hdrLimit: 'detection limit {dl} pp',
    demoBanner: 'Demo data — put the data folder next to this file (and open the page through a local server)',
    limitationTitle: 'Measurement limits',
    limitation: 'We do not measure permanently submerged meadows: turbidity defeats optical measurement there, and the park uses sonar. Every number on this page concerns the intertidal layer only, and is read together with the stated detection limit.',
    yearsTitle: 'Year',
    gapTip: 'No accepted scene: {reason}',
    gapStatus: '{year}: no accepted scene — {reason}',
    valueLabel: 'Share of meadow within the fixed core',
    uncLimit: 'Detection limit {dl} pp',
    uncDiff: 'difference from {base} = {diff} pp',
    above: 'above the detection limit',
    within: 'within the detection limit, not reported',
    baseline: 'comparison year (lowest value in the series)',
    areaLabel: 'Area in the representative scene (tide-uncorrected)',
    haUnit: 'ha',
    chartTitle: 'Annual series',
    chartNoLib: 'The chart library could not load; the numbers above remain valid.',
    bandLegend: 'Range of accepted scenes in the year',
    seriesLegend: 'Value (median of accepted scenes, tide-corrected)',
    ribbonLegend: '± detection limit around the selected year',
    ttValue: 'Value: {v}',
    ttRange: 'Range of accepted scenes: {range}',
    ttScene: 'Representative scene: {date} · {sat}',
    ttLimit: 'Detection limit: {dl} pp',
    xAxis: 'Year',
    statementTitle: 'Statement',
    gapsTitle: 'Why some years are missing',
    scenesTitle: 'Scenes used and rejected',
    colYear: 'Year',
    colReason: 'Reason',
    colSat: 'Satellite',
    colDate: 'Date',
    colNoise: 'Noise %',
    colCoverage: 'Coverage %',
    colAccepted: 'Accepted',
    mapNoLib: 'The map library could not load; the rest of the page works.',
    layerCore: 'Fixed core (exposed in {pct} of passes)',
    layerMeadow: 'Observed meadow extent {year}',
    layerObs: 'Optical observability',
    legendCore: 'Fixed core: the same measurement area every year',
    legendMeadow: 'Observed meadow {year} ({res} m display, minimum patch {mmu} ha)',
    legendMeadowMissing: 'Meadow layer for {year} is not available; the number and chart remain valid.',
    legendObsTitle: 'Optical observability (share of scenes with the bottom visible):',
    obsCaption: 'Only {pct} of the water area is reliably seen by the satellite (bottom visible in {thr} of {scenes})',
    obsShare: '{pct} · {ha} ha',
    obsNames: ['blocked', 'weak', 'moderate', 'good'],
    obsRange: '{name} — bottom visible in {range} of scenes',
    obsNote: 'Share of scenes in which the sea bottom was visible at each pixel. A relative proxy of optical observability that mixes water depth at overpass time with water clarity; not a calibrated measurement of water clarity.',
    popupYear: 'Year', popupDate: 'Date', popupSat: 'Satellite',
    popupArea: 'Area of this patch',
    popupClassArea: 'Area of this class (ha)',
    priorityTitle: 'Priority sites on the map',
    priorityFieldName: 'Field verification',
    prioritySonarName: 'Sonar survey',
    priorityCount: 'Number of sites: {count}',
    priorityMissing: 'Layer not available',
    legendField: 'Priority sites for field verification',
    legendFieldMore: '(the number beside a dot is its rank)',
    legendSonar: 'Priority sites for sonar survey',
    legendSonarMore: '(circle size by area in ha: {min} to {max})',
    popupFieldTitle: 'Priority site for field verification',
    popupSonarTitle: 'Priority site for sonar survey',
    popupRank: 'Rank',
    popupAreaHa: 'Area (ha)',
    popupObs: 'Optical observability',
    popupReason: 'Reason',
    popupCoords: 'Coordinates (latitude, longitude)',
    alertTag: 'Alert:',
    // [noun, "holding"]: a rise is a "jump"; any other change keeps the neutral word.
    alertUp: ['jump', 'holding'],
    alertOther: ['change', 'holding'],
    alertExceeds: '{tag} {noun} of {diff} pp between {from} and {to} — {ratio} × the detection limit ({dl} pp){hold}. Likely trend, not a proven result.',
    alertHold: ', {adj} in {year}',
    alertWithin: 'The change is within the detection limit — not to be relied on.',
    yes: '✔', no: '—',
    scenesAccepted: ['no accepted scenes', '1 accepted scene', '2 accepted scenes', '{n} accepted scenes', '{n} accepted scenes', '{n} accepted scenes'],
    scenesPlain: ['no scenes', '1 scene', '2 scenes', '{n} scenes', '{n} scenes', '{n} scenes']
  }
};

/* ------------------------------------------------------------------ *
 * DEMO fallback: same shape as data/, used only when data/ cannot be read.
 * ------------------------------------------------------------------ */
const DEMO = {
  series: {
    title: 'DEMO', metric: '% meadow within fixed exposed core (exposure ≥ 0.60)',
    core_ha: 7725, detection_limit_pp: 8.55, tide_slope_pp_per_expo: -81.4,
    reference_scene: ['S2B', '2026-06-05'], reference_expo: 0.574, ndvi_threshold: 0.316,
    display_res_m: 30, mmu_ha: 0.5,
    gaps: [2017, 2018, 2019, 2020, 2022],
    gap_reasons: { 2017: 'demo', 2018: 'demo', 2019: 'demo', 2020: 'demo', 2022: 'demo' },
    statement: 'DEMO DATA — not a measurement.',
    series: [
      { year: 2021, value: 28, lo: 27, hi: 29, n_scenes: 2, area_ha: 1800, scene: '2021-07-01', sat: 'S2B' },
      { year: 2023, value: 30, lo: 30, hi: 30, n_scenes: 1, area_ha: 2100, scene: '2023-06-11', sat: 'S2B' },
      { year: 2024, value: 25, lo: 25, hi: 25, n_scenes: 1, area_ha: 1900, scene: '2024-06-25', sat: 'S2B' },
      { year: 2025, value: 39, lo: 38, hi: 41, n_scenes: 3, area_ha: 2500, scene: '2025-06-17', sat: 'S2A' },
      { year: 2026, value: 40, lo: 33, hi: 42, n_scenes: 3, area_ha: 3000, scene: '2026-06-05', sat: 'S2B' }
    ]
  },
  scenes: [
    { year: 2021, sat: 'S2B', date: '2021-07-01', exposure: 0.59, noise_pp: 0, coverage_pp: 88, meadow_pp: 27, accepted: true },
    { year: 2019, sat: 'S2A', date: '2019-06-07', exposure: 0.62, noise_pp: 16, coverage_pp: 96, meadow_pp: 40, accepted: false }
  ],
  observability: {
    scenes: 72,
    classes: [
      { cls: 1, name: 'محجوب — القاع مرئي في أقل من 25 % من المشاهد', ha: 1, pct: 25 },
      { cls: 2, name: 'ضعيف — 25 إلى 50 %', ha: 1, pct: 25 },
      { cls: 3, name: 'متوسط — 50 إلى 75 %', ha: 1, pct: 25 },
      { cls: 4, name: 'جيد — 75 % فأكثر', ha: 1, pct: 25 }
    ],
    note: 'بيانات تجريبية.'
  }
};

/* Sequential observability ramp, dark = bottom rarely visible, light = often visible.
 * Lightness steps are roughly even so the classes separate in greyscale. */
const OBS_COLORS = { 1: '#1B3B57', 2: '#3E6F93', 3: '#8FB8D0', 4: '#DCEAF2' };
const OBS_OPACITY = 0.6;
const MEADOW_COLOR = '#1B7A62';
/* Priority sites. Field verification: filled dots with the rank beside them.
 * Sonar survey: hollow rings sized by area_ha (see sonarRadius). */
const FIELD_STYLE = { radius: 7, color: '#fff', weight: 1.5, opacity: 1, fillColor: '#E24A33', fillOpacity: 1 };
const SONAR_COLOR = '#E8A33D';
const SONAR_RADIUS = [6, 20]; // px: ring for the smallest and for the largest area
const INK = '#0F2A33';

/* ------------------------------------------------------------------ *
 * State
 * ------------------------------------------------------------------ */
const state = {
  lang: 'ar',
  year: null,
  demo: false,
  series: null,      // series.json
  scenes: [],        // scenes.json
  obs: null,         // observability.json
  byYear: new Map(), // year -> series row
  baseline: null,    // series row with the lowest value
  map: null,
  chart: null,
  layers: { core: null, meadow: null, obs: null },
  // Priority sites: independent toggles, on by default. `layer` stays null if the file cannot be read.
  priority: {
    field: { file: 'data/priority_field.geojson', layer: null, count: 0, on: true, loaded: false },
    sonar: { file: 'data/priority_sonar.geojson', layer: null, count: 0, on: true, loaded: false, min: 0, max: 0 }
  },
  renderers: null,   // SVG renderers of the two priority panes
  meadowCache: new Map(), // year -> L.GeoJSON | null (null = file missing)
  meadowMissing: false,
  obsOn: false,
  legend: null,
  layerControl: null
};

/* ------------------------------------------------------------------ *
 * Helpers
 * ------------------------------------------------------------------ */
function S(key) { return STRINGS[state.lang][key]; }

function fmt(template, vars) {
  return String(template).replace(/\{(\w+)\}/g, (m, k) => (k in vars ? vars[k] : m));
}

/* Western digits in both languages. */
function num(x, digits) {
  return Number(x).toLocaleString('en-US', { minimumFractionDigits: digits, maximumFractionDigits: digits });
}
function signed(x, digits) {
  const s = num(Math.abs(x), digits);
  return (x > 0 ? '+' : x < 0 ? '−' : '±') + s;
}
/* Wrap a number so it keeps left-to-right order inside Arabic text. */
function n(text) { return '<bdi class="n" dir="ltr">' + esc(text) + '</bdi>'; }
/* Same for plain-text contexts (canvas, title attributes): LRI ... PDI isolate. */
function iso(text) { return '⁦' + text + '⁩'; }
function esc(s) {
  return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}
/* True for a usable number (0 counts, null / '' / NaN do not). */
function isNum(x) { return x !== null && x !== undefined && x !== '' && Number.isFinite(Number(x)); }

/* Count phrase with correct Arabic agreement for any n.
 * forms = [zero, one, two, few(3-10), many(11-99), hundred-type]. */
function countPhrase(count, forms) {
  const k = Math.abs(Math.round(count));
  const r = k % 100;
  let i;
  if (k === 0) i = 0;
  else if (k === 1) i = 1;
  else if (k === 2) i = 2;
  else if (r >= 3 && r <= 10) i = 3;
  else if (r >= 11 && r <= 99) i = 4;
  else i = 5;              // 100, 101, 102, 200 ... take the singular genitive
  return fmt(forms[i], { n: num(k, 0) });
}

async function loadJSON(url) {
  try {
    const res = await fetch(url, { cache: 'no-cache' });
    if (!res.ok) throw new Error(res.status + ' ' + url);
    return await res.json();
  } catch (err) {
    console.warn('[mawrid] could not load', url, err && err.message);
    return null;
  }
}

/* ------------------------------------------------------------------ *
 * Boot
 * ------------------------------------------------------------------ */
async function init() {
  try {
    const saved = safeStorage('get', 'mawrid-lang');
    if (saved === 'en' || saved === 'ar') state.lang = saved;
  } catch (e) { /* ignore */ }

  const [series, scenes, obs] = await Promise.all([
    loadJSON('data/series.json'), loadJSON('data/scenes.json'), loadJSON('data/observability.json')
  ]);

  if (!series || !Array.isArray(series.series)) {
    state.demo = true;
    state.series = DEMO.series;
    state.scenes = DEMO.scenes;
    state.obs = DEMO.observability;
  } else {
    state.series = series;
    state.scenes = Array.isArray(scenes) ? scenes : [];
    state.obs = obs;
  }

  state.series.series.forEach(r => state.byYear.set(Number(r.year), r));
  state.baseline = state.series.series.reduce((a, b) => (b.value < a.value ? b : a));
  const years = [...state.byYear.keys()];
  state.year = Math.max(...years);

  document.querySelectorAll('.lang button').forEach(b => {
    b.addEventListener('click', () => setLang(b.dataset.lang));
  });
  document.querySelectorAll('.tog').forEach(b => {
    b.addEventListener('click', () => togglePriority(b.dataset.key));
  });

  buildYearButtons();
  initMap();
  initChart();
  renderAll();
  selectYear(state.year);

  // Scene table: open on desktop, collapsed on phones.
  try {
    document.getElementById('scenes-details').open = window.matchMedia('(min-width: 761px)').matches;
  } catch (e) { /* ignore */ }
}

function safeStorage(op, key, value) {
  try {
    if (op === 'get') return window.localStorage.getItem(key);
    window.localStorage.setItem(key, value);
  } catch (e) { return null; }
  return null;
}

/* ------------------------------------------------------------------ *
 * Language
 * ------------------------------------------------------------------ */
function setLang(lang) {
  if (!STRINGS[lang]) return;
  state.lang = lang;
  safeStorage('set', 'mawrid-lang', lang);
  renderAll();
  renderYear();
  if (state.map) setTimeout(() => state.map.invalidateSize(), 0);
}

function renderAll() {
  const root = document.documentElement;
  root.lang = state.lang;
  root.dir = state.lang === 'ar' ? 'rtl' : 'ltr';
  document.title = S('docTitle');

  document.querySelectorAll('[data-s]').forEach(el => { el.textContent = S(el.dataset.s); });
  document.querySelectorAll('.lang button').forEach(b => {
    b.setAttribute('aria-pressed', String(b.dataset.lang === state.lang));
  });

  const d = state.series;
  document.getElementById('hdr-core').innerHTML = fmt(esc(S('hdrCore')), { ha: n(num(d.core_ha, 0)) });
  document.getElementById('hdr-limit').innerHTML = fmt(esc(S('hdrLimit')), { dl: n('±' + num(d.detection_limit_pp, 2)) });

  const banner = document.getElementById('demo-banner');
  banner.hidden = !state.demo;
  banner.textContent = S('demoBanner');

  document.getElementById('limitation').innerHTML =
    '<strong>' + esc(S('limitationTitle')) + '</strong>' + esc(S('limitation'));

  // D. Statement: Arabic rendering in AR, data text verbatim in EN (and always in demo mode).
  const st = document.getElementById('statement');
  st.textContent = (state.lang === 'ar' && !state.demo && S('statement')) ? S('statement') : d.statement;

  renderGaps();
  renderScenes();
  updateYearButtonLabels();
  updateChartLang();
  if (state.layerControl) rebuildLayerControl();
  renderAlert();
  renderPriorityControls();
  renderLegend();
}

function gapReason(year) {
  const data = (state.series.gap_reasons || {})[year] || '';
  if (state.lang === 'ar' && !state.demo) {
    const ar = (S('gapReasons') || {})[year];
    if (ar) return ar;
  }
  return data;
}

/* ------------------------------------------------------------------ *
 * A. Year selector — gap years are rendered, never hidden.
 * ------------------------------------------------------------------ */
function allYears() {
  const ys = [...state.byYear.keys(), ...(state.series.gaps || []).map(Number)];
  const lo = Math.min(...ys), hi = Math.max(...ys);
  const out = [];
  for (let y = lo; y <= hi; y++) out.push(y);
  return out;
}

function buildYearButtons() {
  const box = document.getElementById('years');
  box.innerHTML = '';
  allYears().forEach(y => {
    const b = document.createElement('button');
    b.type = 'button';
    b.textContent = String(y);
    b.dataset.year = y;
    if (!state.byYear.has(y)) {
      b.classList.add('gap');
      b.setAttribute('aria-disabled', 'true');
      b.addEventListener('click', () => {
        document.getElementById('year-status').textContent =
          fmt(S('gapStatus'), { year: y, reason: gapReason(y) });
      });
    } else {
      b.addEventListener('click', () => selectYear(y));
    }
    box.appendChild(b);
  });
}

function updateYearButtonLabels() {
  document.querySelectorAll('#years button').forEach(b => {
    const y = Number(b.dataset.year);
    if (b.classList.contains('gap')) {
      b.title = fmt(S('gapTip'), { reason: gapReason(y) });
      b.setAttribute('aria-label', y + ' — ' + b.title);
    }
  });
  const status = document.getElementById('year-status');
  if (status) status.textContent = '';
}

function selectYear(y) {
  if (!state.byYear.has(y)) return;
  state.year = y;
  document.getElementById('year-status').textContent = '';
  document.querySelectorAll('#years button').forEach(b => {
    b.setAttribute('aria-pressed', String(Number(b.dataset.year) === y));
  });
  renderYear();
  showMeadow(y);
}

/* ------------------------------------------------------------------ *
 * B. Measurement card
 * ------------------------------------------------------------------ */
function renderYear() {
  const r = state.byYear.get(state.year);
  if (!r) return;
  const d = state.series;
  const dl = d.detection_limit_pp;
  const base = state.baseline;

  document.getElementById('m-value').innerHTML = n(num(r.value, 1) + '%');

  const parts = [
    fmt(esc(S('uncLimit')), { dl: n('±' + num(dl, 2)) }),
    esc(countPhrase(r.n_scenes, S('scenesAccepted'))).replace(/(\d[\d,]*)/, m => n(m))
  ];
  const verdict = document.getElementById('m-verdict');
  if (r.year === base.year) {
    verdict.className = 'm-verdict base';
    verdict.textContent = S('baseline');
  } else {
    // Round to two decimals (as stored in the data) before comparing, so the verdict matches what is read.
    const diff = Math.round((r.value - base.value) * 100) / 100;
    parts.push(fmt(esc(S('uncDiff')), { base: n(String(base.year)), diff: n(signed(diff, 1)) }));
    const isAbove = Math.abs(diff) >= dl;
    verdict.className = 'm-verdict ' + (isAbove ? 'above' : 'within');
    verdict.textContent = isAbove ? S('above') : S('within');
  }
  document.getElementById('m-unc').innerHTML = parts.join(' · ');

  document.getElementById('m-area').innerHTML = n(num(r.area_ha, 0)) + ' ' + esc(S('haUnit'));

  updateChartSelection();
  renderLegend();
}

/* ------------------------------------------------------------------ *
 * Alert rule. Banner at the top of the page; every number in it is
 * computed from data/series.json, none is written here.
 * ------------------------------------------------------------------ */
/* Every consecutive pair of entries in the series is tested against the detection limit. The pair with
 * the largest absolute change that reaches the limit is reported, so no comparison year is chosen in
 * advance. A pair is two consecutive entries, which means it can span a year that has no data. */
function computeAlert() {
  const d = state.series;
  const dl = Number(d.detection_limit_pp);
  const rows = d.series.slice().sort((a, b) => a.year - b.year);
  if (rows.length < 2 || !(dl > 0)) return null;
  // Two decimals, as stored in the data, so the verdict matches what is read.
  const change = (a, b) => Math.round((b.value - a.value) * 100) / 100;
  let best = null;   // when two pairs are equally large, the earlier one stays
  for (let i = 1; i < rows.length; i++) {
    const diff = change(rows[i - 1], rows[i]);
    // Same test as the verdict on the measurement card: reaching the limit counts.
    if (Math.abs(diff) >= dl && (!best || Math.abs(diff) > Math.abs(best.diff))) best = { i, diff };
  }
  if (!best) return { exceeds: false };
  const from = rows[best.i - 1], to = rows[best.i];
  // "Holding": every later year is still at least the limit away from the value before the change,
  // in the same direction. With no later year there is nothing to hold.
  const later = rows.slice(best.i + 1);
  const holds = later.length > 0 && later.every(r => {
    const net = change(from, r);
    return Math.sign(net) === Math.sign(best.diff) && Math.abs(net) >= dl;
  });
  return {
    exceeds: true, from: from.year, to: to.year, diff: best.diff, dl,
    ratio: Math.abs(best.diff) / dl,
    holdYear: holds ? later[later.length - 1].year : null
  };
}

function renderAlert() {
  const el = document.getElementById('alert-banner');
  if (!el) return;
  const a = state.demo ? null : computeAlert(); // demo numbers are not a measurement: no alert from them
  if (!a) { el.hidden = true; el.textContent = ''; return; }
  el.hidden = false;
  el.className = 'alert-banner ' + (a.exceeds ? 'amber' : 'grey');
  if (!a.exceeds) { el.textContent = S('alertWithin'); return; }
  // A rise is a "jump"; any other change keeps the neutral word. Each word has its own form of "holding".
  const [noun, adj] = S(a.diff > 0 ? 'alertUp' : 'alertOther');
  const hold = a.holdYear === null ? '' : fmt(esc(S('alertHold')), { adj: esc(adj), year: n(a.holdYear) });
  el.innerHTML = fmt(esc(S('alertExceeds')), {
    tag: '<strong>' + esc(S('alertTag')) + '</strong>', noun: esc(noun),
    diff: n(signed(a.diff, 1)), from: n(a.from), to: n(a.to),
    ratio: n(num(a.ratio, 2)), dl: n(num(a.dl, 2)), hold
  });
}

/* ------------------------------------------------------------------ *
 * E. Gap table / F. Scene table
 * ------------------------------------------------------------------ */
function renderGaps() {
  const tb = document.getElementById('gaps');
  const reasons = state.series.gap_reasons || {};
  tb.innerHTML = Object.keys(reasons).sort().map(y =>
    '<tr><td>' + n(y) + '</td><td class="reason">' + esc(gapReason(y)) + '</td></tr>'
  ).join('');
}

function renderScenes() {
  const rows = [...state.scenes].sort((a, b) => (a.year - b.year) || String(a.date).localeCompare(String(b.date)));
  document.getElementById('scenes').innerHTML = rows.map(s =>
    '<tr class="' + (s.accepted ? 'accepted' : 'rejected') + '">' +
      '<td>' + n(s.year) + '</td>' +
      '<td>' + n(s.sat) + '</td>' +
      '<td>' + n(s.date) + '</td>' +
      '<td>' + n(num(s.noise_pp, 1)) + '</td>' +
      '<td>' + n(num(s.coverage_pp, 1)) + '</td>' +
      '<td class="acc">' + esc(s.accepted ? S('yes') : S('no')) + '</td>' +
    '</tr>'
  ).join('');
}

/* ------------------------------------------------------------------ *
 * Map
 * ------------------------------------------------------------------ */
function initMap() {
  const fb = document.getElementById('map-fallback');
  if (typeof window.L === 'undefined') {
    console.warn('[mawrid] Leaflet not available; map disabled.');
    fb.hidden = false;
    fb.textContent = S('mapNoLib');
    return;
  }
  try {
    const renderer = L.canvas({ padding: 0.3 });
    const map = L.map('map', { renderer, zoomControl: true, attributionControl: true });
    state.map = map;
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);
    map.setView([20.1, -16.25], 11); // provisional view until the core loads

    state.legend = L.control({ position: 'bottomleft' });
    state.legend.onAdd = () => {
      const div = L.DomUtil.create('div', 'legend');
      L.DomEvent.disableClickPropagation(div);
      L.DomEvent.disableScrollPropagation(div);
      return div;
    };
    state.legend.addTo(map);

    // Priority sites get their own panes above every other vector layer, so their order does not
    // depend on which layer was added last. The sonar rings sit under the field dots.
    map.createPane('sonarPane').style.zIndex = 450;
    map.createPane('fieldPane').style.zIndex = 460;
    state.renderers = { field: L.svg({ pane: 'fieldPane' }), sonar: L.svg({ pane: 'sonarPane' }) };

    map.on('overlayadd', e => {
      if (e.layer !== state.layers.obs) return;
      state.obsOn = true;
      // Observability is the bottom layer: under the core outline and the meadow.
      state.layers.obs.bringToBack();
      renderLegend();
    });
    map.on('zoomend', layoutRankLabels);
    // On phones the legend and the layer box would cover a popup, so they step aside while one of the
    // observability / priority popups is open (see .has-pp). The meadow popup behaves as before.
    map.on('popupopen', e => { if (e.popup.options.className === 'pp-popup') map.getContainer().classList.add('has-pp'); });
    map.on('popupclose', e => { if (e.popup.options.className === 'pp-popup') map.getContainer().classList.remove('has-pp'); });
    map.on('overlayremove', e => { if (e.layer === state.layers.obs) { state.obsOn = false; renderLegend(); } });

    loadCore();
    loadObservability();
    loadPriority('field');
    loadPriority('sonar');
  } catch (err) {
    console.warn('[mawrid] map init failed', err);
    fb.hidden = false;
    fb.textContent = S('mapNoLib');
    state.map = null;
  }
}

async function loadCore() {
  const gj = state.demo ? null : await loadJSON('data/core.geojson');
  if (!gj || !state.map) return;
  try {
    state.layers.core = L.geoJSON(gj, {
      interactive: false,
      style: { color: INK, weight: 1, opacity: 0.6, fillColor: INK, fillOpacity: 0.1 }
    }).addTo(state.map);
    state.layers.core.bringToBack();
    if (state.layers.obs && state.map.hasLayer(state.layers.obs)) state.layers.obs.bringToBack();
    const b = state.layers.core.getBounds();
    if (b.isValid()) state.map.fitBounds(b, { padding: [12, 12] }); // once, on load only
    rebuildLayerControl();
  } catch (err) { console.warn('[mawrid] core layer failed', err); }
}

async function loadObservability() {
  const gj = state.demo ? null : await loadJSON('data/observability.geojson');
  if (!gj || !state.map) return;
  try {
    state.layers.obs = L.geoJSON(gj, {
      style: f => ({ stroke: false, fillColor: OBS_COLORS[f.properties.class] || '#888', fillOpacity: OBS_OPACITY }),
      onEachFeature: (f, l) => l.bindPopup(() => obsPopup(f.properties), { className: 'pp-popup' })
    }); // off by default
    rebuildLayerControl();
  } catch (err) { console.warn('[mawrid] observability layer failed', err); }
}

/* Priority sites: Point layers above every other layer, each with its own toggle. */
async function loadPriority(key) {
  const p = state.priority[key];
  const gj = state.demo ? null : await loadJSON(p.file);
  p.loaded = true;
  if (!gj || !Array.isArray(gj.features) || !state.map) { renderPriorityControls(); return; }
  try {
    const feats = gj.features.filter(f => f && f.geometry && f.geometry.type === 'Point' && f.properties);
    const areas = feats.map(f => Number(f.properties.area_ha)).filter(Number.isFinite);
    p.min = areas.length ? Math.min(...areas) : 0;
    p.max = areas.length ? Math.max(...areas) : 0;
    // Draw order: rank 1 ends up on top of the dots; the largest ring is drawn first so small rings
    // inside it stay reachable.
    const order = key === 'field'
      ? (a, b) => b.properties.rank - a.properties.rank
      : (a, b) => b.properties.area_ha - a.properties.area_ha;
    p.layer = L.geoJSON({ type: 'FeatureCollection', features: feats.slice().sort(order) }, {
      pointToLayer: (f, latlng) => (key === 'field' ? fieldMarker(f, latlng) : sonarMarker(f, latlng, p)),
      onEachFeature: (f, l) => l.bindPopup(() => priorityPopup(key, f), { maxWidth: 280, className: 'pp-popup' })
    });
    p.count = feats.length;
    if (p.on) p.layer.addTo(state.map);
    if (key === 'field') layoutRankLabels();
  } catch (err) { console.warn('[mawrid] priority layer failed', key, err); p.layer = null; }
  renderPriorityControls();
  renderLegend();
}

function fieldMarker(f, latlng) {
  const m = L.circleMarker(latlng, Object.assign({ pane: 'fieldPane', renderer: state.renderers.field }, FIELD_STYLE));
  m.bindTooltip(esc(String(f.properties.rank)), {
    permanent: true, direction: 'right', offset: [FIELD_STYLE.radius + 3, 0], className: 'rank-tip'
  });
  return m;
}

/* Rank labels: where dots crowd together at low zoom, each label takes a free side of its dot
 * (right, left, above, below) so the numbers do not pile up. Runs again after every zoom. */
function layoutRankLabels() {
  const p = state.priority.field;
  if (!state.map || !p.layer || !state.map.hasLayer(p.layer)) return;
  const r = FIELD_STYLE.radius, gap = 3, h = 13;
  const dots = p.layer.getLayers()
    .sort((a, b) => a.feature.properties.rank - b.feature.properties.rank)
    .map(l => ({ l, c: state.map.latLngToContainerPoint(l.getLatLng()), w: 8 * String(l.feature.properties.rank).length + 2 }));
  const rect = (c, w, d) => {
    if (d === 'right') return [c.x + r + gap, c.y - h / 2, c.x + r + gap + w, c.y + h / 2];
    if (d === 'left') return [c.x - r - gap - w, c.y - h / 2, c.x - r - gap, c.y + h / 2];
    if (d === 'top') return [c.x - w / 2, c.y - r - gap - h, c.x + w / 2, c.y - r - gap];
    return [c.x - w / 2, c.y + r + gap, c.x + w / 2, c.y + r + gap + h];
  };
  const hit = (a, b) => a[0] < b[2] && b[0] < a[2] && a[1] < b[3] && b[1] < a[3];
  const taken = [];   // label boxes already placed, rank 1 first
  dots.forEach(({ l, c, w }) => {
    const others = dots.filter(o => o.l !== l).map(o => [o.c.x - r, o.c.y - r, o.c.x + r, o.c.y + r]);
    const dir = ['right', 'left', 'top', 'bottom'].find(d => {
      const b = rect(c, w, d);
      return !taken.some(t => hit(t, b)) && !others.some(o => hit(o, b));
    }) || 'right';
    taken.push(rect(c, w, dir));
    const tip = l.getTooltip();
    tip.options.direction = dir;
    tip.options.offset = [dir === 'right' ? r + gap : dir === 'left' ? -(r + gap) : 0,
                          dir === 'top' ? -(r + gap) : dir === 'bottom' ? r + gap : 0];
    tip.update();
  });
}

function sonarMarker(f, latlng, p) {
  return L.circleMarker(latlng, {
    pane: 'sonarPane', renderer: state.renderers.sonar,
    radius: sonarRadius(Number(f.properties.area_ha), p.min, p.max),
    color: SONAR_COLOR, weight: 2, opacity: 1,
    fill: true, fillOpacity: 0   // hollow, yet the whole disc stays clickable
  });
}

/* Ring radius from area_ha, SONAR_RADIUS[0]..[1] px. The circle's area (not its radius) grows
 * linearly with area_ha, so the eye reads the sizes in proportion. */
function sonarRadius(area, min, max) {
  const [r0, r1] = SONAR_RADIUS;
  if (!(max > min) || !Number.isFinite(area)) return r0;
  const t = Math.min(1, Math.max(0, (area - min) / (max - min)));
  return Math.sqrt(r0 * r0 + (r1 * r1 - r0 * r0) * t);
}

/* The two toggle buttons in the control panel. They are independent of each other. */
function renderPriorityControls() {
  [['field', 'priorityFieldName'], ['sonar', 'prioritySonarName']].forEach(([key, nameKey]) => {
    const b = document.getElementById('tog-' + key);
    if (!b) return;
    const p = state.priority[key];
    const ready = !!p.layer;
    const swatch = key === 'field' ? 'background:' + FIELD_STYLE.fillColor : 'border-color:' + SONAR_COLOR;
    b.disabled = !ready;
    b.setAttribute('aria-pressed', String(ready && p.on));
    const sub = !p.loaded ? '' : ready
      ? fmt(esc(S('priorityCount')), { count: n(String(p.count)) })
      : esc(S('priorityMissing'));
    b.innerHTML = '<span class="tog-sw ' + key + '" style="' + swatch + '" aria-hidden="true"></span>' +
      '<span class="tog-txt"><span class="tog-name">' + esc(S(nameKey)) + '</span>' +
      '<span class="tog-sub">' + sub + '</span></span>';
  });
}

function togglePriority(key) {
  const p = state.priority[key];
  if (!p || !p.layer || !state.map) return;
  p.on = !p.on;
  if (p.on) p.layer.addTo(state.map); else state.map.removeLayer(p.layer);
  if (key === 'field') layoutRankLabels();
  renderPriorityControls();
  renderLegend();
}

async function showMeadow(year) {
  if (!state.map) return;
  let layer = state.meadowCache.get(year);
  if (layer === undefined) {
    const gj = state.demo ? null : await loadJSON('data/meadow_' + year + '.geojson');
    layer = null;
    if (gj) {
      try {
        layer = L.geoJSON(gj, {
          style: { color: MEADOW_COLOR, weight: 0.5, fillColor: MEADOW_COLOR, fillOpacity: 0.85 },
          onEachFeature: (f, l) => l.bindPopup(() => meadowPopup(f.properties))
        });
      } catch (err) { console.warn('[mawrid] meadow layer failed', year, err); layer = null; }
    }
    state.meadowCache.set(year, layer);
  }
  if (state.year !== year) return; // user moved on while loading
  if (state.layers.meadow) state.map.removeLayer(state.layers.meadow);
  state.layers.meadow = layer;
  state.meadowMissing = !layer;
  if (layer) {
    layer.addTo(state.map);
    if (state.layers.obs && state.map.hasLayer(state.layers.obs)) layer.bringToFront();
  }
  rebuildLayerControl();
  renderLegend();
}

function meadowPopup(p) {
  const rows = [
    [S('popupYear'), p.year], [S('popupDate'), p.date], [S('popupSat'), p.sat],
    [S('popupArea'), num(p.area_ha, 2) + ' ' + S('haUnit')]
  ];
  return '<div dir="' + (state.lang === 'ar' ? 'rtl' : 'ltr') + '">' +
    rows.map(r => esc(r[0]) + ': ' + n(r[1])).join('<br>') + '</div>';
}

/* Observability polygon: the feature's label exactly as the data gives it (English),
 * and the hectares of its class from observability.json. */
function obsPopup(p) {
  const c = state.obs && Array.isArray(state.obs.classes)
    ? state.obs.classes.find(k => Number(k.cls) === Number(p.class)) : null;
  return '<div class="pp" dir="' + (state.lang === 'ar' ? 'rtl' : 'ltr') + '">' +
    '<div class="pp-h"><bdi dir="ltr" lang="en">' + esc(p.label == null ? '' : p.label) + '</bdi></div>' +
    (c && isNum(c.ha)
      ? '<div class="pp-row"><span class="k">' + esc(S('popupClassArea')) + ':</span> ' + n(num(c.ha, 0)) + '</div>'
      : '') +
    '</div>';
}

/* Priority site: rank, area, observability, reason (verbatim from the data), coordinates. */
function priorityPopup(key, f) {
  const p = f.properties || {};
  const xy = (f.geometry && f.geometry.coordinates) || [];
  const rows = [];
  if (isNum(p.rank)) rows.push([S('popupRank'), n(p.rank)]);
  if (isNum(p.area_ha)) rows.push([S('popupAreaHa'), n(num(p.area_ha, 1))]);
  if (isNum(p.observability)) rows.push([S('popupObs'), n(num(p.observability * 100, 0) + '%')]);
  const reason = p.reason
    ? '<div class="pp-row"><span class="k">' + esc(S('popupReason')) + ':</span></div>' +
      '<div class="pp-ltr" dir="ltr" lang="en">' + esc(p.reason) + '</div>'
    : '';
  const coords = isNum(xy[0]) && isNum(xy[1])
    ? '<div class="pp-row"><span class="k">' + esc(S('popupCoords')) + ':</span> ' +
      n(num(xy[1], 6) + ', ' + num(xy[0], 6)) + '</div>'
    : '';
  return '<div class="pp" dir="' + (state.lang === 'ar' ? 'rtl' : 'ltr') + '">' +
    '<div class="pp-h">' + esc(S(key === 'field' ? 'popupFieldTitle' : 'popupSonarTitle')) + '</div>' +
    rows.map(r => '<div class="pp-row"><span class="k">' + esc(r[0]) + ':</span> ' + r[1] + '</div>').join('') +
    reason + coords + '</div>';
}

function rebuildLayerControl() {
  if (!state.map) return;
  if (state.layerControl) state.map.removeControl(state.layerControl);
  const overlays = {};
  if (state.layers.core) overlays[fmt(esc(S('layerCore')), { pct: n('≥' + coreExposurePct() + '%') })] = state.layers.core;
  if (state.layers.meadow) overlays[fmt(esc(S('layerMeadow')), { year: n(state.year) })] = state.layers.meadow;
  if (state.layers.obs) overlays[esc(S('layerObs'))] = state.layers.obs;
  state.layerControl = L.control.layers(null, overlays, { collapsed: false, position: 'topright' }).addTo(state.map);
}

/* The exposure threshold of the core, read from the metric text (e.g. "exposure ≥ 0.60"). */
function coreExposurePct() {
  const m = /≥\s*([\d.]+)/.exec(state.series.metric || '');
  return m ? num(parseFloat(m[1]) * 100, 0) : '';
}

/* Numbers in an observability class name, e.g. "25 إلى 50" -> [25, 50]. */
function classBounds(name) { return (String(name).match(/\d+(?:\.\d+)?/g) || []).map(Number); }

function obsClassText(c, i, total) {
  const b = classBounds(c.name);
  const names = S('obsNames');
  if (state.lang === 'ar') {
    // The data's class names are English; the Arabic wording is built here, the numbers come from the data.
    const key = i === 0 ? 'obsRangeLow' : i === total - 1 ? 'obsRangeHigh' : 'obsRangeMid';
    return fmt(S(key), { name: names[i] || '', a: b[0], b: b[1] });
  }
  let range;
  if (i === 0) range = '<' + b[0] + '%';
  else if (i === total - 1) range = '≥' + b[0] + '%';
  else range = b[0] + '–' + b[1] + '%';
  return fmt(S('obsRange'), { name: names[i] || '', range });
}

function renderLegend() {
  if (!state.legend || !state.legend.getContainer()) return;
  const el = state.legend.getContainer();
  const d = state.series;
  let h = '';
  if (state.layers.core) {
    h += '<div class="row"><span class="sw" style="border:1px solid ' + INK + ';background:rgba(15,42,51,0.1)"></span><span>' + esc(S('legendCore')) + ' (' + n(num(d.core_ha, 0) + ' ' + S('haUnit')) + ')</span></div>';
  }
  if (state.layers.meadow) {
    h += '<div class="row"><span class="sw" style="background:' + MEADOW_COLOR + '"></span><span>' +
      fmt(esc(S('legendMeadow')), { year: n(state.year), res: n(d.display_res_m), mmu: n(d.mmu_ha) }) + '</span></div>';
  } else if (state.meadowMissing || state.demo) {
    h += '<div class="miss">' + fmt(esc(S('legendMeadowMissing')), { year: n(state.year) }) + '</div>';
  }
  if (state.obsOn && state.obs && Array.isArray(state.obs.classes)) {
    const cls = state.obs.classes;
    h += '<div class="cap">' + esc(S('legendObsTitle')) + '</div>';
    cls.forEach((c, i) => {
      // The swatch is drawn at the layer's own opacity, so it looks like the map.
      h += '<div class="row"><span class="sw" style="background:' + (OBS_COLORS[c.cls] || '#888') + ';opacity:' + OBS_OPACITY + '"></span><span>' +
        esc(obsClassText(c, i, cls.length)) + ' · ' +
        fmt(esc(S('obsShare')), { pct: n(num(c.pct, 1) + '%'), ha: n(num(c.ha, 0)) }) + '</span></div>';
    });
    // The line under the classes: the share of the water area in the best class (highest cls).
    const top = cls.reduce((a, b) => (Number(b.cls) > Number(a.cls) ? b : a));
    const thr = classBounds(top.name)[0];
    // Arabic gives the scene count as "label: number" (no agreement); English keeps its plural forms.
    const scenes = state.lang === 'ar' ? n(num(state.obs.scenes, 0)) : esc(countPhrase(state.obs.scenes, S('scenesPlain')));
    h += '<div class="cap">' + fmt(esc(S('obsCaption')), {
      pct: n(num(top.pct, 1) + '%'), thr: n('≥' + thr + '%'), scenes
    }) + '</div>';
    const note = state.demo ? state.obs.note : S('obsNote');
    if (note) h += '<div class="note">' + esc(note) + '</div>';
  }
  // Priority sites come last, so the observability classes and their caption keep their place.
  // The bracketed detail is hidden on phones (see .lg-more) to keep the legend short.
  const pf = state.priority.field, ps = state.priority.sonar;
  if ((pf.layer && pf.on) || (ps.layer && ps.on)) {
    h += '<div class="grp">';
    if (pf.layer && pf.on) {
      h += '<div class="row"><span class="sw dot" style="background:' + FIELD_STYLE.fillColor + '"></span><span>' +
        esc(S('legendField')) + ' <span class="lg-more">' + esc(S('legendFieldMore')) + '</span></span></div>';
    }
    if (ps.layer && ps.on) {
      h += '<div class="row"><span class="sw ring" style="border-color:' + SONAR_COLOR + '"></span><span>' +
        esc(S('legendSonar')) + ' <span class="lg-more">' +
        fmt(esc(S('legendSonarMore')), { min: n(num(ps.min, 1)), max: n(num(ps.max, 1)) }) + '</span></span></div>';
    }
    h += '</div>';
  }
  el.innerHTML = h;
  el.style.display = h ? '' : 'none';
}

/* ------------------------------------------------------------------ *
 * C. Chart
 * ------------------------------------------------------------------ */

/* Draws the satellite name above each point and the ± detection-limit ribbon
 * around the selected year's value. */
const mawridPlugin = {
  id: 'mawrid',
  beforeDatasetsDraw(chart) {
    const r = state.byYear.get(state.year);
    if (!r) return;
    const { ctx, chartArea, scales } = chart;
    const dl = state.series.detection_limit_pp;
    const yTop = scales.y.getPixelForValue(r.value + dl);
    const yBot = scales.y.getPixelForValue(r.value - dl);
    ctx.save();
    ctx.fillStyle = 'rgba(180,71,47,0.08)';
    ctx.fillRect(chartArea.left, yTop, chartArea.right - chartArea.left, yBot - yTop);
    ctx.strokeStyle = 'rgba(180,71,47,0.55)';
    ctx.setLineDash([4, 4]);
    ctx.lineWidth = 1;
    [yTop, yBot].forEach(y => { ctx.beginPath(); ctx.moveTo(chartArea.left, y); ctx.lineTo(chartArea.right, y); ctx.stroke(); });
    ctx.restore();
  },
  afterDatasetsDraw(chart) {
    const { ctx, scales } = chart;
    ctx.save();
    ctx.font = '600 10px "IBM Plex Sans Arabic", Tahoma, sans-serif';
    ctx.fillStyle = '#3E5560';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'bottom';
    state.series.series.forEach(r => {
      const x = scales.x.getPixelForValue(r.year);
      const y = scales.y.getPixelForValue(Math.max(r.hi, r.value));
      ctx.fillText(r.sat, x, y - 8);
    });
    ctx.restore();
  }
};

function chartPoints(key) {
  // One point per year across the whole span; gap years are null so the line breaks there.
  return allYears().map(y => {
    const r = state.byYear.get(y);
    return { x: y, y: r ? r[key] : null };
  });
}

function initChart() {
  const fb = document.getElementById('chart-fallback');
  if (typeof window.Chart === 'undefined') {
    console.warn('[mawrid] Chart.js not available; chart disabled.');
    fb.hidden = false;
    fb.textContent = S('chartNoLib');
    document.querySelector('.chart-box').style.display = 'none';
    return;
  }
  try {
    const ys = allYears();
    const d = state.series;
    const all = d.series.flatMap(r => [r.lo, r.hi, r.value]);
    const dl = d.detection_limit_pp;
    const yMin = Math.max(0, Math.floor((Math.min(...all) - dl) / 5) * 5);
    const yMax = Math.ceil((Math.max(...all) + dl) / 5) * 5 + 5;

    state.chart = new Chart(document.getElementById('chart'), {
      type: 'line',
      data: {
        datasets: [
          { key: 'lo', data: chartPoints('lo'), borderWidth: 0, pointRadius: 0, pointHitRadius: 0,
            fill: false, spanGaps: false, backgroundColor: 'rgba(27,122,98,0.22)' },
          { key: 'hi', data: chartPoints('hi'), borderWidth: 0, pointRadius: 0, pointHitRadius: 0,
            fill: '-1', spanGaps: false, backgroundColor: 'rgba(27,122,98,0.22)' },
          { key: 'value', data: chartPoints('value'), borderColor: INK, backgroundColor: INK,
            borderWidth: 2, spanGaps: false, pointRadius: 3.5, pointHoverRadius: 6, tension: 0 }
        ]
      },
      options: {
        responsive: true, maintainAspectRatio: false, animation: false,
        locale: 'en-US',
        layout: { padding: { top: 6 } },
        interaction: { mode: 'nearest', intersect: false, axis: 'x' },
        scales: {
          x: { type: 'linear', min: ys[0] - 0.4, max: ys[ys.length - 1] + 0.4,
               afterBuildTicks: axis => { axis.ticks = ys.map(v => ({ value: v })); },
               ticks: { callback: v => String(v), autoSkip: false, maxRotation: 0, font: { size: 10 } },
               grid: { color: '#ECE7DC' }, title: { display: false } },
          y: { min: yMin, max: yMax,
               ticks: { callback: v => num(v, 0), font: { size: 10 } },
               grid: { color: '#ECE7DC' },
               title: { display: true, text: d.metric, font: { size: 10 }, color: '#3E5560' } }
        },
        plugins: {
          legend: {
            labels: {
              boxWidth: 12, font: { size: 11 },
              filter: item => item.datasetIndex !== 0,
              generateLabels: chart => {
                const base = Chart.defaults.plugins.legend.labels.generateLabels(chart);
                base.forEach(it => {
                  if (it.datasetIndex === 1) { it.text = S('bandLegend'); it.fillStyle = 'rgba(27,122,98,0.22)'; it.strokeStyle = 'transparent'; }
                  if (it.datasetIndex === 2) { it.text = S('seriesLegend'); }
                });
                base.push({ text: S('ribbonLegend'), fillStyle: 'rgba(180,71,47,0.12)', strokeStyle: 'rgba(180,71,47,0.55)', lineWidth: 1, datasetIndex: -1, hidden: false });
                return base;
              }
            },
            onClick: () => {} // no toggling: the band and limit must stay visible
          },
          tooltip: {
            filter: item => item.datasetIndex === 2 && item.raw && item.raw.y != null,
            callbacks: {
              title: items => items.length ? String(items[0].raw.x) : '',
              label: item => tooltipLines(item.raw.x)
            }
          }
        }
      },
      plugins: [mawridPlugin]
    });
    updateChartLang();
  } catch (err) {
    console.warn('[mawrid] chart init failed', err);
    fb.hidden = false;
    fb.textContent = S('chartNoLib');
  }
}

function tooltipLines(year) {
  const r = state.byYear.get(Number(year));
  if (!r) return '';
  const dl = state.series.detection_limit_pp;
  return [
    fmt(S('ttValue'), { v: iso(num(r.value, 2) + '%') }),
    fmt(S('ttRange'), { range: iso(num(r.lo, 2) + '–' + num(r.hi, 2) + '%') }),
    countPhrase(r.n_scenes, S('scenesAccepted')),
    fmt(S('ttScene'), { date: iso(r.scene), sat: r.sat }),
    fmt(S('ttLimit'), { dl: iso('±' + num(dl, 2)) })
  ];
}

function updateChartLang() {
  const c = state.chart;
  if (!c) return;
  const rtl = state.lang === 'ar';
  // Y-axis title: Arabic string in AR, the data's metric text verbatim in EN.
  c.options.scales.y.title.text = rtl ? S('yAxis') : state.series.metric;
  c.options.plugins.legend.rtl = rtl;
  c.options.plugins.tooltip.rtl = rtl;
  c.options.plugins.legend.textDirection = rtl ? 'rtl' : 'ltr';
  c.options.plugins.tooltip.textDirection = rtl ? 'rtl' : 'ltr';
  c.update('none');
}

function updateChartSelection() {
  const c = state.chart;
  if (!c) return;
  const ds = c.data.datasets[2];
  ds.pointRadius = ds.data.map(p => (p.x === state.year ? 7 : 3.5));
  ds.pointBackgroundColor = ds.data.map(p => (p.x === state.year ? MEADOW_COLOR : INK));
  ds.pointBorderColor = ds.data.map(p => (p.x === state.year ? '#fff' : INK));
  ds.pointBorderWidth = ds.data.map(p => (p.x === state.year ? 2 : 1));
  c.update('none');
}

/* ------------------------------------------------------------------ */
window.addEventListener('unhandledrejection', e => {
  console.warn('[mawrid] unexpected async failure', e.reason);
  e.preventDefault();
});
init().catch(err => console.warn('[mawrid] init failed', err));
