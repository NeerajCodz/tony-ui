import * as React from 'react';
import { 
    FieldBase, 
    FieldLabelBase, 
    FieldDescriptionBase, 
    FieldErrorBase, 
    FieldControlBase,
    type FieldBaseProps,
    type FieldLabelBaseProps,
    type FieldDescriptionBaseProps,
    type FieldErrorBaseProps,
    type FieldControlBaseProps
} from '../_base/field';
import { cn } from '@/lib/utils';

export interface FieldProps extends FieldBaseProps {}
export interface FieldLabelProps extends FieldLabelBaseProps {
    size?: 'sm' | 'md' | 'lg';
}
export interface FieldDescriptionProps extends FieldDescriptionBaseProps {}
export interface FieldErrorProps extends FieldErrorBaseProps {}
export interface FieldControlProps extends FieldControlBaseProps {}

const getSizeStyles = (size: string = 'md') => {
    switch (size) {
        case 'sm': return 'gap-1.5';
        case 'md': return 'gap-2';
        case 'lg': return 'gap-3';
        default: return 'gap-2';
    }
}

export const Field = React.forwardRef<HTMLDivElement, FieldProps>(
  ({ className, orientation = 'vertical', size = 'md', ...props }, ref) => {
    return (
      <FieldBase
        ref={ref}
        orientation={orientation}
        size={size}
        className={cn(
            'flex w-full group/field',
            orientation === 'vertical' ? 'flex-col' : 'flex-row items-center',
            getSizeStyles(size),
            className
        )}
        {...props}
      />
    );
  }
);
Field.displayName = 'Field';

export const FieldLabel = React.forwardRef<HTMLLabelElement, FieldLabelProps>(
  ({ className, size = 'md', ...props }, ref) => {
    const sizeClass = size === 'sm' ? 'text-xs' : size === 'lg' ? 'text-base' : 'text-sm';
    return (
      <FieldLabelBase
        ref={ref}
        className={cn(
            'font-mono font-bold uppercase tracking-wider text-[var(--text-secondary)] data-[disabled]:opacity-70 group-focus-within/field:text-[var(--ac-accent)] transition-colors',
            sizeClass,
            className
        )}
        {...props}
      />
    );
  }
);
FieldLabel.displayName = 'FieldLabel';

export const FieldDescription = React.forwardRef<HTMLParagraphElement, FieldDescriptionProps>(
  ({ className, ...props }, ref) => {
    return (
      <FieldDescriptionBase
        ref={ref}
        className={cn('text-[0.8rem] text-[var(--text-muted)] font-mono', className)}
        {...props}
      />
    );
  }
);
FieldDescription.displayName = 'FieldDescription';

export const FieldError = React.forwardRef<HTMLParagraphElement, FieldErrorProps>(
  ({ className, ...props }, ref) => {
    return (
      <FieldErrorBase
        ref={ref}
        className={cn('text-[0.8rem] font-medium text-[var(--ac-destructive)] font-mono flex items-center gap-1 before:content-[">"] before:mr-1', className)}
        {...props}
      />
    );
  }
);
FieldError.displayName = 'FieldError';

export const FieldControl = React.forwardRef<HTMLDivElement, FieldControlProps>(
  ({ className, ...props }, ref) => {
    return (
      <FieldControlBase
        ref={ref}
        className={cn('relative w-full', className)}
        {...props}
      />
    );
  }
);
FieldControl.displayName = 'FieldControl';
