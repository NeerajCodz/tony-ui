'use client';

import * as React from 'react';
import { GripVertical } from 'lucide-react';
import { ResizableHandleBase, ResizablePanelBase, ResizablePanelGroupBase } from '../_base/resizable';
import { cx, getSurfaceStyle, type StyledProps } from '../_shared/basic-surfaces';

export type ResizablePanelGroupProps = Omit<React.ComponentPropsWithoutRef<typeof ResizablePanelGroupBase>, 'type'> & StyledProps;
export type ResizablePanelProps = Omit<React.ComponentPropsWithoutRef<typeof ResizablePanelBase>, 'type'> & StyledProps;
export type ResizableHandleProps = Omit<React.ComponentPropsWithoutRef<typeof ResizableHandleBase>, 'type'> &
  StyledProps & {
    withHandle?: boolean;
  };

const ResizablePanelGroup = React.forwardRef<React.ElementRef<typeof ResizablePanelGroupBase>, ResizablePanelGroupProps>(
  ({ className, direction = 'horizontal', version, type, uiType, colors, style, ...props }, ref) => (
    <ResizablePanelGroupBase
      ref={ref}
      direction={direction}
      className={cx('flex h-full w-full data-[direction=vertical]:flex-col', className)}
      style={getSurfaceStyle(version ?? 'holo-frame', type, uiType, colors, style)}
      {...props}
    />
  )
);
ResizablePanelGroup.displayName = 'ResizablePanelGroup';

const ResizablePanel = React.forwardRef<React.ElementRef<typeof ResizablePanelBase>, ResizablePanelProps>(
  ({ className, ...props }, ref) => <ResizablePanelBase ref={ref} className={cx(className)} {...props} />
);
ResizablePanel.displayName = 'ResizablePanel';

const ResizableHandle = React.forwardRef<React.ElementRef<typeof ResizableHandleBase>, ResizableHandleProps>(
  ({ className, withHandle, version, type, uiType, colors, style, ...props }, ref) => (
    <ResizableHandleBase
      ref={ref}
      className={cx('relative flex w-px items-center justify-center', className)}
      style={getSurfaceStyle(version ?? 'holo-frame', type, uiType, colors, style, {
        borderless: true,
        disableClip: true,
        disableGlow: true,
      })}
      {...props}
    >
      {withHandle ? (
        <div className="z-10 flex h-4 w-3 items-center justify-center rounded-sm border">
          <GripVertical className="h-2.5 w-2.5" />
        </div>
      ) : null}
    </ResizableHandleBase>
  )
);
ResizableHandle.displayName = 'ResizableHandle';

export { ResizablePanelGroup, ResizablePanel, ResizableHandle };

export default ResizablePanelGroup;
