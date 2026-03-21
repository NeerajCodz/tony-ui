import * as React from 'react';

export interface CommandBaseProps extends React.HTMLAttributes<HTMLDivElement> {}

export const CommandBase = React.forwardRef<HTMLDivElement, CommandBaseProps>(
  ({ ...props }, ref) => <div ref={ref} role="application" {...props} />
);
CommandBase.displayName = 'CommandBase';

export interface CommandInputBaseProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const CommandInputBase = React.forwardRef<HTMLInputElement, CommandInputBaseProps>(
  ({ ...props }, ref) => <input ref={ref} role="searchbox" {...props} />
);
CommandInputBase.displayName = 'CommandInputBase';

export interface CommandListBaseProps extends React.HTMLAttributes<HTMLDivElement> {}

export const CommandListBase = React.forwardRef<HTMLDivElement, CommandListBaseProps>(
  ({ ...props }, ref) => <div ref={ref} role="listbox" {...props} />
);
CommandListBase.displayName = 'CommandListBase';

export interface CommandEmptyBaseProps extends React.HTMLAttributes<HTMLDivElement> {}

export const CommandEmptyBase = React.forwardRef<HTMLDivElement, CommandEmptyBaseProps>(
  ({ ...props }, ref) => <div ref={ref} {...props} />
);
CommandEmptyBase.displayName = 'CommandEmptyBase';

export interface CommandGroupBaseProps extends React.HTMLAttributes<HTMLDivElement> {}

export const CommandGroupBase = React.forwardRef<HTMLDivElement, CommandGroupBaseProps>(
  ({ ...props }, ref) => <div ref={ref} role="group" {...props} />
);
CommandGroupBase.displayName = 'CommandGroupBase';

export interface CommandItemBaseProps extends React.HTMLAttributes<HTMLDivElement> {}

export const CommandItemBase = React.forwardRef<HTMLDivElement, CommandItemBaseProps>(
  ({ ...props }, ref) => <div ref={ref} role="option" {...props} />
);
CommandItemBase.displayName = 'CommandItemBase';

export interface CommandSeparatorBaseProps extends React.HTMLAttributes<HTMLDivElement> {}

export const CommandSeparatorBase = React.forwardRef<HTMLDivElement, CommandSeparatorBaseProps>(
  ({ ...props }, ref) => <div ref={ref} role="separator" {...props} />
);
CommandSeparatorBase.displayName = 'CommandSeparatorBase';
