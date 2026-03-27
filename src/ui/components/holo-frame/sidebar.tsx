import * as React from 'react';
import { SidebarContext, useSidebar, type SidebarBaseProps } from '../_base/sidebar';
import { cn } from '@/lib/utils';
import { holoFrameEffectsClass, type HoloFrameEffects } from './_effects';
import { Button } from './button';
import { Sheet, SheetContent } from './sheet';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './tooltip';
import { PanelLeft } from 'lucide-react';

// Re-export context and hook
export { SidebarContext, useSidebar };

type SidebarWithEffects<T> = T & { effects?: HoloFrameEffects };

export const SidebarProvider = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    defaultOpen?: boolean;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    effects?: HoloFrameEffects;
  }
>(
  (
    {
      defaultOpen = true,
      open: openProp,
      onOpenChange: setOpenProp,
      className,
      effects = 'on',
      style,
      children,
      ...props
    },
    ref
  ) => {
    const isMobile = false; // TODO: Implement mobile detection
    const [openMobile, setOpenMobile] = React.useState(false);
    const [_open, _setOpen] = React.useState(defaultOpen);
    const open = openProp ?? _open;
    
    const setOpen = React.useCallback(
      (value: boolean | ((value: boolean) => boolean)) => {
        if (setOpenProp) {
          return setOpenProp(typeof value === "function" ? value(open) : value);
        }
        _setOpen(value);
      },
      [setOpenProp, open]
    );

    const toggleSidebar = React.useCallback(() => {
      return isMobile ? setOpenMobile((open) => !open) : setOpen((open) => !open);
    }, [isMobile, setOpen, setOpenMobile]);

    const state = open ? "expanded" : "collapsed";

    const contextValue = React.useMemo<any>(
      () => ({
        state,
        open,
        setOpen,
        isMobile,
        openMobile,
        setOpenMobile,
        toggleSidebar,
      }),
      [state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar]
    );

    return (
      <SidebarContext.Provider value={contextValue}>
        <TooltipProvider delayDuration={0}>
          <div
            style={
              {
                "--sidebar-width": "16rem",
                "--sidebar-width-icon": "3rem",
                ...style,
              } as React.CSSProperties
            }
            className={cn(holoFrameEffectsClass(effects), 
              "group/sidebar-wrapper flex min-h-svh w-full has-[[data-variant=inset]]:bg-[var(--hf-bg)]",
              className
            )}
            ref={ref}
            {...props}
          >
            {children}
          </div>
        </TooltipProvider>
      </SidebarContext.Provider>
    );
  }
);
SidebarProvider.displayName = "SidebarProvider";

export const Sidebar = React.forwardRef<HTMLDivElement, SidebarWithEffects<SidebarBaseProps>>(
  ({ side = 'left', collapsible = 'offcanvas', variant = 'sidebar', className, effects = 'on', children, ...props }, ref) => {
    const { isMobile, state, openMobile, setOpenMobile } = useSidebar();

    if (collapsible === "none") {
      return (
        <div
          className={cn(holoFrameEffectsClass(effects), 
            "flex h-full w-[var(--sidebar-width)] flex-col bg-[var(--hf-surface)] text-[var(--hf-text)] border-r border-[var(--hf-border-dim)]",
            className
          )}
          ref={ref}
          {...props}
        >
          {children}
        </div>
      )
    }

    if (isMobile) {
      return (
        <Sheet open={openMobile} onOpenChange={setOpenMobile} {...props}>
          <SheetContent
            data-sidebar="sidebar"
            data-mobile="true"
            className="w-[var(--sidebar-width)] bg-[var(--hf-surface)] p-0 text-[var(--hf-text)] [&>button]:hidden"
            side={side}
            style={{
              "--sidebar-width": "18rem",
            } as React.CSSProperties}
          >
            <div className="flex h-full w-full flex-col">{children}</div>
          </SheetContent>
        </Sheet>
      );
    }

    return (
      <div
        ref={ref}
        className="group peer hidden md:block text-[var(--hf-text)]"
        data-state={state}
        data-collapsible={state === "collapsed" ? collapsible : ""}
        data-variant={variant}
        data-side={side}
      >
        <div
          className={cn(holoFrameEffectsClass(effects), 
            "duration-200 relative h-svh w-[var(--sidebar-width)] bg-transparent transition-[width] ease-linear",
            "group-data-[collapsible=offcanvas]:w-0",
            "group-data-[side=right]:rotate-180",
            variant === "floating" || variant === "inset"
              ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4))]"
              : "group-data-[collapsible=icon]:w-[var(--sidebar-width-icon)]"
          )}
        />
        <div
          className={cn(holoFrameEffectsClass(effects), 
            "duration-200 fixed inset-y-0 z-10 hidden h-svh w-[var(--sidebar-width)] transition-[left,right,width] ease-linear md:flex",
            side === "left"
              ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]"
              : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
            variant === "floating" || variant === "inset"
              ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4)_+_2px)]"
              : "group-data-[collapsible=icon]:w-[var(--sidebar-width-icon)] group-data-[side=left]:border-r group-data-[side=right]:border-l border-[var(--hf-border-dim)]",
            className
          )}
          {...props}
        >
          <div
            data-sidebar="sidebar"
            className="flex h-full w-full flex-col bg-[var(--hf-surface)] group-data-[variant=floating]:rounded-md group-data-[variant=floating]:border group-data-[variant=floating]:border-[var(--hf-border-dim)] group-data-[variant=floating]:shadow"
          >
            {children}
          </div>
        </div>
      </div>
    );
  }
);
Sidebar.displayName = 'Sidebar';

