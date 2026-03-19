import React from 'react';
import { cn } from '@/lib/utils';
import type { InputOTPProps } from '@/ui/types/components/inputs';
import { OTPInput, OTPInputContext } from "input-otp"
import { Dot } from "lucide-react"

export function InputOTP({
  className,
  variant = 'default',
  type = 'default',
  colors,
  containerClassName,
  ...props
}: InputOTPProps) {
  return (
    <OTPInput
      containerClassName={cn("flex items-center gap-2 has-[:disabled]:opacity-50", containerClassName)}
      className={cn("disabled:cursor-not-allowed", className)}
      {...props}
    />
  )
}

export function InputOTPGroup({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div className={cn("flex items-center", className)} {...props} />
  )
}

export function InputOTPSlot({
  index,
  className,
  colors, // Received from parent usually, but here we might need to rely on context or pass explicit
  variant = 'default',
  type = 'default',
  ...props
}: React.ComponentPropsWithoutRef<"div"> & { index: number; colors?: any; variant?: any; type?: any }) {
  const inputOTPContext = React.useContext(OTPInputContext)
  const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index]
  const baseStyles = "relative font-mono transition-all duration-200 bg-grid-pattern relative flex h-10 w-10 items-center justify-center border-y border-r border-input text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md";
  
  // Custom styles based on version/colors
  const style = {
    borderColor: colors?.border,
    backgroundColor: isActive ? colors?.accent?.secondary : 'transparent',
    color: colors?.text
  };

  return (
    <div
      className={cn(baseStyles, isActive && "z-10 ring-2 ring-ring ring-offset-background", className)}
      style={style}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-4 w-px animate-caret-blink bg-foreground duration-1000" />
        </div>
      )}
      
    </div>
  )
}

export function InputOTPSeparator({ ...props }: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div role="separator" {...props}>
      <Dot />
    </div>
  )
}
