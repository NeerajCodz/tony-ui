import { Toaster as Sonner } from "sonner"

type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      theme="system"
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-[var(--gl-glass-bg)]/80 group-[.toaster]:text-[var(--df-text)] group-[.toaster]:border-[var(--gl-glass-border)]/30 group-[.toaster]:shadow-lg group-[.toaster]:backdrop-blur-md font-sans",
          description: "group-[.toast]:text-[var(--df-muted-text)]",
          actionButton:
            "group-[.toast]:bg-[var(--df-accent)] group-[.toast]:text-[var(--df-accent-foreground)]",
          cancelButton:
            "group-[.toast]:bg-[var(--df-muted)] group-[.toast]:text-[var(--df-muted-foreground)]",
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
