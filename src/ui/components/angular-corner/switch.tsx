'use client';

import React, { forwardRef } from 'react';
import * as SwitchPrimitives from '@radix-ui/react-switch';
import type { VariantColors } from '../../types/common';

export interface SwitchProps extends React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root> {
  version?: string;
  type?: string;
  variant?: string;
  colors?: VariantColors;
}

const AngularCornerSwitch = forwardRef<React.ElementRef<typeof SwitchPrimitives.Root>, SwitchProps>(
  ({ className, colors, type, style, ...props }, ref) => {
    let bg = colors?.base || '#e2e8f0';
    let fg = colors?.foreground || '#ffffff';
    let accent = colors?.accent || colors?.base || '#3b82f6';
    let border = colors?.border || 'transparent';
    const glow = colors?.glow || 'transparent';

    if (type === 'inverse') {
      const temp = bg;
      bg = fg;
      fg = temp;
      accent = fg;
      border = bg;
    } else if (type === 'contrast') {
      bg = colors?.base || '#000000';
      fg = colors?.foreground || '#ffffff';
      border = fg;
      accent = fg;
    } else if (type === 'soft') {
      bg = colors?.muted || bg;
      accent = colors?.muted || accent;
    }

    return (
      <SwitchPrimitives.Root
        className={`peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-[var(--accent)] data-[state=unchecked]:bg-[var(--bg)] ${className}`}
        style={{
            '--accent': accent,
            '--bg': bg,
            '--border': border,
            borderRadius: '0',
            border: `0 solid ${border}`,
            boxShadow: `none`,
            fontFamily: 'inherit',
            clipPath: 'polygon(0 0, 100% 0, 100% 85%, 90% 100%, 0 100%)',
            ...style
        } as React.CSSProperties}
        {...props}
        ref={ref}
      >
        <SwitchPrimitives.Thumb
          className={`pointer-events-none block h-5 w-5 rounded-full bg-[var(--fg)] shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0`}
          style={{
              '--fg': fg,
              borderRadius: '0',
          } as React.CSSProperties}
        />
      </SwitchPrimitives.Root>
    );
  }
);
AngularCornerSwitch.displayName = 'AngularCornerSwitch';

export default AngularCornerSwitch;
