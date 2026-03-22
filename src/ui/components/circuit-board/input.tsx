import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { InputBase, type InputBaseProps } from '@/ui/components/_base/input';
import { cn } from '@/lib/utils';

const inputVariants = cva(
  'flex w-full rounded-none border px-3 py-1 text-sm shadow-sm transition-all file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--cb-trace-lit)] focus-visible:shadow-[0_0_8px_var(--cb-trace-lit)] disabled:cursor-not-allowed disabled:opacity-50 font-mono placeholder:text-[var(--cb-trace-dim)] uppercase tracking-[0.1em]',
  {
    variants: {
      visualType: {
        default: 'bg-[var(--cb-soldermask)] border-[var(--cb-trace)] text-[var(--cb-trace-lit)] focus-visible:border-[var(--cb-trace-lit)]',
        outline: 'bg-transparent border-[var(--cb-trace-lit)] text-[var(--cb-trace-lit)] focus-visible:bg-[var(--cb-trace-dim)]',
        ghost: 'bg-transparent border-transparent text-[var(--cb-trace-lit)] focus-visible:bg-[var(--cb-soldermask)]',
        soft: 'bg-[rgba(0,255,136,0.04)] border-[var(--cb-trace)] text-[var(--cb-trace-lit)]',
        subtle: 'bg-[var(--cb-soldermask)] border-transparent text-[var(--cb-trace-lit)]',
        flat: 'bg-transparent border-0 text-[var(--cb-trace-lit)] p-0',
        neutral: 'bg-[var(--cb-soldermask)] border-[var(--cb-trace-dim)] text-[var(--cb-trace-lit)]',
        elevated: 'bg-[var(--cb-soldermask)] border-[var(--cb-trace)] text-[var(--cb-trace-lit)] shadow-[0_0_10px_var(--cb-trace)]',
        unstyled: '',
      },
      inputSize: {
        sm: 'h-7 text-xs',
        md: 'h-9',
        lg: 'h-11 text-base',
      },
      invalid: {
        true: 'border-red-500 text-red-500 focus-visible:ring-red-500 focus-visible:shadow-[0_0_8px_red]',
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
