import * as React from 'react';
import { BoxSelect, Database, FolderOpen, Ghost, Grid3X3, HardDrive, Radio, SearchX, ShieldAlert, Terminal, type LucideIcon } from 'lucide-react';
import { EmptyStateBase, type EmptyStateBaseProps } from '@/ui/components/_base/empty-state';
import { cn } from '@/lib/utils';

const styles = {
  root: 'flex flex-col items-center justify-center rounded-lg border-2 border-dashed p-8 text-center',
  iconClass: 'mb-4 h-10 w-10 text-muted-foreground',
  title: 'text-lg font-semibold',
  description: 'mt-2 mb-4 text-sm text-muted-foreground',
};

const iconByType: Record<string, LucideIcon> = {
  default: FolderOpen,
  database: Database,
  ghost: Ghost,
  storage: HardDrive,
  security: ShieldAlert,
  signal: Radio,
  cube: BoxSelect,
  terminal: Terminal,
  grid: Grid3X3,
  search: SearchX,
};

export interface EmptyStateProps
  extends Omit<EmptyStateBaseProps, 'title' | 'description' | 'action' | 'icon'> {
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: React.ReactNode;
  icon?: React.ReactNode | LucideIcon;
}

const EmptyState = React.forwardRef<HTMLDivElement, EmptyStateProps>(
  ({ className, type, title, description, action, icon, style, ...props }, ref) => {
    const defaultIcon = iconByType[type ?? 'default'] ?? FolderOpen;

    const typeStyle: React.CSSProperties = {};
    if (type === 'inverse') {
      typeStyle.backgroundColor = 'hsl(var(--primary-foreground))';
      typeStyle.color = 'hsl(var(--primary))';
    } else if (type === 'contrast') {
      typeStyle.border = '2px solid currentColor';
    } else if (type === 'soft') {
      typeStyle.backgroundColor = 'hsl(var(--muted))';
    }

    return (
      <EmptyStateBase
        ref={ref}
        type={type}
        className={cn(styles.root, className)}
        style={{ ...typeStyle, ...style }}
        icon={icon ?? defaultIcon}
        iconClassName={styles.iconClass}
        title={title}
        titleProps={{ className: styles.title }}
        description={description}
        descriptionProps={{ className: styles.description }}
        action={action}
        {...props}
      />
    );
  }
);
EmptyState.displayName = 'EmptyState';

export default EmptyState;
