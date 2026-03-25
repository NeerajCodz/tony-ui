import * as React from 'react';
import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react';
import { cn } from '@/lib/utils';
import { type ButtonProps, buttonVariants } from './button';
import { terminalWindowEffectsClass, type TerminalWindowEffects } from './_effects';

const Pagination = ({ className, effects = 'on', ...props }: React.ComponentProps<'nav'> & { effects?: TerminalWindowEffects }) => (
  <nav
    role='navigation'
    aria-label='pagination'
    className={cn(terminalWindowEffectsClass(effects), 'mx-auto flex w-full justify-center font-mono', className)}
    {...props}
  />
);
Pagination.displayName = 'Pagination';

const PaginationContent = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<'ul'> & { effects?: TerminalWindowEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <ul
    ref={ref}
    className={cn(terminalWindowEffectsClass(effects), 'flex flex-row items-center gap-1', className)}
    {...props}
  />
));
PaginationContent.displayName = 'PaginationContent';

const PaginationItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<'li'> & { effects?: TerminalWindowEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <li ref={ref} className={cn(terminalWindowEffectsClass(effects), className)} {...props} />
));
PaginationItem.displayName = 'PaginationItem';

type PaginationLinkProps = {
  isActive?: boolean;
} & Pick<ButtonProps, 'size'> &
  React.ComponentProps<'a'> & { effects?: TerminalWindowEffects };

const PaginationLink = ({
  className,
  isActive,
  size = 'icon',
  effects = 'on',
  ...props
}: PaginationLinkProps) => (
  <a
    aria-current={isActive ? 'page' : undefined}
    className={cn(terminalWindowEffectsClass(effects), 
      buttonVariants({
        visualType: isActive ? 'outline' : 'ghost',
        size,
      }),
      'rounded-none border-transparent',
      isActive && 'border-[var(--tm-phosphor)] bg-[var(--tm-phosphor)]/10',
      className
    )}
    {...props}
  />
);
PaginationLink.displayName = 'PaginationLink';

const PaginationPrevious = ({
  className,
  effects = 'on',
  ...props
}: React.ComponentProps<typeof PaginationLink> & { effects?: TerminalWindowEffects }) => (
  <PaginationLink
    aria-label='Go to previous page'
    size='md'
    className={cn(terminalWindowEffectsClass(effects), 'gap-1 pl-2.5', className)}
    {...props}
  >
    <ChevronLeft className='h-4 w-4' />
    <span>Previous</span>
  </PaginationLink>
);
PaginationPrevious.displayName = 'PaginationPrevious';

const PaginationNext = ({
  className,
  effects = 'on',
  ...props
}: React.ComponentProps<typeof PaginationLink> & { effects?: TerminalWindowEffects }) => (
  <PaginationLink
    aria-label='Go to next page'
    size='md'
    className={cn(terminalWindowEffectsClass(effects), 'gap-1 pr-2.5', className)}
    {...props}
  >
    <span>Next</span>
    <ChevronRight className='h-4 w-4' />
  </PaginationLink>
);
PaginationNext.displayName = 'PaginationNext';

const PaginationEllipsis = ({
  className,
  effects = 'on',
  ...props
}: React.ComponentProps<'span'> & { effects?: TerminalWindowEffects }) => (
  <span
    aria-hidden
    className={cn(terminalWindowEffectsClass(effects), 'flex h-9 w-9 items-center justify-center', className)}
    {...props}
  >
    <MoreHorizontal className='h-4 w-4' />
    <span className='sr-only'>More pages</span>
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
