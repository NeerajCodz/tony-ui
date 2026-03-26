'use client';

"use client";

import * as React from "react";
import { createHandler } from "../core/create-handler";
import type { BaseUIProps } from "../types/common";

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  version?: BaseUIProps["version"];
  variant?: BaseUIProps["variant"];
  effects?: string;
}

export interface AlertTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}
export interface AlertDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {}

const AlertHandler = createHandler<AlertProps & BaseUIProps>({
  componentName: "alert",
  exportName: "Alert"
});

const AlertTitleHandler = createHandler<AlertTitleProps & BaseUIProps>({
  componentName: "alert",
  exportName: "AlertTitle"
});

const AlertDescriptionHandler = createHandler<AlertDescriptionProps & BaseUIProps>({
  componentName: "alert",
  exportName: "AlertDescription"
});

const AlertContext = React.createContext<{
  version?: BaseUIProps['version'];
  variant?: BaseUIProps['variant'];
  effects?: string;
}>({});

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ version = "default", variant = "default", effects, ...props }, ref) => {
    return (
      <AlertContext.Provider value={{ version, variant, effects }}>
        <AlertHandler
          ref={ref}
          version={version}
          variant={variant}
          effects={effects}
          {...props}
        />
      </AlertContext.Provider>
    );
  }
);
Alert.displayName = "Alert";

const AlertTitle = React.forwardRef<HTMLHeadingElement, AlertTitleProps & BaseUIProps>(
  ({ className, ...props }, ref) => {
    const context = React.useContext(AlertContext);
    return (
      <AlertTitleHandler
        ref={ref}
        className={className}
        version={context.version}
        variant={context.variant}
        effects={context.effects}
        {...props}
      />
    );
  }
);
AlertTitle.displayName = "AlertTitle";

const AlertDescription = React.forwardRef<HTMLParagraphElement, AlertDescriptionProps & BaseUIProps>(
  ({ className, ...props }, ref) => {
    const context = React.useContext(AlertContext);
    return (
      <AlertDescriptionHandler
        ref={ref}
        className={className}
        version={context.version}
        variant={context.variant}
        effects={context.effects}
        {...props}
      />
    );
  }
);
AlertDescription.displayName = "AlertDescription";

const AlertExport = Object.assign(Alert, {
  Title: AlertTitle,
  Description: AlertDescription,
});

export { AlertExport as Alert, AlertTitle, AlertDescription };
export default AlertExport;

