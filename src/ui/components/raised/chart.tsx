import * as React from 'react';
import { ChartContainerBase, ChartTooltipBase, ChartTooltipContentBase, type ChartConfig } from '../_base/chart';
import { cn } from '@/lib/utils';

const ChartContainer = React.forwardRef<
  React.ComponentRef<typeof ChartContainerBase>,
  React.ComponentPropsWithoutRef<typeof ChartContainerBase>
>(({ className, ...props }, ref) => (
  <ChartContainerBase
    ref={ref}
    className={cn('h-[350px] w-full border border-[var(--ra-border)] bg-[var(--ra-surface)] p-4', className)}
    {...props}
  />
));
ChartContainer.displayName = 'ChartContainer';

const ChartTooltip = ChartTooltipBase;

const ChartTooltipContent = React.forwardRef<
  React.ComponentRef<typeof ChartTooltipContentBase>,
  React.ComponentPropsWithoutRef<typeof ChartTooltipContentBase>
>(({ className, ...props }, ref) => (
  <ChartTooltipContentBase
    ref={ref}
    className={cn('rounded border bg-background p-2 text-xs', className)}
    {...props}
  />
));
ChartTooltipContent.displayName = 'ChartTooltipContent';

export { ChartContainer, ChartTooltip, ChartTooltipContent };
export type { ChartConfig };
