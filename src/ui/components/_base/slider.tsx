import * as React from 'react';
import * as SliderPrimitive from '@radix-ui/react-slider';

export interface SliderBaseProps extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> {}

export const SliderBase = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  SliderBaseProps
>((props, ref) => <SliderPrimitive.Root ref={ref} {...props} />);
SliderBase.displayName = 'SliderBase';

export const SliderTrackBase = SliderPrimitive.Track;
export const SliderRangeBase = SliderPrimitive.Range;
export const SliderThumbBase = SliderPrimitive.Thumb;
