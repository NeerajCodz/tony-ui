import * as React from 'react';
import { cn } from '@/lib/utils';


const Typography = {
  h1: React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
    ({ className, ...props }, ref) => (
      <h1
        ref={ref}
        className={cn(
          'scroll-m-20 text-4xl font-extrabold tracking-widest lg:text-5xl uppercase text-[var(--ra-text)] font-mono',
          className
        )}
        {...props}
      />
    ),
  ),
  h2: React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
    ({ className, ...props }, ref) => (
      <h2
        ref={ref}
        className={cn(
          'scroll-m-20 border-b-2 border-[var(--ra-border)] pb-2 text-3xl font-semibold tracking-wide first:mt-0 uppercase text-[var(--ra-text)] font-mono',
          className
        )}
        {...props}
      />
    ),
  ),
  h3: React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
    ({ className, ...props }, ref) => (
      <h3
        ref={ref}
        className={cn(
          'scroll-m-20 text-2xl font-semibold tracking-wide uppercase text-[var(--ra-text)] font-mono',
          className
        )}
        {...props}
      />
    ),
  ),
  h4: React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
    ({ className, ...props }, ref) => (
      <h4
        ref={ref}
        className={cn(
          'scroll-m-20 text-xl font-semibold tracking-wide uppercase text-[var(--ra-text)] font-mono',
          className
        )}
        {...props}
      />
    ),
  ),
  p: React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
    ({ className, ...props }, ref) => (
      <p
        ref={ref}
        className={cn('leading-7 [&:not(:first-child)]:mt-6 text-[var(--ra-text)] font-mono', className)}
        {...props}
      />
    ),
  ),
  blockquote: React.forwardRef<HTMLQuoteElement, React.HTMLAttributes<HTMLQuoteElement>>(
    ({ className, ...props }, ref) => (
      <blockquote
        ref={ref}
        className={cn('mt-6 border-l-4 border-[var(--ra-accent)] pl-6 italic text-[var(--ra-text)] bg-[var(--ra-surface)] p-4 font-mono', className)}
        {...props}
      />
    ),
  ),
  list: React.forwardRef<HTMLUListElement, React.HTMLAttributes<HTMLUListElement>>(
    ({ className, ...props }, ref) => (
      <ul
        ref={ref}
        className={cn('my-6 ml-6 list-none [&>li]:mt-2 [&>li]:before:content-["-"] [&>li]:before:mr-2 [&>li]:before:font-bold text-[var(--ra-text)] font-mono', className)}
        {...props}
      />
    ),
  ),
};

export { Typography };
