import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';
import * as React from 'react';
import { NativeSelectBase, NativeSelectOptGroupBase, NativeSelectOptionBase, type NativeSelectBaseProps } from '../_base/native-select';

export const NativeSelect = React.forwardRef<HTMLSelectElement, NativeSelectBaseProps>(
  ({ className, selectSize = 'md', visualType = 'default', children, ...props }, ref) => (
    <div className='relative'>
        <NativeSelectBase
        ref={ref}
        selectSize={selectSize}
        visualType={visualType}
        className={cn(
            'appearance-none w-full rounded-md border border-[var(--df-border)] bg-[var(--df-surface)] px-3 py-2 text-sm placeholder:text-[var(--df-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--df-accent)] disabled:cursor-not-allowed disabled:opacity-50',
            selectSize === 'sm' && 'h-8 px-2 py-1',
            selectSize === 'md' && 'h-10 px-3 py-2',
            selectSize === 'lg' && 'h-12 px-4 py-3',
            className
        )}
        {...props}
        >
        {children}
        </NativeSelectBase>
        <ChevronDown className='absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 pointer-events-none opacity-50' />
    </div>
  )
);
NativeSelect.displayName = 'NativeSelect';

export const NativeSelectOption = NativeSelectOptionBase;
export const NativeSelectOptGroup = NativeSelectOptGroupBase;
