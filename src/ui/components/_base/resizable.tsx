import * as React from 'react';

export interface ResizablePanelGroupBaseProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: 'horizontal' | 'vertical';
}

export const ResizablePanelGroupBase = React.forwardRef<HTMLDivElement, ResizablePanelGroupBaseProps>(
  ({ direction = 'horizontal', ...props }, ref) => (
    <div ref={ref} data-direction={direction} {...props} />
  )
);
ResizablePanelGroupBase.displayName = 'ResizablePanelGroupBase';

export interface ResizablePanelBaseProps extends React.HTMLAttributes<HTMLDivElement> {
  defaultSize?: number;
  minSize?: number;
  maxSize?: number;
}

export const ResizablePanelBase = React.forwardRef<HTMLDivElement, ResizablePanelBaseProps>(
  ({ ...props }, ref) => <div ref={ref} {...props} />
);
ResizablePanelBase.displayName = 'ResizablePanelBase';

export interface ResizableHandleBaseProps extends React.HTMLAttributes<HTMLDivElement> {}

export const ResizableHandleBase = React.forwardRef<HTMLDivElement, ResizableHandleBaseProps>(
  ({ ...props }, ref) => <div ref={ref} {...props} />
);
ResizableHandleBase.displayName = 'ResizableHandleBase';
