'use client';

import * as React from 'react';
import {
  CommandBase,
  CommandEmptyBase,
  CommandGroupBase,
  CommandInputBase,
  CommandItemBase,
  CommandListBase,
  CommandSeparatorBase,
} from '../_base/command';
import { cx, getSurfaceStyle, type StyledProps } from '../_shared/basic-surfaces';

export type CommandProps = Omit<React.ComponentPropsWithoutRef<typeof CommandBase>, 'type'> & StyledProps;
export type CommandInputProps = Omit<React.ComponentPropsWithoutRef<typeof CommandInputBase>, 'type'> &
  StyledProps & {
    htmlType?: React.HTMLInputTypeAttribute;
  };
export type CommandListProps = Omit<React.ComponentPropsWithoutRef<typeof CommandListBase>, 'type'> & StyledProps;
export type CommandEmptyProps = Omit<React.ComponentPropsWithoutRef<typeof CommandEmptyBase>, 'type'> & StyledProps;
export type CommandGroupProps = Omit<React.ComponentPropsWithoutRef<typeof CommandGroupBase>, 'type'> & StyledProps;
export type CommandItemProps = Omit<React.ComponentPropsWithoutRef<typeof CommandItemBase>, 'type'> & StyledProps;
export type CommandSeparatorProps = Omit<React.ComponentPropsWithoutRef<typeof CommandSeparatorBase>, 'type'> & StyledProps;

const CommandRoot = React.forwardRef<React.ElementRef<typeof CommandBase>, CommandProps>(
  ({ className, version, type, uiType, colors, style, ...props }, ref) => (
    <CommandBase
      ref={ref}
      className={cx('flex h-full w-full flex-col overflow-hidden rounded', className)}
      style={getSurfaceStyle(version ?? 'glass-morphism', type, uiType, colors, style)}
      {...props}
    />
  )
);
CommandRoot.displayName = 'Command';

const CommandInput = React.forwardRef<React.ElementRef<typeof CommandInputBase>, CommandInputProps>(
  ({ className, version, type, uiType, colors, style, htmlType = 'text', ...props }, ref) => (
    <CommandInputBase
      ref={ref}
      type={htmlType}
      className={cx('h-10 w-full rounded px-3 text-sm outline-none', className)}
      style={getSurfaceStyle(version ?? 'glass-morphism', type, uiType, colors, style)}
      {...props}
    />
  )
);
CommandInput.displayName = 'CommandInput';

const CommandList = React.forwardRef<React.ElementRef<typeof CommandListBase>, CommandListProps>(
  ({ className, version, type, uiType, colors, style, ...props }, ref) => (
    <CommandListBase
      ref={ref}
      className={cx('max-h-72 overflow-y-auto p-1', className)}
      style={getSurfaceStyle(version ?? 'glass-morphism', type, uiType, colors, style, {
        borderless: true,
        disableClip: true,
        disableGlow: true,
      })}
      {...props}
    />
  )
);
CommandList.displayName = 'CommandList';

const CommandEmpty = React.forwardRef<React.ElementRef<typeof CommandEmptyBase>, CommandEmptyProps>(
  ({ className, ...props }, ref) => <CommandEmptyBase ref={ref} className={cx('px-3 py-6 text-sm opacity-80', className)} {...props} />
);
CommandEmpty.displayName = 'CommandEmpty';

const CommandGroup = React.forwardRef<React.ElementRef<typeof CommandGroupBase>, CommandGroupProps>(
  ({ className, ...props }, ref) => <CommandGroupBase ref={ref} className={cx('overflow-hidden p-1', className)} {...props} />
);
CommandGroup.displayName = 'CommandGroup';

const CommandItem = React.forwardRef<React.ElementRef<typeof CommandItemBase>, CommandItemProps>(
  ({ className, version, type, uiType, colors, style, ...props }, ref) => (
    <CommandItemBase
      ref={ref}
      className={cx('cursor-default rounded px-2 py-1.5 text-sm', className)}
      style={getSurfaceStyle(version ?? 'glass-morphism', type, uiType, colors, style, {
        borderless: true,
        disableClip: true,
        disableGlow: true,
      })}
      {...props}
    />
  )
);
CommandItem.displayName = 'CommandItem';

const CommandSeparator = React.forwardRef<React.ElementRef<typeof CommandSeparatorBase>, CommandSeparatorProps>(
  ({ className, version, type, uiType, colors, style, ...props }, ref) => (
    <CommandSeparatorBase
      ref={ref}
      className={cx('my-1 h-px', className)}
      style={getSurfaceStyle(version ?? 'glass-morphism', type, uiType, colors, style, {
        borderless: true,
        disableClip: true,
        disableGlow: true,
      })}
      {...props}
    />
  )
);
CommandSeparator.displayName = 'CommandSeparator';

export const Command = Object.assign(CommandRoot, {
  Input: CommandInput,
  List: CommandList,
  Empty: CommandEmpty,
  Group: CommandGroup,
  Item: CommandItem,
  Separator: CommandSeparator,
});

export { CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem, CommandSeparator };

export default Command;
