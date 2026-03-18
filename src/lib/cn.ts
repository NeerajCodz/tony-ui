/**
 * Utility to combine classnames
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

/**
 * Get variant styles
 */
export const variantStyles = {
  default: 'bg-white text-black',
  destructive: 'bg-red-600 text-white hover:bg-red-700',
  warning: 'bg-yellow-500 text-black hover:bg-yellow-600',
  success: 'bg-green-600 text-white hover:bg-green-700',
  accent: 'bg-purple-600 text-white hover:bg-purple-700',
  outline: 'border border-gray-300 bg-transparent text-black hover:bg-gray-50',
  solid: 'bg-gray-900 text-white hover:bg-gray-800',
  ghost: 'bg-transparent text-gray-700 hover:bg-gray-100',
  secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300',
} as const;

export const sizeStyles = {
  sm: 'px-2 py-1 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
  xl: 'px-8 py-4 text-xl',
} as const;
