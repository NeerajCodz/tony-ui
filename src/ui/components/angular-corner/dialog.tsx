import React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { X, Info, AlertTriangle, CheckCircle, AlertOctagon, Terminal } from 'lucide-react';
import { cn } from '../../utils/component-helpers';
const variantIcons = { default: Terminal, neutral: Terminal, primary: Info, success: CheckCircle, warning: AlertTriangle, destructive: AlertOctagon, info: Info };
const variantColors = { default: 'cyan', neutral: 'slate', primary: 'cyan', success: 'emerald', warning: 'amber', destructive: 'red', info: 'blue' };
const styles = { overlay: "fixed inset-0 z-50 bg-black/60 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", content: "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 bg-gray-950 p-6 duration-200 clip-path-bevel sm:rounded-none border-0", title: "text-lg font-semibold", description: "text-sm opacity-70", close: "absolute right-4 top-4 rounded-sm opacity-70 hover:opacity-100 focus:outline-none p-1"  };
export const Overlay = React.forwardRef(({ className, ...props }: any, ref: any) => (
  <DialogPrimitive.Overlay ref={ref} className={cn(styles.overlay, className)} {...props} />
));
Overlay.displayName = DialogPrimitive.Overlay.displayName;
export const Content = React.forwardRef(({ className, children, variant = 'primary', ...props }: any, ref: any) => {    
  const color = variantColors[variant] || 'cyan';
  const Icon = variantIcons[variant] || variantIcons.default;
  const dynamicClasses = `shadow-[0_0_30px_-5px_theme(colors.${color}.500/30)] border-l-4 border-${color}-500 bg-black/90`;
  return (
    <DialogPrimitive.Content ref={ref} className={cn(styles.content, dynamicClasses, className)} {...props}>
      <div className={`absolute -top-3 -left-3 p-1.5 bg-gray-950 border border-${color}-500/50 rounded-none z-50 shadow-lg`}>
         <Icon className={`w-5 h-5 text-${color}-400`} />
      </div>
      {children}
      <DialogPrimitive.Close className={cn(styles.close, `text-${color}-400 hover:text-${color}-200`)}>
        <X className="h-4 w-4" /> <span className="sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  );
});
Content.displayName = DialogPrimitive.Content.displayName;
export const Title = React.forwardRef(({ className, variant = 'primary', ...props }: any, ref: any) => {
   const color = variantColors[variant] || 'cyan';
   return <DialogPrimitive.Title ref={ref} className={cn(styles.title, `text-${color}-100`, className)} {...props} />;
});
Title.displayName = DialogPrimitive.Title.displayName;
export const Description = React.forwardRef(({ className, variant = 'primary', ...props }: any, ref: any) => {
   const color = variantColors[variant] || 'cyan';
   return <DialogPrimitive.Description ref={ref} className={cn(styles.description, `text-${color}-300/70`, className)} {...props} />;
});
Description.displayName = DialogPrimitive.Description.displayName;
