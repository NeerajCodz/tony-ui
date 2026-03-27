import { format } from '../_base/date-picker';
import { Calendar as CalendarIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/ui/components/raised/button';
import { Calendar } from '@/ui/components/raised/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/ui/components/raised/popover';

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
            'w-[280px] justify-start text-left font-normal rounded-[4px] font-mono',
            !date && 'text-[var(--text-muted)]'
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, 'PPP') : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0 rounded-[4px]" align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
          className="rounded-[4px] border-0 shadow-none"
        />
      </PopoverContent>
    </Popover>
  );
}

