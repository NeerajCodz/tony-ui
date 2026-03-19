import { Info, AlertTriangle, CheckCircle, AlertOctagon, Terminal, HelpCircle } from 'lucide-react';
import type { Variant } from '../types/common';

export const variantIcons = {
  default: Terminal,
  neutral: Terminal,
  primary: Info,
  success: CheckCircle,
  warning: AlertTriangle,
  destructive: AlertOctagon,
  info: HelpCircle,
};

export function getVariantIcon(variant: Variant = 'primary') {
  return variantIcons[variant] || variantIcons.primary;
}

export const variantColorMap: Record<Variant | 'default' | 'neutral', string> = {
  default: 'cyan',
  neutral: 'slate',
  primary: 'cyan',
  success: 'emerald',
  warning: 'amber',
  destructive: 'red',
  info: 'blue',
};

export function getVariantColor(variant: Variant = 'primary'): string {
  return variantColorMap[variant] || 'cyan';
}
