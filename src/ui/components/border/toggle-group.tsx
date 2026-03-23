import * as React from 'react';
import { ToggleGroupBase, ToggleGroupItemBase, type ToggleGroupBaseProps, type ToggleGroupItemBaseProps } from '@/ui/components/_base/toggle-group';
import { cn } from '@/lib/utils';
import { toggleVariants } from './toggle';
import { VariantProps } from 'class-variance-authority';

const ToggleGroup = React.forwardRef<React.ComponentRef<typeof ToggleGroupBase>, ToggleGroupBaseProps>(
  ({ className, ...props }, ref) => (
    <ToggleGroupBase
      ref={ref}
      className={cn('flex items-center justify-center gap-1', className)}
      {...props}
    />
  )
);
ToggleGroup.displayName = 'ToggleGroup';

export interface ToggleGroupItemProps extends ToggleGroupItemBaseProps, VariantProps<typeof toggleVariants> {}

const ToggleGroupItem = React.forwardRef<React.ComponentRef<typeof ToggleGroupItemBase>, ToggleGroupItemProps>(
  ({ className, visualType, size, ...props }, ref) => (
    <ToggleGroupItemBase
      ref={ref}
      className={cn(toggleVariants({ visualType, size, className }))}
      {...props}
    />
  )
);
ToggleGroupItem.displayName = 'ToggleGroupItem';

export { ToggleGroup, ToggleGroupItem };
