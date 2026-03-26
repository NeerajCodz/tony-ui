'use client';

import React from 'react';
import * as AspectRatioPrimitive from '@radix-ui/react-aspect-ratio';
import { createHandler } from '../core/create-handler';
import type { BaseUIProps } from '../types/common';

export interface AspectRatioProps extends React.ComponentPropsWithoutRef<typeof AspectRatioPrimitive.Root> {
  version?: BaseUIProps['version'];
  variant?: BaseUIProps['variant'];
}

const AspectRatioHandler = createHandler<AspectRatioProps & BaseUIProps>({
  componentName: 'aspect-ratio',
  exportName: 'AspectRatio'
});

const AspectRatio = React.forwardRef<HTMLDivElement, AspectRatioProps>(({ version = 'default', variant = 'default', ...props }, ref) => {
  return (
    <AspectRatioHandler
      ref={ref}
      version={version}
      variant={variant}
      {...props}
    />
  );
});

AspectRatio.displayName = 'AspectRatio';

export default AspectRatio;
