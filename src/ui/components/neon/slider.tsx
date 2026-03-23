"use client"

import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"

import { cn } from "@/lib/utils"

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex w-full touch-none select-none items-center",
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-none bg-[var(--ne-bg)] border border-[var(--ne-text-secondary)] shadow-[inset_0_0_5px_var(--ne-text-secondary)]">
      <SliderPrimitive.Range className="absolute h-full bg-[var(--ne-primary)] shadow-[0_0_10px_var(--ne-primary)]" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="block h-5 w-5 rounded-none border-2 border-[var(--ne-primary)] bg-[var(--ne-bg)] shadow-[0_0_15px_var(--ne-primary),inset_0_0_5px_var(--ne-primary)] ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ne-primary)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-[var(--ne-primary)]" />
  </SliderPrimitive.Root>
))
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
