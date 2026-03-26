'use client';

"use client";

import * as React from "react";
import { createHandler } from "../core/create-handler";
import type { BaseUIProps } from "../types/common";

export interface AnalogClockProps extends React.SVGProps<SVGSVGElement> {
  version?: BaseUIProps["version"];
  variant?: BaseUIProps["variant"];
  effects?: string;
  type?: BaseUIProps["uiType"];
}

const AnalogClockHandler = createHandler<AnalogClockProps & BaseUIProps>({
  componentName: "analog-clock",
  exportName: "AnalogClock"
});

const AnalogClock = React.forwardRef<SVGSVGElement, AnalogClockProps>(
  ({ version = "default", variant = "default", effects, type = "default", ...props }, ref) => {
    return (
      <AnalogClockHandler
        ref={ref}
        version={version}
        variant={variant}
        effects={effects}
        uiType={type}
        {...props}
      />
    );
  }
);
AnalogClock.displayName = "AnalogClock";

export { AnalogClock };
export default AnalogClock;



export type { BaseUIProps };
