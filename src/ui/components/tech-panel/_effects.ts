export type TechPanelEffects = 'on' | 'off';

export const techPanelEffectsClass = (effects: TechPanelEffects = 'on') => {
  if (effects === 'off') {
    return '!filter-none !drop-shadow-none hover:!filter-none active:!filter-none focus:!filter-none [&_*]:!filter-none [&_*]:!drop-shadow-none';
  }
  return '';
};
