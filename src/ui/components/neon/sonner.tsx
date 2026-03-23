"use client"

import { useTheme } from "next-themes"
import { Toaster as Sonner } from "sonner"

type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-[var(--ne-bg)] group-[.toaster]:text-[var(--ne-text-primary)] group-[.toaster]:border-2 group-[.toaster]:border-[var(--ne-primary)] group-[.toaster]:shadow-[0_0_15px_var(--ne-primary),inset_0_0_10px_var(--ne-primary)] group-[.toaster]:rounded-none group-[.toaster]:font-body",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-[var(--ne-primary)] group-[.toast]:text-[var(--ne-bg)] group-[.toast]:font-display group-[.toast]:uppercase group-[.toast]:tracking-wider",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground group-[.toast]:font-display group-[.toast]:uppercase group-[.toast]:tracking-wider",
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
