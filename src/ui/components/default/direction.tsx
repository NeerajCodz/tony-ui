import * as React from 'react';
import {
  DirectionBase,
  DirectionProviderBase,
  useDirectionBase,
  type Direction,
} from '@/ui/components/_base/direction';

// Re-export without changes as Direction is a logic provider, not a visual component
// But we still wrap it in the default component structure for consistency

export {
  DirectionBase as Direction,
  DirectionProviderBase as DirectionProvider,
  useDirectionBase as useDirection,
};
export type { Direction };
