import * as React from 'react';

/**
 * Resizable type variants
 */
export type ResizableType =
  | 'default'
  | 'outline'
  | 'subtle'
  | 'unstyled';

/**
 * Resizable handle sizes
 * | Size | Handle width |
 * | sm   | 2px          |
 * | md   | 4px          |
 * | lg   | 8px          |
 */
export type ResizableSize = 'sm' | 'md' | 'lg';

// ============================================================================
// Resizable Panel Group
// ============================================================================

export interface ResizablePanelGroupBaseProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Layout direction
   * @default 'horizontal'
   */
  direction?: 'horizontal' | 'vertical';
  
  /**
   * Visual structural type
   * @default 'default'
   */
  type?: ResizableType;
  
  /**
   * Handle size
   * @default 'md'
   */
  size?: ResizableSize;
  
  /**
   * Semantic color variant
   */
  variant?: string;
  
  /**
   * Whether panels can be collapsed by double-clicking handle
   * @default false
   */
  collapsible?: boolean;
  
  /**
   * Callback when layout changes
   */
  onLayout?: (sizes: number[]) => void;
  
  /**
   * Unique ID for persisting layout
   */
  autoSaveId?: string;
}

/**
 * ResizablePanelGroupBase - Container for resizable panels
 * 
 * Anatomy:
 * - ResizablePanelGroup (container)
 *   - ResizablePanel (content area)
 *   - ResizableHandle (drag handle)
 *   - ResizablePanel (content area)
 *   - ...
 * 
 * Behavior:
 * - Drag handle to resize adjacent panels
 * - Double-click handle to collapse (if collapsible)
 * - Keyboard: Tab to handle, Arrow keys to resize
 * 
 * Note: This is a base component. For full functionality,
 * consider using react-resizable-panels or similar library.
 * 
 * Accessibility:
 * - Handle has role="separator"
 * - Handle has aria-orientation
 * - Handle is keyboard focusable and operable
 */
export const ResizablePanelGroupBase = React.forwardRef<HTMLDivElement, ResizablePanelGroupBaseProps>(
  (
    {
      direction = 'horizontal',
      type = 'default',
      size = 'md',
      variant,
      collapsible,
      ...props
    },
    ref
  ) => (
    <div
      ref={ref}
      data-direction={direction}
      data-type={type}
      data-size={size}
      data-variant={variant}
      data-collapsible={collapsible || undefined}
      {...props}
    />
  )
);
ResizablePanelGroupBase.displayName = 'ResizablePanelGroupBase';

// ============================================================================
// Resizable Panel
// ============================================================================

export interface ResizablePanelBaseProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Default size as percentage (0-100)
   */
  defaultSize?: number;
  
  /**
   * Minimum size as percentage (0-100)
   */
  minSize?: number;
  
  /**
   * Maximum size as percentage (0-100)
   */
  maxSize?: number;
  
  /**
   * Whether panel is currently collapsed
   */
  collapsed?: boolean;
  
  /**
   * Whether panel can be collapsed
   * @default false
   */
  collapsible?: boolean;
  
  /**
   * Size when collapsed (percentage)
   * @default 0
   */
  collapsedSize?: number;
  
  /**
   * Callback when panel is collapsed/expanded
   */
  onCollapse?: (collapsed: boolean) => void;
  
  /**
   * Callback when panel is resized
   */
  onResize?: (size: number) => void;
  
  /**
   * Order of panel in group (for persistence)
   */
  order?: number;
}

/**
 * ResizablePanelBase - Content area that can be resized
 * 
 * Size is controlled by dragging adjacent handles.
 */
export const ResizablePanelBase = React.forwardRef<HTMLDivElement, ResizablePanelBaseProps>(
  (
    {
      defaultSize,
      minSize,
      maxSize,
      collapsed,
      collapsible,
      collapsedSize,
      order,
      ...props
    },
    ref
  ) => (
    <div
      ref={ref}
      data-collapsed={collapsed || undefined}
      data-collapsible={collapsible || undefined}
      style={{
        flexBasis: defaultSize ? `${defaultSize}%` : undefined,
        minWidth: minSize ? `${minSize}%` : undefined,
        maxWidth: maxSize ? `${maxSize}%` : undefined,
      }}
      {...props}
    />
  )
);
ResizablePanelBase.displayName = 'ResizablePanelBase';

// ============================================================================
// Resizable Handle
// ============================================================================

export interface ResizableHandleBaseProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Disable the handle
   */
  disabled?: boolean;
  
  /**
   * Whether handle shows a visible grip indicator
   * @default false
   */
  withHandle?: boolean;
}

/**
 * ResizableHandleBase - Draggable divider between panels
 * 
 * States:
 * - default: subtle line
 * - hover: highlights, cursor changes
 * - active (dragging): accent color
 * - focus: focus ring
 * - disabled: no interaction
 * 
 * Interaction:
 * - Drag to resize
 * - Double-click to collapse (if enabled)
 * - Keyboard: Arrow keys when focused
 */
export const ResizableHandleBase = React.forwardRef<HTMLDivElement, ResizableHandleBaseProps>(
  ({ disabled, withHandle, ...props }, ref) => (
    <div
      ref={ref}
      role="separator"
      tabIndex={disabled ? -1 : 0}
      aria-disabled={disabled || undefined}
      data-disabled={disabled || undefined}
      data-with-handle={withHandle || undefined}
      {...props}
    />
  )
);
ResizableHandleBase.displayName = 'ResizableHandleBase';

// Aliases for compatibility
export const ResizableBase = ResizablePanelGroupBase;
export const ResizeHandleBase = ResizableHandleBase;
export type ResizableBaseProps = ResizablePanelGroupBaseProps;

// Compatibility aliases expected by version wrappers
export const ResizablePanelGroup = ResizablePanelGroupBase;
export const ResizablePanel = ResizablePanelBase;
export const ResizableHandle = ResizableHandleBase;

// Bridge exports so version components consume resizable-panels via _base only
export { Group,Panel,Separator } from 'react-resizable-panels';
