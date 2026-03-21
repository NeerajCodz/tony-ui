'use client';

import React, { forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { VariantColors } from '@/ui/types/common';
import { PaginationBase, PaginationContentBase, PaginationItemBase, PaginationLinkBase, PaginationPreviousBase, PaginationNextBase, PaginationEllipsisBase } from '../_base/pagination';

const getStyles = (type?: string, colors?: VariantColors) => {
  if (!type || !colors) return {};
  
  switch (type) {
    case 'inverse':
      return {
        backgroundColor: colors.text,
        color: colors.background,
        border: `1px solid ${colors.text}`
      };
    case 'contrast':
      return {
        backgroundColor: colors.accent?.primary || colors.text,
        color: '#000000',
        fontWeight: 'bold',
        border: `1px solid ${colors.text}`
      };
    case 'soft':
      return {
        backgroundColor: colors.accent?.rgb ? `rgba(${colors?.accent?.rgb}, 0.1)` : (colors.accent?.primary ? `color-mix(in srgb, ${colors?.accent?.primary} 10%, transparent)` : 'rgba(0,0,0,0.1)'),
        color: colors.accent?.primary || colors.text,
        border: 'none'
      };
    default:
      return {};
  }
};


interface PaginationProps extends React.HTMLAttributes<HTMLElement> {
  version?: string;
  variant?: string;
  type?: string;
  colors?: VariantColors;
}

const Pagination = forwardRef<HTMLElement, PaginationProps>(({ className, type, colors, ...props }, ref) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={cn("mx-auto flex w-full justify-center", className)}
    ref={ref}
    {...props} style={{ ...getStyles(type, colors), ...(props.style as any) }}
  />
));
Pagination.displayName = "Pagination";

const PaginationContent = forwardRef<HTMLUListElement, React.HTMLAttributes<HTMLUListElement>>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn("flex flex-row items-center gap-1", className)}
    {...props}
  />
));
PaginationContent.displayName = "PaginationContent";

const PaginationItem = forwardRef<HTMLLIElement, React.LiHTMLAttributes<HTMLLIElement>>(({ className, ...props }, ref) => (
  <li ref={ref} className={cn("", className)} {...props} />
));
PaginationItem.displayName = "PaginationItem";

type PaginationLinkProps = {
  isActive?: boolean;
} & React.ComponentProps<"a">;

const PaginationLink = ({
  className,
  isActive,
  size = "icon",
  ...props
}: PaginationLinkProps & { size?: "default" | "sm" | "icon" }) => (
  <a
    aria-current={isActive ? "page" : undefined}
    className={cn(
      "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
      isActive ? "bg-accent text-accent-foreground border" : "hover:bg-accent hover:text-accent-foreground",
      size === "default" && "h-10 px-4 py-2",
      size === "sm" && "h-9 rounded-md px-3",
      size === "icon" && "h-10 w-10",
      className
    )}
    {...props}
  />
);
PaginationLink.displayName = "PaginationLink";

const PaginationPrevious = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLinkBase    aria-label="Go to previous page"
    size="default"
    className={cn("gap-1 pl-2.5", className)}
    {...props}
  >
    <span>&laquo;</span>
    <span>Previous</span>
  </PaginationLinkBase>
);
PaginationPrevious.displayName = "PaginationPrevious";

const PaginationNext = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLinkBase    aria-label="Go to next page"
    size="default"
    className={cn("gap-1 pr-2.5", className)}
    {...props}
  >
    <span>Next</span>
    <span>&raquo;</span>
  </PaginationLinkBase>
);
PaginationNext.displayName = "PaginationNext";

const PaginationEllipsis = ({
  className,
  ...props
}: React.ComponentProps<"span">) => (
  <span
    aria-hidden
    className={cn("flex h-9 w-9 items-center justify-center", className)}
    {...props}
  >
    ...
  </span>
);
PaginationEllipsis.displayName = "PaginationEllipsis";

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
};
