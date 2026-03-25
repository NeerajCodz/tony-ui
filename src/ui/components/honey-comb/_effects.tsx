import { effectsClass, type EffectsMode } from '@/ui/components/_base/_effects';

export type HoneyCombEffects = EffectsMode;

export const hexGridPattern = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='104'%3E%3Cpolygon points='30,2 58,17 58,49 30,64 2,49 2,17' fill='rgba(255,140,10,0.04)' stroke='rgba(255,160,20,0.18)' stroke-width='1' /%3E%3Cpolygon points='30,54 58,69 58,101 30,116 2,101 2,69' fill='rgba(255,140,10,0.04)' stroke='rgba(255,160,20,0.18)' stroke-width='1' /%3E%3C/svg%3E"), url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='104'%3E%3Cpolygon points='30,2 58,17 58,49 30,64 2,49 2,17' fill='rgba(255,140,10,0.04)' stroke='rgba(255,160,20,0.18)' stroke-width='1' /%3E%3Cpolygon points='30,54 58,69 58,101 30,116 2,101 2,69' fill='rgba(255,140,10,0.04)' stroke='rgba(255,160,20,0.18)' stroke-width='1' /%3E%3C/svg%3E")`;

export const hexFrameClipPath =
  'polygon(10px 0, calc(100% - 10px) 0, 100% 10px, 100% calc(100% - 10px), calc(100% - 10px) 100%, 10px 100%, 0 calc(100% - 10px), 0 10px)';

export const honeyCombEffectsClass = (effects: HoneyCombEffects) => effectsClass(effects);
