'use client';

/**
 * Card Component Handler - Dynamic Loading
 * NO hardcoded colors, styles, or variants
 */

import React from 'react';
import { createHandler } from '../core/create-handler';
import type { CardProps, CardHeaderProps, CardTitleProps, CardDescriptionProps, CardContentProps, CardFooterProps, CardType } from '../types/components/card.js';
import type { BaseUIProps } from '../types/common';

const CardHandler = createHandler<CardProps & BaseUIProps>({
  componentName: 'card',
  exportName: 'Card'
});

const CardHeaderHandler = createHandler<CardHeaderProps & BaseUIProps>({
  componentName: 'card',
  exportName: 'CardHeader'
});

const CardTitleHandler = createHandler<CardTitleProps & BaseUIProps>({
  componentName: 'card',
  exportName: 'CardTitle'
});

const CardDescriptionHandler = createHandler<CardDescriptionProps & BaseUIProps>({
  componentName: 'card',
  exportName: 'CardDescription'
});

const CardContentHandler = createHandler<CardContentProps & BaseUIProps>({
  componentName: 'card',
  exportName: 'CardContent'
});

const CardFooterHandler = createHandler<CardFooterProps & BaseUIProps>({
  componentName: 'card',
  exportName: 'CardFooter'
});

const CardContext = React.createContext<{
  version?: BaseUIProps['version'];
  variant?: BaseUIProps['variant'];
  effects?: string;
  type?: CardType;
}>({});

const Card = React.forwardRef<HTMLDivElement, CardProps & BaseUIProps>(({ 
  version = 'default',
  variant = 'default',
  type = 'default',
  effects,
  className,
  ...props 
}, ref) => {
  return (
    <CardContext.Provider value={{ version, variant, effects, type }}>
      <CardHandler
        ref={ref}
        version={version}
        variant={variant}
        type={type}
        effects={effects}
        className={className}
        {...props}
      />
    </CardContext.Provider>
  );
});
Card.displayName = 'Card';

export const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps & BaseUIProps>(
  ({ className, ...props }, ref) => {
    const context = React.useContext(CardContext);
    return (
      <CardHeaderHandler
        ref={ref}
        className={className}
        version={context.version}
        variant={context.variant}
        type={context.type}
        effects={context.effects}
        {...props}
      />
    );
  }
);
CardHeader.displayName = 'CardHeader';

export const CardTitle = React.forwardRef<HTMLHeadingElement, CardTitleProps & BaseUIProps>(
  ({ className, ...props }, ref) => {
    const context = React.useContext(CardContext);
    return (
      <CardTitleHandler
        ref={ref}
        className={className}
        version={context.version}
        variant={context.variant}
        type={context.type}
        effects={context.effects}
        {...props}
      />
    );
  }
);
CardTitle.displayName = 'CardTitle';

export const CardDescription = React.forwardRef<HTMLParagraphElement, CardDescriptionProps & BaseUIProps>(
  ({ className, ...props }, ref) => {
    const context = React.useContext(CardContext);
    return (
      <CardDescriptionHandler
        ref={ref}
        className={className}
        version={context.version}
        variant={context.variant}
        type={context.type}
        effects={context.effects}
        {...props}
      />
    );
  }
);
CardDescription.displayName = 'CardDescription';

export const CardContent = React.forwardRef<HTMLDivElement, CardContentProps & BaseUIProps>(
  ({ className, ...props }, ref) => {
    const context = React.useContext(CardContext);
    return (
      <CardContentHandler
        ref={ref}
        className={className}
        version={context.version}
        variant={context.variant}
        type={context.type}
        effects={context.effects}
        {...props}
      />
    );
  }
);
CardContent.displayName = 'CardContent';

export const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps & BaseUIProps>(
  ({ className, ...props }, ref) => {
    const context = React.useContext(CardContext);
    return (
      <CardFooterHandler
        ref={ref}
        className={className}
        version={context.version}
        variant={context.variant}
        type={context.type}
        effects={context.effects}
        {...props}
      />
    );
  }
);
CardFooter.displayName = 'CardFooter';

export default Card;

export type { BaseUIProps };
