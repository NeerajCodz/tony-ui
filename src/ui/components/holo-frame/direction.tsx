import { holoFrameEffectsClass, type HoloFrameEffects } from './_effects';
import * as React from 'react';
import { DirectionPrimitive } from '../_base/direction';
type DirectionProviderProps = React.ComponentPropsWithoutRef<typeof DirectionPrimitive.Provider> & {
  effects?: HoloFrameEffects;
};

const DirectionProvider = ({ effects = 'on', ...props }: DirectionProviderProps) => (
  <div className={holoFrameEffectsClass(effects)}>
    <DirectionPrimitive.Provider {...props} />
  </div>
);

export { DirectionProvider };
