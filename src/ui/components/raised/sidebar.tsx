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
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
      }}
      {...props}
    />
  )
})
Sidebar.displayName = "Sidebar"

export { Sidebar }
