import type { ComponentType } from 'react';
import { Info, AlertTriangle, CheckCircle, AlertOctagon, Terminal, HelpCircle } from 'lucide-react';
import type { Variant } from '../types/common';

type IconLike = ComponentType<any>;
const fallbackIcon: IconLike = Terminal;

export const variantIcons: Partial<Record<Variant, IconLike>> = {
  default: Terminal,
  neutral: Terminal,
  primary: Info,
  success: CheckCircle,
  warning: AlertTriangle,
  destructive: AlertOctagon,
  info: HelpCircle,
  secondary: Info,
  accent: Info,
  inverse: Terminal,
  'danger-soft': AlertOctagon,
  'warning-soft': AlertTriangle,
  'success-soft': CheckCircle,
};

export function getVariantIcon(variant: Variant = 'primary') {
  return variantIcons[variant] ?? variantIcons.primary ?? fallbackIcon;
}

export const variantColorMap: Partial<Record<Variant, string>> = {
  default: 'cyan',
  neutral: 'slate',
  primary: 'cyan',
  success: 'emerald',
  warning: 'amber',
  destructive: 'red',
  info: 'blue',
  secondary: 'indigo',
  accent: 'violet',
  inverse: 'zinc',
  'danger-soft': 'rose',
  'warning-soft': 'yellow',
  'success-soft': 'green',
};

export function getVariantColor(variant: Variant = 'primary'): string {
  return variantColorMap[variant] ?? variantColorMap.primary ?? 'cyan';
}
