'use client';

import React, { forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { VariantColors } from '@/ui/types/common';

export interface NativeSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  version?: string;
  variant?: string;
  type?: string;
  colors?: VariantColors;
}

const NativeSelect = forwardRef<HTMLSelectElement, NativeSelectProps>(
  ({ className, version, variant, type, colors, children, ...props }, ref) => {
    return (
      <select
        ref={ref}
        className={cn(
          "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        {...props}
      >
        {children}
      </select>
    );
  }
);
NativeSelect.displayName = "NativeSelect";

export { NativeSelect };
