import * as React from "react"
import type { EmptyBaseProps } from '../_base/empty';

import { cn } from "@/lib/utils"

interface EmptyProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode
  title: string
  description?: string
  action?: React.ReactNode
}

function Empty({
  className,
  icon,
  title,
  description,
  action,
  ...props
}: EmptyProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center p-8 text-center font-sans",
        "bg-[rgba(255,255,255,0.02)] rounded-[8px]",
        className
      )}
      {...props}
    >
      {icon && (
        <div className="mb-4 text-[var(--pd-muted)] opacity-50 [&>svg]:w-10 [&>svg]:h-10">
          {icon}
        </div>
      )}
      <h3 className="text-lg font-serif font-medium text-[var(--pd-text)]">
        {title}
      </h3>
      {description && (
        <p className="mt-2 text-sm text-[var(--pd-muted)] max-w-sm">
          {description}
        </p>
      )}
      {action && <div className="mt-6">{action}</div>}
    </div>
  )
}

export { Empty }
