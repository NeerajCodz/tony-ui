import * as React from 'react';
import {
  EmptyBase,
  EmptyActionsBase,
  EmptyDescriptionBase,
  EmptyIconBase,
  EmptyTitleBase,
  type EmptyBaseProps,
  type EmptySize,
} from '@/ui/components/_base/empty';
import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';

const emptyVariants = cva(
  "flex flex-col items-center justify-center rounded-lg border border-dashed p-8 text-center animate-in fade-in-50",
  {
    variants: {
      size: {
        sm: "min-h-[200px] p-4",
        md: "min-h-[300px] p-8",
        lg: "min-h-[400px] p-12",
      },
      variant: {
        default: "bg-background",
        muted: "bg-muted/50",
        ghost: "border-none bg-transparent",
      },
    },
    defaultVariants: {
      size: "md",
      variant: "default",
    },
  }
);

type EmptyVisualVariant = 'default' | 'muted' | 'ghost';

export interface EmptyProps extends Omit<EmptyBaseProps, 'variant' | 'size'> {
  variant?: EmptyVisualVariant;
  size?: EmptySize;
}

const Empty = React.forwardRef<HTMLDivElement, EmptyProps>(
  ({ className, size, variant, ...props }, ref) => {
    return (
      <EmptyBase
        ref={ref}
        size={size}
        variant={variant}
        className={cn(emptyVariants({ size, variant, className }))}
        {...props}
      />
    );
  }
);
Empty.displayName = 'Empty';

const EmptyIcon = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <EmptyIconBase
      ref={ref}
      className={cn("flex h-20 w-20 items-center justify-center rounded-full bg-muted", className)}
      {...props}
    />
  )
);
EmptyIcon.displayName = 'EmptyIcon';

const EmptyTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <EmptyTitleBase
      ref={ref}
      className={cn("mt-6 text-xl font-semibold", className)}
      {...props}
    />
  )
);
EmptyTitle.displayName = 'EmptyTitle';

const EmptyDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <EmptyDescriptionBase
      ref={ref}
      className={cn("mb-8 mt-2 max-w-sm text-center text-sm leading-6 text-muted-foreground", className)}
      {...props}
    />
  )
);
EmptyDescription.displayName = 'EmptyDescription';

const EmptyActions = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <EmptyActionsBase
      ref={ref}
      className={cn("flex items-center gap-2", className)}
      {...props}
    />
  )
);
EmptyActions.displayName = 'EmptyActions';

export { Empty, EmptyIcon, EmptyTitle, EmptyDescription, EmptyActions };
