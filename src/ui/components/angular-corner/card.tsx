'use client';

import React from 'react';
import { cn } from '../../../lib/utils';
import { CLIP_PATHS } from '../../utils/clip-paths.js';
import type { VariantColors } from '../../types/common';

const CLIP_PATH = CLIP_PATHS['angular-corner']?.card || 'polygon(16px 0, 100% 0, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0 100%, 0 16px)';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  version?: string;
  variant?: string;
  type?: string;
  size?: string;
  colors?: VariantColors;
  styles?: React.CSSProperties;
  config?: any;
  animated?: boolean;
  disabled?: boolean;
}

const AngularCornerCard = React.forwardRef<HTMLDivElement, CardProps>(({
  variant = 'primary',
  type = 'default',
  animated = true,
  className = '',
  children,
  disabled = false,
  onClick,
  colors,
  styles = {},
  ...props
}, ref) => {
  // Use colors from handler if provided, otherwise fallback to variant-based colors
  const baseColor = colors?.base || '#06b6d4';
  const borderColor = colors?.border || '#0891b2';
  const glowColor = colors?.glow || '#22d3ee';

  const getTypeStyles = (): React.CSSProperties => {
    const base: React.CSSProperties = {
      clipPath: CLIP_PATH,
    };

    switch (type) {
      case 'outline':
        return {
          ...base,
          backgroundColor: 'transparent',
          border: `2px solid ${borderColor}`,
          filter: `drop-shadow(0 0 5px ${glowColor}40)`,
        };
      case 'solid':
        return {
          ...base,
          backgroundColor: 'rgba(10, 14, 20, 0.95)',
          border: `1px solid ${borderColor}`,
          filter: 'drop-shadow(0 5px 15px rgba(0,0,0, 0.8))',
        };
      case 'ghost':
        return {
          ...base,
          backgroundColor: 'transparent',
          border: `1px solid ${borderColor}40`,
        };
      case 'default':
      default:
        return {
          ...base,
          backgroundColor: `${baseColor}10`,
          backdropFilter: 'blur(10px)',
          border: `1px solid ${borderColor}50`,
          boxShadow: `inset 0 0 20px ${baseColor}08, 0 0 20px ${glowColor}20`,
        };
    }
  };

  return (
    <div
      ref={ref}
      className={cn(
        'relative group transition-all duration-300',
        animated ? 'animate-in fade-in zoom-in-95 duration-500' : '',
        disabled ? 'opacity-50 cursor-not-allowed' : onClick ? 'cursor-pointer hover:scale-[1.01]' : 'hover:scale-[1.005]',
        className
      )}
      onClick={disabled ? undefined : onClick}
      style={{
        ...getTypeStyles(),
        ...styles,
      }}
      {...props}
    >
      {/* Dynamic Background Glow on Hover */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: `radial-gradient(circle at center, ${baseColor}20, transparent 70%)` }}
      />

      {/* Tech accents */}
      <div 
        className="absolute top-0 left-0 w-8 h-[2px] transition-all duration-300 group-hover:w-16" 
        style={{ background: glowColor }} 
      />
      <div 
        className="absolute top-0 left-0 w-[2px] h-8 transition-all duration-300 group-hover:h-16" 
        style={{ background: glowColor }} 
      />
      
      <div 
        className="absolute bottom-0 right-0 w-8 h-[2px] transition-all duration-300 group-hover:w-16" 
        style={{ background: glowColor }} 
      />
      <div 
        className="absolute bottom-0 right-0 w-[2px] h-8 transition-all duration-300 group-hover:h-16" 
        style={{ background: glowColor }} 
      />

      {/* Content */}
      <div className="relative z-10 p-6 h-full flex flex-col">
        {children}
      </div>
    </div>
  );
});

AngularCornerCard.displayName = 'AngularCornerCard';

// Card Header
export const AngularCornerCardHeader = React.forwardRef<HTMLDivElement, CardProps>(
  ({ children, className = '', colors, ...props }, ref) => {
    const borderColor = colors?.border || '#0891b2';
    
    return (
      <div
        ref={ref}
        className={cn('flex flex-col gap-1.5 pb-4 mb-4', className)}
        style={{ borderBottom: `1px solid ${borderColor}30` }}
        {...props}
      >
        {children}
      </div>
    );
  }
);
AngularCornerCardHeader.displayName = 'AngularCornerCardHeader';

// Card Title
export const AngularCornerCardTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement> & { colors?: VariantColors }>(
  ({ children, className = '', colors, ...props }, ref) => {
    const fg = colors?.foreground || '#ffffff';
    const glow = colors?.glow || '#22d3ee';
    
    return (
      <h3
        ref={ref}
        className={cn('text-xl font-bold uppercase tracking-wider flex items-center gap-2', className)}
        style={{ color: fg }}
        {...props}
      >
        <span style={{ color: glow, fontSize: '0.75em' }}>◆</span>
        {children}
      </h3>
    );
  }
);
AngularCornerCardTitle.displayName = 'AngularCornerCardTitle';

// Card Description
export const AngularCornerCardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement> & { colors?: VariantColors }>(
  ({ children, className = '', colors, ...props }, ref) => {
    const fg = colors?.foreground || '#ffffff';
    
    return (
      <p
        ref={ref}
        className={cn('text-sm opacity-70', className)}
        style={{ color: fg }}
        {...props}
      >
        {children}
      </p>
    );
  }
);
AngularCornerCardDescription.displayName = 'AngularCornerCardDescription';

// Card Content
export const AngularCornerCardContent = React.forwardRef<HTMLDivElement, CardProps>(
  ({ children, className = '', ...props }, ref) => (
    <div ref={ref} className={cn('flex-1', className)} {...props}>
      {children}
    </div>
  )
);
AngularCornerCardContent.displayName = 'AngularCornerCardContent';

// Card Footer
export const AngularCornerCardFooter = React.forwardRef<HTMLDivElement, CardProps>(
  ({ children, className = '', colors, ...props }, ref) => {
    const borderColor = colors?.border || '#0891b2';
    
    return (
      <div
        ref={ref}
        className={cn('flex items-center gap-2 pt-4 mt-4', className)}
        style={{ borderTop: `1px solid ${borderColor}30` }}
        {...props}
      >
        {children}
      </div>
    );
  }
);
AngularCornerCardFooter.displayName = 'AngularCornerCardFooter';

export default AngularCornerCard;
