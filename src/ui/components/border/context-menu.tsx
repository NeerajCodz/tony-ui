import * as React from 'react';
import { ContextMenuBase, ContextMenuTriggerBase, ContextMenuContentBase, ContextMenuItemBase, ContextMenuCheckboxItemBase, ContextMenuRadioItemBase, ContextMenuLabelBase, ContextMenuSeparatorBase, ContextMenuShortcutBase, ContextMenuGroupBase, ContextMenuPortalBase, ContextMenuSubBase, ContextMenuSubContentBase, ContextMenuSubTriggerBase, ContextMenuRadioGroupBase } from '@/ui/components/_base/context-menu';
import { cn } from '@/lib/utils';
import { Check, ChevronRight, Circle } from 'lucide-react';

const ContextMenu = ContextMenuBase;
const ContextMenuTrigger = ContextMenuTriggerBase;
const ContextMenuGroup = ContextMenuGroupBase;
const ContextMenuPortal = ContextMenuPortalBase;
const ContextMenuSub = ContextMenuSubBase;
const ContextMenuRadioGroup = ContextMenuRadioGroupBase;

const ContextMenuSubTrigger = React.forwardRef<React.ComponentRef<typeof ContextMenuSubTriggerBase>, React.ComponentPropsWithoutRef<typeof ContextMenuSubTriggerBase> & { inset?: boolean }>(
  ({ className, inset, children, ...props }, ref) => (
    <ContextMenuSubTriggerBase
      ref={ref}
      className={cn(
        'flex cursor-default select-none items-center rounded-none px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground',
        inset && 'pl-8',
        className
      )}
      {...props}
    >
      {children}
      <ChevronRight className="ml-auto h-4 w-4" />
    </ContextMenuSubTriggerBase>
  )
);
ContextMenuSubTrigger.displayName = 'ContextMenuSubTrigger';

const ContextMenuSubContent = React.forwardRef<React.ComponentRef<typeof ContextMenuSubContentBase>, React.ComponentPropsWithoutRef<typeof ContextMenuSubContentBase>>(
  ({ className, ...props }, ref) => (
    <ContextMenuSubContentBase
      ref={ref}
      className={cn(
        'z-50 min-w-[8rem] overflow-hidden rounded-none border border-[var(--br-border-dim)] bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 font-mono',
        className
      )}
      {...props}
    />
  )
);
ContextMenuSubContent.displayName = 'ContextMenuSubContent';

const ContextMenuContent = React.forwardRef<React.ComponentRef<typeof ContextMenuContentBase>, React.ComponentPropsWithoutRef<typeof ContextMenuContentBase>>(
  ({ className, ...props }, ref) => (
    <ContextMenuContentBase
      ref={ref}
      className={cn(
        'z-50 min-w-[8rem] overflow-hidden rounded-none border border-[var(--br-border-dim)] bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 font-mono',
        className
      )}
      {...props}
    />
  )
);
ContextMenuContent.displayName = 'ContextMenuContent';

const ContextMenuItem = React.forwardRef<React.ComponentRef<typeof ContextMenuItemBase>, React.ComponentPropsWithoutRef<typeof ContextMenuItemBase> & { inset?: boolean }>(
  ({ className, inset, ...props }, ref) => (
    <ContextMenuItemBase
      ref={ref}
      className={cn(
        'relative flex cursor-default select-none items-center rounded-none px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        inset && 'pl-8',
        className
      )}
      {...props}
    />
  )
);
ContextMenuItem.displayName = 'ContextMenuItem';

const ContextMenuCheckboxItem = React.forwardRef<React.ComponentRef<typeof ContextMenuCheckboxItemBase>, React.ComponentPropsWithoutRef<typeof ContextMenuCheckboxItemBase>>(
  ({ className, children, checked, ...props }, ref) => (
    <ContextMenuCheckboxItemBase
      ref={ref}
      className={cn(
        'relative flex cursor-default select-none items-center rounded-none py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        className
      )}
      checked={checked}
      {...props}
    >
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <ContextMenuItemBase asChild>
          <Check className="h-4 w-4" />
        </ContextMenuItemBase>
      </span>
      {children}
    </ContextMenuCheckboxItemBase>
  )
);
ContextMenuCheckboxItem.displayName = 'ContextMenuCheckboxItem';

const ContextMenuRadioItem = React.forwardRef<React.ComponentRef<typeof ContextMenuRadioItemBase>, React.ComponentPropsWithoutRef<typeof ContextMenuRadioItemBase>>(
  ({ className, children, ...props }, ref) => (
    <ContextMenuRadioItemBase
      ref={ref}
      className={cn(
        'relative flex cursor-default select-none items-center rounded-none py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        className
      )}
      {...props}
    >
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <ContextMenuItemBase asChild>
          <Circle className="h-2 w-2 fill-current" />
        </ContextMenuItemBase>
      </span>
      {children}
    </ContextMenuRadioItemBase>
  )
);
ContextMenuRadioItem.displayName = 'ContextMenuRadioItem';

const ContextMenuLabel = React.forwardRef<React.ComponentRef<typeof ContextMenuLabelBase>, React.ComponentPropsWithoutRef<typeof ContextMenuLabelBase> & { inset?: boolean }>(
  ({ className, inset, ...props }, ref) => (
    <ContextMenuLabelBase
      ref={ref}
      className={cn('px-2 py-1.5 text-sm font-semibold', inset && 'pl-8', className)}
      {...props}
    />
  )
);
ContextMenuLabel.displayName = 'ContextMenuLabel';

const ContextMenuSeparator = React.forwardRef<React.ComponentRef<typeof ContextMenuSeparatorBase>, React.ComponentPropsWithoutRef<typeof ContextMenuSeparatorBase>>(
  ({ className, ...props }, ref) => (
    <ContextMenuSeparatorBase
      ref={ref}
      className={cn('-mx-1 my-1 h-px bg-muted', className)}
      {...props}
    />
  )
);
ContextMenuSeparator.displayName = 'ContextMenuSeparator';

const ContextMenuShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <ContextMenuShortcutBase
      className={cn('ml-auto text-xs tracking-widest text-muted-foreground', className)}
      {...props}
    />
  );
};
ContextMenuShortcut.displayName = 'ContextMenuShortcut';

export {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuGroup,
  ContextMenuPortal,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuRadioGroup,
};
