import { cn } from '@/lib/utils';
import { CheckboxBase, CheckboxIndicatorBase, type CheckboxBaseProps } from '@/ui/components/_base/checkbox';
import { cva, type VariantProps } from 'class-variance-authority';
import { Check } from 'lucide-react';
import * as React from 'react';

const checkboxVariants = cva(
  'peer h-4 w-4 shrink-0 rounded-none border ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all',
  {
    variants: {
      visualType: {
        default: 'border-[var(--cb-trace)] bg-[var(--cb-soldermask)] text-[var(--cb-trace-lit)] data-[state=checked]:bg-[var(--cb-trace-lit)] data-[state=checked]:text-[var(--cb-bg)] data-[state=checked]:border-[var(--cb-trace-lit)] data-[state=checked]:shadow-[0_0_8px_var(--cb-trace-lit)]',
        solid: 'border-transparent bg-[var(--cb-trace-dim)] text-[var(--cb-bg)] data-[state=checked]:bg-[var(--cb-trace-lit)]',
        outline: 'border-[var(--cb-trace-lit)] bg-transparent text-[var(--cb-trace-lit)] data-[state=checked]:bg-[var(--cb-trace-lit)] data-[state=checked]:text-[var(--cb-bg)]',
        tinted: 'border-[var(--cb-trace)]/50 bg-[var(--cb-trace)]/10 text-[var(--cb-trace-lit)] data-[state=checked]:bg-[var(--cb-trace-lit)] data-[state=checked]:text-[var(--cb-bg)]',
        soft: 'border-transparent bg-[var(--cb-soldermask)] text-[var(--cb-trace-lit)] data-[state=checked]:bg-[var(--cb-trace)]/20 data-[state=checked]:text-[var(--cb-trace-lit)]',
        neutral: 'border-[var(--cb-trace-dim)] bg-[var(--cb-soldermask)] text-[var(--cb-trace-dim)] data-[state=checked]:bg-[var(--cb-trace-dim)] data-[state=checked]:text-[var(--cb-bg)]',
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
        <Check className="h-3 w-3 stroke-[4]" />
      </CheckboxIndicatorBase>
    </CheckboxBase>
  )
);
Checkbox.displayName = 'Checkbox';

export { Checkbox };
