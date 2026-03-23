import * as React from 'react';
import { 
  BreadcrumbBase, 
  BreadcrumbListBase, 
  BreadcrumbItemBase, 
  BreadcrumbLinkBase, 
  BreadcrumbPageBase, 
  BreadcrumbSeparatorBase, 
  BreadcrumbEllipsisBase,
  type BreadcrumbBaseProps 
} from '../_base/breadcrumb';
import { cn } from '@/lib/utils';
import { ChevronRight } from 'lucide-react';

export interface BreadcrumbProps extends BreadcrumbBaseProps {}

const AC_CLIP_PATH = 'polygon(var(--corner) 0%, calc(100% - var(--corner)) 0%, 100% var(--corner), 100% calc(100% - var(--corner)), calc(100% - var(--corner)) 100%, var(--corner) 100%, 0% calc(100% - var(--corner)), 0% var(--corner))';

const Breadcrumb = React.forwardRef<HTMLElement, BreadcrumbProps>(
  ({ className, ...props }, ref) => (
    <BreadcrumbBase ref={ref} className={cn('font-mono uppercase tracking-wider', className)} {...props} />
  )
);
Breadcrumb.displayName = 'Breadcrumb';

const BreadcrumbList = React.forwardRef<HTMLOListElement, React.ComponentPropsWithoutRef<typeof BreadcrumbListBase>>(
  ({ className, ...props }, ref) => (
    <BreadcrumbListBase
      ref={ref}
      className={cn('flex flex-wrap items-center gap-1.5 break-words text-sm text-[var(--text-muted)]', className)}
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
      className={cn('transition-colors hover:text-[var(--ac-accent)] hover:underline', className)}
      {...props}
    />
  )
);
BreadcrumbLink.displayName = 'BreadcrumbLink';

const BreadcrumbPage = React.forwardRef<HTMLSpanElement, React.ComponentPropsWithoutRef<typeof BreadcrumbPageBase>>(
  ({ className, ...props }, ref) => (
    <BreadcrumbPageBase
      ref={ref}
      className={cn('font-normal text-[var(--text-primary)] font-bold', className)}
      {...props}
    />
  )
);
BreadcrumbPage.displayName = 'BreadcrumbPage';

const BreadcrumbSeparator = React.forwardRef<HTMLLIElement, React.ComponentPropsWithoutRef<typeof BreadcrumbSeparatorBase>>(
  ({ children, className, ...props }, ref) => (
    <BreadcrumbSeparatorBase
      ref={ref}
      className={cn('text-[var(--ac-accent)]/50', className)}
      {...props}
    >
      {children ?? <ChevronRight className="h-3.5 w-3.5" />}
    </BreadcrumbSeparatorBase>
  )
);
BreadcrumbSeparator.displayName = 'BreadcrumbSeparator';

const BreadcrumbEllipsis = React.forwardRef<HTMLSpanElement, React.ComponentPropsWithoutRef<typeof BreadcrumbEllipsisBase>>(
  ({ className, ...props }, ref) => (
    <BreadcrumbEllipsisBase
      ref={ref}
      className={cn('flex h-9 w-9 items-center justify-center', className)}
      {...props}
    >
      <span className="sr-only">More</span>
      <span className="h-1 w-1 rounded-full bg-current mx-[1px]" />
      <span className="h-1 w-1 rounded-full bg-current mx-[1px]" />
      <span className="h-1 w-1 rounded-full bg-current mx-[1px]" />
    </BreadcrumbEllipsisBase>
  )
);
BreadcrumbEllipsis.displayName = 'BreadcrumbEllipsis';

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
};
