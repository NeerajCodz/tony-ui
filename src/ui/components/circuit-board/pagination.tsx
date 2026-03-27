import { cn } from '@/lib/utils';
import { PaginationBase, PaginationContentBase, PaginationEllipsisBase, PaginationItemBase } from '@/ui/components/_base/pagination';
import { Button } from '@/ui/components/circuit-board/button';
import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react';
import * as React from 'react';

const Pagination = PaginationBase;

const PaginationContent = React.forwardRef<HTMLUListElement, React.ComponentPropsWithoutRef<typeof PaginationContentBase>>(
  ({ className, ...props }, ref) => (
    <PaginationContentBase
      ref={ref}
      className={cn('flex flex-row items-center gap-1', className)}
      {...props}
    />
  )
);
PaginationContent.displayName = 'PaginationContent';

const PaginationItem = React.forwardRef<HTMLLIElement, React.ComponentPropsWithoutRef<typeof PaginationItemBase>>(
  ({ className, ...props }, ref) => (
    <PaginationItemBase ref={ref} className={cn('', className)} {...props} />
  )
);
PaginationItem.displayName = 'PaginationItem';

type PaginationLinkProps = {
  isActive?: boolean;
} & Pick<React.ComponentProps<typeof Button>, 'size'> &
  React.ComponentProps<'a'>;

const PaginationLink = ({
  className,
  isActive,
  size = 'icon',
  ...props
}: PaginationLinkProps) => (
  <Button
    asChild
    aria-current={isActive ? 'page' : undefined}
    visualType={isActive ? 'outline' : 'ghost'}
    size={size}
    className={cn(
      'rounded-none font-mono uppercase tracking-widest',
      isActive && 'text-[var(--cb-trace-lit)] shadow-[0_0_5px_var(--cb-trace-lit)] border-[var(--cb-trace-lit)] bg-[var(--cb-trace-dim)]/10',
      className
    )}
  >
    <a {...props} />
  </Button>
);
PaginationLink.displayName = 'PaginationLink';

const PaginationPrevious = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to previous page"
    size="md"
    className={cn('gap-1 pl-2.5', className)}
    {...props}
  >
    <ChevronLeft className="h-4 w-4" />
    <span className="hidden sm:inline">PREV</span>
  </PaginationLink>
);
PaginationPrevious.displayName = 'PaginationPrevious';

const PaginationNext = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to next page"
    size="md"
    className={cn('gap-1 pr-2.5', className)}
    {...props}
  >
    <span className="hidden sm:inline">NEXT</span>
    <ChevronRight className="h-4 w-4" />
  </PaginationLink>
);
PaginationNext.displayName = 'PaginationNext';

const PaginationEllipsis = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationEllipsisBase>) => (
  <PaginationEllipsisBase
    aria-hidden
    className={cn('flex h-9 w-9 items-center justify-center text-[var(--cb-trace-dim)]', className)}
    {...props}
  >
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More pages</span>
  </PaginationEllipsisBase>
);
PaginationEllipsis.displayName = 'PaginationEllipsis';

export {
Pagination,
PaginationContent,PaginationEllipsis,PaginationItem,PaginationLink,PaginationNext,PaginationPrevious
};
