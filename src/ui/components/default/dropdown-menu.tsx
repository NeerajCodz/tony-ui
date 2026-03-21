import * as React from 'react';
import {
    DropdownMenuBase,
    DropdownMenuTriggerBase,
    DropdownMenuContentBase,
    DropdownMenuItemBase,
    DropdownMenuCheckboxItemBase,
    DropdownMenuRadioItemBase,
    DropdownMenuLabelBase,
    DropdownMenuSeparatorBase,
    DropdownMenuShortcutBase,
    DropdownMenuGroupBase,
    DropdownMenuPortalBase,
    DropdownMenuSubBase,
    DropdownMenuSubContentBase,
    DropdownMenuSubTriggerBase,
    DropdownMenuRadioGroupBase,
    DropdownMenuItemIndicatorBase,
} from '../_base/dropdown-menu';
import { cn } from '@/lib/utils';
import { Check, ChevronRight, Circle } from 'lucide-react';

const DropdownMenu = DropdownMenuBase;
const DropdownMenuTrigger = DropdownMenuTriggerBase;
const DropdownMenuGroup = DropdownMenuGroupBase;
const DropdownMenuPortal = DropdownMenuPortalBase;
const DropdownMenuSub = DropdownMenuSubBase;
const DropdownMenuRadioGroup = DropdownMenuRadioGroupBase;

const DropdownMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuSubTriggerBase>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuSubTriggerBase>
>(({ className, inset, children, ...props }, ref) => (
  <DropdownMenuSubTriggerBase
    ref={ref}
    className={cn(
      'flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-[var(--df-accent)]/10 data-[state=open]:bg-[var(--df-accent)]/10',
      inset && 'pl-8',
      className
    )}
    {...props}
  >
    {children}
    <ChevronRight className='ml-auto h-4 w-4' />
  </DropdownMenuSubTriggerBase>
))
DropdownMenuSubTrigger.displayName = 'DropdownMenuSubTrigger'

const DropdownMenuSubContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuSubContentBase>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuSubContentBase>
>(({ className, ...props }, ref) => (
  <DropdownMenuSubContentBase
    ref={ref}
    className={cn(
      'z-50 min-w-[8rem] overflow-hidden rounded-md border border-[var(--df-border)] bg-[var(--df-surface)] p-1 text-[var(--df-text)] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
      className
    )}
    {...props}
  />
))
DropdownMenuSubContent.displayName = 'DropdownMenuSubContent'

const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuContentBase>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuContentBase>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <DropdownMenuPortalBase>
    <DropdownMenuContentBase
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        'z-50 min-w-[8rem] overflow-hidden rounded-md border border-[var(--df-border)] bg-[var(--df-surface)] p-1 text-[var(--df-text)] shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
        className
      )}
      {...props}
    />
  </DropdownMenuPortalBase>
))
DropdownMenuContent.displayName = 'DropdownMenuContent'

const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuItemBase>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuItemBase> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuItemBase
    ref={ref}
    className={cn(
      'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-[var(--df-accent)]/10 focus:text-[var(--df-accent)] data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      inset && 'pl-8',
      className
    )}
    {...props}
  />
))
DropdownMenuItem.displayName = 'DropdownMenuItem'

const DropdownMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuCheckboxItemBase>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuCheckboxItemBase>
>(({ className, children, checked, ...props }, ref) => (
  <DropdownMenuCheckboxItemBase
    ref={ref}
    className={cn(
      'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-[var(--df-accent)]/10 focus:text-[var(--df-accent)] data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      className
    )}
    checked={checked}
    {...props}
  >
    <span className='absolute left-2 flex h-3.5 w-3.5 items-center justify-center'>
      <DropdownMenuItemIndicatorBase>
        <Check className='h-4 w-4' />
      </DropdownMenuItemIndicatorBase>
    </span>
    {children}
  </DropdownMenuCheckboxItemBase>
))
DropdownMenuCheckboxItem.displayName = 'DropdownMenuCheckboxItem'

const DropdownMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuRadioItemBase>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuRadioItemBase>
>(({ className, children, ...props }, ref) => (
  <DropdownMenuRadioItemBase
    ref={ref}
    className={cn(
      'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-[var(--df-accent)]/10 focus:text-[var(--df-accent)] data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      className
    )}
    {...props}
  >
    <span className='absolute left-2 flex h-3.5 w-3.5 items-center justify-center'>
      <DropdownMenuItemIndicatorBase>
        <Circle className='h-2 w-2 fill-current' />
      </DropdownMenuItemIndicatorBase>
    </span>
    {children}
  </DropdownMenuRadioItemBase>
))
DropdownMenuRadioItem.displayName = 'DropdownMenuRadioItem'

const DropdownMenuLabel = React.forwardRef<
  React.ElementRef<typeof DropdownMenuLabelBase>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuLabelBase> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuLabelBase
    ref={ref}
    className={cn(
      'px-2 py-1.5 text-sm font-semibold',
      inset && 'pl-8',
      className
    )}
    {...props}
  />
))
DropdownMenuLabel.displayName = 'DropdownMenuLabel'

const DropdownMenuSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuSeparatorBase>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuSeparatorBase>
>(({ className, ...props }, ref) => (
  <DropdownMenuSeparatorBase
    ref={ref}
    className={cn('-mx-1 my-1 h-px bg-[var(--df-border)]', className)}
    {...props}
  />
))
DropdownMenuSeparator.displayName = 'DropdownMenuSeparator'

const DropdownMenuShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn('ml-auto text-xs tracking-widest opacity-60', className)}
      {...props}
    />
  )
}
DropdownMenuShortcut.displayName = 'DropdownMenuShortcut'

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
}
