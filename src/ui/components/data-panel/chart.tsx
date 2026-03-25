import * as React from 'react';
import {
  ChartBase,
  ChartContainerBase,
  ChartLegendBase,
  ChartLegendContentBase,
  ChartStyleBase,
  ChartTooltipBase,
  ChartTooltipContentBase,
  ResponsiveContainer,
  type ChartConfig,
  useChart,
} from '../_base/chart';
import { cn } from '@/lib/utils';

/* -------------------------------------------------------------------------- */
/*                               Chart Container                              */
/* -------------------------------------------------------------------------- */

const ChartContainer = React.forwardRef<
  React.ComponentRef<typeof ChartContainerBase>,
  React.ComponentPropsWithoutRef<typeof ChartContainerBase> & { chartType?: 'line' | 'bar' | 'pie' | 'area' | 'radar' | 'scatter' | 'composed' }
>(({ className, chartType, ...props }, ref) => {
  return (
    <ChartContainerBase
      ref={ref}
      className={cn(
        "flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-[var(--text-muted)] [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-[var(--dp-border)]/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-[var(--dp-border)] [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-none [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-[var(--dp-border)] [&_.recharts-radial-bar-background-sector]:fill-[var(--text-muted)] [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-[var(--text-muted)] [&_.recharts-reference-line_[stroke='#ccc']]:stroke-[var(--dp-border)] [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-none [&_.recharts-surface]:outline-none font-mono",
        className
      )}
      {...props}
    >
      <ChartStyleBase id="chart" config={props.config} />
      <ResponsiveContainer>
        <ChartBase chartType={chartType ?? 'line'}>
          {props.children}
        </ChartBase>
      </ResponsiveContainer>
    </ChartContainerBase>
  );
});
ChartContainer.displayName = 'ChartContainer';

/* -------------------------------------------------------------------------- */
/*                                Chart Tooltip                               */
/* -------------------------------------------------------------------------- */

const ChartTooltip = ChartTooltipBase;

const ChartTooltipContent = React.forwardRef<
  React.ComponentRef<typeof ChartTooltipContentBase>,
  React.ComponentPropsWithoutRef<typeof ChartTooltipContentBase> & {
    hideLabel?: boolean;
    hideIndicator?: boolean;
    indicator?: 'line' | 'dot' | 'dashed';
    label?: string;
    payload?: any[];
    active?: boolean;
    labelFormatter?: (value: any, payload: any[]) => React.ReactNode;
    labelClassName?: string;
    formatter?: (value: any, name: string, item: any, index: number, payload: any) => React.ReactNode;
  }
