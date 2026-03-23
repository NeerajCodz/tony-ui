import * as React from 'react';
import * as Recharts from 'recharts';

import { cn } from '@/lib/utils';

// Helper to wrap Recharts components
const ChartContainer = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('w-full h-[300px] border-2 border-[var(--ne-primary)] bg-[var(--ne-bg)] p-4 shadow-[0_0_20px_var(--ne-primary)]', className)}
    {...props}
  />
));
ChartContainer.displayName = 'ChartContainer';

const ChartTooltip = Recharts.Tooltip;
const ChartLegend = Recharts.Legend;
const ChartXAxis = Recharts.XAxis;
const ChartYAxis = Recharts.YAxis;
const ChartCartesianGrid = Recharts.CartesianGrid;
const ChartArea = Recharts.Area;
const ChartBar = Recharts.Bar;
const ChartLine = Recharts.Line;
const ChartResponsiveContainer = Recharts.ResponsiveContainer;

export {
  ChartContainer,
  ChartTooltip,
  ChartLegend,
  ChartXAxis,
  ChartYAxis,
  ChartCartesianGrid,
  ChartArea,
  ChartBar,
  ChartLine,
  ChartResponsiveContainer,
};
