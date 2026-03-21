import React from 'react';
import { cn } from '@/lib/utils';
import type { VariantColors } from '../../types/common';
import {
  getTypographyTone,
  getVersionCardDecor,
  getVersionCardRootStyles,
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

const versionIdentityClass = 'card-neon';
const versionKey = 'neon';

function getSectionStyle(type: ComponentType, colors?: VariantColors, version?: string): React.CSSProperties {
  const profile = getVersionStyleProfile(version ?? versionKey);
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

    return (
      <CardBase
        ref={ref}
        className={cn('card-root', versionIdentityClass, className)}
        style={{ ...getVersionCardRootStyles(profile, type, colors), ...style }}
        data-version={profile.version}
        data-variant={variant}
        data-type={type}
        {...props}
      >
        {getVersionCardDecor(profile, colors)}
        <div className="relative z-[1]">{children}</div>
      </CardBase>
    );
  }
);
CardRoot.displayName = 'Card';

const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, type = 'default', colors, version, style, ...props }, ref) => (
    <CardHeaderBase
      ref={ref}
      className={cn('card-header', `${versionIdentityClass}__header`, className)}
      style={{
        ...getSectionStyle(type, colors, version),
        borderBottom: `1px solid ${getTypographyTone(type, colors).border}`,
        paddingBottom: '0.5rem',
        marginBottom: '0.25rem',
        ...style,
      }}
      {...props}
    />
  )
);
CardHeader.displayName = 'CardHeader';

const CardTitle = React.forwardRef<HTMLHeadingElement, CardTitleProps>(
  ({ className, type = 'default', colors, version, style, ...props }, ref) => (
    <CardTitleBase
      ref={ref}
      className={cn('card-title', `${versionIdentityClass}__title`, className)}
      style={{
        ...getSectionStyle(type, colors, version),
        color: getTypographyTone(type, colors).heading,
        fontWeight: 700,
        lineHeight: 1.2,
        ...style,
      }}
      {...props}
    />
  )
);
CardTitle.displayName = 'CardTitle';

const CardDescription = React.forwardRef<HTMLParagraphElement, CardDescriptionProps>(
  ({ className, type = 'default', colors, version, style, ...props }, ref) => (
    <CardDescriptionBase
      ref={ref}
      className={cn('card-description', `${versionIdentityClass}__description`, className)}
      style={{
        ...getSectionStyle(type, colors, version),
        opacity: 0.88,
        ...style,
      }}
      {...props}
    />
  )
);
CardDescription.displayName = 'CardDescription';

const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, type = 'default', colors, version, style, ...props }, ref) => (
    <CardContentBase
      ref={ref}
      className={cn('card-content', `${versionIdentityClass}__content`, className)}
      style={{
        ...getSectionStyle(type, colors, version),
        ...style,
      }}
      {...props}
    />
  )
);
CardContent.displayName = 'CardContent';

const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, type = 'default', colors, version, style, ...props }, ref) => (
    <CardFooterBase
      ref={ref}
      className={cn('card-footer', `${versionIdentityClass}__footer`, className)}
      style={{
        ...getSectionStyle(type, colors, version),
        borderTop: `1px solid ${getTypographyTone(type, colors).border}`,
        paddingTop: '0.5rem',
        marginTop: '0.5rem',
        ...style,
      }}
      {...props}
    />
  )
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
