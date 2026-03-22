import * as React from 'react';
import { BadgeBase, type BadgeBaseProps } from '../_base/badge';
import { cn } from '@/lib/utils';
import { tacticalHudEffectsClass, type TacticalHudEffects, getBracketsStyle } from './_effects';
import { X } from 'lucide-react';

export interface BadgeProps extends BadgeBaseProps {
  effects?: TacticalHudEffects;
}

const getVisualTypeStyles = (type: string = 'default') => {
  switch (type) {
    case 'default':
      return 'bg-[var(--th-surface)] text-[var(--th-primary)]';
    case 'solid':
      return 'bg-[var(--th-primary)] text-[var(--th-bg)] font-bold';
    case 'outline':
      return 'bg-transparent text-[var(--th-primary)]';
    case 'ghost':
      return 'bg-transparent border-none text-[var(--th-muted)] hover:bg-[var(--th-surface)]';
    case 'inverse':
      return 'bg-[var(--th-primary)] text-[var(--th-bg)] font-bold';
    case 'contrast':
      return 'bg-[var(--th-bg)] text-[var(--th-secondary)] font-bold';
    case 'soft':
      return 'bg-[var(--th-primary)]/10 text-[var(--th-primary)]';
    case 'neutral':
      return 'bg-[var(--th-surface)] text-[var(--th-muted)]';
    case 'subtle':
      return 'bg-[var(--th-surface)]/50 border-none text-[var(--th-muted)]';
    case 'elevated':
      return 'bg-[var(--th-surface)] text-[var(--th-primary)] shadow-[0_2px_10px_rgba(0,0,0,0.5)]';
    case 'flat':
      return 'bg-transparent border-none text-[var(--th-primary)] p-0';
    case 'tinted':
      return 'bg-[var(--th-secondary)]/20 text-[var(--th-secondary)]';
    case 'link':
      return 'bg-transparent border-none text-[var(--th-primary)] hover:underline p-0 clip-path-none';
    case 'disabled':
      return 'bg-[var(--th-bg)] text-[var(--th-muted)] opacity-50';
    case 'unstyled':
      return '';
    default:
      return 'bg-[var(--th-surface)] text-[var(--th-primary)]';
  }
};

const getVariantStyles = (variant?: string) => {
    if (!variant) return '';
    switch (variant) {
        case 'destructive':
            return 'text-[var(--th-alert)] data-[type=solid]:bg-[var(--th-alert)] data-[type=solid]:text-white';
        case 'success':
            return 'text-green-500 data-[type=solid]:bg-green-900 data-[type=solid]:text-green-300';
        case 'warning':
            return 'text-yellow-500 data-[type=solid]:bg-yellow-900 data-[type=solid]:text-yellow-300';
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
    const isRemovable = removable || !!onRemove;
    
    // Apply brackets style for default and outline types
    // Use smaller brackets for badges
    const useBrackets = ['default', 'outline', 'neutral', 'soft'].includes(type || '');
    const smallBrackets = React.useMemo(() => getBracketsStyle('6px', '1px', '2px'), []);
    
    const componentStyle = (type !== 'unstyled' && type !== 'link' && useBrackets)
      ? { ...smallBrackets, ...style } 
      : style;

    return (
      <BadgeBase
        ref={ref}
        type={type}
        size={size}
        variant={variant}
        removable={removable}
        onRemove={onRemove}
        style={componentStyle}
        className={cn(tacticalHudEffectsClass(effects), 
          'inline-flex items-center justify-center font-sans uppercase tracking-wider transition-all duration-200',
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
            className="ml-1 -mr-0.5 hover:bg-[var(--th-bg)]/50 rounded transition-colors focus:outline-none"
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
