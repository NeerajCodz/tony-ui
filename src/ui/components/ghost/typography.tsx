'use client';

import React, { forwardRef } from 'react';
import type { VariantColors } from '../../types/common';
import {
  TypographyH1Base,
  TypographyH2Base,
  TypographyH3Base,
  TypographyH4Base,
  TypographyPBase,
  TypographyBlockquoteBase,
  TypographyCodeBase,
  TypographyLeadBase,
  TypographyLargeBase,
  TypographySmallBase,
  TypographyMutedBase,
} from '../_base/typography';
import { getTypographyTone, getVersionStyleProfile } from '../_shared/version-styles';

export interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  version?: string;
  type?: string;
  colors?: VariantColors;
}

const versionKey = 'ghost';

function resolveTypography(type: string | undefined, colors: VariantColors | undefined, version: string | undefined) {
  const profile = getVersionStyleProfile(version ?? versionKey);
  const tone = getTypographyTone(type ?? 'default', colors);

  return {
    profile,
    tone,
    shared: {
      fontFamily: profile.fontFamily,
      letterSpacing: profile.letterSpacing,
    } as React.CSSProperties,
  };
}

const H1 = forwardRef<HTMLHeadingElement, TypographyProps>(({ className, colors, type, version, style, ...props }, ref) => {
  const { shared, tone } = resolveTypography(type, colors, version);
  return (
    <TypographyH1Base
      ref={ref}
      className={`scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl ${className ?? ''}`}
      style={{ ...shared, color: tone.heading, ...style }}
      {...props}
    />
  );
});
H1.displayName = 'H1';

const H2 = forwardRef<HTMLHeadingElement, TypographyProps>(({ className, colors, type, version, style, ...props }, ref) => {
  const { shared, tone } = resolveTypography(type, colors, version);
  return (
    <TypographyH2Base
      ref={ref}
      className={`scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 ${className ?? ''}`}
      style={{ ...shared, color: tone.heading, borderColor: tone.border, ...style }}
      {...props}
    />
  );
});
H2.displayName = 'H2';

const H3 = forwardRef<HTMLHeadingElement, TypographyProps>(({ className, colors, type, version, style, ...props }, ref) => {
  const { shared, tone } = resolveTypography(type, colors, version);
  return (
    <TypographyH3Base
      ref={ref}
      className={`scroll-m-20 text-2xl font-semibold tracking-tight ${className ?? ''}`}
      style={{ ...shared, color: tone.heading, ...style }}
      {...props}
    />
  );
});
H3.displayName = 'H3';

const H4 = forwardRef<HTMLHeadingElement, TypographyProps>(({ className, colors, type, version, style, ...props }, ref) => {
  const { shared, tone } = resolveTypography(type, colors, version);
  return (
    <TypographyH4Base
      ref={ref}
      className={`scroll-m-20 text-xl font-semibold tracking-tight ${className ?? ''}`}
      style={{ ...shared, color: tone.heading, ...style }}
      {...props}
    />
  );
});
H4.displayName = 'H4';

const P = forwardRef<HTMLParagraphElement, TypographyProps>(({ className, colors, type, version, style, ...props }, ref) => {
  const { shared, tone } = resolveTypography(type, colors, version);
  return (
    <TypographyPBase
      ref={ref}
      className={`leading-7 [&:not(:first-child)]:mt-6 ${className ?? ''}`}
      style={{ ...shared, color: tone.body, ...style }}
      {...props}
    />
  );
});
P.displayName = 'P';

const Blockquote = forwardRef<HTMLQuoteElement, TypographyProps>(({ className, colors, type, version, style, ...props }, ref) => {
  const { shared, tone } = resolveTypography(type, colors, version);
  return (
    <TypographyBlockquoteBase
      ref={ref}
      className={`mt-6 border-l-2 pl-6 italic ${className ?? ''}`}
      style={{ ...shared, color: tone.body, borderColor: tone.border, ...style }}
      {...props}
    />
  );
});
Blockquote.displayName = 'Blockquote';

