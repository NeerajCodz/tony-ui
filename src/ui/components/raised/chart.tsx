import * as React from 'react';
import { ResponsiveContainer, Tooltip } from 'recharts';
import { cn } from '@/lib/utils';

const ChartContainer = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('h-[350px] w-full rounded-[4px] bg-[var(--ra-surface)] p-6 shadow-[8px_8px_0_var(--ra-shadow)] border-2 border-[var(--ra-border)]', className)}
    {...props}
  >
    <ResponsiveContainer width="100%" height="100%">
      {props.children as React.ReactElement}
    </ResponsiveContainer>
  </div>
));
ChartContainer.displayName = 'ChartContainer';

const ChartTooltip = Tooltip;

const ChartTooltipContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    active?: boolean;
    payload?: any[];
    label?: string;
  }
>(({ active, payload, label, className, ...props }, ref) => {
  if (active && payload && payload.length) {
    return (
      <div
        ref={ref}
        className={cn(
          'rounded-[4px] border-2 border-[var(--ra-border)] bg-[var(--ra-surface)] p-3 shadow-[4px_4px_0_var(--ra-shadow)] font-mono',
          className
        )}
        {...props}
      >
        <p className="mb-2 text-sm font-bold text-[var(--ra-text)] uppercase tracking-wider">{label}</p>
        {payload.map((item: any, index: number) => (
          <p key={index} className="text-xs text-[var(--text-secondary)]">
            <span
              className="mr-2 inline-block h-2 w-2 border border-[var(--ra-border)]"
              style={{ backgroundColor: item.color }}
            />
            {item.name}: {item.value}
          </p>
        ))}
      </div>
    );
  }

  return null;
});
ChartTooltipContent.displayName = 'ChartTooltipContent';

export { ChartContainer, ChartTooltip, ChartTooltipContent };
