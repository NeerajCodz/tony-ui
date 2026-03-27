import * as React from 'react';
import { Toaster as Sonner } from 'sonner';
import { terminalWindowEffectsClass, type TerminalWindowEffects } from './_effects';

type ToasterProps = React.ComponentProps<typeof Sonner> & { effects?: TerminalWindowEffects };

const Toaster = ({ effects = 'on', ...props }: ToasterProps) => {
  return (
    <Sonner
      className={terminalWindowEffectsClass(effects)}
      toastOptions={{
        classNames: {
          toast:
            'group toast group-[.toaster]:bg-[var(--tm-bg)] group-[.toaster]:text-[var(--tm-phosphor)] group-[.toaster]:border-[var(--tm-phosphor)] group-[.toaster]:shadow-lg group-[.toaster]:rounded-none group-[.toaster]:font-mono',
          description: 'group-[.toast]:text-[var(--tm-phosphor-dim)]',
          actionButton:
            'group-[.toast]:bg-[var(--tm-phosphor)] group-[.toast]:text-[var(--tm-bg)] group-[.toast]:rounded-none',
          cancelButton:
            'group-[.toast]:bg-[var(--tm-phosphor)]/10 group-[.toast]:text-[var(--tm-phosphor)] group-[.toast]:rounded-none',
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
