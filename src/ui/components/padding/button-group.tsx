'use client';

import * as React from 'react';
import { ButtonGroupBase } from '../_base/button-group';
import { cx, getSurfaceStyle, type StyledProps } from '../_shared/basic-surfaces';

export type ButtonGroupProps = Omit<React.ComponentPropsWithoutRef<typeof ButtonGroupBase>, 'type'> & StyledProps;

export const ButtonGroup = React.forwardRef<React.ElementRef<typeof ButtonGroupBase>, ButtonGroupProps>(
  ({ className, version, type, uiType, colors, style, orientation = 'horizontal', ...props }, ref) => (
    <ButtonGroupBase
      ref={ref}
      orientation={orientation}
      className={cx('inline-flex gap-1', orientation === 'vertical' && 'flex-col', className)}
      style={getSurfaceStyle(version ?? 'padding', type, uiType, colors, style)}
      {...props}
    />
  )
);

ButtonGroup.displayName = 'ButtonGroup';

export default ButtonGroup;
