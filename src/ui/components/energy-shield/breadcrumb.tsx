import { cn } from '@/lib/utils';
import { ChevronRight } from 'lucide-react';
import * as React from 'react';
import { BreadcrumbBase, BreadcrumbEllipsisBase, BreadcrumbItemBase, BreadcrumbLinkBase, BreadcrumbListBase, BreadcrumbPageBase, BreadcrumbSeparatorBase, type BreadcrumbBaseProps } from '../_base/breadcrumb';
import { energyShieldEffectsClass, type EnergyShieldEffects } from './_effects';

export interface BreadcrumbProps extends BreadcrumbBaseProps {
  effects?: EnergyShieldEffects;
}

const Breadcrumb = React.forwardRef<HTMLElement, BreadcrumbProps>(
  ({ className, effects = 'on', ...props }, ref) => (
    <BreadcrumbBase ref={ref} className={cn(energyShieldEffectsClass(effects), 'font-mono uppercase tracking-wider', className)} {...props} />
  )
);
Breadcrumb.displayName = 'Breadcrumb';

const BreadcrumbList = React.forwardRef<HTMLOListElement, React.ComponentPropsWithoutRef<typeof BreadcrumbListBase> & { effects?: EnergyShieldEffects }>(
  ({ className, effects = 'on', ...props }, ref) => (
    <BreadcrumbListBase
      ref={ref}
      className={cn(energyShieldEffectsClass(effects), 'flex flex-wrap items-center gap-1.5 break-words text-sm text-[var(--text-muted)]', className)}
      {...props}
    />
  )
);
BreadcrumbList.displayName = 'BreadcrumbList';

const BreadcrumbItem = React.forwardRef<HTMLLIElement, React.ComponentPropsWithoutRef<typeof BreadcrumbItemBase> & { effects?: EnergyShieldEffects }>(
  ({ className, effects = 'on', ...props }, ref) => (
    <BreadcrumbItemBase
      ref={ref}
      className={cn(energyShieldEffectsClass(effects), 'inline-flex items-center gap-1.5', className)}
      {...props}
    />
  )
);
BreadcrumbItem.displayName = 'BreadcrumbItem';

const BreadcrumbLink = React.forwardRef<HTMLAnchorElement, React.ComponentPropsWithoutRef<typeof BreadcrumbLinkBase> & { effects?: EnergyShieldEffects }>(
  ({ className, effects = 'on', ...props }, ref) => (
    <BreadcrumbLinkBase
      ref={ref}
      className={cn(energyShieldEffectsClass(effects), 'transition-colors hover:text-[var(--es-plasma-1)] hover:underline', className)}
      {...props}
    />
  )
);
BreadcrumbLink.displayName = 'BreadcrumbLink';

const BreadcrumbPage = React.forwardRef<HTMLSpanElement, React.ComponentPropsWithoutRef<typeof BreadcrumbPageBase> & { effects?: EnergyShieldEffects }>(
  ({ className, effects = 'on', ...props }, ref) => (
    <BreadcrumbPageBase
      ref={ref}
      className={cn(energyShieldEffectsClass(effects), 'font-normal text-[var(--text-primary)] font-bold', className)}
      {...props}
    />
  )
);
BreadcrumbPage.displayName = 'BreadcrumbPage';

const BreadcrumbSeparator = React.forwardRef<HTMLLIElement, React.ComponentPropsWithoutRef<typeof BreadcrumbSeparatorBase> & { effects?: EnergyShieldEffects }>(
  ({ children, className, effects = 'on', ...props }, ref) => (
    <BreadcrumbSeparatorBase
      ref={ref}
      className={cn(energyShieldEffectsClass(effects), 'text-[var(--es-plasma-1)]/50', className)}
      {...props}
    >
      {children ?? <ChevronRight className="h-3.5 w-3.5" />}
    </BreadcrumbSeparatorBase>
  )
);
BreadcrumbSeparator.displayName = 'BreadcrumbSeparator';

const BreadcrumbEllipsis = React.forwardRef<HTMLSpanElement, React.ComponentPropsWithoutRef<typeof BreadcrumbEllipsisBase> & { effects?: EnergyShieldEffects }>(
  ({ className, effects = 'on', ...props }, ref) => (
    <BreadcrumbEllipsisBase
      ref={ref}
      className={cn(energyShieldEffectsClass(effects), 'flex h-9 w-9 items-center justify-center', className)}
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
Breadcrumb,BreadcrumbEllipsis,BreadcrumbItem,
BreadcrumbLink,BreadcrumbList,BreadcrumbPage,
BreadcrumbSeparator
};
