export const slugify = (text = '') =>
  String(text)
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

const slugMaps = new WeakMap();

const buildBase = (card, city) => {
  let base = slugify(card.name);
  const area = slugify(card.area || (card.location ? card.location.split(',')[0] : ''));
  const citySlug = slugify(city);
  if (area && !base.includes(area)) base += `-${area}`;
  if (citySlug && !base.includes(citySlug)) base += `-${citySlug}`;
  return base;
};

// Builds id -> slug ("name-area-city") for a card list. Repeated slugs get "-2", "-3"... appended.
const getSlugMap = (cards, city) => {
  if (slugMaps.has(cards)) return slugMaps.get(cards);
  const used = {};
  const map = new Map();
  cards.forEach((card) => {
    if (map.has(card.id)) return;
    const base = buildBase(card, city);
    used[base] = (used[base] || 0) + 1;
    map.set(card.id, used[base] > 1 ? `${base}-${used[base]}` : base);
  });
  slugMaps.set(cards, map);
  return map;
};

// Returns the full site-root path for an office, e.g. "/futops-co-working-kharadi-pune".
export const officePath = (cards, space, city) =>
  `/${getSlugMap(cards, city).get(space.id) || slugify(space.name)}`;

// Accepts a slug (preferred) or a legacy numeric id.
export const findOfficeBySlug = (cards, param, city) => {
  if (param == null) return null;
  const map = getSlugMap(cards, city);
  const bySlug = cards.find((card) => map.get(card.id) === param);
  if (bySlug) return bySlug;
  if (/^\d+$/.test(param)) return cards.find((card) => card.id === Number(param)) || null;
  return null;
};
