import * as React from 'react';
import { ChartContainerBase, ChartTooltipBase, ChartTooltipContentBase, ChartLegendBase, ChartLegendContentBase, ChartStyleBase, type ChartConfig } from '@/ui/components/_base/chart';
import { cn } from '@/lib/utils';

const ChartContainer = ChartContainerBase;
const ChartTooltip = ChartTooltipBase;
const ChartLegend = ChartLegendBase;
const ChartStyle = ChartStyleBase;

const ChartTooltipContent = React.forwardRef<React.ComponentRef<typeof ChartTooltipContentBase>, React.ComponentPropsWithoutRef<typeof ChartTooltipContentBase>>(
  ({ className, ...props }, ref) => (
    <ChartTooltipContentBase
      ref={ref}
      className={cn(
        'rounded-none border border-[var(--br-border-dim)] bg-background px-3 py-1.5 text-sm shadow-xl font-mono',
        className
      )}
      {...props}
    />
  )
);
ChartTooltipContent.displayName = 'ChartTooltipContent';

const ChartLegendContent = React.forwardRef<React.ComponentRef<typeof ChartLegendContentBase>, React.ComponentPropsWithoutRef<typeof ChartLegendContentBase>>(
  ({ className, ...props }, ref) => (
    <ChartLegendContentBase
      ref={ref}
      className={cn('font-mono', className)}
      {...props}
    />
  )
);
ChartLegendContent.displayName = 'ChartLegendContent';

export {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  ChartStyle,
  type ChartConfig,
};
