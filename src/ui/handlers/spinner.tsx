'use client';

import React from 'react';
import { createHandler } from '../core/create-handler';
import type { BaseUIProps } from '../types/common';
import type { SpinnerProps } from '../types/components/feedback';

const SpinnerHandler = createHandler<SpinnerProps & BaseUIProps>({
  componentName: 'spinner',
  exportName: 'Spinner'
});

const Spinner = React.forwardRef<HTMLDivElement, SpinnerProps & BaseUIProps>(({ version, variant, effects, ...props }, ref) => {
  return (
    <SpinnerHandler
      ref={ref}
      version={version}
      variant={variant}
      effects={effects}
      {...props}
    />
  );
});

Spinner.displayName = 'Spinner';

export default Spinner;
export type { SpinnerProps };
