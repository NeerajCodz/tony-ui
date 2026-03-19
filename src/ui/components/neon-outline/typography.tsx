'use client';

import React, { forwardRef } from 'react';
import type { VariantColors } from '../../types/common';

// Basic typography components
export interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  version?: string;
  colors?: VariantColors;
}

const NeonOutlineH1 = forwardRef<HTMLHeadingElement, TypographyProps>(
  ({ className, colors, style, ...props }, ref) => (
    <h1
      ref={ref}
      className={`scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl ${className}`}
      style={{
        fontFamily: 'inherit',
        color: colors?.foreground,
        ...style
      }}
      {...props}
    />
  )
);
NeonOutlineH1.displayName = 'NeonOutlineH1';

const NeonOutlineH2 = forwardRef<HTMLHeadingElement, TypographyProps>(
  ({ className, colors, style, ...props }, ref) => (
    <h2
      ref={ref}
      className={`scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 ${className}`}
      style={{
        fontFamily: 'inherit',
        color: colors?.foreground,
        borderColor: colors?.border,
        ...style
      }}
      {...props}
    />
  )
);
NeonOutlineH2.displayName = 'NeonOutlineH2';

const NeonOutlineH3 = forwardRef<HTMLHeadingElement, TypographyProps>(
  ({ className, colors, style, ...props }, ref) => (
    <h3
      ref={ref}
      className={`scroll-m-20 text-2xl font-semibold tracking-tight ${className}`}
      style={{
        fontFamily: 'inherit',
        color: colors?.foreground,
        ...style
      }}
      {...props}
    />
  )
);
NeonOutlineH3.displayName = 'NeonOutlineH3';

const NeonOutlineP = forwardRef<HTMLParagraphElement, TypographyProps>(
  ({ className, colors, style, ...props }, ref) => (
    <p
      ref={ref}
      className={`leading-7 [&:not(:first-child)]:mt-6 ${className}`}
      style={{
        fontFamily: 'inherit',
        color: colors?.foreground,
        ...style
      }}
      {...props}
    />
  )
);
NeonOutlineP.displayName = 'NeonOutlineP';

const NeonOutlineBlockquote = forwardRef<HTMLQuoteElement, TypographyProps>(
  ({ className, colors, style, ...props }, ref) => (
    <blockquote
      ref={ref}
      className={`mt-6 border-l-2 pl-6 italic ${className}`}
      style={{
        fontFamily: 'inherit',
        color: colors?.foreground,
        borderColor: colors?.border,
        ...style
      }}
      {...props}
    />
  )
);
NeonOutlineBlockquote.displayName = 'NeonOutlineBlockquote';

const NeonOutlineList = forwardRef<HTMLUListElement, TypographyProps>(
  ({ className, colors, style, ...props }, ref) => (
    <ul
      ref={ref}
      className={`my-6 ml-6 list-disc [&>li]:mt-2 ${className}`}
      style={{
        fontFamily: 'inherit',
        color: colors?.foreground,
        ...style
      }}
      {...props}
    />
  )
);
NeonOutlineList.displayName = 'NeonOutlineList';

export {
  NeonOutlineH1 as H1,
  NeonOutlineH2 as H2,
  NeonOutlineH3 as H3,
  NeonOutlineP as P,
  NeonOutlineBlockquote as Blockquote,
  NeonOutlineList as List,
};
