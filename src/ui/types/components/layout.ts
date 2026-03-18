/**
 * Layout Component Type Definitions
 * Accordion, Collapsible, Separator, Resizable, ScrollArea, Direction
 */
import React from 'react';
import type { ColorType } from '../colors.d.js';

export type LayoutType = 'default' | 'outline' | 'solid';
export type LayoutVariant = 'neutral' | 'success' | 'warning' | 'info' | 'destructive' | 'primary';

/**
 * Accordion Props
 */
export interface AccordionItem {
  value: string;
  title: string;
  content: React.ReactNode;
  disabled?: boolean;
}

export interface AccordionProps {
  version?: 'default' | 'bordered' | 'separated';
  type?: LayoutType;
  variant?: LayoutVariant;
  colorType?: ColorType;
  animated?: boolean;
  items: AccordionItem[];
  multiple?: boolean;
  defaultValue?: string[];
  value?: string[];
  onValueChange?: (value: string[]) => void;
  className?: string;
}

/**
 * Collapsible Props
 */
export interface CollapsibleProps {
  version?: 'default' | 'card';
  type?: LayoutType;
  variant?: LayoutVariant;
  colorType?: ColorType;
  animated?: boolean;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  trigger: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

/**
 * Separator Props
 */
export interface SeparatorProps {
  version?: 'default' | 'dashed' | 'gradient';
  type?: LayoutType;
  variant?: LayoutVariant;
  colorType?: ColorType;
  animated?: boolean;
  orientation?: 'horizontal' | 'vertical';
  className?: string;
  label?: string;
}

/**
 * Resizable Props
 */
export interface ResizablePanelDef {
  id: string;
  content: React.ReactNode;
  defaultSize?: number;
  minSize?: number;
  maxSize?: number;
}

export interface ResizableProps {
  version?: 'default' | 'bordered';
  type?: LayoutType;
  variant?: LayoutVariant;
  colorType?: ColorType;
  animated?: boolean;
  panels: ResizablePanelDef[];
  direction?: 'horizontal' | 'vertical';
  className?: string;
}

/**
 * Scroll Area Props
 */
export interface ScrollAreaProps {
  version?: 'default' | 'thin' | 'hidden';
  type?: LayoutType;
  variant?: LayoutVariant;
  colorType?: ColorType;
  animated?: boolean;
  maxHeight?: string | number;
  children: React.ReactNode;
  className?: string;
}

/**
 * Direction Props
 */
export interface DirectionProps {
  version?: 'default';
  dir?: 'ltr' | 'rtl';
  children: React.ReactNode;
  className?: string;
}
