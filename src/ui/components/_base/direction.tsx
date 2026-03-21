import * as React from 'react';
import * as DirectionPrimitive from '@radix-ui/react-direction';

export const DirectionProviderBase = DirectionPrimitive.Provider;

export interface DirectionBaseProps {
  dir?: 'ltr' | 'rtl';
  children: React.ReactNode;
}

export const DirectionBase = ({ dir = 'ltr', children }: DirectionBaseProps) => (
  <DirectionPrimitive.Provider dir={dir}>{children}</DirectionPrimitive.Provider>
);
DirectionBase.displayName = 'DirectionBase';
