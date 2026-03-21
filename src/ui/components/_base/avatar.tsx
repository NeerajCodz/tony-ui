import * as React from 'react';

export interface AvatarBaseProps extends React.HTMLAttributes<HTMLDivElement> {}

export const AvatarBase = React.forwardRef<HTMLDivElement, AvatarBaseProps>(
  ({ ...props }, ref) => <div ref={ref} {...props} />
);
AvatarBase.displayName = 'AvatarBase';

export interface AvatarImageBaseProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

export const AvatarImageBase = React.forwardRef<HTMLImageElement, AvatarImageBaseProps>(
  ({ ...props }, ref) => <img ref={ref} {...props} />
);
AvatarImageBase.displayName = 'AvatarImageBase';

export interface AvatarFallbackBaseProps extends React.HTMLAttributes<HTMLDivElement> {}

export const AvatarFallbackBase = React.forwardRef<HTMLDivElement, AvatarFallbackBaseProps>(
  ({ ...props }, ref) => <div ref={ref} {...props} />
);
AvatarFallbackBase.displayName = 'AvatarFallbackBase';
