'use client';

import * as React from 'react';
import { LabelBase } from '../_base/label';
import { cx, getPalette, getSurfaceStyle, type StyledProps } from '../_shared/basic-surfaces';

export type LabelProps = Omit<React.ComponentPropsWithoutRef<typeof LabelBase>, 'type'> &
  StyledProps & {
    required?: boolean;
    error?: boolean;
  };

export const Label = React.forwardRef<React.ElementRef<typeof LabelBase>, LabelProps>(
  ({ className, version, type, uiType, colors, style, required, error, children, ...props }, ref) => {
    const palette = getPalette(colors);
    return (
      <LabelBase
        ref={ref}
        className={cx('text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70', className)}
        style={{
          ...getSurfaceStyle(version ?? 'matrix-grid', type, uiType, colors, style, {
            borderless: true,
            disableClip: true,
            disableGlow: true,
          }),
          color: error ? palette.accentPrimary : palette.foreground,
        }}
        {...props}
      >
        {children}
        {required ? <span className="ml-1 text-red-400">*</span> : null}
      </LabelBase>
    );
  }
);

Label.displayName = 'Label';

export default Label;
