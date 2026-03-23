import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { LabelBase, type LabelBaseProps } from '@/ui/components/_base/label';
import { cn } from '@/lib/utils';

const labelVariants = cva(
  'font-mono text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
  {
    variants: {
      size: {
        sm: 'text-xs',
        md: 'text-sm',
        lg: 'text-base',
      },
      invalid: {
        true: 'text-red-500',
        false: 'text-[var(--text-primary)]',
      }
    },
    defaultVariants: {
      size: 'md',
      invalid: false,
    }
  }
);

export interface LabelProps extends LabelBaseProps, VariantProps<typeof labelVariants> {}

const Label = React.forwardRef<React.ComponentRef<typeof LabelBase>, LabelProps>(
  ({ className, size, invalid, ...props }, ref) => (
    <LabelBase
      ref={ref}
      size={size}
      invalid={invalid}
      className={cn(labelVariants({ size, invalid: !!invalid, className }))}
      {...props}
    />
  )
);
Label.displayName = 'Label';

export { Label };
