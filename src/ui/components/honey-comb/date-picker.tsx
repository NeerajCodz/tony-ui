import * as React from 'react';
import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { honeyCombEffectsClass, type HoneyCombEffects } from './_effects';
import { Button } from './button';
import { Calendar } from './calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from './popover';

export interface DatePickerProps {
    date?: Date;
    setDate?: (date: Date | undefined) => void;
    className?: string;
    placeholder?: string;
    effects?: HoneyCombEffects;
}

export function DatePicker({
  date,
  setDate,
  className,
  effects = 'on',
  placeholder = "Pick a date"
}: DatePickerProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          visualType="outline"
          effects={effects}
          className={cn(
            'w-[280px] justify-start text-left font-normal font-["JetBrains_Mono"]',
            !date && 'text-[var(--text-muted)]',
            className
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, 'PPP') : <span>{placeholder}</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className={honeyCombEffectsClass(effects) + ' w-auto p-0'} align="start">
        <Calendar
          effects={effects}
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
