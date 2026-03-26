import type { VariantColors } from '../types/common';

const COLOR_TOKEN_MAP: Readonly<Record<string, string>> = {
  'slate-100': '#f1f5f9',
  'slate-200': '#e2e8f0',
  'slate-300': '#cbd5e1',
  'slate-400': '#94a3b8',
  'slate-500': '#64748b',
  'slate-600': '#475569',
  'slate-700': '#334155',
  'slate-800': '#1e293b',
  'red-50': '#fef2f2',
  'red-100': '#fee2e2',
  'red-300': '#fca5a5',
  'red-400': '#f87171',
  'red-500': '#ef4444',
  'red-600': '#dc2626',
  'red-700': '#b91c1c',
  'red-800': '#991b1b',
  'red-900': '#7f1d1d',
  'green-50': '#f0fdf4',
  'green-100': '#dcfce7',
  'green-300': '#86efac',
  'green-400': '#4ade80',
  'green-500': '#22c55e',
  'green-600': '#16a34a',
  'emerald-600': '#059669',
  'emerald-800': '#065f46',
  'emerald-900': '#064e3b',
  'yellow-50': '#fefce8',
  'yellow-100': '#fef9c3',
  'yellow-300': '#fde047',
  'yellow-400': '#facc15',
  'yellow-500': '#eab308',
  'yellow-600': '#ca8a04',
  'amber-600': '#d97706',
  'amber-800': '#92400e',
  'amber-900': '#78350f',
  'blue-600': '#2563eb',
  'blue-800': '#1e40af',
  'blue-900': '#1e3a8a',
  'cyan-50': '#ecfeff',
  'cyan-100': '#cffafe',
  'cyan-300': '#67e8f9',
  'cyan-400': '#22d3ee',
  'cyan-500': '#06b6d4',
  'cyan-600': '#0891b2',
};

const CSS_VAR_REGEX = /var\(\s*--([a-zA-Z0-9-]+)\s*(?:,\s*([^)]+)\s*)?\)/g;

export function resolveColorToken(value?: string): string | undefined {
  if (typeof value !== 'string') {
    return value;
  }

  return value.replace(CSS_VAR_REGEX, (_, token: string, fallback?: string) => {
    const mapped = COLOR_TOKEN_MAP[token];
    if (mapped) {
      return mapped;
    }
    if (fallback) {
      return fallback.trim();
    }
    return `var(--${token})`;
  });
}

export function normalizeColorValue<T>(value: T): T {
  if (typeof value === 'string') {
    return resolveColorToken(value) as T;
  }

  if (Array.isArray(value)) {
    return value.map((item) => normalizeColorValue(item)) as T;
  }

  if (value && typeof value === 'object') {
    const entries = Object.entries(value as Record<string, unknown>).map(([key, nested]) => [
      key,
      normalizeColorValue(nested),
    ]);
    return Object.fromEntries(entries) as T;
  }

  return value;
}

export function normalizeVariantColors(colors?: VariantColors | null): VariantColors {
  return normalizeColorValue(colors ?? {}) as VariantColors;
}

export { COLOR_TOKEN_MAP };
