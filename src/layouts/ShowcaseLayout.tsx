import React, { useState } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { Menu, X, Search, Package, ChevronRight, LayoutGrid } from 'lucide-react';
import { cn } from '@/lib/utils'; // Assuming this exists, common in shadcn/ui. If not, I'll remove it or define it.

// List of components (hardcoded for now based on file listing)
const components = [
  "alert-dialog", "alert", "angular-corner", "aspect-ratio", "avatar", "badge", "border", "breadcrumb", "button-group", "button",
  "calendar", "card", "carousel", "chart", "checkbox", "circuit-board", "collapsible", "combobox", 
  "command", "compact", "context-menu", "data-panel", "data-table", "date-picker", "dialog", 
  "direction", "drawer", "dropdown-menu", "empty", "empty-state", "energy-shield", "field", 
  "ghost", "glass-morphism", "holo-frame", "hover-card", "icon-button", "input-group", "input-otp", 
  "input", "item", "kbd", "label", "large", "matrix-grid", "menubar", "native-select", "navigation-menu", 
  "neon", "padding", "pagination", "pill", "popover", "progress", "quantum-gate", "radio-group", 
  "raised", "resizable", "scroll-area", "select", "separator", "sheet", "sidebar", "skeleton", "slider", 
  "sonner", "spinner", "switch", "table", "tabs", "tactical-hud", "tech-panel", "terminal-window", 
  "textarea", "toast", "toggle-group", "toggle", "tooltip", "typography"
].sort();

export function ShowcaseLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  const filteredComponents = components.filter(c => 
    c.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex min-h-screen bg-background text-foreground pt-16"> {/* pt-16 to account for fixed top nav if it exists, otherwise 0 */}
      
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed inset-y-0 left-0 z-50 w-64 transform bg-card border-r border-border transition-transform duration-200 ease-in-out 
        lg:translate-x-0 lg:sticky lg:top-24 lg:h-[calc(100vh-6rem)]
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        pt-16 lg:pt-0
      `}>
        <div className="flex h-full flex-col">
          {/* Sidebar Header */}
          <div className="flex items-center justify-between p-4 border-b border-border">
            <div className="flex items-center gap-2 font-bold text-lg">
              <LayoutGrid className="w-5 h-5 text-primary" />
              <span>Components</span>
            </div>
            <button 
              onClick={() => setIsSidebarOpen(false)}
              className="lg:hidden p-1 hover:bg-muted rounded-md"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Search */}
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

          {/* Component List */}
          <div className="flex-1 overflow-y-auto py-2">
            {filteredComponents.length === 0 ? (
              <div className="p-4 text-center text-sm text-muted-foreground">
                No components found
              </div>
            ) : (
              <nav className="grid gap-1 px-2">
                {filteredComponents.map((component) => (
                  <NavLink
                    key={component}
                    to={`/ui/${component}`}
                    onClick={() => setIsSidebarOpen(false)}
                    className={({ isActive }) => `
                      flex items-center justify-between px-3 py-2 text-sm font-medium rounded-md transition-colors
                      ${isActive 
                        ? 'bg-primary/10 text-primary hover:bg-primary/20' 
                        : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                      }
                    `}
                  >
                    <span className="capitalize">{component.replace(/-/g, ' ')}</span>
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

      {/* Main Content */}
      <main className="flex-1 min-w-0 overflow-hidden bg-background">
        {/* Mobile Header Trigger */}
        <div className="lg:hidden flex items-center p-4 border-b border-border">
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="p-2 mr-4 text-muted-foreground hover:text-foreground hover:bg-muted rounded-md"
          >
            <Menu className="w-5 h-5" />
          </button>
          <span className="font-semibold">
            {location.pathname.split('/').pop()?.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) || 'Showcase'}
          </span>
        </div>

        <div className="h-full">
           <Outlet />
        </div>
      </main>
    </div>
  );
}
