import * as React from "react";
import { NativeSelectBase } from '../_base/native-select';

import { cn } from "@/lib/utils";

export interface NativeSelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {}

const NativeSelect = React.forwardRef<HTMLSelectElement, NativeSelectProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <NativeSelectBase
        className={cn(
          "flex h-10 w-full items-center justify-between rounded-none border border-[var(--hc-border)] bg-[var(--hc-surface)] px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 appearance-none",
          className
        )}
        style={{
            clipPath: "polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)",
        }}
        ref={ref}
        {...props}
      >
        {children}
      </NativeSelectBase>
    )
  }
)
NativeSelect.displayName = "NativeSelect"

export { NativeSelect }
