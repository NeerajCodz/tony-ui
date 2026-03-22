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

const ContextMenuSubTrigger = React.forwardRef<React.ElementRef<typeof ContextMenuSubTriggerBase>, React.ComponentPropsWithoutRef<typeof ContextMenuSubTriggerBase> & { inset?: boolean }>(
  ({ className, inset, children, ...props }, ref) => (
    <ContextMenuSubTriggerBase
      ref={ref}
      className={cn(
        'flex cursor-default select-none items-center rounded-none px-2 py-1.5 text-sm outline-none focus:bg-[var(--cb-trace-dim)]/20 focus:text-[var(--cb-trace-lit)] data-[state=open]:bg-[var(--cb-trace-dim)]/20 data-[state=open]:text-[var(--cb-trace-lit)] text-[var(--cb-trace-dim)] transition-colors',
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

const ContextMenuSubContent = React.forwardRef<React.ElementRef<typeof ContextMenuSubContentBase>, React.ComponentPropsWithoutRef<typeof ContextMenuSubContentBase>>(
  ({ className, ...props }, ref) => (
    <ContextMenuSubContentBase
      ref={ref}
      className={cn(
        'z-50 min-w-[8rem] overflow-hidden rounded-none border border-[var(--cb-trace)] bg-[var(--cb-soldermask)] p-1 text-[var(--cb-trace-dim)] shadow-[0_0_15px_var(--cb-trace)] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 font-mono uppercase tracking-widest',
        className
      )}
      {...props}
    />
  )
);
ContextMenuSubContent.displayName = 'ContextMenuSubContent';

const ContextMenuContent = React.forwardRef<React.ElementRef<typeof ContextMenuContentBase>, React.ComponentPropsWithoutRef<typeof ContextMenuContentBase>>(
  ({ className, ...props }, ref) => (
    <ContextMenuContentBase
      ref={ref}
      className={cn(
        'z-50 min-w-[8rem] overflow-hidden rounded-none border border-[var(--cb-trace)] bg-[var(--cb-soldermask)] p-1 text-[var(--cb-trace-dim)] shadow-[0_0_15px_var(--cb-trace)] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 font-mono uppercase tracking-widest',
        className
      )}
      {...props}
    />
  )
);
ContextMenuContent.displayName = 'ContextMenuContent';

const ContextMenuItem = React.forwardRef<React.ElementRef<typeof ContextMenuItemBase>, React.ComponentPropsWithoutRef<typeof ContextMenuItemBase> & { inset?: boolean }>(
  ({ className, inset, ...props }, ref) => (
    <ContextMenuItemBase
      ref={ref}
      className={cn(
        'relative flex cursor-default select-none items-center rounded-none px-2 py-1.5 text-sm outline-none transition-colors focus:bg-[var(--cb-trace-dim)]/20 focus:text-[var(--cb-trace-lit)] data-[disabled]:pointer-events-none data-[disabled]:opacity-50 hover:text-[var(--cb-trace-lit)]',
        inset && 'pl-8',
        className
      )}
      {...props}
    />
  )
);
ContextMenuItem.displayName = 'ContextMenuItem';

const ContextMenuCheckboxItem = React.forwardRef<React.ElementRef<typeof ContextMenuCheckboxItemBase>, React.ComponentPropsWithoutRef<typeof ContextMenuCheckboxItemBase>>(
  ({ className, children, checked, ...props }, ref) => (
    <ContextMenuCheckboxItemBase
      ref={ref}
      className={cn(
        'relative flex cursor-default select-none items-center rounded-none py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-[var(--cb-trace-dim)]/20 focus:text-[var(--cb-trace-lit)] data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
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

const ContextMenuRadioItem = React.forwardRef<React.ElementRef<typeof ContextMenuRadioItemBase>, React.ComponentPropsWithoutRef<typeof ContextMenuRadioItemBase>>(
  ({ className, children, ...props }, ref) => (
    <ContextMenuRadioItemBase
      ref={ref}
      className={cn(
        'relative flex cursor-default select-none items-center rounded-none py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-[var(--cb-trace-dim)]/20 focus:text-[var(--cb-trace-lit)] data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
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

const ContextMenuLabel = React.forwardRef<React.ElementRef<typeof ContextMenuLabelBase>, React.ComponentPropsWithoutRef<typeof ContextMenuLabelBase> & { inset?: boolean }>(
  ({ className, inset, ...props }, ref) => (
    <ContextMenuLabelBase
      ref={ref}
      className={cn('px-2 py-1.5 text-sm font-semibold text-[var(--cb-trace-lit)]', inset && 'pl-8', className)}
      {...props}
    />
  )
);
ContextMenuLabel.displayName = 'ContextMenuLabel';

const ContextMenuSeparator = React.forwardRef<React.ElementRef<typeof ContextMenuSeparatorBase>, React.ComponentPropsWithoutRef<typeof ContextMenuSeparatorBase>>(
  ({ className, ...props }, ref) => (
    <ContextMenuSeparatorBase
      ref={ref}
      className={cn('-mx-1 my-1 h-px bg-[var(--cb-trace-dim)]/30', className)}
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
      className={cn('ml-auto text-xs tracking-widest text-[var(--cb-trace-dim)] opacity-50', className)}
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
