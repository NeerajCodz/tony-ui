import * as React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';

export type AccordionBaseProps = React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Root>;

export const AccordionBase = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Root>,
  AccordionBaseProps
>((props, ref) => <AccordionPrimitive.Root ref={ref} {...props} />);
AccordionBase.displayName = 'AccordionBase';

export type AccordionItemBaseProps = React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>;

export const AccordionItemBase = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  AccordionItemBaseProps
>((props, ref) => <AccordionPrimitive.Item ref={ref} {...props} />);
AccordionItemBase.displayName = 'AccordionItemBase';

export type AccordionTriggerBaseProps = React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>;

export const AccordionTriggerBase = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  AccordionTriggerBaseProps
>((props, ref) => <AccordionPrimitive.Trigger ref={ref} {...props} />);
AccordionTriggerBase.displayName = 'AccordionTriggerBase';

export type AccordionContentBaseProps = React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>;

export const AccordionContentBase = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  AccordionContentBaseProps
>((props, ref) => <AccordionPrimitive.Content ref={ref} {...props} />);
AccordionContentBase.displayName = 'AccordionContentBase';

export type AccordionHeaderBaseProps = React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Header>;

export const AccordionHeaderBase = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Header>,
  AccordionHeaderBaseProps
>((props, ref) => <AccordionPrimitive.Header ref={ref} {...props} />);
AccordionHeaderBase.displayName = 'AccordionHeaderBase';
