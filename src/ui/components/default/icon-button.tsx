import { cn } from '@/lib/utils';
import { IconButtonBase, type IconButtonBaseProps } from '@/ui/components/_base/icon-button';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

const iconButtonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      visualType: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        solid: "bg-primary text-primary-foreground hover:bg-primary/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        inverse: "bg-foreground text-background hover:bg-foreground/90",
        contrast: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        soft: "bg-primary/10 text-primary hover:bg-primary/20",
        neutral: "bg-muted text-muted-foreground hover:bg-muted/80",
        subtle: "bg-transparent text-muted-foreground hover:text-foreground",
        elevated: "bg-background text-foreground shadow-sm border border-input hover:bg-accent hover:text-accent-foreground",
        flat: "bg-transparent text-foreground hover:bg-accent/50",
        tinted: "bg-accent/50 text-accent-foreground hover:bg-accent/70",
        link: "text-primary underline-offset-4 hover:underline",
        disabled: "bg-muted text-muted-foreground opacity-50 cursor-not-allowed",
        unstyled: "",
      },
      size: {
        xs: "h-6 w-6 rounded-md p-0 [&_svg]:h-3.5 [&_svg]:w-3.5",
        sm: "h-8 w-8 rounded-md p-0 [&_svg]:h-4 [&_svg]:w-4",
        md: "h-10 w-10 rounded-md p-0 [&_svg]:h-5 [&_svg]:w-5",
        lg: "h-12 w-12 rounded-md p-0 [&_svg]:h-6 [&_svg]:w-6",
        xl: "h-14 w-14 rounded-md p-0 [&_svg]:h-7 [&_svg]:w-7",
      },
      shape: {
        square: "rounded-none",
        rounded: "rounded-md",
        circle: "rounded-full",
      },
    },
    defaultVariants: {
      visualType: "default",
      size: "md",
      shape: "rounded",
    },
  }
);

export interface IconButtonProps extends IconButtonBaseProps, VariantProps<typeof iconButtonVariants> {}

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className, visualType, size, shape, ...props }, ref) => {
    return (
      <IconButtonBase
        ref={ref}
        visualType={visualType}
        size={size}
        shape={shape}
        className={cn(iconButtonVariants({ visualType, size, shape, className }))}
        {...props}
      />
    );
  }
);

IconButton.displayName = 'IconButton';

export { IconButton,iconButtonVariants };
