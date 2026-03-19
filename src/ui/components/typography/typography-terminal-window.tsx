
import * as React from "react"
import { cn } from "../../utils/component-helpers"

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  version?: string
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'blockquote' | 'code' | 'lead' | 'large' | 'small' | 'muted'
  as?: React.ElementType
  color?: 'neutral' | 'primary' | 'success' | 'warning' | 'destructive' | 'info'
}

const Component = React.forwardRef<HTMLElement, TypographyProps>(({
  version = 'terminal-window',
  variant = 'p',
  as,
  color = 'neutral',
  className,
  children,
  ...props
}, ref) => {
  
  const Comp = as || (['h1', 'h2', 'h3', 'h4', 'p', 'blockquote', 'code'].includes(variant) ? variant : 'p');
  const baseColor = color === 'neutral' ? 'foreground' : `${color}-500`;

  const getStyles = () => {
    switch('terminal-window') {
       case 'tactical-hud':
         return {
           h1: "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl uppercase font-mono tracking-widest border-l-4 border-primary pl-4",
           h2: "scroll-m-20 border-b border-primary/20 pb-2 text-3xl font-semibold tracking-tight first:mt-0 uppercase font-mono",
           h3: "scroll-m-20 text-2xl font-semibold tracking-tight font-mono text-primary",
           h4: "scroll-m-20 text-xl font-semibold tracking-tight font-mono",
           p: "leading-7 [&:not(:first-child)]:mt-6 font-sans text-muted-foreground",
           blockquote: "mt-6 border-l-2 border-primary pl-6 italic text-primary/80 bg-primary/5 py-2",
           code: "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold text-primary",
           lead: "text-xl text-muted-foreground font-mono",
           large: "text-lg font-semibold font-mono",
           small: "text-sm font-medium leading-none font-mono opacity-70",
           muted: "text-sm text-muted-foreground font-mono"
         }[variant]
       case 'neon':
          return {
           h1: "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400 drop-shadow-[0_0_10px_rgba(var(--primary-rgb),0.5)]",
           h2: "scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-primary drop-shadow-[0_0_5px_rgba(var(--primary-rgb),0.5)]",
           h3: "scroll-m-20 text-2xl font-semibold tracking-tight text-cyan-400",
           h4: "scroll-m-20 text-xl font-semibold tracking-tight",
           p: "leading-7 [&:not(:first-child)]:mt-6",
           blockquote: "mt-6 border-l-4 border-primary pl-6 italic bg-black/50 p-4 rounded-r-lg",
           code: "relative rounded bg-black border border-primary/50 px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold text-cyan-400 shadow-[0_0_5px_rgba(0,255,255,0.2)]",
           lead: "text-xl text-muted-foreground",
           large: "text-lg font-semibold",
           small: "text-sm font-medium leading-none",
           muted: "text-sm text-muted-foreground"
         }[variant]
       default:
         return {
           h1: "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
           h2: "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
           h3: "scroll-m-20 text-2xl font-semibold tracking-tight",
           h4: "scroll-m-20 text-xl font-semibold tracking-tight",
           p: "leading-7 [&:not(:first-child)]:mt-6",
           blockquote: "mt-6 border-l-2 pl-6 italic",
           code: "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
           lead: "text-xl text-muted-foreground",
           large: "text-lg font-semibold",
           small: "text-sm font-medium leading-none",
           muted: "text-sm text-muted-foreground"
         }[variant]
    }
  }

  return (
    // @ts-ignore
    <Comp
      ref={ref}
      className={cn(getStyles(), className)}
      {...props}
    >
      {children}
    </Comp>
  )
})

Component.displayName = "Typography-terminal-window"

export default Component
