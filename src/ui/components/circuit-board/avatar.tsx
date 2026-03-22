import * as React from 'react';
import { AvatarBase, AvatarImageBase, AvatarFallbackBase } from '@/ui/components/_base/avatar';
import { cn } from '@/lib/utils';

const Avatar = React.forwardRef<React.ElementRef<typeof AvatarBase>, React.ComponentPropsWithoutRef<typeof AvatarBase>>(
  ({ className, ...props }, ref) => (
    <AvatarBase
      ref={ref}
      className={cn(
        'relative flex h-10 w-10 shrink-0 overflow-hidden rounded-none border border-[var(--cb-trace)] shadow-[0_0_5px_var(--cb-trace)] bg-[var(--cb-soldermask)]',
        className
      )}
      {...props}
    />
  )
);
Avatar.displayName = 'Avatar';

const AvatarImage = React.forwardRef<React.ElementRef<typeof AvatarImageBase>, React.ComponentPropsWithoutRef<typeof AvatarImageBase>>(
  ({ className, ...props }, ref) => (
    <AvatarImageBase
      ref={ref}
      className={cn('aspect-square h-full w-full', className)}
      {...props}
    />
  )
);
AvatarImage.displayName = 'AvatarImage';

const AvatarFallback = React.forwardRef<React.ElementRef<typeof AvatarFallbackBase>, React.ComponentPropsWithoutRef<typeof AvatarFallbackBase>>(
  ({ className, ...props }, ref) => (
    <AvatarFallbackBase
      ref={ref}
      className={cn(
        'flex h-full w-full items-center justify-center rounded-none bg-[var(--cb-soldermask)] font-mono font-bold text-[var(--cb-trace-lit)] uppercase',
        className
      )}
      {...props}
    />
  )
);
AvatarFallback.displayName = 'AvatarFallback';

export { Avatar, AvatarImage, AvatarFallback };
