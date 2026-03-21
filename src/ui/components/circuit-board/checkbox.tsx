'use client';

import * as React from 'react';
import { Check } from 'lucide-react';
import { CheckboxBase, CheckboxIndicatorBase } from '../_base/checkbox';
import { cx, getSurfaceStyle, type StyledProps } from '../_shared/basic-surfaces';

export type CheckboxProps = Omit<React.ComponentPropsWithoutRef<typeof CheckboxBase>, 'type'> &
  StyledProps & {
    htmlType?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
  };

export const Checkbox = React.forwardRef<React.ElementRef<typeof CheckboxBase>, CheckboxProps>(
  ({ className, version, type, uiType, colors, style, htmlType = 'button', children, ...props }, ref) => (
    <CheckboxBase
      ref={ref}
      type={htmlType}
      className={cx('peer h-4 w-4 shrink-0 rounded-sm border', className)}
      style={getSurfaceStyle(version ?? 'circuit-board', type, uiType, colors, style)}
      {...props}
    >
      <CheckboxIndicatorBase className="flex items-center justify-center text-current">
        {children ?? <Check className="h-3.5 w-3.5" />}
      </CheckboxIndicatorBase>
    </CheckboxBase>
  )
);

Checkbox.displayName = 'Checkbox';

export default Checkbox;
