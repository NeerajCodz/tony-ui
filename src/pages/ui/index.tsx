/**
 * UI Components Index Page
 * Navigation hub for all cyber-styled components
 */

import { Link } from 'react-router-dom';
import { 
  Square, Type, TextCursor, ListFilter, CheckSquare, ToggleLeft, 
  Circle, SlidersHorizontal, AlertTriangle, Tag, Loader, 
  RotateCw, Box, Bell, Inbox, Layers, AlertCircle, PanelLeft,
  MessageSquare, Info, LayoutList, Navigation, ChevronRight,
  User, Table2, Ratio, ChevronDown, Minus, Maximize2, ScrollText,
  Power, LayoutGrid, MousePointer, Keyboard, FormInput, Tags,
  Calendar, GalleryHorizontal, BarChart, Command, ArrowLeftRight,
  PanelBottom, Menu, Group, Hash, List, Move
} from 'lucide-react';

const components = [
  {
    "name": "Accordion",
    "path": "/ui/accordion",
    icon: ChevronDown,
    "description": "Accordion component",
    "versions": 10,
    "status": "ready"
  },
  {
    "name": "AlertDialog",
    "path": "/ui/alert-dialog",
    icon: AlertCircle,
    "description": "AlertDialog component",
    "versions": 10,
    "status": "ready"
  },
  {
    "name": "Alert",
    "path": "/ui/alert",
    icon: AlertTriangle,
    "description": "Alert component",
    "versions": 10,
    "status": "ready"
  },
  {
    "name": "AspectRatio",
    "path": "/ui/aspect-ratio",
    icon: Ratio,
    "description": "AspectRatio component",
    "versions": 10,
    "status": "ready"
  },
  {
    "name": "Avatar",
    "path": "/ui/avatar",
    icon: User,
    "description": "Avatar component",
    "versions": 10,
    "status": "ready"
  },
  {
    "name": "Badge",
    "path": "/ui/badge",
    icon: Tag,
    "description": "Badge component",
    "versions": 10,
    "status": "ready"
  },
  {
    "name": "Breadcrumb",
    "path": "/ui/breadcrumb",
    icon: Navigation,
    "description": "Breadcrumb component",
    "versions": 10,
    "status": "ready"
  },
  {
    "name": "ButtonGroup",
    "path": "/ui/button-group",
    icon: LayoutGrid,
    "description": "ButtonGroup component",
    "versions": 10,
    "status": "ready"
  },
  {
    "name": "Button",
    "path": "/ui/button",
    icon: Square,
    "description": "Button component",
    "versions": 10,
    "status": "ready"
  },
  {
    "name": "Calendar",
    "path": "/ui/calendar",
    icon: Calendar,
    "description": "Calendar component",
    "versions": 10,
    "status": "ready"
  },
  {
    "name": "Card",
    "path": "/ui/card",
    icon: Layers,
    "description": "Card component",
    "versions": 10,
    "status": "ready"
  },
  {
    "name": "Carousel",
    "path": "/ui/carousel",
    icon: GalleryHorizontal,
    "description": "Carousel component",
    "versions": 10,
    "status": "ready"
  },
  {
    "name": "Chart",
    "path": "/ui/chart",
    icon: BarChart,
    "description": "Chart component",
    "versions": 10,
    "status": "ready"
  },
  {
    "name": "Checkbox",
    "path": "/ui/checkbox",
    icon: CheckSquare,
    "description": "Checkbox component",
    "versions": 10,
    "status": "ready"
  },
  {
    "name": "Collapsible",
    "path": "/ui/collapsible",
    icon: Maximize2,
    "description": "Collapsible component",
    "versions": 10,
    "status": "ready"
  },
  {
    "name": "Combobox",
    "path": "/ui/combobox",
    icon: ListFilter,
    "description": "Combobox component",
    "versions": 10,
    "status": "ready"
  },
  {
    "name": "Command",
    "path": "/ui/command",
    icon: Command,
    "description": "Command component",
    "versions": 10,
    "status": "ready"
  },
  {
    "name": "ContextMenu",
    "path": "/ui/context-menu",
    icon: MousePointer,
    "description": "ContextMenu component",
    "versions": 10,
    "status": "ready"
  },
  {
    "name": "DataTable",
    "path": "/ui/data-table",
    icon: Table2,
    "description": "DataTable component",
    "versions": 10,
    "status": "ready"
  },
  {
    "name": "DatePicker",
    "path": "/ui/date-picker",
    icon: Calendar,
    "description": "DatePicker component",
    "versions": 10,
    "status": "ready"
  },
  {
    "name": "Dialog",
    "path": "/ui/dialog",
    icon: Layers,
    "description": "Dialog component",
    "versions": 10,
    "status": "ready"
  },
  {
    "name": "Direction",
    "path": "/ui/direction",
    icon: ArrowLeftRight,
    "description": "Direction component",
    "versions": 10,
    "status": "ready"
  },
  {
    "name": "Drawer",
    "path": "/ui/drawer",
    icon: PanelBottom,
    "description": "Drawer component",
    "versions": 10,
    "status": "ready"
  },
  {
    "name": "DropdownMenu",
    "path": "/ui/dropdown-menu",
    icon: Menu,
    "description": "DropdownMenu component",
    "versions": 10,
    "status": "ready"
  },
  {
    "name": "Empty",
    "path": "/ui/empty",
    icon: Inbox,
    "description": "Empty component",
    "versions": 10,
    "status": "ready"
  },
  {
    "name": "Field",
    "path": "/ui/field",
    icon: FormInput,
    "description": "Field component",
    "versions": 10,
    "status": "ready"
  },
  {
    "name": "HoverCard",
    "path": "/ui/hover-card",
    icon: MessageSquare,
    "description": "HoverCard component",
    "versions": 10,
    "status": "ready"
  },
  {
    "name": "IconButton",
    "path": "/ui/icon-button",
    icon: MousePointer,
    "description": "IconButton component",
    "versions": 10,
    "status": "ready"
  },
  {
    "name": "InputGroup",
    "path": "/ui/input-group",
    icon: Group,
    "description": "InputGroup component",
    "versions": 10,
    "status": "ready"
  },
  {
    "name": "InputOtp",
    "path": "/ui/input-otp",
    icon: Hash,
    "description": "InputOtp component",
    "versions": 10,
    "status": "ready"
  },
  {
    "name": "Input",
    "path": "/ui/input",
    icon: TextCursor,
    "description": "Input component",
    "versions": 10,
    "status": "ready"
  },
  {
    "name": "Item",
    "path": "/ui/item",
    icon: List,
    "description": "Item component",
    "versions": 10,
    "status": "ready"
  },
  {
    "name": "Kbd",
    "path": "/ui/kbd",
    icon: Keyboard,
    "description": "Kbd component",
    "versions": 10,
    "status": "ready"
  },
  {
    "name": "Label",
    "path": "/ui/label",
    icon: Tags,
    "description": "Label component",
    "versions": 10,
    "status": "ready"
  },
  {
    "name": "Menubar",
    "path": "/ui/menubar",
    icon: Menu,
    "description": "Menubar component",
    "versions": 10,
    "status": "ready"
  },
  {
    "name": "NativeSelect",
    "path": "/ui/native-select",
    icon: ListFilter,
    "description": "NativeSelect component",
    "versions": 10,
    "status": "ready"
  },
  {
    "name": "NavigationMenu",
    "path": "/ui/navigation-menu",
    icon: Navigation,
    "description": "NavigationMenu component",
    "versions": 10,
    "status": "ready"
  },
  {
    "name": "Pagination",
    "path": "/ui/pagination",
    icon: ChevronRight,
    "description": "Pagination component",
    "versions": 10,
    "status": "ready"
  },
  {
    "name": "Popover",
    "path": "/ui/popover",
    icon: MessageSquare,
    "description": "Popover component",
    "versions": 10,
    "status": "ready"
  },
  {
    "name": "Progress",
    "path": "/ui/progress",
    icon: Loader,
    "description": "Progress component",
    "versions": 10,
    "status": "ready"
  },
  {
    "name": "RadioGroup",
    "path": "/ui/radio-group",
    icon: Circle,
    "description": "RadioGroup component",
    "versions": 10,
    "status": "ready"
  },
  {
    "name": "Resizable",
    "path": "/ui/resizable",
    icon: Move,
    "description": "Resizable component",
    "versions": 10,
    "status": "ready"
  },
  {
    "name": "ScrollArea",
    "path": "/ui/scroll-area",
    icon: ScrollText,
    "description": "ScrollArea component",
    "versions": 10,
    "status": "ready"
  },
  {
    "name": "Select",
    "path": "/ui/select",
    icon: ListFilter,
    "description": "Select component",
    "versions": 10,
    "status": "ready"
  },
  {
    "name": "Separator",
    "path": "/ui/separator",
    icon: Minus,
    "description": "Separator component",
    "versions": 10,
    "status": "ready"
  },
  {
    "name": "Sheet",
    "path": "/ui/sheet",
    icon: PanelLeft,
    "description": "Sheet component",
    "versions": 10,
    "status": "ready"
  },
  {
    "name": "Sidebar",
    "path": "/ui/sidebar",
    icon: PanelLeft,
    "description": "Sidebar component",
    "versions": 10,
    "status": "ready"
  },
  {
    "name": "Skeleton",
    "path": "/ui/skeleton",
    icon: Box,
    "description": "Skeleton component",
    "versions": 10,
    "status": "ready"
  },
  {
    "name": "Slider",
    "path": "/ui/slider",
    icon: SlidersHorizontal,
    "description": "Slider component",
    "versions": 10,
    "status": "ready"
  },
  {
    "name": "Sonner",
    "path": "/ui/sonner",
    icon: Bell,
    "description": "Sonner component",
    "versions": 10,
    "status": "ready"
  },
  {
    "name": "Spinner",
    "path": "/ui/spinner",
    icon: RotateCw,
    "description": "Spinner component",
    "versions": 10,
    "status": "ready"
  },
  {
    "name": "Switch",
    "path": "/ui/switch",
    icon: ToggleLeft,
    "description": "Switch component",
    "versions": 10,
    "status": "ready"
  },
  {
    "name": "Table",
    "path": "/ui/table",
    icon: Table2,
    "description": "Table component",
    "versions": 10,
    "status": "ready"
  },
  {
    "name": "Tabs",
    "path": "/ui/tabs",
    icon: LayoutList,
    "description": "Tabs component",
    "versions": 10,
    "status": "ready"
  },
  {
    "name": "Textarea",
    "path": "/ui/textarea",
    icon: Type,
    "description": "Textarea component",
    "versions": 10,
    "status": "ready"
  },
  {
    "name": "Toast",
    "path": "/ui/toast",
    icon: Bell,
    "description": "Toast component",
    "versions": 10,
    "status": "ready"
  },
  {
    "name": "ToggleGroup",
    "path": "/ui/toggle-group",
    icon: LayoutGrid,
    "description": "ToggleGroup component",
    "versions": 10,
    "status": "ready"
  },
  {
    "name": "Toggle",
    "path": "/ui/toggle",
    icon: Power,
    "description": "Toggle component",
    "versions": 10,
    "status": "ready"
  },
  {
    "name": "Tooltip",
    "path": "/ui/tooltip",
    icon: Info,
    "description": "Tooltip component",
    "versions": 10,
    "status": "ready"
  },
  {
    "name": "Typography",
    "path": "/ui/typography",
    icon: Type,
    "description": "Typography component",
    "versions": 10,
    "status": "ready"
  }
];

