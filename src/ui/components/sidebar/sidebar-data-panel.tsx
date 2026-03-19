
import * as React from "react"
import { cn } from "../../utils/component-helpers"
import { LayoutDashboard, Users, Settings, Database, Activity, LogOut } from "lucide-react"

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  version?: string
  variant?: 'neutral' | 'primary' | 'success' | 'warning' | 'destructive' | 'info'
  type?: 'default' | 'outline' | 'solid' | 'ghost'
  children?: React.ReactNode
}

const Component = React.forwardRef<HTMLDivElement, SidebarProps>(({
  version = 'data-panel',
  variant = 'primary',
  type = 'default',
  children,
  className,
  ...props
}, ref) => {
  
  const colorMap: Record<string, string> = {
    neutral: 'primary', success: 'success', warning: 'warning', info: 'info', destructive: 'destructive', primary: 'primary'
  };
  const color = colorMap[variant] || 'primary';

  const getTypeStyles = () => {
    const baseColor = `hsl(var(--${color}-base))`;
    switch(type) {
      case 'outline': return { borderRight: `1px solid ${baseColor}`, background: 'black' };
      case 'solid': return { background: `hsl(var(--${color}-base) / 0.05)`, border: 'none' };
      default: return { 
        background: 'rgba(10, 10, 15, 0.6)', 
        borderRight: `1px solid hsl(var(--${color}-base) / 0.3)`,
        backdropFilter: 'blur(8px)'
      };
    }
  };

  const styles = getTypeStyles();
  const itemClass = "group flex items-center h-10 px-3 text-sm font-medium rounded-md text-gray-400 hover:text-white hover:bg-white/5 transition-all cursor-pointer mb-1";

  return (
    <div
      ref={ref}
      className={cn(
        "flex flex-col w-[240px] h-full min-h-[500px] relative overflow-hidden",
        className
      )}
      style={{
        ...styles,
        // clipPath: 'inset(0 0 0 0 round 0 8px 8px 0)', // Clip path might cut off content on sidebar
      }}
      {...props}
    >
      <div className="p-6">
        <div className="flex items-center gap-2 mb-8">
          <div className="w-8 h-8 rounded " style={{ backgroundColor: `hsl(var(--${color}-base))` }} />
          <span className="font-bold tracking-wider uppercase text-lg">CYBER<span style={{ color: `hsl(var(--${color}-base))` }}>HUD</span></span>
        </div>
        
        {children || (
          <div className="flex flex-col gap-1">
             <div className="text-xs font-mono opacity-50 mb-2 uppercase tracking-widest pl-3">Main Menu</div>
             <div className={cn(itemClass, "bg-white/10 text-white")}>
               <LayoutDashboard className="mr-3 h-4 w-4" style={{ color: `hsl(var(--${color}-base))` }} />
               Dashboard
             </div>
             <div className={itemClass}>
               <Users className="mr-3 h-4 w-4" />
               Team
             </div>
             <div className={itemClass}>
               <Activity className="mr-3 h-4 w-4" />
               Activity
             </div>
             
             <div className="text-xs font-mono opacity-50 mb-2 mt-6 uppercase tracking-widest pl-3">System</div>
             <div className={itemClass}>
               <Database className="mr-3 h-4 w-4" />
               Database
             </div>
             <div className={itemClass}>
               <Settings className="mr-3 h-4 w-4" />
               Settings
             </div>
          </div>
        )}
      </div>
      
      <div className="mt-auto p-6 border-t border-white/5">
         <div className={itemClass}>
           <LogOut className="mr-3 h-4 w-4 text-red-400" />
           Logout
         </div>
         <div className="text-xs text-center mt-4 opacity-30 font-mono">
           v.{version}
         </div>
      </div>
      
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-px h-20 bg-gradient-to-b  to-transparent" style={{ background: `linear-gradient(to bottom, hsl(var(--${color}-base)), transparent)` }} />
    </div>
  )
})

Component.displayName = "Sidebar-data-panel"

export default Component

