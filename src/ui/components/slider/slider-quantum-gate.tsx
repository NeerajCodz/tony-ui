import React from 'react';
import * as SliderPrimitive from '@radix-ui/react-slider';
import { cn } from '../../../lib/utils';

// Common styles for this version
const versionStyles = {
  'angular-corner': {
    root: "relative flex w-full touch-none select-none items-center",
    track: "relative h-2 w-full grow overflow-hidden bg-gray-800 clip-path-bevel-sm rounded-none",
    range: "absolute h-full bg-cyan-600",
    thumb: "block h-5 w-5 border-2 border-cyan-500 bg-black ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 clip-path-bevel-sm rounded-none hover:bg-cyan-900",
  },
  'holo-frame': {
    root: "relative flex w-full touch-none select-none items-center",
    track: "relative h-1.5 w-full grow overflow-hidden rounded-full bg-cyan-900/30 shadow-[0_0_5px_rgba(6,182,212,0.2)]",
    range: "absolute h-full bg-cyan-400/80 shadow-[0_0_10px_rgba(6,182,212,0.5)]",
    thumb: "block h-4 w-4 rounded-full border border-cyan-200 bg-cyan-500 ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 shadow-[0_0_10px_rgba(6,182,212,0.8)] hover:scale-110",
  },
  'data-panel': {
     root: "relative flex w-full touch-none select-none items-center",
    track: "relative h-2 w-full grow overflow-hidden bg-slate-800 rounded-none",
    range: "absolute h-full bg-slate-400",
    thumb: "block h-4 w-2 bg-slate-200 ring-offset-background transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 rounded-none",
  },
  'circuit-board': {
    root: "relative flex w-full touch-none select-none items-center",
    track: "relative h-1.5 w-full grow overflow-hidden bg-emerald-950/80 rounded-sm border border-emerald-900",
    range: "absolute h-full bg-emerald-600",
    thumb: "block h-4 w-4 border border-emerald-400 bg-emerald-900 ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 rounded-sm shadow-[0_0_5px_rgba(52,211,153,0.5)]",
  },
  'quantum-gate': {
     root: "relative flex w-full touch-none select-none items-center",
    track: "relative h-1 w-full grow overflow-hidden bg-violet-950/50 rounded-full",
    range: "absolute h-full bg-violet-500",
    thumb: "block h-5 w-5 border-2 border-violet-400 bg-violet-950 ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 rounded-full shadow-[0_0_10px_rgba(139,92,246,0.6)]",
  },
  'tactical-hud': {
    root: "relative flex w-full touch-none select-none items-center",
    track: "relative h-3 w-full grow overflow-hidden bg-black border border-orange-900 rounded-none",
    range: "absolute h-full bg-orange-600/60 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9IiNjMjQxMGMiIGZpbGwtb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTEgMWgydjJIMUMxeiIgZmlsbD0iIzAwMCIgZmlsbC1vcGFjaXR5PSIwLjMiLz48L3N2Zz4=')]",
    thumb: "block h-5 w-3 bg-orange-500 ring-offset-background transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 rounded-none clip-path-notch-sm",
  },
  'energy-shield': {
     root: "relative flex w-full touch-none select-none items-center",
    track: "relative h-2 w-full grow overflow-hidden bg-blue-950/50 rounded-full border border-blue-900",
    range: "absolute h-full bg-blue-500/60 shadow-[0_0_8px_rgba(59,130,246,0.6)]",
    thumb: "block h-5 w-5 bg-blue-100 ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)]",
  },
  'terminal-window': {
    root: "relative flex w-full touch-none select-none items-center",
    track: "relative h-4 w-full grow overflow-hidden bg-black border border-green-900 rounded-none",
    range: "absolute h-full bg-green-900/40",
    thumb: "block h-4 w-4 bg-green-500 ring-offset-background transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 rounded-none",
  },
  'matrix-grid': {
    root: "relative flex w-full touch-none select-none items-center",
    track: "relative h-1.5 w-full grow overflow-hidden bg-black border border-lime-900 rounded-sm",
    range: "absolute h-full bg-lime-600",
    thumb: "block h-3 w-3 bg-lime-400 ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 rounded-sm shadow-[0_0_5px_rgba(163,230,53,0.8)]",
  },
  'neon-outline': {
    root: "relative flex w-full touch-none select-none items-center",
    track: "relative h-1.5 w-full grow overflow-hidden bg-gray-900/50 rounded-full border border-fuchsia-900/50",
    range: "absolute h-full bg-fuchsia-500 shadow-[0_0_8px_rgba(217,70,239,0.5)]",
    thumb: "block h-5 w-5 border-2 border-fuchsia-400 bg-black ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 rounded-full shadow-[0_0_8px_rgba(217,70,239,0.6)]",
  },
  // Default fallback
  'default': {
    root: "relative flex w-full touch-none select-none items-center",
    track: "relative h-2 w-full grow overflow-hidden rounded-full bg-secondary",
    range: "absolute h-full bg-primary",
    thumb: "block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  }
};

const getStyles = (v) => versionStyles[v] || versionStyles['default'];
const styles = getStyles('quantum-gate' in versionStyles ? 'quantum-gate' : 'default');

const Slider = React.forwardRef(({ className, ...props }: any, ref: any) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(styles.root, className)}
    {...props}
  >
    <SliderPrimitive.Track className={cn(styles.track)}>
      <SliderPrimitive.Range className={cn(styles.range)} />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className={cn(styles.thumb)} />
  </SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;

export default Slider;
