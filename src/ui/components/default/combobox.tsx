import { cn } from '@/lib/utils';
import { Check, ChevronsUpDown } from 'lucide-react';
import * as React from 'react';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from './command';
import { Popover, PopoverContent, PopoverTrigger } from './popover';

interface ComboboxProps {
    options: { value: string; label: string }[];
    value?: string;
    onValueChange?: (value: string) => void;
    placeholder?: string;
    emptyText?: string;
    className?: string;
}

export function Combobox({ 
    options, 
    value, 
    onValueChange, 
    placeholder = 'Select option...', 
    emptyText = 'No option found.',
    className
}: ComboboxProps) {
    const [open, setOpen] = React.useState(false)
   
    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <button
            role='combobox'
            aria-expanded={open}
            className={cn(
                'flex h-10 w-full items-center justify-between rounded-md border border-[var(--df-border)] bg-[var(--df-surface)] px-3 py-2 text-sm placeholder:text-[var(--df-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--df-accent)] disabled:cursor-not-allowed disabled:opacity-50',
                className
            )}
          >
            {value
              ? options.find((option) => option.value === value)?.label
              : placeholder}
            <ChevronsUpDown className='ml-2 h-4 w-4 shrink-0 opacity-50' />
          </button>
        </PopoverTrigger>
        <PopoverContent className='w-[200px] p-0'>
          <Command>
            <CommandInput placeholder={placeholder} />
            <CommandList>
              <CommandEmpty>{emptyText}</CommandEmpty>
              <CommandGroup>
                {options.map((option) => (
                  <CommandItem
                    key={option.value}
                    value={option.value}
                    onSelect={(currentValue) => {
                        onValueChange?.(currentValue === value ? '' : currentValue)
                        setOpen(false)
                    }}
                  >
                    <Check
                      className={cn(
                        'mr-2 h-4 w-4',
                        value === option.value ? 'opacity-100' : 'opacity-0'
                      )}
                    />
                    {option.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    )
}

export const ComboboxTrigger = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
    ({ className, children, ...props }, ref) => (
        <button
            ref={ref}
            className={cn(
                'flex h-10 w-full items-center justify-between rounded-md border border-[var(--df-border)] bg-[var(--df-surface)] px-3 py-2 text-sm placeholder:text-[var(--df-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--df-accent)] disabled:cursor-not-allowed disabled:opacity-50',
                className
            )}
            {...props}
        >
            {children}
            <ChevronsUpDown className='ml-2 h-4 w-4 shrink-0 opacity-50' />
        </button>
    )
);
ComboboxTrigger.displayName = 'ComboboxTrigger';
