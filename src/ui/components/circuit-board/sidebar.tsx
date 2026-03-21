import React from 'react';
import { cn } from '../../utils/component-helpers';
import { SidebarBase, SidebarHeaderBase, SidebarContentBase, SidebarFooterBase, SidebarItemBase } from '../_base/sidebar';

const getTypeStyles = (type: string | undefined) => {
  if (!type) return '';
  switch (type) {
    case 'inverse': return "bg-white text-black border-black hover:bg-gray-100";
    case 'contrast': return "bg-black text-white border-white border-2 shadow-[4px_4px_0px_white]";
    case 'soft': return "bg-opacity-20 border-opacity-30 shadow-none";
    default: return '';
  }
};


interface SidebarProps extends React.HTMLAttributes<HTMLElement> {
  type?: 'inverse' | 'contrast' | 'soft';
  variant?: 'neutral' | 'success' | 'warning' | 'info' | 'destructive' | 'primary';
}

const Sidebar = React.forwardRef<HTMLElement, SidebarProps>(({ type, className, variant = 'primary', ...props }, ref) => {
  const colorMap: Record<string, string> = {
    neutral: 'primary', success: 'success', warning: 'warning', info: 'info', destructive: 'destructive', primary: 'primary'
  };
  const color = colorMap[variant] || 'primary';

  return (
    <aside
      ref={ref}
      className={cn("flex flex-col h-screen w-64 border-r bg-background", className, getTypeStyles(type))}
      style={{
        border: `1px solid hsl(var(--${color}-base))`, backgroundImage: `radial-gradient(hsl(var(--${color}-base) / 0.2) 1px, transparent 1px)`, backgroundSize: '10px 10px'
      }}
      {...props}
    />
  )
})
Sidebar.displayName = "Sidebar"

export { Sidebar }