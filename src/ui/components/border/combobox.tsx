import * as React from 'react';
import { ComboboxBase, type ComboboxBaseProps } from '@/ui/components/_base/combobox';
import { cn } from '@/lib/utils';
import { Button } from '@/ui/components/border/button';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/ui/components/border/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/ui/components/border/popover';
import { Check, ChevronsUpDown } from 'lucide-react';

const Combobox = ({ className, ...props }: ComboboxBaseProps) => {
  return (
    <ComboboxBase
      className={cn('font-mono', className)}
      {...props}
    />
  );
};

export { Combobox };
