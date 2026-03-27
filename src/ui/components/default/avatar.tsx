import { cn } from '@/lib/utils';
import * as React from 'react';
import { AvatarBase, AvatarFallbackBase, AvatarImageBase, type AvatarBaseProps } from '../_base/avatar';

export interface AvatarProps extends AvatarBaseProps {}

const getSizeStyles = (size: string = 'md') => {
    switch(size) {
        case 'xs': return 'h-6 w-6 text-[10px]';
        case 'sm': return 'h-8 w-8 text-xs';
        case 'md': return 'h-10 w-10 text-sm';
        case 'lg': return 'h-12 w-12 text-base';
        case 'xl': return 'h-14 w-14 text-lg';
        default: return 'h-10 w-10 text-sm';
    }
}

export const Avatar = React.forwardRef<React.ComponentRef<typeof AvatarBase>, AvatarProps>(
  ({ className, size = 'md', ...props }, ref) => (
    <AvatarBase
      ref={ref}
      size={size}
      className={cn(
        'relative flex shrink-0 overflow-hidden rounded-full',
        getSizeStyles(size),
        className
      )}
      {...props}
    />
  )
);
Avatar.displayName = 'Avatar';

export const AvatarImage = React.forwardRef<React.ComponentRef<typeof AvatarImageBase>, React.ComponentPropsWithoutRef<typeof AvatarImageBase>>(
  ({ className, ...props }, ref) => (
    <AvatarImageBase
      ref={ref}
      className={cn('aspect-square h-full w-full', className)}
      {...props}
    />
  )
);
AvatarImage.displayName = 'AvatarImage';

export const AvatarFallback = React.forwardRef<React.ComponentRef<typeof AvatarFallbackBase>, React.ComponentPropsWithoutRef<typeof AvatarFallbackBase>>(
  ({ className, ...props }, ref) => (
    <AvatarFallbackBase
      ref={ref}
      className={cn(
        'flex h-full w-full items-center justify-center rounded-full bg-[var(--df-surface)] text-[var(--df-muted)]',
        className
      )}
      {...props}
    />
  )
);
AvatarFallback.displayName = 'AvatarFallback';
