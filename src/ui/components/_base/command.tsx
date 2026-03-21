import * as React from 'react';

/**
 * Command type variants
 */
export type CommandType =
  | 'default'
  | 'dialog'
  | 'inline'
  | 'unstyled';

/**
 * Command sizes
 */
export type CommandSize = 'sm' | 'md' | 'lg';

// ============================================================================
// Command Root
// ============================================================================

export interface CommandBaseProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Visual structural type
   * @default 'default'
   */
  type?: CommandType;
  
  /**
   * Size variant
   * @default 'md'
   */
  size?: CommandSize;
  
  /**
   * Callback when search value changes
   */
  onValueChange?: (value: string) => void;
  
  /**
   * Controlled search value
   */
  value?: string;
  
  /**
   * Filter function for items
   */
  filter?: (value: string, search: string) => number;
  
  /**
   * Whether command should loop when navigating
   * @default false
   */
  loop?: boolean;
  
  /**
   * Label for accessibility
   */
  label?: string;
  
  /**
   * Whether to disable pointer selection
   * @default false
   */
  disablePointerSelection?: boolean;
}

/**
 * CommandBase - Command palette / spotlight search
 * 
 * Based on cmdk library. Provides fast keyboard navigation
 * for searching and selecting actions.
 * 
 * Anatomy:
 * - Command (root)
 *   - CommandInput
 *   - CommandList
 *     - CommandEmpty (shown when no results)
 *     - CommandLoading (shown when loading)
 *     - CommandGroup
 *       - CommandItem
 *     - CommandSeparator
 * 
 * Features:
 * - Fuzzy search built-in
 * - Keyboard navigation
 * - Grouping with headings
 * - Loading states
 * - Custom filtering
 * 
 * Accessibility:
 * - role="application" on root
 * - aria-label on root
 * - role="listbox" on list
 * - role="option" on items
 * - aria-selected on active item
 * 
 * Keyboard:
 * - ↑/↓: Navigate items
 * - Enter: Select item
 * - Esc: Close (when in dialog)
 * - Home/End: Jump to first/last
 */
export const CommandBase = React.forwardRef<HTMLDivElement, CommandBaseProps>(
  ({ type = 'default', size = 'md', label = 'Command palette', loop = false, ...props }, ref) => (
    <div
      ref={ref}
      role="application"
      aria-label={label}
      data-type={type}
      data-size={size}
      data-loop={loop || undefined}
      {...props}
    />
  )
);
CommandBase.displayName = 'CommandBase';

// ============================================================================
// Command Dialog
// ============================================================================

export interface CommandDialogBaseProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Whether dialog is open
   */
  open?: boolean;
  
  /**
   * Callback when open state changes
   */
  onOpenChange?: (open: boolean) => void;
}

/**
 * CommandDialogBase - Command palette as a dialog
 */
export const CommandDialogBase = React.forwardRef<HTMLDivElement, CommandDialogBaseProps>(
  ({ open, ...props }, ref) => (
    <div
      ref={ref}
      role="dialog"
      aria-modal="true"
      data-state={open ? 'open' : 'closed'}
      {...props}
    />
  )
);
CommandDialogBase.displayName = 'CommandDialogBase';

// ============================================================================
// Command Input
// ============================================================================

export interface CommandInputBaseProps extends React.InputHTMLAttributes<HTMLInputElement> {}

/**
 * CommandInputBase - Search input
 */
export const CommandInputBase = React.forwardRef<HTMLInputElement, CommandInputBaseProps>(
  (props, ref) => (
    <input
      ref={ref}
      type="text"
      role="combobox"
      aria-autocomplete="list"
      aria-expanded="true"
      autoComplete="off"
      autoCorrect="off"
      spellCheck="false"
      {...props}
    />
  )
);
CommandInputBase.displayName = 'CommandInputBase';

// ============================================================================
// Command List
// ============================================================================

export interface CommandListBaseProps extends React.HTMLAttributes<HTMLDivElement> {}

/**
 * CommandListBase - Results list container
 */
export const CommandListBase = React.forwardRef<HTMLDivElement, CommandListBaseProps>(
  (props, ref) => (
    <div ref={ref} role="listbox" {...props} />
  )
);
CommandListBase.displayName = 'CommandListBase';

// ============================================================================
// Command Empty
// ============================================================================

export interface CommandEmptyBaseProps extends React.HTMLAttributes<HTMLDivElement> {}

/**
 * CommandEmptyBase - Shown when no results match
 */
