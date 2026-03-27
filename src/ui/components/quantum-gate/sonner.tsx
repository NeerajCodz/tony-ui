import * as React from 'react';
import { quantumGateEffectsClass, type QuantumGateEffects } from './_effects';
import { Toaster as Sonner } from 'sonner';

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ effects = 'on', ...props }: ToasterProps & { effects?: QuantumGateEffects }) => {
  return (
    <Sonner
      className={quantumGateEffectsClass(effects) + ' toaster group font-sans'}
      toastOptions={{
        classNames: {
          toast:
            'group toast group-[.toaster]:bg-[var(--qg-surface)] group-[.toaster]:text-[var(--text-primary)] group-[.toaster]:border-[var(--qg-border)] group-[.toaster]:shadow-lg',
          description: 'group-[.toast]:text-[var(--text-muted)]',
          actionButton:
            'group-[.toast]:bg-[var(--qg-iris-1)] group-[.toast]:text-[var(--qg-bg)]',
          cancelButton:
            'group-[.toast]:bg-[var(--qg-surface)] group-[.toast]:text-[var(--text-muted)]',
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
