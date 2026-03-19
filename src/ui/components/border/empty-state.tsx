import React from 'react';
import { cn } from '../../../lib/utils';
import { FolderOpen, Database, Ghost, HardDrive, ShieldAlert, Radio, BoxSelect, Terminal, Grid3X3, SearchX } from "lucide-react";
const styles = { root: "flex flex-col items-center justify-center p-8 text-center border-2 border-dashed rounded-lg", icon: FolderOpen, iconClass: "h-10 w-10 text-muted-foreground mb-4", title: "text-lg font-semibold", description: "text-sm text-muted-foreground mt-2 mb-4"  };
const EmptyState = React.forwardRef(({ className, title, description, action, icon, ...props }: any, ref: any) => {     
  const Icon = icon ? () => icon : styles.icon;
  return (
    <div ref={ref} className={cn(styles.root, className)} {...props}>
      <Icon className={styles.iconClass} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      {action}
    </div>
  )
})
EmptyState.displayName = "EmptyState"
export default EmptyState;
