
import * as React from "react"
import { cn } from "../../utils/component-helpers"

interface InputGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  version?: string
  variant?: 'neutral' | 'primary' | 'success' | 'warning' | 'destructive' | 'info'
  type?: 'default' | 'outline' | 'solid' | 'ghost'
  children?: React.ReactNode
}

const Component = React.forwardRef<HTMLDivElement, InputGroupProps>(({
  version = 'matrix-grid',
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
    <div
      ref={ref}
      className={cn(
        "flex items-center w-full relative",
        // Child styling to merge inputs
        "[&>*:not(:first-child)]:rounded-l-none [&>*:not(:first-child)]:border-l-0",
        "[&>*:not(:last-child)]:rounded-r-none",
        "[&>*:focus-within]:z-10",
        className
      )}
      style={{
        ...styles,
        clipPath: 'inset(0 0 0 0 round 4px)',
      }}
      {...props}
    >
      {children}
      
      {/* Decorative corners for group */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/20 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/20 pointer-events-none" />
    </div>
  )
})

Component.displayName = "InputGroup-matrix-grid"

export default Component
