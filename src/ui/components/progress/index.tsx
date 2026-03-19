'use client';

import React, { lazy, Suspense, useMemo } from 'react';
import { VariantColors } from '@/ui/types/common';

export interface ProgressProps {
  version?: string;
  variant?: string;
  type?: string;
  colors?: VariantColors;
  value?: number;
  max?: number;
  showValue?: boolean;
  className?: string;
  [key: string]: any;
}

const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(({ 
  version = 'angular-corner',
  ...props 
}, ref) => {
  const Component = useMemo(() => lazy(() => import(`../../components/${version}/progress.tsx`).then(module => ({ default: module.Progress }))), [version]);

  return (
    <Suspense fallback={<div className="h-4 w-full bg-muted rounded-full overflow-hidden" />}>
      <Component ref={ref} version={version} {...props} />
    </Suspense>
  );
});
Progress.displayName = 'Progress';

export { Progress };
export default Progress;
