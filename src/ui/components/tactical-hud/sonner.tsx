import * as React from 'react';
import { tacticalHudEffectsClass, type TacticalHudEffects } from './_effects';
import { Toaster as Sonner } from 'sonner';
import type { SonnerBaseProps } from '../_base/sonner';

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ effects = 'on', ...props }: ToasterProps & { effects?: TacticalHudEffects }) => {
  return (
    <Sonner
      className={tacticalHudEffectsClass(effects) + ' toaster group font-sans'}
      toastOptions={{
        classNames: {
          toast:
            'group toast group-[.toaster]:bg-[var(--th-surface)] group-[.toaster]:text-[var(--text-primary)] group-[.toaster]:border-[var(--th-hex-line)] group-[.toaster]:shadow-lg',
          description: 'group-[.toast]:text-[var(--text-muted)]',
          actionButton:
            'group-[.toast]:bg-[var(--th-plasma-1)] group-[.toast]:text-[var(--th-bg)]',
          cancelButton:
            'group-[.toast]:bg-[var(--th-surface)] group-[.toast]:text-[var(--text-muted)]',
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
