'use client';

import React, { forwardRef } from 'react';import { cn } from '@/lib/utils';
import { VariantColors } from '@/ui/types/common';

import { ProgressBase, ProgressIndicatorBase } from '../_base/progress';

const getStyles = (type?: string, colors?: VariantColors) => {
  if (!type || !colors) return {};
  
  switch (type) {
    case 'inverse':
      return {
        backgroundColor: colors.text,
        color: colors.background,
        border: `1px solid ${colors.text}`
      };
    case 'contrast':
      return {
        backgroundColor: colors.accent?.primary || colors.text,
        color: '#000000',
        fontWeight: 'bold',
        border: `1px solid ${colors.text}`
      };
    case 'soft':
      return {
        backgroundColor: colors.accent?.rgb ? `rgba(${colors?.accent?.rgb}, 0.1)` : (colors.accent?.primary ? `color-mix(in srgb, ${colors?.accent?.primary} 10%, transparent)` : 'rgba(0,0,0,0.1)'),
        color: colors.accent?.primary || colors.text,
        border: 'none'
      };
    default:
      return {};
  }
};


interface ProgressProps extends React.ComponentPropsWithoutRef<typeof ProgressBase> {
  version?: string;
  variant?: string;
  type?: string;
  colors?: VariantColors;
  showValue?: boolean;
}

const Progress = forwardRef<React.ElementRef<typeof ProgressBase>, ProgressProps>(
  ({ className, value, version, variant, type, colors, showValue, ...props }, ref) => (
    <ProgressBase
      ref={ref}
      className={cn(
        "relative h-4 w-full overflow-hidden rounded-full bg-secondary",
        className
      )}
      {...props} style={{ ...getStyles(type, colors), ...(props.style as any) }}
    >
      <ProgressIndicatorBase
        className="h-full w-full flex-1 bg-primary transition-all"
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </ProgressBase>
  )
);
Progress.displayName = ProgressBase.displayName;

export { Progress };
export default Progress;