export const SidebarTrigger = React.forwardRef<HTMLButtonElement, React.ComponentProps<typeof Button>>(
  ({ className, effects = 'on', onClick, ...props }, ref) => {
    const { toggleSidebar } = useSidebar();
    return (
      <Button
        ref={ref}
        data-sidebar="trigger"
        visualType="ghost"
        size="icon"
        className={cn(holoFrameEffectsClass(effects), "h-7 w-7", className)}
        onClick={(event) => {
          onClick?.(event);
          toggleSidebar();
        }}
        {...props}
      >
        <PanelLeft />
        <span className="sr-only">Toggle Sidebar</span>
      </Button>
    );
  }
);
SidebarTrigger.displayName = 'SidebarTrigger';

export const SidebarRail = React.forwardRef<HTMLButtonElement, SidebarWithEffects<React.ComponentProps<"button">>>(
  ({ className, effects = 'on', ...props }, ref) => {
    const { toggleSidebar } = useSidebar();
    return (
      <button
        ref={ref}
        data-sidebar="rail"
        aria-label="Toggle Sidebar"
        tabIndex={-1}
        onClick={toggleSidebar}
        title="Toggle Sidebar"
        className={cn(holoFrameEffectsClass(effects), 
          "absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] hover:after:bg-[var(--hf-border-dim)] group-data-[side=left]:-right-4 group-data-[side=right]:left-0 sm:flex",
          "[[data-side=left]_&]:cursor-w-resize [[data-side=right]_&]:cursor-e-resize",
          "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize",
          "group-data-[collapsible=offcanvas]:hover:bg-[var(--hf-surface)]",
          "group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full group-data-[collapsible=offcanvas]:hover:bg-[var(--hf-surface)]",
          className
        )}
        {...props}
      />
    );
  }
);
SidebarRail.displayName = 'SidebarRail';

export const SidebarInset = React.forwardRef<HTMLDivElement, SidebarWithEffects<React.ComponentProps<"main">>>(
  ({ className, effects = 'on', ...props }, ref) => {
    return (
      <main
        ref={ref}
        className={cn(holoFrameEffectsClass(effects), 
          "relative flex min-h-svh flex-1 flex-col bg-[var(--hf-bg)]",
          "peer-data-[variant=inset]:min-h-[calc(100svh-theme(spacing.4))] md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-lg md:peer-data-[variant=inset]:shadow",
          className
        )}
        {...props}
      />
    );
  }
);
SidebarInset.displayName = 'SidebarInset';

export const SidebarHeader = React.forwardRef<HTMLDivElement, SidebarWithEffects<React.ComponentProps<"div">>>(
  ({ className, effects = 'on', ...props }, ref) => {
    return (
      <div
        ref={ref}
        data-sidebar="header"
        className={cn(holoFrameEffectsClass(effects), "flex flex-col gap-2 p-2", className)}
        {...props}
      />
    );
  }
);
SidebarHeader.displayName = 'SidebarHeader';

export const SidebarFooter = React.forwardRef<HTMLDivElement, SidebarWithEffects<React.ComponentProps<"div">>>(
  ({ className, effects = 'on', ...props }, ref) => {
    return (
      <div
        ref={ref}
        data-sidebar="footer"
        className={cn(holoFrameEffectsClass(effects), "flex flex-col gap-2 p-2", className)}
        {...props}
      />
    );
  }
);
SidebarFooter.displayName = 'SidebarFooter';

export const SidebarContent = React.forwardRef<HTMLDivElement, SidebarWithEffects<React.ComponentProps<"div">>>(
  ({ className, effects = 'on', ...props }, ref) => {
    return (
      <div
        ref={ref}
        data-sidebar="content"
        className={cn(holoFrameEffectsClass(effects), 
          "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
          className
        )}
        {...props}
      />
    );
  }
);
SidebarContent.displayName = 'SidebarContent';

export const SidebarGroup = React.forwardRef<HTMLDivElement, SidebarWithEffects<React.ComponentProps<"div">>>(
  ({ className, effects = 'on', ...props }, ref) => {
    return (
      <div
        ref={ref}
        data-sidebar="group"
        className={cn(holoFrameEffectsClass(effects), "relative flex w-full min-w-0 flex-col p-2", className)}
        {...props}
      />
    );
  }
);
SidebarGroup.displayName = 'SidebarGroup';

