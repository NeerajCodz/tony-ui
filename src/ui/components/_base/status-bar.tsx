import * as React from 'react';

export type StatusBarState = 'ready' | 'busy' | 'error' | 'offline';

export interface StatusBarBaseProps extends React.HTMLAttributes<HTMLDivElement> {
  status?: StatusBarState;
}

export const StatusBarBase = React.forwardRef<HTMLDivElement, StatusBarBaseProps>(
  ({ status = 'ready', role = 'status', ...props }, ref) => (
    <div ref={ref} role={role} data-status={status} {...props} />
  )
);
StatusBarBase.displayName = 'StatusBarBase';

export interface StatusBarIndicatorBaseProps extends React.HTMLAttributes<HTMLSpanElement> {
  status?: StatusBarState;
}

export const StatusBarIndicatorBase = React.forwardRef<HTMLSpanElement, StatusBarIndicatorBaseProps>(
  ({ status = 'ready', ...props }, ref) => (
    <span ref={ref} aria-hidden="true" data-status={status} {...props} />
  )
);
StatusBarIndicatorBase.displayName = 'StatusBarIndicatorBase';

export interface StatusBarSectionBaseProps extends React.HTMLAttributes<HTMLDivElement> {}

export const StatusBarSectionBase = React.forwardRef<HTMLDivElement, StatusBarSectionBaseProps>(
  (props, ref) => <div ref={ref} {...props} />
);
StatusBarSectionBase.displayName = 'StatusBarSectionBase';
