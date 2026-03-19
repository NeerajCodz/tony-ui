import React, { useRef, useEffect, useState } from 'react';
import { getClipPath, getSvgPathGenerator, type ClipPathVersion, type SvgPathVersion } from './clip-paths.js';

export interface CyberBorderProps {
  /** The clip-path version to use (e.g., 'angular-corner', 'bevel', 'notch') */
  version: ClipPathVersion & SvgPathVersion;
  /** The variant within the version (e.g., 'card', 'small', 'symmetric') */
  variant?: string;
  /** Border color - can be CSS color or variable */
  borderColor?: string;
  /** Border width in pixels */
  borderWidth?: number;
  /** Background color for the content area */
  backgroundColor?: string;
  /** Optional glow effect color */
  glowColor?: string;
  /** Glow intensity (0-1) */
  glowIntensity?: number;
  /** Additional className for the container */
  className?: string;
  /** Additional inline styles */
  style?: React.CSSProperties;
  /** Content to render inside */
  children: React.ReactNode;
}

/**
 * CyberBorder component renders a container with a shaped border that matches
 * the clip-path, solving the issue where borders get cut by clip-path.
 * 
 * Uses SVG for pixel-perfect border rendering that follows the exact shape.
 */
export const CyberBorder: React.FC<CyberBorderProps> = ({
  version,
  variant = 'default',
  borderColor = 'currentColor',
  borderWidth = 1,
  backgroundColor = 'transparent',
  glowColor,
  glowIntensity = 0.5,
  className = '',
  style,
  children,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  // Get the clip-path and SVG path generator for this version/variant
  const clipPath = getClipPath(version, variant);
  const pathGenerator = getSvgPathGenerator(version, variant);

  // Track container dimensions for SVG sizing
  useEffect(() => {
    if (!containerRef.current) return;

    const updateDimensions = () => {
      if (containerRef.current) {
        const { offsetWidth, offsetHeight } = containerRef.current;
        setDimensions({ width: offsetWidth, height: offsetHeight });
      }
    };

    updateDimensions();

    const resizeObserver = new ResizeObserver(updateDimensions);
    resizeObserver.observe(containerRef.current);

    return () => resizeObserver.disconnect();
  }, []);

  // Generate the SVG path
  const svgPath = pathGenerator ? pathGenerator(dimensions.width, dimensions.height) : '';

  // Build filter for glow effect
  const glowFilter = glowColor 
    ? `drop-shadow(0 0 ${4 * glowIntensity}px ${glowColor}) drop-shadow(0 0 ${8 * glowIntensity}px ${glowColor})`
    : undefined;

  return (
    <div
      ref={containerRef}
      className={`relative ${className}`}
      style={{
        clipPath,
        backgroundColor,
        ...style,
      }}
    >
      {/* SVG Border Layer - positioned absolutely to overlay the content */}
      {svgPath && dimensions.width > 0 && dimensions.height > 0 && (
        <svg
          className="absolute inset-0 pointer-events-none"
          width={dimensions.width}
          height={dimensions.height}
          viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
          preserveAspectRatio="none"
          style={{ filter: glowFilter }}
        >
          <path
            d={svgPath}
            fill="none"
            stroke={borderColor}
            strokeWidth={borderWidth}
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      )}

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

/**
 * Hook that returns props for creating a cyber-bordered element
 * Use this when you need more control over the rendering
 */
export function useCyberBorder(
  version: ClipPathVersion & SvgPathVersion,
  variant: string = 'default'
) {
  const ref = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const clipPath = getClipPath(version, variant);
  const pathGenerator = getSvgPathGenerator(version, variant);

  useEffect(() => {
    if (!ref.current) return;

    const updateDimensions = () => {
      if (ref.current) {
        const { offsetWidth, offsetHeight } = ref.current;
        setDimensions({ width: offsetWidth, height: offsetHeight });
      }
    };

    updateDimensions();

    const resizeObserver = new ResizeObserver(updateDimensions);
    resizeObserver.observe(ref.current);

    return () => resizeObserver.disconnect();
  }, []);

  const svgPath = pathGenerator ? pathGenerator(dimensions.width, dimensions.height) : '';

  return {
    ref,
    clipPath,
    svgPath,
    dimensions,
    hasBorder: !!svgPath && dimensions.width > 0 && dimensions.height > 0,
  };
}

export default CyberBorder;
