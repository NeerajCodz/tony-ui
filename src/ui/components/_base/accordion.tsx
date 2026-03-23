import * as React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';

/**
 * Accordion type variants
 * Trigger area inherits the type; content area is always transparent
 */
export type AccordionType =
  | 'default'
  | 'ghost'
  | 'soft'
  | 'subtle'
  | 'flat'
  | 'neutral'
  | 'elevated'
  | 'tinted'
  | 'unstyled';

/**
 * Accordion sizes - affects trigger padding and font size
 */
export type AccordionSize = 'sm' | 'md' | 'lg';

// ============================================================================
// Accordion Root
// ============================================================================

/**
 * Single accordion props
 */
export interface AccordionBaseSingleProps {
  /**
   * Visual structural type
   * @default 'default'
   */
  visualType?: AccordionType;
  
  /**
   * Size variant
   * @default 'md'
   */
  size?: AccordionSize;
  
  /**
   * Variant for semantic colors
   */
  variant?: string;
  
  /**
   * Single mode - only one item can be open at a time
   */
  type: 'single';
  
  /**
   * Allow closing all items in single mode
   * @default false
   */
  collapsible?: boolean;
  
  /**
   * Controlled value for single mode
   */
  value?: string;
  
  /**
   * Default value for single mode
   */
  defaultValue?: string;
  
  /**
   * Callback when value changes in single mode
   */
  onValueChange?: (value: string) => void;
  
  /**
   * Whether accordion is disabled
   */
  disabled?: boolean;
  
  /**
   * Direction for RTL support
   */
  dir?: 'ltr' | 'rtl';
  
  /**
   * Orientation
   * @default 'vertical'
   */
  orientation?: 'horizontal' | 'vertical';
  
  /**
   * Additional props
   */
  className?: string;
  children?: React.ReactNode;
}

/**
 * Multiple accordion props
 */
export interface AccordionBaseMultipleProps {
  visualType?: AccordionType;
  size?: AccordionSize;
  variant?: string;
  
  /**
   * Multiple mode - many items can be open simultaneously
   */
  type: 'multiple';
  
  /**
   * Controlled value for multiple mode
   */
  value?: string[];
  
  /**
   * Default value for multiple mode
   */
  defaultValue?: string[];
  
  /**
   * Callback when value changes in multiple mode
   */
  onValueChange?: (value: string[]) => void;
  
  disabled?: boolean;
  dir?: 'ltr' | 'rtl';
  orientation?: 'horizontal' | 'vertical';
  className?: string;
  children?: React.ReactNode;
}

export type AccordionBaseProps = AccordionBaseSingleProps | AccordionBaseMultipleProps;

/**
 * AccordionBase - Vertically stacked set of collapsible panels
 * 
 * Supports single (one open at a time) or multiple (many open) modes.
 * 
 * Anatomy:
 * <Accordion>
 *   <AccordionItem>
 *     <AccordionHeader>
 *       <AccordionTrigger> [chevron icon] [label] </AccordionTrigger>
 *     </AccordionHeader>
 *     <AccordionContent> [slot: any content] </AccordionContent>
 *   </AccordionItem>
 * </Accordion>
 */
export const AccordionBase = React.forwardRef<
  React.ComponentRef<typeof AccordionPrimitive.Root>,
  AccordionBaseProps
>(({ visualType = 'default', size = 'md', variant, ...props }, ref) => (
  <AccordionPrimitive.Root
    ref={ref}
    data-type={visualType}
    data-size={size}
    data-variant={variant}
    {...props}
  />
));
AccordionBase.displayName = 'AccordionBase';

// ============================================================================
// Accordion Item
// ============================================================================

export interface AccordionItemBaseProps
  extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item> {}

/**
 * AccordionItemBase - Owns one trigger/content pair
 * 
 * States: closed | open | disabled
 */
export const AccordionItemBase = React.forwardRef<
  React.ComponentRef<typeof AccordionPrimitive.Item>,
  AccordionItemBaseProps
>((props, ref) => <AccordionPrimitive.Item ref={ref} {...props} />);
AccordionItemBase.displayName = 'AccordionItemBase';

// ============================================================================
// Accordion Header
// ============================================================================

export interface AccordionHeaderBaseProps
  extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Header> {}

/**
 * AccordionHeaderBase - Wraps the trigger
 */
export const AccordionHeaderBase = React.forwardRef<
  React.ComponentRef<typeof AccordionPrimitive.Header>,
  AccordionHeaderBaseProps
>((props, ref) => <AccordionPrimitive.Header ref={ref} {...props} />);
AccordionHeaderBase.displayName = 'AccordionHeaderBase';

// ============================================================================
// Accordion Trigger
// ============================================================================

export interface AccordionTriggerBaseProps
  extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> {}

/**
 * AccordionTriggerBase - Button that toggles the panel
 * 
 * States: default | hover | focus | active | open (data-state="open")
 * 
 * Accessibility:
 * - role="button" (native button)
 * - aria-expanded="true|false"
 * - aria-controls="[content-id]"
 * - Always in tab order regardless of open state
 * 
 * Behavior:
 * - Click → toggle open/close
 * - Enter/Space on focused trigger → toggle
 */
export const AccordionTriggerBase = React.forwardRef<
  React.ComponentRef<typeof AccordionPrimitive.Trigger>,
  AccordionTriggerBaseProps
>((props, ref) => <AccordionPrimitive.Trigger ref={ref} {...props} />);
AccordionTriggerBase.displayName = 'AccordionTriggerBase';

// ============================================================================
// Accordion Content
// ============================================================================

export interface AccordionContentBaseProps
  extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content> {
  /**
   * Force mount the content (useful for animations)
   */
  forceMount?: true;
}

/**
 * AccordionContentBase - Collapsible content region
 * 
 * Animation:
 * - Open: height 0→auto | --duration-slow | --ease-decelerate
 *         content opacity 0→1 (delay)
 * - Close: height auto→0 | --duration-base | --ease-accelerate
 * 
 * Accessibility:
 * - role="region"
 * - id matching aria-controls on trigger
 */
export const AccordionContentBase = React.forwardRef<
  React.ComponentRef<typeof AccordionPrimitive.Content>,
  AccordionContentBaseProps
>((props, ref) => <AccordionPrimitive.Content ref={ref} {...props} />);
AccordionContentBase.displayName = 'AccordionContentBase';
