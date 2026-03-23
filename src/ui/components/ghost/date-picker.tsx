import * as React from 'react';
import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from './button';
import { Calendar } from './calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from './popover';
import { ghostEffectsClass, type GhostEffects } from './_effects';

export interface DatePickerProps {
  date?: Date;
  setDate?: (date: Date | undefined) => void;
  effects?: GhostEffects;
}

export function DatePicker({ date, setDate, effects = 'on' }: DatePickerProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={'outline'}
          className={cn(ghostEffectsClass(effects), 
            'w-[280px] justify-start text-left font-normal font-display',
            !date && 'text-muted-foreground'
          )}
        >
          <CalendarIcon className='mr-2 h-4 w-4' />
          {date ? format(date, 'PPP') : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-auto p-0 font-display'>
        <Calendar
          mode='single'
          selected={date}
          onSelect={setDate}
          initialFocus
          effects={effects}
        />
      </PopoverContent>
    </Popover>
  );
}
