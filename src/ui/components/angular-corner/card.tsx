import React from 'react';
import { cn } from '@/lib/utils';
import type { VariantColors } from '../../types/common';
import {
  getCoreTypeStyles,
  normalizeColors,
  getTypographyTone,
  getVersionStyleProfile,
} from '../_shared/version-styles';
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
  colors?: VariantColors;
  variant?: string;
  version?: string;
}

export interface CardProps extends React.ComponentProps<typeof CardBase>, StyledProps {}
export interface CardHeaderProps extends React.ComponentProps<typeof CardHeaderBase>, StyledProps {}
export interface CardTitleProps extends React.ComponentProps<typeof CardTitleBase>, StyledProps {}
export interface CardDescriptionProps extends React.ComponentProps<typeof CardDescriptionBase>, StyledProps {}
export interface CardContentProps extends React.ComponentProps<typeof CardContentBase>, StyledProps {}
export interface CardFooterProps extends React.ComponentProps<typeof CardFooterBase>, StyledProps {}

const versionIdentityClass = 'card-angular-corner';
const versionKey = 'angular-corner';

// Angular corner: clip-path for octagonal clipped corners (military/stealth aesthetic)
const CORNER_SIZE = 12;
const ANGULAR_CLIP_PATH = `polygon(${CORNER_SIZE}px 0, calc(100% - ${CORNER_SIZE}px) 0, 100% ${CORNER_SIZE}px, 100% calc(100% - ${CORNER_SIZE}px), calc(100% - ${CORNER_SIZE}px) 100%, ${CORNER_SIZE}px 100%, 0 calc(100% - ${CORNER_SIZE}px), 0 ${CORNER_SIZE}px)`;

function getSectionStyle(type: ComponentType, colors?: VariantColors): React.CSSProperties {
  const profile = getVersionStyleProfile(versionKey);
  const tone = getTypographyTone(type, colors);

  return {
    fontFamily: profile.fontFamily,
    letterSpacing: profile.letterSpacing,
    color: tone.body,
    borderColor: tone.border,
  };
}

const CardRoot = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, type = 'default', colors, variant, version, style, children, ...props }, ref) => {
    const profile = getVersionStyleProfile(version ?? versionKey);
    const palette = normalizeColors(colors);
    const typeStyles = getCoreTypeStyles(type, colors);
    
    // Compute background color based on type
    const backgroundColor =
      type === 'soft' && palette.accentRgb
        ? `rgba(${palette.accentRgb}, 0.12)`
        : type === 'solid'
          ? palette.accentPrimary ?? palette.base
          : type === 'inverse'
            ? palette.foreground
            : (typeStyles.backgroundColor as string | undefined) ?? palette.base;

    // Compute border color based on type
    const borderColor =
      type === 'outline' || type === 'contrast'
        ? palette.accentPrimary ?? palette.border
        : type === 'ghost'
          ? 'transparent'
          : palette.border;

    // Compute text color based on type
    const textColor =
      type === 'solid'
        ? palette.base ?? '#fff'
        : type === 'inverse'
          ? palette.base ?? '#000'
          : (typeStyles.color as string | undefined) ?? palette.foreground;

    return (
      <CardBase
        ref={ref}
        className={cn('card-root', versionIdentityClass, 'relative overflow-hidden', className)}
        style={{
          clipPath: ANGULAR_CLIP_PATH,
          backgroundColor,
          border: `2px solid ${borderColor}`,
          color: textColor,
          padding: '1rem',
          boxShadow:
            type === 'ghost'
              ? 'none'
              : `0 0 12px ${palette.glow ?? 'rgba(0,0,0,0.2)'}`,
          ...style,
        }}
        data-version={profile.version}
        data-variant={variant}
        data-type={type}
        {...props}
      >
        {/* Angular corner highlight accent */}
        <span
          className="pointer-events-none absolute inset-0"
          style={{
            clipPath: ANGULAR_CLIP_PATH,
            background: `linear-gradient(135deg, ${palette.accentPrimary ?? palette.glow ?? 'transparent'} 0%, transparent 30%)`,
            opacity: 0.15,
          }}
        />
        <div className="relative z-[1]">{children}</div>
      </CardBase>
    );
  }
);
CardRoot.displayName = 'Card';

const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, type = 'default', colors, style, ...props }, ref) => {
    const tone = getTypographyTone(type, colors);
    const palette = normalizeColors(colors);
    return (
      <CardHeaderBase
        ref={ref}
        className={cn('card-header', `${versionIdentityClass}__header`, className)}
        style={{
          ...getSectionStyle(type, colors),
          borderBottom: `2px solid ${palette.accentPrimary ?? tone.border}`,
          paddingBottom: '0.5rem',
          marginBottom: '0.25rem',
          ...style,
        }}
        {...props}
      />
    );
  }
);
CardHeader.displayName = 'CardHeader';

const CardTitle = React.forwardRef<HTMLHeadingElement, CardTitleProps>(
  ({ className, type = 'default', colors, style, ...props }, ref) => {
    const tone = getTypographyTone(type, colors);
    return (
      <CardTitleBase
        ref={ref}
        className={cn('card-title', `${versionIdentityClass}__title`, 'uppercase tracking-wider', className)}
        style={{
          ...getSectionStyle(type, colors),
          color: tone.heading,
          fontWeight: 700,
          lineHeight: 1.2,
          letterSpacing: '0.08em',
          ...style,
        }}
        {...props}
      />
    );
  }
);
CardTitle.displayName = 'CardTitle';

const CardDescription = React.forwardRef<HTMLParagraphElement, CardDescriptionProps>(
  ({ className, type = 'default', colors, style, ...props }, ref) => (
    <CardDescriptionBase
      ref={ref}
      className={cn('card-description', `${versionIdentityClass}__description`, className)}
      style={{
        ...getSectionStyle(type, colors),
        opacity: 0.88,
        ...style,
      }}
      {...props}
    />
  )
);
CardDescription.displayName = 'CardDescription';

const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, type = 'default', colors, style, ...props }, ref) => (
    <CardContentBase
      ref={ref}
      className={cn('card-content', `${versionIdentityClass}__content`, className)}
      style={{
        ...getSectionStyle(type, colors),
        ...style,
      }}
      {...props}
    />
  )
);
CardContent.displayName = 'CardContent';

const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, type = 'default', colors, style, ...props }, ref) => {
    const tone = getTypographyTone(type, colors);
    const palette = normalizeColors(colors);
    return (
      <CardFooterBase
        ref={ref}
        className={cn('card-footer', `${versionIdentityClass}__footer`, className)}
        style={{
          ...getSectionStyle(type, colors),
          borderTop: `2px solid ${palette.accentPrimary ?? tone.border}`,
          paddingTop: '0.5rem',
          marginTop: '0.5rem',
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
