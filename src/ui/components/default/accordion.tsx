'use client';

import React, { forwardRef } from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';
import type { VariantColors } from '../../types/common';

export interface AccordionProps extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Root> {
  version?: string;
  variant?: string;
  type?: 'single' | 'multiple';
  size?: string;
  colors?: VariantColors;
  styles?: React.CSSProperties;
  config?: any;
}

export const DefaultAccordion = forwardRef<HTMLDivElement, AccordionProps>(
  ({ 
    styles = {}, 
    colors,
    className = '',
    children,
    type = 'single',
    ...props 
  }, ref) => {
    const border = colors?.border || '#475569';

    return (
      <AccordionPrimitive.Root
        ref={ref}
        className={`default-accordion ${className}`}
        type={type as any}
        style={{
          ...styles,
          width: '100%',
          borderRadius: '0.5rem',
          border: `1px solid ${border}`,
          overflow: 'hidden',
        }}
        {...props}
      >
        {children}
      </AccordionPrimitive.Root>
    );
  }
);

DefaultAccordion.displayName = 'DefaultAccordion';

// Accordion Item
export const DefaultAccordionItem = forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item> & { colors?: VariantColors }
>(({ className = '', colors, ...props }, ref) => {
  const border = colors?.border || '#475569';
  
  return (
    <AccordionPrimitive.Item
      ref={ref}
      className={`default-accordion-item ${className}`}
      style={{
        borderBottom: `1px solid ${border}`,
      }}
      {...props}
    />
  );
});
DefaultAccordionItem.displayName = 'DefaultAccordionItem';

// Accordion Trigger
export const DefaultAccordionTrigger = forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> & { colors?: VariantColors }
>(({ className = '', children, colors, ...props }, ref) => {
  const fg = colors?.foreground || '#ffffff';
  
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        ref={ref}
        className={`default-accordion-trigger ${className}`}
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '1rem',
          fontSize: '0.875rem',
          fontWeight: 500,
          color: fg,
          backgroundColor: 'transparent',
          border: 'none',
          cursor: 'pointer',
          transition: 'all 0.2s',
        }}
        {...props}
      >
        {children}
        <ChevronDown
          style={{
            width: '1rem',
            height: '1rem',
            transition: 'transform 0.2s',
          }}
          className="accordion-chevron"
        />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
});
DefaultAccordionTrigger.displayName = 'DefaultAccordionTrigger';

// Accordion Content
export const DefaultAccordionContent = forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content> & { colors?: VariantColors }
>(({ className = '', children, colors, ...props }, ref) => {
  const fg = colors?.foreground || '#ffffff';
  
  return (
    <AccordionPrimitive.Content
      ref={ref}
      className={`default-accordion-content ${className}`}
      style={{
        overflow: 'hidden',
        fontSize: '0.875rem',
        color: fg,
        opacity: 0.8,
      }}
      {...props}
    >
      <div style={{ padding: '0 1rem 1rem' }}>{children}</div>
    </AccordionPrimitive.Content>
  );
});
DefaultAccordionContent.displayName = 'DefaultAccordionContent';

export default DefaultAccordion;
