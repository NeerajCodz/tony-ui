import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';

export interface BreadcrumbBaseProps extends React.ComponentPropsWithoutRef<'nav'> {}

export const BreadcrumbBase = React.forwardRef<HTMLElement, BreadcrumbBaseProps>(
  ({ ...props }, ref) => <nav ref={ref} aria-label="breadcrumb" {...props} />
);
BreadcrumbBase.displayName = 'BreadcrumbBase';

export interface BreadcrumbListBaseProps extends React.ComponentPropsWithoutRef<'ol'> {}

export const BreadcrumbListBase = React.forwardRef<HTMLOListElement, BreadcrumbListBaseProps>(
  ({ ...props }, ref) => <ol ref={ref} {...props} />
);
BreadcrumbListBase.displayName = 'BreadcrumbListBase';

export interface BreadcrumbItemBaseProps extends React.ComponentPropsWithoutRef<'li'> {}

export const BreadcrumbItemBase = React.forwardRef<HTMLLIElement, BreadcrumbItemBaseProps>(
  ({ ...props }, ref) => <li ref={ref} {...props} />
);
BreadcrumbItemBase.displayName = 'BreadcrumbItemBase';

export interface BreadcrumbLinkBaseProps extends React.ComponentPropsWithoutRef<'a'> {
  asChild?: boolean;
}

export const BreadcrumbLinkBase = React.forwardRef<HTMLAnchorElement, BreadcrumbLinkBaseProps>(
  ({ asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'a';
    return <Comp ref={ref} {...props} />;
  }
);
BreadcrumbLinkBase.displayName = 'BreadcrumbLinkBase';

export interface BreadcrumbPageBaseProps extends React.ComponentPropsWithoutRef<'span'> {}

export const BreadcrumbPageBase = React.forwardRef<HTMLSpanElement, BreadcrumbPageBaseProps>(
  ({ ...props }, ref) => <span ref={ref} role="link" aria-disabled="true" aria-current="page" {...props} />
);
BreadcrumbPageBase.displayName = 'BreadcrumbPageBase';

export interface BreadcrumbSeparatorBaseProps extends React.ComponentPropsWithoutRef<'li'> {}

export const BreadcrumbSeparatorBase = ({ children, ...props }: BreadcrumbSeparatorBaseProps) => (
  <li role="presentation" aria-hidden="true" {...props}>
    {children}
  </li>
);
BreadcrumbSeparatorBase.displayName = 'BreadcrumbSeparatorBase';

export interface BreadcrumbEllipsisBaseProps extends React.ComponentPropsWithoutRef<'span'> {}

export const BreadcrumbEllipsisBase = ({ ...props }: BreadcrumbEllipsisBaseProps) => (
  <span role="presentation" aria-hidden="true" aria-label="More pages" {...props} />
);
BreadcrumbEllipsisBase.displayName = 'BreadcrumbEllipsisBase';
