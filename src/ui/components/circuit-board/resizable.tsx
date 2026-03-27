import { cn } from '@/lib/utils';
import { ResizableHandleBase, ResizablePanelBase, ResizablePanelGroupBase } from '@/ui/components/_base/resizable';
import { GripVertical } from 'lucide-react';
import * as React from 'react';

const ResizablePanelGroup = ({ className, ...props }: React.ComponentProps<typeof ResizablePanelGroupBase>) => (
  <ResizablePanelGroupBase
    className={cn('flex h-full w-full data-[panel-group-direction=vertical]:flex-col border border-[var(--cb-trace)]', className)}
    {...props}
  />
);

const ResizablePanel = ResizablePanelBase;

const ResizableHandle = ({ withHandle, className, ...props }: React.ComponentProps<typeof ResizableHandleBase>) => (
  <ResizableHandleBase
    className={cn(
      'relative flex w-px items-center justify-center bg-[var(--cb-trace)] after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--cb-trace-lit)] focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90',
      className
    )}
    {...props}
  >
    {withHandle && (
      <div className="z-10 flex h-4 w-3 items-center justify-center rounded-none border border-[var(--cb-trace)] bg-[var(--cb-soldermask)]">
        <GripVertical className="h-2.5 w-2.5 text-[var(--cb-trace-lit)]" />
      </div>
    )}
  </ResizableHandleBase>
);

export { ResizableHandle,ResizablePanel,ResizablePanelGroup };
