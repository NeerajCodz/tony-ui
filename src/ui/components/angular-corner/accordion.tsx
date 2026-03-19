'use client';

import React, { forwardRef } from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';
import type { VariantColors } from '../../types/common';

const CLIP_PATH = 'polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)';

export interface AccordionProps extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Root> {
  version?: string;
  variant?: string;
  type?: 'single' | 'multiple';
  size?: string;
  colors?: VariantColors;
  styles?: React.CSSProperties;
  config?: any;
}

export const AngularCornerAccordion = forwardRef<HTMLDivElement, AccordionProps>(
  ({ 
    styles = {}, 
    colors,
    className = '',
    children,
    type = 'single',
    ...props 
  }, ref) => {
    const border = colors?.border || '#0891b2';
    const glow = colors?.glow || '#22d3ee';

    return (
      <div
        className={`angular-corner-accordion ${className}`}
        style={{
          ...styles,
          position: 'relative',
          width: '100%',
        }}
      >
        {/* Border Layer */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            clipPath: CLIP_PATH,
            backgroundColor: border,
            boxShadow: `0 0 15px ${glow}30`,
          }}
        />
        
        {/* Content */}
        <AccordionPrimitive.Root
          ref={ref}
          type={type as any}
          style={{
            position: 'relative',
            clipPath: CLIP_PATH,
            margin: '1px',
            backgroundColor: '#0a0a0f',
            overflow: 'hidden',
          }}
          {...props}
        >
          {children}
        </AccordionPrimitive.Root>
        
        {/* Corner Accents */}
        <div
          style={{
            position: 'absolute',
            top: '-1px',
            left: '-1px',
            width: '12px',
            height: '12px',
            borderLeft: `2px solid ${glow}`,
            borderTop: `2px solid ${glow}`,
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-1px',
            right: '-1px',
            width: '12px',
            height: '12px',
            borderRight: `2px solid ${glow}`,
            borderBottom: `2px solid ${glow}`,
          }}
        />
      </div>
    );
  }
);

AngularCornerAccordion.displayName = 'AngularCornerAccordion';

// Accordion Item
export const AngularCornerAccordionItem = forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item> & { colors?: VariantColors }
>(({ className = '', colors, ...props }, ref) => {
  const border = colors?.border || '#0891b2';
  
  return (
    <AccordionPrimitive.Item
      ref={ref}
      className={`angular-corner-accordion-item ${className}`}
      style={{
        borderBottom: `1px solid ${border}40`,
      }}
      {...props}
    />
  );
});
AngularCornerAccordionItem.displayName = 'AngularCornerAccordionItem';

// Accordion Trigger
export const AngularCornerAccordionTrigger = forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> & { colors?: VariantColors }
>(({ className = '', children, colors, ...props }, ref) => {
  const bg = colors?.base || '#06b6d4';
  const fg = colors?.foreground || '#ffffff';
  const glow = colors?.glow || '#22d3ee';
  
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        ref={ref}
        className={`angular-corner-accordion-trigger ${className}`}
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '1rem 1.25rem',
          fontSize: '0.875rem',
          fontWeight: 600,
          color: fg,
          backgroundColor: 'transparent',
          border: 'none',
          cursor: 'pointer',
          transition: 'all 0.2s',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
        }}
        {...props}
      >
        <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ color: glow, fontSize: '0.75em' }}>▸</span>
          {children}
        </span>
        <ChevronDown
          style={{
            width: '1rem',
            height: '1rem',
            color: bg,
            transition: 'transform 0.2s',
          }}
          className="accordion-chevron"
        />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
});
AngularCornerAccordionTrigger.displayName = 'AngularCornerAccordionTrigger';

// Accordion Content
export const AngularCornerAccordionContent = forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content> & { colors?: VariantColors }
>(({ className = '', children, colors, ...props }, ref) => {
  const fg = colors?.foreground || '#ffffff';
  const border = colors?.border || '#0891b2';
  
  return (
    <AccordionPrimitive.Content
      ref={ref}
      className={`angular-corner-accordion-content ${className}`}
      style={{
        overflow: 'hidden',
        fontSize: '0.875rem',
        color: fg,
        opacity: 0.9,
      }}
      {...props}
    >
      <div
        style={{
          padding: '0 1.25rem 1rem',
          borderLeft: `2px solid ${border}40`,
          marginLeft: '1.25rem',
        }}
      >
        {children}
      </div>
    </AccordionPrimitive.Content>
  );
});
AngularCornerAccordionContent.displayName = 'AngularCornerAccordionContent';

export default AngularCornerAccordion;
