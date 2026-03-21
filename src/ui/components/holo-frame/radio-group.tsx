'use client';

import * as React from 'react';
import { Circle } from 'lucide-react';
import { RadioGroupBase, RadioGroupIndicatorBase, RadioGroupItemBase } from '../_base/radio-group';
import { cx, getSurfaceStyle, type StyledProps } from '../_shared/basic-surfaces';

export type RadioGroupProps = Omit<React.ComponentPropsWithoutRef<typeof RadioGroupBase>, 'type'> & StyledProps;
export type RadioGroupItemProps = Omit<React.ComponentPropsWithoutRef<typeof RadioGroupItemBase>, 'type'> &
  StyledProps & {
    htmlType?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
  };

const RadioGroupRoot = React.forwardRef<React.ElementRef<typeof RadioGroupBase>, RadioGroupProps>(
  ({ className, ...props }, ref) => <RadioGroupBase ref={ref} className={cx('grid gap-2', className)} {...props} />
);
RadioGroupRoot.displayName = 'RadioGroup';

const RadioGroupItem = React.forwardRef<React.ElementRef<typeof RadioGroupItemBase>, RadioGroupItemProps>(
  ({ className, version, type, uiType, colors, style, htmlType = 'button', children, ...props }, ref) => (
    <RadioGroupItemBase
      ref={ref}
      type={htmlType}
      className={cx('aspect-square h-4 w-4 rounded-full', className)}
      style={getSurfaceStyle(version ?? 'holo-frame', type, uiType, colors, style)}
      {...props}
    >
      <RadioGroupIndicatorBase className="flex items-center justify-center">
        {children ?? <Circle className="h-2.5 w-2.5 fill-current text-current" />}
      </RadioGroupIndicatorBase>
    </RadioGroupItemBase>
  )
);
RadioGroupItem.displayName = 'RadioGroupItem';

export const RadioGroup = Object.assign(RadioGroupRoot, {
  Item: RadioGroupItem,
});

export { RadioGroupItem };

export default RadioGroup;
