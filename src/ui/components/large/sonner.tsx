import * as React from 'react';
import { Toaster as Sonner } from 'sonner';

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      theme="system"
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            'group toast group-[.toaster]:bg-[var(--lg-surface)] group-[.toaster]:text-[var(--lg-text)] group-[.toaster]:border-[var(--lg-border)] group-[.toaster]:shadow-lg group-[.toaster]:rounded-2xl group-[.toaster]:p-6',
          description: 'group-[.toast]:text-[var(--text-muted)]',
          actionButton:
            'group-[.toast]:bg-[var(--lg-accent)] group-[.toast]:text-white',
          cancelButton:
            'group-[.toast]:bg-[var(--lg-surface)] group-[.toast]:text-[var(--text-muted)]',
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
