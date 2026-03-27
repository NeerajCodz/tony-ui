import { cn } from '@/lib/utils';
import { X } from 'lucide-react';
import * as React from 'react';
import { BadgeBase, type BadgeBaseProps } from '../_base/badge';

export interface BadgeProps extends BadgeBaseProps {}

// Angular Corner Clip Path
const AC_CLIP_PATH = 'polygon(var(--corner) 0%, calc(100% - var(--corner)) 0%, 100% var(--corner), 100% calc(100% - var(--corner)), calc(100% - var(--corner)) 100%, var(--corner) 100%, 0% calc(100% - var(--corner)), 0% var(--corner))';

const getVisualTypeStyles = (type: string = 'default') => {
  switch (type) {
    case 'default':
      return 'bg-[var(--ac-surface)] border-2 border-[var(--ac-border)] text-[var(--text-primary)]';
    case 'solid':
      return 'bg-[var(--ac-accent-dim)] border-2 border-[var(--ac-accent)] text-[var(--ac-edge-light)] font-bold';
    case 'outline':
      return 'bg-transparent border-2 border-[var(--ac-accent)] text-[var(--ac-accent)]';
    case 'ghost':
      return 'bg-transparent border-none text-[var(--text-secondary)] hover:bg-[var(--ac-surface)]';
    case 'inverse':
      return 'bg-[var(--ac-edge-light)] border-2 border-[var(--ac-bg)] text-[var(--ac-bg)] font-bold';
    case 'contrast':
      return 'bg-[var(--ac-danger)] border-2 border-[var(--ac-danger)] text-white font-bold';
    case 'soft':
      return 'bg-[var(--ac-accent)]/10 border-2 border-[var(--ac-accent)]/20 text-[var(--ac-accent)]';
    case 'neutral':
      return 'bg-[var(--ac-surface)] border-2 border-[var(--ac-border)] text-[var(--text-secondary)]';
    case 'subtle':
      return 'bg-[var(--ac-surface)]/50 border-none text-[var(--text-secondary)]';
    case 'elevated':
      return 'bg-[var(--ac-surface)] border-2 border-[var(--ac-border)] text-[var(--text-primary)] shadow-[0_2px_10px_rgba(0,0,0,0.5)]';
    case 'flat':
      return 'bg-transparent border-none text-[var(--text-primary)] p-0';
    case 'tinted':
      return 'bg-[var(--ac-accent)]/20 border-2 border-[var(--ac-accent)]/30 text-[var(--ac-edge-light)]';
    case 'link':
      return 'bg-transparent border-none text-[var(--ac-accent)] hover:underline p-0 clip-path-none';
    case 'disabled':
      return 'bg-[var(--ac-bg)] border-2 border-[var(--ac-border)]/50 text-[var(--text-muted)] opacity-50';
    case 'unstyled':
      return '';
    default:
      return 'bg-[var(--ac-surface)] border-2 border-[var(--ac-border)] text-[var(--text-primary)]';
  }
};

const getVariantStyles = (variant?: string) => {
    if (!variant) return '';
    switch (variant) {
        case 'destructive':
            return 'border-[var(--ac-danger)] text-[var(--ac-danger)] data-[type=solid]:bg-[var(--ac-danger)] data-[type=solid]:text-white';
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
    case 'sm': return 'h-5 px-2 text-[10px] [--corner:4px]';
    case 'md': return 'h-6 px-3 text-xs [--corner:6px]';
    case 'lg': return 'h-7 px-4 text-sm [--corner:8px]';
    default: return 'h-6 px-3 text-xs [--corner:6px]';
  }
};

export const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, type = 'default', variant, size = 'md', style, children, onRemove, removable, ...props }, ref) => {
    // Merge custom style with clip-path, unless unstyled or link
    const componentStyle = (type !== 'unstyled' && type !== 'link')
      ? { ...style, clipPath: AC_CLIP_PATH } 
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
        className={cn(
          'inline-flex items-center justify-center font-mono uppercase tracking-wider transition-all duration-200',
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
            className="ml-1 -mr-0.5 hover:bg-[var(--ac-bg)]/50 rounded-none transition-colors focus:outline-none"
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
