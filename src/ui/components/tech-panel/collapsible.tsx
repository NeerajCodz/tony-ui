'use client';

import * as React from 'react';
import { ChevronDown } from 'lucide-react';
import { CollapsibleBase, CollapsibleContentBase, CollapsibleTriggerBase } from '../_base/collapsible';
import { cx, getSurfaceStyle, type StyledProps } from '../_shared/basic-surfaces';

export type CollapsibleProps = Omit<React.ComponentPropsWithoutRef<typeof CollapsibleBase>, 'type'> & StyledProps;
export type CollapsibleTriggerProps = Omit<React.ComponentPropsWithoutRef<typeof CollapsibleTriggerBase>, 'type'> &
  StyledProps & {
    htmlType?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
  };
export type CollapsibleContentProps = Omit<React.ComponentPropsWithoutRef<typeof CollapsibleContentBase>, 'type'> & StyledProps;

const CollapsibleRoot = React.forwardRef<React.ElementRef<typeof CollapsibleBase>, CollapsibleProps>(
  ({ className, ...props }, ref) => <CollapsibleBase ref={ref} className={cx('w-full', className)} {...props} />
);
CollapsibleRoot.displayName = 'Collapsible';

const CollapsibleTrigger = React.forwardRef<React.ElementRef<typeof CollapsibleTriggerBase>, CollapsibleTriggerProps>(
  ({ className, version, type, uiType, colors, style, htmlType = 'button', children, ...props }, ref) => (
    <CollapsibleTriggerBase
      ref={ref}
      type={htmlType}
      className={cx('flex w-full items-center justify-between rounded px-3 py-2 text-sm', className)}
      style={getSurfaceStyle(version ?? 'tech-panel', type, uiType, colors, style)}
      {...props}
    >
      <span className="truncate">{children}</span>
      <ChevronDown className="h-4 w-4 shrink-0" />
    </CollapsibleTriggerBase>
  )
);
CollapsibleTrigger.displayName = 'CollapsibleTrigger';

const CollapsibleContent = React.forwardRef<React.ElementRef<typeof CollapsibleContentBase>, CollapsibleContentProps>(
  ({ className, version, type, uiType, colors, style, ...props }, ref) => (
    <CollapsibleContentBase
      ref={ref}
      className={cx('overflow-hidden px-3 pb-3 text-sm', className)}
      style={getSurfaceStyle(version ?? 'tech-panel', type, uiType, colors, style, {
        borderless: true,
        disableClip: true,
        disableGlow: true,
      })}
      {...props}
    />
  )
);
CollapsibleContent.displayName = 'CollapsibleContent';

export const Collapsible = Object.assign(CollapsibleRoot, {
  Trigger: CollapsibleTrigger,
  Content: CollapsibleContent,
});

export { CollapsibleTrigger, CollapsibleContent };

export default Collapsible;
