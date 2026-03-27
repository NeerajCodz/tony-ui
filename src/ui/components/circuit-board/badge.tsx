import { cn } from '@/lib/utils';
import { BadgeBase, type BadgeBaseProps, type BadgeSize, type BadgeType } from '@/ui/components/_base/badge';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

const badgeVariants = cva(
  'inline-flex items-center rounded-none font-mono text-xs transition-all uppercase tracking-wider shadow-[0_0_5px_rgba(0,0,0,0)]',
  {
    variants: {
      type: {
        default: 'border border-[var(--cb-trace)] bg-[var(--cb-soldermask)] text-[var(--cb-trace-lit)] hover:border-[var(--cb-trace-lit)]',
        solid: 'border-transparent bg-[var(--cb-trace-lit)] text-[var(--cb-bg)] shadow-[0_0_8px_var(--cb-trace-lit)] hover:shadow-[0_0_12px_var(--cb-trace-lit)]',
        outline: 'border border-[var(--cb-trace-lit)] text-[var(--cb-trace-lit)] bg-transparent hover:bg-[var(--cb-trace-dim)]/10',
        ghost: 'border-transparent bg-transparent text-[var(--cb-trace-lit)] hover:text-[var(--cb-trace-lit)] hover:bg-[var(--cb-soldermask)]',
        soft: 'border-transparent bg-[var(--cb-trace)]/20 text-[var(--cb-trace-lit)]',
        subtle: 'border-transparent bg-[var(--cb-soldermask)] text-[var(--cb-trace-dim)]',
        neutral: 'border border-[var(--cb-trace-dim)] bg-[var(--cb-soldermask)] text-[var(--cb-trace-dim)]',
        inverted: 'bg-[var(--cb-trace-lit)] text-[var(--cb-bg)]',
        elevated: 'shadow-[0_0_10px_var(--cb-trace)] border border-[var(--cb-trace)] bg-[var(--cb-soldermask)]',
        tinted: 'bg-[var(--cb-trace)]/10 border border-[var(--cb-trace)]/30 text-[var(--cb-trace-lit)]',
        flat: 'bg-transparent border-0 text-[var(--cb-trace-lit)]',
        link: 'underline-offset-4 hover:underline text-[var(--cb-trace-lit)] p-0 h-auto',
        disabled: 'opacity-50 cursor-not-allowed border-dashed border-[var(--cb-trace-dim)] text-[var(--cb-trace-dim)]',
        unstyled: '',
      },
      variant: {
        default: '',
        destructive: 'border-red-500/50 text-red-500 bg-red-900/20 shadow-[0_0_5px_red]',
        success: 'border-green-500/50 text-green-500 bg-green-900/20 shadow-[0_0_5px_green]',
        warning: 'border-yellow-500/50 text-yellow-500 bg-yellow-900/20 shadow-[0_0_5px_yellow]',
        info: 'border-cyan-500/50 text-cyan-500 bg-cyan-900/20 shadow-[0_0_5px_cyan]',
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
        className: 'bg-red-600 text-white border-transparent shadow-[0_0_10px_red]',
      },
      {
        type: 'solid',
        variant: 'success',
        className: 'bg-green-600 text-white border-transparent shadow-[0_0_10px_green]',
      },
      {
        type: 'outline',
        variant: 'destructive',
        className: 'border-red-500 text-red-500 bg-transparent',
      },
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
