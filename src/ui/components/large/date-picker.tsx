import * as React from 'react';
import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/ui/components/large/button';
import { Calendar } from '@/ui/components/large/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/ui/components/large/popover';

export interface DatePickerProps {
  date?: Date;
  setDate?: (date?: Date) => void;
}

export function DatePicker({ date, setDate }: DatePickerProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={'outline'}
          className={cn(
            'w-[280px] justify-start text-left font-normal rounded-2xl',
            !date && 'text-[var(--text-muted)]'
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, 'PPP') : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0 rounded-3xl" align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
          className="rounded-3xl border-0 shadow-none"
        />
      </PopoverContent>
    </Popover>
  );
}
