'use client';

import React from 'react';
import { createHandler } from '../core/create-handler';
import type { BaseUIProps } from '../types/common';
import type { AspectRatioProps } from '../types/components/data-display';

const AspectRatioHandler = createHandler<AspectRatioProps & BaseUIProps>({
  componentName: 'aspect-ratio',
  exportName: 'AspectRatio'
});

const AspectRatio = React.forwardRef<HTMLDivElement, AspectRatioProps & BaseUIProps>(({ version, variant, effects, ...props }, ref) => {
  return (
    <AspectRatioHandler
      ref={ref}
      version={version}
      variant={variant}
      effects={effects}
      {...props}
    />
  );
});

AspectRatio.displayName = 'AspectRatio';

export default AspectRatio;
export type { AspectRatioProps };
