"use client";

import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { createHandler } from "../core/create-handler";
import type { BaseUIProps } from "../types/common";

export interface SliderProps
  extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> {
    version?: BaseUIProps["version"];
    variant?: BaseUIProps["variant"];
    effects?: string;
}

const Slider = createHandler<SliderProps & BaseUIProps>({
  componentName: "slider",
  exportName: "Slider"
});

Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
export default Slider;
export type { BaseUIProps };
