import { cn } from '@/lib/utils';
import { BreadcrumbBase, BreadcrumbEllipsisBase, BreadcrumbItemBase, BreadcrumbLinkBase, BreadcrumbListBase, BreadcrumbPageBase, BreadcrumbSeparatorBase } from '@/ui/components/_base/breadcrumb';
import { ChevronRight } from 'lucide-react';
import * as React from 'react';

const Breadcrumb = BreadcrumbBase;

const BreadcrumbList = React.forwardRef<HTMLOListElement, React.ComponentPropsWithoutRef<typeof BreadcrumbListBase>>(
  ({ className, ...props }, ref) => (
    <BreadcrumbListBase
      ref={ref}
      className={cn(
        'flex flex-wrap items-center break-words text-sm text-muted-foreground sm:gap-2.5 font-mono',
        className
      )}
      {...props}
    />
  )
);
BreadcrumbList.displayName = 'BreadcrumbList';

const BreadcrumbItem = React.forwardRef<HTMLLIElement, React.ComponentPropsWithoutRef<typeof BreadcrumbItemBase>>(
  ({ className, ...props }, ref) => (
    <BreadcrumbItemBase
      ref={ref}
      className={cn('inline-flex items-center gap-1.5', className)}
      {...props}
    />
  )
);
BreadcrumbItem.displayName = 'BreadcrumbItem';

const BreadcrumbLink = React.forwardRef<HTMLAnchorElement, React.ComponentPropsWithoutRef<typeof BreadcrumbLinkBase>>(
  ({ className, ...props }, ref) => (
    <BreadcrumbLinkBase
      ref={ref}
      className={cn('transition-colors hover:text-foreground hover:underline decoration-dashed underline-offset-4', className)}
      {...props}
    />
  )
);
BreadcrumbLink.displayName = 'BreadcrumbLink';

const BreadcrumbPage = React.forwardRef<HTMLSpanElement, React.ComponentPropsWithoutRef<typeof BreadcrumbPageBase>>(
  ({ className, ...props }, ref) => (
    <BreadcrumbPageBase
      ref={ref}
      className={cn('font-normal text-foreground font-bold', className)}
      {...props}
    />
  )
);
BreadcrumbPage.displayName = 'BreadcrumbPage';

const BreadcrumbSeparator = ({
  children,
  className,
  ...props
}: React.ComponentProps<typeof BreadcrumbSeparatorBase>) => (
  <BreadcrumbSeparatorBase
    role="presentation"
    aria-hidden="true"
    className={cn('[&>svg]:size-3.5', className)}
    {...props}
  >
    {children ?? <ChevronRight />}
  </BreadcrumbSeparatorBase>
);
BreadcrumbSeparator.displayName = 'BreadcrumbSeparator';

const BreadcrumbEllipsis = ({
  className,
  ...props
}: React.ComponentProps<typeof BreadcrumbEllipsisBase>) => (
  <BreadcrumbEllipsisBase
    role="presentation"
    aria-hidden="true"
    className={cn('flex h-9 w-9 items-center justify-center', className)}
    {...props}
  >
    <span className="sr-only">More</span>
    ...
  </BreadcrumbEllipsisBase>
);
BreadcrumbEllipsis.displayName = 'BreadcrumbEllipsis';

export {
Breadcrumb,BreadcrumbEllipsis,BreadcrumbItem,
BreadcrumbLink,BreadcrumbList,BreadcrumbPage,
BreadcrumbSeparator
};
