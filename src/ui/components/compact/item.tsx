'use client';

import * as React from 'react';
import { ItemBase } from '../_base/item';
import { cx, getSurfaceStyle, type StyledProps } from '../_shared/basic-surfaces';

export type ItemProps = Omit<React.ComponentPropsWithoutRef<typeof ItemBase>, 'type'> & StyledProps;

export const Item = React.forwardRef<React.ElementRef<typeof ItemBase>, ItemProps>(
  ({ className, version, type, uiType, colors, style, ...props }, ref) => (
    <ItemBase
      ref={ref}
      className={cx('flex items-center gap-2 rounded px-2 py-1.5 text-sm', className)}
      style={getSurfaceStyle(version ?? 'compact', type, uiType, colors, style)}
      {...props}
    />
  )
);

Item.displayName = 'Item';

export default Item;
