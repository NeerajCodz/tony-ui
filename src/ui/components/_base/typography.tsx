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
  as?: React.ElementType;
}

/**
 * TypographyH1Base - Page title (32-48px)
 */
export const TypographyH1Base = React.forwardRef<HTMLHeadingElement, TypographyH1BaseProps>(
  ({ variant, align, weight, as: Component = 'h1', ...props }, ref) => (
    <Component
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
  as?: React.ElementType;
}

/**
 * TypographyH2Base - Section heading (24-30px)
 */
export const TypographyH2Base = React.forwardRef<HTMLHeadingElement, TypographyH2BaseProps>(
  ({ variant, align, weight, as: Component = 'h2', ...props }, ref) => (
    <Component
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
  as?: React.ElementType;
}

/**
 * TypographyH3Base - Subsection heading (20-24px)
 */
export const TypographyH3Base = React.forwardRef<HTMLHeadingElement, TypographyH3BaseProps>(
  ({ variant, align, weight, as: Component = 'h3', ...props }, ref) => (
    <Component
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
  as?: React.ElementType;
}

/**
 * TypographyH4Base - Minor heading (18-20px)
 */
export const TypographyH4Base = React.forwardRef<HTMLHeadingElement, TypographyH4BaseProps>(
  ({ variant, align, weight, as: Component = 'h4', ...props }, ref) => (
    <Component
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
  as?: React.ElementType;
}

/**
 * TypographyPBase - Body paragraph text
 */
export const TypographyPBase = React.forwardRef<HTMLParagraphElement, TypographyPBaseProps>(
  ({ variant, align, weight, as: Component = 'p', ...props }, ref) => (
    <Component
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
export interface TypographyBaseProps extends React.HTMLAttributes<HTMLElement> {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'blockquote' | 'code' | 'lead' | 'large' | 'small' | 'muted' | 'list' | 'ordered-list' | 'body' | 'label';
  asChild?: boolean;
  as?: React.ElementType;
}

/**
 * TypographyBase - Generic typography component that delegates to specific base components
 */
export const TypographyBase = React.forwardRef<HTMLElement, TypographyBaseProps>(
  ({ variant = 'p', as, ...props }, ref) => {
    switch (variant) {
      case 'h1': return <TypographyH1Base as={as} ref={ref as React.Ref<HTMLHeadingElement>} {...props} />;
      case 'h2': return <TypographyH2Base as={as} ref={ref as React.Ref<HTMLHeadingElement>} {...props} />;
      case 'h3': return <TypographyH3Base as={as} ref={ref as React.Ref<HTMLHeadingElement>} {...props} />;
      case 'h4': return <TypographyH4Base as={as} ref={ref as React.Ref<HTMLHeadingElement>} {...props} />;
      case 'h5': 
      case 'h6': 
      case 'label':
        return <TypographyH4Base as={as || "h5"} ref={ref as React.Ref<HTMLHeadingElement>} {...props} />;
      case 'blockquote': return <TypographyBlockquoteBase ref={ref as React.Ref<HTMLQuoteElement>} {...props} />;
      case 'code': return <TypographyCodeBase ref={ref as React.Ref<HTMLElement>} {...props} />;
      case 'lead': return <TypographyLeadBase ref={ref as React.Ref<HTMLParagraphElement>} {...props} />;
      case 'large': return <TypographyLargeBase ref={ref as React.Ref<HTMLDivElement>} {...props} />;
      case 'small': return <TypographySmallBase ref={ref as React.Ref<HTMLElement>} {...props} />;
      case 'muted': return <TypographyMutedBase ref={ref as React.Ref<HTMLParagraphElement>} {...props} />;
      case 'list': return <TypographyListBase ref={ref as React.Ref<HTMLUListElement>} {...props} />;
      case 'ordered-list': return <TypographyOrderedListBase ref={ref as React.Ref<HTMLOListElement>} {...props} />;
      case 'p':
      case 'body':
      default:
        return <TypographyPBase as={as} ref={ref as React.Ref<HTMLParagraphElement>} {...props} />;
    }
  }
);
TypographyBase.displayName = 'TypographyBase';
