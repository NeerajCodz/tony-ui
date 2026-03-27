import { cn } from '@/lib/utils';
import { ChartContainerBase, ChartLegendBase, ChartLegendContentBase, ChartStyleBase, ChartTooltipBase, ChartTooltipContentBase, type ChartConfig } from '@/ui/components/_base/chart';
import * as React from 'react';

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
ChartContainer,ChartLegend,
ChartLegendContent,
ChartStyle,ChartTooltip,
ChartTooltipContent,type ChartConfig
};
