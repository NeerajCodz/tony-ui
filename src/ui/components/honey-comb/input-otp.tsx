import * as React from 'react';
import { OTPInput, OTPInputContext } from 'input-otp';
import { Dot } from 'lucide-react';
import { cn } from '@/lib/utils';
import { honeyCombEffectsClass, type HoneyCombEffects } from './_effects';


const InputOTP = React.forwardRef<
  React.ElementRef<typeof OTPInput>,
  React.ComponentPropsWithoutRef<typeof OTPInput> & { effects?: HoneyCombEffects }
>(({ className, effects = 'on', containerClassName, ...props }, ref) => (
  <OTPInput
    ref={ref}
    containerclassName={cn(honeyCombEffectsClass(effects), 
      'flex items-center gap-2 has-[:disabled]:opacity-50',
      containerClassName
    )}
    className={cn(honeyCombEffectsClass(effects), 'disabled:cursor-not-allowed', className)}
    {...props}
  />
));
InputOTP.displayName = 'InputOTP';

const InputOTPGroup = React.forwardRef<
  React.ElementRef<'div'>,
  React.ComponentPropsWithoutRef<'div'> & { effects?: HoneyCombEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <div ref={ref} className={cn(honeyCombEffectsClass(effects), 'flex items-center gap-1', className)} {...props} />
));
InputOTPGroup.displayName = 'InputOTPGroup';

const InputOTPSlot = React.forwardRef<
  React.ElementRef<'div'>,
  React.ComponentPropsWithoutRef<'div'> & { effects?: HoneyCombEffects } & { index: number }
>(({ index, className, ...props }, ref) => {
  const inputOTPContext = React.useContext(OTPInputContext);
  const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index];

  return (
    <div
      ref={ref}
      className={cn(honeyCombEffectsClass(effects), 
        'relative flex h-10 w-10 items-center justify-center border border-[var(--hc-hex-line)] bg-[var(--hc-surface)] text-sm transition-all font-["JetBrains_Mono"]',
        isActive && 'z-10 ring-1 ring-[var(--hc-plasma-1)] bg-[var(--hc-plasma-1)]/10',
        className
      )}
      style={{ '--corner': '6px' } as React.CSSProperties}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-4 w-px animate-caret-blink bg-[var(--hc-plasma-1)] duration-1000" />
        </div>
      )}
    </div>
  );
});
InputOTPSlot.displayName = 'InputOTPSlot';

const InputOTPSeparator = React.forwardRef<
  React.ElementRef<'div'>,
  React.ComponentPropsWithoutRef<'div'> & { effects?: HoneyCombEffects }
>(({ ...props }, ref) => (
  <div ref={ref} role="separator" {...props}>
    <Dot className="text-[var(--text-muted)]" />
  </div>
));
InputOTPSeparator.displayName = 'InputOTPSeparator';

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator };
