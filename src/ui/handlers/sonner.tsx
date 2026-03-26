/**
 * Sonner Handler Component
 * 
 * Central handler that:
 * 1. Wraps the sonner library's Toaster
 * 2. Applies design system styling based on version
 * 3. Handles toast type logic and animations
 * 4. Manages loader animation with duration prop
 */

"use client";

import * as React from "react";
import { Toaster as SonnerToaster } from "sonner";
import { createHandler } from "../core/create-handler";
import type { BaseUIProps } from "../types/common";
import { SonnerProps, SonnerVersion, SonnerType, SONNER_VERSION_CONFIGS } from "../types/components/sonner";

// Use createHandler to load the version-specific implementation
// We cast it to any because the internal props might differ slightly from the wrapper props
const VersionedSonner = createHandler<any>({
  componentName: "sonner",
  exportName: "Toaster"
});

/**
 * Calculate toast duration from seconds to milliseconds
 */
const calculateDuration = (duration?: number, type?: SonnerType): number => {
  if (type === "loader" && duration) {
    return duration * 1000;
  }
  return 4000;
};

/**
 * Get toast options based on type and variant
 */
const getToastOptions = (
  type?: SonnerType,
  variant?: string,
  duration?: number
): Partial<typeof SonnerToaster> => {
  const toastDuration = calculateDuration(duration, type);

  const baseOptions = {
    duration: toastDuration,
  };

  const typeConfigs: Record<SonnerType, any> = {
    default: {},
    filled: { className: "sonner-toast-filled" },
    outline: { className: "sonner-toast-outline" },
    minimal: { className: "sonner-toast-minimal" },
    loader: {
      className: "sonner-toast-loader",
      duration: toastDuration,
    },
  };

  return {
    ...baseOptions,
    ...(type && typeConfigs[type]),
  };
};

export const SonnerHandler = React.forwardRef<HTMLDivElement, SonnerProps>(
  (
    {
      version = "default",
      type = "default",
      variant = "neutral",
      position = "bottom-right",
      duration = 4,
      showLoader = true,
      max = 5,
      className = "",
      effects,
      ...props
    },
    ref
  ) => {
    // Get version config
    const versionConfig = React.useMemo(() => {
      return SONNER_VERSION_CONFIGS[version as SonnerVersion] || SONNER_VERSION_CONFIGS.default;
    }, [version]);

    // Get toast options
    const toastOptions = React.useMemo(() => {
      return getToastOptions(type, variant, duration);
    }, [type, variant, duration]);

    return (
      <VersionedSonner
        ref={ref}
        version={version}
        type={type}
        variant={variant}
        position={position}
        duration={duration}
        showLoader={showLoader}
        max={max}
        effects={effects}
        versionConfig={versionConfig}
        toastOptions={toastOptions}
        className={className}
        {...props}
      />
    );
  }
);

SonnerHandler.displayName = "SonnerHandler";

export default SonnerHandler;


export type { BaseUIProps };
