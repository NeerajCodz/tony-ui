import * as React from 'react';
import { InputGroupBase, InputLeftAddonBase, InputRightAddonBase, InputLeftElementBase, InputRightElementBase, type InputGroupBaseProps, type InputLeftAddonBaseProps, type InputRightAddonBaseProps, type InputLeftElementBaseProps, type InputRightElementBaseProps } from '../_base/input-group';
import { cn } from '@/lib/utils';

export const InputGroup = React.forwardRef<HTMLDivElement, InputGroupBaseProps>(
  ({ className, size = 'md', ...props }, ref) => (
    <InputGroupBase
      ref={ref}
      size={size}
      className={cn('relative flex w-full items-center rounded-[8px] font-sans', className)}
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
        'inline-flex items-center rounded-l-[8px] border border-r-0 border-transparent bg-[rgba(255,255,255,0.05)] px-3 text-sm text-[var(--pd-muted)]',
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
        'inline-flex items-center rounded-r-[8px] border border-l-0 border-transparent bg-[rgba(255,255,255,0.05)] px-3 text-sm text-[var(--pd-muted)]',
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
        'absolute left-0 top-0 z-10 inline-flex items-center justify-center px-3 text-[var(--pd-muted)]',
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
        'absolute right-0 top-0 z-10 inline-flex items-center justify-center px-3 text-[var(--pd-muted)]',
        interactive ? 'cursor-pointer' : 'pointer-events-none',
        className
      )}
      {...props}
    />
  )
);
InputRightElement.displayName = 'InputRightElement';
