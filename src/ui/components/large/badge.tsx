import * as React from 'react';
import { BadgeBase, type BadgeBaseProps } from '../_base/badge';
import { cn } from '@/lib/utils';
import { X } from 'lucide-react';

export interface BadgeProps extends BadgeBaseProps {}

const getVisualTypeStyles = (type: string = 'default') => {
  switch (type) {
    case 'default':
      return 'bg-[var(--lg-surface)] border border-[var(--lg-border)] text-[var(--lg-text)]';
    case 'solid':
      return 'bg-[var(--lg-accent)] border border-[var(--lg-accent)] text-white font-bold';
    case 'outline':
      return 'bg-transparent border-2 border-[var(--lg-accent)] text-[var(--lg-accent)]';
    case 'ghost':
      return 'bg-transparent border-none text-[var(--text-secondary)] hover:bg-[var(--lg-surface)]';
    case 'inverse':
      return 'bg-[var(--lg-text)] border border-[var(--lg-bg)] text-[var(--lg-bg)] font-bold';
    case 'contrast':
      return 'bg-white border border-white text-black font-bold';
    case 'soft':
      return 'bg-[var(--lg-accent)]/10 border border-[var(--lg-accent)]/20 text-[var(--lg-accent)]';
    case 'neutral':
      return 'bg-[var(--lg-surface)] border border-[var(--lg-border)] text-[var(--text-secondary)]';
    case 'subtle':
      return 'bg-[var(--lg-surface)]/50 border-none text-[var(--text-secondary)]';
    case 'elevated':
      return 'bg-[var(--lg-surface)] border border-[var(--lg-border)] text-[var(--lg-text)] shadow-md';
    case 'flat':
      return 'bg-transparent border-none text-[var(--lg-text)] p-0';
    case 'tinted':
      return 'bg-[var(--lg-accent)]/20 border border-[var(--lg-accent)]/30 text-[var(--lg-text)]';
    case 'link':
      return 'bg-transparent border-none text-[var(--lg-accent)] hover:underline p-0';
    case 'disabled':
      return 'bg-[var(--lg-bg)] border border-[var(--lg-border)]/50 text-[var(--text-muted)] opacity-50';
    case 'unstyled':
      return '';
    default:
      return 'bg-[var(--lg-surface)] border border-[var(--lg-border)] text-[var(--lg-text)]';
  }
};

const getVariantStyles = (variant?: string) => {
    if (!variant) return '';
    switch (variant) {
        case 'destructive':
            return 'border-red-500 text-red-500 data-[type=solid]:bg-red-600 data-[type=solid]:text-white';
        case 'success':
            return 'border-green-500 text-green-500 data-[type=solid]:bg-green-600 data-[type=solid]:text-white';
        case 'warning':
            return 'border-yellow-500 text-yellow-500 data-[type=solid]:bg-yellow-600 data-[type=solid]:text-white';
        default:
            return '';
    }
}

const getSizeStyles = (size: string = 'md') => {
  switch (size) {
    case 'sm': return 'h-7 px-3 text-xs rounded-full';
    case 'md': return 'h-8 px-4 text-sm rounded-full';
    case 'lg': return 'h-10 px-5 text-base rounded-full';
    default: return 'h-8 px-4 text-sm rounded-full';
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
          'inline-flex items-center justify-center font-sans tracking-wide transition-all duration-200',
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
            className="ml-2 -mr-1 hover:bg-black/10 rounded-full p-0.5 transition-colors focus:outline-none"
          >
            <X className="h-3.5 w-3.5" />
            <span className="sr-only">Remove</span>
          </button>
        )}
      </BadgeBase>
    );
  }
);
Badge.displayName = 'Badge';
