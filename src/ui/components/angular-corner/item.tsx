import { cn } from '@/lib/utils';
import { ItemActionBase, ItemBadgeBase, ItemBase, ItemContentBase, ItemDescriptionBase, ItemIconBase, ItemIndicatorBase, ItemTitleBase, type ItemBaseProps } from '@/ui/components/_base/item';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

// Angular Corner Clip Path
const AC_CLIP_PATH = 'polygon(var(--corner) 0%, calc(100% - var(--corner)) 0%, 100% var(--corner), 100% calc(100% - var(--corner)), calc(100% - var(--corner)) 100%, var(--corner) 100%, 0% calc(100% - var(--corner)), 0% var(--corner))';

const itemVariants = cva(
  "group flex w-full items-center gap-3 relative overflow-hidden transition-all duration-300",
  {
    variants: {
      type: {
        default: "bg-transparent text-[var(--text-primary)] hover:bg-[var(--ac-accent)]/5 hover:text-[var(--ac-accent)]",
        outline: "border border-[var(--ac-border)] bg-transparent hover:border-[var(--ac-accent)] hover:bg-[var(--ac-accent)]/5 text-[var(--text-primary)]",
        ghost: "hover:bg-[var(--ac-surface)] hover:text-[var(--ac-accent)] text-[var(--text-secondary)]",
        elevated: "bg-[var(--ac-surface)] border border-[var(--ac-border)] text-[var(--text-primary)] hover:border-[var(--ac-accent)] hover:shadow-[0_0_10px_rgba(0,200,255,0.1)]",
        flat: "bg-[var(--ac-surface)]/50 text-[var(--text-secondary)] hover:bg-[var(--ac-surface)] hover:text-[var(--text-primary)]",
        unstyled: "",
      },
      size: {
        xs: "py-1 px-2 text-[10px] [--corner:2px]",
        sm: "py-2 px-3 text-xs [--corner:4px]",
        md: "py-3 px-4 text-sm [--corner:6px]",
        lg: "py-4 px-5 text-base [--corner:8px]",
        xl: "py-5 px-6 text-lg [--corner:10px]",
      },
      interactive: {
        true: "cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--ac-accent)]",
        false: "pointer-events-none",
      },
      selected: {
        true: "bg-[var(--ac-accent)]/10 border-[var(--ac-accent)] text-[var(--ac-accent)]",
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
      ? { ...style, clipPath: AC_CLIP_PATH }
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
      className={cn("flex h-4 w-4 shrink-0 items-center justify-center text-[var(--ac-accent)] opacity-70 group-hover:opacity-100 transition-opacity", className)}
      {...props}
    />
  )
);
ItemIcon.displayName = 'ItemIcon';

const ItemIndicator = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(
  ({ className, ...props }, ref) => (
    <ItemIndicatorBase
      ref={ref}
      className={cn("flex h-4 w-4 shrink-0 items-center justify-center text-[var(--ac-accent)]", className)}
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
          "ml-auto flex h-5 min-w-5 items-center justify-center border border-[var(--ac-border)] bg-[var(--ac-surface)] px-1.5 text-[10px] font-medium text-[var(--text-secondary)] font-mono",
          "group-hover:border-[var(--ac-accent)] group-hover:text-[var(--ac-accent)] transition-colors",
          className
      )}
      style={{ clipPath: AC_CLIP_PATH, '--corner': '2px' } as React.CSSProperties}
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
        "ml-auto flex h-7 w-7 items-center justify-center border border-transparent text-[var(--text-muted)] opacity-0 group-hover:opacity-100 hover:border-[var(--ac-accent)] hover:text-[var(--ac-accent)] hover:bg-[var(--ac-accent)]/10 focus:opacity-100 focus:outline-none transition-all",
        className
      )}
      style={{ clipPath: AC_CLIP_PATH, '--corner': '3px' } as React.CSSProperties}
      {...props}
    />
  )
);
ItemAction.displayName = 'ItemAction';

export {
Item,ItemAction,ItemBadge,ItemContent,ItemDescription,
ItemIcon,
ItemIndicator,ItemTitle
};
