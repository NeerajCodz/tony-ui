import * as React from 'react';
import { AvatarBase, AvatarImageBase, AvatarFallbackBase, type AvatarBaseProps } from '../_base/avatar';
import { cn } from '@/lib/utils';
import { techPanelEffectsClass, type TechPanelEffects } from './_effects';

export interface AvatarProps extends AvatarBaseProps {
  effects?: TechPanelEffects;
}

const getSizeStyles = (size: string = 'md') => {
  switch (size) {
    case 'xs': return 'h-5 w-5  text-[8px]';
    case 'sm': return 'h-7 w-7  text-[10px]';
    case 'md': return 'h-9 w-9  text-xs';
    case 'lg': return 'h-12 w-12  text-sm';
    case 'xl': return 'h-16 w-16  text-base';
    case '2xl': return 'h-24 w-24  text-lg';
    default: return 'h-9 w-9  text-xs';
  }
};

const Avatar = React.forwardRef<React.ComponentRef<typeof AvatarBase>, AvatarProps>(
  ({ className, effects = 'on', size = 'md', shape = 'square', style, ...props }, ref) => {
    return (
      <AvatarBase
        ref={ref}
        size={size}
        shape={shape}
        style={{ ...style }}
        className={cn(techPanelEffectsClass(effects), 
          'relative flex shrink-0 overflow-hidden bg-[var(--tp-panel)] border border-[var(--tp-border-outer)] rounded-none',
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
  React.ComponentPropsWithoutRef<typeof AvatarImageBase> & { effects?: TechPanelEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <AvatarImageBase
    ref={ref}
    className={cn(techPanelEffectsClass(effects), 'aspect-square h-full w-full object-cover', className)}
    {...props}
  />
));
AvatarImage.displayName = 'AvatarImage';

const AvatarFallback = React.forwardRef<
  React.ComponentRef<typeof AvatarFallbackBase>,
  React.ComponentPropsWithoutRef<typeof AvatarFallbackBase> & { effects?: TechPanelEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <AvatarFallbackBase
    ref={ref}
    className={cn(techPanelEffectsClass(effects), 
      'flex h-full w-full items-center justify-center bg-[var(--tp-panel)] text-[var(--text-secondary)] font-mono font-bold',
      className
    )}
    {...props}
  />
));
AvatarFallback.displayName = 'AvatarFallback';

export { Avatar, AvatarImage, AvatarFallback };
