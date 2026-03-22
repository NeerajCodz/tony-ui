import * as React from 'react';
import { ComboboxBase, type ComboboxBaseProps } from '@/ui/components/_base/combobox';
import { cn } from '@/lib/utils';

const Combobox = ({ className, ...props }: ComboboxBaseProps) => {
  return (
    <ComboboxBase
      className={cn('font-mono uppercase tracking-wide', className)}
      {...props}
    />
  );
};

export { Combobox };
