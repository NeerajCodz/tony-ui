import * as React from 'react';
import { BadgeBase, type BadgeBaseProps } from '../_base/badge';
import { cn } from '@/lib/utils';
import { X } from 'lucide-react';

export interface BadgeProps extends BadgeBaseProps {}

const getVisualTypeStyles = (type: string = 'default') => {
  switch (type) {
    case 'default':
      return 'bg-[var(--ra-surface)] border-2 border-[var(--ra-border)] text-[var(--ra-text)] shadow-[2px_2px_0_var(--ra-shadow)]';
    case 'solid':
      return 'bg-[var(--ra-accent)] border-2 border-[var(--ra-accent)] text-white font-bold shadow-[2px_2px_0_var(--ra-shadow-accent)]';
    case 'outline':
      return 'bg-transparent border-2 border-[var(--ra-accent)] text-[var(--ra-accent)] shadow-[2px_2px_0_var(--ra-accent)]';
    case 'ghost':
      return 'bg-transparent border-none text-[var(--text-secondary)] hover:bg-[var(--ra-surface)]';
    case 'inverse':
      return 'bg-[var(--ra-text)] border-2 border-[var(--ra-bg)] text-[var(--ra-bg)] font-bold shadow-[2px_2px_0_var(--ra-border)]';
    case 'contrast':
      return 'bg-[#000] border-2 border-[#fff] text-[#fff] font-bold shadow-[2px_2px_0_#fff]';
    case 'soft':
      return 'bg-[rgba(64,96,255,0.08)] border-2 border-[var(--ra-border)] text-[var(--ra-text)] shadow-[1px_1px_0_var(--ra-shadow)]';
    case 'neutral':
      return 'bg-[var(--ra-surface)] border-2 border-[var(--ra-border)] text-[var(--text-secondary)] shadow-[2px_2px_0_var(--ra-shadow)]';
    case 'subtle':
      return 'bg-[var(--ra-surface)]/50 border-none text-[var(--text-secondary)]';
    case 'elevated':
      return 'bg-[var(--ra-surface)] border-2 border-[var(--ra-border)] text-[var(--ra-text)] shadow-[4px_4px_0_var(--ra-shadow)]';
    case 'flat':
      return 'bg-transparent border-none text-[var(--ra-text)] p-0';
    case 'tinted':
      return 'bg-[var(--ra-accent)]/20 border-2 border-[var(--ra-accent)]/50 text-[var(--ra-text)] shadow-[2px_2px_0_var(--ra-shadow)]';
    case 'link':
      return 'bg-transparent border-none text-[var(--ra-accent)] hover:underline p-0';
    case 'disabled':
      return 'bg-[var(--ra-bg)] border-2 border-[var(--ra-border)]/50 text-[var(--text-muted)] opacity-50 shadow-none';
    case 'unstyled':
      return '';
    default:
      return 'bg-[var(--ra-surface)] border-2 border-[var(--ra-border)] text-[var(--ra-text)] shadow-[2px_2px_0_var(--ra-shadow)]';
  }
};

const getVariantStyles = (variant?: string) => {
    if (!variant) return '';
    switch (variant) {
        case 'destructive':
            return 'border-[var(--ra-destructive)] text-[var(--ra-destructive)] shadow-[2px_2px_0_var(--ra-destructive)] data-[type=solid]:bg-[var(--ra-destructive)] data-[type=solid]:text-white';
        case 'success':
            return 'border-green-500 text-green-500 shadow-[2px_2px_0_#22c55e] data-[type=solid]:bg-green-600 data-[type=solid]:text-white';
        case 'warning':
            return 'border-yellow-500 text-yellow-500 shadow-[2px_2px_0_#eab308] data-[type=solid]:bg-yellow-600 data-[type=solid]:text-white';
        default:
            return '';
    }
}

const getSizeStyles = (size: string = 'md') => {
  switch (size) {
    case 'sm': return 'h-6 px-2 text-[10px]';
    case 'md': return 'h-7 px-3 text-xs';
    case 'lg': return 'h-8 px-4 text-sm';
    default: return 'h-7 px-3 text-xs';
  }
};

export const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, type = 'default', variant, size = 'md', children, onRemove, removable, ...props }, ref) => {
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
          'inline-flex items-center justify-center font-mono uppercase tracking-wider transition-all duration-100 rounded-[4px]',
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
            className="ml-1 -mr-0.5 hover:bg-[var(--ra-bg)]/50 rounded-[2px] transition-colors focus:outline-none"
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
