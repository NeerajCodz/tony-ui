import { quantumGateEffectsClass, type QuantumGateEffects } from './_effects';
import * as React from 'react';
import * as DirectionPrimitive from '@radix-ui/react-direction';

type DirectionProviderProps = React.ComponentPropsWithoutRef<typeof DirectionPrimitive.Provider> & {
  effects?: QuantumGateEffects;
};

const DirectionProvider = ({ effects = 'on', ...props }: DirectionProviderProps) => (
  <div className={quantumGateEffectsClass(effects)}>
    <DirectionPrimitive.Provider {...props} />
  </div>
);

export { DirectionProvider };
