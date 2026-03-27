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
        'rounded-none border border-[var(--cb-trace)] bg-[var(--cb-soldermask)] px-3 py-1.5 text-sm shadow-[0_0_10px_var(--cb-trace)] font-mono uppercase text-[var(--cb-trace-lit)] tracking-wide',
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
      className={cn('font-mono uppercase tracking-wide text-[var(--cb-trace-dim)]', className)}
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
