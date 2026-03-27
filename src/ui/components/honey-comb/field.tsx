
import * as React from "react";

import { cn } from "@/lib/utils";

export function Field({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("flex flex-col gap-2", className)}
      {...props}
    />
  )
}
