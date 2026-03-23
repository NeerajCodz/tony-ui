import { cn } from '@/lib/utils';

export type GlassEffects = 'on' | 'off';

export const glassEffectsClass = (effects: GlassEffects = 'on') => {
  if (effects === 'off') return '';
  return cn(
    'relative backdrop-blur-md bg-[var(--gl-glass-bg)]/80 border border-[var(--gl-glass-border)]/10 shadow-lg',
    'before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-[var(--gl-glass-shine)]/20 before:to-transparent before:pointer-events-none'
  );
};

export const glassInputClass = (effects: GlassEffects = 'on') => {
    if (effects === 'off') return '';
    return cn(
        'bg-[var(--gl-glass-bg)]/50 backdrop-blur-sm border border-[var(--gl-glass-border)]/20 focus:border-[var(--gl-accent)]/50 focus:ring-1 focus:ring-[var(--gl-accent)]/50 transition-all duration-300'
    );
};
