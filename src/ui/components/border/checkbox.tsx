import { cn } from '@/lib/utils';
import { CheckboxBase, CheckboxIndicatorBase, type CheckboxBaseProps } from '@/ui/components/_base/checkbox';
import { cva, type VariantProps } from 'class-variance-authority';
import { Check } from 'lucide-react';
import * as React from 'react';

const checkboxVariants = cva(
  'peer h-4 w-4 shrink-0 rounded-none border ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      visualType: {
        default: 'border-[var(--br-border-dim)] bg-[var(--br-bg)] data-[state=checked]:bg-[var(--br-accent)] data-[state=checked]:text-[var(--br-bg)] data-[state=checked]:border-[var(--br-accent)]',
        solid: 'border-transparent bg-[var(--br-surface)] data-[state=checked]:bg-[var(--br-accent)] data-[state=checked]:text-[var(--br-bg)]',
        outline: 'border-[var(--br-accent)] bg-transparent data-[state=checked]:bg-[var(--br-accent)] data-[state=checked]:text-[var(--br-bg)]',
        tinted: 'border-[var(--br-accent)]/20 bg-[var(--br-accent)]/10 data-[state=checked]:bg-[var(--br-accent)] data-[state=checked]:text-[var(--br-bg)]',
        soft: 'border-transparent bg-[var(--br-surface)] data-[state=checked]:bg-[var(--br-accent)]/20 data-[state=checked]:text-[var(--br-accent)]',
        neutral: 'border-[var(--br-border-dim)] bg-[var(--br-bg)] data-[state=checked]:bg-[var(--text-primary)] data-[state=checked]:text-[var(--br-bg)]',
        unstyled: '',
      },
      size: {
        sm: 'h-3.5 w-3.5',
        md: 'h-4 w-4',
        lg: 'h-5 w-5',
      }
    },
    defaultVariants: {
      visualType: 'default',
      size: 'md',
    },
  }
);

export interface CheckboxProps extends CheckboxBaseProps, VariantProps<typeof checkboxVariants> {}

const Checkbox = React.forwardRef<React.ComponentRef<typeof CheckboxBase>, CheckboxProps>(
  ({ className, visualType, size, ...props }, ref) => (
    <CheckboxBase
      ref={ref}
      visualType={visualType}
      size={size}
      className={cn(checkboxVariants({ visualType, size, className }))}
      {...props}
    >
      <CheckboxIndicatorBase className={cn('flex items-center justify-center text-current')}>
        <Check className="h-3 w-3 stroke-[3]" />
      </CheckboxIndicatorBase>
    </CheckboxBase>
  )
);
Checkbox.displayName = 'Checkbox';

export { Checkbox };
