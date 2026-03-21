'use client';

import * as React from 'react';
import { FieldBase, FieldDescriptionBase, FieldErrorBase, FieldLabelBase } from '../_base/field';
import { cx, getPalette, getSurfaceStyle, type StyledProps } from '../_shared/basic-surfaces';

export type FieldProps = Omit<React.ComponentPropsWithoutRef<typeof FieldBase>, 'type'> & StyledProps;
export type FieldLabelProps = React.ComponentPropsWithoutRef<typeof FieldLabelBase> & StyledProps;
export type FieldDescriptionProps = React.ComponentPropsWithoutRef<typeof FieldDescriptionBase> & StyledProps;
export type FieldErrorProps = React.ComponentPropsWithoutRef<typeof FieldErrorBase> & StyledProps;

export const Field = React.forwardRef<React.ElementRef<typeof FieldBase>, FieldProps>(
  ({ className, version, type, uiType, colors, style, ...props }, ref) => (
    <FieldBase
      ref={ref}
      className={cx('space-y-1 rounded p-2', className)}
      style={getSurfaceStyle(version ?? 'terminal-window', type, uiType, colors, style, {
        borderless: true,
        disableClip: true,
        disableGlow: true,
      })}
      {...props}
    />
  )
);
Field.displayName = 'Field';

export const FieldLabel = React.forwardRef<React.ElementRef<typeof FieldLabelBase>, FieldLabelProps>(
  ({ className, version, type, uiType, colors, style, ...props }, ref) => {
    const palette = getPalette(colors);
    return (
      <FieldLabelBase
        ref={ref}
        className={cx('text-sm font-medium', className)}
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
FieldLabel.displayName = 'FieldLabel';

export const FieldDescription = React.forwardRef<React.ElementRef<typeof FieldDescriptionBase>, FieldDescriptionProps>(
  ({ className, version, type, uiType, colors, style, ...props }, ref) => {
    const palette = getPalette(colors);
    return (
      <FieldDescriptionBase
        ref={ref}
        className={cx('text-xs opacity-80', className)}
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
FieldDescription.displayName = 'FieldDescription';

export const FieldError = React.forwardRef<React.ElementRef<typeof FieldErrorBase>, FieldErrorProps>(
  ({ className, version, type, uiType, colors, style, ...props }, ref) => {
    const palette = getPalette(colors);
    return (
      <FieldErrorBase
        ref={ref}
        className={cx('text-xs text-red-400', className)}
        style={{
          ...getSurfaceStyle(version ?? 'terminal-window', type, uiType, colors, style, {
            borderless: true,
            disableClip: true,
            disableGlow: true,
          }),
          color: palette.accentPrimary,
        }}
        {...props}
      />
    );
  }
);
FieldError.displayName = 'FieldError';

export default Field;
