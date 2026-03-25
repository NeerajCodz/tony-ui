import type * as __BaseImport_typography from '../_base/typography';

import * as React from "react"
import { cn } from "@/lib/utils"

const h1 = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(({ className, ...props }, ref) => (
  <h1 ref={ref} className={cn("scroll-m-20 text-4xl font-extrabold tracking-widest uppercase font-display text-[var(--hc-accent-bright)] lg:text-5xl", className)} {...props} />
))
h1.displayName = "TypographyH1"

const h2 = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(({ className, ...props }, ref) => (
  <h2 ref={ref} className={cn("scroll-m-20 pb-2 text-3xl font-semibold tracking-wide uppercase font-display first:mt-0 text-[var(--hc-text-primary)]", className)} {...props} />
))
h2.displayName = "TypographyH2"

const h3 = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(({ className, ...props }, ref) => (
  <h3 ref={ref} className={cn("scroll-m-20 text-2xl font-semibold tracking-widest uppercase font-display text-[var(--hc-accent)]", className)} {...props} />
))
h3.displayName = "TypographyH3"

const h4 = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(({ className, ...props }, ref) => (
  <h4 ref={ref} className={cn("scroll-m-20 text-xl font-semibold tracking-wide uppercase font-body text-[var(--hc-text-primary)]", className)} {...props} />
))
h4.displayName = "TypographyH4"

const p = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(({ className, ...props }, ref) => (
  <p ref={ref} className={cn("leading-7 [&:not(:first-child)]:mt-6 font-body text-[var(--hc-text-primary)]", className)} {...props} />
))
p.displayName = "TypographyP"

const blockquote = React.forwardRef<HTMLQuoteElement, React.HTMLAttributes<HTMLQuoteElement>>(({ className, ...props }, ref) => (
  <blockquote ref={ref} className={cn("mt-6 border-l-2 border-[var(--hc-accent)] pl-6 italic font-body text-[var(--hc-text-secondary)]", className)} {...props} />
))
blockquote.displayName = "TypographyBlockquote"

export { h1, h2, h3, h4, p, blockquote }
