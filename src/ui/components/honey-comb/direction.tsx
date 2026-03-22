import { honeyCombEffectsClass, type HoneyCombEffects } from './_effects';
import * as React from 'react';
import * as DirectionPrimitive from '@radix-ui/react-direction';

type DirectionProviderProps = React.ComponentPropsWithoutRef<typeof DirectionPrimitive.Provider> & {
  effects?: HoneyCombEffects;
};

const DirectionProvider = ({ effects = 'on', ...props }: DirectionProviderProps) => (
  <div className={honeyCombEffectsClass(effects)}>
    <DirectionPrimitive.Provider {...props} />
  </div>
);

export { DirectionProvider };
