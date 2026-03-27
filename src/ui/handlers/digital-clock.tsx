'use client';

import React from 'react';
import { createHandler } from '../core/create-handler';
import type { BaseUIProps } from '../types/common';
import type { DigitalClockProps } from '../types/components/data-display';

const DigitalClockHandler = createHandler<DigitalClockProps & BaseUIProps>({
  componentName: 'digital-clock',
  exportName: 'DigitalClock'
});

const DigitalClock = React.forwardRef<HTMLDivElement, DigitalClockProps & BaseUIProps>(({ version, variant, effects, type, ...props }, ref) => {
  return (
    <DigitalClockHandler
      ref={ref}
      version={version}
      variant={variant}
      effects={effects}
      uiType={type}
      {...props}
    />
  );
});

DigitalClock.displayName = 'DigitalClock';

export default DigitalClock;
export type { DigitalClockProps };
