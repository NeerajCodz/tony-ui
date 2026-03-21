'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import type { VariantColors } from '../../types/common';
import { normalizeColors, getCoreTypeStyles } from '../_shared/version-styles';
import {
  CardBase,
  CardHeaderBase,
  CardTitleBase,
  CardDescriptionBase,
  CardContentBase,
  CardFooterBase,
} from '../_base/card';

type ComponentType = 'default' | 'solid' | 'outline' | 'ghost' | 'inverse' | 'contrast' | 'soft';

interface StyledProps {
  type?: ComponentType;
  uiType?: ComponentType;
  colors?: VariantColors;
}

const versionKey = 'quantum-gate';

const CARD_CLIP_PATH = 'polygon(24px 0, calc(100% - 24px) 0, 100% 24px, 100% calc(100% - 24px), calc(100% - 24px) 100%, 24px 100%, 0 calc(100% - 24px), 0 24px)';
const HEADER_CLIP_PATH = 'polygon(16px 0, calc(100% - 16px) 0, 100% 50%, calc(100% - 16px) 100%, 16px 100%, 0 50%)';

const CardRoot = React.forwardRef<HTMLDivElement, React.ComponentProps<typeof CardBase> & StyledProps>(
  ({ className, type, uiType, colors, style, children, ...props }, ref) => {
    const resolvedType = uiType ?? type ?? 'default';
    const palette = normalizeColors(colors);
    const typeStyles = getCoreTypeStyles(resolvedType, colors);

    const backgroundColor =
      resolvedType === 'solid'
        ? palette.accentPrimary ?? palette.base
        : resolvedType === 'soft' && palette.accentRgb
          ? 'rgba(' + palette.accentRgb + ', 0.12)'
          : resolvedType === 'inverse'
            ? palette.foreground
            : resolvedType === 'ghost'
              ? 'transparent'
              : (typeStyles.backgroundColor as string | undefined) ?? palette.base ?? '#0a0a12';

    const borderColor =
      resolvedType === 'outline' || resolvedType === 'contrast'
        ? palette.accentPrimary ?? palette.border
        : resolvedType === 'ghost'
          ? 'transparent'
          : palette.border ?? '#3a3a5a';

    const textColor =
      resolvedType === 'solid'
        ? palette.base ?? '#fff'
        : resolvedType === 'inverse'
          ? palette.base ?? '#000'
          : (typeStyles.color as string | undefined) ?? palette.foreground ?? '#e0e0ff';

    const glowColor = palette.glow ?? 'rgba(100,100,255,0.3)';

    return (
      <CardBase
        ref={ref}
        className={cn('relative overflow-hidden p-6', className)}
        style={{
          clipPath: CARD_CLIP_PATH,
          backgroundColor,
          border: '2px solid ' + borderColor,
          color: textColor,
          boxShadow: '0 0 20px ' + glowColor + ', inset 0 0 30px rgba(100,100,255,0.05)',
          ...style,
        }}
        data-version={versionKey}
        data-type={resolvedType}
        {...props}
      >
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none opacity-10"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <pattern id="honeycomb" x="0" y="0" width="20" height="17.32" patternUnits="userSpaceOnUse">
            <polygon
              points="10,0 20,5.77 20,11.55 10,17.32 0,11.55 0,5.77"
              fill="none"
              stroke={palette.accentPrimary ?? '#6060ff'}
              strokeWidth="0.5"
            />
          </pattern>
          <rect x="0" y="0" width="100" height="100" fill="url(#honeycomb)" />
        </svg>
        <div className="relative z-[1]">{children}</div>
      </CardBase>
    );
  }
);
CardRoot.displayName = 'Card';

const CardHeader = React.forwardRef<HTMLDivElement, React.ComponentProps<typeof CardHeaderBase> & StyledProps>(
  ({ className, type, uiType, colors, style, ...props }, ref) => {
    const resolvedType = uiType ?? type ?? 'default';
    const palette = normalizeColors(colors);

    const textColor =
      resolvedType === 'solid'
        ? palette.base ?? '#fff'
        : resolvedType === 'inverse'
          ? palette.base ?? '#000'
          : palette.foreground ?? '#e0e0ff';

    return (
      <CardHeaderBase
        ref={ref}
        className={cn('mb-4', className)}
        style={{
          color: textColor,
          borderBottom: '1px solid ' + (palette.border ?? '#3a3a5a'),
          paddingBottom: '1rem',
          ...style,
        }}
        {...props}
      />
    );
  }
);
CardHeader.displayName = 'CardHeader';

