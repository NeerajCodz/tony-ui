'use client';

import * as React from 'react';
import { HoverCardBase, HoverCardContentBase, HoverCardTriggerBase } from '../_base/hover-card';
import { cx, getSurfaceStyle, type StyledProps } from '../_shared/basic-surfaces';

export type HoverCardProps = React.ComponentPropsWithoutRef<typeof HoverCardBase> & StyledProps;
export type HoverCardTriggerProps = React.ComponentPropsWithoutRef<typeof HoverCardTriggerBase> & StyledProps;
export type HoverCardContentProps = Omit<React.ComponentPropsWithoutRef<typeof HoverCardContentBase>, 'type'> & StyledProps;

export const HoverCard = HoverCardBase;

export const HoverCardTrigger = React.forwardRef<React.ElementRef<typeof HoverCardTriggerBase>, HoverCardTriggerProps>(
  ({ className, ...props }, ref) => <HoverCardTriggerBase ref={ref} className={cx(className)} {...props} />
);
HoverCardTrigger.displayName = 'HoverCardTrigger';

export const HoverCardContent = React.forwardRef<React.ElementRef<typeof HoverCardContentBase>, HoverCardContentProps>(
  ({ className, align = 'center', sideOffset = 4, version, type, uiType, colors, style, ...props }, ref) => (
    <HoverCardContentBase
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cx('z-50 w-64 rounded p-4 text-sm', className)}
      style={getSurfaceStyle(version ?? 'large', type, uiType, colors, style)}
      {...props}
    />
  )
);
HoverCardContent.displayName = 'HoverCardContent';

export default HoverCard;
