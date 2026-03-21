import * as React from 'react';

/**
 * Typography variants (text colors)
 */
export type TypographyVariant =
  | 'default'
  | 'muted'
  | 'primary'
  | 'secondary'
  | 'destructive'
  | 'success'
  | 'warning';

/**
 * Text alignment
 */
export type TypographyAlign = 'left' | 'center' | 'right' | 'justify';

/**
 * Font weight
 */
export type TypographyWeight =
  | 'thin'
  | 'light'
  | 'normal'
  | 'medium'
  | 'semibold'
  | 'bold'
  | 'extrabold';

// ============================================================================
// Heading 1
// ============================================================================

export interface TypographyH1BaseProps extends React.HTMLAttributes<HTMLHeadingElement> {
  variant?: TypographyVariant;
  align?: TypographyAlign;
  weight?: TypographyWeight;
}

/**
 * TypographyH1Base - Page title (32-48px)
 */
export const TypographyH1Base = React.forwardRef<HTMLHeadingElement, TypographyH1BaseProps>(
  ({ variant, align, weight, ...props }, ref) => (
    <h1
      ref={ref}
      data-variant={variant}
      data-align={align}
      data-weight={weight}
      {...props}
    />
  )
);
TypographyH1Base.displayName = 'TypographyH1Base';

// ============================================================================
// Heading 2
// ============================================================================

export interface TypographyH2BaseProps extends React.HTMLAttributes<HTMLHeadingElement> {
  variant?: TypographyVariant;
  align?: TypographyAlign;
  weight?: TypographyWeight;
}

/**
 * TypographyH2Base - Section heading (24-30px)
 */
export const TypographyH2Base = React.forwardRef<HTMLHeadingElement, TypographyH2BaseProps>(
  ({ variant, align, weight, ...props }, ref) => (
    <h2
      ref={ref}
      data-variant={variant}
      data-align={align}
      data-weight={weight}
      {...props}
    />
  )
);
TypographyH2Base.displayName = 'TypographyH2Base';

// ============================================================================
// Heading 3
// ============================================================================

export interface TypographyH3BaseProps extends React.HTMLAttributes<HTMLHeadingElement> {
  variant?: TypographyVariant;
  align?: TypographyAlign;
  weight?: TypographyWeight;
}

/**
 * TypographyH3Base - Subsection heading (20-24px)
 */
export const TypographyH3Base = React.forwardRef<HTMLHeadingElement, TypographyH3BaseProps>(
  ({ variant, align, weight, ...props }, ref) => (
    <h3
      ref={ref}
      data-variant={variant}
      data-align={align}
      data-weight={weight}
      {...props}
    />
  )
);
TypographyH3Base.displayName = 'TypographyH3Base';

// ============================================================================
// Heading 4
// ============================================================================

export interface TypographyH4BaseProps extends React.HTMLAttributes<HTMLHeadingElement> {
  variant?: TypographyVariant;
  align?: TypographyAlign;
  weight?: TypographyWeight;
}

/**
 * TypographyH4Base - Minor heading (18-20px)
 */
export const TypographyH4Base = React.forwardRef<HTMLHeadingElement, TypographyH4BaseProps>(
  ({ variant, align, weight, ...props }, ref) => (
    <h4
      ref={ref}
      data-variant={variant}
      data-align={align}
      data-weight={weight}
      {...props}
    />
  )
);
TypographyH4Base.displayName = 'TypographyH4Base';

// ============================================================================
// Paragraph
// ============================================================================

export interface TypographyPBaseProps extends React.HTMLAttributes<HTMLParagraphElement> {
  variant?: TypographyVariant;
  align?: TypographyAlign;
  weight?: TypographyWeight;
}

/**
 * TypographyPBase - Body paragraph text
 */
export const TypographyPBase = React.forwardRef<HTMLParagraphElement, TypographyPBaseProps>(
  ({ variant, align, weight, ...props }, ref) => (
    <p
      ref={ref}
      data-variant={variant}
      data-align={align}
      data-weight={weight}
      {...props}
    />
  )
);
TypographyPBase.displayName = 'TypographyPBase';

// ============================================================================
// Blockquote
// ============================================================================

export interface TypographyBlockquoteBaseProps extends React.HTMLAttributes<HTMLQuoteElement> {
  variant?: TypographyVariant;
}

/**
 * TypographyBlockquoteBase - Block quotation
 */
export const TypographyBlockquoteBase = React.forwardRef<HTMLQuoteElement, TypographyBlockquoteBaseProps>(
  ({ variant, ...props }, ref) => (
    <blockquote ref={ref} data-variant={variant} {...props} />
  )
);
TypographyBlockquoteBase.displayName = 'TypographyBlockquoteBase';

// ============================================================================
// Inline Code
// ============================================================================

