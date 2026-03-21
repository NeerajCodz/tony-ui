import { SonnerBase } from '../_base/sonner'

const Toaster = ({ ...props }: React.ComponentProps<typeof SonnerBase>) => {
  return (
    <SonnerBase
      className='toaster group'
      toastOptions={{
        classNames: {
          toast:
            'group toast group-[.toaster]:bg-[var(--df-surface)] group-[.toaster]:text-[var(--df-text)] group-[.toaster]:border-[var(--df-border)] group-[.toaster]:shadow-lg',
          description: 'group-[.toast]:text-[var(--df-muted-text)]',
          actionButton:
            'group-[.toast]:bg-[var(--df-text)] group-[.toast]:text-[var(--df-surface)]',
          cancelButton:
            'group-[.toast]:bg-[var(--df-muted)] group-[.toast]:text-[var(--df-text)]',
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
