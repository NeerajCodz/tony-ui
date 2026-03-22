import * as React from 'react';
import {
  ChartBase,
  ChartContainerBase,
  ChartLegendBase,
  ChartLegendContentBase,
  ChartStyleBase,
  ChartTooltipBase,
  ChartTooltipContentBase,
  useChart,
  type ChartConfig,
} from '@/ui/components/_base/chart';
import { cn } from '@/lib/utils';
import { honeyCombEffectsClass, type HoneyCombEffects } from './_effects';
import { ResponsiveContainer } from 'recharts';

/* -------------------------------------------------------------------------- */
/*                               Chart Container                              */
/* -------------------------------------------------------------------------- */


const ChartContainer = React.forwardRef<
  React.ElementRef<typeof ChartContainerBase>,
  React.ComponentPropsWithoutRef<typeof ChartContainerBase> & { effects?: HoneyCombEffects } & { chartType?: 'line' | 'bar' | 'pie' | 'area' | 'radar' | 'scatter' | 'composed' }
>(({ className, effects = 'on', chartType, ...props }, ref) => {
  return (
    <ChartContainerBase
      ref={ref}
      className={cn(honeyCombEffectsClass(effects), 
        "flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-[var(--text-muted)] [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-[var(--hc-hex-line)]/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-[var(--hc-hex-line)] [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-none [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-[var(--hc-hex-line)] [&_.recharts-radial-bar-background-sector]:fill-[var(--text-muted)] [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-[var(--text-muted)] [&_.recharts-reference-line_[stroke='#ccc']]:stroke-[var(--hc-hex-line)] [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-none [&_.recharts-surface]:outline-none font-["JetBrains_Mono"]",
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
  React.ElementRef<typeof ChartTooltipContentBase>,
  React.ComponentPropsWithoutRef<typeof ChartTooltipContentBase> & { effects?: HoneyCombEffects } & {
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
>(({ className, effects = 'on', indicator = 'dot', hideLabel = false, hideIndicator = false, label, payload, active, ...props }, ref) => {
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
        <div className={cn(honeyCombEffectsClass(effects), 'font-bold font-["Barlow"] uppercase', props.labelClassName)}>
          {props.labelFormatter(value, payload)}
        </div>
      );
    }

    if (!value) {
      return null;
    }

    return <div className={cn(honeyCombEffectsClass(effects), 'font-bold font-["Barlow"] uppercase', props.labelClassName)}>{value}</div>;
  }, [label, payload, hideLabel, nestLabel, config, props.labelFormatter, props.labelClassName]);

  return (
    <div
      ref={ref}
      className={cn(honeyCombEffectsClass(effects), 
        'grid min-w-[8rem] items-start gap-1.5 border border-[var(--hc-hex-line)] bg-[var(--hc-surface)] px-2.5 py-1.5 text-xs shadow-xl',
        className
      )}
      style={{ '--corner': '8px' } as React.CSSProperties}
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
              className={cn(honeyCombEffectsClass(effects), 
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
                        className={cn(honeyCombEffectsClass(effects), 
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
                    className={cn(honeyCombEffectsClass(effects), 
                      'flex flex-1 justify-between leading-none',
                      nestLabel ? 'items-end' : 'items-center'
                    )}
                  >
                    <div className="grid gap-1.5">
                      {nestLabel ? tooltipLabel : null}
                      <span className="text-[var(--text-muted)] font-["JetBrains_Mono"]">
                        {itemConfig?.label || item.name}
                      </span>
                    </div>
                    {item.value && (
                      <span className="font-["JetBrains_Mono"] font-medium tabular-nums text-[var(--text-primary)]">
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
  React.ElementRef<typeof ChartLegendContentBase>,
  React.ComponentPropsWithoutRef<typeof ChartLegendContentBase> & { effects?: HoneyCombEffects }
>(({ className, effects = 'on', hideIcon = false, payload, verticalAlign = 'bottom', nameKey }, ref) => {
  const config = useChart();

  if (!payload?.length) {
    return null;
  }

  return (
    <div
      ref={ref}
      className={cn(honeyCombEffectsClass(effects), 
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
            className={cn(honeyCombEffectsClass(effects), 
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
            <span className="text-sm text-[var(--text-muted)] font-["JetBrains_Mono"]">
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
