import { energyShieldEffectsClass, type EnergyShieldEffects } from './_effects';
import * as React from 'react';
import * as DirectionPrimitive from '@radix-ui/react-direction';

type DirectionProviderProps = React.ComponentPropsWithoutRef<typeof DirectionPrimitive.Provider> & {
  effects?: EnergyShieldEffects;
};

const DirectionProvider = ({ effects = 'on', ...props }: DirectionProviderProps) => (
  <div className={energyShieldEffectsClass(effects)}>
    <DirectionPrimitive.Provider {...props} />
  </div>
);

export { DirectionProvider };
