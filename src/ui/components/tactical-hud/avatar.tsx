import * as React from 'react';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import { cn } from '@/lib/utils';
import { tacticalHudEffectsClass, type TacticalHudEffects, bracketsStyle } from './_effects';

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root> & { effects?: TacticalHudEffects }
>(({ className, effects = 'on', style, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn(tacticalHudEffectsClass(effects), 
      'relative flex h-10 w-10 shrink-0 overflow-hidden bg-[var(--th-surface)]',
      className
    )}
    style={{ ...bracketsStyle, '--corner': '8px', '--width': '1px', '--pip': '0px', ...style } as React.CSSProperties}
    {...props}
  />
));
Avatar.displayName = AvatarPrimitive.Root.displayName;

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image> & { effects?: TacticalHudEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn(tacticalHudEffectsClass(effects), 'aspect-square h-full w-full object-cover', className)}
    {...props}
  />
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback> & { effects?: TacticalHudEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(tacticalHudEffectsClass(effects), 
      'flex h-full w-full items-center justify-center bg-[var(--th-surface)] text-[var(--th-primary)] font-sans font-bold',
      className
    )}
    {...props}
  />
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

export { Avatar, AvatarImage, AvatarFallback };
