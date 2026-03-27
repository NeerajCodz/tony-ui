import { cn } from '@/lib/utils';
import { TextareaBase, type TextareaBaseProps } from '@/ui/components/_base/textarea';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

const textareaVariants = cva(
  'flex w-full rounded-none border font-mono px-3 py-2 text-sm shadow-sm placeholder:text-[var(--cb-trace-dim)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--cb-trace-lit)] focus-visible:shadow-[0_0_8px_var(--cb-trace-lit)] disabled:cursor-not-allowed disabled:opacity-50 uppercase tracking-wide',
  {
    variants: {
      type: {
        default: 'bg-[var(--cb-soldermask)] border-[var(--cb-trace)] text-[var(--cb-trace-lit)] focus-visible:border-[var(--cb-trace-lit)]',
        outline: 'bg-transparent border-[var(--cb-trace-lit)] text-[var(--cb-trace-lit)] focus-visible:bg-[var(--cb-trace-dim)]',
        ghost: 'bg-transparent border-transparent text-[var(--cb-trace-lit)] focus-visible:bg-[var(--cb-soldermask)]',
        soft: 'bg-[rgba(0,255,136,0.04)] border-[var(--cb-trace)] text-[var(--cb-trace-lit)]',
        subtle: 'bg-[var(--cb-soldermask)] border-transparent text-[var(--cb-trace-lit)]',
        neutral: 'bg-[var(--cb-soldermask)] border-[var(--cb-trace-dim)] text-[var(--cb-trace-dim)]',
        tinted: 'bg-[var(--cb-trace)]/10 border-[var(--cb-trace)]/30 text-[var(--cb-trace-lit)]',
        unstyled: '',
      },
      size: {
        sm: 'min-h-[60px] text-xs',
        md: 'min-h-[80px] text-sm',
        lg: 'min-h-[120px] text-base',
      },
      invalid: {
        true: 'border-red-500 text-red-500 focus-visible:ring-red-500 focus-visible:shadow-[0_0_8px_red]',
        false: '',
      }
    },
    defaultVariants: {
      type: 'default',
      size: 'md',
      invalid: false,
    },
  }
);

export interface TextareaProps extends Omit<TextareaBaseProps, 'type' | 'size'>, VariantProps<typeof textareaVariants> {
  type?: TextareaBaseProps['type'];
  size?: TextareaBaseProps['size'];
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, type, size, invalid, ...props }, ref) => {
    return (
      <TextareaBase
        ref={ref}
        type={type}
        size={size}
        invalid={invalid}
        className={cn(textareaVariants({ type, size, invalid: !!invalid, className }))}
        {...props}
      />
    );
  }
);
Textarea.displayName = 'Textarea';

export { Textarea };
