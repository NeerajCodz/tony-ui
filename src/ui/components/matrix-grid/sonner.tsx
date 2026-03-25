import { SonnerBase } from '@/ui/components/_base/sonner';

type ToasterProps = React.ComponentProps<typeof SonnerBase>;

const Toaster = ({ ...props }: ToasterProps) => (
  <SonnerBase
    className="toaster group"
    toastOptions={{
      classNames: {
        toast:
          'group toast group-[.toaster]:bg-[var(--mg-surface)] group-[.toaster]:text-[var(--mg-text)] group-[.toaster]:border-[var(--mg-border)] group-[.toaster]:shadow-lg group-[.toaster]:font-mono group-[.toaster]:uppercase group-[.toaster]:tracking-wide',
        description: 'group-[.toast]:text-muted-foreground',
        actionButton:
          'group-[.toast]:bg-[var(--mg-accent)] group-[.toast]:text-primary-foreground',
        cancelButton:
          'group-[.toast]:bg-muted group-[.toast]:text-muted-foreground',
      },
    }}
    {...props}
  />
);

export { Toaster };
