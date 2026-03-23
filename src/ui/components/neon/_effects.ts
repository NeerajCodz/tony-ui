import { cn } from '@/lib/utils';

export const neonGlow = "shadow-[0_0_10px_var(--ne-primary)]";
export const neonGlowHigh = "shadow-[0_0_20px_var(--ne-primary)]";
export const neonGlowInset = "shadow-[inset_0_0_10px_var(--ne-primary)]";
export const neonTextGlow = "drop-shadow-[0_0_5px_var(--ne-primary)]";

export function getNeonGlow(enabled: boolean = true, type: 'default' | 'high' | 'inset' | 'text' = 'default') {
  if (!enabled) return "";
  switch (type) {
    case 'high': return neonGlowHigh;
    case 'inset': return neonGlowInset;
    case 'text': return neonTextGlow;
    default: return neonGlow;
  }
}
