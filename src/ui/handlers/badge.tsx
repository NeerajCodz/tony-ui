"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { createHandler } from "../core/create-handler";
import type { BaseUIProps } from "../types/common";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  version?: BaseUIProps["version"];
  variant?: "default" | "secondary" | "destructive" | "outline";
  effects?: string;
}

const BadgeHandler = createHandler<BadgeProps & BaseUIProps>({
  componentName: "badge",
  exportName: "Badge"
});

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant, ...props }, ref) => (
    <BadgeHandler
      ref={ref}
      className={className}
      variant={variant}
      {...props}
    />
  )
);
Badge.displayName = "Badge";

export { Badge, badgeVariants };
export default Badge;


export type { BaseUIProps };
