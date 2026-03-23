import * as React from 'react';
import { ResponsiveContainer, Tooltip } from 'recharts';
import { cn } from '@/lib/utils';

const ChartContainer = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'h-[350px] w-full border border-[var(--mg-border)] bg-[var(--mg-surface)] p-6 shadow-sm relative',
      'before:absolute before:inset-0 before:bg-[linear-gradient(var(--mg-grid)_1px,transparent_1px),linear-gradient(90deg,var(--mg-grid)_1px,transparent_1px)] before:bg-[size:20px_20px] before:pointer-events-none before:opacity-10',
      className
    )}
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
          'border border-[var(--mg-accent)] bg-[var(--mg-surface)] p-2 shadow-[0_0_10px_rgba(0,255,85,0.2)] font-mono text-xs uppercase tracking-wide',
          className
        )}
        {...props}
      >
        <p className="mb-1 text-[var(--mg-accent)] font-bold">{label}</p>
        {payload.map((item: any, index: number) => (
          <p key={index} className="text-[var(--mg-text)]">
            <span
              className="mr-2 inline-block h-1.5 w-1.5 bg-[var(--mg-accent)]"
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
