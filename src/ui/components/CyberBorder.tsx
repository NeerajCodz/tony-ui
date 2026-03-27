import React, { useEffect, useRef, useState, type FC, type ReactNode } from 'react';
import { getClipPath, getSvgPathGenerator } from '../utils/clip-paths.js';
import { VARIANT_COLOR_MAP, getColorVar } from '../utils/component-helpers.js';

export interface CyberBorderProps {
  version: string;
  variant?: 'neutral' | 'primary' | 'success' | 'warning' | 'destructive' | 'info';
  size?: 'small' | 'default' | 'card' | 'avatar';
  children: ReactNode;
  className?: string;
  borderWidth?: number;
  glow?: boolean;
  style?: React.CSSProperties;
}

/**
 * CyberBorder Component
 * 
 * Renders content with a border that follows the clip-path shape without being clipped.
 * Uses SVG path rendering to draw borders that match the clip-path polygon.
 */
export const CyberBorder: FC<CyberBorderProps> = ({
  version,
  variant = 'neutral',
  size = 'default',
  children,
  className = '',
  borderWidth = 2,
  glow = false,
  style = {},
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  // Get clip-path and color
  const clipPath = getClipPath(version as any, size);
  const colorType = VARIANT_COLOR_MAP[variant] || 'primary';
  const borderColor = getColorVar(colorType, 'base');

  // Update dimensions on mount and resize
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        setDimensions({ width, height });
      }
    };

    updateDimensions();
    
    const resizeObserver = new ResizeObserver(updateDimensions);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => resizeObserver.disconnect();
  }, []);

  // Generate SVG path
  const pathGenerator = getSvgPathGenerator(version as any, size);
  const svgPath = pathGenerator && dimensions.width > 0 
    ? pathGenerator(dimensions.width, dimensions.height)
    : '';

  return (
    <div
      ref={containerRef}
      className={`relative ${className}`}
      style={{
        clipPath,
        ...style,
      }}
    >
      {/* SVG border overlay */}
      {svgPath && (
        <svg
          className="absolute inset-0 pointer-events-none"
          style={{ 
            width: '100%', 
            height: '100%',
            overflow: 'visible',
            zIndex: 1,
          }}
        >
          <path
            d={svgPath}
            stroke={borderColor}
            strokeWidth={borderWidth}
            fill="none"
            style={{
              filter: glow 
                ? `drop-shadow(0 0 4px ${borderColor}) drop-shadow(0 0 8px ${borderColor})`
                : undefined,
            }}
          />
        </svg>
      )}
      
      {/* Content */}
      <div className="relative" style={{ zIndex: 0 }}>
        {children}
      </div>
    </div>
  );
};

CyberBorder.displayName = 'CyberBorder';
