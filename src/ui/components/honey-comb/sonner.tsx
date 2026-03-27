import * as React from 'react';
import { Toaster as Sonner } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      theme="dark"
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-[var(--hc-surface)] group-[.toaster]:text-[var(--hc-text)] group-[.toaster]:border-[var(--hc-border)] group-[.toaster]:shadow-lg [clip-path:polygon(3%_0%,97%_0%,100%_15%,100%_85%,97%_100%,3%_100%,0%_85%,0%_15%)]",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
