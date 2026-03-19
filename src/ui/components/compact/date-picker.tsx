import * as React from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from "@radix-ui/react-popover"
import { cn } from "../../utils/component-helpers"
import { Calendar } from "../calendar"

interface DatePickerProps {
  date?: Date
  setDate?: (date: Date | undefined) => void
  className?: string
  version?: string
  variant?: 'neutral' | 'primary' | 'success' | 'warning' | 'destructive' | 'info'
  type?: 'default' | 'outline' | 'solid' | 'ghost'
  placeholder?: string
  animated?: boolean
}

const Component = React.forwardRef<HTMLDivElement, DatePickerProps>(({
  date,
  setDate,
  className,
  version = 'compact',
  variant = 'neutral',
  type = 'default',
  placeholder = "Pick a date",
  animated = true,
  ...props
}, ref) => {
  const colorMap: Record<string, string> = { neutral: 'primary', success: 'success', warning: 'warning', info: 'info', destructive: 'destructive', primary: 'primary' };
  const color = colorMap[variant] || 'primary';
  const getTypeStyles = () => {
    const baseColor = `hsl(var(--${color}-base))`;
    switch(type) {
      case 'inverse': return { background: `hsl(var(--${color}-foreground))`, color: `hsl(var(--${color}-base))`, border: 'none' };
      case 'contrast': return { background: `hsl(var(--${color}-base))`, color: `hsl(var(--${color}-foreground))`, border: `2px solid hsl(var(--${color}-foreground))` };
      case 'soft': return { background: `hsl(var(--${color}-base) / 0.15)`, color: `hsl(var(--${color}-foreground))`, border: 'none' };

      case 'outline': return { border: `1px solid ${baseColor}`, background: 'transparent' };
      case 'solid': return { background: `hsl(var(--${color}-base) / 0.1)`, border: 'none' };
      case 'ghost': return { background: 'transparent', border: 'none' };
      default: return { background: `hsl(var(--${color}-base) / 0.05)`, border: `1px solid hsl(var(--${color}-base) / 0.3)` };
    }
  };
  const styles = getTypeStyles();
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          ref={ref as any}
          className={cn("flex h-10 w-full items-center justify-start text-left font-normal transition-all duration-200", "hover:bg-[hsl(var(--primary-base)/0.1)] focus:outline-none focus:ring-1 focus:ring-[hsl(var(--primary-base))]", !date && "text-muted-foreground", animated && "active:scale-[0.98]", className)}
          style={{ ...styles, borderRadius: '0.5rem', fontFamily: 'var(--font-mono)', padding: '0 1rem', color: `hsl(var(--${color}-foreground))` }}
          {...props}
        >
          <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />
          {date ? format(date, "PPP") : <span>{placeholder}</span>}
          
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0 bg-black/90 border border-[hsl(var(--primary-base)/0.3)] backdrop-blur-xl" align="start" sideOffset={5}>
        <Calendar mode="single" selected={date} onSelect={setDate as any} initialFocus variant={variant} version={version} />
      </PopoverContent>
    </Popover>
  )
})
Component.displayName = "DatePicker-compact"
export default Component
