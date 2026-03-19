import React from 'react';
import { cn } from '../../utils/component-helpers';

interface SidebarProps extends React.HTMLAttributes<HTMLElement> {
  variant?: 'neutral' | 'success' | 'warning' | 'info' | 'destructive' | 'primary';
}

const Sidebar = React.forwardRef<HTMLElement, SidebarProps>(({ className, variant = 'primary', ...props }, ref) => {
  const colorMap: Record<string, string> = {
    neutral: 'primary', success: 'success', warning: 'warning', info: 'info', destructive: 'destructive', primary: 'primary'
  };
  const color = colorMap[variant] || 'primary';

  return (
    <aside
      ref={ref}
      className={cn("flex flex-col h-screen w-64 border-r bg-background", className)}
      style={{
        border: `1px solid hsl(var(--${color}-base))`, backgroundImage: `linear-gradient(0deg, transparent 24%, hsl(var(--${color}-base) / .3) 25%, hsl(var(--${color}-base) / .3) 26%, transparent 27%, transparent 74%, hsl(var(--${color}-base) / .3) 75%, hsl(var(--${color}-base) / .3) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, hsl(var(--${color}-base) / .3) 25%, hsl(var(--${color}-base) / .3) 26%, transparent 27%, transparent 74%, hsl(var(--${color}-base) / .3) 75%, hsl(var(--${color}-base) / .3) 76%, transparent 77%, transparent)`
      }}
      {...props}
    />
  )
})
Sidebar.displayName = "Sidebar"

export { Sidebar }
