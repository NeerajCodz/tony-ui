'use client';

import React, { useEffect, useMemo, useState } from 'react';
import type { Version, Variant, StyleComponentType } from '../types/common';
import { getVariantColors } from '../core/handler-factory';

type TypographyPartName =
  | 'H1'
  | 'H2'
  | 'H3'
  | 'H4'
  | 'P'
  | 'Blockquote'
  | 'List'
  | 'Code'
  | 'Lead'
  | 'Large'
  | 'Small'
  | 'Muted'
  | 'Callout'
  | 'CodeBlock';

type TypographyExportModule = Record<TypographyPartName, React.ComponentType<any>>;
type FallbackTag = keyof React.JSX.IntrinsicElements;

export interface TypographyPartProps extends React.HTMLAttributes<HTMLElement> {
  version?: Version;
  variant?: Variant;
  type?: StyleComponentType;
}

const moduleCache = new Map<string, TypographyExportModule>();

async function loadTypographyModule(version: Version): Promise<TypographyExportModule> {
  try {
    const module = await import(`../components/${version}/typography.tsx`);
    return module as unknown as TypographyExportModule;
  } catch {
    const module = await import('../components/default/typography.tsx');
    return module as unknown as TypographyExportModule;
  }
}

function getFallbackTag(part: TypographyPartName): FallbackTag {
  switch (part) {
    case 'H1':
      return 'h1';
    case 'H2':
      return 'h2';
    case 'H3':
      return 'h3';
    case 'H4':
      return 'h4';
    case 'P':
    case 'Lead':
    case 'Muted':
      return 'p';
    case 'Blockquote':
      return 'blockquote';
    case 'List':
      return 'ul';
    case 'Code':
      return 'code';
    case 'Small':
      return 'small';
    case 'CodeBlock':
      return 'pre';
    case 'Large':
    case 'Callout':
    default:
      return 'div';
  }
}

function createTypographyPart(part: TypographyPartName) {
  const TypographyPart = React.forwardRef<HTMLElement, TypographyPartProps>(function TypographyPart(
    { version = 'default', variant = 'default', type = 'default', ...props },
    ref
  ) {
    const shouldLog = process.env.NODE_ENV !== 'production';
    const [module, setModule] = useState<TypographyExportModule | null>(() => moduleCache.get(version) ?? null);
    const colors = useMemo(() => getVariantColors(variant), [variant]);

    useEffect(() => {
      let mounted = true;
      const cached = moduleCache.get(version);
      if (cached) {
        setModule(cached);
        return () => {
          mounted = false;
        };
      }

      loadTypographyModule(version)
        .then((loaded) => {
          if (!mounted) return;
          moduleCache.set(version, loaded);
          setModule(loaded);
        })
        .catch(() => {
          if (mounted) {
            setModule({} as TypographyExportModule);
          }
        });

      return () => {
        mounted = false;
      };
    }, [version]);

    if (shouldLog) {
      console.log('[UI:typography]', { part, version, variant, type });
    }

    if (!module) {
      return <div className="animate-pulse rounded bg-muted/20 px-3 py-2 text-xs">Loading typography…</div>;
    }

    const Part = module[part];
    if (Part) {
      return <Part ref={ref} version={version} variant={variant} type={type} colors={colors} {...props} />;
    }

    const fallbackTag = getFallbackTag(part);
    return React.createElement(fallbackTag, { ref, ...props });
  });

  TypographyPart.displayName = `Typography${part}`;
  return TypographyPart;
}

export const Typography = {
  H1: createTypographyPart('H1'),
  H2: createTypographyPart('H2'),
  H3: createTypographyPart('H3'),
  H4: createTypographyPart('H4'),
  P: createTypographyPart('P'),
  Blockquote: createTypographyPart('Blockquote'),
  List: createTypographyPart('List'),
  Code: createTypographyPart('Code'),
  Lead: createTypographyPart('Lead'),
  Large: createTypographyPart('Large'),
  Small: createTypographyPart('Small'),
  Muted: createTypographyPart('Muted'),
  Callout: createTypographyPart('Callout'),
  CodeBlock: createTypographyPart('CodeBlock'),
};

export default Typography;
