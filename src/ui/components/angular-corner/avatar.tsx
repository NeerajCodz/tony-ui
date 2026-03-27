import { cn } from '@/lib/utils';
import * as React from 'react';
import { AvatarBase, AvatarFallbackBase, AvatarImageBase, type AvatarBaseProps } from '../_base/avatar';

export interface AvatarProps extends AvatarBaseProps {}

const AC_CLIP_PATH = 'polygon(var(--corner) 0%, calc(100% - var(--corner)) 0%, 100% var(--corner), 100% calc(100% - var(--corner)), calc(100% - var(--corner)) 100%, var(--corner) 100%, 0% calc(100% - var(--corner)), 0% var(--corner))';

const getSizeStyles = (size: string = 'md') => {
  switch (size) {
    case 'xs': return 'h-5 w-5 [--corner:4px] text-[8px]';
    case 'sm': return 'h-7 w-7 [--corner:6px] text-[10px]';
    case 'md': return 'h-9 w-9 [--corner:8px] text-xs';
    case 'lg': return 'h-12 w-12 [--corner:10px] text-sm';
    case 'xl': return 'h-16 w-16 [--corner:12px] text-base';
    case '2xl': return 'h-24 w-24 [--corner:16px] text-lg';
    default: return 'h-9 w-9 [--corner:8px] text-xs';
  }
};

const Avatar = React.forwardRef<React.ComponentRef<typeof AvatarBase>, AvatarProps>(
  ({ className, size = 'md', shape = 'circle', style, ...props }, ref) => {
    return (
      <AvatarBase
        ref={ref}
        size={size}
        shape={shape}
        style={{ clipPath: AC_CLIP_PATH, ...style }}
        className={cn(
          'relative flex shrink-0 overflow-hidden bg-[var(--ac-surface)] border-2 border-[var(--ac-border)]',
          getSizeStyles(size),
          className
        )}
        {...props}
      />
    );
  }
);
Avatar.displayName = 'Avatar';

const AvatarImage = React.forwardRef<
  React.ComponentRef<typeof AvatarImageBase>,
  React.ComponentPropsWithoutRef<typeof AvatarImageBase>
>(({ className, ...props }, ref) => (
  <AvatarImageBase
    ref={ref}
    className={cn('aspect-square h-full w-full object-cover', className)}
    {...props}
  />
));
AvatarImage.displayName = 'AvatarImage';

const AvatarFallback = React.forwardRef<
  React.ComponentRef<typeof AvatarFallbackBase>,
  React.ComponentPropsWithoutRef<typeof AvatarFallbackBase>
>(({ className, ...props }, ref) => (
  <AvatarFallbackBase
    ref={ref}
    className={cn(
      'flex h-full w-full items-center justify-center bg-[var(--ac-surface)] text-[var(--text-secondary)] font-mono font-bold',
      className
    )}
    {...props}
  />
));
AvatarFallback.displayName = 'AvatarFallback';

export { Avatar,AvatarFallback,AvatarImage };
