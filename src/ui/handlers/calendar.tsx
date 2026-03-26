'use client';

"use client";

import * as React from "react";
import { createHandler } from "../core/create-handler";
import type { BaseUIProps } from "../types/common";

export interface CalendarProps extends React.HTMLAttributes<HTMLDivElement> {
  version?: BaseUIProps["version"];
  variant?: BaseUIProps["variant"];
  effects?: string;
  type?: BaseUIProps["uiType"];
  mode?: "single" | "range" | "multiple";
  selected?: any;
  onSelect?: any;
}

const CalendarHandler = createHandler<CalendarProps & BaseUIProps>({
  componentName: "calendar",
  exportName: "Calendar"
});

const Calendar = React.forwardRef<HTMLDivElement, CalendarProps>(
  ({ version = "default", variant = "default", effects, type = "default", ...props }, ref) => {
    return (
      <CalendarHandler
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
Calendar.displayName = "Calendar";

export { Calendar };
export default Calendar;

