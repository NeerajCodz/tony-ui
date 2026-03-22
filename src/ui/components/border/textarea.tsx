import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { TextareaBase, type TextareaBaseProps } from '@/ui/components/_base/textarea';
import { cn } from '@/lib/utils';

const textareaVariants = cva(
  'flex w-full rounded-none border px-3 py-2 text-sm shadow-sm font-mono placeholder:text-[var(--text-muted)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--br-accent)] disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      type: {
        default: 'bg-[var(--br-bg)] border-[var(--br-border-dim)] text-[var(--text-primary)] focus-visible:border-[var(--br-accent)]',
        outline: 'bg-transparent border-[var(--br-border-dim)] text-[var(--text-primary)] focus-visible:border-[var(--br-accent)]',
        ghost: 'bg-transparent border-transparent text-[var(--text-primary)] focus-visible:bg-[var(--br-surface)]',
        soft: 'bg-[rgba(108,142,255,0.05)] border-[var(--br-border-dim)] text-[var(--text-primary)]',
        subtle: 'bg-[var(--br-surface)] border-transparent text-[var(--text-primary)]',
        neutral: 'bg-[var(--br-surface)] border-[var(--br-border-dim)] text-[var(--text-primary)]',
        tinted: 'bg-[var(--br-accent)]/5 border-[var(--br-accent)]/20 text-[var(--text-primary)]',
        unstyled: '',
      },
      size: {
        sm: 'min-h-[60px] text-xs',
        md: 'min-h-[80px] text-sm',
        lg: 'min-h-[120px] text-base',
      },
      invalid: {
        true: 'border-red-500 focus-visible:ring-red-500 text-red-500',
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
