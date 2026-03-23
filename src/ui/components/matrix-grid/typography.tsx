import * as React from "react"
import { cn } from "@/lib/utils"

export function TypographyH1({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1
      className={cn(
        "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl font-mono text-[var(--mg-accent)] drop-shadow-[0_0_10px_rgba(0,255,80,0.3)]",
        className
      )}
      {...props}
    />
  )
}

export function TypographyH2({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      className={cn(
        "scroll-m-20 border-b border-[var(--mg-border)] pb-2 text-3xl font-semibold tracking-tight first:mt-0 font-mono text-[var(--mg-text)]",
        className
      )}
      {...props}
    />
  )
}

export function TypographyH3({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn(
        "scroll-m-20 text-2xl font-semibold tracking-tight font-mono text-[var(--mg-text)]",
        className
      )}
      {...props}
    />
  )
}

export function TypographyH4({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h4
      className={cn(
        "scroll-m-20 text-xl font-semibold tracking-tight font-mono text-[var(--mg-text-dim)]",
        className
      )}
      {...props}
    />
  )
}

export function TypographyP({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn("leading-7 [&:not(:first-child)]:mt-6 font-mono text-[var(--mg-text-dim)]", className)}
      {...props}
    />
  )
}

export function TypographyBlockquote({
  className,
  ...props
}: React.HTMLAttributes<HTMLQuoteElement>) {
  return (
    <blockquote
      className={cn(
        "mt-6 border-l-2 border-[var(--mg-accent)] pl-6 italic font-mono text-[var(--mg-text-dim)]",
        className
      )}
      {...props}
    />
  )
}

export function TypographyList({
  className,
  ...props
}: React.HTMLAttributes<HTMLUListElement>) {
  return (
    <ul
      className={cn("my-6 ml-6 list-disc [&>li]:mt-2 font-mono text-[var(--mg-text-dim)] marker:text-[var(--mg-accent)]", className)}
      {...props}
    />
  )
}

export function TypographyLead({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn("text-xl text-[var(--mg-text-dim)] font-mono", className)}
      {...props}
    />
  )
}

export function TypographyLarge({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("text-lg font-semibold font-mono text-[var(--mg-text)]", className)}
      {...props}
    />
  )
}

export function TypographySmall({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn("text-sm font-medium leading-none font-mono text-[var(--mg-text-dim)]", className)}
      {...props}
    />
  )
}

export function TypographyMuted({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn("text-sm text-[var(--mg-border)] font-mono", className)}
      {...props}
    />
  )
}
