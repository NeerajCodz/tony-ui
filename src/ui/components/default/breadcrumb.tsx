import { cn } from '@/lib/utils';
import { ChevronRight, MoreHorizontal } from 'lucide-react';
import * as React from 'react';
import { BreadcrumbBase, BreadcrumbEllipsisBase, BreadcrumbItemBase, BreadcrumbLinkBase, BreadcrumbListBase, BreadcrumbPageBase, BreadcrumbSeparatorBase, type BreadcrumbBaseProps } from '../_base/breadcrumb';

export interface BreadcrumbProps extends BreadcrumbBaseProps {}

export const Breadcrumb = BreadcrumbBase;

export const BreadcrumbList = React.forwardRef<HTMLOListElement, React.ComponentPropsWithoutRef<typeof BreadcrumbListBase>>(
  ({ className, ...props }, ref) => (
    <BreadcrumbListBase
      ref={ref}
      className={cn(
        'flex flex-wrap items-center gap-1.5 break-words text-sm text-[var(--df-muted)] sm:gap-2.5',
        className
      )}
      {...props}
    />
  )
);
BreadcrumbList.displayName = 'BreadcrumbList';

export const BreadcrumbItem = React.forwardRef<HTMLLIElement, React.ComponentPropsWithoutRef<typeof BreadcrumbItemBase>>(
  ({ className, ...props }, ref) => (
    <BreadcrumbItemBase
      ref={ref}
      className={cn('inline-flex items-center gap-1.5', className)}
      {...props}
    />
  )
);
BreadcrumbItem.displayName = 'BreadcrumbItem';

export const BreadcrumbLink = React.forwardRef<HTMLAnchorElement, React.ComponentPropsWithoutRef<typeof BreadcrumbLinkBase>>(
  ({ className, ...props }, ref) => (
    <BreadcrumbLinkBase
      ref={ref}
      className={cn('transition-colors hover:text-[var(--df-text)]', className)}
      {...props}
    />
  )
);
BreadcrumbLink.displayName = 'BreadcrumbLink';

export const BreadcrumbPage = React.forwardRef<HTMLSpanElement, React.ComponentPropsWithoutRef<typeof BreadcrumbPageBase>>(
  ({ className, ...props }, ref) => (
    <BreadcrumbPageBase
      ref={ref}
      className={cn('font-normal text-[var(--df-text)]', className)}
      {...props}
    />
  )
);
BreadcrumbPage.displayName = 'BreadcrumbPage';

export const BreadcrumbSeparator = React.forwardRef<HTMLLIElement, React.ComponentPropsWithoutRef<typeof BreadcrumbSeparatorBase>>(
  ({ className, children, ...props }, ref) => (
    <BreadcrumbSeparatorBase
      ref={ref}
      className={cn('[&>svg]:w-3.5 [&>svg]:h-3.5', className)}
      {...props}
    >
      {children ?? <ChevronRight />}
    </BreadcrumbSeparatorBase>
  )
);
BreadcrumbSeparator.displayName = 'BreadcrumbSeparator';

export const BreadcrumbEllipsis = React.forwardRef<HTMLSpanElement, React.ComponentPropsWithoutRef<typeof BreadcrumbEllipsisBase>>(
  ({ className, ...props }, ref) => (
    <BreadcrumbEllipsisBase
      ref={ref}
      className={cn('flex h-9 w-9 items-center justify-center', className)}
      {...props}
    >
      <MoreHorizontal className="h-4 w-4" />
      <span className="sr-only">More</span>
    </BreadcrumbEllipsisBase>
  )
);
BreadcrumbEllipsis.displayName = 'BreadcrumbEllipsis';
