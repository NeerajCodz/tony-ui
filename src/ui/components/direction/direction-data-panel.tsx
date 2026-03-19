
import * as React from "react"
import { ArrowRight, ArrowLeft, ArrowUp, ArrowDown, Compass } from "lucide-react"
import { cn } from "../../utils/component-helpers"

interface DirectionProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: 'up' | 'down' | 'left' | 'right' | 'ne' | 'nw' | 'se' | 'sw'
  size?: 'sm' | 'md' | 'lg'
  version?: string
  variant?: 'neutral' | 'primary' | 'success' | 'warning' | 'destructive' | 'info'
  type?: 'default' | 'outline' | 'solid' | 'ghost'
  animated?: boolean
}

const Component = React.forwardRef<HTMLDivElement, DirectionProps>(({
  direction = 'right',
  size = 'md',
  className,
  version = 'data-panel',
  variant = 'primary',
  type = 'default',
  animated = true,
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
      case 'ghost': return { background: 'transparent', border: 'none' };
      default: return { 
        background: `hsl(var(--${color}-base) / 0.05)`, 
        border: `1px solid hsl(var(--${color}-base) / 0.3)` 
      };
    }
  };

  const styles = getTypeStyles();
  
  const getIcon = () => {
    switch(direction) {
      case 'up': return <ArrowUp className="w-full h-full" />;
      case 'down': return <ArrowDown className="w-full h-full" />;
      case 'left': return <ArrowLeft className="w-full h-full" />;
      case 'right': return <ArrowRight className="w-full h-full" />;
      default: return <Compass className="w-full h-full" />;
    }
  };
  
  const sizeMap = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  return (
    <div
      ref={ref}
      className={cn(
        "relative flex items-center justify-center transition-all duration-300",
        sizeMap[size],
        animated && "hover:scale-110",
        className
      )}
      style={{
        ...styles,
        clipPath: 'inset(0 0 0 0 round 4px)',
        color: `hsl(var(--${color}-foreground))`
      }}
      {...props}
    >
      <div className={cn("transition-transform duration-500", animated && "group-hover:rotate-45")}>
        {children || getIcon()}
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-50" 
           style={{ border: `1px dashed hsl(var(--${color}-base) / 0.3)`, clipPath: 'inset(0 0 0 0 round 4px)' }} />
    </div>
  )
})

Component.displayName = "Direction-data-panel"

export default Component
