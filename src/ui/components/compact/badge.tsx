import * as React from 'react';
import { BadgeBase, type BadgeBaseProps } from '../_base/badge';
import { cn } from '@/lib/utils';
import { X } from 'lucide-react';

export interface BadgeProps extends BadgeBaseProps {}

const getVisualTypeStyles = (type: string = 'default') => {
  switch (type) {
    case 'default':
      return 'bg-[var(--cp-bg)] border border-[var(--cp-border)] text-[var(--text-primary)]';
    case 'solid':
      return 'bg-[var(--cp-accent)] border border-[var(--cp-accent)] text-[var(--cp-accent)] font-bold';
    case 'outline':
      return 'bg-transparent border border-[var(--cp-accent)] text-[var(--cp-accent)]';
    case 'ghost':
      return 'bg-transparent border-none text-[var(--text-secondary)] hover:bg-[var(--cp-bg)]';
    case 'inverse':
      return 'bg-[var(--cp-accent)] border border-[var(--cp-bg)] text-[var(--cp-bg)] font-bold';
    case 'contrast':
      return 'bg-[var(--cp-accent)] border border-[var(--cp-accent)] text-white font-bold';
    case 'soft':
      return 'bg-[var(--cp-accent)]/10 border border-[var(--cp-accent)]/20 text-[var(--cp-accent)]';
    case 'neutral':
      return 'bg-[var(--cp-bg)] border border-[var(--cp-border)] text-[var(--text-secondary)]';
    case 'subtle':
      return 'bg-[var(--cp-bg)]/50 border-none text-[var(--text-secondary)]';
    case 'elevated':
      return 'bg-[var(--cp-bg)] border border-[var(--cp-border)] text-[var(--text-primary)] shadow-[0_2px_10px_rgba(0,0,0,0.5)]';
    case 'flat':
      return 'bg-transparent border-none text-[var(--text-primary)] p-0';
    case 'tinted':
      return 'bg-[var(--cp-accent)]/20 border border-[var(--cp-accent)]/30 text-[var(--cp-accent)]';
    case 'link':
      return 'bg-transparent border-none text-[var(--cp-accent)] hover:underline p-0';
    case 'disabled':
      return 'bg-[var(--cp-bg)] border border-[var(--cp-border)]/50 text-[var(--text-muted)] opacity-50';
    case 'unstyled':
      return '';
    default:
      return 'bg-[var(--cp-bg)] border border-[var(--cp-border)] text-[var(--text-primary)]';
  }
};

const getVariantStyles = (variant?: string) => {
    if (!variant) return '';
    switch (variant) {
        case 'destructive':
            return 'border-[var(--cp-accent)] text-[var(--cp-accent)] data-[type=solid]:bg-[var(--cp-accent)] data-[type=solid]:text-white';
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
  ({ className, type = 'default', variant, size = 'md', style, children, onRemove, removable, ...props }, ref) => {
    // Merge custom style with clip-path, unless unstyled or link
    

    const isRemovable = removable || !!onRemove;

    return (
      <BadgeBase
        ref={ref}
        type={type}
        size={size}
        variant={variant}
        removable={removable}
        onRemove={onRemove}
        className={cn(
          'inline-flex items-center justify-center font-mono  tracking-normal transition-all duration-75',
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
            className="ml-1 -mr-0.5 hover:bg-[var(--cp-bg)]/50 rounded-none transition-colors focus:outline-none"
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
