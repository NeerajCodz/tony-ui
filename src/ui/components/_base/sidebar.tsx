import * as React from 'react';

export interface SidebarBaseProps extends React.HTMLAttributes<HTMLDivElement> {
  side?: 'left' | 'right';
  collapsible?: boolean;
}

export const SidebarBase = React.forwardRef<HTMLDivElement, SidebarBaseProps>(
  ({ side = 'left', collapsible = false, ...props }, ref) => (
    <div ref={ref} data-side={side} data-collapsible={collapsible} {...props} />
  )
);
SidebarBase.displayName = 'SidebarBase';

export interface SidebarHeaderBaseProps extends React.HTMLAttributes<HTMLDivElement> {}

export const SidebarHeaderBase = React.forwardRef<HTMLDivElement, SidebarHeaderBaseProps>(
  ({ ...props }, ref) => <div ref={ref} {...props} />
);
SidebarHeaderBase.displayName = 'SidebarHeaderBase';

export interface SidebarContentBaseProps extends React.HTMLAttributes<HTMLDivElement> {}

export const SidebarContentBase = React.forwardRef<HTMLDivElement, SidebarContentBaseProps>(
  ({ ...props }, ref) => <div ref={ref} {...props} />
);
SidebarContentBase.displayName = 'SidebarContentBase';

export interface SidebarFooterBaseProps extends React.HTMLAttributes<HTMLDivElement> {}

export const SidebarFooterBase = React.forwardRef<HTMLDivElement, SidebarFooterBaseProps>(
  ({ ...props }, ref) => <div ref={ref} {...props} />
);
SidebarFooterBase.displayName = 'SidebarFooterBase';

export interface SidebarItemBaseProps extends React.HTMLAttributes<HTMLDivElement> {}

export const SidebarItemBase = React.forwardRef<HTMLDivElement, SidebarItemBaseProps>(
  ({ ...props }, ref) => <div ref={ref} {...props} />
);
SidebarItemBase.displayName = 'SidebarItemBase';
