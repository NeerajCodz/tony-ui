"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";
import { createHandler } from "../core/create-handler";
import type { BaseUIProps } from "../types/common";

export interface PaginationProps extends React.ComponentProps<"nav"> {
  version?: BaseUIProps["version"];
  variant?: BaseUIProps["variant"];
  effects?: string;
}

const PaginationContentHandler = createHandler<React.ComponentProps<"ul"> & BaseUIProps>({
  componentName: "pagination",
  exportName: "PaginationContent"
});

const PaginationItemHandler = createHandler<React.ComponentProps<"li"> & BaseUIProps>({
  componentName: "pagination",
  exportName: "PaginationItem"
});

const PaginationLinkHandler = createHandler<React.ComponentProps<"a"> & BaseUIProps & { isActive?: boolean; size?: string }>({
  componentName: "pagination",
  exportName: "PaginationLink"
});

const PaginationPreviousHandler = createHandler<React.ComponentProps<typeof PaginationLinkHandler> & BaseUIProps>({
  componentName: "pagination",
  exportName: "PaginationPrevious"
});

const PaginationNextHandler = createHandler<React.ComponentProps<typeof PaginationLinkHandler> & BaseUIProps>({
  componentName: "pagination",
  exportName: "PaginationNext"
});

const PaginationEllipsisHandler = createHandler<React.ComponentProps<"span"> & BaseUIProps>({
  componentName: "pagination",
  exportName: "PaginationEllipsis"
});

const PaginationContext = React.createContext<{
  version?: BaseUIProps['version'];
  variant?: BaseUIProps['variant'];
  effects?: string;
}>({});

const Pagination = ({ className, version = "default", variant = "default", effects, ...props }: PaginationProps) => (
  <PaginationContext.Provider value={{ version, variant, effects }}>
    <nav
      role="navigation"
      aria-label="pagination"
      className={`mx-auto flex w-full justify-center ${className || ""}`}
      {...props}
    />
  </PaginationContext.Provider>
);
Pagination.displayName = "Pagination";

const PaginationContent = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<"ul"> & BaseUIProps
>(({ className, ...props }, ref) => {
  const context = React.useContext(PaginationContext);
  return (
    <PaginationContentHandler
      ref={ref}
      className={`flex flex-row items-center gap-1 ${className || ""}`}
      version={context.version}
      variant={context.variant}
      effects={context.effects}
      {...props}
    />
  );
});
PaginationContent.displayName = "PaginationContent";

const PaginationItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<"li"> & BaseUIProps
>(({ className, ...props }, ref) => {
  const context = React.useContext(PaginationContext);
  return (
    <PaginationItemHandler
      ref={ref}
      className={className}
      version={context.version}
      variant={context.variant}
      effects={context.effects}
      {...props}
    />
  );
});
PaginationItem.displayName = "PaginationItem";

type PaginationLinkProps = {
  isActive?: boolean;
} & React.ComponentProps<"a"> & BaseUIProps;

const PaginationLink = ({
  className,
  isActive,
  size = "icon",
  ...props
}: PaginationLinkProps) => {
  const context = React.useContext(PaginationContext);
  return (
    <PaginationLinkHandler
      aria-current={isActive ? "page" : undefined}
      className={className}
      isActive={isActive}
      size={size}
      version={context.version}
      variant={context.variant}
      effects={context.effects}
      {...props}
    />
  );
};
PaginationLink.displayName = "PaginationLink";

const PaginationPrevious = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => {
  const context = React.useContext(PaginationContext);
  return (
    <PaginationPreviousHandler
      aria-label="Go to previous page"
      size="default"
      className={`gap-1 pl-2.5 ${className || ""}`}
      version={context.version}
      variant={context.variant}
      effects={context.effects}
      {...props}
    >
      <ChevronLeft className="h-4 w-4" />
      <span>Previous</span>
    </PaginationPreviousHandler>
  );
};
PaginationPrevious.displayName = "PaginationPrevious";

const PaginationNext = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => {
  const context = React.useContext(PaginationContext);
  return (
    <PaginationNextHandler
      aria-label="Go to next page"
      size="default"
      className={`gap-1 pr-2.5 ${className || ""}`}
      version={context.version}
      variant={context.variant}
      effects={context.effects}
      {...props}
    >
      <span>Next</span>
      <ChevronRight className="h-4 w-4" />
    </PaginationNextHandler>
  );
};
PaginationNext.displayName = "PaginationNext";

const PaginationEllipsis = ({
  className,
  ...props
}: React.ComponentProps<"span"> & BaseUIProps) => {
  const context = React.useContext(PaginationContext);
  return (
    <PaginationEllipsisHandler
      aria-hidden
      className={`flex h-9 w-9 items-center justify-center ${className || ""}`}
      version={context.version}
      variant={context.variant}
      effects={context.effects}
      {...props}
    >
      <MoreHorizontal className="h-4 w-4" />
      <span className="sr-only">More pages</span>
    </PaginationEllipsisHandler>
  );
};
PaginationEllipsis.displayName = "PaginationEllipsis";

const PaginationExport = Object.assign(Pagination, {
  Content: PaginationContent,
  Item: PaginationItem,
  Link: PaginationLink,
  Previous: PaginationPrevious,
  Next: PaginationNext,
  Ellipsis: PaginationEllipsis,
});

export {
  PaginationExport as Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
};
export default PaginationExport;



export type { BaseUIProps };
