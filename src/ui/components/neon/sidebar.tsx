import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { PanelLeft } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/ui/components/neon/button';
import { Sheet, SheetContent } from '@/ui/components/neon/sheet';

const SidebarContext = React.createContext<{
  expanded: boolean;
  setExpanded: (expanded: boolean) => void;
  mobileOpen: boolean;
  setMobileOpen: (open: boolean) => void;
} | null>(null);

function useSidebar() {
  const context = React.useContext(SidebarContext);
  if (!context) {
    throw new Error('useSidebar must be used within a SidebarProvider');
  }
  return context;
}

const SidebarProvider = ({
  children,
  defaultExpanded = true,
}: {
  children: React.ReactNode;
  defaultExpanded?: boolean;
}) => {
  const [expanded, setExpanded] = React.useState(defaultExpanded);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  return (
    <SidebarContext.Provider
      value={{ expanded, setExpanded, mobileOpen, setMobileOpen }}
    >
      <div className="flex h-screen w-full overflow-hidden bg-[var(--ne-bg)]">
        {children}
      </div>
    </SidebarContext.Provider>
  );
};

const Sidebar = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  const { expanded } = useSidebar();

  return (
    <aside
      ref={ref}
      className={cn(
        'hidden h-full flex-col border-r-2 border-[var(--ne-primary)] bg-[var(--ne-bg)] transition-all duration-300 md:flex shadow-[0_0_20px_var(--ne-primary)]',
        expanded ? 'w-64' : 'w-16',
        className
      )}
      {...props}
    >
      {children}
    </aside>
  );
});
Sidebar.displayName = 'Sidebar';

const SidebarHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex h-14 items-center border-b border-[var(--ne-primary)]/50 px-4', className)}
    {...props}
  />
));
SidebarHeader.displayName = 'SidebarHeader';

const SidebarContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex-1 overflow-auto py-4', className)}
    {...props}
  />
));
SidebarContent.displayName = 'SidebarContent';

const SidebarFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex items-center border-t border-[var(--ne-primary)]/50 p-4', className)}
    {...props}
  />
));
SidebarFooter.displayName = 'SidebarFooter';

const SidebarItem = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & { icon?: React.ReactNode }
>(({ className, children, icon, ...props }, ref) => {
  const { expanded } = useSidebar();

  return (
    <button
      ref={ref}
      className={cn(
        'flex w-full items-center gap-3 rounded-none px-4 py-2 text-sm font-medium text-[var(--ne-text)] transition-colors hover:bg-[var(--ne-primary)]/10 hover:text-[var(--ne-primary)] hover:shadow-[inset_0_0_10px_rgba(0,0,0,0.5)]',
        !expanded && 'justify-center px-2',
        className
      )}
      {...props}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      {expanded && <span className="truncate font-display tracking-wide uppercase">{children}</span>}
    </button>
  );
});
SidebarItem.displayName = 'SidebarItem';

const SidebarTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  const { setMobileOpen } = useSidebar();

  return (
    <Button
      ref={ref}
      variant="ghost"
      size="icon"
      className={cn('md:hidden', className)}
      onClick={() => setMobileOpen(true)}
      {...props}
    >
      <PanelLeft className="h-5 w-5" />
      <span className="sr-only">Toggle Sidebar</span>
    </Button>
  );
});
SidebarTrigger.displayName = 'SidebarTrigger';

const SidebarMobile = ({ children }: { children: React.ReactNode }) => {
  const { mobileOpen, setMobileOpen } = useSidebar();

  return (
    <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
      <SheetContent side="left" className="w-64 p-0">
        {children}
      </SheetContent>
    </Sheet>
  );
};

export {
  Sidebar,
  SidebarProvider,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarItem,
  SidebarTrigger,
  SidebarMobile,
  useSidebar,
};
