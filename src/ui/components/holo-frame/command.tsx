import * as React from 'react';
import { Command as CommandPrimitive } from 'cmdk';
import { Search } from 'lucide-react';
import { cn } from '@/lib/utils';
import { holoFrameEffectsClass, type HoloFrameEffects } from './_effects';
import { Dialog, DialogContent } from './dialog';

const Command = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive> & { effects?: HoloFrameEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <CommandPrimitive
    ref={ref}
    className={cn(holoFrameEffectsClass(effects), 
      'flex h-full w-full flex-col overflow-hidden bg-[var(--hf-surface)] text-[var(--hf-text)] border border-[var(--hf-border-dim)]',
      className
    )}
    style={{ '--corner': '8px' } as React.CSSProperties}
    {...props}
  />
));
Command.displayName = CommandPrimitive.displayName;

interface CommandDialogProps extends React.ComponentPropsWithoutRef<typeof Dialog> {
  effects?: HoloFrameEffects;}

const CommandDialog = ({ children, ...props }: CommandDialogProps) => {
  return (
    <Dialog {...props}>
      <DialogContent className="overflow-hidden p-0 shadow-lg">
        <Command className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-[var(--hf-text)] [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  );
};

const CommandInput = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Input>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input> & { effects?: HoloFrameEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <div className="flex items-center border-b border-[var(--hf-border-dim)] px-3" cmdk-input-wrapper="">
    <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
    <CommandPrimitive.Input
      ref={ref}
      className={cn(holoFrameEffectsClass(effects), 
        'flex h-11 w-full rounded bg-transparent py-3 text-sm outline-none placeholder:text-[var(--hf-text)] disabled:cursor-not-allowed disabled:opacity-50 font-mono',
        className
      )}
      {...props}
    />
  </div>
));
CommandInput.displayName = CommandPrimitive.Input.displayName;

const CommandList = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.List> & { effects?: HoloFrameEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <CommandPrimitive.List
    ref={ref}
    className={cn(holoFrameEffectsClass(effects), 'max-h-[300px] overflow-y-auto overflow-x-hidden', className)}
    {...props}
  />
));
CommandList.displayName = CommandPrimitive.List.displayName;

const CommandEmpty = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Empty>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty> & { effects?: HoloFrameEffects }
>((props, ref) => (
  <CommandPrimitive.Empty
    ref={ref}
    className="py-6 text-center text-sm font-mono text-[var(--hf-text)]"
    {...props}
  />
));
CommandEmpty.displayName = CommandPrimitive.Empty.displayName;

const CommandGroup = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Group>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group> & { effects?: HoloFrameEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <CommandPrimitive.Group
    ref={ref}
    className={cn(holoFrameEffectsClass(effects), 
      'overflow-hidden p-1 text-[var(--hf-text)] [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-bold [&_[cmdk-group-heading]]:text-[var(--hf-text)] [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-wider [&_[cmdk-group-heading]]:font-sans',
      className
    )}
    {...props}
  />
));
CommandGroup.displayName = CommandPrimitive.Group.displayName;

const CommandSeparator = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator> & { effects?: HoloFrameEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <CommandPrimitive.Separator
    ref={ref}
    className={cn(holoFrameEffectsClass(effects), '-mx-1 h-px bg-[var(--hf-border-dim)]', className)}
    {...props}
  />
));
CommandSeparator.displayName = CommandPrimitive.Separator.displayName;

const CommandItem = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item> & { effects?: HoloFrameEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <CommandPrimitive.Item
    ref={ref}
    className={cn(holoFrameEffectsClass(effects), 
      'relative flex cursor-default select-none items-center px-2 py-1.5 text-sm outline-none aria-selected:bg-[var(--hf-border-main)] aria-selected:text-[var(--hf-bg)] data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 font-mono transition-colors',
      className
    )}
    {...props}
  />
));
CommandItem.displayName = CommandPrimitive.Item.displayName;

const CommandShortcut = ({ className, effects = 'on', ...props }: React.HTMLAttributes<HTMLSpanElement> & { effects?: HoloFrameEffects }) => {
  return (
    <span
      className={cn(holoFrameEffectsClass(effects), 
        'ml-auto text-xs tracking-widest text-[var(--hf-text)] group-aria-selected:text-[var(--hf-bg)]',
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
