import * as React from 'react';
import { FieldBase, FieldLabelBase, FieldDescriptionBase, FieldErrorBase, FieldControlBase, type FieldBaseProps, type FieldLabelBaseProps, type FieldDescriptionBaseProps, type FieldErrorBaseProps, type FieldControlBaseProps } from '../_base/field';
import { cn } from '@/lib/utils';
import { tacticalHudEffectsClass, type TacticalHudEffects } from './_effects';

export interface FieldProps extends FieldBaseProps {
  effects?: TacticalHudEffects;
}
export interface FieldLabelProps extends FieldLabelBaseProps {
    size?: 'sm' | 'md' | 'lg';

  effects?: TacticalHudEffects;
}
export interface FieldDescriptionProps extends FieldDescriptionBaseProps {
  effects?: TacticalHudEffects;
}
export interface FieldErrorProps extends FieldErrorBaseProps {
  effects?: TacticalHudEffects;
}
export interface FieldControlProps extends FieldControlBaseProps {
  effects?: TacticalHudEffects;
}

const getSizeStyles = (size: string = 'md') => {
    switch (size) {
        case 'sm': return 'gap-1.5';
        case 'md': return 'gap-2';
        case 'lg': return 'gap-3';
        default: return 'gap-2';
    }
}

export const Field = React.forwardRef<HTMLDivElement, FieldProps>(
  ({ className, effects = 'on', orientation = 'vertical', size = 'md', ...props }, ref) => {
    return (
      <FieldBase
        ref={ref}
        orientation={orientation}
        size={size}
        className={cn(tacticalHudEffectsClass(effects), 
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
  ({ className, effects = 'on', size = 'md', ...props }, ref) => {
    const sizeClass = size === 'sm' ? 'text-xs' : size === 'lg' ? 'text-base' : 'text-sm';
    return (
      <FieldLabelBase
        ref={ref}
        className={cn(tacticalHudEffectsClass(effects), 
            'font-sans font-bold uppercase tracking-wider text-[var(--text-secondary)] data-[disabled]:opacity-70 group-focus-within/field:text-[var(--th-plasma-1)] transition-colors',
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
  ({ className, effects = 'on', ...props }, ref) => {
    return (
      <FieldDescriptionBase
        ref={ref}
        className={cn(tacticalHudEffectsClass(effects), 'text-[0.8rem] text-[var(--text-muted)] font-sans', className)}
        {...props}
      />
    );
  }
);
FieldDescription.displayName = 'FieldDescription';

export const FieldError = React.forwardRef<HTMLParagraphElement, FieldErrorProps>(
  ({ className, effects = 'on', ...props }, ref) => {
    return (
      <FieldErrorBase
        ref={ref}
        className={cn(tacticalHudEffectsClass(effects), 'text-[0.8rem] font-medium text-[var(--th-plasma-3)] font-sans flex items-center gap-1 before:content-[">"] before:mr-1', className)}
        {...props}
      />
    );
  }
);
FieldError.displayName = 'FieldError';

export const FieldControl = React.forwardRef<HTMLDivElement, FieldControlProps>(
  ({ className, effects = 'on', ...props }, ref) => {
    return (
      <FieldControlBase
        ref={ref}
        className={cn(tacticalHudEffectsClass(effects), 'relative w-full', className)}
        {...props}
      />
    );
  }
);
FieldControl.displayName = 'FieldControl';
