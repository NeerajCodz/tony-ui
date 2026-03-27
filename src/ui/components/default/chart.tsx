import { cn } from '@/lib/utils';
import { ChartContainerBase, ChartLegendBase, ChartLegendContentBase, ChartStyleBase, ChartTooltipBase, ChartTooltipContentBase, type ChartConfig } from '@/ui/components/_base/chart';
import * as React from 'react';

const ChartContainer = ChartContainerBase;
const ChartTooltip = ChartTooltipBase;
const ChartLegend = ChartLegendBase;
const ChartStyle = ChartStyleBase;

const ChartTooltipContent = React.forwardRef<
  React.ComponentRef<typeof ChartTooltipContentBase>,
  React.ComponentPropsWithoutRef<typeof ChartTooltipContentBase>
>(({ className, ...props }, ref) => (
  <ChartTooltipContentBase
    ref={ref}
    className={cn(
      'grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl',
      className
    )}
    {...props}
  />
));
ChartTooltipContent.displayName = 'ChartTooltipContent';

const ChartLegendContent = React.forwardRef<
  React.ComponentRef<typeof ChartLegendContentBase>,
  React.ComponentPropsWithoutRef<typeof ChartLegendContentBase>
>(({ className, ...props }, ref) => (
  <ChartLegendContentBase
    ref={ref}
    className={cn('flex items-center justify-center gap-4 pt-3', className)}
    {...props}
  />
));
ChartLegendContent.displayName = 'ChartLegendContent';

export {
ChartContainer,ChartLegend,
ChartLegendContent,
ChartStyle,ChartTooltip,
ChartTooltipContent
};
export type { ChartConfig };
