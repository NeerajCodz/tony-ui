export const VARIANT_OPTIONS = [
  'default',
  'primary',
  'secondary',
  'accent',
  'neutral',
  'info',
  'success',
  'warning',
  'destructive',
  'inverse',
  'danger-soft',
  'warning-soft',
  'success-soft',
] as const;

export type VariantOption = (typeof VARIANT_OPTIONS)[number];
