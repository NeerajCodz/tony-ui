import * as React from 'react';
import { holoFrameEffectsClass, type HoloFrameEffects } from './_effects';
import { Toaster as Sonner } from 'sonner';

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ effects = 'on', ...props }: ToasterProps & { effects?: HoloFrameEffects }) => {
  return (
    <Sonner
      className={holoFrameEffectsClass(effects) + ' toaster group font-mono'}
      toastOptions={{
        classNames: {
          toast:
            'group toast group-[.toaster]:bg-[var(--hf-surface)] group-[.toaster]:text-[var(--hf-text)] group-[.toaster]:border-[var(--hf-border-dim)] group-[.toaster]:shadow-lg',
          description: 'group-[.toast]:text-[var(--hf-text)]',
          actionButton:
            'group-[.toast]:bg-[var(--hf-border-main)] group-[.toast]:text-[var(--hf-bg)]',
          cancelButton:
            'group-[.toast]:bg-[var(--hf-surface)] group-[.toast]:text-[var(--hf-text)]',
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
