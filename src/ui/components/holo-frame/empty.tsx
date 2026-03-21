'use client';

import * as React from 'react';
import { EmptyActionsBase, EmptyBase, EmptyDescriptionBase, EmptyIconBase, EmptyTitleBase } from '../_base/empty';
import { cx, getPalette, getSurfaceStyle, type StyledProps } from '../_shared/basic-surfaces';

export type EmptyProps = Omit<React.ComponentPropsWithoutRef<typeof EmptyBase>, 'type'> & StyledProps;
export type EmptyIconProps = React.ComponentPropsWithoutRef<typeof EmptyIconBase> & StyledProps;
export type EmptyTitleProps = React.ComponentPropsWithoutRef<typeof EmptyTitleBase> & StyledProps;
export type EmptyDescriptionProps = React.ComponentPropsWithoutRef<typeof EmptyDescriptionBase> & StyledProps;
export type EmptyActionsProps = React.ComponentPropsWithoutRef<typeof EmptyActionsBase> & StyledProps;

export const Empty = React.forwardRef<React.ElementRef<typeof EmptyBase>, EmptyProps>(
  ({ className, version, type, uiType, colors, style, ...props }, ref) => (
    <EmptyBase
      ref={ref}
      className={cx('flex flex-col items-center justify-center gap-3 rounded p-6 text-center', className)}
      style={getSurfaceStyle(version ?? 'holo-frame', type, uiType, colors, style)}
      {...props}
    />
  )
);
Empty.displayName = 'Empty';

export const EmptyIcon = React.forwardRef<React.ElementRef<typeof EmptyIconBase>, EmptyIconProps>(
  ({ className, ...props }, ref) => <EmptyIconBase ref={ref} className={cx('text-2xl opacity-80', className)} {...props} />
);
EmptyIcon.displayName = 'EmptyIcon';

export const EmptyTitle = React.forwardRef<React.ElementRef<typeof EmptyTitleBase>, EmptyTitleProps>(
  ({ className, version, type, uiType, colors, style, ...props }, ref) => {
    const palette = getPalette(colors);
    return (
      <EmptyTitleBase
        ref={ref}
        className={cx('text-base font-semibold', className)}
        style={{
          ...getSurfaceStyle(version ?? 'holo-frame', type, uiType, colors, style, {
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
EmptyTitle.displayName = 'EmptyTitle';

export const EmptyDescription = React.forwardRef<React.ElementRef<typeof EmptyDescriptionBase>, EmptyDescriptionProps>(
  ({ className, version, type, uiType, colors, style, ...props }, ref) => {
    const palette = getPalette(colors);
    return (
      <EmptyDescriptionBase
        ref={ref}
        className={cx('max-w-md text-sm', className)}
        style={{
          ...getSurfaceStyle(version ?? 'holo-frame', type, uiType, colors, style, {
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
EmptyDescription.displayName = 'EmptyDescription';

export const EmptyActions = React.forwardRef<React.ElementRef<typeof EmptyActionsBase>, EmptyActionsProps>(
  ({ className, ...props }, ref) => <EmptyActionsBase ref={ref} className={cx('mt-2 flex flex-wrap items-center gap-2', className)} {...props} />
);
EmptyActions.displayName = 'EmptyActions';

export default Empty;
