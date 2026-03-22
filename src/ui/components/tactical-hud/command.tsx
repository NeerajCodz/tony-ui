import * as React from 'react';
import { Command as CommandPrimitive } from 'cmdk';
import { Search } from 'lucide-react';
import { cn } from '@/lib/utils';
import { tacticalHudEffectsClass, type TacticalHudEffects, bracketsStyle } from './_effects';
import { Dialog, DialogContent } from './dialog';


const Command = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive> & { effects?: TacticalHudEffects }
>(({ className, effects = 'on', style, ...props }, ref) => (
  <CommandPrimitive
    ref={ref}
    className={cn(tacticalHudEffectsClass(effects), 
      'flex h-full w-full flex-col overflow-hidden bg-[var(--th-surface)] text-[var(--th-primary)]',
      className
    )}
    style={{ ...bracketsStyle, ...style }}
    {...props}
  />
));
Command.displayName = CommandPrimitive.displayName;

interface CommandDialogProps extends React.ComponentPropsWithoutRef<typeof Dialog> {
  effects?: TacticalHudEffects;}

const CommandDialog = ({ children, ...props }: CommandDialogProps) => {
  return (
    <Dialog {...props}>
      <DialogContent className="overflow-hidden p-0 shadow-lg">
        <Command className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-[var(--th-muted)] [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  );
};

const CommandInput = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Input>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input> & { effects?: TacticalHudEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <div className="flex items-center border-b border-[var(--th-muted)]/20 px-3" cmdk-input-wrapper="">
    <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
    <CommandPrimitive.Input
      ref={ref}
      className={cn(tacticalHudEffectsClass(effects), 
        'flex h-11 w-full rounded bg-transparent py-3 text-sm outline-none placeholder:text-[var(--th-muted)] disabled:cursor-not-allowed disabled:opacity-50 font-sans text-[var(--th-primary)]',
        className
      )}
      {...props}
    />
  </div>
));
CommandInput.displayName = CommandPrimitive.Input.displayName;

const CommandList = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.List> & { effects?: TacticalHudEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <CommandPrimitive.List
    ref={ref}
    className={cn(tacticalHudEffectsClass(effects), 'max-h-[300px] overflow-y-auto overflow-x-hidden', className)}
    {...props}
  />
));
CommandList.displayName = CommandPrimitive.List.displayName;

const CommandEmpty = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Empty>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty> & { effects?: TacticalHudEffects }
>((props, ref) => (
  <CommandPrimitive.Empty
    ref={ref}
    className="py-6 text-center text-sm font-sans text-[var(--th-muted)]"
    {...props}
  />
));
CommandEmpty.displayName = CommandPrimitive.Empty.displayName;

const CommandGroup = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Group>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group> & { effects?: TacticalHudEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <CommandPrimitive.Group
    ref={ref}
    className={cn(tacticalHudEffectsClass(effects), 
      'overflow-hidden p-1 text-[var(--th-primary)] [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-bold [&_[cmdk-group-heading]]:text-[var(--th-muted)] [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-wider [&_[cmdk-group-heading]]:font-sans',
      className
    )}
    {...props}
  />
));
CommandGroup.displayName = CommandPrimitive.Group.displayName;

const CommandSeparator = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator> & { effects?: TacticalHudEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <CommandPrimitive.Separator
    ref={ref}
    className={cn(tacticalHudEffectsClass(effects), '-mx-1 h-px bg-[var(--th-muted)]/20', className)}
    {...props}
  />
));
CommandSeparator.displayName = CommandPrimitive.Separator.displayName;

const CommandItem = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item> & { effects?: TacticalHudEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <CommandPrimitive.Item
    ref={ref}
    className={cn(tacticalHudEffectsClass(effects), 
      'relative flex cursor-default select-none items-center px-2 py-1.5 text-sm outline-none aria-selected:bg-[var(--th-primary)]/10 aria-selected:text-[var(--th-active)] data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 font-sans transition-colors hover:bg-[var(--th-primary)]/5',
      className
    )}
    {...props}
  />
));
CommandItem.displayName = CommandPrimitive.Item.displayName;

const CommandShortcut = ({ className, effects = 'on', ...props }: React.HTMLAttributes<HTMLSpanElement> & { effects?: TacticalHudEffects }) => {
  return (
    <span
      className={cn(tacticalHudEffectsClass(effects), 
        'ml-auto text-xs tracking-widest text-[var(--th-muted)] group-aria-selected:text-[var(--th-active)]',
        className
      )}
      {...props}
    />
  );
};
CommandShortcut.displayName = 'CommandShortcut';

export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
};
