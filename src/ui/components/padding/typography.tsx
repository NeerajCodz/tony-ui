
import * as React from "react";
import { cn } from "@/lib/utils";

// h1: 56px | weight 300 | tracking -0.04em | color: --text-primary | font: Cormorant
export function H1({ className, ...props }: React.ComponentProps<"h1">) {
  return (
    <h1
      className={cn(
        "scroll-m-20 text-[56px] font-light tracking-[-0.04em] font-serif text-[var(--pd-text)]",
        className
      )}
      {...props}
    />
  )
}

// h2: 40px | weight 400 | tracking -0.03em | color: --text-primary
export function H2({ className, ...props }: React.ComponentProps<"h2">) {
  return (
    <h2
      className={cn(
        "scroll-m-20 text-[40px] font-normal tracking-[-0.03em] font-serif text-[var(--pd-text)] first:mt-0",
        className
      )}
      {...props}
    />
  )
}

// h3: 28px | weight 600 | tracking -0.01em | color: --text-primary | font: DM Sans
export function H3({ className, ...props }: React.ComponentProps<"h3">) {
  return (
    <h3
      className={cn(
        "scroll-m-20 text-[28px] font-semibold tracking-[-0.01em] font-sans text-[var(--pd-text)]",
        className
      )}
      {...props}
    />
  )
}

// h4: 20px | weight 600 | tracking 0em | color: --text-secondary
export function H4({ className, ...props }: React.ComponentProps<"h4">) {
  return (
    <h4
      className={cn(
        "scroll-m-20 text-[20px] font-semibold tracking-normal font-sans text-[var(--pd-muted)]",
        className
      )}
      {...props}
    />
  )
}

// h5: 15px | weight 500 | tracking 0.04em | color: --pd-muted
export function H5({ className, ...props }: React.ComponentProps<"h5">) {
  return (
    <h5
      className={cn(
        "scroll-m-20 text-[15px] font-medium tracking-[0.04em] font-sans text-[var(--pd-muted)]",
        className
      )}
      {...props}
    />
  )
}

// h6: 12px | weight 500 | tracking 0.12em | UPPERCASE | color: --pd-muted
export function H6({ className, ...props }: React.ComponentProps<"h6">) {
  return (
    <h6
      className={cn(
        "scroll-m-20 text-[12px] font-medium tracking-[0.12em] uppercase font-sans text-[var(--pd-muted)]",
        className
      )}
      {...props}
    />
  )
}

// body: 15px | weight 400 | leading: 1.8 | color: --pd-text
export function P({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      className={cn(
        "leading-[1.8] text-[15px] font-normal font-sans text-[var(--pd-text)] [&:not(:first-child)]:mt-6",
        className
      )}
      {...props}
    />
  )
}

export function Blockquote({ className, ...props }: React.ComponentProps<"blockquote">) {
  return (
    <blockquote
      className={cn(
        "mt-6 border-l-2 border-[var(--pd-accent)] pl-6 italic text-[var(--pd-muted)] font-serif text-lg leading-relaxed",
        className
      )}
      {...props}
    />
  )
}

export function Code({ className, ...props }: React.ComponentProps<"code">) {
  return (
    <code
      className={cn(
        "relative rounded bg-[var(--pd-bg)] px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold text-[var(--pd-accent)]",
        className
      )}
      {...props}
    />
  )
}

export function Lead({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      className={cn("text-xl text-[var(--pd-muted)] font-serif font-light leading-relaxed", className)}
      {...props}
    />
  )
}

export function Large({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("text-lg font-medium font-sans text-[var(--pd-text)]", className)}
      {...props}
    />
  )
}

export function Small({ className, ...props }: React.ComponentProps<"small">) {
  return (
    <small
      className={cn("text-sm font-medium leading-none font-sans text-[var(--pd-muted)]", className)}
      {...props}
    />
  )
}

export function Muted({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      className={cn("text-sm text-[var(--pd-muted)] font-sans", className)}
      {...props}
    />
  )
}
