import React from 'react';
import { cn } from '@/lib/utils';
import type { AccordionProps, AccordionItemProps, AccordionTriggerProps, AccordionContentProps } from '@/ui/types/components/layout';
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDown } from "lucide-react"

export function Accordion({ className, ...props }: AccordionProps) {
  return <AccordionPrimitive.Root className={cn("w-full", className)} {...props} />
}

export function AccordionItem({ className, colors, type = 'default', ...props }: AccordionItemProps) {
  const baseStyles = "relative font-mono transition-all duration-200 bg-grid-pattern border-b";
  
  const typeStyles = {
    default: {
      backgroundColor: colors.background,
      color: colors.text,
      border: `1px solid ${colors.border}`
    },
    solid: {
      backgroundColor: colors.accent.primary,
      color: colors.text,
      boxShadow: `0 0 10px ${colors.accent.glow}`
    },
    outline: {
      backgroundColor: 'transparent',
      color: colors.accent.primary,
      border: `1px solid ${colors.accent.primary}`
    },
    ghost: {
      backgroundColor: 'transparent',
      color: colors.textHover
    },
    inverse: {
      backgroundColor: colors.text,
      color: colors.background,
      border: `1px solid ${colors.text}`
    },
    contrast: {
      backgroundColor: colors.accent?.primary || colors.text,
      color: '#000000',
      fontWeight: 'bold',
      border: `1px solid ${colors.text}`
    },
    soft: {
      backgroundColor: colors.accent?.rgb ? `rgba(${colors.accent.rgb}, 0.1)` : (colors.accent?.primary ? `color-mix(in srgb, ${colors.accent.primary} 10%, transparent)` : 'rgba(0,0,0,0.1)'),
      color: colors.accent?.primary || colors.text,
      border: 'none'
    },

  };

  
  return (
    <AccordionPrimitive.Item 
      className={cn(baseStyles, className)} 
      style={typeStyles[type as keyof typeof typeStyles]}
      {...props} 
    />
  )
}

export function AccordionTrigger({ className, children, colors, ...props }: AccordionTriggerProps) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        className={cn(
          "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
          className
        )}
        {...props}
      >
        {children}
        <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

export function AccordionContent({ className, children, ...props }: AccordionContentProps) {
  return (
    <AccordionPrimitive.Content
      className={cn(
        "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
        className
      )}
      {...props}
    >
      <div className="pb-4 pt-0">{children}</div>
    </AccordionPrimitive.Content>
  )
}
