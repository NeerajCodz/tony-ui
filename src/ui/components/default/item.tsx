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
  "group flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm outline-none transition-colors disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      type: {
        default: "bg-transparent hover:bg-accent/50 text-foreground",
        outline: "border border-input bg-transparent hover:bg-accent",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        elevated: "bg-card text-card-foreground shadow-sm border border-border hover:shadow-md",
        flat: "bg-muted/50 text-foreground hover:bg-muted",
        unstyled: "",
      },
      size: {
        xs: "py-1 px-2 text-xs",
        sm: "py-1.5 px-2.5",
        md: "py-2 px-3",
        lg: "py-3 px-4",
        xl: "py-4 px-6 text-base",
      },
      interactive: {
        true: "cursor-pointer focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        false: "",
      },
      selected: {
        true: "bg-accent text-accent-foreground",
        false: "",
      },
    },
    defaultVariants: {
      type: "default",
      size: "md",
      interactive: false,
    },
  }
);

export interface ItemProps extends ItemBaseProps, VariantProps<typeof itemVariants> {}

const Item = React.forwardRef<HTMLDivElement, ItemProps>(
  ({ className, type, size, interactive, selected, ...props }, ref) => {
    return (
      <ItemBase
        ref={ref}
        type={type}
        size={size}
        interactive={interactive}
        selected={selected}
        className={cn(itemVariants({ type, size, interactive, selected, className }))}
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
      className={cn("truncate font-medium leading-none", className)}
      {...props}
    />
  )
);
ItemTitle.displayName = 'ItemTitle';

const ItemDescription = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(
  ({ className, ...props }, ref) => (
    <ItemDescriptionBase
      ref={ref}
      className={cn("truncate text-xs text-muted-foreground", className)}
      {...props}
    />
  )
);
ItemDescription.displayName = 'ItemDescription';

const ItemIcon = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(
  ({ className, ...props }, ref) => (
    <ItemIconBase
      ref={ref}
      className={cn("flex h-4 w-4 shrink-0 items-center justify-center text-muted-foreground", className)}
      {...props}
    />
  )
);
ItemIcon.displayName = 'ItemIcon';

const ItemIndicator = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(
  ({ className, ...props }, ref) => (
    <ItemIndicatorBase
      ref={ref}
      className={cn("flex h-4 w-4 shrink-0 items-center justify-center text-primary", className)}
      {...props}
    />
  )
);
ItemIndicator.displayName = 'ItemIndicator';

const ItemBadge = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(
  ({ className, ...props }, ref) => (
    <ItemBadgeBase
      ref={ref}
      className={cn("ml-auto flex h-5 min-w-5 items-center justify-center rounded-full bg-primary/10 px-1.5 text-[10px] font-medium text-primary", className)}
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
        "ml-auto flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground opacity-0 hover:bg-accent hover:text-accent-foreground group-hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring",
        className
      )}
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
