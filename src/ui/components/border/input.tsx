import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { InputBase, type InputBaseProps } from '@/ui/components/_base/input';
import { cn } from '@/lib/utils';

const inputVariants = cva(
  'flex w-full rounded-none border px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--br-accent)] disabled:cursor-not-allowed disabled:opacity-50 font-mono placeholder:text-[var(--text-muted)]',
  {
    variants: {
      visualType: {
        default: 'bg-[var(--br-bg)] border-[var(--br-border-dim)] text-[var(--text-primary)] focus-visible:border-[var(--br-accent)]',
        outline: 'bg-transparent border-[var(--br-border-dim)] text-[var(--text-primary)] focus-visible:border-[var(--br-accent)]',
        ghost: 'bg-transparent border-transparent text-[var(--text-primary)] focus-visible:bg-[var(--br-surface)]',
        soft: 'bg-[rgba(108,142,255,0.05)] border-[var(--br-border-dim)] text-[var(--text-primary)]',
        subtle: 'bg-[var(--br-surface)] border-transparent text-[var(--text-primary)]',
        flat: 'bg-transparent border-0 text-[var(--text-primary)] p-0',
        neutral: 'bg-[var(--br-surface)] border-[var(--br-border-dim)] text-[var(--text-primary)]',
        elevated: 'bg-[var(--br-surface)] border-[var(--br-border-dim)] text-[var(--text-primary)] shadow-md',
        unstyled: '',
      },
      inputSize: {
        sm: 'h-7 text-xs',
        md: 'h-9',
        lg: 'h-11 text-base',
      },
      invalid: {
        true: 'border-red-500 text-red-500 focus-visible:ring-red-500',
        false: '',
      }
    },
    defaultVariants: {
      visualType: 'default',
      inputSize: 'md',
      invalid: false,
    },
  }
);

export interface InputProps extends Omit<InputBaseProps, 'visualType' | 'inputSize'>, VariantProps<typeof inputVariants> {
  visualType?: InputBaseProps['visualType'];
  inputSize?: InputBaseProps['inputSize'];
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, visualType, inputSize, invalid, ...props }, ref) => {
    return (
      <InputBase
        ref={ref}
        visualType={visualType}
        inputSize={inputSize}
        invalid={invalid}
        className={cn(inputVariants({ visualType, inputSize, invalid: !!invalid, className }))}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';

export { Input };
