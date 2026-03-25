import { format } from '../_base/date-picker';
import { Calendar as CalendarIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/ui/components/terminal-window/button';
import { Calendar } from '@/ui/components/terminal-window/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/ui/components/terminal-window/popover';
import { terminalWindowEffectsClass, type TerminalWindowEffects } from './_effects';

export interface DatePickerProps {
  date?: Date;
  setDate?: (date: Date | undefined) => void;
  className?: string;
  effects?: TerminalWindowEffects;
}

export function DatePicker({ date, setDate, className, effects = 'on' }: DatePickerProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          visualType='outline'
          className={cn(terminalWindowEffectsClass(effects), 
            'w-[280px] justify-start text-left font-normal rounded-none font-mono',
            !date && 'text-muted-foreground',
            className
          )}
        >
          <CalendarIcon className='mr-2 h-4 w-4' />
          {date ? format(date, 'PPP') : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className={cn(terminalWindowEffectsClass(effects), 'w-auto p-0 rounded-none border-[var(--tm-phosphor)]')}>
        <Calendar
          mode='single'
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}

