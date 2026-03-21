'use client';

import * as React from 'react';
import { InputBase } from '../_base/input';
import { cx, getSurfaceStyle, type StyledProps } from '../_shared/basic-surfaces';

export type InputProps = Omit<React.ComponentPropsWithoutRef<typeof InputBase>, 'type' | 'size'> &
  StyledProps & {
    htmlType?: React.HTMLInputTypeAttribute;
    size?: 'sm' | 'md' | 'lg';
    error?: boolean;
    icon?: React.ReactNode;
    iconPosition?: 'left' | 'right';
  };

const sizeMap = {
  sm: 'h-8 px-2 text-sm',
  md: 'h-10 px-3 text-sm',
  lg: 'h-12 px-4 text-base',
} as const;

export const Input = React.forwardRef<React.ElementRef<typeof InputBase>, InputProps>(
  ({
    className,
    version,
    type,
    uiType,
    colors,
    style,
    htmlType = 'text',
    size = 'md',
    error: _error,
    icon: _icon,
    iconPosition: _iconPosition,
    ...props
  }, ref) => (
    <InputBase
      ref={ref}
      type={htmlType}
      className={cx('w-full rounded outline-none', sizeMap[size], className)}
      style={getSurfaceStyle(version ?? 'pill', type, uiType, colors, style)}
      {...props}
    />
  )
);

Input.displayName = 'Input';

export default Input;
