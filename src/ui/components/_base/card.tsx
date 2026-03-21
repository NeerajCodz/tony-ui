import * as React from 'react';

export interface CardBaseProps extends React.HTMLAttributes<HTMLDivElement> {
  animated?: boolean;
}

export const CardBase = React.forwardRef<HTMLDivElement, CardBaseProps>(
  ({ animated: _animated, ...props }, ref) => <div ref={ref} {...props} />
);
CardBase.displayName = 'CardBase';

export interface CardHeaderBaseProps extends React.HTMLAttributes<HTMLDivElement> {
  animated?: boolean;
}

export const CardHeaderBase = React.forwardRef<HTMLDivElement, CardHeaderBaseProps>(
  ({ animated: _animated, ...props }, ref) => <div ref={ref} {...props} />
);
CardHeaderBase.displayName = 'CardHeaderBase';

export interface CardTitleBaseProps extends React.HTMLAttributes<HTMLHeadingElement> {
  animated?: boolean;
}

export const CardTitleBase = React.forwardRef<HTMLParagraphElement, CardTitleBaseProps>(
  ({ animated: _animated, ...props }, ref) => <h3 ref={ref} {...props} />
);
CardTitleBase.displayName = 'CardTitleBase';

export interface CardDescriptionBaseProps extends React.HTMLAttributes<HTMLParagraphElement> {
  animated?: boolean;
}

export const CardDescriptionBase = React.forwardRef<HTMLParagraphElement, CardDescriptionBaseProps>(
  ({ animated: _animated, ...props }, ref) => <p ref={ref} {...props} />
);
CardDescriptionBase.displayName = 'CardDescriptionBase';

export interface CardContentBaseProps extends React.HTMLAttributes<HTMLDivElement> {
  animated?: boolean;
}

export const CardContentBase = React.forwardRef<HTMLDivElement, CardContentBaseProps>(
  ({ animated: _animated, ...props }, ref) => <div ref={ref} {...props} />
);
CardContentBase.displayName = 'CardContentBase';

export interface CardFooterBaseProps extends React.HTMLAttributes<HTMLDivElement> {
  animated?: boolean;
}

export const CardFooterBase = React.forwardRef<HTMLDivElement, CardFooterBaseProps>(
  ({ animated: _animated, ...props }, ref) => <div ref={ref} {...props} />
);
CardFooterBase.displayName = 'CardFooterBase';