>(({ className, indicator = 'dot', hideLabel = false, hideIndicator = false, label, payload, active, ...props }, ref) => {
  const config = useChart();
  
  if (!active || !payload?.length) {
    return null;
  }

  const nestLabel = payload.length === 1 && indicator !== 'dot';
  const tooltipLabel = React.useMemo(() => {
    if (hideLabel || !payload.length) {
      return null;
    }
    
    const [item] = payload;
    const key = `${item.name || item.dataKey || 'value'}`;
    const value =
      !nestLabel ? (label ?? (item.payload as any)[item.dataKey as string]) : config[key as string]?.label;
    
    if (props.labelFormatter) {
      return (
        <div className={cn('font-bold font-mono ', props.labelClassName)}>
          {props.labelFormatter(value, payload)}
        </div>
      );
    }

    if (!value) {
      return null;
    }

    return <div className={cn('font-bold font-mono ', props.labelClassName)}>{value}</div>;
  }, [label, payload, hideLabel, nestLabel, config, props.labelFormatter, props.labelClassName]);

  return (
    <div
      ref={ref}
      className={cn(
        'grid min-w-[8rem] items-start gap-1.5 border border-[var(--dp-border)] bg-[var(--dp-bg)] px-2.5 py-1.5 text-xs shadow-xl',
        className
      )}
    >
      {!nestLabel ? tooltipLabel : null}
      <div className="grid gap-1.5">
        {payload.map((item, index) => {
          const key = `${item.name || item.dataKey || 'value'}`;
          const itemConfig = getPayloadConfigFromPayload(config, item, key);
          const indicatorColor = (item.payload as any).fill || item.color;

          return (
            <div
              key={item.dataKey as React.Key}
              className={cn(
                'flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-[var(--text-muted)]',
                indicator === 'dot' && 'items-center'
              )}
            >
              {props.formatter && item?.value !== undefined && item.name ? (
                (props.formatter as any)(item.value, item.name, item, index, item.payload)
              ) : (
                <>
                  {itemConfig?.icon ? (
                    <itemConfig.icon />
                  ) : (
                    !hideIndicator && (
                      <div
                        className={cn(
                          'shrink-0 border-[--color-border] bg-[--color-bg]',
                          indicator === 'dot' && 'h-2.5 w-2.5',
                          indicator === 'line' && 'w-1',
                          indicator === 'dashed' && 'w-0 border-[1.5px] border-dashed bg-transparent',
                          nestLabel && indicator === 'dashed' && 'my-0.5'
                        )}
                        style={
                          {
                            '--color-bg': indicatorColor,
                            '--color-border': indicatorColor,
                            'clipPath': indicator === 'dot' ? 'polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)' : undefined
                          } as React.CSSProperties
                        }
                      />
                    )
                  )}
                  <div
                    className={cn(
                      'flex flex-1 justify-between leading-none',
                      nestLabel ? 'items-end' : 'items-center'
                    )}
                  >
                    <div className="grid gap-1.5">
                      {nestLabel ? tooltipLabel : null}
                      <span className="text-[var(--text-muted)] font-mono">
                        {itemConfig?.label || item.name}
                      </span>
                    </div>
                    {item.value && (
                      <span className="font-mono font-medium tabular-nums text-[var(--text-primary)]">
                        {item.value.toLocaleString()}
                      </span>
                    )}
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
});
ChartTooltipContent.displayName = 'ChartTooltipContent';

/* -------------------------------------------------------------------------- */
/*                                Chart Legend                                */
/* -------------------------------------------------------------------------- */

const ChartLegend = ChartLegendBase;

const ChartLegendContent = React.forwardRef<
  React.ComponentRef<typeof ChartLegendContentBase>,
  React.ComponentPropsWithoutRef<typeof ChartLegendContentBase>
>(({ className, hideIcon = false, payload, verticalAlign = 'bottom', nameKey }, ref) => {
  const config = useChart();

  if (!payload?.length) {
    return null;
  }

  return (
    <div
      ref={ref}
      className={cn(
        'flex items-center justify-center gap-4',
        verticalAlign === 'top' ? 'pb-3' : 'pt-3',
        className
      )}
    >
      {payload.map((item) => {
        const key = `${nameKey || (item as any).dataKey || 'value'}`;
        const itemConfig = getPayloadConfigFromPayload(config, item, key);

        return (
          <div
            key={item.value}
            className={cn(
              'flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-[var(--text-muted)]'
            )}
          >
            {itemConfig?.icon && !hideIcon ? (
              <itemConfig.icon />
            ) : (
              <div
                className="h-2 w-2 shrink-0"
                style={{
                  backgroundColor: item.color,
                  clipPath: 'polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)'
                }}
              />
            )}
            <span className="text-sm text-[var(--text-muted)] font-mono">
              {itemConfig?.label}
            </span>
          </div>
        );
      })}
    </div>
  );
});
ChartLegendContent.displayName = 'ChartLegendContent';

// Helper function
function getPayloadConfigFromPayload(
  config: ChartConfig,
  payload: unknown,
  key: string
): any {
  if (typeof payload !== 'object' || payload === null) {
    return undefined;
  }

  const payloadPayload =
    'payload' in payload &&
    typeof (payload as any).payload === 'object' &&
    (payload as any).payload !== null
      ? (payload as any).payload
      : undefined;

  let configLabelKey: string = key;

  if (
    key in payload &&
    typeof (payload as any)[key] === 'string'
  ) {
    configLabelKey = (payload as any)[key] as string;
  } else if (
    payloadPayload &&
    key in payloadPayload &&
    typeof payloadPayload[key] === 'string'
  ) {
    configLabelKey = payloadPayload[key] as string;
  }

  return configLabelKey in config
    ? config[configLabelKey]
    : config[key as keyof typeof config];
}

export {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  ChartStyleBase as ChartStyle,
};
export type { ChartConfig };
