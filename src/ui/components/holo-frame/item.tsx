import * as React from 'react';
import { ItemBase, ItemActionBase, ItemBadgeBase, ItemContentBase, ItemDescriptionBase, ItemIconBase, ItemIndicatorBase, ItemTitleBase, type ItemBaseProps } from '@/ui/components/_base/item';
import { cn } from '@/lib/utils';
import { holoFrameEffectsClass, type HoloFrameEffects } from './_effects';
import { cva, type VariantProps } from 'class-variance-authority';

const itemVariants = cva(
  "group flex w-full items-center gap-3 relative overflow-hidden transition-all duration-400",
  {
    variants: {
      type: {
        default: "bg-transparent text-[var(--hf-text)] hover:bg-[var(--hf-border-main)]/5 hover:text-[var(--hf-border-main)]",
        outline: "border border-[var(--hf-border-dim)] bg-transparent hover:border-[var(--hf-border-main)] hover:bg-[var(--hf-border-main)]/5 text-[var(--hf-text)]",
        ghost: "hover:bg-[var(--hf-surface)] hover:text-[var(--hf-border-main)] text-[var(--hf-text)]",
        elevated: "bg-[var(--hf-surface)] border border-[var(--hf-border-dim)] text-[var(--hf-text)] hover:border-[var(--hf-border-main)] hover:shadow-[0_0_10px_rgba(0,200,255,0.1)]",
        flat: "bg-[var(--hf-surface)]/50 text-[var(--hf-text)] hover:bg-[var(--hf-surface)] hover:text-[var(--hf-text)]",
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
        true: "cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--hf-border-main)]",
        false: "pointer-events-none",
      },
      selected: {
        true: "bg-[var(--hf-border-main)]/10 border-[var(--hf-border-main)] text-[var(--hf-border-main)]",
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

export interface ItemProps extends Omit<ItemBaseProps, 'disabled'>, VariantProps<typeof itemVariants> {
  effects?: HoloFrameEffects;
}

const Item = React.forwardRef<HTMLDivElement, ItemProps>(
  ({ className, effects = 'on', type, size, interactive, selected, disabled, style, ...props }, ref) => {

    return (
      <ItemBase
        ref={ref}
        type={type}
        size={size}
        interactive={interactive}
        selected={selected}
        disabled={disabled}
        className={cn(holoFrameEffectsClass(effects), 
            'font-mono', 
            itemVariants({ type, size, interactive, selected, disabled, className })
        )}
        style={style}
        {...props}
      />
    );
  }
);
Item.displayName = 'Item';

const ItemContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & { effects?: HoloFrameEffects }>(
  ({ className, effects = 'on', ...props }, ref) => (
    <ItemContentBase
      ref={ref}
      className={cn(holoFrameEffectsClass(effects), "flex flex-1 flex-col gap-0.5 min-w-0", className)}
      {...props}
    />
  )
);
ItemContent.displayName = 'ItemContent';

const ItemTitle = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement> & { effects?: HoloFrameEffects }>(
  ({ className, effects = 'on', ...props }, ref) => (
    <ItemTitleBase
      ref={ref}
      className={cn(holoFrameEffectsClass(effects), "font-sans font-semibold uppercase tracking-wide leading-none", className)}
      {...props}
    />
  )
);
ItemTitle.displayName = 'ItemTitle';

const ItemDescription = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement> & { effects?: HoloFrameEffects }>(
  ({ className, effects = 'on', ...props }, ref) => (
    <ItemDescriptionBase
      ref={ref}
      className={cn(holoFrameEffectsClass(effects), "truncate text-xs text-[var(--hf-text)] font-mono", className)}
      {...props}
    />
  )
);
ItemDescription.displayName = 'ItemDescription';

const ItemIcon = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement> & { effects?: HoloFrameEffects }>(
  ({ className, effects = 'on', ...props }, ref) => (
    <ItemIconBase
      ref={ref}
      className={cn(holoFrameEffectsClass(effects), "flex h-4 w-4 shrink-0 items-center justify-center text-[var(--hf-border-main)] opacity-70 group-hover:opacity-100 transition-opacity", className)}
      {...props}
    />
  )
);
ItemIcon.displayName = 'ItemIcon';

const ItemIndicator = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement> & { effects?: HoloFrameEffects }>(
  ({ className, effects = 'on', ...props }, ref) => (
    <ItemIndicatorBase
      ref={ref}
      className={cn(holoFrameEffectsClass(effects), "flex h-4 w-4 shrink-0 items-center justify-center text-[var(--hf-border-main)]", className)}
      {...props}
    />
  )
);
ItemIndicator.displayName = 'ItemIndicator';

const ItemBadge = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement> & { effects?: HoloFrameEffects }>(
  ({ className, effects = 'on', ...props }, ref) => (
    <ItemBadgeBase
      ref={ref}
      className={cn(holoFrameEffectsClass(effects), 
          "ml-auto flex h-5 min-w-5 items-center justify-center border border-[var(--hf-border-dim)] bg-[var(--hf-surface)] px-1.5 text-[10px] font-medium text-[var(--hf-text)] font-mono",
          "group-hover:border-[var(--hf-border-main)] group-hover:text-[var(--hf-border-main)] transition-colors",
          className
      )}
      style={{ '--corner': '2px' } as React.CSSProperties}
      {...props}
    />
  )
);
ItemBadge.displayName = 'ItemBadge';

const ItemAction = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement> & { effects?: HoloFrameEffects }>(
  ({ className, effects = 'on', ...props }, ref) => (
    <ItemActionBase
      ref={ref}
      className={cn(holoFrameEffectsClass(effects), 
        "ml-auto flex h-7 w-7 items-center justify-center border border-transparent text-[var(--hf-text)] opacity-0 group-hover:opacity-100 hover:border-[var(--hf-border-main)] hover:text-[var(--hf-border-main)] hover:bg-[var(--hf-border-main)]/10 focus:opacity-100 focus:outline-none transition-all",
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
