/**
 * Tactical HUD Drawer - Military-style HUD
 */
import React from 'react';
import { Drawer as DrawerPrimitive } from 'vaul';
import { cn } from '../../../lib/utils';
import { getVariantColor, getVariantIcon } from '../../utils/variant-icons.js';
import type { DrawerContentProps, DrawerTitleProps, DrawerDescriptionProps } from '../../types/components/drawer';

export const Overlay = React.forwardRef<HTMLDivElement, any>(({ className, ...props }, ref) => {
  return (
    <DrawerPrimitive.Overlay
      ref={ref}
      className={cn('fixed inset-0 z-50 bg-black/70', className)}
      {...props}
    />
  );
});
Overlay.displayName = 'Overlay';

export const Content = React.forwardRef<HTMLDivElement, DrawerContentProps>(
  ({ className, children, variant = 'primary', ...props }, ref) => {
    const color = getVariantColor(variant);
    const VariantIcon = getVariantIcon(variant);

    return (
      <DrawerPrimitive.Content
        ref={ref}
        className={cn(
          'fixed bottom-0 left-0 right-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border-t-2 bg-gray-950',
          className
        )}
        style={{ borderColor: `var(--${color}-500)` } as React.CSSProperties}
        {...props}
      >
        <div className="mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted/20" />

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
        className={cn('text-lg font-bold', className)}
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
        className={cn('text-sm opacity-70', className)}
        style={{ color: `var(--${color}-300)` }}
        {...props}
      />
    );
  }
);
Description.displayName = 'Description';
