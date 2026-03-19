import React from 'react';
import { cn } from '@/lib/utils';
import type { BreadcrumbProps, BreadcrumbItemProps, BreadcrumbLinkProps, BreadcrumbListProps, BreadcrumbPageProps, BreadcrumbSeparatorProps } from '@/ui/types/components/navigation';
import { Slot } from "@radix-ui/react-slot"
import { ChevronRight, MoreHorizontal } from "lucide-react"

export function Breadcrumb({ className, type = 'default', colors, ...props }: BreadcrumbProps & { colors?: any }) {
  const typeStyles = {
    default: {
      backgroundColor: colors?.background,
      color: colors?.text,
      border: colors?.border ? `1px solid ${colors.border}` : undefined
    },
    solid: {
      backgroundColor: colors?.accent?.primary,
      color: colors?.text,
      boxShadow: colors?.accent?.glow ? `0 0 10px ${colors.accent.glow}` : undefined
    },
    outline: {
      backgroundColor: 'transparent',
      color: colors?.accent?.primary,
      border: colors?.accent?.primary ? `1px solid ${colors.accent.primary}` : undefined
    },
    ghost: {
      backgroundColor: 'transparent',
      color: colors?.textHover
    },
    inverse: {
      backgroundColor: colors?.text,
      color: colors?.background,
      border: colors?.text ? `1px solid ${colors.text}` : undefined
    },
    contrast: {
      backgroundColor: colors?.accent?.primary || colors?.text,
      color: '#000000',
      fontWeight: 'bold',
      border: colors?.text ? `1px solid ${colors.text}` : undefined
    },
    soft: {
      backgroundColor: colors?.accent?.rgb ? `rgba(${colors.accent.rgb}, 0.1)` : (colors?.accent?.primary ? `color-mix(in srgb, ${colors.accent.primary} 10%, transparent)` : 'rgba(0,0,0,0.1)'),
      color: colors?.accent?.primary || colors?.text,
      border: 'none'
    }
  };

  return (
    <nav 
      aria-label="breadcrumb" 
      className={className} 
      style={typeStyles[type as keyof typeof typeStyles]} 
      {...props} 
    />
  )
}

export function BreadcrumbList({ className, ...props }: BreadcrumbListProps) {
  return (
    <ol
      className={cn(
        "flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5",
        className
      )}
      {...props}
    />
  )
}

export function BreadcrumbItem({ className, ...props }: BreadcrumbItemProps) {
  return (
    <li
      className={cn("inline-flex items-center gap-1.5", className)}
      {...props}
    />
  )
}

export function BreadcrumbLink({ asChild, className, ...props }: BreadcrumbLinkProps) {
  const Comp = asChild ? Slot : "a"

  return (
    <Comp
      className={cn("transition-colors hover:text-foreground", className)}
      {...props}
    />
  )
}

export function BreadcrumbPage({ className, ...props }: BreadcrumbPageProps) {
  return (
    <span
      role="link"
      aria-disabled="true"
      aria-current="page"
      className={cn("font-normal text-foreground", className)}
      {...props}
    />
  )
}

export function BreadcrumbSeparator({
  children,
  className,
  ...props
}: BreadcrumbSeparatorProps) {
  return (
    <li
      role="presentation"
      aria-hidden="true"
      className={cn("[&>svg]:size-3.5", className)}
      {...props}
    >
      {children ?? <ChevronRight />}
    </li>
  )
}
