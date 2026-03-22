export type HoneyCombEffects = 'on' | 'off';

export const honeyCombEffectsClass = (effects: HoneyCombEffects = 'on') => {
  if (effects === 'off') {
    return '!filter-none !drop-shadow-none hover:!filter-none active:!filter-none focus:!filter-none [&_*]:!filter-none [&_*]:!drop-shadow-none';
  }
  return '';
};

// SVG Hex Grid Pattern (Data URI)
const HEX_GRID_SVG = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='104'%3E%3Cpolygon points='30,2 58,17 58,49 30,64 2,49 2,17' fill='rgba(255,140,10,0.04)' stroke='rgba(255,160,20,0.18)' stroke-width='1' /%3E%3Cpolygon points='30,54 58,69 58,101 30,116 2,101 2,69' fill='rgba(255,140,10,0.04)' stroke='rgba(255,160,20,0.18)' stroke-width='1' /%3E%3C/svg%3E`;

// Hex grid background style object
export const hexGridStyle = {
  backgroundImage: `url("${HEX_GRID_SVG}"), url("${HEX_GRID_SVG}")`,
  backgroundSize: '60px 104px',
  backgroundPosition: '0 0, 30px 52px',
};