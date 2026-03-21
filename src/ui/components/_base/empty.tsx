import * as React from 'react';

/**
 * Empty state sizes
 */
export type EmptySize = 'sm' | 'md' | 'lg';

// ============================================================================
// Empty Root
// ============================================================================

export interface EmptyBaseProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Size variant
   * @default 'md'
   */
  size?: EmptySize;
  
  /**
   * Semantic color variant
   */
  variant?: string;
}

/**
 * EmptyBase - Empty state placeholder
 * 
 * Use when there's no content to display:
 * - Empty search results
 * - No items in a list
 * - No data loaded
 * 
 * Anatomy:
 * - Empty (root container)
 *   - EmptyIcon (illustration or icon)
 *   - EmptyTitle (heading)
 *   - EmptyDescription (explanation)
 *   - EmptyActions (CTA buttons)
 */
export const EmptyBase = React.forwardRef<HTMLDivElement, EmptyBaseProps>(
  ({ size = 'md', variant, ...props }, ref) => (
    <div
      ref={ref}
      role="status"
      data-size={size}
      data-variant={variant}
      {...props}
    />
  )
);
EmptyBase.displayName = 'EmptyBase';

// ============================================================================
// Empty Icon
// ============================================================================

export interface EmptyIconBaseProps extends React.HTMLAttributes<HTMLDivElement> {}

/**
 * EmptyIconBase - Visual illustration or icon
 */
export const EmptyIconBase = React.forwardRef<HTMLDivElement, EmptyIconBaseProps>(
  (props, ref) => <div ref={ref} aria-hidden="true" {...props} />
);
EmptyIconBase.displayName = 'EmptyIconBase';

// ============================================================================
// Empty Title
// ============================================================================

export interface EmptyTitleBaseProps extends React.HTMLAttributes<HTMLHeadingElement> {}

/**
 * EmptyTitleBase - Empty state heading
 */
export const EmptyTitleBase = React.forwardRef<HTMLHeadingElement, EmptyTitleBaseProps>(
  (props, ref) => <h3 ref={ref} {...props} />
);
EmptyTitleBase.displayName = 'EmptyTitleBase';

// ============================================================================
// Empty Description
// ============================================================================

export interface EmptyDescriptionBaseProps extends React.HTMLAttributes<HTMLParagraphElement> {}

/**
 * EmptyDescriptionBase - Explanation text
 */
export const EmptyDescriptionBase = React.forwardRef<HTMLParagraphElement, EmptyDescriptionBaseProps>(
  (props, ref) => <p ref={ref} {...props} />
);
EmptyDescriptionBase.displayName = 'EmptyDescriptionBase';

// ============================================================================
// Empty Actions
// ============================================================================

export interface EmptyActionsBaseProps extends React.HTMLAttributes<HTMLDivElement> {}

/**
 * EmptyActionsBase - Container for action buttons
 */
export const EmptyActionsBase = React.forwardRef<HTMLDivElement, EmptyActionsBaseProps>(
  (props, ref) => <div ref={ref} {...props} />
);
EmptyActionsBase.displayName = 'EmptyActionsBase';
