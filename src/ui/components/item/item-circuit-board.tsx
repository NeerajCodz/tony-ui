
import * as React from "react"
import { cn } from "../../utils/component-helpers"
import { ChevronRight } from "lucide-react"

interface ItemProps extends React.HTMLAttributes<HTMLDivElement> {
  version?: string
  variant?: 'neutral' | 'primary' | 'success' | 'warning' | 'destructive' | 'info'
  type?: 'default' | 'outline' | 'solid' | 'ghost'
  children?: React.ReactNode
  active?: boolean
}

const Component = React.forwardRef<HTMLDivElement, ItemProps>(({
  version = 'circuit-board',
  variant = 'primary',
  type = 'default',
  children,
  className,
  active,
  ...props
}, ref) => {
  
  const colorMap: Record<string, string> = {
    neutral: 'primary', success: 'success', warning: 'warning', info: 'info', destructive: 'destructive', primary: 'primary'
  };
  const color = colorMap[variant] || 'primary';

  const getTypeStyles = (isActive: boolean) => {
    const baseColor = `hsl(var(--${color}-base))`;
    if (isActive) {
       return { 
         borderColor: baseColor,
         background: `hsl(var(--${color}-base) / 0.15)`
       };
    }

    switch(type) {
      case 'outline': return { border: `1px solid ${baseColor}`, background: 'transparent' };
      case 'solid': return { background: `hsl(var(--${color}-base) / 0.1)`, border: 'none' };
      case 'ghost': return { background: 'transparent', border: 'none' };
      default: return { 
        background: `hsl(var(--${color}-base) / 0.05)`, 
        border: `1px solid hsl(var(--${color}-base) / 0.2)` 
      };
    }
  };

  const styles = getTypeStyles(!!active);

  return (
    <div
      ref={ref}
      className={cn(
        "flex items-center p-3 w-full transition-all duration-200 cursor-pointer hover:brightness-125",
        "group relative overflow-hidden",
        className
      )}
      style={{
        ...styles,
        clipPath: 'inset(0 0 0 0 round 4px)',
        color: `hsl(var(--${color}-foreground))`
      }}
      {...props}
    >
      {/* Selection Indicator */}
      {active && <div className="absolute left-0 top-0 bottom-0 w-1 " style={{ backgroundColor: `hsl(var(--${color}-base))` }} />}
      
      {children || (
        <>
          <div className="flex-1 flex flex-col">
             <span className="font-medium text-sm">Item Component</span>
             <span className="text-xs opacity-70 font-mono">{version}</span>
          </div>
          <ChevronRight className="h-4 w-4 opacity-50 group-hover:translate-x-1 transition-transform" />
        </>
      )}
    </div>
  )
})

Component.displayName = "Item-circuit-board"

export default Component

