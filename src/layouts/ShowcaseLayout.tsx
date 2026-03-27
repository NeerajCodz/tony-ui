import { showcaseRegistry } from '@/pages/showcases';
import { ChevronRight, LayoutGrid, Menu, Search, X } from 'lucide-react';
import { useState } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';

export function ShowcaseLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  const components = Object.entries(showcaseRegistry).map(([slug]) => ({
    slug,
    name: slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
  }));

  const filteredComponents = components.filter((component) =>
    component.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    component.slug.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex min-h-screen bg-background text-foreground pt-16">
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      <aside
        className={`
        fixed inset-y-0 left-0 z-50 w-64 transform bg-card border-r border-border transition-transform duration-200 ease-in-out
        lg:translate-x-0 lg:sticky lg:top-24 lg:h-[calc(100vh-6rem)]
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        pt-16 lg:pt-0
      `}
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between p-4 border-b border-border">
            <div className="flex items-center gap-2 font-bold text-lg">
              <LayoutGrid className="w-5 h-5 text-primary" />
              <span>Components</span>
            </div>
            <button onClick={() => setIsSidebarOpen(false)} className="lg:hidden p-1 hover:bg-muted rounded-md">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-4 border-b border-border">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search components..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-9 pl-9 pr-4 rounded-md border border-input bg-background text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              />
            </div>
          </div>

          <div className="flex-1 overflow-y-auto py-2">
            {filteredComponents.length === 0 ? (
              <div className="p-4 text-center text-sm text-muted-foreground">No components found</div>
            ) : (
              <nav className="grid gap-1 px-2">
                {filteredComponents.map((component) => (
                  <NavLink
                    key={component.slug}
                    to={`/ui/${component.slug}`}
                    onClick={() => setIsSidebarOpen(false)}
                    className={({ isActive }) => `
                      flex items-center justify-between px-3 py-2 text-sm font-medium rounded-md transition-colors
                      ${isActive ? 'bg-primary/10 text-primary hover:bg-primary/20' : 'text-muted-foreground hover:bg-muted hover:text-foreground'}
                    `}
                  >
                    <span>{component.name}</span>
                    <ChevronRight className="w-4 h-4 opacity-50" />
                  </NavLink>
                ))}
              </nav>
            )}
          </div>

          <div className="p-4 border-t border-border text-xs text-center text-muted-foreground">
            {components.length} components available
          </div>
        </div>
      </aside>

      <main className="flex-1 min-w-0 overflow-hidden bg-background">
        <div className="lg:hidden flex items-center p-4 border-b border-border">
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="p-2 mr-4 text-muted-foreground hover:text-foreground hover:bg-muted rounded-md"
          >
            <Menu className="w-5 h-5" />
          </button>
          <span className="font-semibold">
            {components.find((component) => `/ui/${component.slug}` === location.pathname)?.name ?? 'Showcase'}
          </span>
        </div>

        <div className="h-full">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
