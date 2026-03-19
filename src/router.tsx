import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Layout, Layers, Box } from 'lucide-react';

// Import existing pages from legacy
import { Dashboard, PanelsGallery, ElementsGallery } from './pages/legacy';

// UI Pages
import { UIIndexPage } from './pages/ui/index';
import { AccordionPage as UIAccordionPage } from './pages/ui/AccordionPage';
import { AlertDialogPage as UIAlertDialogPage } from './pages/ui/AlertDialogPage';
import { AlertPage as UIAlertPage } from './pages/ui/AlertPage';
import { AspectRatioPage as UIAspectRatioPage } from './pages/ui/AspectRatioPage';
import { AvatarPage as UIAvatarPage } from './pages/ui/AvatarPage';
import { BadgePage as UIBadgePage } from './pages/ui/BadgePage';
import { BreadcrumbPage as UIBreadcrumbPage } from './pages/ui/BreadcrumbPage';
import { ButtonGroupPage as UIButtonGroupPage } from './pages/ui/ButtonGroupPage';
import { ButtonPage as UIButtonPage } from './pages/ui/ButtonPage';
import { CalendarPage as UICalendarPage } from './pages/ui/CalendarPage';
import { UICardPage as UICardPage } from './pages/ui/CardPage';
import { CarouselPage as UICarouselPage } from './pages/ui/CarouselPage';
import { ChartPage as UIChartPage } from './pages/ui/ChartPage';
import { CheckboxPage as UICheckboxPage } from './pages/ui/CheckboxPage';
import { CollapsiblePage as UICollapsiblePage } from './pages/ui/CollapsiblePage';
import { ComboboxPage as UIComboboxPage } from './pages/ui/ComboboxPage';
import { CommandPage as UICommandPage } from './pages/ui/CommandPage';
import { ContextMenuPage as UIContextMenuPage } from './pages/ui/ContextMenuPage';
import { DataTablePage as UIDataTablePage } from './pages/ui/DataTablePage';
import { DatePickerPage as UIDatePickerPage } from './pages/ui/DatePickerPage';
import { DialogPage as UIDialogPage } from './pages/ui/DialogPage';
import { DirectionPage as UIDirectionPage } from './pages/ui/DirectionPage';
import { DrawerPage as UIDrawerPage } from './pages/ui/DrawerPage';
import { DropdownMenuPage as UIDropdownMenuPage } from './pages/ui/DropdownMenuPage';
import { EmptyPage as UIEmptyPage } from './pages/ui/EmptyPage';
import { FieldPage as UIFieldPage } from './pages/ui/FieldPage';
import { HoverCardPage as UIHoverCardPage } from './pages/ui/HoverCardPage';
import { IconButtonPage as UIIconButtonPage } from './pages/ui/IconButtonPage';
import { InputGroupPage as UIInputGroupPage } from './pages/ui/InputGroupPage';
import { InputOtpPage as UIInputOtpPage } from './pages/ui/InputOtpPage';
import { InputPage as UIInputPage } from './pages/ui/InputPage';
import { ItemPage as UIItemPage } from './pages/ui/ItemPage';
import { KbdPage as UIKbdPage } from './pages/ui/KbdPage';
import { LabelPage as UILabelPage } from './pages/ui/LabelPage';
import { MenubarPage as UIMenubarPage } from './pages/ui/MenubarPage';
import { NativeSelectPage as UINativeSelectPage } from './pages/ui/NativeSelectPage';
import { NavigationMenuPage as UINavigationMenuPage } from './pages/ui/NavigationMenuPage';
import { PaginationPage as UIPaginationPage } from './pages/ui/PaginationPage';
import { PopoverPage as UIPopoverPage } from './pages/ui/PopoverPage';
import { ProgressPage as UIProgressPage } from './pages/ui/ProgressPage';
import { RadioGroupPage as UIRadioGroupPage } from './pages/ui/RadioGroupPage';
import { ResizablePage as UIResizablePage } from './pages/ui/ResizablePage';
import { ScrollAreaPage as UIScrollAreaPage } from './pages/ui/ScrollAreaPage';
import { SelectPage as UISelectPage } from './pages/ui/SelectPage';
import { SeparatorPage as UISeparatorPage } from './pages/ui/SeparatorPage';
import { SheetPage as UISheetPage } from './pages/ui/SheetPage';
import { SidebarPage as UISidebarPage } from './pages/ui/SidebarPage';
import { SkeletonPage as UISkeletonPage } from './pages/ui/SkeletonPage';
import { SliderPage as UISliderPage } from './pages/ui/SliderPage';
import { SonnerPage as UISonnerPage } from './pages/ui/SonnerPage';
import { SpinnerPage as UISpinnerPage } from './pages/ui/SpinnerPage';
import { SwitchPage as UISwitchPage } from './pages/ui/SwitchPage';
import { TablePage as UITablePage } from './pages/ui/TablePage';
import { TabsPage as UITabsPage } from './pages/ui/TabsPage';
import { TextareaPage as UITextareaPage } from './pages/ui/TextareaPage';
import { ToastPage as UIToastPage } from './pages/ui/ToastPage';
import { ToggleGroupPage as UIToggleGroupPage } from './pages/ui/ToggleGroupPage';
import { TogglePage as UITogglePage } from './pages/ui/TogglePage';
import { TooltipPage as UITooltipPage } from './pages/ui/TooltipPage';
import { TypographyPage as UITypographyPage } from './pages/ui/TypographyPage';

