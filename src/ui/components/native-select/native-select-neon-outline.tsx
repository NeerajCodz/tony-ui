
import * as React from "react"
import { cn } from "../../utils/component-helpers"
import { ChevronDown } from "lucide-react"

interface NativeSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  version?: string
  variant?: 'neutral' | 'primary' | 'success' | 'warning' | 'destructive' | 'info'
  type?: 'default' | 'outline' | 'solid' | 'ghost'
}

const Component = React.forwardRef<HTMLSelectElement, NativeSelectProps>(({
  version = 'neon-outline',
  variant = 'primary',
  type = 'default',
  className,
  children,
  ...props
}, ref) => {
  
  const colorMap: Record<string, string> = {
    neutral: 'primary', success: 'success', warning: 'warning', info: 'info', destructive: 'destructive', primary: 'primary'
  };
  const color = colorMap[variant] || 'primary';

  const getTypeStyles = () => {
    const baseColor = `hsl(var(--${color}-base))`;
    switch(type) {
      case 'outline': return { border: `1px solid ${baseColor}`, background: 'transparent' };
      case 'solid': return { background: `hsl(var(--${color}-base) / 0.1)`, border: 'none' };
      default: return { 
        background: `hsl(var(--${color}-base) / 0.05)`, 
        border: `1px solid hsl(var(--${color}-base) / 0.3)` 
      };
    }
  };

  const styles = getTypeStyles();

  return (
    <div className="relative w-full">
      <select
        ref={ref}
        className={cn(
          "appearance-none w-full h-10 px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50",
          "bg-transparent text-white",
          className
        )}
        style={{
          ...styles,
          clipPath: 'inset(0 0 0 0 round 4px)',
          color: `hsl(var(--${color}-foreground))`,
          borderColor: `hsl(var(--${color}-base) / 0.3)`
        }}
        {...props}
      >
        {children}
      </select>
      <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none opacity-50">
        <ChevronDown className="h-4 w-4" style={{ color: `hsl(var(--${color}-base))` }} />
      </div>
    </div>
  )
})

Component.displayName = "NativeSelect-neon-outline"

export default Component
