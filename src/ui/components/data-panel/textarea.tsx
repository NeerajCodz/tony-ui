'use client';

import React, { forwardRef } from 'react';
import type { VariantColors } from '../../types/common';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  version?: string;
  variant?: string;
  colors?: VariantColors;
}

const DataPanelTextarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, colors, style, ...props }, ref) => {
    const bg = colors?.base || 'transparent';
    const fg = colors?.foreground || 'currentColor';
    const border = colors?.border || '#e5e7eb';
    const glow = colors?.glow || 'transparent';

    return (
      <textarea
        className={`flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
        ref={ref}
        style={{
            backgroundColor: bg,
            color: fg,
            borderColor: border,
            borderWidth: '1px',
            borderStyle: 'solid',
            borderRadius: '0',
            fontFamily: 'inherit',
            boxShadow: `none`,
            clipPath: 'none',
            ...style
        }}
        {...props}
      />
    );
  }
);
DataPanelTextarea.displayName = 'DataPanelTextarea';

export default DataPanelTextarea;