const Navigation = () => {
  const location = useLocation();
  const links = [
    { to: '/', label: 'DASHBOARD', icon: Layout },
    { to: '/panels', label: 'PANELS', icon: Layers },
    { to: '/elements', label: 'ELEMENTS', icon: Box },
    { to: '/ui', label: 'COMPONENTS', icon: Box },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4">
      <div className="bg-cyber-panel/90 border border-cyber-blue/30 px-2 py-1 flex gap-2 clip-path-panel backdrop-blur-md">
        {links.map(({ to, label, icon: Icon }) => {
          const isActive = location.pathname === to || (to === '/ui' && location.pathname.startsWith('/ui'));
          return (
            <Link key={to} to={to}>
              <motion.div
                className={`flex items-center gap-2 px-4 py-2 text-[10px] font-black tracking-widest transition-colors ${
                  isActive ? 'bg-cyber-blue text-cyber-dark' : 'text-cyber-blue hover:bg-cyber-blue/10'
                }`}
                whileHover={{ y: -2 }}
              >
                <Icon size={14} />
                {label}
              </motion.div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

const AppContent = () => {
  return (
    <div className="min-h-screen pt-24 pb-12 px-8 flex flex-col items-center bg-[radial-gradient(circle_at_center,var(--tw-gradient-from)_0%,transparent_70%)] from-cyber-blue/5">
      {/* Background Grid Pattern */}
      <div className="fixed inset-0 pointer-events-none opacity-10" 
           style={{ backgroundImage: 'linear-gradient(#00aaff 1px, transparent 1px), linear-gradient(90deg, #00aaff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <Navigation />

      <main className="w-full flex flex-col items-center relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={window.location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="w-full flex flex-col items-center"
          >
            <Routes>
              <Route path="/" element={<UIIndexPage />} />
              <Route path="/panels" element={<PanelsGallery />} />
              <Route path="/elements" element={<ElementsGallery />} />
              
              {/* Generated Routes */}
              <Route path="/ui" element={<UIIndexPage />} />
              <Route path="/ui/accordion" element={<UIAccordionPage />} />
              <Route path="/ui/alert-dialog" element={<UIAlertDialogPage />} />
              <Route path="/ui/alert" element={<UIAlertPage />} />
              <Route path="/ui/aspect-ratio" element={<UIAspectRatioPage />} />
              <Route path="/ui/avatar" element={<UIAvatarPage />} />
              <Route path="/ui/badge" element={<UIBadgePage />} />
              <Route path="/ui/breadcrumb" element={<UIBreadcrumbPage />} />
              <Route path="/ui/button-group" element={<UIButtonGroupPage />} />
              <Route path="/ui/button" element={<UIButtonPage />} />
              <Route path="/ui/calendar" element={<UICalendarPage />} />
              <Route path="/ui/card" element={<UICardPage />} />
              <Route path="/ui/carousel" element={<UICarouselPage />} />
              <Route path="/ui/chart" element={<UIChartPage />} />
              <Route path="/ui/checkbox" element={<UICheckboxPage />} />
              <Route path="/ui/collapsible" element={<UICollapsiblePage />} />
              <Route path="/ui/combobox" element={<UIComboboxPage />} />
              <Route path="/ui/command" element={<UICommandPage />} />
              <Route path="/ui/context-menu" element={<UIContextMenuPage />} />
              <Route path="/ui/data-table" element={<UIDataTablePage />} />
              <Route path="/ui/date-picker" element={<UIDatePickerPage />} />
              <Route path="/ui/dialog" element={<UIDialogPage />} />
              <Route path="/ui/direction" element={<UIDirectionPage />} />
              <Route path="/ui/drawer" element={<UIDrawerPage />} />
              <Route path="/ui/dropdown-menu" element={<UIDropdownMenuPage />} />
              <Route path="/ui/empty" element={<UIEmptyPage />} />
              <Route path="/ui/field" element={<UIFieldPage />} />
              <Route path="/ui/hover-card" element={<UIHoverCardPage />} />
              <Route path="/ui/icon-button" element={<UIIconButtonPage />} />
              <Route path="/ui/input-group" element={<UIInputGroupPage />} />
              <Route path="/ui/input-otp" element={<UIInputOtpPage />} />
              <Route path="/ui/input" element={<UIInputPage />} />
              <Route path="/ui/item" element={<UIItemPage />} />
              <Route path="/ui/kbd" element={<UIKbdPage />} />
              <Route path="/ui/label" element={<UILabelPage />} />
              <Route path="/ui/menubar" element={<UIMenubarPage />} />
              <Route path="/ui/native-select" element={<UINativeSelectPage />} />
              <Route path="/ui/navigation-menu" element={<UINavigationMenuPage />} />
              <Route path="/ui/pagination" element={<UIPaginationPage />} />
              <Route path="/ui/popover" element={<UIPopoverPage />} />
              <Route path="/ui/progress" element={<UIProgressPage />} />
              <Route path="/ui/radio-group" element={<UIRadioGroupPage />} />
              <Route path="/ui/resizable" element={<UIResizablePage />} />
              <Route path="/ui/scroll-area" element={<UIScrollAreaPage />} />
              <Route path="/ui/select" element={<UISelectPage />} />
              <Route path="/ui/separator" element={<UISeparatorPage />} />
              <Route path="/ui/sheet" element={<UISheetPage />} />
              <Route path="/ui/sidebar" element={<UISidebarPage />} />
              <Route path="/ui/skeleton" element={<UISkeletonPage />} />
              <Route path="/ui/slider" element={<UISliderPage />} />
              <Route path="/ui/sonner" element={<UISonnerPage />} />
              <Route path="/ui/spinner" element={<UISpinnerPage />} />
              <Route path="/ui/switch" element={<UISwitchPage />} />
              <Route path="/ui/table" element={<UITablePage />} />
              <Route path="/ui/tabs" element={<UITabsPage />} />
              <Route path="/ui/textarea" element={<UITextareaPage />} />
              <Route path="/ui/toast" element={<UIToastPage />} />
              <Route path="/ui/toggle-group" element={<UIToggleGroupPage />} />
              <Route path="/ui/toggle" element={<UITogglePage />} />
              <Route path="/ui/tooltip" element={<UITooltipPage />} />
              <Route path="/ui/typography" element={<UITypographyPage />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>

      <style>{`
        @keyframes scan {
          from { transform: translateY(-50%); }
          to { transform: translateY(50%); }
        }
        .clip-path-header {
          clip-path: polygon(15% 0, 85% 0, 100% 100%, 0 100%);
        }
        .clip-path-panel {
          clip-path: polygon(
            0 15px, 15px 0, 
            calc(100% - 15px) 0, 100% 15px, 
            100% calc(100% - 15px), calc(100% - 15px) 100%, 
            15px 100%, 0 calc(100% - 15px)
          );
        }
      `}</style>
    </div>
  );
};

export function AppRouter() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
