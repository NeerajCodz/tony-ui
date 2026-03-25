import * as React from 'react';
import { TooltipPrimitive } from '../_base/tooltip';
import { cn } from '@/lib/utils';
import { quantumGateEffectsClass, type QuantumGateEffects } from './_effects';

const TooltipProvider = TooltipPrimitive.Provider;

const Tooltip = TooltipPrimitive.Root;

const TooltipTrigger = TooltipPrimitive.Trigger;


const TooltipContent = React.forwardRef<
  React.ComponentRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content> & { effects?: QuantumGateEffects }
>(({ className, effects = 'on', sideOffset = 4, ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(quantumGateEffectsClass(effects), 
      'z-50 overflow-hidden border border-(--qg-border) bg-(--qg-surface) px-3 py-1.5 text-xs text-(--text-primary) shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 font-sans',
      '[clip-path:polygon(var(--fold)_0%,100%_0%,100%_calc(100%-var(--fold)),calc(100%-var(--fold))_100%,0%_100%,0%_var(--fold))]',
      className
    )}
    style={{ '--fold': '8px' } as React.CSSProperties}
    {...props}
  />
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
