import * as React from 'react';
import { 
    SidebarBase, 
    SidebarContentBase, 
    SidebarFooterBase, 
    SidebarHeaderBase, 
    SidebarRailBase, 
    SidebarTriggerBase,
    SidebarGroupBase,
    SidebarGroupLabelBase,
    SidebarGroupActionBase,
    SidebarGroupContentBase,
    SidebarMenuBase,
    SidebarMenuItemBase,
    SidebarMenuButtonBase,
    SidebarMenuActionBase,
    SidebarMenuBadgeBase,
    SidebarMenuSubBase,
    SidebarMenuSubItemBase,
    SidebarMenuSubButtonBase,
    SidebarProvider,
    SidebarInsetBase,
    SidebarInputBase,
    SidebarSeparatorBase,
    type SidebarBaseProps
} from '../_base/sidebar';
import { cn } from '@/lib/utils';
import { PanelLeft } from 'lucide-react';

export { SidebarProvider };

export const Sidebar = React.forwardRef<HTMLDivElement, SidebarBaseProps>(
  ({ className, side = 'left', variant = 'sidebar', collapsible = 'offcanvas', ...props }, ref) => (
    <SidebarBase
      ref={ref}
      side={side}
      variant={variant}
      collapsible={collapsible}
      className={cn(
        'bg-[var(--df-surface)] text-[var(--df-text)] border-r border-[var(--df-border)]',
        className
      )}
      {...props}
    />
  )
);
Sidebar.displayName = 'Sidebar';

export const SidebarTrigger = React.forwardRef<HTMLButtonElement, React.ComponentPropsWithoutRef<typeof SidebarTriggerBase>>(
  ({ className, onClick, ...props }, ref) => (
    <SidebarTriggerBase
      ref={ref}
      onClick={onClick}
      className={cn(
        'h-7 w-7',
        className
      )}
      {...props}
    >
      <PanelLeft />
      <span className="sr-only">Toggle Sidebar</span>
    </SidebarTriggerBase>
  )
);
SidebarTrigger.displayName = 'SidebarTrigger';

export const SidebarRail = React.forwardRef<HTMLButtonElement, React.ComponentPropsWithoutRef<typeof SidebarRailBase>>(
  ({ className, ...props }, ref) => (
    <SidebarRailBase
      ref={ref}
      className={cn(
        'hover:after:bg-[var(--df-accent)]',
        className
      )}
      {...props}
    />
  )
);
SidebarRail.displayName = 'SidebarRail';

export const SidebarInset = React.forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<typeof SidebarInsetBase>>(
  ({ className, ...props }, ref) => (
    <SidebarInsetBase
      ref={ref}
      className={cn(
        'bg-[var(--df-bg)]',
        className
      )}
      {...props}
    />
  )
);
SidebarInset.displayName = 'SidebarInset';

export const SidebarInput = React.forwardRef<HTMLInputElement, React.ComponentPropsWithoutRef<typeof SidebarInputBase>>(
  ({ className, ...props }, ref) => (
    <SidebarInputBase
      ref={ref}
      className={cn(
        'bg-[var(--df-bg)] focus-visible:ring-2 focus-visible:ring-[var(--df-accent)]',
        className
      )}
      {...props}
    />
  )
);
SidebarInput.displayName = 'SidebarInput';

export const SidebarHeader = React.forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<typeof SidebarHeaderBase>>(
  ({ className, ...props }, ref) => (
    <SidebarHeaderBase
      ref={ref}
      className={cn(
        'p-2',
        className
      )}
      {...props}
    />
  )
);
SidebarHeader.displayName = 'SidebarHeader';

export const SidebarFooter = React.forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<typeof SidebarFooterBase>>(
  ({ className, ...props }, ref) => (
    <SidebarFooterBase
      ref={ref}
      className={cn(
        'p-2',
        className
      )}
      {...props}
    />
  )
);
SidebarFooter.displayName = 'SidebarFooter';

export const SidebarContent = React.forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<typeof SidebarContentBase>>(
  ({ className, ...props }, ref) => (
    <SidebarContentBase
      ref={ref}
      className={cn(
        'p-2',
        className
      )}
      {...props}
    />
  )
);
SidebarContent.displayName = 'SidebarContent';

export const SidebarGroup = React.forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<typeof SidebarGroupBase>>(
  ({ className, ...props }, ref) => (
    <SidebarGroupBase
      ref={ref}
      className={cn(
        'p-2',
        className
      )}
      {...props}
    />
  )
);
SidebarGroup.displayName = 'SidebarGroup';

export const SidebarGroupLabel = React.forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<typeof SidebarGroupLabelBase>>(
  ({ className, ...props }, ref) => (
    <SidebarGroupLabelBase
      ref={ref}
      className={cn(
        'text-[var(--df-muted)] px-2 text-xs font-medium',
        className
      )}
      {...props}
    />
  )
);
SidebarGroupLabel.displayName = 'SidebarGroupLabel';

export const SidebarGroupAction = React.forwardRef<HTMLButtonElement, React.ComponentPropsWithoutRef<typeof SidebarGroupActionBase>>(
  ({ className, ...props }, ref) => (
    <SidebarGroupActionBase
      ref={ref}
      className={cn(
        'text-[var(--df-text)] hover:bg-[var(--df-accent)]/10 hover:text-[var(--df-accent)]',
        className
      )}
      {...props}
    />
  )
);
SidebarGroupAction.displayName = 'SidebarGroupAction';

