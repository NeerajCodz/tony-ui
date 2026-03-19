/**
 * Centralized clip-path definitions for cyber-themed components.
 * These paths define the shapes used across various component versions.
 */

// Clip-path definitions organized by version and size
export const CLIP_PATHS = {
  'angular-corner': {
    // Large card-sized elements (20px/30px cuts)
    card: 'polygon(20px 0, 100% 0, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0 100%, 0 20px)',
    // Small elements like badges, buttons (10px cuts)
    small: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)',
    // Symmetric version for avatars and balanced elements (12px all corners)
    symmetric: 'polygon(12px 0, calc(100% - 12px) 0, 100% 12px, 100% calc(100% - 12px), calc(100% - 12px) 100%, 12px 100%, 0 calc(100% - 12px), 0 12px)',
    // Avatar-specific with 8px cuts
    avatar: 'polygon(8px 0, calc(100% - 8px) 0, 100% 8px, 100% calc(100% - 8px), calc(100% - 8px) 100%, 8px 100%, 0 calc(100% - 8px), 0 8px)',
  },
  'holo-frame': {
    default: 'polygon(8px 0, calc(100% - 8px) 0, 100% 8px, 100% calc(100% - 16px), calc(100% - 16px) 100%, 16px 100%, 0 calc(100% - 8px), 0 8px)',
    avatar: 'polygon(8px 0, calc(100% - 8px) 0, 100% 8px, 100% calc(100% - 16px), calc(100% - 16px) 100%, 16px 100%, 0 calc(100% - 8px), 0 8px)',
  },
  'data-panel': {
    default: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)',
    avatar: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)',
  },
  'quantum-gate': {
    default: 'polygon(12px 0, calc(100% - 12px) 0, 100% 50%, calc(100% - 12px) 100%, 12px 100%, 0 50%)',
    avatar: 'polygon(12px 0, calc(100% - 12px) 0, 100% 50%, calc(100% - 12px) 100%, 12px 100%, 0 50%)',
  },
  'tactical-hud': {
    default: 'polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))',
    avatar: 'polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))',
  },
  'energy-shield': {
    default: 'polygon(20% 0%, 80% 0%, 100% 50%, 80% 100%, 20% 100%, 0% 50%)',
    avatar: 'polygon(20% 0%, 80% 0%, 100% 50%, 80% 100%, 20% 100%, 0% 50%)',
  },
  'terminal-window': {
    default: 'polygon(0 0, 100% 0, 100% calc(100% - 4px), calc(100% - 4px) 100%, 4px 100%, 0 calc(100% - 4px))',
    avatar: 'polygon(0 0, 100% 0, 100% calc(100% - 4px), calc(100% - 4px) 100%, 4px 100%, 0 calc(100% - 4px))',
  },
  'matrix-grid': {
    default: 'polygon(6px 0, calc(100% - 6px) 0, 100% 6px, 100% calc(100% - 6px), calc(100% - 6px) 100%, 6px 100%, 0 calc(100% - 6px), 0 6px)',
    avatar: 'polygon(6px 0, calc(100% - 6px) 0, 100% 6px, 100% calc(100% - 6px), calc(100% - 6px) 100%, 6px 100%, 0 calc(100% - 6px), 0 6px)',
  },
  'neon': {
    default: 'polygon(4px 0, 100% 0, 100% 100%, 0 100%)',
    avatar: 'polygon(4px 0, 100% 0, 100% 100%, 0 100%)',
  },
  'bevel': {
    default: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)',
    small: 'polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px)',
  },
  'notch': {
    small: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%)',
    default: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)',
  },
  'circuit-board': {
    default: 'polygon(0 0, calc(100% - 18px) 0, 100% 18px, 100% 100%, 18px 100%, 0 calc(100% - 18px))',
    avatar: 'polygon(4px 0, 100% 0, 100% 100%, 12px 100%, 0 calc(100% - 12px))',
  },
  'parallelogram': {
    default: 'polygon(10px 0, 100% 0, calc(100% - 10px) 100%, 0 100%)',
  },
  'angle': {
    default: 'polygon(0 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%)',
  },
  'slant': {
    default: 'polygon(15px 0, 100% 0, calc(100% - 15px) 100%, 0 100%)',
  },
  'step': {
    default: 'polygon(0 0, calc(100% - 15px) 0, 100% 15px, 100% 100%, 0 100%)',
  },
  'tag': {
    default: 'polygon(0 0, calc(100% - 15px) 0, 100% 50%, calc(100% - 15px) 100%, 0 100%)',
  },
  'shards': {
    default: 'polygon(5% 0, 100% 0, 100% 80%, 95% 100%, 0 100%, 0 20%)',
  },
  'arrow': {
    default: 'polygon(0 0, calc(100% - 10px) 0, 100% 50%, calc(100% - 10px) 100%, 0 100%)',
  },
} as const;

