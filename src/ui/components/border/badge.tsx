import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { BadgeBase, type BadgeBaseProps, type BadgeType, type BadgeSize } from '@/ui/components/_base/badge';
import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center rounded-none font-mono text-xs transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--br-accent)] focus:ring-offset-2',
  {
    variants: {
      type: {
        default: 'border border-[var(--br-border-dim)] bg-[var(--br-surface)] text-[var(--text-secondary)]',
        solid: 'border-transparent bg-[var(--br-accent)] text-[var(--br-bg)] hover:bg-[var(--br-accent)]/80',
        outline: 'border border-[var(--br-accent)] text-[var(--br-accent)] bg-transparent hover:bg-[var(--br-accent)]/10',
        ghost: 'border-transparent bg-transparent text-[var(--text-primary)] hover:bg-[var(--br-surface)]',
        soft: 'border-transparent bg-[var(--br-accent)]/10 text-[var(--br-accent)] hover:bg-[var(--br-accent)]/20',
        subtle: 'border-transparent bg-[var(--br-surface)] text-[var(--text-muted)]',
        neutral: 'border border-[var(--br-border-dim)] bg-[var(--br-surface)] text-[var(--text-muted)]',
        inverted: 'bg-[var(--text-primary)] text-[var(--br-bg)]',
        elevated: 'shadow-md border border-[var(--br-border-dim)] bg-[var(--br-surface)]',
        tinted: 'bg-[var(--br-accent)]/20 border border-[var(--br-accent)]/30 text-[var(--br-accent)]',
        flat: 'bg-transparent border-0 text-[var(--text-primary)]',
        link: 'underline-offset-4 hover:underline text-[var(--br-accent)] p-0 h-auto',
        disabled: 'opacity-50 cursor-not-allowed bg-[var(--br-surface)] text-[var(--text-muted)]',
        unstyled: '',
      },
      variant: {
        default: '',
        destructive: 'border-red-500/50 text-red-500 bg-red-500/10 hover:bg-red-500/20',
        success: 'border-green-500/50 text-green-500 bg-green-500/10 hover:bg-green-500/20',
        warning: 'border-yellow-500/50 text-yellow-500 bg-yellow-500/10 hover:bg-yellow-500/20',
        info: 'border-blue-500/50 text-blue-500 bg-blue-500/10 hover:bg-blue-500/20',
      },
      size: {
        sm: 'h-5 px-1.5 text-[10px]',
        md: 'h-6 px-2.5 text-xs',
        lg: 'h-7 px-3 text-sm',
      },
    },
    defaultVariants: {
      type: 'default',
      size: 'md',
    },
    compoundVariants: [
      {
        type: 'solid',
        variant: 'destructive',
        className: 'bg-red-600 text-white border-transparent hover:bg-red-700',
      },
      {
        type: 'solid',
        variant: 'success',
        className: 'bg-green-600 text-white border-transparent hover:bg-green-700',
      },
      {
        type: 'outline',
        variant: 'destructive',
        className: 'border-red-500 text-red-500 bg-transparent',
      },
      // Add more compound variants as needed for specific type+variant combos
    ]
  }
);

type BadgeVariant = Exclude<NonNullable<VariantProps<typeof badgeVariants>['variant']>, null | undefined>;
type BadgeTypeVariant = Exclude<NonNullable<VariantProps<typeof badgeVariants>['type']>, null | undefined>;
type BadgeSizeVariant = Exclude<NonNullable<VariantProps<typeof badgeVariants>['size']>, null | undefined>;

const toBadgeTypeVariant = (type?: BadgeType): BadgeTypeVariant | undefined =>
  type === 'contrast' ? 'default' : (type as BadgeTypeVariant | undefined);

const toBadgeSizeVariant = (size?: BadgeSize): BadgeSizeVariant | undefined => size as BadgeSizeVariant | undefined;

export interface BadgeProps extends BadgeBaseProps {
  variant?: BadgeVariant;
}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, type, variant, size, ...props }, ref) => {
    return (
      <BadgeBase
        ref={ref}
        type={type}
        variant={variant}
        size={size}
        className={cn(
          badgeVariants({
            type: toBadgeTypeVariant(type),
            variant,
            size: toBadgeSizeVariant(size),
            className,
          })
        )}
        {...props}
      />
    );
  }
);
Badge.displayName = 'Badge';

export { Badge };
