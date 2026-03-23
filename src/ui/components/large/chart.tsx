import * as React from 'react';
import { ResponsiveContainer, Tooltip } from 'recharts';
import { cn } from '@/lib/utils';

const ChartContainer = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('h-[350px] w-full rounded-3xl bg-[var(--lg-surface)] p-6 shadow-sm border border-[var(--lg-border)]', className)}
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
          'rounded-2xl border border-[var(--lg-border)] bg-[var(--lg-surface)] p-4 shadow-xl',
          className
        )}
        {...props}
      >
        <p className="mb-2 text-base font-semibold text-[var(--lg-text)]">{label}</p>
        {payload.map((item: any, index: number) => (
          <p key={index} className="text-sm text-[var(--text-secondary)]">
            <span
              className="mr-2 inline-block h-2 w-2 rounded-full"
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
