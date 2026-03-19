
import React from 'react';
import { DayPicker } from 'react-day-picker';
import { cn } from '../../utils/component-helpers.js';
import { ChevronLeft, ChevronRight } from 'lucide-react';
// import 'react-day-picker/dist/style.css'; // We'll custom style it

interface CalendarProps {
  version?: string;
  variant?: 'neutral' | 'success' | 'warning' | 'info' | 'destructive' | 'primary';
  type?: 'default' | 'outline' | 'solid' | 'inverse' | 'contrast' | 'soft';
  animated?: boolean;
  className?: string;
  mode?: 'single' | 'multiple' | 'range';
  selected?: any;
  onSelect?: (date: any) => void;
  showOutsideDays?: boolean;
}

const CLIP_PATH = 'polygon(0 0, 100% 0, 100% 100%, 0 100%, 0 15px, 5px 15px, 5px calc(100% - 5px), calc(100% - 5px) calc(100% - 5px), calc(100% - 5px) 5px, 15px 5px, 15px 0)';

const Component = React.forwardRef<HTMLDivElement, CalendarProps>(({
  variant = 'neutral',
  type = 'default',
  animated = true,
  className = '',
  mode = 'single',
  selected,
  onSelect,
  showOutsideDays = true,
  ...props
}, ref) => {
  const colorMap: Record<string, string> = {
    neutral: 'primary', 
    success: 'success', 
    warning: 'warning', 
    info: 'info', 
    destructive: 'destructive',
    primary: 'primary'
  };
  const color = colorMap[variant] || 'primary';

  const getTypeStyles = (): React.CSSProperties => {
    const base: React.CSSProperties = {};
    switch (type) {
      case 'outline':
        return {
          backgroundColor: 'transparent',
          border: `1px solid hsl(var(--${color}-base))`,
        };
      case 'solid':
        return {
          backgroundColor: `hsl(var(--${color}-base) / 0.15)`,
          border: `1px solid hsl(var(--${color}-base) / 0.5)`,
        };
      
      case 'inverse':
        return {
          ...base,
          backgroundColor: 'white',
          color: 'black',
          border: '1px solid black',
        };
      case 'contrast':
        return {
          ...base,
          backgroundColor: 'black',
          border: '2px solid white',
          color: 'white',
          boxShadow: '4px 4px 0px white',
        };
      case 'soft':
        return {
          ...base,
          backgroundColor: `hsl(var(--${color}-base) / 0.1)`,
          border: `1px solid hsl(var(--${color}-base) / 0.3)`,
          boxShadow: 'none',
        };
case 'default':
      default:
        return {
          backgroundColor: `hsl(var(--${color}-base) / 0.05)`,
          backdropFilter: 'blur(8px)',
          border: `1px solid hsl(var(--${color}-base) / 0.3)`,
        };
    }
  };

  return (
    <div
      ref={ref}
      className={cn(
        'relative p-4 transition-all duration-300',
        animated ? 'animate-in fade-in zoom-in-95 duration-300' : '',
        className
      )}
      style={{
        clipPath: CLIP_PATH,
        ...getTypeStyles(),
      }}
      {...props}
    >
      {/* Glow Effect */}
      <div 
        className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(circle at center, hsl(var(--${color}-base) / 0.15), transparent 70%)`,
          zIndex: 0
        }}
      />
      
      <div className="relative z-10">
        <DayPicker
          mode={mode as any}
          selected={selected}
          onSelect={onSelect}
          showOutsideDays={showOutsideDays}
          className="p-0"
          classNames={{
            months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
            month: "space-y-4",
            caption: "flex justify-center pt-1 relative items-center",
            caption_label: "text-sm font-medium font-mono uppercase tracking-wider text-cyan-400",
            nav: "space-x-1 flex items-center",
            nav_button: cn(
              "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 transition-opacity text-cyan-500",
              "hover:bg-cyan-500/10 rounded-sm flex items-center justify-center"
            ),
            nav_button_previous: "absolute left-1",
            nav_button_next: "absolute right-1",
            table: "w-full border-collapse space-y-1",
            head_row: "flex",
            head_cell: "text-gray-500 rounded-md w-9 font-normal text-[0.8rem] font-mono",
            row: "flex w-full mt-2",
            cell: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
            day: cn(
              "h-9 w-9 p-0 font-normal aria-selected:opacity-100 hover:bg-cyan-500/20 rounded-sm transition-colors font-mono text-gray-300",
              "focus:outline-none focus:ring-1 focus:ring-cyan-500"
            ),
            day_range_end: "day-range-end",
            day_selected: cn(
              "bg-cyan-500 text-black hover:bg-cyan-400 hover:text-black focus:bg-cyan-500 focus:text-black",
              "shadow-[0_0_10px_rgba(6,182,212,0.5)]"
            ),
            day_today: "bg-gray-800 text-white border border-cyan-500/50",
            day_outside: "day-outside text-gray-700 opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
            day_disabled: "text-muted-foreground opacity-50",
            day_range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
            day_hidden: "invisible",
          }}
          components={{
            IconLeft: ({ ...props }) => <ChevronLeft className="h-4 w-4" />,
            IconRight: ({ ...props }) => <ChevronRight className="h-4 w-4" />,
          }}
        />
      </div>

      {/* Decorative Corner Accents */}
      <div className="absolute top-0 left-0 w-3 h-3 border-t border-l  opacity-50" style={{ borderColor: `hsl(var(--${color}-base))` }} />
      <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r  opacity-50" style={{ borderColor: `hsl(var(--${color}-base))` }} />
    </div>
  );
});

Component.displayName = 'Calendar-holo-frame';
export default Component;

