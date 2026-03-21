import * as React from 'react';

export interface SonnerBaseProps {
  position?: 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';
  expand?: boolean;
  richColors?: boolean;
  closeButton?: boolean;
}

export const SonnerBase = ({ position, expand, richColors, closeButton, ...props }: SonnerBaseProps) => <div {...props} />;
SonnerBase.displayName = 'SonnerBase';
