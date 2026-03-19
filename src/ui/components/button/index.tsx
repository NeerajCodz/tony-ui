/**
 * Button Component - Dynamic Renderer
 * Refactored to use Compound Component Context Pattern
 */

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '../../../lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

// --- Types ---
type ButtonVersion = 
  | 'angular-corner'
  | 'holo-frame'
  | 'data-panel'
  | 'circuit-board'
  | 'quantum-gate'
  | 'tactical-hud'
  | 'energy-shield'
  | 'terminal-window'
  | 'matrix-grid'
  | 'neon-outline';

const buttonVariants = cva(
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
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  version?: ButtonVersion;
  // Override variant prop to include our custom variants if needed, though standard ones map well
}

// --- Dynamic Import Helper ---
const loadVersionModule = async (version: ButtonVersion) => {
  switch (version) {
    case 'angular-corner': return import('./button-angular-corner.tsx');
    case 'holo-frame': return import('./button-holo-frame.tsx');
    case 'data-panel': return import('./button-data-panel.tsx');
    case 'circuit-board': return import('./button-circuit-board.tsx');
    case 'quantum-gate': return import('./button-quantum-gate.tsx');
    case 'tactical-hud': return import('./button-tactical-hud.tsx');
    case 'energy-shield': return import('./button-energy-shield.tsx');
    case 'terminal-window': return import('./button-terminal-window.tsx');
    case 'matrix-grid': return import('./button-matrix-grid.tsx');
    case 'neon-outline': return import('./button-neon-outline.tsx');
    default: return import('./button-angular-corner.tsx');
  }
};

// --- Main Component ---
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ 
  version = 'angular-corner', 
  className, 
  variant, 
  size, 
  asChild = false,
  ...props 
}, ref) => {
  const [versionModule, setVersionModule] = useState<any>(null);

  useEffect(() => {
    loadVersionModule(version).then(setVersionModule);
  }, [version]);
  
  if (!versionModule) {
    return (
      <button 
        className={cn(buttonVariants({ variant, size, className }))} 
        ref={ref} 
        {...props} 
      />
    );
  }

  const Component = versionModule.default;

  return (
    <Component 
      ref={ref} 
      className={className} 
      variant={variant} 
      size={size} 
      asChild={asChild}
      {...props} 
    />
  );
});
Button.displayName = 'Button';

export { Button, buttonVariants };
export default Button;

