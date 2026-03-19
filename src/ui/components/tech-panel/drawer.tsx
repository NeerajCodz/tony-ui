import React from 'react';
import { Drawer as DrawerPrimitive } from 'vaul';
import { cn } from '../../../lib/utils';
import { X, Info, AlertTriangle, CheckCircle, AlertOctagon, Terminal } from 'lucide-react';
const variantIcons = { default: Terminal, neutral: Terminal, primary: Info, success: CheckCircle, warning: AlertTriangle, destructive: AlertOctagon, info: Info };
const variantColors = { default: 'cyan', neutral: 'slate', primary: 'cyan', success: 'emerald', warning: 'amber', destructive: 'red', info: 'blue' };
const styles = { overlay: "fixed inset-0 bg-black/80", content: "fixed bottom-0 left-0 right-0 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background", title: "text-lg font-semibold leading-none tracking-tight", description: "text-sm text-muted-foreground"  };
export const Overlay = React.forwardRef(({ className, version = 'tech-panel', ...props }: any, ref: any) => (
  <DrawerPrimitive.Overlay ref={ref} className={cn(styles.overlay, className)} {...props} />
));
Overlay.displayName = DrawerPrimitive.Overlay.displayName;
export const Content = React.forwardRef(({ className, children, version = 'tech-panel', type = 'default', variant = 'primary', ...props }: any, ref: any) => {
  const color = variantColors[variant as keyof typeof variantColors] || 'cyan';
  const Icon = variantIcons[variant as keyof typeof variantIcons] || variantIcons.default;
  const dynamicStyle = { borderColor: `var(--${color}-500, ${color})`, '--tw-shadow-color': `var(--${color}-500, ${color})` };
  if (type === 'inverse') {
    dynamicStyle.backgroundColor = `var(--${color}-500)`;
    dynamicStyle.color = `var(--${color}-50)`;
  } else if (type === 'contrast') {
    dynamicStyle.backgroundColor = 'black';
    dynamicStyle.color = 'white';
    dynamicStyle.border = '2px solid white';
  } else if (type === 'soft') {
    dynamicStyle.backgroundColor = `var(--${color}-100)`;
  }

  const colorClasses = `border-${color}-500 text-${color}-50`;
  return (
    <DrawerPrimitive.Content ref={ref} className={cn(styles.content, colorClasses, className)} style={dynamicStyle} {...props}>
        <div className="mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted/20" />
        <div className="absolute top-6 right-6 p-2 rounded-full border bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center" style={{ borderColor: `var(--${color}-500)`, color: `var(--${color}-400)` }}>
             <Icon className="w-5 h-5" />
        </div>
        {children}
    </DrawerPrimitive.Content>
  );
});
Content.displayName = DrawerPrimitive.Content.displayName;
export const Title = React.forwardRef(({ className, version = 'tech-panel', type = 'default', variant = 'primary', ...props }: any, ref: any) => {
  const color = variantColors[variant as keyof typeof variantColors] || 'cyan';
  return <DrawerPrimitive.Title ref={ref} className={cn(styles.title, `text-${color}-100`, className)} {...props} />;
});
Title.displayName = DrawerPrimitive.Title.displayName;
export const Description = React.forwardRef(({ className, version = 'tech-panel', type = 'default', variant = 'primary', ...props }: any, ref: any) => {
  const color = variantColors[variant as keyof typeof variantColors] || 'cyan';
  return <DrawerPrimitive.Description ref={ref} className={cn(styles.description, `text-${color}-400/70`, className)} {...props} />;
});
Description.displayName = DrawerPrimitive.Description.displayName;
