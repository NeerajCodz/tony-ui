import * as React from 'react';
import { 
    PaginationBase, 
    PaginationContentBase, 
    PaginationItemBase, 
    PaginationLinkBase, 
    PaginationPreviousBase, 
    PaginationNextBase, 
    PaginationEllipsisBase,
    type PaginationBaseProps
} from '../_base/pagination';
import { cn } from '@/lib/utils';
import { ButtonProps, Button } from './button'; // Reuse button styles
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
} & ButtonProps; // Use our button props

export const PaginationLink = React.forwardRef<HTMLAnchorElement, PaginationLinkProps>(
  ({ className, isActive, size = 'md', ...props }, ref) => (
    <PaginationLinkBase
      aria-current={isActive ? 'page' : undefined}
      className={cn(
        // Base button styles are applied by Button component if we used it, 
        // but here we are rendering 'a' likely.
        // Let's rely on classnames.
        'inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-[var(--df-bg)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--df-accent)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
        'hover:bg-[var(--df-surface)] hover:text-[var(--df-text)]',
        isActive ? 'border border-[var(--df-border)] bg-[var(--df-surface)]' : 'border-transparent text-[var(--df-text)]',
        size === 'sm' && 'h-8 px-3',
        size === 'md' && 'h-9 px-4',
        size === 'lg' && 'h-10 px-5',
        // Icon-only square sizing if needed
        isActive || props.children ? '' : 'w-9', 
        className
      )}
      {...props}
    />
  )
);
PaginationLink.displayName = 'PaginationLink';

export const PaginationPrevious = React.forwardRef<HTMLAnchorElement, React.ComponentProps<typeof PaginationLink>>(
  ({ className, ...props }, ref) => (
    <PaginationPreviousBase
      aria-label="Go to previous page"
      size="md" // Default size
      className={cn('gap-1 pl-2.5', className)}
      {...props}
    >
      <ChevronLeft className="h-4 w-4" />
      <span>Previous</span>
    </PaginationPreviousBase>
  )
);
PaginationPrevious.displayName = 'PaginationPrevious';

export const PaginationNext = React.forwardRef<HTMLAnchorElement, React.ComponentProps<typeof PaginationLink>>(
  ({ className, ...props }, ref) => (
    <PaginationNextBase
      aria-label="Go to next page"
      size="md"
      className={cn('gap-1 pr-2.5', className)}
      {...props}
    >
      <span>Next</span>
      <ChevronRight className="h-4 w-4" />
    </PaginationNextBase>
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
