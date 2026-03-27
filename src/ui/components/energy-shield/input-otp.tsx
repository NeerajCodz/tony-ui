import { cn } from '@/lib/utils';
import { Dot } from 'lucide-react';
import * as React from 'react';
import { OTPInput, OTPInputContext } from '../_base/input-otp';
import { energyShieldEffectsClass, type EnergyShieldEffects } from './_effects';


const InputOTP = React.forwardRef<
  React.ComponentRef<typeof OTPInput>,
  React.ComponentPropsWithoutRef<typeof OTPInput> & { effects?: EnergyShieldEffects }
>(({ className, effects = 'on', containerClassName, ...props }, ref) => (
  <OTPInput
    ref={ref}
    containerClassName={cn(energyShieldEffectsClass(effects), 
      'flex items-center gap-2 has-[:disabled]:opacity-50',
      containerClassName
    )}
    className={cn(energyShieldEffectsClass(effects), 'disabled:cursor-not-allowed', className)}
    {...props}
  />
));
InputOTP.displayName = 'InputOTP';

const InputOTPGroup = React.forwardRef<
  React.ComponentRef<'div'>,
  React.ComponentPropsWithoutRef<'div'> & { effects?: EnergyShieldEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <div ref={ref} className={cn(energyShieldEffectsClass(effects), 'flex items-center gap-1', className)} {...props} />
));
InputOTPGroup.displayName = 'InputOTPGroup';

const InputOTPSlot = React.forwardRef<
  React.ComponentRef<'div'>,
  React.ComponentPropsWithoutRef<'div'> & { effects?: EnergyShieldEffects } & { index: number }
>(({ index, className, effects = 'on', ...props }, ref) => {
  const inputOTPContext = React.useContext(OTPInputContext);
  const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index];

  return (
    <div
      ref={ref}
      className={cn(energyShieldEffectsClass(effects), 
        'relative flex h-10 w-10 items-center justify-center border border-[var(--es-hex-line)] bg-[var(--es-surface)] text-sm transition-all font-mono',
        isActive && 'z-10 ring-1 ring-[var(--es-plasma-1)] bg-[var(--es-plasma-1)]/10',
        className
      )}
      style={{ '--corner': '6px' } as React.CSSProperties}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-4 w-px animate-caret-blink bg-[var(--es-plasma-1)] duration-1000" />
        </div>
      )}
    </div>
  );
});
InputOTPSlot.displayName = 'InputOTPSlot';

const InputOTPSeparator = React.forwardRef<
  React.ComponentRef<'div'>,
  React.ComponentPropsWithoutRef<'div'> & { effects?: EnergyShieldEffects }
>(({ ...props }, ref) => (
  <div ref={ref} role="separator" {...props}>
    <Dot className="text-[var(--text-muted)]" />
  </div>
));
InputOTPSeparator.displayName = 'InputOTPSeparator';

export { InputOTP,InputOTPGroup,InputOTPSeparator,InputOTPSlot };

