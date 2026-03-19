import React from 'react';
import { cn } from '../../../lib/utils';
import { FolderOpen, Database, Ghost, HardDrive, ShieldAlert, Radio, BoxSelect, Terminal, Grid3X3, SearchX } from "lucide-react";
const styles = { root: "flex flex-col items-center justify-center p-8 text-center border-2 border-dashed border-cyan-800 bg-cyan-950/20 clip-path-bevel-sm", icon: FolderOpen, iconClass: "h-12 w-12 text-cyan-700 mb-4", title: "text-lg font-bold text-cyan-500 uppercase tracking-widest", description: "text-sm text-cyan-700 mt-2 mb-6 max-w-xs mx-auto"  };
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
