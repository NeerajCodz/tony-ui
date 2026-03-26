"use client";

import * as React from "react";
import { createHandler } from "../core/create-handler";
import type { BaseUIProps } from "../types/common";

export interface ButtonGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  version?: BaseUIProps["version"];
  variant?: BaseUIProps["variant"];
  effects?: string;
  orientation?: "horizontal" | "vertical";
}

const ButtonGroupHandler = createHandler<ButtonGroupProps & BaseUIProps>({
  componentName: "button-group",
  exportName: "ButtonGroup"
});

const ButtonGroup = React.forwardRef<HTMLDivElement, ButtonGroupProps>(
  ({ className, orientation = "horizontal", ...props }, ref) => (
    <ButtonGroupHandler
      ref={ref}
      orientation={orientation}
      className={className}
      {...props}
    />
  )
);
ButtonGroup.displayName = "ButtonGroup";

export { ButtonGroup };
export default ButtonGroup;


export type { BaseUIProps };
