'use client';

import React, { lazy, Suspense, useMemo } from 'react';
import { VariantColors } from '@/ui/types/common';

export interface NativeSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  version?: string;
  variant?: string;
  type?: string;
  colors?: VariantColors;
}

const LoadingSkeleton: React.FC = () => (
  <div className="animate-pulse bg-muted/20 w-full h-10 rounded" />
);

const NativeSelect = React.forwardRef<HTMLSelectElement, NativeSelectProps>(({ 
  version = 'angular-corner',
  ...props 
}, ref) => {
  const Component = useMemo(() => lazy(() => import(`../../components/${version}/native-select.tsx`).then(module => ({ default: module.NativeSelect }))), [version]);

  return (
    <Suspense fallback={<LoadingSkeleton />}>
      <Component ref={ref} version={version} {...props} />
    </Suspense>
  );
});
NativeSelect.displayName = 'NativeSelect';

export { NativeSelect };
export default NativeSelect;
