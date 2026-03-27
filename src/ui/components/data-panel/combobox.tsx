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
    visualType?: string; // Kept for compatibility, though mainly styles popover trigger
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
                'flex h-10 w-full items-center justify-between border border-[var(--dp-border)] bg-[var(--dp-surface)] px-3 py-2 text-sm placeholder:text-[var(--text-muted)] focus:outline-none focus:ring-1 focus:ring-[var(--dp-accent)] disabled:cursor-not-allowed disabled:opacity-50 font-mono text-[var(--text-primary)] transition-colors hover:bg-[var(--dp-accent)]/10',
                className
            )}
            style={{ '--corner': '6px' } as React.CSSProperties}
          >
            {value
              ? options.find((option) => option.value === value)?.label
              : placeholder}
            <ChevronsUpDown className='ml-2 h-4 w-4 shrink-0 opacity-50' />
          </button>
        </PopoverTrigger>
        <PopoverContent className='w-[200px] p-0 border-none bg-transparent shadow-none' style={{ clipPath: 'none' }}>
           {/* PopoverContent already has style, but here we want the Command to handle the shape if needed, or just let PopoverContent handle it.
               Actually PopoverContent in angular-corner has the clip-path. So we can just put Command inside.
               But Command also has a border. We might want to remove border from Command if PopoverContent has it.
               However, our Command component is designed to be standalone.
               Let's just put Command inside. The PopoverContent has padding p-4, we might want p-0 for combobox.
           */}
           <div className="w-full" style={{ '--corner': '8px' } as React.CSSProperties}>
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
                          className={cn(
                            'mr-2 h-4 w-4 text-[var(--dp-accent)]',
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
export const ComboboxTrigger = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
    ({ className, children, ...props }, ref) => (
        <button
            ref={ref}
            className={cn(
                'flex h-10 w-full items-center justify-between border border-[var(--dp-border)] bg-[var(--dp-surface)] px-3 py-2 text-sm placeholder:text-[var(--text-muted)] focus:outline-none focus:ring-1 focus:ring-[var(--dp-accent)] disabled:cursor-not-allowed disabled:opacity-50 font-mono text-[var(--text-primary)] transition-colors hover:bg-[var(--dp-accent)]/10',
                className
            )}
            style={{ '--corner': '6px' } as React.CSSProperties}
            {...props}
        >
            {children}
            <ChevronsUpDown className='ml-2 h-4 w-4 shrink-0 opacity-50' />
        </button>
    )
);
ComboboxTrigger.displayName = 'ComboboxTrigger';
