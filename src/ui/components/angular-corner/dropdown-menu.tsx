import React from 'react';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { Check, ChevronRight, Circle } from 'lucide-react';
import { cn } from '../../../lib/utils';
const contentStyle = "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 border-cyan-500/50 bg-black/95 text-cyan-500 clip-path-polygon-[10px_0,_100%_0,_100%_calc(100%-10px),_calc(100%-10px)_100%,_0_100%,_0_10px]";
const itemStyle = "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-cyan-500 focus:text-black hover:skew-x-[-5deg]";
export const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
export const DropdownMenuContent = ({ className, type, sideOffset = 4, ...props }: any) => {
  
  const getTypeStyles = () => {
     if (type === 'inverse') return { backgroundColor: 'black', color: 'white', borderColor: 'white' };
     if (type === 'contrast') return { border: '2px solid black', fontWeight: 'bold' };
     if (type === 'soft') return { backgroundColor: 'hsl(var(--muted))' };
     return {};
  };
return <DropdownMenuPrimitive.Portal><DropdownMenuPrimitive.Content sideOffset={sideOffset} className={cn(contentStyle, className)} style={getTypeStyles()} {...props} /></DropdownMenuPrimitive.Portal>;
};
export const DropdownMenuItem = ({ className, type, inset, ...props }: any) => {
  return <DropdownMenuPrimitive.Item className={cn(itemStyle, inset && "pl-8", className)} {...props} />;
};
export const DropdownMenuCheckboxItem = ({ className, type, children, checked, ...props }: any) => {
  return <DropdownMenuPrimitive.CheckboxItem className={cn(itemStyle, "pl-8", className)} checked={checked} {...props}><span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center"><DropdownMenuPrimitive.ItemIndicator><Check className="h-4 w-4" /></DropdownMenuPrimitive.ItemIndicator></span>{children}</DropdownMenuPrimitive.CheckboxItem>;
};
export const DropdownMenuRadioItem = ({ className, type, children, ...props }: any) => {
  return <DropdownMenuPrimitive.RadioItem className={cn(itemStyle, "pl-8", className)} {...props}><span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center"><DropdownMenuPrimitive.ItemIndicator><Circle className="h-2 w-2 fill-current" /></DropdownMenuPrimitive.ItemIndicator></span>{children}</DropdownMenuPrimitive.RadioItem>;
};
export const DropdownMenuLabel = ({ className, type, inset, ...props }: any) => {
  return <DropdownMenuPrimitive.Label className={cn("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className)} {...props} />;
};
export const DropdownMenuSeparator = ({ className, type, ...props }: any) => {
  return <DropdownMenuPrimitive.Separator className={cn("-mx-1 my-1 h-px bg-muted", className)} {...props} />;
};
export const DropdownMenuShortcut = ({ className, type, ...props }: any) => {
  return <span className={cn("ml-auto text-xs tracking-widest opacity-60", className)} {...props} />;
};
export const DropdownMenuSubTrigger = ({ className, type, inset, children, ...props }: any) => {
  return <DropdownMenuPrimitive.SubTrigger className={cn("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent", inset && "pl-8", className)} {...props}>{children}<ChevronRight className="ml-auto h-4 w-4" /></DropdownMenuPrimitive.SubTrigger>;
};
export const DropdownMenuSubContent = ({ className, type, ...props }: any) => {
  return <DropdownMenuPrimitive.SubContent className={cn(contentStyle, className)} style={getTypeStyles()} {...props} />;
};
