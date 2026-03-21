import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';

export interface PaginationBaseProps extends React.ComponentPropsWithoutRef<'nav'> {}

export const PaginationBase = ({ ...props }: PaginationBaseProps) => (
  <nav role="navigation" aria-label="pagination" {...props} />
);
PaginationBase.displayName = 'PaginationBase';

export interface PaginationContentBaseProps extends React.ComponentPropsWithoutRef<'ul'> {}

export const PaginationContentBase = React.forwardRef<HTMLUListElement, PaginationContentBaseProps>(
  ({ ...props }, ref) => <ul ref={ref} {...props} />
);
PaginationContentBase.displayName = 'PaginationContentBase';

export interface PaginationItemBaseProps extends React.ComponentPropsWithoutRef<'li'> {}

export const PaginationItemBase = React.forwardRef<HTMLLIElement, PaginationItemBaseProps>(
  ({ ...props }, ref) => <li ref={ref} {...props} />
);
PaginationItemBase.displayName = 'PaginationItemBase';

export interface PaginationLinkBaseProps extends React.ComponentPropsWithoutRef<'a'> {
  asChild?: boolean;
  isActive?: boolean;
}

export const PaginationLinkBase = React.forwardRef<HTMLAnchorElement, PaginationLinkBaseProps>(
  ({ asChild = false, isActive, ...props }, ref) => {
    const Comp = asChild ? Slot : 'a';
    return <Comp ref={ref} aria-current={isActive ? 'page' : undefined} {...props} />;
  }
);
PaginationLinkBase.displayName = 'PaginationLinkBase';

export interface PaginationPreviousBaseProps extends PaginationLinkBaseProps {}

export const PaginationPreviousBase = React.forwardRef<HTMLAnchorElement, PaginationPreviousBaseProps>(
  ({ ...props }, ref) => <PaginationLinkBase ref={ref} aria-label="Go to previous page" {...props} />
);
PaginationPreviousBase.displayName = 'PaginationPreviousBase';

export interface PaginationNextBaseProps extends PaginationLinkBaseProps {}

export const PaginationNextBase = React.forwardRef<HTMLAnchorElement, PaginationNextBaseProps>(
  ({ ...props }, ref) => <PaginationLinkBase ref={ref} aria-label="Go to next page" {...props} />
);
PaginationNextBase.displayName = 'PaginationNextBase';

export interface PaginationEllipsisBaseProps extends React.ComponentPropsWithoutRef<'span'> {}

export const PaginationEllipsisBase = ({ ...props }: PaginationEllipsisBaseProps) => (
  <span aria-hidden {...props} />
);
PaginationEllipsisBase.displayName = 'PaginationEllipsisBase';
