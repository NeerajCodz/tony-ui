import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { ChevronRight, MoreHorizontal } from 'lucide-react';
import { cn } from '@/lib/utils';
import { terminalWindowEffectsClass, type TerminalWindowEffects } from './_effects';

const Breadcrumb = React.forwardRef<
  HTMLElement,
  React.ComponentPropsWithoutRef<'nav'> & {
    separator?: React.ReactNode;
    effects?: TerminalWindowEffects;
  }
>(({ ...props }, ref) => <nav ref={ref} aria-label='breadcrumb' {...props} />);
Breadcrumb.displayName = 'Breadcrumb';

const BreadcrumbList = React.forwardRef<
  HTMLOListElement,
  React.ComponentPropsWithoutRef<'ol'> & { effects?: TerminalWindowEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <ol
    ref={ref}
    className={cn(terminalWindowEffectsClass(effects), 
      'flex flex-wrap items-center gap-1.5 break-words text-sm text-[var(--tm-phosphor-dim)] sm:gap-2.5 font-mono uppercase',
      className
    )}
    {...props}
  />
));
BreadcrumbList.displayName = 'BreadcrumbList';

const BreadcrumbItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentPropsWithoutRef<'li'> & { effects?: TerminalWindowEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <li
    ref={ref}
    className={cn(terminalWindowEffectsClass(effects), 'inline-flex items-center gap-1.5', className)}
    {...props}
  />
));
BreadcrumbItem.displayName = 'BreadcrumbItem';

const BreadcrumbLink = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<'a'> & {
    asChild?: boolean;
    effects?: TerminalWindowEffects;
  }
>(({ asChild, className, effects = 'on', ...props }, ref) => {
  const Comp = asChild ? Slot : 'a';

  return (
    <Comp
      ref={ref}
      className={cn(terminalWindowEffectsClass(effects), 'transition-colors hover:text-[var(--tm-phosphor)] hover:underline decoration-[var(--tm-phosphor)]', className)}
      {...props}
    />
  );
});
BreadcrumbLink.displayName = 'BreadcrumbLink';

const BreadcrumbPage = React.forwardRef<
  HTMLSpanElement,
  React.ComponentPropsWithoutRef<'span'> & { effects?: TerminalWindowEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <span
    ref={ref}
    role='link'
    aria-disabled='true'
    aria-current='page'
    className={cn(terminalWindowEffectsClass(effects), 'font-normal text-[var(--tm-phosphor)] font-bold', className)}
    {...props}
  />
));
BreadcrumbPage.displayName = 'BreadcrumbPage';

const BreadcrumbSeparator = ({
  children,
  className,
  effects = 'on',
  ...props
}: React.ComponentProps<'li'> & { effects?: TerminalWindowEffects }) => (
  <li
    role='presentation'
    aria-hidden='true'
    className={cn(terminalWindowEffectsClass(effects), '[&>svg]:w-3.5 [&>svg]:h-3.5 opacity-50', className)}
    {...props}
  >
    {children ?? <ChevronRight />}
  </li>
);
BreadcrumbSeparator.displayName = 'BreadcrumbSeparator';

const BreadcrumbEllipsis = ({
  className,
  effects = 'on',
  ...props
}: React.ComponentProps<'span'> & { effects?: TerminalWindowEffects }) => (
  <span
    role='presentation'
    aria-hidden='true'
    className={cn(terminalWindowEffectsClass(effects), 'flex h-9 w-9 items-center justify-center', className)}
    {...props}
  >
    <MoreHorizontal className='h-4 w-4' />
    <span className='sr-only'>More</span>
  </span>
);
BreadcrumbEllipsis.displayName = 'BreadcrumbElipssis';

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
};
