import * as React from 'react';
import { OTPInput, OTPInputContext } from '../_base/input-otp';
import { Dot } from 'lucide-react';
import { cn } from '@/lib/utils';
import { quantumGateEffectsClass, type QuantumGateEffects } from './_effects';


const InputOTP = React.forwardRef<
  React.ComponentRef<typeof OTPInput>,
  React.ComponentPropsWithoutRef<typeof OTPInput> & { effects?: QuantumGateEffects }
>(({ className, effects = 'on', containerClassName, ...props }, ref) => (
  <OTPInput
    ref={ref}
    containerClassName={cn(quantumGateEffectsClass(effects), 
      'flex items-center gap-2 has-[:disabled]:opacity-50',
      containerClassName
    )}
    className={cn(quantumGateEffectsClass(effects), 'disabled:cursor-not-allowed', className)}
    {...props}
  />
));
InputOTP.displayName = 'InputOTP';

const InputOTPGroup = React.forwardRef<
  React.ComponentRef<'div'>,
  React.ComponentPropsWithoutRef<'div'> & { effects?: QuantumGateEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <div ref={ref} className={cn(quantumGateEffectsClass(effects), 'flex items-center gap-1', className)} {...props} />
));
InputOTPGroup.displayName = 'InputOTPGroup';

const InputOTPSlot = React.forwardRef<
  React.ComponentRef<'div'>,
  React.ComponentPropsWithoutRef<'div'> & { effects?: QuantumGateEffects } & { index: number }
>(({ index, className, effects = 'on', ...props }, ref) => {
  const inputOTPContext = React.useContext(OTPInputContext);
  const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index];

  return (
    <div
      ref={ref}
      className={cn(quantumGateEffectsClass(effects), 
        'relative flex h-10 w-10 items-center justify-center border border-[var(--qg-border)] bg-[var(--qg-surface)] text-sm transition-all font-sans',
        isActive && 'z-10 ring-1 ring-[var(--qg-iris-1)] bg-[var(--qg-iris-1)]/10',
        className
      )}
      style={{ '--corner': '6px' } as React.CSSProperties}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-4 w-px animate-caret-blink bg-[var(--qg-iris-1)] duration-1000" />
        </div>
      )}
    </div>
  );
});
InputOTPSlot.displayName = 'InputOTPSlot';

const InputOTPSeparator = React.forwardRef<
  React.ComponentRef<'div'>,
  React.ComponentPropsWithoutRef<'div'> & { effects?: QuantumGateEffects }
>(({ ...props }, ref) => (
  <div ref={ref} role="separator" {...props}>
    <Dot className="text-[var(--text-muted)]" />
  </div>
));
InputOTPSeparator.displayName = 'InputOTPSeparator';

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator };

