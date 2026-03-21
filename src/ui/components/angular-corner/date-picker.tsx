'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { DatePickerBase } from '../_base/date-picker';
import type { VariantColors } from '../../types/common';
import { normalizeColors, getCoreTypeStyles } from '../_shared/version-styles';

type ComponentType = 'default' | 'solid' | 'outline' | 'ghost' | 'inverse' | 'contrast' | 'soft';

interface StyledProps {
  type?: ComponentType;
  uiType?: ComponentType;
  colors?: VariantColors;
}

const versionKey = 'angular-corner';

const PICKER_CLIP_PATH = 'polygon(12px 0, calc(100% - 12px) 0, 100% 12px, 100% calc(100% - 12px), calc(100% - 12px) 100%, 12px 100%, 0 calc(100% - 12px), 0 12px)';
const BUTTON_CLIP_PATH = 'polygon(6px 0, calc(100% - 6px) 0, 100% 6px, 100% calc(100% - 6px), calc(100% - 6px) 100%, 6px 100%, 0 calc(100% - 6px), 0 6px)';
const DAY_CLIP_PATH = 'polygon(3px 0, calc(100% - 3px) 0, 100% 3px, 100% calc(100% - 3px), calc(100% - 3px) 100%, 3px 100%, 0 calc(100% - 3px), 0 3px)';

export const DatePicker = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof DatePickerBase> & StyledProps
>(({ className, type, uiType, colors, date, onDateChange, disabled, style, children, ...props }, ref) => {
  const resolvedType = uiType ?? type ?? 'default';
  const palette = normalizeColors(colors);
  const typeStyles = getCoreTypeStyles(resolvedType, colors);

  const [selectedDate, setSelectedDate] = React.useState<Date | undefined>(date);
  const [viewDate, setViewDate] = React.useState(date ?? new Date());

  const backgroundColor =
    resolvedType === 'solid'
      ? palette.accentPrimary ?? palette.base
      : resolvedType === 'soft' && palette.accentRgb
        ? 'rgba(' + palette.accentRgb + ', 0.95)'
        : resolvedType === 'inverse'
          ? palette.foreground
          : (typeStyles.backgroundColor as string | undefined) ?? palette.base ?? '#0a0a0a';

  const borderColor =
    resolvedType === 'outline' || resolvedType === 'contrast'
      ? palette.accentPrimary ?? palette.border
      : palette.border ?? '#333';

  const textColor =
    resolvedType === 'solid'
      ? palette.base ?? '#fff'
      : resolvedType === 'inverse'
        ? palette.base ?? '#000'
        : (typeStyles.color as string | undefined) ?? palette.foreground ?? '#fff';

  const handleDateSelect = (day: number) => {
    const newDate = new Date(viewDate.getFullYear(), viewDate.getMonth(), day);
    if (disabled && disabled(newDate)) return;
    setSelectedDate(newDate);
    onDateChange?.(newDate);
  };

  const daysInMonth = new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(viewDate.getFullYear(), viewDate.getMonth(), 1).getDay();

  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const dayNames = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

  const prevMonth = () => setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() - 1, 1));
  const nextMonth = () => setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 1));

  const days: (number | null)[] = [];
  for (let i = 0; i < firstDayOfMonth; i++) days.push(null);
  for (let i = 1; i <= daysInMonth; i++) days.push(i);

  return (
    <DatePickerBase
      ref={ref}
      date={selectedDate}
      onDateChange={onDateChange}
      disabled={disabled}
      className={cn('inline-block p-4', className)}
      style={{
        clipPath: PICKER_CLIP_PATH,
        backgroundColor,
        border: '2px solid ' + borderColor,
        color: textColor,
        boxShadow: '0 0 12px ' + (palette.glow ?? 'rgba(0,0,0,0.3)'),
        ...style,
      }}
      data-version={versionKey}
      data-type={resolvedType}
      {...props}
    >
      <div className="flex items-center justify-between mb-4">
        <button
          type="button"
          onClick={prevMonth}
          className="flex h-8 w-8 items-center justify-center transition-all hover:scale-105"
          style={{
            clipPath: BUTTON_CLIP_PATH,
            backgroundColor: palette.base ?? '#111',
            border: '1px solid ' + (palette.border ?? '#444'),
            color: textColor,
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <span className="font-bold uppercase tracking-wider" style={{ letterSpacing: '0.08em', fontSize: '0.85rem' }}>
          {monthNames[viewDate.getMonth()]} {viewDate.getFullYear()}
        </span>
        <button
          type="button"
          onClick={nextMonth}
          className="flex h-8 w-8 items-center justify-center transition-all hover:scale-105"
          style={{
            clipPath: BUTTON_CLIP_PATH,
            backgroundColor: palette.base ?? '#111',
            border: '1px solid ' + (palette.border ?? '#444'),
            color: textColor,
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>
      <div className="grid grid-cols-7 gap-1 mb-2">
        {dayNames.map((day) => (
          <div
            key={day}
            className="flex h-8 w-8 items-center justify-center text-xs font-bold uppercase tracking-wider"
            style={{ color: textColor, opacity: 0.6, letterSpacing: '0.05em' }}
          >
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1">
        {days.map((day, idx) => {
          if (day === null) return <div key={'empty-' + idx} className="h-8 w-8" />;
          const dateObj = new Date(viewDate.getFullYear(), viewDate.getMonth(), day);
          const isDisabled = disabled ? disabled(dateObj) : false;
          const isSelected = selectedDate && selectedDate.toDateString() === dateObj.toDateString();
          const isToday = new Date().toDateString() === dateObj.toDateString();

          return (
            <button
              key={day}
              type="button"
              disabled={isDisabled}
              onClick={() => handleDateSelect(day)}
              className="flex h-8 w-8 items-center justify-center text-sm font-medium transition-all hover:scale-105 disabled:opacity-30 disabled:cursor-not-allowed"
              style={{
                clipPath: DAY_CLIP_PATH,
                backgroundColor: isSelected
                  ? palette.accentPrimary ?? '#fff'
                  : isToday
                    ? 'rgba(' + (palette.accentRgb ?? '100,100,100') + ', 0.2)'
                    : 'transparent',
                color: isSelected ? (palette.base ?? '#000') : textColor,
                border: isToday && !isSelected ? '1px solid ' + (palette.accentPrimary ?? '#555') : 'none',
              }}
            >
              {day}
            </button>
          );
        })}
      </div>
      {children}
    </DatePickerBase>
  );
});
DatePicker.displayName = 'DatePicker';

export default DatePicker;