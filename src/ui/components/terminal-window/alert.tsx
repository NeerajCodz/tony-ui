'use client';

import * as React from 'react';
import { AlertBase, AlertDescriptionBase, AlertTitleBase } from '../_base/alert';
import { cx, getPalette, getSurfaceStyle, type StyledProps } from '../_shared/basic-surfaces';

export type AlertProps = Omit<React.ComponentPropsWithoutRef<typeof AlertBase>, 'type'> & StyledProps;
export type AlertTitleProps = React.ComponentPropsWithoutRef<typeof AlertTitleBase> & StyledProps;
export type AlertDescriptionProps = React.ComponentPropsWithoutRef<typeof AlertDescriptionBase> & StyledProps;

export const Alert = React.forwardRef<React.ElementRef<typeof AlertBase>, AlertProps>(
  ({ className, version, type, uiType, colors, style, ...props }, ref) => (
    <AlertBase
      ref={ref}
      className={cx('relative w-full p-4 text-sm', className)}
      style={getSurfaceStyle(version ?? 'terminal-window', type, uiType, colors, style)}
      {...props}
    />
  )
);
Alert.displayName = 'Alert';

export const AlertTitle = React.forwardRef<React.ElementRef<typeof AlertTitleBase>, AlertTitleProps>(
  ({ className, version, type, uiType, colors, style, ...props }, ref) => {
    const palette = getPalette(colors);
    return (
      <AlertTitleBase
        ref={ref}
        className={cx('mb-1 font-semibold leading-none tracking-tight', className)}
        style={{
          ...getSurfaceStyle(version ?? 'terminal-window', type, uiType, colors, style, {
            borderless: true,
            disableClip: true,
            disableGlow: true,
          }),
          color: palette.foreground,
        }}
        {...props}
      />
    );
  }
);
AlertTitle.displayName = 'AlertTitle';

export const AlertDescription = React.forwardRef<React.ElementRef<typeof AlertDescriptionBase>, AlertDescriptionProps>(
  ({ className, version, type, uiType, colors, style, ...props }, ref) => {
    const palette = getPalette(colors);
    return (
      <AlertDescriptionBase
        ref={ref}
        className={cx('text-sm [&_p]:leading-relaxed', className)}
        style={{
          ...getSurfaceStyle(version ?? 'terminal-window', type, uiType, colors, style, {
            borderless: true,
            disableClip: true,
            disableGlow: true,
          }),
          color: palette.muted,
        }}
        {...props}
      />
    );
  }
);
AlertDescription.displayName = 'AlertDescription';

export default Alert;
