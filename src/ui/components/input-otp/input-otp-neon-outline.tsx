
import * as React from "react"
import { OTPInput, SlotProps } from "input-otp"
import { cn } from "../../utils/component-helpers"

interface InputOtpProps {
  version?: string
  variant?: 'neutral' | 'primary' | 'success' | 'warning' | 'destructive' | 'info'
  type?: 'default' | 'outline' | 'solid' | 'ghost'
  maxLength?: number
  value?: string
  onChange?: (value: string) => void
  className?: string
}

const Component = React.forwardRef<HTMLInputElement, InputOtpProps>(({
  version = 'neon-outline',
  variant = 'primary',
  type = 'default',
  maxLength = 6,
  value,
  onChange,
  className,
  ...props
}, ref) => {
  
  const colorMap: Record<string, string> = {
    neutral: 'primary', success: 'success', warning: 'warning', info: 'info', destructive: 'destructive', primary: 'primary'
  };
  const color = colorMap[variant] || 'primary';

  const getTypeStyles = (isActive: boolean) => {
    const baseColor = `hsl(var(--${color}-base))`;
    if (isActive) {
       return { 
         borderColor: baseColor,
         boxShadow: `0 0 10px ${baseColor}`,
         background: `hsl(var(--${color}-base) / 0.1)`
       };
    }

    switch(type) {
      case 'outline': return { border: `1px solid ${baseColor}`, background: 'transparent' };
      case 'solid': return { background: `hsl(var(--${color}-base) / 0.1)`, border: 'none' };
      default: return { 
        background: `hsl(var(--${color}-base) / 0.05)`, 
        border: `1px solid hsl(var(--${color}-base) / 0.3)` 
      };
    }
  };

  function Slot(props: SlotProps) {
    const styles = getTypeStyles(props.isActive);
    
    return (
      <div
        className={cn(
          "relative w-10 h-14 text-[2rem]",
          "flex items-center justify-center",
          "transition-all duration-300",
          "group-hover:border-accent-foreground/20 group-focus-within:border-accent-foreground/20",
          "outline outline-0 outline-accent-foreground/20",
          { "outline-4 outline-accent-foreground": props.isActive },
        )}
        style={{
          ...styles,
           clipPath: 'inset(0 0 0 0 round 4px)',
           fontFamily: 'var(--font-mono)',
           color: `hsl(var(--${color}-foreground))`
        }}
      >
        {props.char !== null && <div>{props.char}</div>}
        {props.hasFakeCaret && (
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center">
            <div className="w-px h-8 bg-white/70 animate-caret-blink" />
          </div>
        )}
      </div>
    )
  }

  function FakeDash() {
    return (
      <div className="flex w-10 justify-center items-center">
        <div className="w-3 h-1 rounded-full bg-border" style={{ background: `hsl(var(--${color}-base) / 0.3)` }} />
      </div>
    )
  }

  return (
    <OTPInput
      ref={ref as any}
      maxLength={maxLength}
      value={value}
      onChange={onChange}
      containerClassName={cn("flex items-center gap-2 has-[:disabled]:opacity-30", className)}
      render={({ slots }) => (
        <>
          <div className="flex gap-2">
            {slots.slice(0, 3).map((slot, idx) => (
              <Slot key={idx} {...slot} />
            ))}
          </div>
          {maxLength > 3 && <FakeDash />}
          <div className="flex gap-2">
            {slots.slice(3).map((slot, idx) => (
              <Slot key={idx + 3} {...slot} />
            ))}
          </div>
        </>
      )}
      {...props}
    />
  )
})

Component.displayName = "InputOtp-neon-outline"

export default Component
