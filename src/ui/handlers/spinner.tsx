'use client';

import React from 'react';
import { createHandler } from '../core/create-handler';
import type { BaseUIProps } from '../types/common';
import type { SpinnerProps as SpinnerTypeProps } from '../types/components/feedback';

export type SpinnerProps = Omit<SpinnerTypeProps, 'version'> & BaseUIProps;

const SpinnerHandler = createHandler<SpinnerProps>({
  componentName: 'spinner',
  exportName: 'Spinner'
});

const Spinner = React.forwardRef<HTMLDivElement, SpinnerProps>(({ version, variant, effects, ...props }, ref) => {
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
