import * as React from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';

/**
 * Tabs trigger type variants
 */
export type TabsType =
  | 'default'
  | 'solid'
  | 'outline'
  | 'ghost'
  | 'contrast'
  | 'soft'
  | 'neutral'
  | 'subtle'
  | 'flat'
  | 'tinted'
  | 'disabled'
  | 'unstyled';

/**
 * Tabs sizes
 */
export type TabsSize = 'sm' | 'md' | 'lg';

// ============================================================================
// Tabs Root
// ============================================================================

export interface TabsBaseProps
  extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Root> {
  /**
   * Size variant
   * @default 'md'
   */
  size?: TabsSize;
  
  /**
   * Semantic color variant
   */
  variant?: string;
}

/**
 * TabsBase - Tabbed interface where one panel is visible at a time
 * 
 * Props:
 * - defaultValue / value / onValueChange: controlled tab state
 * - orientation: "horizontal" (default) | "vertical"
 * - activationMode: "automatic" (focus → activate) | "manual"
 * 
 * Keyboard:
 * - ← / → (horizontal) or ↑ / ↓ (vertical) → move focus
 * - Automatic mode: focus movement also activates
 * - Manual mode: Enter / Space activates focused trigger
 * - Home → first tab, End → last tab
 */
export const TabsBase = React.forwardRef<
  React.ComponentRef<typeof TabsPrimitive.Root>,
  TabsBaseProps
>(({ size = 'md', variant, ...props }, ref) => (
  <TabsPrimitive.Root
    ref={ref}
    data-size={size}
    data-variant={variant}
    {...props}
  />
));
TabsBase.displayName = 'TabsBase';

// ============================================================================
// Tabs List
// ============================================================================

export interface TabsListBaseProps
  extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.List> {
  /**
   * Visual type for the list container
   * @default 'default'
   */
  type?: 'default' | 'ghost' | 'subtle' | 'flat' | 'neutral';
}

/**
 * TabsListBase - Tab trigger container
 * 
 * An indicator element (line or fill) moves to show active tab.
 * 
 * Accessibility:
 * - role="tablist"
 * - aria-orientation
 */
export const TabsListBase = React.forwardRef<
  React.ComponentRef<typeof TabsPrimitive.List>,
  TabsListBaseProps
>(({ type = 'default', ...props }, ref) => (
  <TabsPrimitive.List ref={ref} data-type={type} {...props} />
));
TabsListBase.displayName = 'TabsListBase';

// ============================================================================
// Tabs Trigger
// ============================================================================

export interface TabsTriggerBaseProps
  extends Omit<React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>, 'type'> {
  /**
   * Visual structural type
   * @default 'default'
   */
  visualType?: TabsType;

  /**
   * HTML type attribute
   * @default 'button'
   */
  htmlType?: 'button' | 'submit' | 'reset';
}

/**
 * TabsTriggerBase - Tab button
 * 
 * States:
 * - default | hover | focus | active | selected (data-state="active")
 * 
 * Active indicator:
 * - Underline: 2px line under active trigger (slides horizontally)
 * - Fill: background pill moves under active trigger
 * - Version defines which indicator style
 * 
 * Animation:
 * - Indicator: translate-x to active tab | --duration-base | --ease-standard
 * 
 * Accessibility:
 * - role="tab"
 * - aria-selected
 * - aria-controls="[panel-id]"
 */
export const TabsTriggerBase = React.forwardRef<
  React.ComponentRef<typeof TabsPrimitive.Trigger>,
  TabsTriggerBaseProps
>(({ visualType = 'default', htmlType = 'button', ...props }, ref) => (
  <TabsPrimitive.Trigger ref={ref} type={htmlType} data-type={visualType} {...props} />
));
TabsTriggerBase.displayName = 'TabsTriggerBase';

// ============================================================================
// Tabs Content
// ============================================================================

export interface TabsContentBaseProps
  extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content> {}

/**
 * TabsContentBase - Associated panel
 * 
 * Animation:
 * - Content switch: opacity 0→1 | --duration-fast
 * 
 * Accessibility:
 * - role="tabpanel"
 * - aria-labelledby="[trigger-id]"
 * - tabindex="0"
 * - Inactive content: hidden attribute
 */
export const TabsContentBase = React.forwardRef<
  React.ComponentRef<typeof TabsPrimitive.Content>,
  TabsContentBaseProps
>((props, ref) => <TabsPrimitive.Content ref={ref} {...props} />);
TabsContentBase.displayName = 'TabsContentBase';
