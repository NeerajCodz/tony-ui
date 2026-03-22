export type QuantumGateEffects = 'on' | 'off';

export const quantumGateEffectsClass = (effects: QuantumGateEffects = 'on') => {
  if (effects === 'off') {
    return '!animate-none !bg-none !filter-none !drop-shadow-none hover:!filter-none active:!filter-none focus:!filter-none [&_*]:!filter-none [&_*]:!drop-shadow-none [&_*]:!animate-none';
  }
  return '';
};