export const SidebarGroupLabel = React.forwardRef<HTMLDivElement, SidebarWithEffects<React.ComponentProps<"div"> & { asChild?: boolean }>>(
  ({ className, effects = 'on', asChild = false, ...props }, ref) => {
    if (asChild) {
      return (
        <div ref={ref} className={cn(holoFrameEffectsClass(effects), "text-xs font-sans font-medium text-[var(--hf-text)] uppercase tracking-wider px-2 py-1.5", className)} {...props} />
      );
    }
    return (
      <div
        ref={ref}
        data-sidebar="group-label"
        className={cn(holoFrameEffectsClass(effects), 
          "duration-200 flex h-8 shrink-0 items-center rounded px-2 text-xs font-sans font-medium text-[var(--hf-text)] uppercase tracking-wider outline-none ring-[var(--hf-border-main)] transition-[margin,opa] ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
          "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
          className
        )}
        {...props}
      />
    );
  }
);
SidebarGroupLabel.displayName = 'SidebarGroupLabel';

export const SidebarGroupContent = React.forwardRef<HTMLDivElement, SidebarWithEffects<React.ComponentProps<"div">>>(
  ({ className, effects = 'on', ...props }, ref) => {
    return (
      <div
        ref={ref}
        data-sidebar="group-content"
        className={cn(holoFrameEffectsClass(effects), "w-full text-sm", className)}
        {...props}
      />
    );
  }
);
SidebarGroupContent.displayName = 'SidebarGroupContent';

export const SidebarMenu = React.forwardRef<HTMLUListElement, SidebarWithEffects<React.ComponentProps<"ul">>>(
  ({ className, effects = 'on', ...props }, ref) => {
    return (
      <ul
        ref={ref}
        data-sidebar="menu"
        className={cn(holoFrameEffectsClass(effects), "flex w-full min-w-0 flex-col gap-1", className)}
        {...props}
      />
    );
  }
);
SidebarMenu.displayName = 'SidebarMenu';

export const SidebarMenuItem = React.forwardRef<HTMLLIElement, SidebarWithEffects<React.ComponentProps<"li">>>(
  ({ className, effects = 'on', ...props }, ref) => {
    return (
      <li
        ref={ref}
        data-sidebar="menu-item"
        className={cn(holoFrameEffectsClass(effects), "group/menu-item relative", className)}
        {...props}
      />
    );
  }
);
SidebarMenuItem.displayName = 'SidebarMenuItem';

export const SidebarMenuButton = React.forwardRef<
  HTMLButtonElement,
  SidebarWithEffects<React.ComponentProps<"button">> & {
    asChild?: boolean;
    isActive?: boolean;
    tooltip?: string | React.ComponentProps<typeof TooltipContent>;
    size?: 'sm' | 'md' | 'lg';
    variant?: "default" | "outline" | "ghost" | "solid";
  }
>(
  (
    {
      asChild = false,
      isActive = false,
      variant = "default",
      size = "md",
      tooltip,
      effects = 'on',
      className,
      ...props
    },
    ref
  ) => {
    const { isMobile, state } = useSidebar();

    const button = (
      <button
        ref={ref}
        data-sidebar="menu-button"
        data-size={size}
        data-active={isActive}
        className={cn(holoFrameEffectsClass(effects), 
          "peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-sm p-2 text-left text-sm outline-none ring-[var(--hf-border-main)] transition-[width,height,padding] hover:bg-[var(--hf-surface)] hover:text-[var(--hf-text)] focus-visible:ring-2 active:bg-[var(--hf-surface)] active:text-[var(--hf-text)] disabled:pointer-events-none disabled:opacity-50 group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-[var(--hf-border-main)] data-[active=true]:font-medium data-[active=true]:text-[var(--hf-bg)]",
          "data-[state=open]:hover:bg-[var(--hf-surface)] data-[state=open]:hover:text-[var(--hf-text)]",
          "font-mono",
          size === "sm" && "text-xs h-7",
          size === "md" && "text-sm h-9",
          size === "lg" && "text-base h-11",
          className
        )}
        {...props}
      />
    );

    if (!tooltip) {
      return button;
    }

    const tooltipContent = typeof tooltip === "string" ? { children: tooltip } : tooltip;

    return (
      <Tooltip>
        <TooltipTrigger asChild>{button}</TooltipTrigger>
        <TooltipContent
          side="right"
          align="center"
          hidden={state !== "collapsed" || isMobile}
          {...tooltipContent}
        />
      </Tooltip>
    );
  }
);
SidebarMenuButton.displayName = 'SidebarMenuButton';

export const SidebarMenuSub = React.forwardRef<HTMLUListElement, SidebarWithEffects<React.ComponentProps<"ul">>>(
  ({ className, effects = 'on', ...props }, ref) => {
    return (
      <ul
        ref={ref}
        data-sidebar="menu-sub"
        className={cn(holoFrameEffectsClass(effects), 
          "mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l border-[var(--hf-border-dim)] px-2.5 py-0.5",
          "group-data-[collapsible=icon]:hidden",
          className
        )}
        {...props}
      />
    );
  }
);
SidebarMenuSub.displayName = 'SidebarMenuSub';
