export type EnergyShieldEffects = 'on' | 'off';

export const energyShieldEffectsClass = (effects: EnergyShieldEffects = 'on') => {
  if (effects === 'off') {
    return '!filter-none !drop-shadow-none hover:!filter-none active:!filter-none focus:!filter-none [&_*]:!filter-none [&_*]:!drop-shadow-none';
  }
  return '';
};