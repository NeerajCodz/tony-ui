import * as React from 'react';
import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { holoFrameEffectsClass, type HoloFrameEffects } from './_effects';
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
    effects?: HoloFrameEffects;
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
            'w-[280px] justify-start text-left font-normal font-mono',
            !date && 'text-[var(--hf-text)]',
            className
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, 'PPP') : <span>{placeholder}</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className={holoFrameEffectsClass(effects) + ' w-auto p-0'} align="start">
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
