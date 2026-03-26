'use client';

"use client";

import * as React from "react";
import { createHandler } from "../core/create-handler";
import type { BaseUIProps } from "../types/common";

export interface DigitalClockProps extends React.HTMLAttributes<HTMLDivElement> {
  version?: BaseUIProps["version"];
  variant?: BaseUIProps["variant"];
  effects?: string;
  type?: BaseUIProps["uiType"];
}

const DigitalClockHandler = createHandler<DigitalClockProps & BaseUIProps>({
  componentName: "digital-clock",
  exportName: "DigitalClock"
});

const DigitalClock = React.forwardRef<HTMLDivElement, DigitalClockProps>(
  ({ version = "default", variant = "default", effects, type = "default", ...props }, ref) => {
    return (
      <DigitalClockHandler
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
DigitalClock.displayName = "DigitalClock";

export { DigitalClock };
export default DigitalClock;


