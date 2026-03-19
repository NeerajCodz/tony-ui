'use client';

import React, { forwardRef } from 'react';
import type { VariantColors } from '../../types/common';

// Basic typography components
export interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  version?: string;
  colors?: VariantColors;
}

const DataPanelH1 = forwardRef<HTMLHeadingElement, TypographyProps>(
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
DataPanelH1.displayName = 'DataPanelH1';

const DataPanelH2 = forwardRef<HTMLHeadingElement, TypographyProps>(
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
DataPanelH2.displayName = 'DataPanelH2';

const DataPanelH3 = forwardRef<HTMLHeadingElement, TypographyProps>(
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
DataPanelH3.displayName = 'DataPanelH3';

const DataPanelP = forwardRef<HTMLParagraphElement, TypographyProps>(
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
DataPanelP.displayName = 'DataPanelP';

const DataPanelBlockquote = forwardRef<HTMLQuoteElement, TypographyProps>(
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
DataPanelBlockquote.displayName = 'DataPanelBlockquote';

const DataPanelList = forwardRef<HTMLUListElement, TypographyProps>(
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
DataPanelList.displayName = 'DataPanelList';

export {
  DataPanelH1 as H1,
  DataPanelH2 as H2,
  DataPanelH3 as H3,
  DataPanelP as P,
  DataPanelBlockquote as Blockquote,
  DataPanelList as List,
};
