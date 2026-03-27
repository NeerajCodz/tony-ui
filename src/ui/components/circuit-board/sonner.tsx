import { SonnerBase } from '@/ui/components/_base/sonner';
import * as React from 'react';

type ToasterProps = React.ComponentProps<typeof SonnerBase>;

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <SonnerBase
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            'group toast group-[.toaster]:bg-[var(--cb-soldermask)] group-[.toaster]:text-[var(--cb-trace-lit)] group-[.toaster]:border-[var(--cb-trace)] group-[.toaster]:shadow-[0_0_10px_var(--cb-trace)] font-mono rounded-none uppercase tracking-wide',
          description: 'group-[.toast]:text-[var(--cb-trace-dim)]',
          actionButton:
            'group-[.toast]:bg-[var(--cb-trace-lit)] group-[.toast]:text-[var(--cb-bg)]',
          cancelButton:
            'group-[.toast]:bg-[var(--cb-trace-dim)] group-[.toast]:text-[var(--cb-bg)]',
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
