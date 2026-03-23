import { Toaster as Sonner } from 'sonner';

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      theme="system"
      className="toaster group font-mono"
      toastOptions={{
        classNames: {
          toast:
            'group toast group-[.toaster]:bg-[var(--ra-surface)] group-[.toaster]:text-[var(--ra-text)] group-[.toaster]:border-2 group-[.toaster]:border-[var(--ra-border)] group-[.toaster]:shadow-[8px_8px_0_var(--ra-shadow)] group-[.toaster]:rounded-[4px] group-[.toaster]:p-4',
          description: 'group-[.toast]:text-[var(--text-muted)]',
          actionButton:
            'group-[.toast]:bg-[var(--ra-accent)] group-[.toast]:text-white',
          cancelButton:
            'group-[.toast]:bg-[var(--ra-surface)] group-[.toast]:text-[var(--text-muted)]',
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
