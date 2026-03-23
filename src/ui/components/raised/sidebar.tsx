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
          'hidden h-screen w-80 flex-col border-r-2 border-[var(--ra-border)] bg-[var(--ra-background)] lg:flex font-mono',
          className
        )}
        {...props}
      >
        <ScrollArea className="flex-1 py-6 px-4">
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
        <Button variant="ghost" size="icon" className="lg:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-80 p-0 border-r-2 border-[var(--ra-border)]">
        <ScrollArea className="h-full py-6 px-4">
          {children}
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};

export { Sidebar, SidebarMobile };
