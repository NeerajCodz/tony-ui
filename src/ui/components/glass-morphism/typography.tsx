'use client';

import React, { forwardRef } from 'react';
import type { VariantColors } from '../../types/common';

// Basic typography components
export interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  version?: string;
  type?: string;
  colors?: VariantColors;
}

const GlassMorphismH1 = forwardRef<HTMLHeadingElement, TypographyProps>(
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
GlassMorphismH1.displayName = 'GlassMorphismH1';

const GlassMorphismH2 = forwardRef<HTMLHeadingElement, TypographyProps>(
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
GlassMorphismH2.displayName = 'GlassMorphismH2';

const GlassMorphismH3 = forwardRef<HTMLHeadingElement, TypographyProps>(
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
GlassMorphismH3.displayName = 'GlassMorphismH3';

const GlassMorphismP = forwardRef<HTMLParagraphElement, TypographyProps>(
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
GlassMorphismP.displayName = 'GlassMorphismP';

const GlassMorphismBlockquote = forwardRef<HTMLQuoteElement, TypographyProps>(
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
GlassMorphismBlockquote.displayName = 'GlassMorphismBlockquote';

const GlassMorphismList = forwardRef<HTMLUListElement, TypographyProps>(
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
GlassMorphismList.displayName = 'GlassMorphismList';

export {
  GlassMorphismH1 as H1,
  GlassMorphismH2 as H2,
  GlassMorphismH3 as H3,
  GlassMorphismP as P,
  GlassMorphismBlockquote as Blockquote,
  GlassMorphismList as List,
};
