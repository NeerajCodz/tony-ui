/**
 * Breadcrumb Component Handler - Version-First Architecture
 * Routes to version-specific implementations with lazy loading
 */

"use client";

import * as React from "react";
import { createHandler } from "../core/create-handler";
import type { BaseUIProps } from "../types/common";

export interface BreadcrumbProps extends React.ComponentPropsWithoutRef<"nav"> {
  version?: BaseUIProps["version"];
  variant?: BaseUIProps["variant"];
  effects?: string;
  separator?: React.ReactNode;
}

const BreadcrumbHandler = createHandler<BreadcrumbProps & BaseUIProps>({
  componentName: "breadcrumb",
  exportName: "Breadcrumb"
});

const BreadcrumbListHandler = createHandler<React.ComponentPropsWithoutRef<"ol"> & BaseUIProps>({
  componentName: "breadcrumb",
  exportName: "BreadcrumbList"
});

const BreadcrumbItemHandler = createHandler<React.ComponentPropsWithoutRef<"li"> & BaseUIProps>({
  componentName: "breadcrumb",
  exportName: "BreadcrumbItem"
});

const BreadcrumbLinkHandler = createHandler<React.ComponentPropsWithoutRef<"a"> & BaseUIProps & { asChild?: boolean }>({
  componentName: "breadcrumb",
  exportName: "BreadcrumbLink"
});

const BreadcrumbPageHandler = createHandler<React.ComponentPropsWithoutRef<"span"> & BaseUIProps>({
  componentName: "breadcrumb",
  exportName: "BreadcrumbPage"
});

const BreadcrumbSeparatorHandler = createHandler<React.ComponentPropsWithoutRef<"li"> & BaseUIProps>({
  componentName: "breadcrumb",
  exportName: "BreadcrumbSeparator"
});

const BreadcrumbEllipsisHandler = createHandler<React.ComponentPropsWithoutRef<"span"> & BaseUIProps>({
  componentName: "breadcrumb",
  exportName: "BreadcrumbEllipsis"
});

const BreadcrumbContext = React.createContext<{
  version?: BaseUIProps['version'];
  variant?: BaseUIProps['variant'];
  effects?: string;
}>({});

const Breadcrumb = React.forwardRef<HTMLElement, BreadcrumbProps>(
  ({ version = "default", variant = "default", effects, ...props }, ref) => {
    return (
      <BreadcrumbContext.Provider value={{ version, variant, effects }}>
        <BreadcrumbHandler
          ref={ref}
          version={version}
          variant={variant}
          effects={effects}
          {...props}
        />
      </BreadcrumbContext.Provider>
    );
  }
);
Breadcrumb.displayName = "Breadcrumb";

const BreadcrumbList = React.forwardRef<HTMLOListElement, React.ComponentPropsWithoutRef<"ol"> & BaseUIProps>(
  ({ className, ...props }, ref) => {
    const context = React.useContext(BreadcrumbContext);
    return (
      <BreadcrumbListHandler
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
BreadcrumbList.displayName = "BreadcrumbList";

const BreadcrumbItem = React.forwardRef<HTMLLIElement, React.ComponentPropsWithoutRef<"li"> & BaseUIProps>(
  ({ className, ...props }, ref) => {
    const context = React.useContext(BreadcrumbContext);
    return (
      <BreadcrumbItemHandler
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
BreadcrumbItem.displayName = "BreadcrumbItem";

const BreadcrumbLink = React.forwardRef<HTMLAnchorElement, React.ComponentPropsWithoutRef<"a"> & BaseUIProps & { asChild?: boolean }>(
  ({ className, asChild, ...props }, ref) => {
    const context = React.useContext(BreadcrumbContext);
    return (
      <BreadcrumbLinkHandler
        ref={ref}
        className={className}
        asChild={asChild}
        version={context.version}
        variant={context.variant}
        effects={context.effects}
        {...props}
      />
    );
  }
);
BreadcrumbLink.displayName = "BreadcrumbLink";

const BreadcrumbPage = React.forwardRef<HTMLSpanElement, React.ComponentPropsWithoutRef<"span"> & BaseUIProps>(
  ({ className, ...props }, ref) => {
    const context = React.useContext(BreadcrumbContext);
    return (
      <BreadcrumbPageHandler
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
BreadcrumbPage.displayName = "BreadcrumbPage";

const BreadcrumbSeparator = React.forwardRef<HTMLLIElement, React.ComponentPropsWithoutRef<"li"> & BaseUIProps>(
  ({ className, children, ...props }, ref) => {
    const context = React.useContext(BreadcrumbContext);
    return (
      <BreadcrumbSeparatorHandler
        ref={ref}
        className={className}
        version={context.version}
        variant={context.variant}
        effects={context.effects}
        {...props}
      >
        {children || "/"}
      </BreadcrumbSeparatorHandler>
    );
  }
);
BreadcrumbSeparator.displayName = "BreadcrumbSeparator";

const BreadcrumbEllipsis = React.forwardRef<HTMLSpanElement, React.ComponentPropsWithoutRef<"span"> & BaseUIProps>(
  ({ className, ...props }, ref) => {
    const context = React.useContext(BreadcrumbContext);
    return (
      <BreadcrumbEllipsisHandler
        ref={ref}
        className={className}
        version={context.version}
        variant={context.variant}
        effects={context.effects}
        {...props}
      >
        ...
        <span className="sr-only">More</span>
      </BreadcrumbEllipsisHandler>
    );
  }
);
BreadcrumbEllipsis.displayName = "BreadcrumbEllipsis";

const BreadcrumbExport = Object.assign(Breadcrumb, {
  List: BreadcrumbList,
  Item: BreadcrumbItem,
  Link: BreadcrumbLink,
  Page: BreadcrumbPage,
  Separator: BreadcrumbSeparator,
  Ellipsis: BreadcrumbEllipsis,
});

export {
  BreadcrumbExport as Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
};
export default BreadcrumbExport;


export type { BaseUIProps };
