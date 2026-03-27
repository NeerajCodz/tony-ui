import { cn } from "@/lib/utils";
import * as React from "react";
import { glassEffectsClass, type GlassEffects } from "./_effects";
import { Button, ButtonProps } from "./button";

export interface IconButtonProps extends ButtonProps {
  effects?: GlassEffects
}

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className, effects = "on", size = "icon", ...props }, ref) => {
    return (
      <Button
        ref={ref}
        size={size}
        className={cn(glassEffectsClass(effects), "aspect-square p-0", className)}
        {...props}
      />
    )
  }
)
IconButton.displayName = "IconButton"

export { IconButton };
