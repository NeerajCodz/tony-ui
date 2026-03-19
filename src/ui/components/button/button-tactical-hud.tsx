import React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../../lib/utils';

// Common styles for this version
const versionStyles = {
  'angular-corner': cva(
    "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 clip-path-bevel active:scale-95",
    {
      variants: {
        variant: {
          default: "bg-cyan-700 text-white hover:bg-cyan-600 border-l-4 border-cyan-400",
          destructive: "bg-red-700 text-white hover:bg-red-600 border-l-4 border-red-400",
          outline: "border border-cyan-700 text-cyan-500 hover:bg-cyan-950",
          secondary: "bg-cyan-900 text-cyan-300 hover:bg-cyan-800",
          ghost: "hover:bg-cyan-900/50 hover:text-cyan-400",
          link: "text-cyan-500 underline-offset-4 hover:underline",
        },
        size: {
          default: "h-10 px-6 py-2",
          sm: "h-9 px-4 text-xs",
          lg: "h-12 px-8 text-base",
          icon: "h-10 w-10",
        },
      },
      defaultVariants: {
        variant: "default",
        size: "default",
      },
    }
  ),
  'holo-frame': cva(
    "inline-flex items-center justify-center whitespace-nowrap text-sm font-bold ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border backdrop-blur-sm rounded-sm shadow-[0_0_10px_rgba(6,182,212,0.1)] hover:shadow-[0_0_15px_rgba(6,182,212,0.4)]",
    {
      variants: {
        variant: {
          default: "bg-cyan-500/10 border-cyan-400/50 text-cyan-100 hover:bg-cyan-500/20 hover:border-cyan-400",
          destructive: "bg-red-500/10 border-red-400/50 text-red-100 hover:bg-red-500/20",
          outline: "bg-transparent border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10",
          secondary: "bg-cyan-900/30 border-cyan-700/50 text-cyan-200",
          ghost: "border-transparent hover:bg-cyan-500/10 hover:text-cyan-100",
          link: "text-cyan-400 underline-offset-4 hover:underline border-none shadow-none",
        },
        size: {
          default: "h-10 px-4 py-2",
          sm: "h-9 rounded-sm px-3",
          lg: "h-11 rounded-sm px-8",
          icon: "h-10 w-10",
        },
      },
      defaultVariants: {
        variant: "default",
        size: "default",
      },
    }
  ),
  'data-panel': cva(
    "inline-flex items-center justify-center whitespace-nowrap text-sm font-mono tracking-wider ring-offset-background transition-none focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 rounded-none border-2",
    {
      variants: {
        variant: {
          default: "bg-slate-200 text-slate-900 border-slate-200 hover:bg-white hover:border-white",
          destructive: "bg-red-200 text-red-900 border-red-200 hover:bg-white",
          outline: "bg-transparent border-slate-600 text-slate-400 hover:text-slate-200 hover:border-slate-400",
          secondary: "bg-slate-700 text-slate-200 border-slate-700 hover:bg-slate-600",
          ghost: "border-transparent hover:bg-slate-800 text-slate-400",
          link: "text-slate-400 underline-offset-4 hover:underline border-none",
        },
        size: {
          default: "h-10 px-4 py-2",
          sm: "h-8 px-3 text-xs",
          lg: "h-12 px-8 text-base",
          icon: "h-10 w-10",
        },
      },
      defaultVariants: {
        variant: "default",
        size: "default",
      },
    }
  ),
  'circuit-board': cva(
    "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 rounded-sm border-b-2 active:border-b-0 active:translate-y-[2px]",
    {
      variants: {
        variant: {
          default: "bg-emerald-700 border-emerald-900 text-emerald-100 hover:bg-emerald-600",
          destructive: "bg-red-700 border-red-900 text-red-100 hover:bg-red-600",
          outline: "bg-transparent border-emerald-700 text-emerald-500 hover:bg-emerald-950",
          secondary: "bg-emerald-900 border-emerald-950 text-emerald-400",
          ghost: "border-transparent hover:bg-emerald-900/50 hover:text-emerald-400",
          link: "text-emerald-500 underline-offset-4 hover:underline border-none",
        },
        size: {
          default: "h-10 px-4 py-2",
          sm: "h-9 px-3",
          lg: "h-11 px-8",
          icon: "h-10 w-10",
        },
      },
      defaultVariants: {
        variant: "default",
        size: "default",
      },
    }
  ),
  'quantum-gate': cva(
    "inline-flex items-center justify-center whitespace-nowrap text-sm font-light tracking-[0.1em] ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 rounded-full border shadow-[0_0_10px_rgba(139,92,246,0.3)] hover:shadow-[0_0_20px_rgba(139,92,246,0.6)]",
    {
      variants: {
        variant: {
          default: "bg-violet-600/20 border-violet-500 text-violet-100 hover:bg-violet-600/40",
          destructive: "bg-red-600/20 border-red-500 text-red-100 hover:bg-red-600/40",
          outline: "bg-transparent border-violet-500/50 text-violet-300 hover:border-violet-400",
          secondary: "bg-violet-900/40 border-violet-800 text-violet-200",
          ghost: "border-transparent hover:bg-violet-900/30 hover:text-violet-200 shadow-none",
          link: "text-violet-400 underline-offset-4 hover:underline border-none shadow-none",
        },
        size: {
          default: "h-10 px-6 py-2",
          sm: "h-8 px-4 text-xs",
          lg: "h-12 px-8 text-base",
          icon: "h-10 w-10",
        },
      },
      defaultVariants: {
        variant: "default",
        size: "default",
      },
    }
  ),
  'tactical-hud': cva(
    "inline-flex items-center justify-center whitespace-nowrap text-sm font-bold uppercase tracking-wider ring-offset-background transition-none focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 clip-path-notch-sm border",
    {
      variants: {
        variant: {
          default: "bg-orange-600 text-black border-orange-500 hover:bg-orange-500",
          destructive: "bg-red-600 text-black border-red-500 hover:bg-red-500",
          outline: "bg-transparent text-orange-500 border-orange-600 hover:bg-orange-900/20",
          secondary: "bg-orange-900/50 text-orange-400 border-orange-800 hover:bg-orange-900",
          ghost: "border-transparent hover:bg-orange-900/20 text-orange-500",
          link: "text-orange-500 underline-offset-4 hover:underline border-none",
        },
        size: {
          default: "h-10 px-5 py-2",
          sm: "h-8 px-3 text-xs",
          lg: "h-12 px-8",
          icon: "h-10 w-10",
        },
      },
      defaultVariants: {
        variant: "default",
        size: "default",
      },
    }
  ),
  'energy-shield': cva(
    "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 rounded-full border shadow-[inset_0_0_10px_rgba(59,130,246,0.2)] hover:shadow-[inset_0_0_15px_rgba(59,130,246,0.4)] backdrop-blur-sm",
    {
      variants: {
        variant: {
          default: "bg-blue-600/30 border-blue-400 text-blue-100 hover:bg-blue-500/40",
          destructive: "bg-red-600/30 border-red-400 text-red-100 hover:bg-red-500/40",
          outline: "bg-blue-950/20 border-blue-500/50 text-blue-300 hover:bg-blue-900/40",
          secondary: "bg-blue-900/40 border-blue-800 text-blue-200",
          ghost: "border-transparent hover:bg-blue-900/30 hover:text-blue-200 shadow-none",
          link: "text-blue-400 underline-offset-4 hover:underline border-none shadow-none",
        },
        size: {
          default: "h-10 px-6 py-2",
          sm: "h-8 px-4 text-xs",
          lg: "h-12 px-8",
          icon: "h-10 w-10",
        },
      },
      defaultVariants: {
        variant: "default",
        size: "default",
      },
    }
  ),
  'terminal-window': cva(
    "inline-flex items-center justify-center whitespace-nowrap text-sm font-mono ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 rounded-none border hover:text-black",
    {
      variants: {
        variant: {
          default: "bg-green-900/20 text-green-500 border-green-500 hover:bg-green-500",
          destructive: "bg-red-900/20 text-red-500 border-red-500 hover:bg-red-500",
          outline: "bg-transparent text-green-600 border-green-700 hover:bg-green-700 hover:text-green-100",
          secondary: "bg-green-950 text-green-400 border-green-900 hover:bg-green-900",
          ghost: "border-transparent hover:bg-green-900/30 text-green-500",
          link: "text-green-500 underline-offset-4 hover:underline border-none",
        },
        size: {
          default: "h-10 px-4 py-2",
          sm: "h-8 px-3 text-xs",
          lg: "h-12 px-8",
          icon: "h-10 w-10",
        },
      },
      defaultVariants: {
        variant: "default",
        size: "default",
      },
    }
  ),
  'matrix-grid': cva(
    "inline-flex items-center justify-center whitespace-nowrap text-sm font-bold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 rounded-sm border hover:shadow-[0_0_10px_rgba(132,204,22,0.5)]",
    {
      variants: {
        variant: {
          default: "bg-lime-950 text-lime-400 border-lime-500/50 hover:bg-lime-900 hover:border-lime-400",
          destructive: "bg-red-950 text-red-400 border-red-500/50 hover:bg-red-900",
          outline: "bg-black text-lime-600 border-lime-800 hover:border-lime-500 hover:text-lime-400",
          secondary: "bg-lime-900/20 text-lime-500 border-lime-900",
          ghost: "border-transparent hover:bg-lime-900/20 text-lime-500",
          link: "text-lime-500 underline-offset-4 hover:underline border-none shadow-none",
        },
        size: {
          default: "h-10 px-4 py-2",
          sm: "h-8 px-3 text-xs",
          lg: "h-12 px-8",
          icon: "h-10 w-10",
        },
      },
      defaultVariants: {
        variant: "default",
        size: "default",
      },
    }
  ),
  'neon-outline': cva(
    "inline-flex items-center justify-center whitespace-nowrap text-sm font-bold ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 rounded-md border-2 shadow-[0_0_5px_rgba(217,70,239,0.5)] hover:shadow-[0_0_15px_rgba(217,70,239,0.8)]",
    {
      variants: {
        variant: {
          default: "bg-fuchsia-950/40 border-fuchsia-500 text-fuchsia-100 hover:bg-fuchsia-500 hover:border-fuchsia-400",
          destructive: "bg-red-950/40 border-red-500 text-red-100 hover:bg-red-500 hover:border-red-400",
          outline: "bg-transparent border-fuchsia-600 text-fuchsia-400 hover:border-fuchsia-400 hover:text-fuchsia-200",
          secondary: "bg-fuchsia-900/20 border-fuchsia-800 text-fuchsia-300",
          ghost: "border-transparent hover:bg-fuchsia-900/20 text-fuchsia-400 shadow-none hover:shadow-none",
          link: "text-fuchsia-400 underline-offset-4 hover:underline border-none shadow-none",
        },
        size: {
          default: "h-10 px-6 py-2",
          sm: "h-8 px-4 text-xs",
          lg: "h-12 px-8",
          icon: "h-10 w-10",
        },
      },
      defaultVariants: {
        variant: "default",
        size: "default",
      },
    }
  ),
  // Default fallback
  'default': cva(
    "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    {
      variants: {
        variant: {
          default: "bg-primary text-primary-foreground hover:bg-primary/90",
          destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
          outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
          secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
          ghost: "hover:bg-accent hover:text-accent-foreground",
          link: "text-primary underline-offset-4 hover:underline",
        },
        size: {
          default: "h-10 px-4 py-2",
          sm: "h-9 rounded-md px-3",
          lg: "h-11 rounded-md px-8",
          icon: "h-10 w-10",
        },
      },
      defaultVariants: {
        variant: "default",
        size: "default",
      },
    }
  )
};

const getStyles = (v) => versionStyles[v] || versionStyles['default'];
const styles = getStyles('tactical-hud' in versionStyles ? 'tactical-hud' : 'default');

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof styles> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(styles({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export default Button;
