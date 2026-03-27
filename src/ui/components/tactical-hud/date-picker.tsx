import { format } from '../_base/date-picker';
import { Calendar as CalendarIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { tacticalHudEffectsClass, type TacticalHudEffects } from './_effects';
import { Button } from './button';
import { Calendar } from './calendar';
import { Popover, PopoverContent, PopoverTrigger } from './popover';

export interface DatePickerProps {
    date?: Date;
    setDate?: (date: Date | undefined) => void;
    className?: string;
    placeholder?: string;
    effects?: TacticalHudEffects;
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
            'w-[280px] justify-start text-left font-normal font-sans',
            !date && 'text-[var(--th-muted)]',
            className
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, 'PPP') : <span>{placeholder}</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className={cn(tacticalHudEffectsClass(effects), 'w-auto p-0 border-0')} align="start" style={{ clipPath: 'none' }}>
        <Calendar
          effects={effects}
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
          className="p-0 border-0"
        />
      </PopoverContent>
    </Popover>
  );
}

