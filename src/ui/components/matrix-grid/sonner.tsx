"use client"

import { useTheme } from "next-themes"
import { Toaster as Sonner } from "sonner"

type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group font-mono"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-[var(--mg-surface)] group-[.toaster]:text-[var(--mg-text)] group-[.toaster]:border-[var(--mg-border)] group-[.toaster]:shadow-lg group-[.toaster]:rounded-none",
          description: "group-[.toast]:text-[var(--mg-text-dim)]",
          actionButton:
            "group-[.toast]:bg-[var(--mg-accent)] group-[.toast]:text-[var(--mg-bg)] group-[.toast]:rounded-none",
          cancelButton:
            "group-[.toast]:bg-[var(--mg-surface)] group-[.toast]:text-[var(--mg-text-dim)] group-[.toast]:rounded-none group-[.toast]:border-[var(--mg-border)]",
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
