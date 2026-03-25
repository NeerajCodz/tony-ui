export type EffectsMode = 'on' | 'off';

export const effectsClass = (effects: EffectsMode, enabledClass = '') =>
  effects === 'on' ? enabledClass : '';
