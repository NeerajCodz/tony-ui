import * as React from 'react';
import {
  ItemBase,
  ItemActionBase,
  ItemBadgeBase,
  ItemContentBase,
  ItemDescriptionBase,
  ItemIconBase,
  ItemIndicatorBase,
  ItemTitleBase,
  type ItemBaseProps,
} from '@/ui/components/_base/item';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';


const itemVariants = cva(
  "group flex w-full items-center gap-3 relative overflow-hidden transition-all duration-300",
  {
    variants: {
      type: {
        default: "bg-transparent text-[var(--text-primary)] hover:bg-[var(--dp-accent)]/5 hover:text-[var(--dp-accent)]",
        outline: "border border-[var(--dp-border)] bg-transparent hover:border-[var(--dp-accent)] hover:bg-[var(--dp-accent)]/5 text-[var(--text-primary)]",
        ghost: "hover:bg-[var(--dp-surface)] hover:text-[var(--dp-accent)] text-[var(--text-secondary)]",
        elevated: "bg-[var(--dp-surface)] border border-[var(--dp-border)] text-[var(--text-primary)] hover:border-[var(--dp-accent)] hover:shadow-[0_0_10px_rgba(0,200,255,0.1)]",
        flat: "bg-[var(--dp-surface)]/50 text-[var(--text-secondary)] hover:bg-[var(--dp-surface)] hover:text-[var(--text-primary)]",
        unstyled: "",
      },
      size: {
        xs: "py-1 px-2 text-[10px] ",
        sm: "py-2 px-3 text-xs ",
        md: "py-3 px-4 text-sm ",
        lg: "py-4 px-5 text-base ",
        xl: "py-5 px-6 text-lg ",
      },
      interactive: {
        true: "cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--dp-accent)]",
        false: "pointer-events-none",
      },
      selected: {
        true: "bg-[var(--dp-accent)]/10 border-[var(--dp-accent)] text-[var(--dp-accent)]",
        false: "",
      },
      disabled: {
        true: "opacity-50 cursor-not-allowed pointer-events-none",
        false: "",
      },
    },
    defaultVariants: {
      type: "default",
      size: "md",
      interactive: false,
      selected: false,
      disabled: false,
    },
  }
);

export interface ItemProps extends Omit<ItemBaseProps, 'disabled'>, VariantProps<typeof itemVariants> {}

const Item = React.forwardRef<HTMLDivElement, ItemProps>(
  ({ className, type, size, interactive, selected, disabled, style, ...props }, ref) => {
    // Apply clip-path unless unstyled
    const componentStyle = (type !== 'unstyled')
      ? { ...style }
      : style;

    return (
      <ItemBase
        ref={ref}
        type={type}
        size={size}
        interactive={interactive}
        selected={selected}
        disabled={disabled}
        className={cn(
            'font-mono', 
            itemVariants({ type, size, interactive, selected, disabled, className })
        )}
        style={componentStyle}
        {...props}
      />
    );
  }
);
Item.displayName = 'Item';

const ItemContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <ItemContentBase
      ref={ref}
      className={cn("flex flex-1 flex-col gap-0.5 min-w-0", className)}
      {...props}
    />
  )
);
ItemContent.displayName = 'ItemContent';

const ItemTitle = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(
  ({ className, ...props }, ref) => (
    <ItemTitleBase
      ref={ref}
      className={cn("font-mono font-semibold uppercase tracking-wide leading-none", className)}
      {...props}
    />
  )
);
ItemTitle.displayName = 'ItemTitle';

const ItemDescription = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(
  ({ className, ...props }, ref) => (
    <ItemDescriptionBase
      ref={ref}
      className={cn("truncate text-xs text-[var(--text-muted)] font-mono", className)}
      {...props}
    />
  )
);
ItemDescription.displayName = 'ItemDescription';

const ItemIcon = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(
  ({ className, ...props }, ref) => (
    <ItemIconBase
      ref={ref}
      className={cn("flex h-4 w-4 shrink-0 items-center justify-center text-[var(--dp-accent)] opacity-70 group-hover:opacity-100 transition-opacity", className)}
      {...props}
    />
  )
);
ItemIcon.displayName = 'ItemIcon';

const ItemIndicator = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(
  ({ className, ...props }, ref) => (
    <ItemIndicatorBase
      ref={ref}
      className={cn("flex h-4 w-4 shrink-0 items-center justify-center text-[var(--dp-accent)]", className)}
      {...props}
    />
  )
);
ItemIndicator.displayName = 'ItemIndicator';

const ItemBadge = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(
  ({ className, ...props }, ref) => (
    <ItemBadgeBase
      ref={ref}
      className={cn(
          "ml-auto flex h-5 min-w-5 items-center justify-center border border-[var(--dp-border)] bg-[var(--dp-surface)] px-1.5 text-[10px] font-medium text-[var(--text-secondary)] font-mono",
          "group-hover:border-[var(--dp-accent)] group-hover:text-[var(--dp-accent)] transition-colors",
          className
      )}
      style={{ '--corner': '2px' } as React.CSSProperties}
      {...props}
    />
  )
);
ItemBadge.displayName = 'ItemBadge';

const ItemAction = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className, ...props }, ref) => (
    <ItemActionBase
      ref={ref}
      className={cn(
        "ml-auto flex h-7 w-7 items-center justify-center border border-transparent text-[var(--text-muted)] opacity-0 group-hover:opacity-100 hover:border-[var(--dp-accent)] hover:text-[var(--dp-accent)] hover:bg-[var(--dp-accent)]/10 focus:opacity-100 focus:outline-none transition-all",
        className
      )}
      style={{ '--corner': '3px' } as React.CSSProperties}
      {...props}
    />
  )
);
ItemAction.displayName = 'ItemAction';

export {
  Item,
  ItemContent,
  ItemTitle,
  ItemDescription,
  ItemIcon,
  ItemIndicator,
  ItemBadge,
  ItemAction,
};
