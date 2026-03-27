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
            'group toast group-[.toaster]:bg-[var(--br-bg)] group-[.toaster]:text-[var(--text-primary)] group-[.toaster]:border-[var(--br-border-dim)] group-[.toaster]:shadow-lg font-mono rounded-none',
          description: 'group-[.toast]:text-muted-foreground',
          actionButton:
            'group-[.toast]:bg-primary group-[.toast]:text-primary-foreground',
          cancelButton:
            'group-[.toast]:bg-muted group-[.toast]:text-muted-foreground',
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
