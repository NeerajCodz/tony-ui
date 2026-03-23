import * as React from 'react';
import { OTPInput, OTPInputContext } from 'input-otp';
import { Dot } from 'lucide-react';
import { cn } from '@/lib/utils';
import { terminalWindowEffectsClass, type TerminalWindowEffects } from './_effects';

const InputOTP = React.forwardRef<
  React.ComponentRef<typeof OTPInput>,
  React.ComponentPropsWithoutRef<typeof OTPInput> & { effects?: TerminalWindowEffects }
>(({ className, containerClassName, effects = 'on', ...props }, ref) => (
  <OTPInput
    ref={ref}
    containerClassName={cn(terminalWindowEffectsClass(effects), 
      'flex items-center gap-2 has-[:disabled]:opacity-50',
      containerClassName
    )}
    className={cn('disabled:cursor-not-allowed', className)}
    {...props}
  />
));
InputOTP.displayName = 'InputOTP';

const InputOTPGroup = React.forwardRef<
  React.ComponentRef<'div'>,
  React.ComponentPropsWithoutRef<'div'> & { effects?: TerminalWindowEffects }
>(({ className, effects = 'on', ...props }, ref) => (
  <div ref={ref} className={cn(terminalWindowEffectsClass(effects), 'flex items-center', className)} {...props} />
));
InputOTPGroup.displayName = 'InputOTPGroup';

const InputOTPSlot = React.forwardRef<
  React.ComponentRef<'div'>,
  React.ComponentPropsWithoutRef<'div'> & { index: number; effects?: TerminalWindowEffects }
>(({ index, className, effects = 'on', ...props }, ref) => {
  const inputOTPContext = React.useContext(OTPInputContext);
  const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index];

  return (
    <div
      ref={ref}
      className={cn(terminalWindowEffectsClass(effects), 
        'relative flex h-10 w-10 items-center justify-center border-y border-r border-[var(--tm-phosphor)] text-sm transition-all first:rounded-l-none first:border-l last:rounded-r-none font-mono text-[var(--tm-phosphor)] bg-[var(--tm-bg)]',
        isActive && 'z-10 ring-2 ring-[var(--tm-phosphor)] ring-offset-[var(--tm-bg)]',
        className
      )}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className='pointer-events-none absolute inset-0 flex items-center justify-center'>
          <div className='h-4 w-px animate-caret-blink bg-[var(--tm-phosphor)] duration-1000' />
        </div>
      )}
    </div>
  );
});
InputOTPSlot.displayName = 'InputOTPSlot';

const InputOTPSeparator = React.forwardRef<
  React.ComponentRef<'div'>,
  React.ComponentPropsWithoutRef<'div'> & { effects?: TerminalWindowEffects }
>(({ effects = 'on', ...props }, ref) => (
  <div ref={ref} role='separator' className={cn(terminalWindowEffectsClass(effects))} {...props}>
    <Dot className='h-4 w-4 text-[var(--tm-phosphor)]' />
  </div>
));
InputOTPSeparator.displayName = 'InputOTPSeparator';

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator };
