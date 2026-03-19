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
        border: `1px solid hsl(var(--${color}-base) / 0.5)`, boxShadow: `0 0 15px hsl(var(--${color}-base) / 0.2)`, background: `hsl(var(--${color}-base) / 0.1)`, backdropFilter: 'blur(5px)'
      }}
      {...props}
    />
  )
}

export { Skeleton }
