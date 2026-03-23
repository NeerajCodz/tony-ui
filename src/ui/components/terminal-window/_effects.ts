export type TerminalWindowEffects = 'on' | 'off';

export const terminalWindowEffectsClass = (effects: TerminalWindowEffects = 'on') => {
  if (effects === 'off') {
    return '';
  }
  // CRT scanlines and subtle flicker
  return 'relative after:pointer-events-none after:absolute after:inset-0 after:z-10 after:bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,0,0,0.2)_2px,rgba(0,0,0,0.2)_4px)] after:content-[""] shadow-[0_0_10px_rgba(51,255,102,0.1)]'; 
};
