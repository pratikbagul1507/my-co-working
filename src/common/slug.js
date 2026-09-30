export const slugify = (text = '') =>
  String(text)
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

const slugMaps = new WeakMap();

// Builds id -> slug for a card list. Names shared by several cards get "-<id>" appended to stay unique.
const getSlugMap = (cards) => {
  if (slugMaps.has(cards)) return slugMaps.get(cards);
  const counts = {};
  cards.forEach((card) => {
    const base = slugify(card.name);
    counts[base] = (counts[base] || 0) + 1;
  });
  const map = new Map();
  cards.forEach((card) => {
    if (map.has(card.id)) return;
    const base = slugify(card.name);
    map.set(card.id, counts[base] > 1 ? `${base}-${card.id}` : base);
  });
  slugMaps.set(cards, map);
  return map;
};

export const officeSlug = (cards, space) =>
  getSlugMap(cards).get(space.id) || slugify(space.name) || String(space.id);

// Accepts a name slug (preferred) or a legacy numeric id.
export const findOfficeBySlug = (cards, param) => {
  if (param == null) return null;
  const map = getSlugMap(cards);
  const bySlug = cards.find((card) => map.get(card.id) === param);
  if (bySlug) return bySlug;
  if (/^\d+$/.test(param)) return cards.find((card) => card.id === Number(param)) || null;
  return null;
};
