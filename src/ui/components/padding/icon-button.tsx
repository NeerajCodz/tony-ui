import * as React from 'react';
import { IconButtonBase, type IconButtonBaseProps } from '../_base/icon-button';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

const iconButtonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-[8px] font-sans ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      visualType: {
        default: 'bg-[var(--pd-bg)] text-[var(--pd-text)] hover:bg-[var(--pd-bg)]/80',
        solid: 'bg-[rgba(85,112,255,0.15)] text-[var(--pd-text)] hover:bg-[rgba(85,112,255,0.25)]',
        outline: 'border border-[var(--pd-accent)] bg-transparent text-[var(--pd-text)] hover:bg-[var(--pd-accent)] hover:text-white',
        ghost: 'text-[var(--pd-text)] hover:bg-[var(--pd-bg)]/50',
        inverse: 'bg-[rgba(192,196,216,0.1)] text-[var(--pd-text)] hover:bg-[rgba(192,196,216,0.2)]',
        contrast: 'bg-[rgba(255,255,255,0.07)] text-white hover:bg-[rgba(255,255,255,0.15)]',
        soft: 'bg-[rgba(85,112,255,0.05)] text-[var(--pd-muted)] hover:bg-[rgba(85,112,255,0.1)] hover:text-[var(--pd-text)]',
        neutral: 'bg-[rgba(255,255,255,0.03)] text-[var(--pd-text)] hover:bg-[rgba(255,255,255,0.06)]',
        subtle: 'bg-transparent text-[var(--pd-muted)] hover:text-[var(--pd-text)]',
        elevated: 'bg-[var(--pd-bg)] text-[var(--pd-text)] shadow-sm hover:bg-[var(--pd-bg)]/85',
        flat: 'bg-transparent text-[var(--pd-text)] hover:bg-[rgba(255,255,255,0.04)]',
        tinted: 'bg-[rgba(85,112,255,0.22)] text-[var(--pd-text)] hover:bg-[rgba(85,112,255,0.28)]',
        link: 'text-[var(--pd-accent)] underline-offset-4 hover:underline',
        disabled: 'bg-[rgba(255,255,255,0.03)] text-[var(--pd-muted)] opacity-50 cursor-not-allowed',
        unstyled: '',
      },
      size: {
        xs: 'h-6 w-6 [&_svg]:h-3.5 [&_svg]:w-3.5',
        sm: 'h-8 w-8 [&_svg]:h-4 [&_svg]:w-4',
        md: 'h-10 w-10 [&_svg]:h-5 [&_svg]:w-5',
        lg: 'h-12 w-12 [&_svg]:h-6 [&_svg]:w-6',
        xl: 'h-14 w-14 [&_svg]:h-7 [&_svg]:w-7',
      },
      shape: {
        square: 'rounded-none',
        rounded: 'rounded-[8px]',
        circle: 'rounded-full',
      },
    },
    defaultVariants: {
      visualType: 'default',
      size: 'md',
      shape: 'rounded',
    },
  }
);

export interface IconButtonProps extends IconButtonBaseProps, VariantProps<typeof iconButtonVariants> {}

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className, visualType, size, shape, ...props }, ref) => (
    <IconButtonBase
      ref={ref}
      visualType={visualType}
      size={size}
      shape={shape}
      className={cn(iconButtonVariants({ visualType, size, shape, className }))}
      {...props}
    />
  )
);

IconButton.displayName = 'IconButton';

export { IconButton, iconButtonVariants };
