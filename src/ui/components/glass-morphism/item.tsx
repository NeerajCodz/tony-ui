import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import {
  ItemActionBase,
  ItemBadgeBase,
  ItemBase,
  type ItemBaseProps,
  ItemContentBase,
  ItemDescriptionBase,
  ItemIconBase,
  ItemIndicatorBase,
  ItemTitleBase,
} from "@/ui/components/_base/item"
import { glassEffectsClass, type GlassEffects } from "./_effects"

const itemVariants = cva(
  "group flex w-full items-center gap-3 relative overflow-hidden transition-all duration-200",
  {
    variants: {
      type: {
        default:
          "bg-transparent text-[var(--df-text)] hover:bg-[var(--gl-glass-bg)]/30",
        outline:
          "border border-[var(--gl-glass-border)]/30 bg-transparent hover:bg-[var(--gl-glass-bg)]/30 text-[var(--df-text)]",
        ghost:
          "hover:bg-[var(--gl-glass-bg)]/30 text-[var(--df-muted-text)] hover:text-[var(--df-text)]",
        elevated:
          "bg-[var(--gl-glass-bg)]/50 border border-[var(--gl-glass-border)]/30 text-[var(--df-text)] shadow-sm backdrop-blur-md hover:shadow-md",
        flat: "bg-[var(--gl-glass-bg)]/20 text-[var(--df-text)] hover:bg-[var(--gl-glass-bg)]/40",
        unstyled: "",
      },
      size: {
        xs: "py-1 px-2 text-[10px]",
        sm: "py-2 px-3 text-xs",
        md: "py-3 px-4 text-sm",
        lg: "py-4 px-5 text-base",
        xl: "py-5 px-6 text-lg",
      },
      interactive: {
        true: "cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--df-ring)]",
        false: "pointer-events-none",
      },
      selected: {
        true: "bg-[var(--gl-glass-bg)]/60 border-[var(--gl-glass-border)]/50 text-[var(--df-text)] backdrop-blur-md",
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
)

export interface ItemProps
  extends Omit<ItemBaseProps, "disabled">,
    VariantProps<typeof itemVariants> {
  effects?: GlassEffects
}

const Item = React.forwardRef<HTMLDivElement, ItemProps>(
  (
    {
      className,
      effects = "on",
      type,
      size,
      interactive,
      selected,
      disabled,
      style,
      ...props
    },
    ref
  ) => {
    // Apply clip-path unless unstyled
    const componentStyle = type !== "unstyled" ? { ...style } : style

    return (
      <ItemBase
        ref={ref}
        type={type}
        size={size}
        interactive={interactive}
        selected={selected}
        disabled={disabled}
        className={cn(
          glassEffectsClass(effects),
          "font-sans",
          itemVariants({
            type,
            size,
            interactive,
            selected,
            disabled,
            className,
          })
        )}
        style={componentStyle}
        {...props}
      />
    )
  }
)
Item.displayName = "Item"

const ItemContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { effects?: GlassEffects }
>(({ className, effects = "on", ...props }, ref) => (
  <ItemContentBase
    ref={ref}
    className={cn(
      glassEffectsClass(effects),
      "flex flex-1 flex-col gap-0.5 min-w-0",
      className
    )}
    {...props}
  />
))
ItemContent.displayName = "ItemContent"

const ItemTitle = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement> & { effects?: GlassEffects }
>(({ className, effects = "on", ...props }, ref) => (
  <ItemTitleBase
    ref={ref}
    className={cn(
      glassEffectsClass(effects),
      "font-sans font-medium leading-none text-[var(--df-text)]",
      className
    )}
    {...props}
  />
))
ItemTitle.displayName = "ItemTitle"

const ItemDescription = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement> & { effects?: GlassEffects }
>(({ className, effects = "on", ...props }, ref) => (
  <ItemDescriptionBase
    ref={ref}
    className={cn(
      glassEffectsClass(effects),
      "truncate text-xs text-[var(--df-muted-text)] font-sans",
      className
    )}
    {...props}
  />
))
ItemDescription.displayName = "ItemDescription"

const ItemIcon = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement> & { effects?: GlassEffects }
>(({ className, effects = "on", ...props }, ref) => (
  <ItemIconBase
    ref={ref}
    className={cn(
      glassEffectsClass(effects),
      "flex h-4 w-4 shrink-0 items-center justify-center text-[var(--df-muted-text)] group-hover:text-[var(--df-text)] transition-colors",
      className
    )}
    {...props}
  />
))
ItemIcon.displayName = "ItemIcon"

const ItemIndicator = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement> & { effects?: GlassEffects }
>(({ className, effects = "on", ...props }, ref) => (
  <ItemIndicatorBase
    ref={ref}
    className={cn(
      glassEffectsClass(effects),
      "flex h-4 w-4 shrink-0 items-center justify-center text-[var(--df-accent)]",
      className
    )}
    {...props}
  />
))
ItemIndicator.displayName = "ItemIndicator"

const ItemBadge = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement> & { effects?: GlassEffects }
>(({ className, effects = "on", ...props }, ref) => (
  <ItemBadgeBase
    ref={ref}
    className={cn(
      glassEffectsClass(effects),
      "ml-auto flex h-5 min-w-5 items-center justify-center rounded-md border border-[var(--gl-glass-border)]/30 bg-[var(--gl-glass-bg)]/30 px-1.5 text-[10px] font-medium text-[var(--df-muted-text)] font-sans backdrop-blur-sm",
      "group-hover:text-[var(--df-text)] transition-colors",
      className
    )}
    {...props}
  />
))
ItemBadge.displayName = "ItemBadge"

const ItemAction = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & { effects?: GlassEffects }
>(({ className, effects = "on", ...props }, ref) => (
  <ItemActionBase
    ref={ref}
    className={cn(
      glassEffectsClass(effects),
      "ml-auto flex h-7 w-7 items-center justify-center rounded-md border border-transparent text-[var(--df-muted-text)] opacity-0 group-hover:opacity-100 hover:bg-[var(--gl-glass-bg)]/30 hover:text-[var(--df-text)] focus:opacity-100 focus:outline-none transition-all",
      className
    )}
    {...props}
  />
))
ItemAction.displayName = "ItemAction"

export {
  Item,
  ItemContent,
  ItemTitle,
  ItemDescription,
  ItemIcon,
  ItemIndicator,
  ItemBadge,
  ItemAction,
}
