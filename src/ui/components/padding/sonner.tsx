import * as React from 'react';
import { SonnerBase } from '@/ui/components/_base/sonner';

type ToasterProps = React.ComponentProps<typeof SonnerBase>;

const Toaster = ({ ...props }: ToasterProps) => (
  <SonnerBase
    className="toaster group font-sans"
    toastOptions={{
      classNames: {
        toast:
          'group toast group-[.toaster]:bg-[var(--pd-bg)] group-[.toaster]:text-[var(--pd-text)] group-[.toaster]:border-transparent group-[.toaster]:shadow-xl group-[.toaster]:rounded-[8px] group-[.toaster]:p-6',
        description: 'group-[.toast]:text-[var(--pd-muted)]',
        actionButton:
          'group-[.toast]:bg-[var(--pd-accent)] group-[.toast]:text-white',
        cancelButton:
          'group-[.toast]:bg-[rgba(255,255,255,0.05)] group-[.toast]:text-[var(--pd-text)]',
      },
    }}
    {...props}
  />
);

export { Toaster };
