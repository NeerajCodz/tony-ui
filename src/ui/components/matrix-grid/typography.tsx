'use client';

import React, { forwardRef } from 'react';
import type { VariantColors } from '../../types/common';

// Basic typography components
export interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  version?: string;
  colors?: VariantColors;
}

const MatrixGridH1 = forwardRef<HTMLHeadingElement, TypographyProps>(
  ({ className, colors, style, ...props }, ref) => (
    <h1
      ref={ref}
      className={`scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl ${className}`}
      style={{
        fontFamily: 'monospace',
        color: colors?.foreground,
        ...style
      }}
      {...props}
    />
  )
);
MatrixGridH1.displayName = 'MatrixGridH1';

const MatrixGridH2 = forwardRef<HTMLHeadingElement, TypographyProps>(
  ({ className, colors, style, ...props }, ref) => (
    <h2
      ref={ref}
      className={`scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 ${className}`}
      style={{
        fontFamily: 'monospace',
        color: colors?.foreground,
        borderColor: colors?.border,
        ...style
      }}
      {...props}
    />
  )
);
MatrixGridH2.displayName = 'MatrixGridH2';

const MatrixGridH3 = forwardRef<HTMLHeadingElement, TypographyProps>(
  ({ className, colors, style, ...props }, ref) => (
    <h3
      ref={ref}
      className={`scroll-m-20 text-2xl font-semibold tracking-tight ${className}`}
      style={{
        fontFamily: 'monospace',
        color: colors?.foreground,
        ...style
      }}
      {...props}
    />
  )
);
MatrixGridH3.displayName = 'MatrixGridH3';

const MatrixGridP = forwardRef<HTMLParagraphElement, TypographyProps>(
  ({ className, colors, style, ...props }, ref) => (
    <p
      ref={ref}
      className={`leading-7 [&:not(:first-child)]:mt-6 ${className}`}
      style={{
        fontFamily: 'monospace',
        color: colors?.foreground,
        ...style
      }}
      {...props}
    />
  )
);
MatrixGridP.displayName = 'MatrixGridP';

const MatrixGridBlockquote = forwardRef<HTMLQuoteElement, TypographyProps>(
  ({ className, colors, style, ...props }, ref) => (
    <blockquote
      ref={ref}
      className={`mt-6 border-l-2 pl-6 italic ${className}`}
      style={{
        fontFamily: 'monospace',
        color: colors?.foreground,
        borderColor: colors?.border,
        ...style
      }}
      {...props}
    />
  )
);
MatrixGridBlockquote.displayName = 'MatrixGridBlockquote';

const MatrixGridList = forwardRef<HTMLUListElement, TypographyProps>(
  ({ className, colors, style, ...props }, ref) => (
    <ul
      ref={ref}
      className={`my-6 ml-6 list-disc [&>li]:mt-2 ${className}`}
      style={{
        fontFamily: 'monospace',
        color: colors?.foreground,
        ...style
      }}
      {...props}
    />
  )
);
MatrixGridList.displayName = 'MatrixGridList';

export {
  MatrixGridH1 as H1,
  MatrixGridH2 as H2,
  MatrixGridH3 as H3,
  MatrixGridP as P,
  MatrixGridBlockquote as Blockquote,
  MatrixGridList as List,
};
