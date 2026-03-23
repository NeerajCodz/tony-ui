import * as React from 'react';
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  type TooltipProps,
} from 'recharts';
import { cn } from '@/lib/utils';
import { terminalWindowEffectsClass, type TerminalWindowEffects } from './_effects';

// This is a simplified wrapper. In a real app, you might expose more Recharts props.

const CHART_COLORS = [
  'var(--tm-phosphor)',
  'var(--tm-phosphor-dim)',
  'var(--tm-red)',
  'var(--tm-blue)',
  'var(--tm-yellow)',
];

interface ChartProps {
  data: any[];
  categories: string[];
  index: string;
  type?: 'area' | 'bar' | 'line';
  className?: string;
  effects?: TerminalWindowEffects;
}

export function Chart({
  data,
  categories,
  index,
  type = 'area',
  className,
  effects = 'on',
}: ChartProps) {
  const ChartComponent = type === 'area' ? AreaChart : type === 'bar' ? BarChart : LineChart;

  return (
    <div className={cn(terminalWindowEffectsClass(effects), 'h-[300px] w-full', className)}>
      <ResponsiveContainer width='100%' height='100%'>
        <ChartComponent data={data}>
          <CartesianGrid strokeDasharray='3 3' stroke='var(--tm-phosphor)' strokeOpacity={0.2} vertical={false} />
          <XAxis
            dataKey={index}
            stroke='var(--tm-phosphor)'
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => \\\}
            style={{ fontFamily: 'monospace' }}
          />
          <YAxis
            stroke='var(--tm-phosphor)'
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => \\\}
            style={{ fontFamily: 'monospace' }}
          />
          <Tooltip
            content={({ active, payload, label }: TooltipProps<any, any>) => {
              if (active && payload && payload.length) {
                return (
                  <div className='rounded-none border border-[var(--tm-phosphor)] bg-[var(--tm-bg)] p-2 shadow-sm'>
                    <p className='mb-2 text-sm font-bold text-[var(--tm-phosphor)] font-mono'>{label}</p>
                    {payload.map((category, idx) => (
                      <div key={idx} className='flex flex-1 items-center space-x-2 font-mono text-xs text-[var(--tm-phosphor-dim)]'>
                        <div
                          className='h-2 w-2 rounded-full'
                          style={{ backgroundColor: category.color }}
                        />
                        <p>{category.name}: {category.value}</p>
                      </div>
                    ))}
                  </div>
                );
              }
              return null;
            }}
          />
          <Legend wrapperStyle={{ fontFamily: 'monospace', color: 'var(--tm-phosphor)' }} />
          {categories.map((category, idx) => {
            const color = CHART_COLORS[idx % CHART_COLORS.length];
            if (type === 'area') {
              return (
                <Area
                  key={category}
                  type='monotone'
                  dataKey={category}
                  stroke={color}
                  fill={color}
                  fillOpacity={0.2}
                  stackId='1'
                />
              );
            }
            if (type === 'bar') {
              return <Bar key={category} dataKey={category} fill={color} radius={[0, 0, 0, 0]} />;
            }
            return (
              <Line
                key={category}
                type='monotone'
                dataKey={category}
                stroke={color}
                strokeWidth={2}
                dot={false}
              />
            );
          })}
        </ChartComponent>
      </ResponsiveContainer>
    </div>
  );
}
