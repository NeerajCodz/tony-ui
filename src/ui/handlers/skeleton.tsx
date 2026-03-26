'use client';

"use client";

import * as React from "react";
import { createHandler } from "../core/create-handler";
import type { BaseUIProps } from "../types/common";

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  version?: BaseUIProps["version"];
  variant?: BaseUIProps["variant"];
  animated?: boolean;
  effects?: string;
}

const SkeletonHandler = createHandler<SkeletonProps & BaseUIProps>({
  componentName: "skeleton",
  exportName: "Skeleton"
});

const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  ({ version = "default", variant = "default", effects, ...props }, ref) => {
    return (
      <SkeletonHandler
        ref={ref}
        version={version}
        variant={variant}
        effects={effects}
        {...props}
      />
    );
  }
);
Skeleton.displayName = "Skeleton";

export { Skeleton };
export default Skeleton;

