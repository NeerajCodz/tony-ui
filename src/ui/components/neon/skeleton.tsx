import React from 'react';
import { cn } from '../../utils/component-helpers';

const getTypeStyles = (type: string | undefined) => {
  if (!type) return '';
  switch (type) {
    case 'inverse': return "bg-white text-black border-black hover:bg-gray-100";
    case 'contrast': return "bg-black text-white border-white border-2 shadow-[4px_4px_0px_white]";
    case 'soft': return "bg-opacity-20 border-opacity-30 shadow-none";
    default: return '';
  }
};


interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: 'inverse' | 'contrast' | 'soft';
  variant?: 'neutral' | 'success' | 'warning' | 'info' | 'destructive' | 'primary';
}

const Skeleton = ({ type, className, variant = 'neutral', ...props }: SkeletonProps) => {
  const colorMap: Record<string, string> = {
    neutral: 'primary', success: 'success', warning: 'warning', info: 'info', destructive: 'destructive', primary: 'primary'
  };
  const color = colorMap[variant] || 'primary';

  let customStyle: React.CSSProperties = {
     border: `2px solid hsl(var(--${color}-base))`, 
     boxShadow: `0 0 10px hsl(var(--${color}-base)), inset 0 0 10px hsl(var(--${color}-base))`, // Intense glow
     backgroundColor: `rgba(var(--${color}-rgb), 0.1)`
  };

  if (type === 'outline') {
      customStyle = {
          border: `2px solid hsl(var(--${color}-base))`,
          boxShadow: `0 0 5px hsl(var(--${color}-base))`,
          backgroundColor: 'transparent'
      };
  } else if (type === 'ghost') {
      customStyle = {
          border: 'none',
          boxShadow: 'none',
          backgroundColor: `rgba(var(--${color}-rgb), 0.2)` // Text glow equivalent?
      };
  } else if (type === 'soft') {
      customStyle = {
          border: 'none',
          boxShadow: 'none',
          backgroundColor: `rgba(var(--${color}-rgb), 0.1)`
      };
  }

  return (
    <div
      className={cn("animate-pulse rounded-md bg-muted", className, getTypeStyles(type))}
      style={{
        ...customStyle,
        ...props.style
      }}
      {...props}
    />
  )
}

export { Skeleton }
