/**
 * Holo Frame Drawer - Holographic glowing edges from bottom
 */
import React from 'react';
import { Drawer as DrawerPrimitive } from 'vaul';
import { cn } from '../../../lib/utils';
import { getVariantColor, getVariantIcon } from '../../utils/variant-icons.js';
import type { DrawerContentProps, DrawerHeaderProps, DrawerTitleProps, DrawerDescriptionProps } from '../../types/components/drawer';

export const Overlay = React.forwardRef<HTMLDivElement, any>(({ className, ...props }, ref) => {
  return (
    <DrawerPrimitive.Overlay
      ref={ref}
      className={cn('fixed inset-0 z-50 bg-cyan-900/20 backdrop-blur-md', className)}
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
      borderColor: `var(--${color}-400)`,
      backgroundColor: `rgba(var(--${color}-rgb, 6, 182, 212), 0.05)`,
      boxShadow: `
        inset 0 0 60px rgba(var(--${color}-rgb, 6, 182, 212), 0.15),
        0 -10px 40px rgba(var(--${color}-rgb, 6, 182, 212), 0.3)
      `,
    } as React.CSSProperties;

    return (
      <DrawerPrimitive.Content
        ref={ref}
        className={cn(
          'fixed bottom-0 left-0 right-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border-t-2 backdrop-blur-xl',
          `text-${color}-100`,
          className
        )}
        style={dynamicStyle}
        {...props}
      >
        <div className="mx-auto mt-4 h-2 w-[100px] rounded-full" style={{ backgroundColor: `var(--${color}-500)`, opacity: 0.5 }} />

        {/* Holographic glow lines */}
        <div 
          className="absolute top-0 left-0 right-0 h-[2px] pointer-events-none"
          style={{
            background: `linear-gradient(90deg, transparent 0%, var(--${color}-400) 50%, transparent 100%)`,
            boxShadow: `0 0 20px var(--${color}-400)`,
          }}
        />

        {/* Variant Icon Badge with glow */}
        <div 
          className="absolute top-6 right-6 p-2 rounded-full border backdrop-blur-md z-50 flex items-center justify-center animate-pulse"
          style={{ 
            borderColor: `var(--${color}-400)`,
            backgroundColor: `rgba(var(--${color}-rgb, 6, 182, 212), 0.1)`,
            color: `var(--${color}-300)`,
            boxShadow: `0 0 20px rgba(var(--${color}-rgb, 6, 182, 212), 0.6)`,
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
          'text-lg font-bold tracking-wide',
          `text-${color}-100`,
          className
        )}
        style={{ 
          color: `var(--${color}-100)`,
          textShadow: `0 0 15px var(--${color}-400)`,
        }}
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
          'text-sm opacity-80',
          `text-${color}-200`,
          className
        )}
        style={{ color: `var(--${color}-200)` }}
        {...props}
      />
    );
  }
);
Description.displayName = 'Description';
