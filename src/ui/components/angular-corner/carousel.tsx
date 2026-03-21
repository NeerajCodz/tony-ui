'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import {
  CarouselBase,
  CarouselContentBase,
  CarouselItemBase,
  CarouselPreviousBase,
  CarouselNextBase,
} from '../_base/carousel';
import type { VariantColors } from '../../types/common';
import { normalizeColors, getCoreTypeStyles } from '../_shared/version-styles';

type ComponentType = 'default' | 'solid' | 'outline' | 'ghost' | 'inverse' | 'contrast' | 'soft';

interface StyledProps {
  type?: ComponentType;
  uiType?: ComponentType;
  colors?: VariantColors;
}

const versionKey = 'angular-corner';

const CAROUSEL_CLIP_PATH = 'polygon(16px 0, calc(100% - 16px) 0, 100% 16px, 100% calc(100% - 16px), calc(100% - 16px) 100%, 16px 100%, 0 calc(100% - 16px), 0 16px)';
const ITEM_CLIP_PATH = 'polygon(8px 0, calc(100% - 8px) 0, 100% 8px, 100% calc(100% - 8px), calc(100% - 8px) 100%, 8px 100%, 0 calc(100% - 8px), 0 8px)';
const BUTTON_CLIP_PATH = 'polygon(6px 0, calc(100% - 6px) 0, 100% 6px, 100% calc(100% - 6px), calc(100% - 6px) 100%, 6px 100%, 0 calc(100% - 6px), 0 6px)';

export const Carousel = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof CarouselBase> & StyledProps
>(({ className, orientation = 'horizontal', type, uiType, colors, style, ...props }, ref) => {
  const resolvedType = uiType ?? type ?? 'default';
  const palette = normalizeColors(colors);
  const typeStyles = getCoreTypeStyles(resolvedType, colors);

  const backgroundColor =
    resolvedType === 'solid'
      ? palette.accentPrimary ?? palette.base
      : resolvedType === 'soft' && palette.accentRgb
        ? 'rgba(' + palette.accentRgb + ', 0.1)'
        : resolvedType === 'inverse'
          ? palette.foreground
          : resolvedType === 'ghost'
            ? 'transparent'
            : (typeStyles.backgroundColor as string | undefined) ?? palette.base ?? '#0a0a0a';

  const borderColor =
    resolvedType === 'outline' || resolvedType === 'contrast'
      ? palette.accentPrimary ?? palette.border
      : resolvedType === 'ghost'
        ? 'transparent'
        : palette.border ?? '#333';

  return (
    <CarouselBase
      ref={ref}
      orientation={orientation}
      className={cn('relative', className)}
      style={{
        clipPath: CAROUSEL_CLIP_PATH,
        backgroundColor,
        border: '2px solid ' + borderColor,
        boxShadow: '0 0 12px ' + (palette.glow ?? 'rgba(0,0,0,0.3)'),
        ...style,
      }}
      data-version={versionKey}
      data-type={resolvedType}
      {...props}
    />
  );
});
Carousel.displayName = 'Carousel';

export const CarouselContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { orientation?: 'horizontal' | 'vertical' }
>(({ className, orientation = 'horizontal', ...props }, ref) => (
  <CarouselContentBase
    ref={ref}
    className={cn(
      'flex',
      orientation === 'horizontal' ? '-ml-4' : '-mt-4 flex-col',
      className
    )}
    {...props}
  />
));
CarouselContent.displayName = 'CarouselContent';

export const CarouselItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & StyledProps & { orientation?: 'horizontal' | 'vertical' }
>(({ className, orientation = 'horizontal', type, uiType, colors, style, ...props }, ref) => {
  const resolvedType = uiType ?? type ?? 'default';
  const palette = normalizeColors(colors);

  const itemBg =
    resolvedType === 'ghost'
      ? 'transparent'
      : 'rgba(' + (palette.accentRgb ?? '50,50,50') + ', 0.05)';

  return (
    <CarouselItemBase
      ref={ref}
      className={cn(
        'min-w-0 shrink-0 grow-0 basis-full p-1',
        orientation === 'horizontal' ? 'pl-4' : 'pt-4',
        className
      )}
      style={{
        clipPath: ITEM_CLIP_PATH,
        backgroundColor: itemBg,
        ...style,
      }}
      {...props}
    />
  );
});
CarouselItem.displayName = 'CarouselItem';

export const CarouselPrevious = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & StyledProps
>(({ className, type, uiType, colors, style, ...props }, ref) => {
  const resolvedType = uiType ?? type ?? 'default';
  const palette = normalizeColors(colors);

  const backgroundColor =
    resolvedType === 'solid'
      ? palette.accentPrimary ?? '#333'
      : resolvedType === 'ghost'
        ? 'transparent'
        : palette.base ?? '#0a0a0a';

  const borderColor = palette.accentPrimary ?? palette.border ?? '#555';
  const textColor = palette.foreground ?? '#fff';

  return (
    <CarouselPreviousBase
      ref={ref}
      className={cn(
        'absolute left-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center transition-all hover:scale-105 disabled:pointer-events-none disabled:opacity-50',
        className
      )}
      style={{
        clipPath: BUTTON_CLIP_PATH,
        backgroundColor,
        border: '2px solid ' + borderColor,
        color: textColor,
        boxShadow: '0 0 8px ' + (palette.glow ?? 'rgba(0,0,0,0.3)'),
        ...style,
      }}
      {...props}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M15 18l-6-6 6-6" />
      </svg>
    </CarouselPreviousBase>
  );
});
CarouselPrevious.displayName = 'CarouselPrevious';

export const CarouselNext = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & StyledProps
>(({ className, type, uiType, colors, style, ...props }, ref) => {
  const resolvedType = uiType ?? type ?? 'default';
  const palette = normalizeColors(colors);

  const backgroundColor =
    resolvedType === 'solid'
      ? palette.accentPrimary ?? '#333'
      : resolvedType === 'ghost'
        ? 'transparent'
        : palette.base ?? '#0a0a0a';

  const borderColor = palette.accentPrimary ?? palette.border ?? '#555';
  const textColor = palette.foreground ?? '#fff';

  return (
    <CarouselNextBase
      ref={ref}
      className={cn(
        'absolute right-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center transition-all hover:scale-105 disabled:pointer-events-none disabled:opacity-50',
        className
      )}
      style={{
        clipPath: BUTTON_CLIP_PATH,
        backgroundColor,
        border: '2px solid ' + borderColor,
        color: textColor,
        boxShadow: '0 0 8px ' + (palette.glow ?? 'rgba(0,0,0,0.3)'),
        ...style,
      }}
      {...props}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9 18l6-6-6-6" />
      </svg>
    </CarouselNextBase>
  );
});
CarouselNext.displayName = 'CarouselNext';

export default Carousel;