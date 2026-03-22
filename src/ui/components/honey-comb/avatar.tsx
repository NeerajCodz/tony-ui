import * as React from 'react';
import { 
  AvatarBase, 
  AvatarImageBase, 
  AvatarFallbackBase, 
  type AvatarBaseProps 
} from '../_base/avatar';
import { cn } from '@/lib/utils';
import { honeyCombEffectsClass, type HoneyCombEffects } from './_effects';

export interface AvatarProps extends AvatarBaseProps {
  effects?: HoneyCombEffects;
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

const Avatar = React.forwardRef<React.ElementRef<typeof AvatarBase>, AvatarProps>(
  ({ className, effects = 'on', size = 'md', shape = 'circle', style, ...props }, ref) => {
    return (
      <AvatarBase
        ref={ref}
        size={size}
        shape={shape}
        style={{ ...style }}
        className={cn(honeyCombEffectsClass(effects), 
          'relative flex shrink-0 overflow-hidden bg-[var(--hc-surface)] border border-[var(--hc-hex-line)]',
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
  React.ElementRef<typeof AvatarImageBase>,
  React.ComponentPropsWithoutRef<typeof AvatarImageBase> & { effects?: HoneyCombEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <AvatarImageBase
    ref={ref}
    className={cn(honeyCombEffectsClass(effects), 'aspect-square h-full w-full object-cover', className)}
    {...props}
  />
));
AvatarImage.displayName = 'AvatarImage';

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarFallbackBase>,
  React.ComponentPropsWithoutRef<typeof AvatarFallbackBase> & { effects?: HoneyCombEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <AvatarFallbackBase
    ref={ref}
    className={cn(honeyCombEffectsClass(effects), 
      'flex h-full w-full items-center justify-center bg-[var(--hc-surface)] text-[var(--text-secondary)] font-["JetBrains_Mono"] font-bold',
      className
    )}
    {...props}
  />
));
AvatarFallback.displayName = 'AvatarFallback';

export { Avatar, AvatarImage, AvatarFallback };
