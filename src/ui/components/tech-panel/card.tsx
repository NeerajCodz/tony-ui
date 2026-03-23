import * as React from 'react';
import { CardBase, type CardBaseProps } from '../_base/card';
import { cn } from '@/lib/utils';
import { techPanelEffectsClass, type TechPanelEffects, TechPanelPowerLights } from './_effects';
import { cva, type VariantProps } from 'class-variance-authority';

export const cardVariants = cva(
  'rounded-none transition-all duration-300',
  {
    variants: {
      visualType: {
        default: 'bg-[var(--tp-panel)] border border-[var(--tp-border-outer)]',
        solid: 'bg-[var(--tp-inset)] border border-[var(--tp-accent)] shadow-[inset_0_0_0_2px_var(--tp-inset-border)]',
        outline: 'bg-transparent border border-[var(--tp-border-outer)]',
        ghost: 'bg-transparent border-none',
        inverse: 'bg-[var(--tp-accent)]/10 border border-[var(--tp-accent)]',
        contrast: 'bg-[#000] border border-[var(--tp-power-3)]',
        soft: 'bg-[rgba(10,14,26,0.5)] border border-[var(--tp-border-inner)]',
      },
    },
    defaultVariants: {
      visualType: 'default',
    },
  }
);

export interface CardProps extends Omit<CardBaseProps, 'visualType'>, VariantProps<typeof cardVariants> {
  effects?: TechPanelEffects;
  /**
   * Show decorative power lights in the header
   */
  showLights?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, effects = 'on', visualType, children, showLights, ...props }, ref) => {
    return (
      <CardBase
        ref={ref}
        visualType={visualType}
        className={cn(
          techPanelEffectsClass(effects),
          cardVariants({ visualType }),
          className
        )}
        {...props}
      >
        {showLights && (
          <div className="absolute top-3 right-4 z-10">
            <TechPanelPowerLights />
          </div>
        )}
        {children}
      </CardBase>
    );
  }
);
Card.displayName = 'Card';

export const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('flex flex-col space-y-1.5 p-6 border-b border-[var(--tp-border-inner)]/50', className)}
      {...props}
    />
  )
);
CardHeader.displayName = 'CardHeader';

export const CardTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn('font-display text-2xl font-bold uppercase tracking-tight text-[var(--text-primary)]', className)}
      {...props}
    />
  )
);
CardTitle.displayName = 'CardTitle';

export const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn('text-sm text-[var(--text-secondary)] font-mono tracking-wide', className)}
      {...props}
    />
  )
);
CardDescription.displayName = 'CardDescription';

export const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('p-6 pt-6', className)} {...props} />
  )
);
CardContent.displayName = 'CardContent';

export const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('flex items-center p-6 pt-0 bg-[var(--tp-inset)]/30 border-t border-[var(--tp-border-inner)]/30', className)}
      {...props}
    />
  )
);
CardFooter.displayName = 'CardFooter';
