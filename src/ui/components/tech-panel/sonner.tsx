import * as React from 'react';
import { techPanelEffectsClass, type TechPanelEffects } from './_effects';
import { Toaster as Sonner } from 'sonner';
import type { SonnerBaseProps } from '../_base/sonner';

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ effects = 'on', ...props }: ToasterProps & { effects?: TechPanelEffects }) => {
  return (
    <Sonner
      className={techPanelEffectsClass(effects) + ' toaster group font-mono'}
      toastOptions={{
        classNames: {
          toast:
            'group toast group-[.toaster]:bg-[var(--tp-panel)] group-[.toaster]:text-[var(--text-primary)] group-[.toaster]:border-[var(--tp-border-outer)] group-[.toaster]:shadow-lg rounded-none',
          description: 'group-[.toast]:text-[var(--text-muted)]',
          actionButton:
            'group-[.toast]:bg-[var(--tp-accent)] group-[.toast]:text-[var(--tp-bg)]',
          cancelButton:
            'group-[.toast]:bg-[var(--tp-inset)] group-[.toast]:text-[var(--text-muted)]',
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
