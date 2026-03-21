'use client';

import * as React from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  AccordionBase,
  AccordionItemBase,
  AccordionTriggerBase,
  AccordionContentBase,
  AccordionHeaderBase,
} from '../_base/accordion';
import type { VariantColors } from '../../types/common';
import { normalizeColors, getCoreTypeStyles } from '../_shared/version-styles';

type ComponentType = 'default' | 'solid' | 'outline' | 'ghost' | 'inverse' | 'contrast' | 'soft';

interface StyledProps {
  type?: ComponentType;
  uiType?: ComponentType;
  colors?: VariantColors;
}

const versionKey = 'angular-corner';

const ITEM_CLIP_PATH = 'polygon(10px 0, calc(100% - 10px) 0, 100% 10px, 100% calc(100% - 10px), calc(100% - 10px) 100%, 10px 100%, 0 calc(100% - 10px), 0 10px)';

export const Accordion = AccordionBase;

export const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionItemBase>,
  React.ComponentPropsWithoutRef<typeof AccordionItemBase> & StyledProps
>(({ className, type, uiType, colors, style, ...props }, ref) => {
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
            : (typeStyles.backgroundColor as string | undefined) ?? palette.base;

  const borderColor =
    resolvedType === 'outline' || resolvedType === 'contrast'
      ? palette.accentPrimary ?? palette.border
      : resolvedType === 'ghost'
        ? 'transparent'
        : palette.border;

  return (
    <AccordionItemBase
      ref={ref}
      className={cn('mb-2', className)}
      style={{
        clipPath: ITEM_CLIP_PATH,
        backgroundColor,
        border: '2px solid ' + borderColor,
        ...style,
      }}
      data-version={versionKey}
      data-type={resolvedType}
      {...props}
    />
  );
});
AccordionItem.displayName = 'AccordionItem';

export const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionTriggerBase>,
  React.ComponentPropsWithoutRef<typeof AccordionTriggerBase> & StyledProps
>(({ className, children, type, uiType, colors, style, ...props }, ref) => {
  const resolvedType = uiType ?? type ?? 'default';
  const palette = normalizeColors(colors);
  const typeStyles = getCoreTypeStyles(resolvedType, colors);

  const textColor =
    resolvedType === 'solid'
      ? palette.base ?? '#fff'
      : resolvedType === 'inverse'
        ? palette.base ?? '#000'
        : (typeStyles.color as string | undefined) ?? palette.foreground;

  return (
    <AccordionHeaderBase className="flex">
      <AccordionTriggerBase
        ref={ref}
        className={cn(
          'flex flex-1 items-center justify-between py-4 px-4 font-bold uppercase tracking-wider text-sm',
          'transition-all [&[data-state=open]>svg]:rotate-180',
          className
        )}
        style={{
          color: textColor,
          letterSpacing: '0.06em',
          ...style,
        }}
        {...props}
      >
        {children}
        <ChevronDown
          className="h-4 w-4 shrink-0 transition-transform duration-200"
          style={{ color: palette.accentPrimary ?? textColor }}
        />
      </AccordionTriggerBase>
    </AccordionHeaderBase>
  );
});
AccordionTrigger.displayName = 'AccordionTrigger';

export const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionContentBase>,
  React.ComponentPropsWithoutRef<typeof AccordionContentBase> & StyledProps
>(({ className, children, type, uiType, colors, style, ...props }, ref) => {
  const resolvedType = uiType ?? type ?? 'default';
  const palette = normalizeColors(colors);
  const typeStyles = getCoreTypeStyles(resolvedType, colors);

  const textColor =
    resolvedType === 'solid'
      ? palette.base ?? '#fff'
      : resolvedType === 'inverse'
        ? palette.base ?? '#000'
        : (typeStyles.color as string | undefined) ?? palette.foreground;

  const borderColor = palette.accentPrimary ?? palette.border;

  return (
    <AccordionContentBase
      ref={ref}
      className={cn(
        'overflow-hidden text-sm transition-all',
        'data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down',
        className
      )}
      style={{
        color: textColor,
        borderTop: '1px solid ' + borderColor,
        ...style,
      }}
      {...props}
    >
      <div className="pb-4 pt-2 px-4">{children}</div>
    </AccordionContentBase>
  );
});
AccordionContent.displayName = 'AccordionContent';

export const Item = AccordionItem;
export const Trigger = AccordionTrigger;
export const Content = AccordionContent;

export default Accordion;