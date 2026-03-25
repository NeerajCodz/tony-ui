import * as React from "react"
import { SliderPrimitive } from '../_base/slider';
import { cn } from "@/lib/utils"
import { glassEffectsClass, type GlassEffects } from "./_effects"

const Slider = React.forwardRef<
  React.ComponentRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> & {
    effects?: GlassEffects
  }
>(({ className, effects = "on", ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      glassEffectsClass(effects),
      "relative flex w-full touch-none select-none items-center",
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-[var(--gl-glass-bg)]/30 border border-[var(--gl-glass-border)]/20">
      <SliderPrimitive.Range className="absolute h-full bg-[var(--df-accent)]/70" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="block h-5 w-5 rounded-full border-2 border-[var(--gl-glass-border)]/50 bg-[var(--gl-glass-bg)] ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 backdrop-blur-sm shadow-lg hover:border-[var(--df-accent)]/50" />
  </SliderPrimitive.Root>
))
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
