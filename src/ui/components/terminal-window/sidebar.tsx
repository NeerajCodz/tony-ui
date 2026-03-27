import * as React from 'react';
import { Slot } from '../_base/sidebar';
import { PanelLeft } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/ui/components/terminal-window/button';
import { Sheet, SheetContent } from '@/ui/components/terminal-window/sheet';
import { terminalWindowEffectsClass, type TerminalWindowEffects } from './_effects';

const SIDEBAR_WIDTH = '16rem';
const SIDEBAR_WIDTH_MOBILE = '18rem';
const SIDEBAR_WIDTH_ICON = '3rem';

type SidebarContext = {
  state: 'expanded' | 'collapsed';
  open: boolean;
  setOpen: (open: boolean) => void;
  openMobile: boolean;
  setOpenMobile: (open: boolean) => void;
  isMobile: boolean;
  toggleSidebar: () => void;
};

const SidebarContext = React.createContext<SidebarContext | null>(null);

function useSidebar() {
  const context = React.useContext(SidebarContext);
  if (!context) {
    throw new Error('useSidebar must be used within a SidebarProvider.');
  }
  return context;
}

const SidebarProvider = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<'div'> & {
    defaultOpen?: boolean;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    effects?: TerminalWindowEffects;
  }
>(
  (
    {
      defaultOpen = true,
      open: openProp,
      onOpenChange: setOpenProp,
      className,
      style,
      children,
      effects = 'on',
      ...props
    },
    ref
  ) => {
    const [open, _setOpen] = React.useState(defaultOpen);
    const [openMobile, setOpenMobile] = React.useState(false);
    // Simplified isMobile check
    const isMobile = false;

    const setOpen = React.useCallback(
      (value: boolean | ((value: boolean) => boolean)) => {
        if (setOpenProp) {
          return setOpenProp(typeof value === 'function' ? value(open) : value);
        }
        _setOpen(value);
      },
      [setOpenProp, open]
    );

    const toggleSidebar = React.useCallback(() => {
      return isMobile ? setOpenMobile((open) => !open) : setOpen((open) => !open);
    }, [isMobile, setOpen, setOpenMobile]);

    const state = open ? 'expanded' : 'collapsed';

    const contextValue = React.useMemo<SidebarContext>(
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
        <div
          style={
            {
              '--sidebar-width': SIDEBAR_WIDTH,
              '--sidebar-width-icon': SIDEBAR_WIDTH_ICON,
              ...style,
            } as React.CSSProperties
          }
          className={cn(terminalWindowEffectsClass(effects), 
            'group/sidebar-wrapper flex min-h-svh w-full text-[var(--tm-phosphor)] has-[[data-variant=inset]]:bg-[var(--tm-bg)]',
            className
          )}
          ref={ref}
          {...props}
        >
          {children}
        </div>
      </SidebarContext.Provider>
    );
  }
);
SidebarProvider.displayName = 'SidebarProvider';

const Sidebar = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<'div'> & {
    side?: 'left' | 'right';
    variant?: 'sidebar' | 'floating' | 'inset';
    collapsible?: 'offcanvas' | 'icon' | 'none';
    effects?: TerminalWindowEffects;
  }
