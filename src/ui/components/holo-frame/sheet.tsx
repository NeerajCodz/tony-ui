/**
 * Holo Frame Sheet - Holographic glowing edges effect
 */
import React from 'react';
import * as SheetPrimitive from '@radix-ui/react-dialog';
import { cva } from 'class-variance-authority';
import { cn } from '../../../lib/utils';
import { X } from 'lucide-react';
import { getVariantColor, getVariantIcon } from '../../utils/variant-icons.js';
import type { SheetContentProps, SheetHeaderProps, SheetTitleProps, SheetDescriptionProps } from '../../types/components/sheet';

const sheetVariants = cva(
  'fixed z-50 gap-4 p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500 backdrop-blur-xl',
  {
    variants: {
      side: {
        top: 'inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top',
        bottom: 'inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom',
        left: 'inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm',
        right: 'inset-y-0 right-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm',
      },
    },
    defaultVariants: {
      side: 'right',
    },
  }
);

export const SheetContent = React.forwardRef<HTMLDivElement, SheetContentProps>(
  ({ className, children, side = 'right', variant = 'primary', ...props }, ref) => {
    const color = getVariantColor(variant);
    const VariantIcon = getVariantIcon(variant);

    const dynamicStyle = {
      backgroundColor: `rgba(var(--${color}-rgb, 6, 182, 212), 0.05)`,
      borderColor: `var(--${color}-400)`,
      borderWidth: '2px',
      boxShadow: `
        inset 0 0 60px rgba(var(--${color}-rgb, 6, 182, 212), 0.15),
        0 0 40px rgba(var(--${color}-rgb, 6, 182, 212), 0.3),
        0 0 80px rgba(var(--${color}-rgb, 6, 182, 212), 0.2)
      `,
    } as React.CSSProperties;

    return (
      <>
        <SheetPrimitive.Overlay className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <SheetPrimitive.Content
          ref={ref}
          className={cn(sheetVariants({ side }), `text-${color}-100`, className)}
          style={dynamicStyle}
          {...props}
        >
          {/* Holographic glow lines */}
          <div 
            className="absolute inset-0 pointer-events-none opacity-30"
            style={{
              background: `
                linear-gradient(90deg, transparent 0%, var(--${color}-400) 50%, transparent 100%),
                linear-gradient(0deg, transparent 0%, var(--${color}-400) 50%, transparent 100%)
              `,
              backgroundSize: '100% 2px, 2px 100%',
              backgroundPosition: 'center center',
              backgroundRepeat: 'no-repeat',
            }}
          />

          {/* Animated scan line */}
          <div 
            className="absolute inset-0 pointer-events-none animate-pulse"
            style={{
              background: `linear-gradient(180deg, transparent 0%, var(--${color}-400) 50%, transparent 100%)`,
              backgroundSize: '100% 4px',
              backgroundPosition: '0 0',
              backgroundRepeat: 'repeat-y',
              opacity: 0.1,
            }}
          />

          {/* Variant Icon Badge with glow */}
          <div 
            className="absolute top-4 left-4 p-2 rounded-full border backdrop-blur-md z-10 animate-pulse"
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

          <SheetPrimitive.Close 
            className={cn(
              'absolute right-4 top-4 rounded-sm opacity-70 transition-all hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none',
              `text-${color}-300 hover:text-${color}-100 focus:ring-${color}-400`
            )}
            style={{
              filter: `drop-shadow(0 0 8px var(--${color}-400))`,
            }}
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </SheetPrimitive.Close>
        </SheetPrimitive.Content>
      </>
    );
  }
);
SheetContent.displayName = 'SheetContent';

export const SheetHeader = React.forwardRef<HTMLDivElement, SheetHeaderProps>(
  ({ className, variant = 'primary', ...props }, ref) => {
    const color = getVariantColor(variant);
    return (
      <div
        ref={ref}
        className={cn(
          'flex flex-col space-y-2 text-center sm:text-left mb-6 pb-4 border-b',
          `text-${color}-100 border-${color}-400/30`,
          className
        )}
        style={{ 
          borderColor: `var(--${color}-400)`,
          textShadow: `0 0 10px var(--${color}-400)`,
        }}
        {...props}
      />
    );
  }
);
SheetHeader.displayName = 'SheetHeader';

export const SheetTitle = React.forwardRef<HTMLHeadingElement, SheetTitleProps>(
  ({ className, variant = 'primary', ...props }, ref) => {
    const color = getVariantColor(variant);
    return (
      <SheetPrimitive.Title
        ref={ref}
        className={cn(
          'text-xl font-bold tracking-wide',
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
SheetTitle.displayName = 'SheetTitle';

export const SheetDescription = React.forwardRef<HTMLParagraphElement, SheetDescriptionProps>(
  ({ className, variant = 'primary', ...props }, ref) => {
    const color = getVariantColor(variant);
    return (
      <SheetPrimitive.Description
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
SheetDescription.displayName = 'SheetDescription';
