import * as React from 'react';
import { AvatarPrimitive } from '../_base/avatar';
import { cn } from '@/lib/utils';
import { terminalWindowEffectsClass, type TerminalWindowEffects } from './_effects';

const Avatar = React.forwardRef<
  React.ComponentRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root> & { effects?: TerminalWindowEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn(terminalWindowEffectsClass(effects), 
      'relative flex h-10 w-10 shrink-0 overflow-hidden rounded-none border border-[var(--tm-phosphor)]',
      className
    )}
    {...props}
  />
));
Avatar.displayName = AvatarPrimitive.Root.displayName;

const AvatarImage = React.forwardRef<
  React.ComponentRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image> & { effects?: TerminalWindowEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn(terminalWindowEffectsClass(effects), 'aspect-square h-full w-full grayscale contrast-125 sepia hover:grayscale-0 hover:sepia-0 transition-all', className)}
    {...props}
  />
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

const AvatarFallback = React.forwardRef<
  React.ComponentRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback> & { effects?: TerminalWindowEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(terminalWindowEffectsClass(effects), 
      'flex h-full w-full items-center justify-center rounded-none bg-[var(--tm-phosphor)]/10 font-mono text-[var(--tm-phosphor)]',
      className
    )}
    {...props}
  />
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

export { Avatar, AvatarImage, AvatarFallback };
