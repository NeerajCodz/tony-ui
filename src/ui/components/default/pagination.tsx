import * as React from 'react';
import { 
    PaginationBase, 
    PaginationContentBase, 
    PaginationItemBase, 
    PaginationLinkBase, 
    PaginationEllipsisBase,
    type PaginationBaseProps
} from '../_base/pagination';
import { cn } from '@/lib/utils';
import { Button } from './button';
import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react';

export const Pagination = React.forwardRef<HTMLElement, PaginationBaseProps>(
  ({ className, ...props }, ref) => (
    <PaginationBase
      ref={ref}
      className={cn('mx-auto flex w-full justify-center', className)}
      {...props}
    />
  )
);
Pagination.displayName = 'Pagination';

export const PaginationContent = React.forwardRef<HTMLUListElement, React.HTMLAttributes<HTMLUListElement>>(
  ({ className, ...props }, ref) => (
    <PaginationContentBase
      ref={ref}
      className={cn('flex flex-row items-center gap-1', className)}
      {...props}
    />
  )
);
PaginationContent.displayName = 'PaginationContent';

export const PaginationItem = React.forwardRef<HTMLLIElement, React.LiHTMLAttributes<HTMLLIElement>>(
  ({ className, ...props }, ref) => (
    <PaginationItemBase
      ref={ref}
      className={cn('', className)}
      {...props}
    />
  )
);
PaginationItem.displayName = 'PaginationItem';

type PaginationLinkProps = {
  isActive?: boolean;
} & Pick<React.ComponentProps<typeof Button>, 'size'> &
  React.ComponentProps<'a'>;

export const PaginationLink = React.forwardRef<HTMLAnchorElement, PaginationLinkProps>(
  ({ className, isActive, size = 'md', ...props }, ref) => (
    <Button
      asChild
      visualType={isActive ? 'outline' : 'ghost'}
      size={size}
      className={cn('font-medium', className)}
    >
      <PaginationLinkBase ref={ref} aria-current={isActive ? 'page' : undefined} {...props} />
    </Button>
  )
);
PaginationLink.displayName = 'PaginationLink';

export const PaginationPrevious = React.forwardRef<HTMLAnchorElement, React.ComponentProps<typeof PaginationLink>>(
  ({ className, ...props }, ref) => (
    <PaginationLink
      ref={ref}
      aria-label="Go to previous page"
      size="md"
      className={cn('gap-1 pl-2.5', className)}
      {...props}
    >
      <ChevronLeft className="h-4 w-4" />
      <span>Previous</span>
    </PaginationLink>
  )
);
PaginationPrevious.displayName = 'PaginationPrevious';

export const PaginationNext = React.forwardRef<HTMLAnchorElement, React.ComponentProps<typeof PaginationLink>>(
  ({ className, ...props }, ref) => (
    <PaginationLink
      ref={ref}
      aria-label="Go to next page"
      size="md"
      className={cn('gap-1 pr-2.5', className)}
      {...props}
    >
      <span>Next</span>
      <ChevronRight className="h-4 w-4" />
    </PaginationLink>
  )
);
PaginationNext.displayName = 'PaginationNext';

export const PaginationEllipsis = React.forwardRef<HTMLSpanElement, React.ComponentProps<typeof PaginationEllipsisBase>>(
  ({ className, ...props }, ref) => (
    <PaginationEllipsisBase
      ref={ref}
      className={cn('flex h-9 w-9 items-center justify-center', className)}
      {...props}
    >
      <MoreHorizontal className="h-4 w-4" />
      <span className="sr-only">More pages</span>
    </PaginationEllipsisBase>
  )
);
PaginationEllipsis.displayName = 'PaginationEllipsis';