// SVG path definitions that match the clip-paths for border drawing
// These are relative paths (using percentages and offsets)
export const SVG_PATHS = {
  'angular-corner': {
    card: (w: number, h: number) => 
      `M 20 0 L ${w} 0 L ${w} ${h - 30} L ${w - 30} ${h} L 0 ${h} L 0 20 Z`,
    small: (w: number, h: number) => 
      `M 10 0 L ${w} 0 L ${w} ${h - 10} L ${w - 10} ${h} L 0 ${h} L 0 10 Z`,
    symmetric: (w: number, h: number) => 
      `M 12 0 L ${w - 12} 0 L ${w} 12 L ${w} ${h - 12} L ${w - 12} ${h} L 12 ${h} L 0 ${h - 12} L 0 12 Z`,
    avatar: (w: number, h: number) => 
      `M 8 0 L ${w - 8} 0 L ${w} 8 L ${w} ${h - 8} L ${w - 8} ${h} L 8 ${h} L 0 ${h - 8} L 0 8 Z`,
  },
  'holo-frame': {
    default: (w: number, h: number) => 
      `M 8 0 L ${w - 8} 0 L ${w} 8 L ${w} ${h - 16} L ${w - 16} ${h} L 16 ${h} L 0 ${h - 8} L 0 8 Z`,
    avatar: (w: number, h: number) => 
      `M 8 0 L ${w - 8} 0 L ${w} 8 L ${w} ${h - 16} L ${w - 16} ${h} L 16 ${h} L 0 ${h - 8} L 0 8 Z`,
  },
  'data-panel': {
    default: (w: number, h: number) => 
      `M 0 0 L ${w - 12} 0 L ${w} 12 L ${w} ${h} L 0 ${h} Z`,
    avatar: (w: number, h: number) => 
      `M 0 0 L ${w - 12} 0 L ${w} 12 L ${w} ${h} L 0 ${h} Z`,
  },
  'quantum-gate': {
    default: (w: number, h: number) => 
      `M ${w * 0.12} 0 L ${w * 0.88} 0 L ${w} ${h * 0.5} L ${w * 0.88} ${h} L ${w * 0.12} ${h} L 0 ${h * 0.5} Z`,
    avatar: (w: number, h: number) => 
      `M ${w * 0.12} 0 L ${w * 0.88} 0 L ${w} ${h * 0.5} L ${w * 0.88} ${h} L ${w * 0.12} ${h} L 0 ${h * 0.5} Z`,
  },
  'tactical-hud': {
    default: (w: number, h: number) => 
      `M 0 0 L ${w - 16} 0 L ${w} 16 L ${w} ${h} L 16 ${h} L 0 ${h - 16} Z`,
    avatar: (w: number, h: number) => 
      `M 0 0 L ${w - 16} 0 L ${w} 16 L ${w} ${h} L 16 ${h} L 0 ${h - 16} Z`,
  },
  'energy-shield': {
    default: (w: number, h: number) => 
      `M ${w * 0.2} 0 L ${w * 0.8} 0 L ${w} ${h * 0.5} L ${w * 0.8} ${h} L ${w * 0.2} ${h} L 0 ${h * 0.5} Z`,
    avatar: (w: number, h: number) => 
      `M ${w * 0.2} 0 L ${w * 0.8} 0 L ${w} ${h * 0.5} L ${w * 0.8} ${h} L ${w * 0.2} ${h} L 0 ${h * 0.5} Z`,
  },
  'terminal-window': {
    default: (w: number, h: number) => 
      `M 0 0 L ${w} 0 L ${w} ${h - 4} L ${w - 4} ${h} L 4 ${h} L 0 ${h - 4} Z`,
    avatar: (w: number, h: number) => 
      `M 0 0 L ${w} 0 L ${w} ${h - 4} L ${w - 4} ${h} L 4 ${h} L 0 ${h - 4} Z`,
  },
  'matrix-grid': {
    default: (w: number, h: number) => 
      `M 6 0 L ${w - 6} 0 L ${w} 6 L ${w} ${h - 6} L ${w - 6} ${h} L 6 ${h} L 0 ${h - 6} L 0 6 Z`,
    avatar: (w: number, h: number) => 
      `M 6 0 L ${w - 6} 0 L ${w} 6 L ${w} ${h - 6} L ${w - 6} ${h} L 6 ${h} L 0 ${h - 6} L 0 6 Z`,
  },
  'neon': {
    default: (w: number, h: number) => 
      `M 4 0 L ${w} 0 L ${w} ${h} L 0 ${h} Z`,
    avatar: (w: number, h: number) => 
      `M 4 0 L ${w} 0 L ${w} ${h} L 0 ${h} Z`,
  },
  'bevel': {
    default: (w: number, h: number) => 
      `M 10 0 L ${w} 0 L ${w} ${h - 10} L ${w - 10} ${h} L 0 ${h} L 0 10 Z`,
    small: (w: number, h: number) => 
      `M 6 0 L ${w} 0 L ${w} ${h - 6} L ${w - 6} ${h} L 0 ${h} L 0 6 Z`,
  },
  'notch': {
    small: (w: number, h: number) => 
      `M 0 0 L ${w - 8} 0 L ${w} 8 L ${w} ${h} L 0 ${h} Z`,
    default: (w: number, h: number) => 
      `M 0 0 L ${w - 12} 0 L ${w} 12 L ${w} ${h} L 0 ${h} Z`,
  },
  'circuit-board': {
    default: (w: number, h: number) => 
      `M 0 0 L ${w - 18} 0 L ${w} 18 L ${w} ${h} L 18 ${h} L 0 ${h - 18} Z`,
    avatar: (w: number, h: number) => 
      `M 4 0 L ${w} 0 L ${w} ${h} L 12 ${h} L 0 ${h - 12} Z`,
  },
} as const;

/**
 * Get a clip-path string for a given version and variant
 */
export function getClipPath(version: keyof typeof CLIP_PATHS, variant: string = 'default'): string {
  const paths = CLIP_PATHS[version];
  if (!paths) return '';
  return (paths as Record<string, string>)[variant] || (paths as Record<string, string>).default || '';
}

/**
 * Get an SVG path generator for a given version and variant
 */
export function getSvgPathGenerator(
  version: keyof typeof SVG_PATHS, 
  variant: string = 'default'
): ((w: number, h: number) => string) | null {
  const paths = SVG_PATHS[version];
  if (!paths) return null;
  return (paths as Record<string, (w: number, h: number) => string>)[variant] || 
         (paths as Record<string, (w: number, h: number) => string>).default || 
         null;
}

export type ClipPathVersion = keyof typeof CLIP_PATHS;
export type SvgPathVersion = keyof typeof SVG_PATHS;
