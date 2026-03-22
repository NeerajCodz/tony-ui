import * as React from 'react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { cn } from '@/lib/utils';
import { tacticalHudEffectsClass, type TacticalHudEffects, getBracketsStyle } from './_effects';

const TooltipProvider = TooltipPrimitive.Provider;

const Tooltip = TooltipPrimitive.Root;

const TooltipTrigger = TooltipPrimitive.Trigger;


const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content> & { effects?: TacticalHudEffects }
>(({ className, effects = 'on', sideOffset = 4, style, ...props }, ref) => {
  const smallBrackets = React.useMemo(() => getBracketsStyle('6px', '1px', '2px'), []);

  return (
    <TooltipPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(tacticalHudEffectsClass(effects), 
        'z-50 overflow-hidden bg-[var(--th-surface)]/95 px-3 py-1.5 text-xs text-[var(--th-primary)] shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 font-sans uppercase tracking-wide',
        className
      )}
      style={{ ...smallBrackets, ...style }}
      {...props}
    />
  );
});
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
