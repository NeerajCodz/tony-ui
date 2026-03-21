import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';

/**
 * Card type variants - all 15 types supported
 */
export type CardType =
  | 'default'
  | 'solid'
  | 'outline'
  | 'ghost'
  | 'inverse'
  | 'contrast'
  | 'soft'
  | 'neutral'
  | 'subtle'
  | 'elevated'
  | 'flat'
  | 'tinted'
  | 'link'
  | 'disabled'
  | 'unstyled';

/**
 * Card sizes - controls padding
 * sm: 16px padding
 * md: 20px padding (default)
 * lg: 24px padding
 */
export type CardSize = 'sm' | 'md' | 'lg';

// ============================================================================
// Card Root
// ============================================================================

export interface CardBaseProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Visual structural type
   * @default 'default'
   */
  type?: CardType;
  
  /**
   * Semantic color variant
   */
  variant?: string;
  
  /**
   * Size variant affecting padding
   * @default 'md'
   */
  size?: CardSize;
  
  /**
   * Makes the entire card interactive (adds hover/active states + cursor:pointer)
   */
  clickable?: boolean;
  
  /**
   * Selected state (checkbox-card pattern)
   */
  selected?: boolean;
  
  /**
   * Disabled state
   */
  disabled?: boolean;
  
  /**
   * Makes card a link container
   */
  href?: string;
  
  /**
   * Card orientation
   * @default 'vertical'
   */
  orientation?: 'vertical' | 'horizontal';
  
  /**
   * Enable animation effects
   */
  animated?: boolean;
  
  /**
   * Render as a different element
   */
  asChild?: boolean;
}

/**
 * CardBase - The foundational surface container
 * 
 * States:
 * - default: surface at rest
 * - hover: (if clickable) background shifts, border brightens
 * - focus: (if clickable) focus ring on root
 * - active: (if clickable) slight scale or translate down
 * - selected: selected token colors applied
 * - disabled: reduced opacity
 * 
 * Accessibility:
 * - Non-clickable: no role needed
 * - Clickable: role="button" or native button/a wrapper, tabindex="0"
 * - Selected: aria-selected="true" or aria-checked="true"
 * - If link card: <a> wrapping content
 */
export const CardBase = React.forwardRef<HTMLDivElement, CardBaseProps>(
  (
    {
      type = 'default',
      variant,
      size = 'md',
      clickable = false,
      selected = false,
      disabled = false,
      href,
      orientation = 'vertical',
      animated = false,
      asChild = false,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : 'div';
    
    return (
      <Comp
        ref={ref}
        role={clickable ? 'button' : undefined}
        tabIndex={clickable && !disabled ? 0 : undefined}
        aria-selected={selected ? true : undefined}
        aria-disabled={disabled ? true : undefined}
        data-type={type}
        data-size={size}
        data-variant={variant}
        data-clickable={clickable ? '' : undefined}
        data-selected={selected ? '' : undefined}
        data-disabled={disabled ? '' : undefined}
        data-orientation={orientation}
        data-animated={animated ? '' : undefined}
        data-href={href}
        {...props}
      />
    );
  }
);
CardBase.displayName = 'CardBase';

// ============================================================================
// Card Header
// ============================================================================

export interface CardHeaderBaseProps extends React.HTMLAttributes<HTMLDivElement> {
  animated?: boolean;
}

/**
 * CardHeaderBase - Top section, usually title area
 * padding-bottom is half of CardContent padding
 */
export const CardHeaderBase = React.forwardRef<HTMLDivElement, CardHeaderBaseProps>(
  ({ animated, ...props }, ref) => (
    <div ref={ref} data-animated={animated ? '' : undefined} {...props} />
  )
);
CardHeaderBase.displayName = 'CardHeaderBase';

// ============================================================================
// Card Title
// ============================================================================

export interface CardTitleBaseProps extends React.HTMLAttributes<HTMLHeadingElement> {
  /**
   * Heading level
   * @default 'h3'
   */
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  animated?: boolean;
}

/**
 * CardTitleBase - h-level heading (h3-equivalent by default)
 */
export const CardTitleBase = React.forwardRef<HTMLHeadingElement, CardTitleBaseProps>(
  ({ as: Comp = 'h3', animated, ...props }, ref) => (
    <Comp ref={ref} data-animated={animated ? '' : undefined} {...props} />
  )
);
CardTitleBase.displayName = 'CardTitleBase';

// ============================================================================
// Card Description
// ============================================================================

export interface CardDescriptionBaseProps extends React.HTMLAttributes<HTMLParagraphElement> {
  animated?: boolean;
}

/**
 * CardDescriptionBase - Secondary text, uses body/secondary text tokens
 */
export const CardDescriptionBase = React.forwardRef<HTMLParagraphElement, CardDescriptionBaseProps>(
  ({ animated, ...props }, ref) => (
    <p ref={ref} data-animated={animated ? '' : undefined} {...props} />
  )
);
CardDescriptionBase.displayName = 'CardDescriptionBase';

// ============================================================================
// Card Content
// ============================================================================

export interface CardContentBaseProps extends React.HTMLAttributes<HTMLDivElement> {
  animated?: boolean;
}

/**
 * CardContentBase - Main content slot, full padding on all sides
 */
export const CardContentBase = React.forwardRef<HTMLDivElement, CardContentBaseProps>(
  ({ animated, ...props }, ref) => (
    <div ref={ref} data-animated={animated ? '' : undefined} {...props} />
  )
);
CardContentBase.displayName = 'CardContentBase';

// ============================================================================
// Card Footer
// ============================================================================

export interface CardFooterBaseProps extends React.HTMLAttributes<HTMLDivElement> {
  animated?: boolean;
}

/**
 * CardFooterBase - Actions, meta info
 * padding-top is half of CardContent padding; flex row, gap --space-4
 */
export const CardFooterBase = React.forwardRef<HTMLDivElement, CardFooterBaseProps>(
  ({ animated, ...props }, ref) => (
    <div ref={ref} data-animated={animated ? '' : undefined} {...props} />
  )
);
CardFooterBase.displayName = 'CardFooterBase';