const CardTitle = React.forwardRef<HTMLHeadingElement, React.ComponentProps<typeof CardTitleBase> & StyledProps>(
  ({ className, type, uiType, colors, style, ...props }, ref) => {
    const resolvedType = uiType ?? type ?? 'default';
    const palette = normalizeColors(colors);

    const textColor =
      resolvedType === 'solid'
        ? palette.base ?? '#fff'
        : resolvedType === 'inverse'
          ? palette.base ?? '#000'
          : palette.accentPrimary ?? palette.foreground ?? '#a0a0ff';

    return (
      <CardTitleBase
        ref={ref}
        className={cn('text-lg font-bold', className)}
        style={{
          color: textColor,
          letterSpacing: '0.04em',
          textShadow: '0 0 8px ' + (palette.glow ?? 'rgba(100,100,255,0.5)'),
          ...style,
        }}
        {...props}
      />
    );
  }
);
CardTitle.displayName = 'CardTitle';

const CardDescription = React.forwardRef<HTMLParagraphElement, React.ComponentProps<typeof CardDescriptionBase> & StyledProps>(
  ({ className, type, uiType, colors, style, ...props }, ref) => {
    const resolvedType = uiType ?? type ?? 'default';
    const palette = normalizeColors(colors);

    const textColor =
      resolvedType === 'solid'
        ? palette.base ?? '#fff'
        : resolvedType === 'inverse'
          ? palette.base ?? '#000'
          : palette.foreground ?? '#c0c0e0';

    return (
      <CardDescriptionBase
        ref={ref}
        className={cn('text-sm mt-1', className)}
        style={{
          color: textColor,
          opacity: 0.8,
          ...style,
        }}
        {...props}
      />
    );
  }
);
CardDescription.displayName = 'CardDescription';

const CardContent = React.forwardRef<HTMLDivElement, React.ComponentProps<typeof CardContentBase> & StyledProps>(
  ({ className, type, uiType, colors, style, ...props }, ref) => {
    const resolvedType = uiType ?? type ?? 'default';
    const palette = normalizeColors(colors);

    const textColor =
      resolvedType === 'solid'
        ? palette.base ?? '#fff'
        : resolvedType === 'inverse'
          ? palette.base ?? '#000'
          : palette.foreground ?? '#e0e0ff';

    return (
      <CardContentBase
        ref={ref}
        className={cn('py-4', className)}
        style={{
          color: textColor,
          ...style,
        }}
        {...props}
      />
    );
  }
);
CardContent.displayName = 'CardContent';

const CardFooter = React.forwardRef<HTMLDivElement, React.ComponentProps<typeof CardFooterBase> & StyledProps>(
  ({ className, type, uiType, colors, style, ...props }, ref) => {
    const resolvedType = uiType ?? type ?? 'default';
    const palette = normalizeColors(colors);

    const textColor =
      resolvedType === 'solid'
        ? palette.base ?? '#fff'
        : resolvedType === 'inverse'
          ? palette.base ?? '#000'
          : palette.foreground ?? '#e0e0ff';

    return (
      <CardFooterBase
        ref={ref}
        className={cn('flex items-center gap-4 pt-4', className)}
        style={{
          color: textColor,
          borderTop: '1px solid ' + (palette.border ?? '#3a3a5a'),
          ...style,
        }}
        {...props}
      />
    );
  }
);
CardFooter.displayName = 'CardFooter';

export const Card = Object.assign(CardRoot, {
  Header: CardHeader,
  Title: CardTitle,
  Description: CardDescription,
  Content: CardContent,
  Footer: CardFooter,
});

export { CardHeader, CardTitle, CardDescription, CardContent, CardFooter };
export default Card;