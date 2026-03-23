import * as React from 'react';
import { 
    ToggleGroupBase, 
    ToggleGroupItemBase,
    type ToggleGroupBaseProps,
    type ToggleGroupItemBaseProps
} from '../_base/toggle-group';
import { cn } from '@/lib/utils';

const ToggleGroupContext = React.createContext<{
    visualType?: string;
    size?: string;
    variant?: string;
}>({});

export const ToggleGroup = React.forwardRef<React.ComponentRef<typeof ToggleGroupBase>, ToggleGroupBaseProps>(
  ({ className, visualType = 'default', size = 'md', variant, appearance = 'joined', children, ...props }, ref) => (
    <ToggleGroupBase
      ref={ref}
      visualType={visualType}
      size={size}
      variant={variant}
      appearance={appearance}
      className={cn(
        'inline-flex h-10 items-center justify-center rounded-md bg-[var(--df-muted)] p-1 text-[var(--df-muted-text)]',
        className
      )}
      {...props}
    >
        <ToggleGroupContext.Provider value={{ visualType, size, variant }}>
            {children}
        </ToggleGroupContext.Provider>
    </ToggleGroupBase>
  )
);
ToggleGroup.displayName = 'ToggleGroup';

export const ToggleGroupItem = React.forwardRef<React.ComponentRef<typeof ToggleGroupItemBase>, ToggleGroupItemBaseProps>(
  ({ className, children, ...props }, ref) => {
    const context = React.useContext(ToggleGroupContext);
    return (
        <ToggleGroupItemBase
        ref={ref}
        className={cn(
            'inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--df-ring)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-[var(--df-surface)] data-[state=on]:text-[var(--df-text)] data-[state=on]:shadow-sm',
            context.size === 'sm' && 'h-8 px-2',
            context.size === 'md' && 'h-9 px-2.5',
            context.size === 'lg' && 'h-10 px-3',
            className
        )}
        {...props}
        >
            {children}
        </ToggleGroupItemBase>
    );
  }
);
ToggleGroupItem.displayName = 'ToggleGroupItem';
