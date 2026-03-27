import { cn } from '@/lib/utils';
import * as React from 'react';
import { BadgeBase, type BadgeBaseProps } from '../_base/badge';

export interface BadgeProps extends BadgeBaseProps {}

const getBadgeStyles = (type: string = 'default') => {
  switch (type) {
    case 'default':
      return 'border-transparent bg-[var(--df-surface)] text-[var(--df-text)] border border-[var(--df-border)] hover:bg-[var(--df-surface)]/80';
    case 'solid':
      return 'border-transparent bg-[var(--df-accent)] text-white hover:bg-[var(--df-accent)]/80';
    case 'outline':
      return 'text-[var(--df-text)] border border-[var(--df-border)] hover:bg-[var(--df-surface)]'; // Outline usually has border
    case 'ghost':
        return 'border-transparent bg-transparent text-[var(--df-text)] hover:bg-[var(--df-surface)]';
    case 'soft':
        return 'border-transparent bg-[var(--df-accent)]/10 text-[var(--df-accent)] hover:bg-[var(--df-accent)]/20';
    case 'tinted':
        return 'border-transparent bg-[var(--df-accent)]/20 text-[var(--df-accent)] border border-[var(--df-accent)]/30';
    case 'neutral':
        return 'border-transparent bg-[var(--df-surface)] text-[var(--df-muted)] border border-[var(--df-border)]';
    case 'destructive': // Mapping variant to type if user uses type="destructive"? No, base has 'variant' prop.
        // But type includes 'solid', 'outline' etc.
        // We should handle variants via data-variant in CSS or here.
        // Let's stick to visualType styles here.
        return 'border-transparent bg-[var(--df-surface)] text-[var(--df-text)]';
    case 'unstyled':
        return '';
    default:
      return 'border-transparent bg-[var(--df-surface)] text-[var(--df-text)] border border-[var(--df-border)]';
  }
};

const getVariantStyles = (variant?: string) => {
    if (!variant) return '';
    switch (variant) {
        case 'destructive':
            return 'data-[type=solid]:bg-red-500 data-[type=soft]:bg-red-500/10 data-[type=soft]:text-red-500 data-[type=outline]:text-red-500 data-[type=outline]:border-red-500';
        case 'success':
            return 'data-[type=solid]:bg-green-500 data-[type=soft]:bg-green-500/10 data-[type=soft]:text-green-500';
        case 'warning':
            return 'data-[type=solid]:bg-yellow-500 data-[type=soft]:bg-yellow-500/10 data-[type=soft]:text-yellow-500';
        default:
            return '';
    }
}

const getSizeStyles = (size: string = 'md') => {
  switch (size) {
    case 'sm': return 'h-4 px-1.5 text-[10px]';
    case 'md': return 'h-5 px-2.5 text-xs';
    case 'lg': return 'h-6 px-3 text-sm';
    default: return 'h-5 px-2.5 text-xs';
  }
};

export const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, type = 'default', variant, size = 'md', ...props }, ref) => {
    return (
      <BadgeBase
        ref={ref}
        type={type}
        variant={variant}
        size={size}
        className={cn(
          'inline-flex items-center rounded-full font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--df-accent)] focus:ring-offset-2',
          getBadgeStyles(type),
          getVariantStyles(variant),
          getSizeStyles(size),
          className
        )}
        {...props}
      />
    );
  }
);
Badge.displayName = 'Badge';
