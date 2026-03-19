/**
 * Angular Corner Sheet - Cut corners design with sharp angles
 */
import React from 'react';
import * as SheetPrimitive from '@radix-ui/react-dialog';
import { cva } from 'class-variance-authority';
import { cn } from '../../../lib/utils';
import { X } from 'lucide-react';
import { CLIP_PATHS } from '../../utils/clip-paths.js';
import { getVariantColor, getVariantIcon } from '../../utils/variant-icons.js';
import type { SheetContentProps, SheetHeaderProps, SheetTitleProps, SheetDescriptionProps } from '../../types/components/sheet';

const CLIP_PATH = CLIP_PATHS['angular-corner'].card;

const sheetVariants = cva(
  'fixed z-50 gap-4 p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500 bg-gray-950/95 backdrop-blur-sm',
  {
    variants: {
      side: {
        top: 'inset-x-0 top-0 border-b-2 data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top',
        bottom: 'inset-x-0 bottom-0 border-t-2 data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom',
        left: 'inset-y-0 left-0 h-full w-3/4 border-r-2 data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm',
        right: 'inset-y-0 right-0 h-full w-3/4 border-r-2 data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm',
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
      borderColor: `var(--${color}-500)`,
      clipPath: CLIP_PATH,
      '--tw-shadow-color': `var(--${color}-500)`,
      boxShadow: `inset 0 0 40px rgba(var(--${color}-rgb, 6, 182, 212), 0.1)`,
    } as React.CSSProperties;

    return (
      <>
        <SheetPrimitive.Overlay className="fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <SheetPrimitive.Content
          ref={ref}
          className={cn(sheetVariants({ side }), `text-${color}-50`, className)}
          style={dynamicStyle}
          {...props}
        >
          {/* Cut corner accents */}
          <div className="absolute top-0 left-0 w-12 h-[2px]" style={{ backgroundColor: `var(--${color}-500)` }} />
          <div className="absolute top-0 left-0 w-[2px] h-12" style={{ backgroundColor: `var(--${color}-500)` }} />
          <div className="absolute bottom-0 right-0 w-12 h-[2px]" style={{ backgroundColor: `var(--${color}-500)` }} />
          <div className="absolute bottom-0 right-0 w-[2px] h-12" style={{ backgroundColor: `var(--${color}-500)` }} />

          {/* Variant Icon Badge */}
          <div 
            className="absolute top-4 left-4 p-2 rounded border backdrop-blur-sm z-10"
            style={{ 
              borderColor: `var(--${color}-500)`,
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
              color: `var(--${color}-400)`
            }}
          >
            <VariantIcon className="w-5 h-5" />
          </div>

          {children}

          <SheetPrimitive.Close 
            className={cn(
              'absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none',
              `text-${color}-400 hover:text-${color}-200 focus:ring-${color}-500`
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
          'flex flex-col space-y-2 text-center sm:text-left mb-6 pb-4 border-b font-mono',
          `text-${color}-100 border-${color}-800`,
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
SheetDescription.displayName = 'SheetDescription';
