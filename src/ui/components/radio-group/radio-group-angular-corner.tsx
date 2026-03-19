import React from 'react';
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"
import { Circle, Hexagon, Square, Diamond, Triangle } from "lucide-react"
import { cn } from '../../../lib/utils';

// Common styles for this version
const versionStyles = {
  'angular-corner': {
    root: "grid gap-2",
    item: "aspect-square h-5 w-5 rounded-none border border-cyan-700 text-cyan-500 ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 clip-path-bevel-sm data-[state=checked]:bg-cyan-900/50",
    indicator: "h-3 w-3 fill-current text-cyan-500"
  },
  'holo-frame': {
    root: "grid gap-2",
    item: "aspect-square h-5 w-5 rounded-full border border-cyan-400/50 bg-cyan-900/10 text-cyan-100 ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 shadow-[0_0_10px_rgba(6,182,212,0.2)] data-[state=checked]:shadow-[0_0_15px_rgba(6,182,212,0.6)] transition-all",
    indicator: "h-3 w-3 fill-current text-cyan-200"
  },
  'data-panel': {
     root: "grid gap-2",
     item: "aspect-square h-5 w-5 rounded-none border-2 border-slate-600 bg-slate-800 text-slate-200 ring-offset-background focus:outline-none focus-visible:border-slate-400 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:border-slate-200",
     indicator: "h-3 w-3 fill-current text-slate-200"
  },
  'circuit-board': {
    root: "grid gap-2",
    item: "aspect-square h-5 w-5 rounded-sm border border-emerald-600/50 bg-emerald-950/30 text-emerald-400 ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-emerald-500/20",
    indicator: "h-3 w-3 fill-current text-emerald-400"
  },
  'quantum-gate': {
     root: "grid gap-2",
     item: "aspect-square h-5 w-5 rounded-full border border-violet-500/50 bg-violet-950/20 text-violet-300 ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:border-violet-400",
     indicator: "h-3 w-3 fill-current text-violet-300"
  },
  'tactical-hud': {
    root: "grid gap-2",
    item: "aspect-square h-5 w-5 border-2 border-orange-700/60 bg-black text-orange-500 ring-offset-background focus:outline-none focus-visible:border-orange-500 disabled:cursor-not-allowed disabled:opacity-50 clip-path-notch-sm data-[state=checked]:bg-orange-900/40",
    indicator: "h-3 w-3 fill-current text-orange-500"
  },
  'energy-shield': {
     root: "grid gap-2",
     item: "aspect-square h-5 w-5 rounded-full border border-blue-400/60 bg-blue-900/20 text-blue-300 ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:shadow-[0_0_10px_rgba(59,130,246,0.5)]",
     indicator: "h-3 w-3 fill-current text-blue-300"
  },
  'terminal-window': {
    root: "grid gap-2",
    item: "aspect-square h-5 w-5 rounded-none border border-green-600/50 bg-black text-green-500 ring-offset-background focus:outline-none focus-visible:border-green-400 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-green-900/30",
    indicator: "h-3 w-3 fill-current text-green-500"
  },
  'matrix-grid': {
    root: "grid gap-2",
    item: "aspect-square h-5 w-5 rounded-sm border border-lime-500/40 bg-black/90 text-lime-400 ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-lime-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:border-lime-400",
    indicator: "h-3 w-3 fill-current text-lime-400"
  },
  'neon': {
    root: "grid gap-2",
    item: "aspect-square h-5 w-5 rounded-full border-2 border-fuchsia-500/60 bg-transparent text-fuchsia-300 ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:shadow-[0_0_10px_rgba(217,70,239,0.6)]",
    indicator: "h-3 w-3 fill-current text-fuchsia-300"
  },
  // Default fallback
  'default': {
    root: "grid gap-2",
    item: "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
    indicator: "h-2.5 w-2.5 fill-current text-current"
  }
};

const getStyles = (v) => versionStyles[v] || versionStyles['default'];
const styles = getStyles('angular-corner' in versionStyles ? 'angular-corner' : 'default');

// Select appropriate icon based on version
const Icon = ['angular-corner', 'data-panel', 'tactical-hud', 'terminal-window'].includes('angular-corner') ? Square : Circle;

const RadioGroup = React.forwardRef(({ className, ...props }: any, ref: any) => (
  <RadioGroupPrimitive.Root
    className={cn(styles.root, className)}
    {...props}
    ref={ref}
  />
));
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

const RadioGroupItem = React.forwardRef(({ className, ...props }: any, ref: any) => (
  <RadioGroupPrimitive.Item
    ref={ref}
    className={cn(styles.item, className)}
    {...props}
  >
    <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
      <Icon className={styles.indicator} />
    </RadioGroupPrimitive.Indicator>
  </RadioGroupPrimitive.Item>
))
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName

export default RadioGroup;
export { RadioGroupItem as Item };
