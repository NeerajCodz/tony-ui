/**
 * Avatar Component Handler - Version-First Architecture
 * Routes to version-specific implementations with lazy loading
 */

"use client";

import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { createHandler } from "../core/create-handler";
import type { BaseUIProps } from "../types/common";

export interface AvatarProps extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root> {
  version?: BaseUIProps["version"];
  variant?: BaseUIProps["variant"];
  effects?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
}

const AvatarHandler = createHandler<AvatarProps & BaseUIProps>({
  componentName: "avatar",
  exportName: "Avatar"
});

const AvatarContext = React.createContext<{
  version?: BaseUIProps['version'];
  variant?: BaseUIProps['variant'];
  effects?: string;
  size?: AvatarProps['size'];
}>({});

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  AvatarProps
>(({ version = "default", variant = "default", effects, size = "md", ...props }, ref) => {
  return (
    <AvatarContext.Provider value={{ version, variant, effects, size }}>
      <AvatarHandler
        ref={ref}
        version={version}
        variant={variant}
        effects={effects}
        size={size}
        {...props}
      />
    </AvatarContext.Provider>
  );
});
Avatar.displayName = AvatarPrimitive.Root.displayName;

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={`aspect-square h-full w-full ${className || ""}`}
    {...props}
  />
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={`flex h-full w-full items-center justify-center rounded-full bg-muted font-mono text-xs ${className || ""}`}
    {...props}
  />
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

const AvatarExport = Object.assign(Avatar, {
  Image: AvatarImage,
  Fallback: AvatarFallback,
});

export { AvatarExport as Avatar, AvatarImage, AvatarFallback };
export default AvatarExport;

