import { honeyCombEffectsClass, type HoneyCombEffects } from './_effects';
import { Toaster as Sonner } from 'sonner';

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ effects = 'on', ...props }: ToasterProps & { effects?: HoneyCombEffects }) => {
  return (
    <Sonner
      className={honeyCombEffectsClass(effects) + ' toaster group font-["JetBrains_Mono"]'}
      toastOptions={{
        classNames: {
          toast:
            'group toast group-[.toaster]:bg-[var(--hc-surface)] group-[.toaster]:text-[var(--text-primary)] group-[.toaster]:border-[var(--hc-hex-line)] group-[.toaster]:shadow-lg',
          description: 'group-[.toast]:text-[var(--text-muted)]',
          actionButton:
            'group-[.toast]:bg-[var(--hc-plasma-1)] group-[.toast]:text-[var(--hc-bg)]',
          cancelButton:
            'group-[.toast]:bg-[var(--hc-surface)] group-[.toast]:text-[var(--text-muted)]',
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
