/**
 * Angular Corner Drawer - Cut corners design from bottom
 */
import React from 'react';
import { Drawer as DrawerPrimitive } from 'vaul';
import { cn } from '../../../lib/utils';
import { X } from 'lucide-react';
import { CLIP_PATHS } from '../../utils/clip-paths.js';
import { getVariantColor, getVariantIcon } from '../../utils/variant-icons.js';
import type { DrawerContentProps, DrawerHeaderProps, DrawerTitleProps, DrawerDescriptionProps } from '../../types/components/drawer';

const CLIP_PATH_TOP = CLIP_PATHS['angular-corner'].cardTop || 'polygon(0 8px, 8px 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%)';

export const Overlay = React.forwardRef<HTMLDivElement, any>(({ className, ...props }, ref) => {
  return (
    <DrawerPrimitive.Overlay
      ref={ref}
      className={cn('fixed inset-0 z-50 bg-black/60 backdrop-blur-sm', className)}
      {...props}
    />
  );
});
Overlay.displayName = 'Overlay';

export const Content = React.forwardRef<HTMLDivElement, DrawerContentProps>(
  ({ className, children, variant = 'primary', ...props }, ref) => {
    const color = getVariantColor(variant);
    const VariantIcon = getVariantIcon(variant);

    const dynamicStyle = {
      borderColor: `var(--${color}-500)`,
      clipPath: CLIP_PATH_TOP,
      backgroundColor: 'rgb(3 7 18 / 0.95)',
    } as React.CSSProperties;

    return (
      <DrawerPrimitive.Content
        ref={ref}
        className={cn(
          'fixed bottom-0 left-0 right-0 z-50 mt-24 flex h-auto flex-col border-t-2',
          `text-${color}-50`,
          className
        )}
        style={dynamicStyle}
        {...props}
      >
        <div className="mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted/20" />

        {/* Cut corner accents */}
        <div className="absolute top-0 left-4 w-12 h-[2px]" style={{ backgroundColor: `var(--${color}-500)` }} />
        <div className="absolute top-0 right-4 w-12 h-[2px]" style={{ backgroundColor: `var(--${color}-500)` }} />

        {/* Variant Icon Badge */}
        <div 
          className="absolute top-6 right-6 p-2 rounded border backdrop-blur-sm z-50 flex items-center justify-center"
          style={{ 
            borderColor: `var(--${color}-500)`,
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            color: `var(--${color}-400)`,
          }}
        >
          <VariantIcon className="w-5 h-5" />
        </div>

        {children}
      </DrawerPrimitive.Content>
    );
  }
);
Content.displayName = 'Content';

export const Title = React.forwardRef<HTMLHeadingElement, DrawerTitleProps>(
  ({ className, variant = 'primary', ...props }, ref) => {
    const color = getVariantColor(variant);
    return (
      <DrawerPrimitive.Title
        ref={ref}
        className={cn(
          'text-lg font-bold uppercase tracking-widest font-mono leading-none',
          `text-${color}-100`,
          className
        )}
        style={{ color: `var(--${color}-100)` }}
        {...props}
      />
    );
  }
);
Title.displayName = 'Title';

export const Description = React.forwardRef<HTMLParagraphElement, DrawerDescriptionProps>(
  ({ className, variant = 'primary', ...props }, ref) => {
    const color = getVariantColor(variant);
    return (
      <DrawerPrimitive.Description
        ref={ref}
        className={cn(
          'text-sm font-mono opacity-70',
          `text-${color}-300`,
          className
        )}
        style={{ color: `var(--${color}-300)` }}
        {...props}
      />
    );
  }
);
Description.displayName = 'Description';
