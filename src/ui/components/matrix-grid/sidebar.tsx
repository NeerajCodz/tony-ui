import * as React from 'react';
import { cn } from '@/lib/utils';
import { Button } from './button';
import { ScrollArea } from './scroll-area';
import { Sheet, SheetContent, SheetTrigger } from './sheet';
import { Menu } from 'lucide-react';


interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  collapsible?: boolean;
}

const Sidebar = React.forwardRef<HTMLDivElement, SidebarProps>(
  ({ className, collapsible, children, ...props }, ref) => {
    return (
      <aside
        ref={ref}
        className={cn(
          'hidden h-screen w-64 flex-col border-r border-[var(--mg-border)] bg-[var(--mg-surface)] lg:flex font-mono',
          'before:absolute before:inset-0 before:bg-[linear-gradient(var(--mg-grid)_1px,transparent_1px),linear-gradient(90deg,var(--mg-grid)_1px,transparent_1px)] before:bg-[size:20px_20px] before:pointer-events-none before:opacity-5 relative',
          className
        )}
        {...props}
      >
        <ScrollArea className="flex-1 py-6 px-4 z-10">
          {children}
        </ScrollArea>
      </aside>
    );
  }
);
Sidebar.displayName = 'Sidebar';

const SidebarMobile = ({ children }: { children: React.ReactNode }) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="lg:hidden text-[var(--mg-accent)]">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-64 p-0 border-r border-[var(--mg-border)]">
        <ScrollArea className="h-full py-6 px-4">
          {children}
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};

export { Sidebar, SidebarMobile };