const statusColors = {
  ready: 'hsl(var(--success-base))',
  building: 'hsl(var(--warning-base))',
  planned: 'hsl(var(--text-muted))',
};

const statusLabels = {
  ready: 'READY',
  building: 'BUILDING',
  planned: 'PLANNED',
};

export function UIIndexPage() {
  return (
    <div className="w-full max-w-7xl mx-auto p-8 font-mono">
      {/* Header */}
      <header className="text-center mb-12">
        <h1 
          className="text-4xl md:text-5xl font-black tracking-widest uppercase mb-4"
          style={{ 
            color: 'hsl(var(--primary-base))',
            textShadow: '0 0 30px hsl(var(--primary-base) / 0.5)'
          }}
        >
          ◈ CYBER UI SYSTEM ◈
        </h1>
        <p className="text-lg tracking-wide" style={{ color: 'hsl(var(--text-muted))' }}>
          Futuristic HUD/FUI Component Library
        </p>
        <div className="mt-4 flex justify-center gap-6 text-xs">
          <span style={{ color: statusColors.ready }}>● {components.length} READY</span>
          <span style={{ color: 'hsl(var(--text-muted))' }}>› {components.reduce((a, c) => a + c.versions, 0)} VERSIONS</span>
        </div>
      </header>

      {/* Component Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {components.map((component) => {
          const Icon = component.icon;
          
          return (
            <Link
              key={component.path}
              to={component.path}
              className="group relative block transition-all duration-300"
            >
              <div
                className="relative p-5 h-full transition-all duration-300 group-hover:scale-[1.02]"
                style={{
                  backgroundColor: 'hsl(var(--surface-base) / 0.3)',
                  border: '2px solid hsl(var(--primary-base) / 0.5)',
                  clipPath: 'polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)',
                }}
              >
                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-3">
                    {/* @ts-ignore */}
                    <Icon 
                      size={24} 
                      style={{ color: 'hsl(var(--primary-base))' }}
                      className="transition-transform group-hover:scale-110"
                    />
                    <h3 
                      className="text-lg font-black tracking-wide uppercase"
                      style={{ color: 'hsl(var(--text-base))' }}
                    >
                      {component.name}
                    </h3>
                  </div>
                  <div className="text-xs opacity-50">10 VERSIONS</div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
