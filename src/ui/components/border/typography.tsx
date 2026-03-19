'use client';

import React, { forwardRef } from 'react';
import type { VariantColors } from '../../types/common';

// Basic typography components
export interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  version?: string;
  type?: string;
  colors?: VariantColors;
}

const BorderH1 = forwardRef<HTMLHeadingElement, TypographyProps>(
  ({ className, colors, type, style, ...props }, ref) => (
    <h1
      ref={ref}
      className={`scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl ${className}`}
      style={{
        fontFamily: 'inherit',
        color: type === 'inverse' ? colors?.base : (type === 'contrast' ? (colors?.foreground || '#000000') : (type === 'soft' ? (colors?.muted || colors?.foreground) : colors?.foreground)),
        ...style
      }}
      {...props}
    />
  )
);
BorderH1.displayName = 'BorderH1';

const BorderH2 = forwardRef<HTMLHeadingElement, TypographyProps>(
  ({ className, colors, type, style, ...props }, ref) => (
    <h2
      ref={ref}
      className={`scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 ${className}`}
      style={{
        fontFamily: 'inherit',
        color: type === 'inverse' ? colors?.base : (type === 'contrast' ? (colors?.foreground || '#000000') : (type === 'soft' ? (colors?.muted || colors?.foreground) : colors?.foreground)),
        borderColor: type === 'inverse' ? colors?.foreground : (type === 'contrast' ? (colors?.foreground || '#000000') : (type === 'soft' ? (colors?.muted || colors?.border) : colors?.border)),
        ...style
      }}
      {...props}
    />
  )
);
BorderH2.displayName = 'BorderH2';

const BorderH3 = forwardRef<HTMLHeadingElement, TypographyProps>(
  ({ className, colors, type, style, ...props }, ref) => (
    <h3
      ref={ref}
      className={`scroll-m-20 text-2xl font-semibold tracking-tight ${className}`}
      style={{
        fontFamily: 'inherit',
        color: type === 'inverse' ? colors?.base : (type === 'contrast' ? (colors?.foreground || '#000000') : (type === 'soft' ? (colors?.muted || colors?.foreground) : colors?.foreground)),
        ...style
      }}
      {...props}
    />
  )
);
BorderH3.displayName = 'BorderH3';

const BorderP = forwardRef<HTMLParagraphElement, TypographyProps>(
  ({ className, colors, type, style, ...props }, ref) => (
    <p
      ref={ref}
      className={`leading-7 [&:not(:first-child)]:mt-6 ${className}`}
      style={{
        fontFamily: 'inherit',
        color: type === 'inverse' ? colors?.base : (type === 'contrast' ? (colors?.foreground || '#000000') : (type === 'soft' ? (colors?.muted || colors?.foreground) : colors?.foreground)),
        ...style
      }}
      {...props}
    />
  )
);
BorderP.displayName = 'BorderP';

const BorderBlockquote = forwardRef<HTMLQuoteElement, TypographyProps>(
  ({ className, colors, type, style, ...props }, ref) => (
    <blockquote
      ref={ref}
      className={`mt-6 border-l-2 pl-6 italic ${className}`}
      style={{
        fontFamily: 'inherit',
        color: type === 'inverse' ? colors?.base : (type === 'contrast' ? (colors?.foreground || '#000000') : (type === 'soft' ? (colors?.muted || colors?.foreground) : colors?.foreground)),
        borderColor: type === 'inverse' ? colors?.foreground : (type === 'contrast' ? (colors?.foreground || '#000000') : (type === 'soft' ? (colors?.muted || colors?.border) : colors?.border)),
        ...style
      }}
      {...props}
    />
  )
);
BorderBlockquote.displayName = 'BorderBlockquote';

const BorderList = forwardRef<HTMLUListElement, TypographyProps>(
  ({ className, colors, type, style, ...props }, ref) => (
    <ul
      ref={ref}
      className={`my-6 ml-6 list-disc [&>li]:mt-2 ${className}`}
      style={{
        fontFamily: 'inherit',
        color: type === 'inverse' ? colors?.base : (type === 'contrast' ? (colors?.foreground || '#000000') : (type === 'soft' ? (colors?.muted || colors?.foreground) : colors?.foreground)),
        ...style
      }}
      {...props}
    />
  )
);
BorderList.displayName = 'BorderList';

export {
  BorderH1 as H1,
  BorderH2 as H2,
  BorderH3 as H3,
  BorderP as P,
  BorderBlockquote as Blockquote,
  BorderList as List,
};
