import * as React from 'react';
import { Toaster as Sonner } from 'sonner';

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      className="toaster group font-mono"
      toastOptions={{
        classNames: {
          toast:
            'group toast group-[.toaster]:bg-[var(--cp-bg)] group-[.toaster]:text-[var(--text-primary)] group-[.toaster]:border-[var(--cp-border)] group-[.toaster]:shadow-lg',
          description: 'group-[.toast]:text-[var(--text-muted)]',
          actionButton:
            'group-[.toast]:bg-[var(--cp-accent)] group-[.toast]:text-[var(--cp-bg)]',
          cancelButton:
            'group-[.toast]:bg-[var(--cp-bg)] group-[.toast]:text-[var(--text-muted)]',
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
