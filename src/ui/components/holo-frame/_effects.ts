export type HoloFrameEffects = 'on' | 'off';

export const holoFrameEffectsClass = (effects: HoloFrameEffects = 'on') => {
  if (effects === 'off') {
    return '!filter-none !drop-shadow-none hover:!filter-none active:!filter-none focus:!filter-none [&_*]:!filter-none [&_*]:!drop-shadow-none';
  }
  return '';
};