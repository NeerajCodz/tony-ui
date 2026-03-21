import * as React from 'react';

/**
 * Carousel type variants
 */
export type CarouselType =
  | 'default'
  | 'outline'
  | 'soft'
  | 'unstyled';

/**
 * Carousel sizes (affects navigation buttons and spacing)
 */
export type CarouselSize = 'sm' | 'md' | 'lg';

// ============================================================================
// Carousel Context
// ============================================================================

export interface CarouselContextValue {
  orientation: 'horizontal' | 'vertical';
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
  selectedIndex: number;
  scrollTo: (index: number) => void;
}

export const CarouselContext = React.createContext<CarouselContextValue | null>(null);

export const useCarousel = () => {
  const context = React.useContext(CarouselContext);
  if (!context) {
    throw new Error('useCarousel must be used within a CarouselProvider');
  }
  return context;
};

// ============================================================================
// Carousel Root
// ============================================================================

export interface CarouselBaseProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Scroll direction
   * @default 'horizontal'
   */
  orientation?: 'horizontal' | 'vertical';
  
  /**
   * Visual structural type
   * @default 'default'
   */
  type?: CarouselType;
  
  /**
   * Size variant
   * @default 'md'
   */
  size?: CarouselSize;
  
  /**
   * Semantic color variant
   */
  variant?: string;
  
  /**
   * Enable infinite loop
   * @default false
   */
  loop?: boolean;
  
  /**
   * Auto-play interval in ms (0 = disabled)
   * @default 0
   */
  autoPlay?: number;
  
  /**
   * Pause auto-play on hover
   * @default true
   */
  pauseOnHover?: boolean;
  
  /**
   * Number of items to scroll per navigation
   * @default 1
   */
  slidesToScroll?: number;
  
  /**
   * Alignment of slides
   * @default 'start'
   */
  align?: 'start' | 'center' | 'end';
  
  /**
   * Enable drag/swipe scrolling
   * @default true
   */
  draggable?: boolean;
}

/**
 * CarouselBase - Sliding content carousel
 * 
 * Anatomy:
 * - Carousel (root container)
 *   - CarouselContent (scrollable track)
 *     - CarouselItem (individual slide)
 *   - CarouselPrevious (nav button)
 *   - CarouselNext (nav button)
 *   - CarouselDots (pagination indicators)
 * 
 * Behavior:
 * - Horizontal/vertical scroll
 * - Touch/swipe support
 * - Auto-play option
 * - Loop option
 * 
 * Keyboard:
 * - ←/→ (horizontal) or ↑/↓ (vertical): navigate slides
 * - Tab: moves to navigation buttons
 * 
 * Accessibility:
 * - role="region" aria-roledescription="carousel"
 * - Slides have role="group" aria-roledescription="slide"
 * - Live region for auto-play announcements
 */
export const CarouselBase = React.forwardRef<HTMLDivElement, CarouselBaseProps>(
  (
    {
      orientation = 'horizontal',
      type = 'default',
      size = 'md',
      variant,
      loop,
      autoPlay,
      pauseOnHover = true,
      slidesToScroll = 1,
      align = 'start',
      draggable = true,
      ...props
    },
    ref
  ) => (
    <div
      ref={ref}
      role="region"
      aria-roledescription="carousel"
      data-orientation={orientation}
      data-type={type}
      data-size={size}
      data-variant={variant}
      data-loop={loop || undefined}
      data-auto-play={autoPlay || undefined}
      data-align={align}
      data-draggable={draggable}
      {...props}
    />
  )
);
CarouselBase.displayName = 'CarouselBase';

// ============================================================================
// Carousel Content
// ============================================================================

export interface CarouselContentBaseProps extends React.HTMLAttributes<HTMLDivElement> {}

/**
 * CarouselContentBase - Scrollable track containing slides
 */
export const CarouselContentBase = React.forwardRef<HTMLDivElement, CarouselContentBaseProps>(
  (props, ref) => <div ref={ref} {...props} />
);
CarouselContentBase.displayName = 'CarouselContentBase';

// ============================================================================
// Carousel Item
// ============================================================================

export interface CarouselItemBaseProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Index of this slide
   */
  index?: number;
}

/**
 * CarouselItemBase - Individual slide
 */
export const CarouselItemBase = React.forwardRef<HTMLDivElement, CarouselItemBaseProps>(
  ({ index, ...props }, ref) => (
    <div
      ref={ref}
      role="group"
      aria-roledescription="slide"
      aria-label={index !== undefined ? `Slide ${index + 1}` : undefined}
      data-index={index}
      {...props}
    />
  )
);
CarouselItemBase.displayName = 'CarouselItemBase';

// ============================================================================
// Carousel Previous
// ============================================================================

export interface CarouselPreviousBaseProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

/**
 * CarouselPreviousBase - Navigate to previous slide(s)
 */
export const CarouselPreviousBase = React.forwardRef<
  HTMLButtonElement,
  CarouselPreviousBaseProps
>((props, ref) => (
  <button ref={ref} type="button" aria-label="Previous slide" {...props} />
));
CarouselPreviousBase.displayName = 'CarouselPreviousBase';

// ============================================================================
// Carousel Next
// ============================================================================

export interface CarouselNextBaseProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

/**
 * CarouselNextBase - Navigate to next slide(s)
 */
export const CarouselNextBase = React.forwardRef<HTMLButtonElement, CarouselNextBaseProps>(
  (props, ref) => (
    <button ref={ref} type="button" aria-label="Next slide" {...props} />
  )
);
CarouselNextBase.displayName = 'CarouselNextBase';

// ============================================================================
// Carousel Dots
// ============================================================================

export interface CarouselDotsBaseProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Total number of slides
   */
  count?: number;
  
  /**
   * Currently active slide index
   */
  activeIndex?: number;
}

/**
 * CarouselDotsBase - Pagination dot indicators
 */
export const CarouselDotsBase = React.forwardRef<HTMLDivElement, CarouselDotsBaseProps>(
  ({ count, activeIndex, ...props }, ref) => (
    <div ref={ref} role="tablist" aria-label="Slide navigation" {...props} />
  )
);
CarouselDotsBase.displayName = 'CarouselDotsBase';

// ============================================================================
// Carousel Dot
// ============================================================================

export interface CarouselDotBaseProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Index of the slide this dot represents
   */
  index: number;
  
  /**
   * Whether this dot's slide is active
   */
  isActive?: boolean;
}

/**
 * CarouselDotBase - Individual pagination dot
 */
export const CarouselDotBase = React.forwardRef<HTMLButtonElement, CarouselDotBaseProps>(
  ({ index, isActive, ...props }, ref) => (
    <button
      ref={ref}
      type="button"
      role="tab"
      aria-selected={isActive}
      aria-label={`Go to slide ${index + 1}`}
      data-index={index}
      data-active={isActive || undefined}
      {...props}
    />
  )
);
CarouselDotBase.displayName = 'CarouselDotBase';
