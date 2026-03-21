import * as React from 'react';

export interface CarouselBaseProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: 'horizontal' | 'vertical';
}

export const CarouselBase = React.forwardRef<HTMLDivElement, CarouselBaseProps>(
  ({ orientation = 'horizontal', ...props }, ref) => (
    <div ref={ref} role="region" aria-roledescription="carousel" data-orientation={orientation} {...props} />
  )
);
CarouselBase.displayName = 'CarouselBase';

export interface CarouselContentBaseProps extends React.HTMLAttributes<HTMLDivElement> {}

export const CarouselContentBase = React.forwardRef<HTMLDivElement, CarouselContentBaseProps>(
  ({ ...props }, ref) => <div ref={ref} {...props} />
);
CarouselContentBase.displayName = 'CarouselContentBase';

export interface CarouselItemBaseProps extends React.HTMLAttributes<HTMLDivElement> {}

export const CarouselItemBase = React.forwardRef<HTMLDivElement, CarouselItemBaseProps>(
  ({ ...props }, ref) => <div ref={ref} role="group" aria-roledescription="slide" {...props} />
);
CarouselItemBase.displayName = 'CarouselItemBase';

export interface CarouselPreviousBaseProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const CarouselPreviousBase = React.forwardRef<HTMLButtonElement, CarouselPreviousBaseProps>(
  ({ ...props }, ref) => <button ref={ref} aria-label="Previous slide" {...props} />
);
CarouselPreviousBase.displayName = 'CarouselPreviousBase';

export interface CarouselNextBaseProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const CarouselNextBase = React.forwardRef<HTMLButtonElement, CarouselNextBaseProps>(
  ({ ...props }, ref) => <button ref={ref} aria-label="Next slide" {...props} />
);
CarouselNextBase.displayName = 'CarouselNextBase';
