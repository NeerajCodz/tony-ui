import * as React from 'react';
import { CommandPrimitive } from '../_base/command';
import { Search } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Dialog, DialogContent } from '@/ui/components/terminal-window/dialog';
import { terminalWindowEffectsClass, type TerminalWindowEffects } from './_effects';

const Command = React.forwardRef<
  React.ComponentRef<typeof CommandPrimitive>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive> & { effects?: TerminalWindowEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <CommandPrimitive
    ref={ref}
    className={cn(terminalWindowEffectsClass(effects), 
      'flex h-full w-full flex-col overflow-hidden rounded-none bg-[var(--tm-bg)] text-[var(--tm-phosphor)] border border-[var(--tm-phosphor)]',
      className
    )}
    {...props}
  />
));
Command.displayName = CommandPrimitive.displayName;

interface CommandDialogProps extends React.ComponentPropsWithoutRef<typeof Dialog> {
  effects?: TerminalWindowEffects;
}

const CommandDialog = ({ children, effects = 'on', ...props }: CommandDialogProps) => {
  return (
    <Dialog {...props}>
      <DialogContent className='overflow-hidden p-0 shadow-none border-[var(--tm-phosphor)]'>
        <Command effects={effects} className='[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-[var(--tm-phosphor-dim)] [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5'>
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  );
};

const CommandInput = React.forwardRef<
  React.ComponentRef<typeof CommandPrimitive.Input>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input> & { effects?: TerminalWindowEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <div className={cn(terminalWindowEffectsClass(effects), 'flex items-center border-b border-[var(--tm-phosphor)] px-3')} cmdk-input-wrapper=''>
    <span className='mr-2 text-[var(--tm-phosphor)] font-mono'>{'>'}</span>
    <CommandPrimitive.Input
      ref={ref}
      className={cn(
        'flex h-11 w-full rounded-none bg-transparent py-3 text-sm outline-none placeholder:text-[var(--tm-phosphor-dim)] disabled:cursor-not-allowed disabled:opacity-50 font-mono text-[var(--tm-phosphor)]',
        className
      )}
      {...props}
    />
  </div>
));
CommandInput.displayName = CommandPrimitive.Input.displayName;

const CommandList = React.forwardRef<
  React.ComponentRef<typeof CommandPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.List> & { effects?: TerminalWindowEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <CommandPrimitive.List
    ref={ref}
    className={cn(terminalWindowEffectsClass(effects), 'max-h-[300px] overflow-y-auto overflow-x-hidden', className)}
    {...props}
  />
));
CommandList.displayName = CommandPrimitive.List.displayName;

const CommandEmpty = React.forwardRef<
  React.ComponentRef<typeof CommandPrimitive.Empty>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty> & { effects?: TerminalWindowEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <CommandPrimitive.Empty
    ref={ref}
    className={cn(terminalWindowEffectsClass(effects), 'py-6 text-center text-sm text-[var(--tm-phosphor-dim)] font-mono', className)}
    {...props}
  />
));
CommandEmpty.displayName = CommandPrimitive.Empty.displayName;

const CommandGroup = React.forwardRef<
  React.ComponentRef<typeof CommandPrimitive.Group>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group> & { effects?: TerminalWindowEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <CommandPrimitive.Group
    ref={ref}
    className={cn(terminalWindowEffectsClass(effects), 
      'overflow-hidden p-1 text-[var(--tm-phosphor)] [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-[var(--tm-phosphor-dim)] font-mono uppercase tracking-wider',
      className
    )}
    {...props}
  />
));
CommandGroup.displayName = CommandPrimitive.Group.displayName;

const CommandSeparator = React.forwardRef<
  React.ComponentRef<typeof CommandPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator> & { effects?: TerminalWindowEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <CommandPrimitive.Separator
    ref={ref}
    className={cn(terminalWindowEffectsClass(effects), '-mx-1 h-px bg-[var(--tm-phosphor)]/20', className)}
    {...props}
  />
));
CommandSeparator.displayName = CommandPrimitive.Separator.displayName;

const CommandItem = React.forwardRef<
  React.ComponentRef<typeof CommandPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item> & { effects?: TerminalWindowEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <CommandPrimitive.Item
    ref={ref}
    className={cn(terminalWindowEffectsClass(effects), 
      'relative flex cursor-default select-none items-center rounded-none px-2 py-1.5 text-sm outline-none aria-selected:bg-[var(--tm-phosphor)] aria-selected:text-[var(--tm-bg)] data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 font-mono hover:bg-[var(--tm-phosphor)] hover:text-[var(--tm-bg)] transition-colors',
      className
    )}
    {...props}
  />
));
CommandItem.displayName = CommandPrimitive.Item.displayName;

const CommandShortcut = ({
  className,
  effects = 'on',
  ...props
}: React.HTMLAttributes<HTMLSpanElement> & { effects?: TerminalWindowEffects }) => {
  return (
    <span
      className={cn(terminalWindowEffectsClass(effects), 
        'ml-auto text-xs tracking-widest text-[var(--tm-phosphor-dim)] font-mono opacity-60',
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

