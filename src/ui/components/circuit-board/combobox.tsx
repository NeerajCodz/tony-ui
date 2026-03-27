import { cn } from '@/lib/utils';
import { ComboboxBase, type ComboboxBaseProps } from '@/ui/components/_base/combobox';

const Combobox = ({ className, ...props }: ComboboxBaseProps) => {
  return (
    <ComboboxBase
      className={cn('font-mono uppercase tracking-wide', className)}
      {...props}
    />
  );
};

export { Combobox };
