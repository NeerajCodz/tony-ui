import * as React from 'react';

/**
 * Chart type variants
 */
export type ChartType =
  | 'line'
  | 'area'
  | 'bar'
  | 'pie'
  | 'donut'
  | 'radar'
  | 'scatter'
  | 'radial'
  | 'composed';

/**
 * Chart sizes
 */
export type ChartSize = 'sm' | 'md' | 'lg' | 'xl';

/**
 * Chart config item for data series
 */
export interface ChartConfigItem {
  label: string;
  color?: string;
  icon?: React.ComponentType;
}

/**
 * Chart config object
 */
export type ChartConfig = Record<string, ChartConfigItem>;

// ============================================================================
// Chart Context
// ============================================================================

const ChartContext = React.createContext<ChartConfig | null>(null);

export function useChart() {
  const context = React.useContext(ChartContext);

  if (!context) {
    throw new Error('useChart must be used within a <ChartContainer />');
  }

  return context;
}

// ============================================================================
// Chart Container
// ============================================================================

export interface ChartContainerBaseProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Chart configuration
   */
  config: ChartConfig;
  
  /**
   * Size variant
   * @default 'md'
   */
  size?: ChartSize;
}

/**
 * ChartContainerBase - Container wrapper for charts
 * 
 * Provides CSS variables for chart colors and handles responsive sizing.
 */
export const ChartContainerBase = React.forwardRef<HTMLDivElement, ChartContainerBaseProps>(
  ({ config, size = 'md', style, children, ...props }, ref) => {
    // Generate CSS variables from config
    const cssVars = Object.entries(config).reduce(
      (acc, [key, value]) => {
        if (value.color) {
          acc[`--color-${key}`] = value.color;
        }
        return acc;
      },
      {} as Record<string, string>
    );

    return (
      <ChartContext.Provider value={config}>
        <div
          ref={ref}
          data-size={size}
          style={{ ...cssVars, ...style }}
          {...props}
        >
          {children}
        </div>
      </ChartContext.Provider>
    );
  }
);
ChartContainerBase.displayName = 'ChartContainerBase';

// ============================================================================
// Chart
// ============================================================================

export interface ChartBaseProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Chart data
   */
  data?: Record<string, unknown>[];
  
  /**
   * Chart configuration
   */
  config?: ChartConfig;
  
  /**
   * Chart type
   * @default 'line'
   */
  chartType?: ChartType;
}

/**
 * ChartBase - Chart root component
 * 
 * Typically wraps a Recharts chart component.
 */
export const ChartBase = React.forwardRef<HTMLDivElement, ChartBaseProps>(
  ({ chartType = 'line', ...props }, ref) => (
    <div ref={ref} role="img" data-chart-type={chartType} {...props} />
  )
);
ChartBase.displayName = 'ChartBase';

// ============================================================================
// Chart Tooltip
// ============================================================================

export interface ChartTooltipBaseProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Whether tooltip is active/visible
   */
  active?: boolean;
  
  /**
   * Tooltip payload data
   */
  payload?: Record<string, unknown>[];
  
  /**
   * Label for the tooltip (e.g., x-axis value)
   */
  label?: string;
  
  /**
   * Whether to hide the label
   */
  hideLabel?: boolean;
  
  /**
   * Whether to hide the indicator
   */
  hideIndicator?: boolean;
  
  /**
   * Custom label key in payload
   */
  labelKey?: string;
  
  /**
   * Custom name key in payload
   */
  nameKey?: string;
  
  /**
   * Indicator shape
   * @default 'dot'
   */
  indicator?: 'dot' | 'line' | 'dashed';
}

/**
 * ChartTooltipBase - Chart tooltip
 */
export const ChartTooltipBase = React.forwardRef<HTMLDivElement, ChartTooltipBaseProps>(
  (
    {
      active,
      payload,
      label,
      hideLabel,
      hideIndicator,
      indicator = 'dot',
      ...props
    },
    ref
  ) => (
    <div
      ref={ref}
      role="tooltip"
      data-active={active || undefined}
      data-indicator={indicator}
      data-hide-label={hideLabel || undefined}
      data-hide-indicator={hideIndicator || undefined}
      {...props}
    />
  )
);
ChartTooltipBase.displayName = 'ChartTooltipBase';

// ============================================================================
// Chart Tooltip Content
// ============================================================================

export interface ChartTooltipContentBaseProps extends ChartTooltipBaseProps {}

/**
 * ChartTooltipContentBase - Tooltip content wrapper
 */
export const ChartTooltipContentBase = React.forwardRef<
  HTMLDivElement,
  ChartTooltipContentBaseProps
>((props, ref) => <div ref={ref} {...props} />);
ChartTooltipContentBase.displayName = 'ChartTooltipContentBase';

// ============================================================================
// Chart Legend
// ============================================================================

export interface ChartLegendBaseProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Legend payload data
   */
  payload?: { value: string; color: string; type: string }[];
  
  /**
   * Custom name key in payload
   */
  nameKey?: string;
  
  /**
   * Vertical alignment of legend items
   * @default 'bottom'
   */
  verticalAlign?: 'top' | 'middle' | 'bottom';
  
  /**
   * Whether to hide the icon
   */
  hideIcon?: boolean;
}

/**
 * ChartLegendBase - Chart legend
 */
export const ChartLegendBase = React.forwardRef<HTMLDivElement, ChartLegendBaseProps>(
  ({ payload, hideIcon, ...props }, ref) => (
    <div
      ref={ref}
      role="list"
      aria-label="Chart legend"
      data-hide-icon={hideIcon || undefined}
      {...props}
    />
  )
);
ChartLegendBase.displayName = 'ChartLegendBase';

// ============================================================================
// Chart Legend Content
// ============================================================================

export interface ChartLegendContentBaseProps extends ChartLegendBaseProps {}

/**
 * ChartLegendContentBase - Legend content wrapper
 */
export const ChartLegendContentBase = React.forwardRef<
  HTMLDivElement,
  ChartLegendContentBaseProps
>((props, ref) => <div ref={ref} {...props} />);
ChartLegendContentBase.displayName = 'ChartLegendContentBase';

// ============================================================================
// Chart Style
// ============================================================================

export interface ChartStyleBaseProps {
  /**
   * Unique ID for the chart
   */
  id: string;
  
  /**
   * Chart configuration
   */
  config: ChartConfig;
}

/**
 * ChartStyleBase - Injects CSS variables for chart colors
 * 
 * This is typically rendered as a <style> tag.
 */
export const ChartStyleBase: React.FC<ChartStyleBaseProps> = ({ id, config }) => {
  const css = Object.entries(config)
    .filter(([, value]) => value.color)
    .map(([key, value]) => `[data-chart="${id}"] { --color-${key}: ${value.color}; }`)
    .join('\n');

  return <style dangerouslySetInnerHTML={{ __html: css }} />;
};
ChartStyleBase.displayName = 'ChartStyleBase';

// Bridge exports so version components consume Recharts via _base only
export * from 'recharts';