const Code = forwardRef<HTMLElement, TypographyProps>(({ className, colors, type, version, style, ...props }, ref) => {
  const { shared, tone } = resolveTypography(type, colors, version);
  return (
    <TypographyCodeBase
      ref={ref}
      className={`relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm ${className ?? ''}`}
      style={{ ...shared, color: tone.codeText, backgroundColor: tone.codeBg, ...style }}
      {...props}
    />
  );
});
Code.displayName = 'Code';

const Lead = forwardRef<HTMLParagraphElement, TypographyProps>(({ className, colors, type, version, style, ...props }, ref) => {
  const { shared, tone } = resolveTypography(type, colors, version);
  return (
    <TypographyLeadBase
      ref={ref}
      className={`text-xl text-muted-foreground ${className ?? ''}`}
      style={{ ...shared, color: tone.body, opacity: 0.9, ...style }}
      {...props}
    />
  );
});
Lead.displayName = 'Lead';

const Large = forwardRef<HTMLDivElement, TypographyProps>(({ className, colors, type, version, style, ...props }, ref) => {
  const { shared, tone } = resolveTypography(type, colors, version);
  return (
    <TypographyLargeBase
      ref={ref}
      className={`text-lg font-semibold ${className ?? ''}`}
      style={{ ...shared, color: tone.heading, ...style }}
      {...props}
    />
  );
});
Large.displayName = 'Large';

const Small = forwardRef<HTMLElement, TypographyProps>(({ className, colors, type, version, style, ...props }, ref) => {
  const { shared, tone } = resolveTypography(type, colors, version);
  return (
    <TypographySmallBase
      ref={ref}
      className={`text-sm font-medium leading-none ${className ?? ''}`}
      style={{ ...shared, color: tone.body, ...style }}
      {...props}
    />
  );
});
Small.displayName = 'Small';

const Muted = forwardRef<HTMLParagraphElement, TypographyProps>(({ className, colors, type, version, style, ...props }, ref) => {
  const { shared, tone } = resolveTypography(type, colors, version);
  return (
    <TypographyMutedBase
      ref={ref}
      className={`text-sm text-muted-foreground ${className ?? ''}`}
      style={{ ...shared, color: tone.body, opacity: 0.75, ...style }}
      {...props}
    />
  );
});
Muted.displayName = 'Muted';

const List = forwardRef<HTMLUListElement, TypographyProps>(({ className, colors, type, version, style, ...props }, ref) => {
  const { shared, tone } = resolveTypography(type, colors, version);
  return (
    <ul
      ref={ref}
      className={`my-6 ml-6 list-disc [&>li]:mt-2 ${className ?? ''}`}
      style={{ ...shared, color: tone.body, ...style }}
      {...props}
    />
  );
});
List.displayName = 'List';

const Callout = forwardRef<HTMLDivElement, TypographyProps>(({ className, colors, type, version, style, children, ...props }, ref) => {
  const { shared, tone } = resolveTypography(type, colors, version);
  return (
    <div
      ref={ref}
      role="note"
      className={`my-4 rounded-md border-l-4 p-4 ${className ?? ''}`}
      style={{ ...shared, color: tone.body, borderColor: tone.border, backgroundColor: tone.codeBg, ...style }}
      {...props}
    >
      {children}
    </div>
  );
});
Callout.displayName = 'Callout';

const CodeBlock = forwardRef<HTMLPreElement, TypographyProps>(({ className, colors, type, version, style, children, ...props }, ref) => {
  const { shared, tone } = resolveTypography(type, colors, version);
  return (
    <pre
      ref={ref}
      className={`my-4 overflow-x-auto rounded-lg border p-4 text-sm ${className ?? ''}`}
      style={{ ...shared, color: tone.codeText, backgroundColor: tone.codeBg, borderColor: tone.border, ...style }}
      {...props}
    >
      <code>{children}</code>
    </pre>
  );
});
CodeBlock.displayName = 'CodeBlock';

export {
  H1,
  H2,
  H3,
  H4,
  P,
  Blockquote,
  List,
  Code,
  Lead,
  Large,
  Small,
  Muted,
  Callout,
  CodeBlock,
};
