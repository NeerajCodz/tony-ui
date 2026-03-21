'use client';

import * as React from 'react';
import { ChevronDown } from 'lucide-react';
import { ComboboxBase, ComboboxContentBase, ComboboxItemBase, ComboboxTriggerBase } from '../_base/combobox';
import { cx, getSurfaceStyle, type StyledProps } from '../_shared/basic-surfaces';

export type ComboboxProps = Omit<React.ComponentPropsWithoutRef<typeof ComboboxBase>, 'type'> & StyledProps;
export type ComboboxTriggerProps = Omit<React.ComponentPropsWithoutRef<typeof ComboboxTriggerBase>, 'type'> &
  StyledProps & {
    htmlType?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
  };
export type ComboboxContentProps = Omit<React.ComponentPropsWithoutRef<typeof ComboboxContentBase>, 'type'> & StyledProps;
export type ComboboxItemProps = Omit<React.ComponentPropsWithoutRef<typeof ComboboxItemBase>, 'type'> & StyledProps;

const ComboboxRoot = React.forwardRef<React.ElementRef<typeof ComboboxBase>, ComboboxProps>(
  ({ className, version, type, uiType, colors, style, ...props }, ref) => (
    <ComboboxBase
      ref={ref}
      className={cx('relative flex w-full flex-col gap-1', className)}
      style={getSurfaceStyle(version ?? 'energy-shield', type, uiType, colors, style)}
      {...props}
    />
  )
);
ComboboxRoot.displayName = 'Combobox';

const ComboboxTrigger = React.forwardRef<React.ElementRef<typeof ComboboxTriggerBase>, ComboboxTriggerProps>(
  ({ className, version, type, uiType, colors, style, htmlType = 'button', children, ...props }, ref) => (
    <ComboboxTriggerBase
      ref={ref}
      type={htmlType}
      className={cx('flex w-full items-center justify-between rounded px-3 py-2 text-sm', className)}
      style={getSurfaceStyle(version ?? 'energy-shield', type, uiType, colors, style)}
      {...props}
    >
      <span className="truncate">{children}</span>
      <ChevronDown className="h-4 w-4 shrink-0" />
    </ComboboxTriggerBase>
  )
);
ComboboxTrigger.displayName = 'ComboboxTrigger';

const ComboboxContent = React.forwardRef<React.ElementRef<typeof ComboboxContentBase>, ComboboxContentProps>(
  ({ className, version, type, uiType, colors, style, ...props }, ref) => (
    <ComboboxContentBase
      ref={ref}
      className={cx('z-50 max-h-56 overflow-y-auto rounded p-1 text-sm', className)}
      style={getSurfaceStyle(version ?? 'energy-shield', type, uiType, colors, style)}
      {...props}
    />
  )
);
ComboboxContent.displayName = 'ComboboxContent';

const ComboboxItem = React.forwardRef<React.ElementRef<typeof ComboboxItemBase>, ComboboxItemProps>(
  ({ className, version, type, uiType, colors, style, ...props }, ref) => (
    <ComboboxItemBase
      ref={ref}
      className={cx('cursor-default rounded px-2 py-1.5 text-sm', className)}
      style={getSurfaceStyle(version ?? 'energy-shield', type, uiType, colors, style, {
        borderless: true,
        disableClip: true,
        disableGlow: true,
      })}
      {...props}
    />
  )
);
ComboboxItem.displayName = 'ComboboxItem';

export const Combobox = Object.assign(ComboboxRoot, {
  Trigger: ComboboxTrigger,
  Content: ComboboxContent,
  Item: ComboboxItem,
});

export { ComboboxTrigger, ComboboxContent, ComboboxItem };

export default Combobox;
