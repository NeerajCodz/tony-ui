import * as React from 'react';

export interface ComboboxBaseProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: string;
  onValueChange?: (value: string) => void;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export const ComboboxBase = React.forwardRef<HTMLDivElement, ComboboxBaseProps>(
  ({ ...props }, ref) => <div ref={ref} role="combobox" {...props} />
);
ComboboxBase.displayName = 'ComboboxBase';

export interface ComboboxTriggerBaseProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const ComboboxTriggerBase = React.forwardRef<HTMLButtonElement, ComboboxTriggerBaseProps>(
  ({ ...props }, ref) => <button ref={ref} role="button" aria-haspopup="listbox" {...props} />
);
ComboboxTriggerBase.displayName = 'ComboboxTriggerBase';

export interface ComboboxContentBaseProps extends React.HTMLAttributes<HTMLDivElement> {}

export const ComboboxContentBase = React.forwardRef<HTMLDivElement, ComboboxContentBaseProps>(
  ({ ...props }, ref) => <div ref={ref} role="listbox" {...props} />
);
ComboboxContentBase.displayName = 'ComboboxContentBase';

export interface ComboboxItemBaseProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
}

export const ComboboxItemBase = React.forwardRef<HTMLDivElement, ComboboxItemBaseProps>(
  ({ ...props }, ref) => <div ref={ref} role="option" {...props} />
);
ComboboxItemBase.displayName = 'ComboboxItemBase';
