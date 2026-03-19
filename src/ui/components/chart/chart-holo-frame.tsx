
import React from 'react';
import { cn } from '../../utils/component-helpers.js';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

interface ChartProps extends React.HTMLAttributes<HTMLDivElement> {
  version?: string;
  variant?: 'neutral' | 'success' | 'warning' | 'info' | 'destructive' | 'primary';
  type?: 'default' | 'outline' | 'solid';
  animated?: boolean;
  data?: any[];
  height?: number | string;
}

const CLIP_PATH = 'polygon(0 0, 100% 0, 100% 100%, 0 100%, 0 20px, 10px 20px, 10px calc(100% - 10px), calc(100% - 10px) calc(100% - 10px), calc(100% - 10px) 10px, 20px 10px, 20px 0)';

// Sample Data if none provided
const DEFAULT_DATA = [
  { name: 'Jan', value: 400, active: 240 },
  { name: 'Feb', value: 300, active: 139 },
  { name: 'Mar', value: 200, active: 980 },
  { name: 'Apr', value: 278, active: 390 },
  { name: 'May', value: 189, active: 480 },
  { name: 'Jun', value: 239, active: 380 },
  { name: 'Jul', value: 349, active: 430 },
];

const Component = React.forwardRef<HTMLDivElement, ChartProps>(({
  variant = 'neutral',
  type = 'default',
  animated = true,
  className = '',
  data = DEFAULT_DATA,
  height = 300,
  children,
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
    switch (type) {
      case 'outline':
        return {
          backgroundColor: 'transparent',
          border: `1px solid hsl(var(--${color}-base))`,
        };
      case 'solid':
        return {
          backgroundColor: `hsl(var(--${color}-base) / 0.1)`,
          border: `1px solid hsl(var(--${color}-base) / 0.5)`,
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
        'relative p-6 transition-all duration-300 w-full',
        animated ? 'animate-in fade-in zoom-in-95 duration-500' : '',
        className
      )}
      style={{
        clipPath: CLIP_PATH,
        ...getTypeStyles(),
      }}
      {...props}
    >
      <div style={{ width: '100%', height: height }}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id={`colorValue-${variant}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={`hsl(var(--${color}-base))`} stopOpacity={0.8}/>
                <stop offset="95%" stopColor={`hsl(var(--${color}-base))`} stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
            <XAxis 
                dataKey="name" 
                stroke="#666" 
                tick={{fill: '#888', fontSize: 12, fontFamily: 'monospace'}} 
                tickLine={false}
                axisLine={false}
            />
            <YAxis 
                stroke="#666" 
                tick={{fill: '#888', fontSize: 12, fontFamily: 'monospace'}} 
                tickLine={false}
                axisLine={false}
            />
            <Tooltip 
                contentStyle={{ 
                    backgroundColor: 'rgba(0,0,0,0.8)', 
                    border: `1px solid hsl(var(--${color}-base))`,
                    borderRadius: '4px',
                    fontFamily: 'monospace'
                }}
            />
            <Legend wrapperStyle={{ fontFamily: 'monospace', paddingTop: '10px' }}/>
            <Area 
                type="monotone" 
                dataKey="value" 
                stroke={`hsl(var(--${color}-base))`} 
                fillOpacity={1} 
                fill={`url(#colorValue-${variant})`} 
            />
             <Area 
                type="monotone" 
                dataKey="active" 
                stroke={`hsl(var(--${color}-base))`} 
                strokeOpacity={0.5}
                fillOpacity={0} 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Decorative Corner Accents */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2  opacity-70" style={{ borderColor: `hsl(var(--${color}-base))` }} />
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2  opacity-70" style={{ borderColor: `hsl(var(--${color}-base))` }} />
      
      {/* Scanline overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-5 bg-[linear-gradient(transparent_50%,_rgba(0,0,0,0.5)_50%)] bg-[length:100%_4px]" />
    </div>
  );
});

Component.displayName = 'Chart-holo-frame';
export default Component;

