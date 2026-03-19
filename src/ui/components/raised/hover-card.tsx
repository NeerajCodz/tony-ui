import React from 'react';
import { cn } from '@/lib/utils';
import type { HoverCardProps } from '@/ui/types/components/overlay';
import * as HoverCardPrimitive from "@radix-ui/react-hover-card"

export function HoverCard({
  children,
  ...props
}: HoverCardProps) {
  return (
    <HoverCardPrimitive.Root {...props}>
      {children}
    </HoverCardPrimitive.Root>
  )
}

export function HoverCardTrigger({
  children,
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Trigger>) {
  return (
    <HoverCardPrimitive.Trigger className={className} {...props}>
      {children}
    </HoverCardPrimitive.Trigger>
  )
}

export function HoverCardContent({
  className,
  variant = 'default',
  type = 'default',
  colors,
  children,
  align = "center",
  sideOffset = 4,
  ...props
}: HoverCardProps & React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Content>) {
  const baseStyles = "relative transition-all duration-200 shadow-md active:shadow-sm active:translate-y-0.5 z-50 w-64 p-4 outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2";
  
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
    }
 ,
    inverse: {
      backgroundColor: colors?.text || colors?.foreground || '#000000',
      color: colors?.background || '#ffffff',
      border: `1px solid ${colors?.background || '#ffffff'}`
    },
    contrast: {
      backgroundColor: colors?.background || '#ffffff',
      color: colors?.text || colors?.foreground || '#000000',
      border: `2px solid ${colors?.text || colors?.foreground || '#000000'}`,
      fontWeight: 'bold'
    },
    soft: {
      backgroundColor: colors?.accent?.primary ? `${colors.accent.primary}20` : '#00000020',
      color: colors?.text || '#000000',
      border: colors?.accent?.primary ? `1px solid ${colors.accent.primary}30` : 'none'
    }
   };


  return (
    <HoverCardPrimitive.Content
      align={align}
      sideOffset={sideOffset}
      className={cn(baseStyles, className)}
      style={typeStyles[type as keyof typeof typeStyles]}
      {...props}
    >
      {children}
      
    </HoverCardPrimitive.Content>
  );
}
