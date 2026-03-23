import * as React from 'react';
import { GripVertical } from 'lucide-react';
import * as ResizablePrimitive from 'react-resizable-panels';
import { cn } from '@/lib/utils';
import { terminalWindowEffectsClass, type TerminalWindowEffects } from './_effects';

const ResizablePanelGroup = ({
  className,
  effects = 'on',
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelGroup> & { effects?: TerminalWindowEffects }) => (
  <ResizablePrimitive.PanelGroup
    className={cn(terminalWindowEffectsClass(effects), 'flex h-full w-full data-[panel-group-direction=vertical]:flex-col', className)}
    {...props}
  />
);

const ResizablePanel = ResizablePrimitive.Panel;

const ResizableHandle = ({
  withHandle,
  className,
  effects = 'on',
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelResizeHandle> & {
  withHandle?: boolean;
  effects?: TerminalWindowEffects;
}) => (
  <ResizablePrimitive.PanelResizeHandle
    className={cn(terminalWindowEffectsClass(effects), 
      'relative flex w-px items-center justify-center bg-[var(--tm-phosphor)]/20 after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--tm-phosphor)] focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0',
      className
    )}
    {...props}
  >
    {withHandle && (
      <div className='z-10 flex h-4 w-3 items-center justify-center rounded-none border border-[var(--tm-phosphor)] bg-[var(--tm-bg)]'>
        <GripVertical className='h-2.5 w-2.5 text-[var(--tm-phosphor)]' />
      </div>
    )}
  </ResizablePrimitive.PanelResizeHandle>
);

export { ResizablePanelGroup, ResizablePanel, ResizableHandle };