export const CommandEmptyBase = React.forwardRef<HTMLDivElement, CommandEmptyBaseProps>(
  (props, ref) => (
    <div ref={ref} role="presentation" {...props} />
  )
);
CommandEmptyBase.displayName = 'CommandEmptyBase';

// ============================================================================
// Command Loading
// ============================================================================

export interface CommandLoadingBaseProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Progress value (0-100)
   */
  progress?: number;
}

/**
 * CommandLoadingBase - Loading indicator
 */
export const CommandLoadingBase = React.forwardRef<HTMLDivElement, CommandLoadingBaseProps>(
  ({ progress, ...props }, ref) => (
    <div
      ref={ref}
      role="progressbar"
      aria-valuenow={progress}
      aria-valuemin={0}
      aria-valuemax={100}
      {...props}
    />
  )
);
CommandLoadingBase.displayName = 'CommandLoadingBase';

// ============================================================================
// Command Group
// ============================================================================

export interface CommandGroupBaseProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Group heading
   */
  heading?: React.ReactNode;
  
  /**
   * Force group to render even when empty
   */
  forceMount?: boolean;
}

/**
 * CommandGroupBase - Group of related items
 */
export const CommandGroupBase = React.forwardRef<HTMLDivElement, CommandGroupBaseProps>(
  ({ heading, forceMount, ...props }, ref) => (
    <div
      ref={ref}
      role="group"
      aria-label={typeof heading === 'string' ? heading : undefined}
      data-force-mount={forceMount || undefined}
      {...props}
    />
  )
);
CommandGroupBase.displayName = 'CommandGroupBase';

// ============================================================================
// Command Group Heading
// ============================================================================

export interface CommandGroupHeadingBaseProps extends React.HTMLAttributes<HTMLDivElement> {}

/**
 * CommandGroupHeadingBase - Heading for a group
 */
export const CommandGroupHeadingBase = React.forwardRef<HTMLDivElement, CommandGroupHeadingBaseProps>(
  (props, ref) => (
    <div ref={ref} aria-hidden="true" {...props} />
  )
);
CommandGroupHeadingBase.displayName = 'CommandGroupHeadingBase';

// ============================================================================
// Command Item
// ============================================================================

export interface CommandItemBaseProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onSelect'> {
  /**
   * Unique value for this item
   */
  value?: string;
  
  /**
   * Keywords for search matching (in addition to text content)
   */
  keywords?: string[];
  
  /**
   * Whether item is disabled
   * @default false
   */
  disabled?: boolean;
  
  /**
   * Callback when item is selected
   */
  onSelect?: (value: string) => void;
  
  /**
   * Force item to render even when filtered out
   */
  forceMount?: boolean;
}

/**
 * CommandItemBase - Selectable command item
 */
export const CommandItemBase = React.forwardRef<HTMLDivElement, CommandItemBaseProps>(
  ({ value, keywords, disabled = false, forceMount, onSelect, ...props }, ref) => (
    <div
      ref={ref}
      role="option"
      tabIndex={disabled ? undefined : 0}
      aria-disabled={disabled || undefined}
      data-value={value}
      data-disabled={disabled || undefined}
      data-force-mount={forceMount || undefined}
      {...props}
    />
  )
);
CommandItemBase.displayName = 'CommandItemBase';

// ============================================================================
// Command Separator
// ============================================================================

export interface CommandSeparatorBaseProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Always render separator even when adjacent items are hidden
   * @default false
   */
  alwaysRender?: boolean;
}

/**
 * CommandSeparatorBase - Separator between groups
 */
export const CommandSeparatorBase = React.forwardRef<HTMLDivElement, CommandSeparatorBaseProps>(
  ({ alwaysRender, ...props }, ref) => (
    <div
      ref={ref}
      role="separator"
      data-always-render={alwaysRender || undefined}
      {...props}
    />
  )
);
CommandSeparatorBase.displayName = 'CommandSeparatorBase';

// ============================================================================
// Command Shortcut
// ============================================================================

export interface CommandShortcutBaseProps extends React.HTMLAttributes<HTMLSpanElement> {}

/**
 * CommandShortcutBase - Keyboard shortcut display
 */
export const CommandShortcutBase = React.forwardRef<HTMLSpanElement, CommandShortcutBaseProps>(
  (props, ref) => (
    <span ref={ref} aria-hidden="true" {...props} />
  )
);
CommandShortcutBase.displayName = 'CommandShortcutBase';