>(
  (
    {
      side = 'left',
      variant = 'sidebar',
      collapsible = 'offcanvas',
      className,
      children,
      effects = 'on',
      ...props
    },
    ref
  ) => {
    const { isMobile, state, openMobile, setOpenMobile } = useSidebar();

    if (collapsible === 'none') {
      return (
        <div
          className={cn(terminalWindowEffectsClass(effects), 
            'flex h-full w-[--sidebar-width] flex-col bg-[var(--tm-bg)] text-[var(--tm-phosphor)] border-r border-[var(--tm-phosphor)]',
            className
          )}
          ref={ref}
          {...props}
        >
          {children}
        </div>
      );
    }

    if (isMobile) {
      return (
        <Sheet open={openMobile} onOpenChange={setOpenMobile} {...props}>
          <SheetContent
            data-sidebar='sidebar'
            data-mobile='true'
            className='w-[--sidebar-width] bg-[var(--tm-bg)] p-0 text-[var(--tm-phosphor)] border-r border-[var(--tm-phosphor)]'
            style={
              {
                '--sidebar-width': SIDEBAR_WIDTH_MOBILE,
              } as React.CSSProperties
            }
            side={side}
          >
            <div className='flex h-full w-full flex-col'>{children}</div>
          </SheetContent>
        </Sheet>
      );
    }

    return (
      <div
        ref={ref}
        className='group peer hidden md:block text-[var(--tm-phosphor)]'
        data-state={state}
        data-collapsible={state === 'collapsed' ? collapsible : ''}
        data-variant={variant}
        data-side={side}
      >
        {/* Sidebar gap on desktop */}
        <div
          className={cn(
            'duration-200 relative h-svh w-[--sidebar-width] bg-transparent transition-[width] ease-linear',
            'group-data-[collapsible=offcanvas]:w-0',
            'group-data-[side=right]:rotate-180',
            variant === 'floating' || variant === 'inset'
              ? 'group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4))]'
              : 'group-data-[collapsible=icon]:w-[--sidebar-width-icon]'
          )}
        />
        <div
          className={cn(terminalWindowEffectsClass(effects), 
            'duration-200 fixed inset-y-0 z-10 hidden h-svh w-[--sidebar-width] transition-[left,right,width] ease-linear md:flex',
            side === 'left'
              ? 'left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]'
              : 'right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]',
            // Adjust the padding for floating and inset variants.
            variant === 'floating' || variant === 'inset'
              ? 'p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4)_+2px)]'
              : 'group-data-[collapsible=icon]:w-[--sidebar-width-icon] group-data-[side=left]:border-r group-data-[side=right]:border-l border-[var(--tm-phosphor)]',
            className
          )}
          {...props}
        >
          <div
            data-sidebar='sidebar'
            className='flex h-full w-full flex-col bg-[var(--tm-bg)] group-data-[variant=floating]:rounded-none group-data-[variant=floating]:border group-data-[variant=floating]:border-[var(--tm-phosphor)] group-data-[variant=floating]:shadow font-mono'
          >
            {children}
          </div>
        </div>
      </div>
    );
  }
);
Sidebar.displayName = 'Sidebar';

const SidebarTrigger = React.forwardRef<
  React.ComponentRef<typeof Button>,
  React.ComponentProps<typeof Button> & { effects?: TerminalWindowEffects }
>(({ className, onClick, effects = 'on', ...props }, ref) => {
  const { toggleSidebar } = useSidebar();

  return (
    <Button
      ref={ref}
      data-sidebar='trigger'
      visualType='ghost'
      size='icon'
      className={cn(terminalWindowEffectsClass(effects), 'h-7 w-7', className)}
      onClick={(event) => {
        onClick?.(event);
        toggleSidebar();
      }}
      {...props}
    >
      <PanelLeft />
      <span className='sr-only'>Toggle Sidebar</span>
    </Button>
  );
});
SidebarTrigger.displayName = 'SidebarTrigger';

const SidebarRail = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<'button'> & { effects?: TerminalWindowEffects }
>(({ className, effects = 'on', ...props }, ref) => {
  const { toggleSidebar } = useSidebar();

  return (
    <button
      ref={ref}
      data-sidebar='rail'
      aria-label='Toggle Sidebar'
      tabIndex={-1}
      onClick={toggleSidebar}
      title='Toggle Sidebar'
      className={cn(terminalWindowEffectsClass(effects), 
        'absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] after:bg-[var(--tm-phosphor)]/20 hover:after:bg-[var(--tm-phosphor)] group-data-[side=left]:-right-4 group-data-[side=right]:left-0 sm:flex',
        '[[data-side=left]_&]:cursor-w-resize [[data-side=right]_&]:cursor-e-resize',
        '[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize',
        'group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full group-data-[collapsible=offcanvas]:hover:bg-[var(--tm-bg)]',
        '[[data-side=left][data-collapsible=offcanvas]_&]:-right-2',
        '[[data-side=right][data-collapsible=offcanvas]_&]:-left-2',
        className
      )}
      {...props}
    />
  );
});
SidebarRail.displayName = 'SidebarRail';

