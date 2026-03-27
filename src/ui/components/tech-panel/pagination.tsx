import * as React from 'react';
import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react';
import { cn } from '@/lib/utils';
import { techPanelEffectsClass, type TechPanelEffects } from './_effects';
import { ButtonProps, buttonVariants } from './button';
import { Link } from 'react-router-dom';

const Pagination = ({ className, effects = 'on', ...props }: React.ComponentProps<'nav'> & { effects?: TechPanelEffects }) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={cn(techPanelEffectsClass(effects), 'mx-auto flex w-full justify-center', className)}
    {...props}
  />
);
Pagination.displayName = 'Pagination';

const PaginationContent = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<'ul'> & { effects?: TechPanelEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <ul
    ref={ref}
    className={cn(techPanelEffectsClass(effects), 'flex flex-row items-center gap-1', className)}
    {...props}
  />
));
PaginationContent.displayName = 'PaginationContent';

const PaginationItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<'li'> & { effects?: TechPanelEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <li ref={ref} className={cn(techPanelEffectsClass(effects), '', className)} {...props} />
));
PaginationItem.displayName = 'PaginationItem';

type PaginationLinkProps = {
  isActive?: boolean;
  effects?: TechPanelEffects;
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
      className={cn(techPanelEffectsClass(effects), 
        buttonVariants({
          visualType: isActive ? 'solid' : 'ghost',
          size,
        }),
      'font-mono rounded-none',
      className
    )}
    style={{ } as React.CSSProperties}
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
    className={cn(techPanelEffectsClass(effects), 'gap-1 pl-2.5 rounded-none', className)}
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
    className={cn(techPanelEffectsClass(effects), 'gap-1 pr-2.5 rounded-none', className)}
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
}: React.ComponentProps<'span'> & { effects?: TechPanelEffects }) => (
  <span
    aria-hidden
    className={cn(techPanelEffectsClass(effects), 'flex h-9 w-9 items-center justify-center', className)}
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
