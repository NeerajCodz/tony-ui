"use client";

import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { createHandler } from "../core/create-handler";
import type { BaseUIProps } from "../types/common";

export interface ProgressProps
  extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> {
  version?: BaseUIProps["version"];
  variant?: BaseUIProps["variant"];
  effects?: string;
}

const ProgressHandler = createHandler<ProgressProps & BaseUIProps>({
  componentName: "progress",
  exportName: "Progress"
});

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  ProgressProps
>(({ className, value, ...props }, ref) => (
  <ProgressHandler
    ref={ref}
    className={className}
    value={value}
    {...props}
  />
));
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
export default Progress;


export type { BaseUIProps };
