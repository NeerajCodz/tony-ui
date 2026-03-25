import * as React from 'react';
import { energyShieldEffectsClass, type EnergyShieldEffects } from './_effects';
import { Toaster as Sonner } from 'sonner';
import type { SonnerBaseProps } from '../_base/sonner';

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ effects = 'on', ...props }: ToasterProps & { effects?: EnergyShieldEffects }) => {
  return (
    <Sonner
      className={energyShieldEffectsClass(effects) + ' toaster group font-mono'}
      toastOptions={{
        classNames: {
          toast:
            'group toast group-[.toaster]:bg-[var(--es-surface)] group-[.toaster]:text-[var(--text-primary)] group-[.toaster]:border-[var(--es-hex-line)] group-[.toaster]:shadow-lg',
          description: 'group-[.toast]:text-[var(--text-muted)]',
          actionButton:
            'group-[.toast]:bg-[var(--es-plasma-1)] group-[.toast]:text-[var(--es-bg)]',
          cancelButton:
            'group-[.toast]:bg-[var(--es-surface)] group-[.toast]:text-[var(--text-muted)]',
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