export const SidebarGroupContent = React.forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<typeof SidebarGroupContentBase>>(
  ({ className, ...props }, ref) => (
    <SidebarGroupContentBase
      ref={ref}
      className={cn(
        'w-full text-sm',
        className
      )}
      {...props}
    />
  )
);
SidebarGroupContent.displayName = 'SidebarGroupContent';

export const SidebarMenu = React.forwardRef<HTMLUListElement, React.ComponentPropsWithoutRef<typeof SidebarMenuBase>>(
  ({ className, ...props }, ref) => (
    <SidebarMenuBase
      ref={ref}
      className={cn(
        'flex w-full min-w-0 flex-col gap-1',
        className
      )}
      {...props}
    />
  )
);
SidebarMenu.displayName = 'SidebarMenu';

export const SidebarMenuItem = React.forwardRef<HTMLLIElement, React.ComponentPropsWithoutRef<typeof SidebarMenuItemBase>>(
  ({ className, ...props }, ref) => (
    <SidebarMenuItemBase
      ref={ref}
      className={cn(
        'group/menu-item relative',
        className
      )}
      {...props}
    />
  )
);
SidebarMenuItem.displayName = 'SidebarMenuItem';

export const SidebarMenuButton = React.forwardRef<HTMLButtonElement, React.ComponentPropsWithoutRef<typeof SidebarMenuButtonBase>>(
  ({ className, ...props }, ref) => (
    <SidebarMenuButtonBase
      ref={ref}
      className={cn(
        'peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-none ring-sidebar-ring transition-[width,height,padding] hover:bg-[var(--df-accent)]/10 hover:text-[var(--df-accent)] focus-visible:ring-2 active:bg-[var(--df-accent)]/15 active:text-[var(--df-accent)] disabled:pointer-events-none disabled:opacity-50 group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-[var(--df-accent)]/10 data-[active=true]:font-medium data-[active=true]:text-[var(--df-accent)] data-[state=open]:hover:bg-[var(--df-accent)]/10 data-[state=open]:hover:text-[var(--df-accent)] group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:!p-2 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0',
        className
      )}
      {...props}
    />
  )
);
SidebarMenuButton.displayName = 'SidebarMenuButton';

export const SidebarMenuAction = React.forwardRef<HTMLButtonElement, React.ComponentPropsWithoutRef<typeof SidebarMenuActionBase>>(
  ({ className, ...props }, ref) => (
    <SidebarMenuActionBase
      ref={ref}
      className={cn(
        'text-[var(--df-text)] hover:bg-[var(--df-accent)]/10 hover:text-[var(--df-accent)]',
        className
      )}
      {...props}
    />
  )
);
SidebarMenuAction.displayName = 'SidebarMenuAction';

export const SidebarMenuBadge = React.forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<typeof SidebarMenuBadgeBase>>(
  ({ className, ...props }, ref) => (
    <SidebarMenuBadgeBase
      ref={ref}
      className={cn(
        'text-[var(--df-text)]',
        className
      )}
      {...props}
    />
  )
);
SidebarMenuBadge.displayName = 'SidebarMenuBadge';

export const SidebarMenuSub = React.forwardRef<HTMLUListElement, React.ComponentPropsWithoutRef<typeof SidebarMenuSubBase>>(
  ({ className, ...props }, ref) => (
    <SidebarMenuSubBase
      ref={ref}
      className={cn(
        'mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l border-[var(--df-border)] px-2.5 py-0.5',
        className
      )}
      {...props}
    />
  )
);
SidebarMenuSub.displayName = 'SidebarMenuSub';

export const SidebarMenuSubItem = React.forwardRef<HTMLLIElement, React.ComponentPropsWithoutRef<typeof SidebarMenuSubItemBase>>(
  ({ className, ...props }, ref) => (
    <SidebarMenuSubItemBase
      ref={ref}
      className={cn(
        '',
        className
      )}
      {...props}
    />
  )
);
SidebarMenuSubItem.displayName = 'SidebarMenuSubItem';

export const SidebarMenuSubButton = React.forwardRef<HTMLAnchorElement, React.ComponentPropsWithoutRef<typeof SidebarMenuSubButtonBase>>(
  ({ className, ...props }, ref) => (
    <SidebarMenuSubButtonBase
      ref={ref}
      className={cn(
        'flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 text-[var(--df-text)] outline-none ring-sidebar-ring hover:bg-[var(--df-accent)]/10 hover:text-[var(--df-accent)] focus-visible:ring-2 active:bg-[var(--df-accent)]/15 active:text-[var(--df-accent)] disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-[var(--df-muted)]',
        'data-[active=true]:bg-[var(--df-accent)]/10 data-[active=true]:text-[var(--df-accent)]',
        className
      )}
      {...props}
    />
  )
);
SidebarMenuSubButton.displayName = 'SidebarMenuSubButton';

export const SidebarSeparator = React.forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<typeof SidebarSeparatorBase>>(
  ({ className, ...props }, ref) => (
    <SidebarSeparatorBase
      ref={ref}
      className={cn(
        'bg-[var(--df-border)] mx-2 w-auto',
        className
      )}
      {...props}
    />
  )
);
SidebarSeparator.displayName = 'SidebarSeparator';
