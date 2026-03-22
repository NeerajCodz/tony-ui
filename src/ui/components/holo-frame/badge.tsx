import * as React from 'react';
import { BadgeBase, type BadgeBaseProps } from '../_base/badge';
import { cn } from '@/lib/utils';
import { holoFrameEffectsClass, type HoloFrameEffects } from './_effects';
import { X } from 'lucide-react';

export interface BadgeProps extends BadgeBaseProps {
  effects?: HoloFrameEffects;
}

const getVisualTypeStyles = (type: string = 'default') => {
  switch (type) {
    case 'default':
      return 'bg-[var(--hf-surface)] border border-[var(--hf-border-dim)] text-[var(--hf-text)]';
    case 'solid':
      return 'bg-[var(--hf-scanline)] border border-[var(--hf-border-main)] text-[var(--hf-scanline)] font-bold';
    case 'outline':
      return 'bg-transparent border border-[var(--hf-border-main)] text-[var(--hf-border-main)]';
    case 'ghost':
      return 'bg-transparent border-none text-[var(--hf-text)] hover:bg-[var(--hf-surface)]';
    case 'inverse':
      return 'bg-[var(--hf-scanline)] border border-[var(--hf-bg)] text-[var(--hf-bg)] font-bold';
    case 'contrast':
      return 'bg-[var(--hf-chromatic-r)] border border-[var(--hf-chromatic-r)] text-white font-bold';
    case 'soft':
      return 'bg-[var(--hf-border-main)]/10 border border-[var(--hf-border-main)]/20 text-[var(--hf-border-main)]';
    case 'neutral':
      return 'bg-[var(--hf-surface)] border border-[var(--hf-border-dim)] text-[var(--hf-text)]';
    case 'subtle':
      return 'bg-[var(--hf-surface)]/50 border-none text-[var(--hf-text)]';
    case 'elevated':
      return 'bg-[var(--hf-surface)] border border-[var(--hf-border-dim)] text-[var(--hf-text)] shadow-[0_2px_10px_rgba(0,0,0,0.5)]';
    case 'flat':
      return 'bg-transparent border-none text-[var(--hf-text)] p-0';
    case 'tinted':
      return 'bg-[var(--hf-border-main)]/20 border border-[var(--hf-border-main)]/30 text-[var(--hf-scanline)]';
    case 'link':
      return 'bg-transparent border-none text-[var(--hf-border-main)] hover:underline p-0 clip-path-none';
    case 'disabled':
      return 'bg-[var(--hf-bg)] border border-[var(--hf-border-dim)]/50 text-[var(--hf-text)] opacity-50';
    case 'unstyled':
      return '';
    default:
      return 'bg-[var(--hf-surface)] border border-[var(--hf-border-dim)] text-[var(--hf-text)]';
  }
};

const getVariantStyles = (variant?: string) => {
    if (!variant) return '';
    switch (variant) {
        case 'destructive':
            return 'border-[var(--hf-chromatic-r)] text-[var(--hf-chromatic-r)] data-[type=solid]:bg-[var(--hf-chromatic-r)] data-[type=solid]:text-white';
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

    const isRemovable = removable || !!onRemove;

    return (
      <BadgeBase
        ref={ref}
        type={type}
        size={size}
        variant={variant}
        removable={removable}
        onRemove={onRemove}
        style={style}
        className={cn(holoFrameEffectsClass(effects), 
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
            className="ml-1 -mr-0.5 hover:bg-[var(--hf-bg)]/50 rounded transition-colors focus:outline-none"
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
