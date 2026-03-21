'use client';

import * as React from 'react';
import {
  InputGroupBase,
  InputLeftAddonBase,
  InputLeftElementBase,
  InputRightAddonBase,
  InputRightElementBase,
} from '../_base/input-group';
import { cx, getSurfaceStyle, type StyledProps } from '../_shared/basic-surfaces';

export type InputGroupProps = Omit<React.ComponentPropsWithoutRef<typeof InputGroupBase>, 'type'> & StyledProps;
export type InputLeftAddonProps = Omit<React.ComponentPropsWithoutRef<typeof InputLeftAddonBase>, 'type'> & StyledProps;
export type InputRightAddonProps = Omit<React.ComponentPropsWithoutRef<typeof InputRightAddonBase>, 'type'> & StyledProps;
export type InputLeftElementProps = Omit<React.ComponentPropsWithoutRef<typeof InputLeftElementBase>, 'type'> & StyledProps;
export type InputRightElementProps = Omit<React.ComponentPropsWithoutRef<typeof InputRightElementBase>, 'type'> & StyledProps;

const InputGroup = React.forwardRef<React.ElementRef<typeof InputGroupBase>, InputGroupProps>(
  ({ className, version, type, uiType, colors, style, ...props }, ref) => (
    <InputGroupBase
      ref={ref}
      className={cx('relative flex w-full items-center rounded', className)}
      style={getSurfaceStyle(version ?? 'circuit-board', type, uiType, colors, style)}
      {...props}
    />
  )
);
InputGroup.displayName = 'InputGroup';

const InputLeftAddon = React.forwardRef<React.ElementRef<typeof InputLeftAddonBase>, InputLeftAddonProps>(
  ({ className, ...props }, ref) => <InputLeftAddonBase ref={ref} className={cx('inline-flex items-center px-2 text-sm', className)} {...props} />
);
InputLeftAddon.displayName = 'InputLeftAddon';

const InputRightAddon = React.forwardRef<React.ElementRef<typeof InputRightAddonBase>, InputRightAddonProps>(
  ({ className, ...props }, ref) => <InputRightAddonBase ref={ref} className={cx('inline-flex items-center px-2 text-sm', className)} {...props} />
);
InputRightAddon.displayName = 'InputRightAddon';

const InputLeftElement = React.forwardRef<React.ElementRef<typeof InputLeftElementBase>, InputLeftElementProps>(
  ({ className, ...props }, ref) => <InputLeftElementBase ref={ref} className={cx('inline-flex items-center px-2', className)} {...props} />
);
InputLeftElement.displayName = 'InputLeftElement';

const InputRightElement = React.forwardRef<React.ElementRef<typeof InputRightElementBase>, InputRightElementProps>(
  ({ className, ...props }, ref) => <InputRightElementBase ref={ref} className={cx('inline-flex items-center px-2', className)} {...props} />
);
InputRightElement.displayName = 'InputRightElement';

export { InputLeftAddon, InputRightAddon, InputLeftElement, InputRightElement };

export default InputGroup;
