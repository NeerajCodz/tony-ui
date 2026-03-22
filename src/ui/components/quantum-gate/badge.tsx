import * as React from 'react';
import { BadgeBase, type BadgeBaseProps } from '../_base/badge';
import { cn } from '@/lib/utils';
import { quantumGateEffectsClass, type QuantumGateEffects } from './_effects';
import { X } from 'lucide-react';

export interface BadgeProps extends BadgeBaseProps {
  effects?: QuantumGateEffects;
}


const getVisualTypeStyles = (type: string = 'default') => {
  switch (type) {
    case 'default':
      return 'bg-(--qg-surface) border border-(--qg-border) text-(--text-primary)';
    case 'solid':
      return 'bg-(--qg-iris-2) border border-(--qg-iris-1) text-(--qg-iris-2) font-bold';
    case 'outline':
      return 'bg-transparent border border-(--qg-iris-1) text-(--qg-iris-1)';
    case 'ghost':
      return 'bg-transparent border-none text-(--text-secondary) hover:bg-(--qg-surface)';
    case 'inverse':
      return 'bg-(--qg-iris-2) border border-(--qg-bg) text-(--qg-bg) font-bold';
    case 'contrast':
      return 'bg-(--qg-iris-3) border border-(--qg-iris-3) text-white font-bold';
    case 'soft':
      return 'bg-(--qg-iris-1)/10 border border-(--qg-iris-1)/20 text-(--qg-iris-1)';
    case 'neutral':
      return 'bg-(--qg-surface) border border-(--qg-border) text-(--text-secondary)';
    case 'subtle':
      return 'bg-(--qg-surface)/50 border-none text-(--text-secondary)';
    case 'elevated':
      return 'bg-(--qg-surface) border border-(--qg-border) text-(--text-primary) shadow-[0_2px_10px_rgba(0,0,0,0.5)]';
    case 'flat':
      return 'bg-transparent border-none text-(--text-primary) p-0';
    case 'tinted':
      return 'bg-(--qg-iris-1)/20 border border-(--qg-iris-1)/30 text-(--qg-iris-2)';
    case 'link':
      return 'bg-transparent border-none text-(--qg-iris-1) hover:underline p-0 clip-path-none';
    case 'disabled':
      return 'bg-(--qg-bg) border border-(--qg-border)/50 text-(--text-muted) opacity-50';
    case 'unstyled':
      return '';
    default:
      return 'bg-(--qg-surface) border border-(--qg-border) text-(--text-primary)';
  }
};

const getVariantStyles = (variant?: string) => {
    if (!variant) return '';
    switch (variant) {
        case 'destructive':
            return 'border-(--qg-iris-3) text-(--qg-iris-3) data-[type=solid]:bg-(--qg-iris-3) data-[type=solid]:text-white';
        case 'success':
            return 'border-green-500 text-green-500 data-[type=solid]:bg-green-900 data-[type=solid]:text-green-300';
        case 'warning':
            return 'border-yellow-500 text-yellow-500 data-[type=solid]:bg-yellow-900 data-[type=solid]:text-yellow-300';
        default:
            return '';
    }
}

const getSizeStyles = (size: string = 'md') => {
  switch (size) {
    case 'sm': return 'h-5 px-2 text-[10px] ';
    case 'md': return 'h-6 px-3 text-xs ';
    case 'lg': return 'h-7 px-4 text-sm ';
    default: return 'h-6 px-3 text-xs ';
  }
};

export const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, effects = 'on', type = 'default', variant, size = 'md', style, children, onRemove, removable, ...props }, ref) => {
    // Merge custom style with clip-path, unless unstyled or link
    const componentStyle = (type !== 'unstyled' && type !== 'link')
      ? { '--fold': '6px', ...style } as React.CSSProperties
      : style;

    const isRemovable = removable || !!onRemove;

    return (
      <BadgeBase
        ref={ref}
        type={type}
        size={size}
        variant={variant}
        removable={removable}
        onRemove={onRemove}
        style={componentStyle}
        className={cn(quantumGateEffectsClass(effects), 
          'inline-flex items-center justify-center font-sans uppercase tracking-wider transition-all duration-200',
          type !== 'unstyled' && type !== 'link' && '[clip-path:polygon(var(--fold)_0%,100%_0%,100%_calc(100%-var(--fold)),calc(100%-var(--fold))_100%,0%_100%,0%_var(--fold))]',
          getVisualTypeStyles(type),
          getVariantStyles(variant),
          getSizeStyles(size),
          className
        )}
        {...props}
      >
        {children}
        {isRemovable && (
          <button
            type="button"
            onClick={onRemove}
            className="ml-1 -mr-0.5 hover:bg-[var(--qg-bg)]/50 rounded transition-colors focus:outline-none"
          >
            <X className="h-3 w-3" />
            <span className="sr-only">Remove</span>
          </button>
        )}
      </BadgeBase>
    );
  }
);
Badge.displayName = 'Badge';
