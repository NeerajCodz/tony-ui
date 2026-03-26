"use client";

import * as React from "react";
import { createHandler } from "../core/create-handler";
import type { BaseUIProps } from "../types/common";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    version?: BaseUIProps["version"];
    variant?: BaseUIProps["variant"];
    effects?: string;
}

const Textarea = createHandler<TextareaProps & BaseUIProps>({
  componentName: "textarea",
  exportName: "Textarea"
});

Textarea.displayName = "Textarea";

export { Textarea };
export default Textarea;
export type { BaseUIProps };
