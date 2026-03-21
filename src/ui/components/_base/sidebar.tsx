import * as React from 'react';

/**
 * Sidebar type variants
 */
export type SidebarType =
  | 'default'
  | 'outline'
  | 'elevated'
  | 'floating'
  | 'inset'
  | 'unstyled';

/**
 * Sidebar collapse modes
 * - 'offcanvas': slides out completely
 * - 'icon': collapses to icon-only width
 * - 'none': not collapsible
 */
export type SidebarCollapsible = 'offcanvas' | 'icon' | 'none';

/**
 * Sidebar sizes (expanded width)
 * | Size | Width  |
 * | sm   | 200px  |
 * | md   | 256px  |
 * | lg   | 320px  |
 */
export type SidebarSize = 'sm' | 'md' | 'lg';

// ============================================================================
// Sidebar Provider
// ============================================================================

export interface SidebarContextValue {
  state: 'expanded' | 'collapsed';
  open: boolean;
  setOpen: (open: boolean) => void;
  toggle: () => void;
  side: 'left' | 'right';
  collapsible: SidebarCollapsible;
  isMobile: boolean;
}

export const SidebarContext = React.createContext<SidebarContextValue | null>(null);

export const useSidebar = () => {
  const context = React.useContext(SidebarContext);
  if (!context) {
    throw new Error('useSidebar must be used within a SidebarProvider');
  }
  return context;
};

// ============================================================================
// Sidebar Root
// ============================================================================

export interface SidebarBaseProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Which side of the screen
   * @default 'left'
   */
  side?: 'left' | 'right';
  
  /**
   * Collapse behavior
   * @default 'offcanvas'
   */
  collapsible?: SidebarCollapsible;
  
  /**
   * Visual structural type
   * @default 'default'
   */
  type?: SidebarType;
  
  /**
   * Sidebar width when expanded
   * @default 'md'
   */
  size?: SidebarSize;
  
  /**
   * Semantic color variant
   */
  variant?: string;
}

/**
 * SidebarBase - App navigation sidebar
 * 
 * Anatomy:
 * - Sidebar (root container)
 *   - SidebarHeader (logo, branding)
 *   - SidebarContent (scrollable nav items)
 *     - SidebarGroup
 *       - SidebarGroupLabel
 *       - SidebarGroupContent
 *         - SidebarMenu
 *           - SidebarMenuItem
 *             - SidebarMenuButton / SidebarMenuAction
 *             - SidebarMenuSub (nested)
 *   - SidebarFooter (user, settings)
 *   - SidebarRail (collapse handle)
 * 
 * States:
 * - expanded: full width
 * - collapsed: icon-only (collapsible="icon") or hidden (collapsible="offcanvas")
 * 
 * Mobile:
 * - Always offcanvas (sheet-style)
 * - Trigger button to open
 * 
 * Accessibility:
 * - nav role or complementary landmark
 * - Keyboard navigation through items
 */
export const SidebarBase = React.forwardRef<HTMLDivElement, SidebarBaseProps>(
  (
    {
      side = 'left',
      collapsible = 'offcanvas',
      type = 'default',
      size = 'md',
      variant,
      ...props
    },
    ref
  ) => (
    <div
      ref={ref}
      data-side={side}
      data-collapsible={collapsible}
      data-type={type}
      data-size={size}
      data-variant={variant}
      {...props}
    />
  )
);
SidebarBase.displayName = 'SidebarBase';

// ============================================================================
// Sidebar Header
// ============================================================================

export interface SidebarHeaderBaseProps extends React.HTMLAttributes<HTMLDivElement> {}

/**
 * SidebarHeaderBase - Top section (logo, branding)
 */
export const SidebarHeaderBase = React.forwardRef<HTMLDivElement, SidebarHeaderBaseProps>(
  (props, ref) => <div ref={ref} {...props} />
);
SidebarHeaderBase.displayName = 'SidebarHeaderBase';

// ============================================================================
// Sidebar Content
// ============================================================================

export interface SidebarContentBaseProps extends React.HTMLAttributes<HTMLDivElement> {}

/**
 * SidebarContentBase - Main scrollable content area
 */
export const SidebarContentBase = React.forwardRef<HTMLDivElement, SidebarContentBaseProps>(
  (props, ref) => <div ref={ref} {...props} />
);
SidebarContentBase.displayName = 'SidebarContentBase';

// ============================================================================
// Sidebar Footer
// ============================================================================

export interface SidebarFooterBaseProps extends React.HTMLAttributes<HTMLDivElement> {}

/**
 * SidebarFooterBase - Bottom section (user, settings)
 */
export const SidebarFooterBase = React.forwardRef<HTMLDivElement, SidebarFooterBaseProps>(
  (props, ref) => <div ref={ref} {...props} />
);
SidebarFooterBase.displayName = 'SidebarFooterBase';

// ============================================================================
// Sidebar Group
// ============================================================================

export interface SidebarGroupBaseProps extends React.HTMLAttributes<HTMLDivElement> {}

/**
 * SidebarGroupBase - Groups related menu items
 */
