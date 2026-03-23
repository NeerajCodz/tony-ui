import * as React from 'react';
import { OTPInput, OTPInputContext } from 'input-otp';
import { Dot } from 'lucide-react';
import { cn } from '@/lib/utils';
import { techPanelEffectsClass, type TechPanelEffects } from './_effects';


const InputOTP = React.forwardRef<
  React.ComponentRef<typeof OTPInput>,
  React.ComponentPropsWithoutRef<typeof OTPInput> & { effects?: TechPanelEffects }
>(({ className, effects = 'on', containerClassName, ...props }, ref) => (
  <OTPInput
    ref={ref}
    containerClassName={cn(techPanelEffectsClass(effects), 
      'flex items-center gap-2 has-[:disabled]:opacity-50',
      containerClassName
    )}
    className={cn(techPanelEffectsClass(effects), 'disabled:cursor-not-allowed', className)}
    {...props}
  />
));
InputOTP.displayName = 'InputOTP';

const InputOTPGroup = React.forwardRef<
  React.ComponentRef<'div'>,
  React.ComponentPropsWithoutRef<'div'> & { effects?: TechPanelEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <div ref={ref} className={cn(techPanelEffectsClass(effects), 'flex items-center gap-0', className)} {...props} />
));
InputOTPGroup.displayName = 'InputOTPGroup';

const InputOTPSlot = React.forwardRef<
  React.ComponentRef<'div'>,
  React.ComponentPropsWithoutRef<'div'> & { effects?: TechPanelEffects } & { index: number }
>(({ index, className, effects = 'on', ...props }, ref) => {
  const inputOTPContext = React.useContext(OTPInputContext);
  const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index];

  return (
    <div
      ref={ref}
      className={cn(techPanelEffectsClass(effects), 
        'relative flex h-10 w-10 items-center justify-center border border-[var(--tp-border-inner)] bg-[var(--tp-inset)] text-sm transition-all font-mono first:border-l last:border-r border-r-0 last:border-r rounded-none',
        isActive && 'z-10 border-[var(--tp-accent)] bg-[var(--tp-accent)]/10',
        className
      )}
      style={{ } as React.CSSProperties}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-4 w-px animate-caret-blink bg-[var(--tp-accent)] duration-1000" />
        </div>
      )}
    </div>
  );
});
InputOTPSlot.displayName = 'InputOTPSlot';

const InputOTPSeparator = React.forwardRef<
  React.ComponentRef<'div'>,
  React.ComponentPropsWithoutRef<'div'> & { effects?: TechPanelEffects }
>(({ ...props }, ref) => (
  <div ref={ref} role="separator" {...props}>
    <Dot className="text-[var(--text-muted)]" />
  </div>
));
InputOTPSeparator.displayName = 'InputOTPSeparator';

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator };
