import * as React from 'react';
import { 
    InputGroupBase, 
    InputLeftAddonBase, 
    InputRightAddonBase, 
    InputLeftElementBase, 
    InputRightElementBase,
    type InputGroupBaseProps,
    type InputLeftAddonBaseProps,
    type InputRightAddonBaseProps,
    type InputLeftElementBaseProps,
    type InputRightElementBaseProps
} from '../_base/input-group';
import { cn } from '@/lib/utils';

export const InputGroup = React.forwardRef<HTMLDivElement, InputGroupBaseProps>(
  ({ className, size = 'md', ...props }, ref) => (
    <InputGroupBase
      ref={ref}
      size={size}
      className={cn(
        'flex items-center w-full relative',
        className
      )}
      {...props}
    />
  )
);
InputGroup.displayName = 'InputGroup';

export const InputLeftAddon = React.forwardRef<HTMLDivElement, InputLeftAddonBaseProps>(
  ({ className, ...props }, ref) => (
    <InputLeftAddonBase
      ref={ref}
      className={cn(
        'flex items-center justify-center border border-[var(--df-border)] border-r-0 rounded-l-md bg-[var(--df-muted)] px-3 text-sm text-[var(--df-muted-text)]',
        className
      )}
      {...props}
    />
  )
);
InputLeftAddon.displayName = 'InputLeftAddon';

export const InputRightAddon = React.forwardRef<HTMLDivElement, InputRightAddonBaseProps>(
  ({ className, ...props }, ref) => (
    <InputRightAddonBase
      ref={ref}
      className={cn(
        'flex items-center justify-center border border-[var(--df-border)] border-l-0 rounded-r-md bg-[var(--df-muted)] px-3 text-sm text-[var(--df-muted-text)]',
        className
      )}
      {...props}
    />
  )
);
InputRightAddon.displayName = 'InputRightAddon';

export const InputLeftElement = React.forwardRef<HTMLDivElement, InputLeftElementBaseProps>(
  ({ className, interactive, ...props }, ref) => (
    <InputLeftElementBase
      ref={ref}
      interactive={interactive}
      className={cn(
        'absolute left-0 top-0 flex items-center justify-center z-10',
        interactive ? 'cursor-pointer' : 'pointer-events-none',
        className
      )}
      {...props}
    />
  )
);
InputLeftElement.displayName = 'InputLeftElement';

export const InputRightElement = React.forwardRef<HTMLDivElement, InputRightElementBaseProps>(
  ({ className, interactive, ...props }, ref) => (
    <InputRightElementBase
      ref={ref}
      interactive={interactive}
      className={cn(
        'absolute right-0 top-0 flex items-center justify-center z-10',
        interactive ? 'cursor-pointer' : 'pointer-events-none',
        className
      )}
      {...props}
    />
  )
);
InputRightElement.displayName = 'InputRightElement';
