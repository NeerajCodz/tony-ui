import * as React from 'react';
import { cn } from '@/lib/utils';
import { techPanelEffectsClass, type TechPanelEffects } from './_effects';
import { Check, ChevronsUpDown } from 'lucide-react';
import type { ComboboxBaseProps } from '../_base/combobox';
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from './command';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from './popover';

interface ComboboxProps {
    options: { value: string; label: string }[];
    value?: string;
    onValueChange?: (value: string) => void;
    placeholder?: string;
    emptyText?: string;
    className?: string;
    visualType?: string; // Kept for compatibility, though mainly styles popover trigger
    effects?: TechPanelEffects;
}


export function Combobox({ 
    options, 
    value, 
    onValueChange, 
    placeholder = 'Select option...', 
    emptyText = 'No option found.',
    className,
    visualType,
    effects = 'on'
}: ComboboxProps) {
    const [open, setOpen] = React.useState(false)
   
    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <button
            role='combobox'
            aria-expanded={open}
            className={cn(techPanelEffectsClass(effects), 
                'flex h-10 w-full items-center justify-between border border-[var(--tp-border-inner)] bg-[var(--tp-inset)] px-3 py-2 text-sm placeholder:text-[var(--text-muted)] focus:outline-none focus:ring-1 focus:ring-[var(--tp-accent)] disabled:cursor-not-allowed disabled:opacity-50 font-mono text-[var(--text-primary)] transition-colors hover:bg-[var(--tp-accent)]/5 rounded-none',
                className
            )}
            style={{ } as React.CSSProperties}
          >
            {value
              ? options.find((option) => option.value === value)?.label
              : placeholder}
            <ChevronsUpDown className='ml-2 h-4 w-4 shrink-0 opacity-50' />
          </button>
        </PopoverTrigger>
        <PopoverContent className='w-[200px] p-0 border-none bg-transparent shadow-none rounded-none' style={{ clipPath: 'none' }}>
           <div className="w-full" style={{ } as React.CSSProperties}>
              <Command className="border-none">
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
                          className={cn(techPanelEffectsClass(effects), 
                            'mr-2 h-4 w-4 text-[var(--tp-accent)]',
                            value === option.value ? 'opacity-100' : 'opacity-0'
                          )}
                        />
                        {option.label}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
           </div>
        </PopoverContent>
      </Popover>
    )
}

// Also export parts if needed for custom composition, but adhering to the design
export const ComboboxTrigger = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement> & { effects?: TechPanelEffects }>(
    ({ className, effects = 'on', children, ...props }, ref) => (
        <button
            ref={ref}
            className={cn(techPanelEffectsClass(effects), 
                'flex h-10 w-full items-center justify-between border border-[var(--tp-border-inner)] bg-[var(--tp-inset)] px-3 py-2 text-sm placeholder:text-[var(--text-muted)] focus:outline-none focus:ring-1 focus:ring-[var(--tp-accent)] disabled:cursor-not-allowed disabled:opacity-50 font-mono text-[var(--text-primary)] transition-colors hover:bg-[var(--tp-accent)]/5 rounded-none',
                className
            )}
            style={{ } as React.CSSProperties}
            {...props}
        >
            {children}
            <ChevronsUpDown className='ml-2 h-4 w-4 shrink-0 opacity-50' />
        </button>
    )
);
ComboboxTrigger.displayName = 'ComboboxTrigger';
