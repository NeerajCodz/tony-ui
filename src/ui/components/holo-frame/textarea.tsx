'use client';

import React, { forwardRef } from 'react';
import type { VariantColors } from '../../types/common';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  version?: string;
  type?: string;
  variant?: string;
  colors?: VariantColors;
}

const HoloFrameTextarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, colors, type, style, ...props }, ref) => {
    let bg = colors?.base || 'transparent';
    let fg = colors?.foreground || 'currentColor';
    let border = colors?.border || '#e5e7eb';
    const glow = colors?.glow || 'transparent';

    if (type === 'inverse') {
      const temp = bg;
      bg = fg;
      fg = temp;
      border = bg;
    } else if (type === 'contrast') {
      border = fg;
      bg = colors?.base || '#000000';
      fg = colors?.foreground || '#ffffff';
    } else if (type === 'soft') {
      bg = colors?.muted || bg;
      border = colors?.border ? `${colors.border}40` : border;
    }

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
            boxShadow: `inset 0 0 20px rgba(${glow}, 0.2)`,
            clipPath: 'none',
            ...style
        }}
        {...props}
      />
    );
  }
);
HoloFrameTextarea.displayName = 'HoloFrameTextarea';

export default HoloFrameTextarea;
