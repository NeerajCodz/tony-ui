import * as React from 'react';
import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react';
import { cn } from '@/lib/utils';
import { holoFrameEffectsClass, type HoloFrameEffects } from './_effects';
import { ButtonProps, buttonVariants } from './button';
import { Link } from 'react-router-dom';
import type { PaginationBaseProps } from '../_base/pagination';

const Pagination = ({ className, effects = 'on', ...props }: React.ComponentProps<'nav'> & { effects?: HoloFrameEffects }) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={cn(holoFrameEffectsClass(effects), 'mx-auto flex w-full justify-center', className)}
    {...props}
  />
);
Pagination.displayName = 'Pagination';

const PaginationContent = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<'ul'> & { effects?: HoloFrameEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <ul
    ref={ref}
    className={cn(holoFrameEffectsClass(effects), 'flex flex-row items-center gap-1', className)}
    {...props}
  />
));
PaginationContent.displayName = 'PaginationContent';

const PaginationItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<'li'> & { effects?: HoloFrameEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <li ref={ref} className={cn(holoFrameEffectsClass(effects), '', className)} {...props} />
));
PaginationItem.displayName = 'PaginationItem';

type PaginationLinkProps = {
  isActive?: boolean;
  effects?: HoloFrameEffects;
} & Pick<ButtonProps, 'size'> &
  React.ComponentProps<typeof Link>;

const PaginationLink = ({
  className,
  isActive,
  size = 'icon',
  effects = 'on',
  ...props
}: PaginationLinkProps) => (
  <Link
    aria-current={isActive ? 'page' : undefined}
      className={cn(holoFrameEffectsClass(effects), 
        buttonVariants({
          visualType: isActive ? 'solid' : 'ghost',
          size,
        }),
      'font-mono',
      className
    )}
    style={{ '--corner': '6px' } as React.CSSProperties}
    {...props}
  />
);
PaginationLink.displayName = 'PaginationLink';

const PaginationPrevious = ({
  className,
  effects = 'on',
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to previous page"
    size="md"
    effects={effects}
    className={cn(holoFrameEffectsClass(effects), 'gap-1 pl-2.5', className)}
    {...props}
  >
    <ChevronLeft className="h-4 w-4" />
    <span>Previous</span>
  </PaginationLink>
);
PaginationPrevious.displayName = 'PaginationPrevious';

const PaginationNext = ({
  className,
  effects = 'on',
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to next page"
    size="md"
    effects={effects}
    className={cn(holoFrameEffectsClass(effects), 'gap-1 pr-2.5', className)}
    {...props}
  >
    <span>Next</span>
    <ChevronRight className="h-4 w-4" />
  </PaginationLink>
);
PaginationNext.displayName = 'PaginationNext';

const PaginationEllipsis = ({
  className,
  effects = 'on',
  ...props
}: React.ComponentProps<'span'> & { effects?: HoloFrameEffects }) => (
  <span
    aria-hidden
    className={cn(holoFrameEffectsClass(effects), 'flex h-9 w-9 items-center justify-center', className)}
    {...props}
  >
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More pages</span>
  </span>
);
PaginationEllipsis.displayName = 'PaginationEllipsis';

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
};
