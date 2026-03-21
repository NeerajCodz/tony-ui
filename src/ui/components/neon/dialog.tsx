import React from 'react';import { X, Info, AlertTriangle, CheckCircle, AlertOctagon, Terminal } from 'lucide-react';
import { cn } from '../../utils/component-helpers';
import { DialogCloseBase, DialogContentBase, DialogDescriptionBase, DialogOverlayBase, DialogTitleBase } from '../_base/dialog';

const variantIcons = { default: Terminal, neutral: Terminal, primary: Info, success: CheckCircle, warning: AlertTriangle, destructive: AlertOctagon, info: Info };
const variantColors = { default: 'cyan', neutral: 'slate', primary: 'cyan', success: 'emerald', warning: 'amber', destructive: 'red', info: 'blue' };
const styles = { overlay: "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm", content: "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 sm:rounded-lg", title: "text-lg font-semibold", description: "text-sm text-muted-foreground", close: "absolute right-4 top-4 rounded-sm opacity-70 hover:opacity-100"  };
export const Overlay = React.forwardRef(({ className, ...props }: any, ref: any) => (
  <DialogOverlayBase ref={ref} className={cn(styles.overlay, className)} {...props} />
));
Overlay.displayName = DialogOverlayBase.displayName;
export const Content = React.forwardRef(({ className, children, type = 'default', variant = 'primary', ...props }: any, ref: any) => {    
  const color = variantColors[variant] || 'cyan';
  
  let bg = "bg-black/95";
  let border = `border-2 border-${color}-500`;
  let shadow = `shadow-[0_0_30px_theme(colors.${color}.500/50)]`;
  let text = "";

  if (type === 'inverse') {
      bg = `bg-${color}-500`;
      text = `text-${color}-950`;
      border = `border-${color}-950`;
      shadow = "shadow-none";
  }
  else if (type === 'contrast') {
      bg = "bg-black";
      text = "text-white";
      border = "border-white border-4";
      shadow = "shadow-none";
  }
  else if (type === 'soft') {
      bg = `bg-${color}-950/30`;
      border = `border-${color}-900/50`;
      shadow = "shadow-none";
  }
  else if (type === 'outline') {
      bg = "bg-black/90";
      border = `border border-${color}-500`;
      shadow = `shadow-[0_0_15px_-5px_theme(colors.${color}.500/30)]`;
  } else if (type === 'ghost') {
      bg = "bg-black/80";
      border = "border-none";
      shadow = "shadow-none";
  }

  const Icon = variantIcons[variant] || variantIcons.default;
  const dynamicClasses = `${shadow} ${border} ${bg} ${text}`;
  return (
    <DialogContentBase ref={ref} className={cn(styles.content, dynamicClasses, className)} {...props}>
      <div className={`absolute -top-3 -left-3 p-1.5 bg-gray-950 border border-${color}-500/50 rounded-none z-50 shadow-lg`}>
         <Icon className={`w-5 h-5 text-${color}-400`} />
      </div>
      {children}
      <DialogCloseBase className={cn(styles.close, `text-${color}-400 hover:text-${color}-200`)}>
        <X className="h-4 w-4" /> <span className="sr-only">Close</span>
      </DialogCloseBase>
    </DialogContentBase>
  );
});
Content.displayName = DialogContentBase.displayName;
export const Title = React.forwardRef(({ className, type = 'default', variant = 'primary', ...props }: any, ref: any) => {
   const color = variantColors[variant] || 'cyan';
   let textClass = `text-${color}-100`;

   if (type === 'inverse') textClass = `text-${color}-950`;
   else if (type === 'contrast') textClass = `text-white`;
   else if (type === 'soft') textClass = `text-${color}-300`;
   else if (type === 'outline') textClass = `text-${color}-400`;
   else if (type === 'ghost') textClass = `text-${color}-400`;

   return <DialogTitleBase ref={ref} className={cn(styles.title, textClass, className)} {...props} />;
});
Title.displayName = DialogTitleBase.displayName;
export const Description = React.forwardRef(({ className, type = 'default', variant = 'primary', ...props }: any, ref: any) => {
   const color = variantColors[variant] || 'cyan';
   let textClass = `text-${color}-300/70`;

   if (type === 'inverse') textClass = `text-${color}-950/80`;
   else if (type === 'contrast') textClass = `text-white/80`;
   else if (type === 'soft') textClass = `text-${color}-400/80`;
   else if (type === 'outline') textClass = `text-${color}-500`;
   else if (type === 'ghost') textClass = `text-${color}-500/80`;

   return <DialogDescriptionBase ref={ref} className={cn(styles.description, textClass, className)} {...props} />;
});
Description.displayName = DialogDescriptionBase.displayName;
