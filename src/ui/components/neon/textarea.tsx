'use client';

import React, { forwardRef } from 'react';
import type { VariantColors } from '../../types/common';
import { TextareaBase } from '../_base/textarea';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  version?: string;
  type?: string;
  variant?: string;
  colors?: VariantColors;
}

const NeonOutlineTextarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, colors, type, style, ...props }, ref) => {
    let bg = colors?.base || 'transparent';
    let fg = colors?.foreground || 'currentColor';
    let border = colors?.border || '#e5e7eb';
    let glow = colors?.glow || 'transparent';

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
    } else if (type === 'outline') {
      bg = 'transparent';
      border = colors?.accent?.primary || border;
    } else if (type === 'ghost') {
      bg = 'transparent';
      border = 'transparent';
    } else if (!type || type === 'default') {
       // Full Neon Default
       border = colors?.accent?.primary || border;
       // bg remains base
    }

    return (
      <textarea
        className={`flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
        ref={ref}
        style={{
            backgroundColor: bg,
            color: fg,
            borderColor: border,
            borderWidth: '2px',
            borderStyle: 'solid',
            borderRadius: '0.5rem',
            fontFamily: 'inherit',
            boxShadow: type === 'ghost' ? 'none' : `0 0 5px ${glow}, 0 0 10px ${glow}`,
            clipPath: 'none',
            ...style
        }}
        {...props}
      />
    );
  }
);
NeonOutlineTextarea.displayName = 'NeonOutlineTextarea';

export default NeonOutlineTextarea;