export const SidebarGroupBase = React.forwardRef<HTMLDivElement, SidebarGroupBaseProps>(
  (props, ref) => <div ref={ref} {...props} />
);
SidebarGroupBase.displayName = 'SidebarGroupBase';

// ============================================================================
// Sidebar Group Label
// ============================================================================

export interface SidebarGroupLabelBaseProps extends React.HTMLAttributes<HTMLDivElement> {}

/**
 * SidebarGroupLabelBase - Label for a group of items
 */
export const SidebarGroupLabelBase = React.forwardRef<HTMLDivElement, SidebarGroupLabelBaseProps>(
  (props, ref) => <div ref={ref} {...props} />
);
SidebarGroupLabelBase.displayName = 'SidebarGroupLabelBase';

// ============================================================================
// Sidebar Group Content
// ============================================================================

export interface SidebarGroupContentBaseProps extends React.HTMLAttributes<HTMLDivElement> {}

/**
 * SidebarGroupContentBase - Container for group items
 */
export const SidebarGroupContentBase = React.forwardRef<HTMLDivElement, SidebarGroupContentBaseProps>(
  (props, ref) => <div ref={ref} {...props} />
);
SidebarGroupContentBase.displayName = 'SidebarGroupContentBase';

// ============================================================================
// Sidebar Menu
// ============================================================================

export interface SidebarMenuBaseProps extends React.HTMLAttributes<HTMLUListElement> {}

/**
 * SidebarMenuBase - List of navigation items
 */
export const SidebarMenuBase = React.forwardRef<HTMLUListElement, SidebarMenuBaseProps>(
  (props, ref) => <ul ref={ref} {...props} />
);
SidebarMenuBase.displayName = 'SidebarMenuBase';

// ============================================================================
// Sidebar Menu Item
// ============================================================================

export interface SidebarMenuItemBaseProps extends React.HTMLAttributes<HTMLLIElement> {}

/**
 * SidebarMenuItemBase - Individual navigation item
 */
export const SidebarMenuItemBase = React.forwardRef<HTMLLIElement, SidebarMenuItemBaseProps>(
  (props, ref) => <li ref={ref} {...props} />
);
SidebarMenuItemBase.displayName = 'SidebarMenuItemBase';

// ============================================================================
// Sidebar Menu Button
// ============================================================================

export interface SidebarMenuButtonBaseProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Whether this item is currently active
   */
  isActive?: boolean;
  
  /**
   * Size variant for the button
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg';
}

/**
 * SidebarMenuButtonBase - Clickable navigation button
 * 
 * States:
 * - default: subtle
 * - hover: background highlight
 * - active: accent/bold
 * - focus: focus ring
 */
export const SidebarMenuButtonBase = React.forwardRef<HTMLButtonElement, SidebarMenuButtonBaseProps>(
  ({ isActive, size = 'md', ...props }, ref) => (
    <button
      ref={ref}
      data-active={isActive || undefined}
      data-size={size}
      {...props}
    />
  )
);
SidebarMenuButtonBase.displayName = 'SidebarMenuButtonBase';

// ============================================================================
// Sidebar Menu Sub
// ============================================================================

export interface SidebarMenuSubBaseProps extends React.HTMLAttributes<HTMLUListElement> {}

/**
 * SidebarMenuSubBase - Nested submenu
 */
export const SidebarMenuSubBase = React.forwardRef<HTMLUListElement, SidebarMenuSubBaseProps>(
  (props, ref) => <ul ref={ref} {...props} />
);
SidebarMenuSubBase.displayName = 'SidebarMenuSubBase';

// ============================================================================
// Sidebar Rail
// ============================================================================

export interface SidebarRailBaseProps extends React.HTMLAttributes<HTMLButtonElement> {}

/**
 * SidebarRailBase - Edge handle to collapse/expand sidebar
 */
export const SidebarRailBase = React.forwardRef<HTMLButtonElement, SidebarRailBaseProps>(
  (props, ref) => (
    <button
      ref={ref}
      aria-label="Toggle Sidebar"
      tabIndex={-1}
      {...props}
    />
  )
);
SidebarRailBase.displayName = 'SidebarRailBase';

// ============================================================================
// Sidebar Trigger
// ============================================================================

export interface SidebarTriggerBaseProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

/**
 * SidebarTriggerBase - Button to toggle sidebar (especially on mobile)
 */
export const SidebarTriggerBase = React.forwardRef<HTMLButtonElement, SidebarTriggerBaseProps>(
  (props, ref) => (
    <button ref={ref} aria-label="Toggle Sidebar" {...props} />
  )
);
SidebarTriggerBase.displayName = 'SidebarTriggerBase';

// ============================================================================
// Sidebar Inset
// ============================================================================

export interface SidebarInsetBaseProps extends React.HTMLAttributes<HTMLDivElement> {}

/**
 * SidebarInsetBase - Main content area that adjusts for sidebar
 */
export const SidebarInsetBase = React.forwardRef<HTMLDivElement, SidebarInsetBaseProps>(
  (props, ref) => <div ref={ref} {...props} />
);
SidebarInsetBase.displayName = 'SidebarInsetBase';

// Legacy alias
export const SidebarItemBase = SidebarMenuItemBase;
export type SidebarItemBaseProps = SidebarMenuItemBaseProps;
