import * as React from 'react';
import {
  ChartContainerBase,
  ChartTooltipBase,
  ChartTooltipContentBase,
  ChartLegendBase,
  ChartLegendContentBase,
  ChartStyleBase,
  type ChartConfig,
} from '../_base/chart';
import { cn } from '@/lib/utils';
import { terminalWindowEffectsClass, type TerminalWindowEffects } from './_effects';

const ChartContainer = React.forwardRef<
  React.ComponentRef<typeof ChartContainerBase>,
  React.ComponentPropsWithoutRef<typeof ChartContainerBase> & { effects?: TerminalWindowEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <ChartContainerBase
    ref={ref}
    className={cn(
      terminalWindowEffectsClass(effects),
      'text-[var(--tm-phosphor)] font-mono',
      className
    )}
    {...props}
  />
));
ChartContainer.displayName = 'ChartContainer';

const ChartTooltip = ChartTooltipBase;

const ChartTooltipContent = React.forwardRef<
  React.ComponentRef<typeof ChartTooltipContentBase>,
  React.ComponentPropsWithoutRef<typeof ChartTooltipContentBase> & { effects?: TerminalWindowEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <ChartTooltipContentBase
    ref={ref}
    className={cn(
      terminalWindowEffectsClass(effects),
      'rounded-none border border-[var(--tm-phosphor)] bg-[var(--tm-bg)] p-2 text-[var(--tm-phosphor)] font-mono',
      className
    )}
    {...props}
  />
));
ChartTooltipContent.displayName = 'ChartTooltipContent';

const ChartLegend = ChartLegendBase;

const ChartLegendContent = React.forwardRef<
  React.ComponentRef<typeof ChartLegendContentBase>,
  React.ComponentPropsWithoutRef<typeof ChartLegendContentBase> & { effects?: TerminalWindowEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <ChartLegendContentBase
    ref={ref}
    className={cn(
      terminalWindowEffectsClass(effects),
      'flex items-center justify-center gap-4 pt-3 text-[var(--tm-phosphor-dim)] font-mono',
      className
    )}
    {...props}
  />
));
ChartLegendContent.displayName = 'ChartLegendContent';

const ChartStyle = ChartStyleBase;

export {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  ChartStyle,
};
export type { ChartConfig };
