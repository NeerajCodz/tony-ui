/**
 * Data Panel Sheet - Parallelogram skewed panel with data display aesthetic
 */
import React from 'react';
import * as SheetPrimitive from '@radix-ui/react-dialog';
import { cva } from 'class-variance-authority';
import { cn } from '../../../lib/utils';
import { X } from 'lucide-react';
import { getVariantColor, getVariantIcon } from '../../utils/variant-icons.js';
import type { SheetContentProps, SheetHeaderProps, SheetTitleProps, SheetDescriptionProps } from '../../types/components/sheet';

const sheetVariants = cva(
  'fixed z-50 gap-4 p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500 bg-slate-950/95 font-mono',
  {
    variants: {
      side: {
        top: 'inset-x-0 top-0 border-t-4 data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top',
        bottom: 'inset-x-0 bottom-0 border-b-4 data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom',
        left: 'inset-y-0 left-0 h-full w-3/4 border-l-4 data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm',
        right: 'inset-y-0 right-0 h-full w-3/4 border-r-4 data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm',
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
      borderColor: `var(--${color}-600)`,
      transform: side === 'right' || side === 'left' ? 'skewY(-1deg)' : 'skewX(-1deg)',
    } as React.CSSProperties;

    return (
      <>
        <SheetPrimitive.Overlay className="fixed inset-0 z-50 bg-slate-950/90 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <SheetPrimitive.Content
          ref={ref}
          className={cn(sheetVariants({ side }), `text-${color}-200`, className)}
          style={dynamicStyle}
          {...props}
        >
          <div style={{ transform: side === 'right' || side === 'left' ? 'skewY(1deg)' : 'skewX(1deg)' }}>
            {/* Data grid pattern */}
            <div 
              className="absolute inset-0 pointer-events-none opacity-10"
              style={{
                backgroundImage: `
                  linear-gradient(var(--${color}-600) 1px, transparent 1px),
                  linear-gradient(90deg, var(--${color}-600) 1px, transparent 1px)
                `,
                backgroundSize: '20px 20px',
              }}
            />

            {/* Corner markers */}
            <div className="absolute top-2 left-2 flex gap-1">
              <div className="w-2 h-2 border-t-2 border-l-2" style={{ borderColor: `var(--${color}-500)` }} />
              <div className="w-2 h-2 border-t-2 border-l-2" style={{ borderColor: `var(--${color}-500)` }} />
            </div>
            <div className="absolute top-2 right-2 flex gap-1">
              <div className="w-2 h-2 border-t-2 border-r-2" style={{ borderColor: `var(--${color}-500)` }} />
              <div className="w-2 h-2 border-t-2 border-r-2" style={{ borderColor: `var(--${color}-500)` }} />
            </div>

            {/* Variant Icon Badge */}
            <div 
              className="absolute top-4 left-4 px-3 py-1 border flex items-center gap-2 font-mono text-xs uppercase tracking-wider z-10"
              style={{ 
                borderColor: `var(--${color}-600)`,
                backgroundColor: `var(--${color}-950)`,
                color: `var(--${color}-400)`,
              }}
            >
              <VariantIcon className="w-4 h-4" />
              <span>{variant}</span>
            </div>

            {children}

            <SheetPrimitive.Close 
              className={cn(
                'absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none',
                `text-${color}-400 hover:text-${color}-200 focus:ring-${color}-500`
              )}
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </SheetPrimitive.Close>
          </div>
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
          'flex flex-col space-y-2 text-center sm:text-left mb-6 pb-4 border-b-2 font-mono uppercase',
          `text-${color}-200 border-${color}-700`,
          className
        )}
        style={{ borderColor: `var(--${color}-700)` }}
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
          'text-xl font-bold uppercase tracking-widest font-mono',
          `text-${color}-100`,
          className
        )}
        style={{ color: `var(--${color}-100)` }}
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
          'text-sm font-mono opacity-60',
          `text-${color}-300`,
          className
        )}
        style={{ color: `var(--${color}-300)` }}
        {...props}
      />
    );
  }
);
SheetDescription.displayName = 'SheetDescription';
