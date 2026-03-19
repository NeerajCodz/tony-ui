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
        borderRadius: '0', clipPath: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)', background: `hsl(var(--${color}-base) / 0.1)`
      }}
      {...props}
    />
  )
}

export { Skeleton }
