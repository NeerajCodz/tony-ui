import * as React from 'react';
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';

export interface ScrollAreaBaseProps extends React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root> {}

export const ScrollAreaBase = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Root>,
  ScrollAreaBaseProps
>((props, ref) => <ScrollAreaPrimitive.Root ref={ref} {...props} />);
ScrollAreaBase.displayName = 'ScrollAreaBase';

export const ScrollAreaViewportBase = ScrollAreaPrimitive.Viewport;
export const ScrollAreaCornerBase = ScrollAreaPrimitive.Corner;

export interface ScrollBarBaseProps extends React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar> {}

export const ScrollBarBase = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>,
  ScrollBarBaseProps
>((props, ref) => <ScrollAreaPrimitive.ScrollAreaScrollbar ref={ref} {...props} />);
ScrollBarBase.displayName = 'ScrollBarBase';

export const ScrollBarThumbBase = ScrollAreaPrimitive.ScrollAreaThumb;
