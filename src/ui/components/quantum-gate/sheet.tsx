import * as React from 'react';
import * as SheetPrimitive from '@radix-ui/react-dialog';
import { cva, type VariantProps } from 'class-variance-authority';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { quantumGateEffectsClass, type QuantumGateEffects } from './_effects';

const Sheet = SheetPrimitive.Root;

const SheetTrigger = SheetPrimitive.Trigger;

const SheetClose = SheetPrimitive.Close;

const SheetPortal = SheetPrimitive.Portal;


const SheetOverlay = React.forwardRef<
  React.ComponentRef<typeof SheetPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay> & { effects?: QuantumGateEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <SheetPrimitive.Overlay
    className={cn(quantumGateEffectsClass(effects), 
      'fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
      className
    )}
    {...props}
    ref={ref}
  />
));
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;

const sheetVariants = cva(
  'fixed z-50 gap-4 bg-(--qg-surface) p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-400 data-[state=open]:duration-500 border-(--qg-border) text-(--text-primary)',
  {
    variants: {
      side: {
        top: 'inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top',
        bottom:
          'inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom',
        left: 'inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm',
        right:
          'inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm',
      },
    },
    defaultVariants: {
      side: 'right',
    },
  }
);

type SheetPrimitiveContentProps = React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>;

interface SheetContentProps
  extends SheetPrimitiveContentProps,
    VariantProps<typeof sheetVariants> {
  effects?: QuantumGateEffects;
}

const getClipPath = (side: 'top' | 'bottom' | 'left' | 'right') => {
  switch (side) {
    case 'left': return 'polygon(0 0, calc(100% - var(--fold)) 0, 100% var(--fold), 100% calc(100% - var(--fold)), calc(100% - var(--fold)) 100%, 0 100%)';
    case 'right': return 'polygon(var(--fold) 0, 100% 0, 100% 100%, var(--fold) 100%, 0 calc(100% - var(--fold)), 0 var(--fold))';
    case 'top': return 'polygon(0 0, 100% 0, 100% calc(100% - var(--fold)), calc(100% - var(--fold)) 100%, var(--fold) 100%, 0 calc(100% - var(--fold)))';
    case 'bottom': return 'polygon(0 var(--fold), var(--fold) 0, calc(100% - var(--fold)) 0, 100% var(--fold), 100% 100%, 0 100%)';
    default: return 'none';
  }
};

const SheetContent = React.forwardRef<
  React.ComponentRef<typeof SheetPrimitive.Content>,
  SheetContentProps
>(({ side = 'right', className, children, effects = 'on', ...props }, ref) => (
  <SheetPortal>
    <SheetOverlay />
    <SheetPrimitive.Content
      ref={ref}
      className={cn(quantumGateEffectsClass(effects), sheetVariants({ side }), 
        'relative before:absolute before:inset-0 before:bg-linear-to-br before:from-(--qg-iris-1)/5 before:to-(--qg-iris-2)/5 before:pointer-events-none',
        className
      )}
      style={{ 
        '--fold': '20px', 
        clipPath: getClipPath(side || 'right')
      } as React.CSSProperties}
      {...props}
    >
      {children}
      <SheetPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-(--qg-bg) transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-(--qg-iris-1) focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-(--qg-iris-1) data-[state=open]:text-(--qg-bg) text-(--text-muted) hover:text-(--qg-iris-1)">
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </SheetPrimitive.Close>
    </SheetPrimitive.Content>
  </SheetPortal>
));
SheetContent.displayName = SheetPrimitive.Content.displayName;

const SheetHeader = ({
  className,
  effects = 'on',
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { effects?: QuantumGateEffects }) => (
  <div
    className={cn(quantumGateEffectsClass(effects), 
      'flex flex-col space-y-2 text-center sm:text-left',
      className
    )}
    {...props}
  />
);
SheetHeader.displayName = 'SheetHeader';

const SheetFooter = ({
  className,
  effects = 'on',
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { effects?: QuantumGateEffects }) => (
  <div
    className={cn(quantumGateEffectsClass(effects), 
      'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2',
      className
    )}
    {...props}
  />
);
SheetFooter.displayName = 'SheetFooter';

const SheetTitle = React.forwardRef<
  React.ComponentRef<typeof SheetPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title> & { effects?: QuantumGateEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <SheetPrimitive.Title
    ref={ref}
    className={cn(quantumGateEffectsClass(effects), 
      'text-lg font-bold font-sans uppercase text-(--qg-iris-1)',
      className
    )}
    {...props}
  />
));
SheetTitle.displayName = SheetPrimitive.Title.displayName;

const SheetDescription = React.forwardRef<
  React.ComponentRef<typeof SheetPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description> & { effects?: QuantumGateEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <SheetPrimitive.Description
    ref={ref}
    className={cn(quantumGateEffectsClass(effects), 'text-sm text-(--text-muted) font-sans', className)}
    {...props}
  />
));
SheetDescription.displayName = SheetPrimitive.Description.displayName;

export {
  Sheet,
  SheetPortal,
  SheetOverlay,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
};