export interface TypographyCodeBaseProps extends React.HTMLAttributes<HTMLElement> {
  variant?: TypographyVariant;
}

/**
 * TypographyCodeBase - Inline code snippet
 */
export const TypographyCodeBase = React.forwardRef<HTMLElement, TypographyCodeBaseProps>(
  ({ variant, ...props }, ref) => (
    <code ref={ref} data-variant={variant} {...props} />
  )
);
TypographyCodeBase.displayName = 'TypographyCodeBase';

// ============================================================================
// Lead
// ============================================================================

export interface TypographyLeadBaseProps extends React.HTMLAttributes<HTMLParagraphElement> {
  variant?: TypographyVariant;
  align?: TypographyAlign;
}

/**
 * TypographyLeadBase - Lead paragraph (larger intro text)
 */
export const TypographyLeadBase = React.forwardRef<HTMLParagraphElement, TypographyLeadBaseProps>(
  ({ variant, align, ...props }, ref) => (
    <p ref={ref} data-variant={variant} data-align={align} {...props} />
  )
);
TypographyLeadBase.displayName = 'TypographyLeadBase';

// ============================================================================
// Large
// ============================================================================

export interface TypographyLargeBaseProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: TypographyVariant;
  align?: TypographyAlign;
}

/**
 * TypographyLargeBase - Large text (18px)
 */
export const TypographyLargeBase = React.forwardRef<HTMLDivElement, TypographyLargeBaseProps>(
  ({ variant, align, ...props }, ref) => (
    <div ref={ref} data-variant={variant} data-align={align} {...props} />
  )
);
TypographyLargeBase.displayName = 'TypographyLargeBase';

// ============================================================================
// Small
// ============================================================================

export interface TypographySmallBaseProps extends React.HTMLAttributes<HTMLElement> {
  variant?: TypographyVariant;
}

/**
 * TypographySmallBase - Small text (14px)
 */
export const TypographySmallBase = React.forwardRef<HTMLElement, TypographySmallBaseProps>(
  ({ variant, ...props }, ref) => (
    <small ref={ref} data-variant={variant} {...props} />
  )
);
TypographySmallBase.displayName = 'TypographySmallBase';

// ============================================================================
// Muted
// ============================================================================

export interface TypographyMutedBaseProps extends React.HTMLAttributes<HTMLParagraphElement> {
  align?: TypographyAlign;
}

/**
 * TypographyMutedBase - Muted/secondary text
 */
export const TypographyMutedBase = React.forwardRef<HTMLParagraphElement, TypographyMutedBaseProps>(
  ({ align, ...props }, ref) => (
    <p ref={ref} data-variant="muted" data-align={align} {...props} />
  )
);
TypographyMutedBase.displayName = 'TypographyMutedBase';

// ============================================================================
// List
// ============================================================================

export interface TypographyListBaseProps extends React.HTMLAttributes<HTMLUListElement> {
  variant?: TypographyVariant;
  /**
   * Whether to show list markers
   * @default true
   */
  showMarker?: boolean;
}

/**
 * TypographyListBase - Unordered list
 */
export const TypographyListBase = React.forwardRef<HTMLUListElement, TypographyListBaseProps>(
  ({ variant, showMarker = true, ...props }, ref) => (
    <ul ref={ref} data-variant={variant} data-show-marker={showMarker} {...props} />
  )
);
TypographyListBase.displayName = 'TypographyListBase';

// ============================================================================
// Ordered List
// ============================================================================

export interface TypographyOrderedListBaseProps extends React.HTMLAttributes<HTMLOListElement> {
  variant?: TypographyVariant;
  /**
   * List style type
   * @default 'decimal'
   */
  listStyleType?: 'decimal' | 'lower-alpha' | 'upper-alpha' | 'lower-roman' | 'upper-roman';
}

/**
 * TypographyOrderedListBase - Ordered list
 */
export const TypographyOrderedListBase = React.forwardRef<HTMLOListElement, TypographyOrderedListBaseProps>(
  ({ variant, listStyleType = 'decimal', style, ...props }, ref) => (
    <ol
      ref={ref}
      data-variant={variant}
      style={{ listStyleType, ...style }}
      {...props}
    />
  )
);
TypographyOrderedListBase.displayName = 'TypographyOrderedListBase';

// ============================================================================
// List Item
// ============================================================================

export interface TypographyListItemBaseProps extends React.LiHTMLAttributes<HTMLLIElement> {}

/**
 * TypographyListItemBase - List item
 */
export const TypographyListItemBase = React.forwardRef<HTMLLIElement, TypographyListItemBaseProps>(
  (props, ref) => <li ref={ref} {...props} />
);
TypographyListItemBase.displayName = 'TypographyListItemBase';
