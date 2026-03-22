import { Toaster as Sonner } from 'sonner';

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      className="toaster group font-mono"
      toastOptions={{
        classNames: {
          toast:
            'group toast group-[.toaster]:bg-[var(--ac-surface)] group-[.toaster]:text-[var(--text-primary)] group-[.toaster]:border-[var(--ac-border)] group-[.toaster]:shadow-lg',
          description: 'group-[.toast]:text-[var(--text-muted)]',
          actionButton:
            'group-[.toast]:bg-[var(--ac-accent)] group-[.toast]:text-[var(--ac-bg)]',
          cancelButton:
            'group-[.toast]:bg-[var(--ac-surface)] group-[.toast]:text-[var(--text-muted)]',
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