const SidebarInset = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<'main'> & { effects?: TerminalWindowEffects }
>(({ className, effects = 'on', ...props }, ref) => {
  return (
    <main
      ref={ref}
      className={cn(terminalWindowEffectsClass(effects), 
        'relative flex min-h-svh flex-1 flex-col bg-[var(--tm-bg)]',
        'peer-data-[variant=inset]:min-h-[calc(100svh-theme(spacing.4))] md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-none md:peer-data-[variant=inset]:shadow',
        className
      )}
      {...props}
    />
  );
});
SidebarInset.displayName = 'SidebarInset';

const SidebarInput = React.forwardRef<
  HTMLInputElement,
  React.ComponentProps<'input'> & { effects?: TerminalWindowEffects }
>(({ className, effects = 'on', ...props }, ref) => {
  return (
    <input
      ref={ref}
      data-sidebar='input'
      className={cn(terminalWindowEffectsClass(effects), 
        'flex h-8 w-full rounded-none bg-[var(--tm-bg)] border border-[var(--tm-phosphor)] px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-[var(--tm-phosphor-dim)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--tm-phosphor)] disabled:cursor-not-allowed disabled:opacity-50 text-[var(--tm-phosphor)] font-mono',
        className
      )}
      {...props}
    />
  );
});
SidebarInput.displayName = 'SidebarInput';

const SidebarHeader = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<'div'> & { effects?: TerminalWindowEffects }
>(({ className, effects = 'on', ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-sidebar='header'
      className={cn(terminalWindowEffectsClass(effects), 'flex flex-col gap-2 p-2', className)}
      {...props}
    />
  );
});
SidebarHeader.displayName = 'SidebarHeader';

const SidebarFooter = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<'div'> & { effects?: TerminalWindowEffects }
>(({ className, effects = 'on', ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-sidebar='footer'
      className={cn(terminalWindowEffectsClass(effects), 'flex flex-col gap-2 p-2', className)}
      {...props}
    />
  );
});
SidebarFooter.displayName = 'SidebarFooter';

const SidebarSeparator = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<'div'> & { effects?: TerminalWindowEffects }
>(({ className, effects = 'on', ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-sidebar='separator'
      className={cn(terminalWindowEffectsClass(effects), 'mx-2 w-auto bg-[var(--tm-phosphor)]/20 h-[1px]', className)}
      {...props}
    />
  );
});
SidebarSeparator.displayName = 'SidebarSeparator';

const SidebarContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<'div'> & { effects?: TerminalWindowEffects }
>(({ className, effects = 'on', ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-sidebar='content'
      className={cn(terminalWindowEffectsClass(effects), 
        'flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden',
        className
      )}
      {...props}
    />
  );
});
SidebarContent.displayName = 'SidebarContent';

const SidebarGroup = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<'div'> & { effects?: TerminalWindowEffects }
>(({ className, effects = 'on', ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-sidebar='group'
      className={cn(terminalWindowEffectsClass(effects), 'relative flex w-full min-w-0 flex-col p-2', className)}
      {...props}
    />
  );
});
SidebarGroup.displayName = 'SidebarGroup';

const SidebarGroupLabel = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<'div'> & { asChild?: boolean; effects?: TerminalWindowEffects }
>(({ className, asChild = false, effects = 'on', ...props }, ref) => {
  const Comp = asChild ? Slot : 'div';

  return (
    <Comp
      ref={ref}
      data-sidebar='group-label'
      className={cn(terminalWindowEffectsClass(effects), 
        'duration-200 flex h-8 shrink-0 items-center rounded-none px-2 text-xs font-medium text-[var(--tm-phosphor-dim)] outline-none ring-[var(--tm-phosphor)]/50 transition-[margin,opa] ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0 font-mono uppercase',
        'group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0',
        className
      )}
      {...props}
    />
  );
});
SidebarGroupLabel.displayName = 'SidebarGroupLabel';

