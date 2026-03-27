'use client';

import React from 'react';
import { createHandler } from '../core/create-handler';
import type { BaseUIProps } from '../types/common';
import type { AnalogClockProps } from '../types/components/data-display';

const AnalogClockHandler = createHandler<AnalogClockProps & BaseUIProps>({
  componentName: 'analog-clock',
  exportName: 'AnalogClock'
});

const AnalogClock = React.forwardRef<SVGSVGElement, AnalogClockProps & BaseUIProps>(({ version, variant, effects, type, ...props }, ref) => {
  return (
    <AnalogClockHandler
      ref={ref}
      version={version}
      variant={variant}
      effects={effects}
      uiType={type}
      {...props}
    />
  );
});

AnalogClock.displayName = 'AnalogClock';

export default AnalogClock;
export type { AnalogClockProps };
