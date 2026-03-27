import { cn } from '@/lib/utils';
import * as React from 'react';
import { SkeletonBase, SkeletonTextBase, type SkeletonBaseProps, type SkeletonTextBaseProps } from '../_base/skeleton';

export interface SkeletonProps extends SkeletonBaseProps {}
export interface SkeletonTextProps extends SkeletonTextBaseProps {}

const getTypeStyles = (type: string = 'pulse') => {
    switch(type) {
        case 'pulse': return 'animate-pulse bg-[var(--df-border)]/50';
        case 'wave': return 'relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-[var(--df-surface)]/50 before:to-transparent bg-[var(--df-border)]/30';
        case 'none': return 'bg-[var(--df-border)]/50';
        default: return 'animate-pulse bg-[var(--df-border)]/50';
    }
}

export const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  ({ className, type = 'pulse', shape = 'rectangle', ...props }, ref) => {
    return (
      <SkeletonBase
        ref={ref}
        type={type}
        shape={shape}
        className={cn(
          'rounded-md',
          shape === 'circle' && 'rounded-full',
          getTypeStyles(type),
          className
        )}
        {...props}
      />
    );
  }
);
Skeleton.displayName = 'Skeleton';

export const SkeletonText = React.forwardRef<HTMLDivElement, SkeletonTextProps>(
    ({ className, ...props }, ref) => (
        <SkeletonTextBase ref={ref} className={className} {...props} />
    )
);
SkeletonText.displayName = 'SkeletonText';