const SidebarGroupAction = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<'button'> & { asChild?: boolean; effects?: TerminalWindowEffects }
>(({ className, asChild = false, effects = 'on', ...props }, ref) => {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      ref={ref}
      data-sidebar='group-action'
      className={cn(terminalWindowEffectsClass(effects), 
        'absolute right-3 top-3.5 flex aspect-square w-5 items-center justify-center rounded-none p-0 text-[var(--tm-phosphor)] outline-none ring-[var(--tm-phosphor)]/50 transition-transform hover:bg-[var(--tm-phosphor)]/10 hover:text-[var(--tm-phosphor)] focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0',
        // Increases the hit area of the button on mobile.
        'after:absolute after:-inset-2 after:md:hidden',
        'group-data-[collapsible=icon]:hidden',
        className
      )}
      {...props}
    />
  );
});
SidebarGroupAction.displayName = 'SidebarGroupAction';

const SidebarGroupContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<'div'> & { effects?: TerminalWindowEffects }
>(({ className, effects = 'on', ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-sidebar='group-content'
      className={cn(terminalWindowEffectsClass(effects), 'w-full text-sm', className)}
      {...props}
    />
  );
});
SidebarGroupContent.displayName = 'SidebarGroupContent';

const SidebarMenu = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<'ul'> & { effects?: TerminalWindowEffects }
>(({ className, effects = 'on', ...props }, ref) => {
  return (
    <ul
      ref={ref}
      data-sidebar='menu'
      className={cn(terminalWindowEffectsClass(effects), 'flex w-full min-w-0 flex-col gap-1', className)}
      {...props}
    />
  );
});
SidebarMenu.displayName = 'SidebarMenu';

const SidebarMenuItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<'li'> & { effects?: TerminalWindowEffects }
>(({ className, effects = 'on', ...props }, ref) => {
  return (
    <li
      ref={ref}
      data-sidebar='menu-item'
      className={cn(terminalWindowEffectsClass(effects), 'group/menu-item relative', className)}
      {...props}
    />
  );
});
SidebarMenuItem.displayName = 'SidebarMenuItem';

const SidebarMenuButton = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<'button'> & {
    asChild?: boolean;
    isActive?: boolean;
    tooltip?: string | React.ComponentProps<any>;
    effects?: TerminalWindowEffects;
    variant?: 'default' | 'outline';
    size?: 'default' | 'sm' | 'lg';
  }
>(
  (
    {
      asChild = false,
      isActive = false,
      variant = 'default',
      size = 'default',
      tooltip,
      className,
      effects = 'on',
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button';
    useSidebar();

    const button = (
      <Comp
        ref={ref}
        data-sidebar='menu-button'
        data-size={size}
        data-active={isActive}
        className={cn(terminalWindowEffectsClass(effects), 
          'peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-none text-left text-sm outline-none ring-[var(--tm-phosphor)]/50 transition-[width,height,padding] hover:bg-[var(--tm-phosphor)]/10 hover:text-[var(--tm-phosphor)] focus-visible:ring-2 active:bg-[var(--tm-phosphor)]/20 active:text-[var(--tm-phosphor)] disabled:pointer-events-none disabled:opacity-50 group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-[var(--tm-phosphor)]/20 data-[active=true]:font-medium data-[active=true]:text-[var(--tm-phosphor)] data-[state=open]:hover:bg-[var(--tm-phosphor)]/10 data-[state=open]:hover:text-[var(--tm-phosphor)] group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:!p-2 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 font-mono',
          size === 'default' && 'h-8 text-sm',
          size === 'sm' && 'h-7 text-xs',
          size === 'lg' && 'h-12 text-sm group-data-[collapsible=icon]:!p-0',
          className
        )}
        {...props}
      />
    );

    if (!tooltip) {
      return button;
    }

    return button; // Simplified for now, would wrap in Tooltip
  }
);
SidebarMenuButton.displayName = 'SidebarMenuButton';

export {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
  useSidebar,
};
