import * as React from "react"
import { DirectionPrimitive } from '../_base/direction';
import { glassEffectsClass, type GlassEffects } from "./_effects"

type DirectionProviderProps = React.ComponentPropsWithoutRef<
  typeof DirectionPrimitive.Provider
> & {
  effects?: GlassEffects
}

const DirectionProvider = ({
  effects = "on",
  ...props
}: DirectionProviderProps) => (
  <div className={glassEffectsClass(effects)}>
    <DirectionPrimitive.Provider {...props} />
  </div>
)

export { DirectionProvider }
