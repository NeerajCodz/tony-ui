import React from 'react';
import { cn } from '../../utils/component-helpers';

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'neutral' | 'success' | 'warning' | 'info' | 'destructive' | 'primary';
}

const Skeleton = ({ className, variant = 'neutral', ...props }: SkeletonProps) => {
  const colorMap: Record<string, string> = {
    neutral: 'primary', success: 'success', warning: 'warning', info: 'info', destructive: 'destructive', primary: 'primary'
  };
  const color = colorMap[variant] || 'primary';

  return (
    <div
      className={cn("animate-pulse rounded-md bg-muted", className)}
      style={{
        border: `1px solid hsl(var(--${color}-base))`, backgroundImage: `linear-gradient(0deg, transparent 24%, hsl(var(--${color}-base) / .3) 25%, hsl(var(--${color}-base) / .3) 26%, transparent 27%, transparent 74%, hsl(var(--${color}-base) / .3) 75%, hsl(var(--${color}-base) / .3) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, hsl(var(--${color}-base) / .3) 25%, hsl(var(--${color}-base) / .3) 26%, transparent 27%, transparent 74%, hsl(var(--${color}-base) / .3) 75%, hsl(var(--${color}-base) / .3) 76%, transparent 77%, transparent)`
      }}
      {...props}
    />
  )
}

export { Skeleton }
