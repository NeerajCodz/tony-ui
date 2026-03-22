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
import { honeyCombEffectsClass, type HoneyCombEffects } from './_effects';
import { ChevronRight } from 'lucide-react';

export interface BreadcrumbProps extends BreadcrumbBaseProps {
  effects?: HoneyCombEffects;
}


const Breadcrumb = React.forwardRef<HTMLElement, BreadcrumbProps>(
  ({ className, effects = 'on', ...props }, ref) => (
    <BreadcrumbBase ref={ref} className={cn(honeyCombEffectsClass(effects), 'font-["JetBrains_Mono"] uppercase tracking-wider', className)} {...props} />
  )
);
Breadcrumb.displayName = 'Breadcrumb';

const BreadcrumbList = React.forwardRef<HTMLOListElement, React.ComponentPropsWithoutRef<typeof BreadcrumbListBase> & { effects?: HoneyCombEffects }>(
  ({ className, effects = 'on', ...props }, ref) => (
    <BreadcrumbListBase
      ref={ref}
      className={cn(honeyCombEffectsClass(effects), 'flex flex-wrap items-center gap-1.5 break-words text-sm text-[var(--text-muted)]', className)}
      {...props}
    />
  )
);
BreadcrumbList.displayName = 'BreadcrumbList';

const BreadcrumbItem = React.forwardRef<HTMLLIElement, React.ComponentPropsWithoutRef<typeof BreadcrumbItemBase> & { effects?: HoneyCombEffects }>(
  ({ className, effects = 'on', ...props }, ref) => (
    <BreadcrumbItemBase
      ref={ref}
      className={cn(honeyCombEffectsClass(effects), 'inline-flex items-center gap-1.5', className)}
      {...props}
    />
  )
);
BreadcrumbItem.displayName = 'BreadcrumbItem';

const BreadcrumbLink = React.forwardRef<HTMLAnchorElement, React.ComponentPropsWithoutRef<typeof BreadcrumbLinkBase> & { effects?: HoneyCombEffects }>(
  ({ className, effects = 'on', ...props }, ref) => (
    <BreadcrumbLinkBase
      ref={ref}
      className={cn(honeyCombEffectsClass(effects), 'transition-colors hover:text-[var(--hc-plasma-1)] hover:underline', className)}
      {...props}
    />
  )
);
BreadcrumbLink.displayName = 'BreadcrumbLink';

const BreadcrumbPage = React.forwardRef<HTMLSpanElement, React.ComponentPropsWithoutRef<typeof BreadcrumbPageBase> & { effects?: HoneyCombEffects }>(
  ({ className, effects = 'on', ...props }, ref) => (
    <BreadcrumbPageBase
      ref={ref}
      className={cn(honeyCombEffectsClass(effects), 'font-normal text-[var(--text-primary)] font-bold', className)}
      {...props}
    />
  )
);
BreadcrumbPage.displayName = 'BreadcrumbPage';

const BreadcrumbSeparator = React.forwardRef<HTMLLIElement, React.ComponentPropsWithoutRef<typeof BreadcrumbSeparatorBase> & { effects?: HoneyCombEffects }>(
  ({ children, className, ...props }, ref) => (
    <BreadcrumbSeparatorBase
      ref={ref}
      className={cn(honeyCombEffectsClass(effects), 'text-[var(--hc-plasma-1)]/50', className)}
      {...props}
    >
      {children ?? <ChevronRight className="h-3.5 w-3.5" />}
    </BreadcrumbSeparatorBase>
  )
);
BreadcrumbSeparator.displayName = 'BreadcrumbSeparator';

const BreadcrumbEllipsis = React.forwardRef<HTMLSpanElement, React.ComponentPropsWithoutRef<typeof BreadcrumbEllipsisBase> & { effects?: HoneyCombEffects }>(
  ({ className, effects = 'on', ...props }, ref) => (
    <BreadcrumbEllipsisBase
      ref={ref}
      className={cn(honeyCombEffectsClass(effects), 'flex h-9 w-9 items-center justify-center', className)}
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
