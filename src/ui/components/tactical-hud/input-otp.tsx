import * as React from 'react';
import { OTPInput, OTPInputContext } from 'input-otp';
import { Dot } from 'lucide-react';
import { cn } from '@/lib/utils';
import { tacticalHudEffectsClass, type TacticalHudEffects } from './_effects';


const InputOTP = React.forwardRef<
  React.ElementRef<typeof OTPInput>,
  React.ComponentPropsWithoutRef<typeof OTPInput> & { effects?: TacticalHudEffects }
>(({ className, effects = 'on', containerClassName, ...props }, ref) => (
  <OTPInput
    ref={ref}
    containerClassName={cn(tacticalHudEffectsClass(effects), 
      'flex items-center gap-2 has-[:disabled]:opacity-50',
      containerClassName
    )}
    className={cn(tacticalHudEffectsClass(effects), 'disabled:cursor-not-allowed', className)}
    {...props}
  />
));
InputOTP.displayName = 'InputOTP';

const InputOTPGroup = React.forwardRef<
  React.ElementRef<'div'>,
  React.ComponentPropsWithoutRef<'div'> & { effects?: TacticalHudEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <div ref={ref} className={cn(tacticalHudEffectsClass(effects), 'flex items-center gap-1', className)} {...props} />
));
InputOTPGroup.displayName = 'InputOTPGroup';

const InputOTPSlot = React.forwardRef<
  React.ElementRef<'div'>,
  React.ComponentPropsWithoutRef<'div'> & { effects?: TacticalHudEffects } & { index: number }
>(({ index, className, effects = 'on', ...props }, ref) => {
  const inputOTPContext = React.useContext(OTPInputContext);
  const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index];

  return (
    <div
      ref={ref}
      className={cn(tacticalHudEffectsClass(effects), 
        'relative flex h-10 w-10 items-center justify-center border border-[var(--th-hex-line)] bg-[var(--th-surface)] text-sm transition-all font-sans',
        isActive && 'z-10 ring-1 ring-[var(--th-plasma-1)] bg-[var(--th-plasma-1)]/10',
        className
      )}
      style={{ '--corner': '6px' } as React.CSSProperties}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-4 w-px animate-caret-blink bg-[var(--th-plasma-1)] duration-1000" />
        </div>
      )}
    </div>
  );
});
InputOTPSlot.displayName = 'InputOTPSlot';

const InputOTPSeparator = React.forwardRef<
  React.ElementRef<'div'>,
  React.ComponentPropsWithoutRef<'div'> & { effects?: TacticalHudEffects }
>(({ ...props }, ref) => (
  <div ref={ref} role="separator" {...props}>
    <Dot className="text-[var(--text-muted)]" />
  </div>
));
InputOTPSeparator.displayName = 'InputOTPSeparator';

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator };
