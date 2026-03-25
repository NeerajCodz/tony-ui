import { SonnerBase } from '@/ui/components/_base/sonner';
import { cn } from '@/lib/utils';

type ToasterProps = React.ComponentProps<typeof SonnerBase>;

const Toaster = ({ className, effects = true, ...props }: ToasterProps & { effects?: boolean }) => (
  <SonnerBase
    className={cn('toaster group', className)}
    toastOptions={{
      classNames: {
        toast: cn(
          'group toast group-[.toaster]:bg-[var(--ne-bg)] group-[.toaster]:text-[var(--ne-text)] group-[.toaster]:border-2 group-[.toaster]:border-[var(--ne-primary)] rounded-none font-body tracking-wide',
          effects && 'group-[.toaster]:shadow-[0_0_10px_var(--ne-primary)]'
        ),
        description: 'group-[.toast]:text-[var(--ne-text)]/70',
        actionButton:
          'group-[.toast]:bg-[var(--ne-primary)] group-[.toast]:text-[var(--ne-bg)] rounded-none font-display uppercase tracking-widest',
        cancelButton:
          'group-[.toast]:bg-[var(--ne-secondary)] group-[.toast]:text-[var(--ne-bg)] rounded-none font-display uppercase tracking-widest',
      },
    }}
    {...props}
  />
);

export { Toaster };
