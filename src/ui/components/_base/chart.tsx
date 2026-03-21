import * as React from 'react';

export interface ChartBaseProps extends React.HTMLAttributes<HTMLDivElement> {
  data?: any[];
  config?: Record<string, any>;
}

export const ChartBase = React.forwardRef<HTMLDivElement, ChartBaseProps>(
  ({ ...props }, ref) => <div ref={ref} {...props} />
);
ChartBase.displayName = 'ChartBase';

export interface ChartContainerBaseProps extends React.HTMLAttributes<HTMLDivElement> {
  config: Record<string, any>;
}

export const ChartContainerBase = React.forwardRef<HTMLDivElement, ChartContainerBaseProps>(
  ({ ...props }, ref) => <div ref={ref} {...props} />
);
ChartContainerBase.displayName = 'ChartContainerBase';

export interface ChartTooltipBaseProps extends React.HTMLAttributes<HTMLDivElement> {}

export const ChartTooltipBase = React.forwardRef<HTMLDivElement, ChartTooltipBaseProps>(
  ({ ...props }, ref) => <div ref={ref} {...props} />
);
ChartTooltipBase.displayName = 'ChartTooltipBase';

export interface ChartLegendBaseProps extends React.HTMLAttributes<HTMLDivElement> {}

export const ChartLegendBase = React.forwardRef<HTMLDivElement, ChartLegendBaseProps>(
  ({ ...props }, ref) => <div ref={ref} {...props} />
);
ChartLegendBase.displayName = 'ChartLegendBase';
