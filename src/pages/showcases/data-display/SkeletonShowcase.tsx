/**
 * Skeleton Showcase
 */

import React from 'react';
import { ShowcaseTemplate } from '../_components';
import { Skeleton } from '@/ui/handlers/skeleton';

const SKELETON_TYPES = ['default'];

export function SkeletonShowcase() {
  return (
    <ShowcaseTemplate
      componentName="Skeleton"
      availableTypes={SKELETON_TYPES}
      defaultType="default"
      columns={4}
      renderComponent={({ version, variant, effects }) => (
        <div className="flex flex-col gap-2">
          <Skeleton
            version={version}
            variant={variant}
            effects={effects}
            className="h-12 w-32"
          />
          <Skeleton
            version={version}
            variant={variant}
            effects={effects}
            className="h-4 w-24"
          />
        </div>
      )}
    />
  );
}

export default SkeletonShowcase;
