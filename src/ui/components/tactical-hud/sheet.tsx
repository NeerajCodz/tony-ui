/**
 * Tactical HUD Sheet - Military-style heads-up display overlay
 */
import React from 'react';
import * as SheetPrimitive from '@radix-ui/react-dialog';
import { cva } from 'class-variance-authority';
import { cn } from '../../../lib/utils';
import { X } from 'lucide-react';
import { getVariantColor, getVariantIcon } from '../../utils/variant-icons.js';
import type { SheetContentProps, SheetHeaderProps, SheetTitleProps, SheetDescriptionProps } from '../../types/components/sheet';

const sheetVariants = cva(
  'fixed z-50 gap-4 p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500 bg-black/95 border-2 uppercase tracking-wide font-mono',
  {
    variants: {
      side: {
        top: 'inset-x-0 top-0 data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top',
        bottom: 'inset-x-0 bottom-0 data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom',
        left: 'inset-y-0 left-0 h-full w-3/4 data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm',
        right: 'inset-y-0 right-0 h-full w-3/4 data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm',
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
      borderColor: `var(--${color}-700)`,
    } as React.CSSProperties;

    return (
      <>
        <SheetPrimitive.Overlay className="fixed inset-0 z-50 bg-black/90 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <SheetPrimitive.Content
          ref={ref}
          className={cn(sheetVariants({ side }), `text-${color}-500`, className)}
          style={dynamicStyle}
          {...props}
        >
          {/* HUD Corner Brackets */}
          <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 pointer-events-none" style={{ borderColor: `var(--${color}-600)` }} />
          <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 pointer-events-none" style={{ borderColor: `var(--${color}-600)` }} />
          <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 pointer-events-none" style={{ borderColor: `var(--${color}-600)` }} />
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 pointer-events-none" style={{ borderColor: `var(--${color}-600)` }} />

          {/* HUD Crosshair */}
          <div 
            className="absolute top-1/2 left-4 w-4 h-[2px] pointer-events-none opacity-30"
            style={{ backgroundColor: `var(--${color}-600)`, transform: 'translateY(-50%)' }}
          />
          <div 
            className="absolute top-1/2 right-4 w-4 h-[2px] pointer-events-none opacity-30"
            style={{ backgroundColor: `var(--${color}-600)`, transform: 'translateY(-50%)' }}
          />

          {/* Scan lines */}
          <div 
            className="absolute inset-0 pointer-events-none opacity-10"
            style={{
              backgroundImage: `repeating-linear-gradient(0deg, var(--${color}-600) 0px, transparent 1px, transparent 2px, var(--${color}-600) 3px)`,
            }}
          />

          {/* Variant Status Indicator */}
          <div 
            className="absolute top-2 left-2 px-2 py-1 border flex items-center gap-2 text-xs font-mono uppercase tracking-wider z-10"
            style={{ 
              borderColor: `var(--${color}-700)`,
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              color: `var(--${color}-500)`,
            }}
          >
            <VariantIcon className="w-3 h-3" />
            <span className="font-bold">{variant}</span>
            <div className="w-1 h-1 rounded-full animate-pulse" style={{ backgroundColor: `var(--${color}-500)` }} />
          </div>

          {children}

          <SheetPrimitive.Close 
            className={cn(
              'absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none',
              `text-${color}-600 hover:text-${color}-400 focus:ring-${color}-700`
            )}
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
          'flex flex-col space-y-2 text-center sm:text-left mb-6 pb-4 border-b uppercase tracking-widest',
          `text-${color}-500 border-${color}-800`,
          className
        )}
        style={{ borderColor: `var(--${color}-800)` }}
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
          'text-xl font-black uppercase tracking-widest font-mono',
          `text-${color}-500`,
          className
        )}
        style={{ color: `var(--${color}-500)` }}
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
          'text-sm font-mono opacity-70 uppercase',
          `text-${color}-600`,
          className
        )}
        style={{ color: `var(--${color}-600)` }}
        {...props}
      />
    );
  }
);
SheetDescription.displayName = 'SheetDescription';
