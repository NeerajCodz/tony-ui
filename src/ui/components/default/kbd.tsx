import * as React from 'react';
import { KbdBase, type KbdBaseProps } from '@/ui/components/_base/kbd';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

const kbdVariants = cva(
  "inline-flex items-center justify-center rounded font-mono font-medium text-muted-foreground transition-colors",
  {
    variants: {
      type: {
        default: "border bg-muted/50 border-b-2",
        outline: "border bg-transparent",
        ghost: "bg-transparent",
        elevated: "bg-background border shadow-sm",
        unstyled: "",
      },
      size: {
        xs: "h-5 px-1 text-[10px] min-w-[20px]",
        sm: "h-6 px-1.5 text-xs min-w-[24px]",
        md: "h-7 px-2 text-sm min-w-[28px]",
      },
    },
    defaultVariants: {
      type: "default",
      size: "sm",
    },
  }
);

export interface KbdProps extends KbdBaseProps, VariantProps<typeof kbdVariants> {}

const Kbd = React.forwardRef<HTMLElement, KbdProps>(
  ({ className, type, size, ...props }, ref) => {
    return (
      <KbdBase
        ref={ref}
        type={type}
        size={size}
        className={cn(kbdVariants({ type, size, className }))}
        {...props}
      />
    );
  }
);
Kbd.displayName = 'Kbd';

export { Kbd };
