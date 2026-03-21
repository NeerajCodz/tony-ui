import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Layout, Layers, Box } from 'lucide-react';
import { Dashboard, PanelsGallery, ElementsGallery } from './pages/legacy';
import { UIIndexPage } from './pages/ui/index';
import { uiComponentRegistry } from './pages/ui/registry';
import { UIComponentShowcaseBySlug } from './pages/ui/ComponentShowcasePage';

// Import all 62 showcase components
import { AccordionShowcase } from './pages/showcases/AccordionShowcase';
import { AlertDialogShowcase } from './pages/showcases/AlertDialogShowcase';
import { AlertShowcase } from './pages/showcases/AlertShowcase';
import { AnalogClockShowcase } from './pages/showcases/AnalogClockShowcase';
import { AspectRatioShowcase } from './pages/showcases/AspectRatioShowcase';
import { AvatarShowcase } from './pages/showcases/AvatarShowcase';
import { BadgeShowcase } from './pages/showcases/BadgeShowcase';
import { BreadcrumbShowcase } from './pages/showcases/BreadcrumbShowcase';
import { ButtonGroupShowcase } from './pages/showcases/ButtonGroupShowcase';
import { ButtonShowcase } from './pages/showcases/ButtonShowcase';
import { CalendarShowcase } from './pages/showcases/CalendarShowcase';
import { CardShowcase } from './pages/showcases/CardShowcase';
import { CarouselShowcase } from './pages/showcases/CarouselShowcase';
import { ChartShowcase } from './pages/showcases/ChartShowcase';
import { CheckboxShowcase } from './pages/showcases/CheckboxShowcase';
import { CollapsibleShowcase } from './pages/showcases/CollapsibleShowcase';
import { ComboboxShowcase } from './pages/showcases/ComboboxShowcase';
import { CommandShowcase } from './pages/showcases/CommandShowcase';
import { ContextMenuShowcase } from './pages/showcases/ContextMenuShowcase';
import { DataTableShowcase } from './pages/showcases/DataTableShowcase';
import { DatePickerShowcase } from './pages/showcases/DatePickerShowcase';
import { DigitalClockShowcase } from './pages/showcases/DigitalClockShowcase';
import { DialogShowcase } from './pages/showcases/DialogShowcase';
import { DirectionShowcase } from './pages/showcases/DirectionShowcase';
import { DrawerShowcase } from './pages/showcases/DrawerShowcase';
import { DropdownMenuShowcase } from './pages/showcases/DropdownMenuShowcase';
import { EmptyShowcase } from './pages/showcases/EmptyShowcase';
import { FieldShowcase } from './pages/showcases/FieldShowcase';
import { HoverCardShowcase } from './pages/showcases/HoverCardShowcase';
import { IconButtonShowcase } from './pages/showcases/IconButtonShowcase';
import { InputGroupShowcase } from './pages/showcases/InputGroupShowcase';
import { InputOtpShowcase } from './pages/showcases/InputOtpShowcase';
import { InputShowcase } from './pages/showcases/InputShowcase';
import { ItemShowcase } from './pages/showcases/ItemShowcase';
import { KbdShowcase } from './pages/showcases/KbdShowcase';
import { LabelShowcase } from './pages/showcases/LabelShowcase';
import { MenubarShowcase } from './pages/showcases/MenubarShowcase';
import { NativeSelectShowcase } from './pages/showcases/NativeSelectShowcase';
import { NavigationMenuShowcase } from './pages/showcases/NavigationMenuShowcase';
import { PaginationShowcase } from './pages/showcases/PaginationShowcase';
import { PopoverShowcase } from './pages/showcases/PopoverShowcase';
import { ProgressShowcase } from './pages/showcases/ProgressShowcase';
import { RadioGroupShowcase } from './pages/showcases/RadioGroupShowcase';
import { ResizableShowcase } from './pages/showcases/ResizableShowcase';
import { ScrollAreaShowcase } from './pages/showcases/ScrollAreaShowcase';
import { SelectShowcase } from './pages/showcases/SelectShowcase';
import { SeparatorShowcase } from './pages/showcases/SeparatorShowcase';
import { SheetShowcase } from './pages/showcases/SheetShowcase';
import { SidebarShowcase } from './pages/showcases/SidebarShowcase';
import { SkeletonShowcase } from './pages/showcases/SkeletonShowcase';
import { SliderShowcase } from './pages/showcases/SliderShowcase';
import { SonnerShowcase } from './pages/showcases/SonnerShowcase';
import { SpinnerShowcase } from './pages/showcases/SpinnerShowcase';
import { SwitchShowcase } from './pages/showcases/SwitchShowcase';
import { TableShowcase } from './pages/showcases/TableShowcase';
import { TabsShowcase } from './pages/showcases/TabsShowcase';
import { TextareaShowcase } from './pages/showcases/TextareaShowcase';
import { ToastShowcase } from './pages/showcases/ToastShowcase';
import { ToggleGroupShowcase } from './pages/showcases/ToggleGroupShowcase';
import { ToggleShowcase } from './pages/showcases/ToggleShowcase';
import { TooltipShowcase } from './pages/showcases/TooltipShowcase';
import { TypographyShowcase } from './pages/showcases/TypographyShowcase';

const showcaseRoutes = [
  { slug: 'accordion', element: <AccordionShowcase /> },
  { slug: 'alert-dialog', element: <AlertDialogShowcase /> },
  { slug: 'alert', element: <AlertShowcase /> },
  { slug: 'analog-clock', element: <AnalogClockShowcase /> },
  { slug: 'aspect-ratio', element: <AspectRatioShowcase /> },
  { slug: 'avatar', element: <AvatarShowcase /> },
  { slug: 'badge', element: <BadgeShowcase /> },
  { slug: 'breadcrumb', element: <BreadcrumbShowcase /> },
  { slug: 'button-group', element: <ButtonGroupShowcase /> },
  { slug: 'button', element: <ButtonShowcase /> },
  { slug: 'calendar', element: <CalendarShowcase /> },
  { slug: 'card', element: <CardShowcase /> },
  { slug: 'carousel', element: <CarouselShowcase /> },
  { slug: 'chart', element: <ChartShowcase /> },
  { slug: 'checkbox', element: <CheckboxShowcase /> },
  { slug: 'collapsible', element: <CollapsibleShowcase /> },
  { slug: 'combobox', element: <ComboboxShowcase /> },
  { slug: 'command', element: <CommandShowcase /> },
  { slug: 'context-menu', element: <ContextMenuShowcase /> },
  { slug: 'data-table', element: <DataTableShowcase /> },
  { slug: 'date-picker', element: <DatePickerShowcase /> },
  { slug: 'digital-clock', element: <DigitalClockShowcase /> },
  { slug: 'dialog', element: <DialogShowcase /> },
  { slug: 'direction', element: <DirectionShowcase /> },
  { slug: 'drawer', element: <DrawerShowcase /> },
  { slug: 'dropdown-menu', element: <DropdownMenuShowcase /> },
  { slug: 'empty', element: <EmptyShowcase /> },
  { slug: 'field', element: <FieldShowcase /> },
  { slug: 'hover-card', element: <HoverCardShowcase /> },
  { slug: 'icon-button', element: <IconButtonShowcase /> },
  { slug: 'input-group', element: <InputGroupShowcase /> },
  { slug: 'input-otp', element: <InputOtpShowcase /> },
  { slug: 'input', element: <InputShowcase /> },
  { slug: 'item', element: <ItemShowcase /> },
  { slug: 'kbd', element: <KbdShowcase /> },
  { slug: 'label', element: <LabelShowcase /> },
  { slug: 'menubar', element: <MenubarShowcase /> },
  { slug: 'native-select', element: <NativeSelectShowcase /> },
  { slug: 'navigation-menu', element: <NavigationMenuShowcase /> },
  { slug: 'pagination', element: <PaginationShowcase /> },
  { slug: 'popover', element: <PopoverShowcase /> },
  { slug: 'progress', element: <ProgressShowcase /> },
  { slug: 'radio-group', element: <RadioGroupShowcase /> },
  { slug: 'resizable', element: <ResizableShowcase /> },
  { slug: 'scroll-area', element: <ScrollAreaShowcase /> },
  { slug: 'select', element: <SelectShowcase /> },
  { slug: 'separator', element: <SeparatorShowcase /> },
  { slug: 'sheet', element: <SheetShowcase /> },
  { slug: 'sidebar', element: <SidebarShowcase /> },
  { slug: 'skeleton', element: <SkeletonShowcase /> },
  { slug: 'slider', element: <SliderShowcase /> },
  { slug: 'sonner', element: <SonnerShowcase /> },
  { slug: 'spinner', element: <SpinnerShowcase /> },
  { slug: 'switch', element: <SwitchShowcase /> },
  { slug: 'table', element: <TableShowcase /> },
  { slug: 'tabs', element: <TabsShowcase /> },
  { slug: 'textarea', element: <TextareaShowcase /> },
  { slug: 'toast', element: <ToastShowcase /> },
  { slug: 'toggle-group', element: <ToggleGroupShowcase /> },
  { slug: 'toggle', element: <ToggleShowcase /> },
  { slug: 'tooltip', element: <TooltipShowcase /> },
  { slug: 'typography', element: <TypographyShowcase /> },
] as const;

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
      <div className="bg-cyber-panel/90 border border-cyber-blue/30 px-2 py-2 flex flex-col gap-2 clip-path-panel backdrop-blur-md">
        <div className="flex flex-wrap gap-2">
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
        <div className="max-w-[70vw] overflow-x-auto whitespace-nowrap text-[10px] uppercase tracking-widest text-cyber-blue/80">
          {uiComponentRegistry.map((component) => (
            <Link
              key={component.slug}
              to={`/ui/${component.slug}`}
              className={`mr-3 inline-block border-b border-transparent py-1 hover:border-cyber-blue ${
                location.pathname === `/ui/${component.slug}` ? 'text-cyber-blue' : ''
              }`}
            >
              {component.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

const AppContent = () => {
  return (
    <div className="min-h-screen pt-24 pb-12 px-8 flex flex-col items-center bg-[radial-gradient(circle_at_center,var(--tw-gradient-from)_0%,transparent_70%)] from-cyber-blue/5">
      <div
        className="fixed inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage: 'linear-gradient(#00aaff 1px, transparent 1px), linear-gradient(90deg, #00aaff 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
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
              <Route path="/ui" element={<UIIndexPage />} />

              {showcaseRoutes.map(({ slug }) => (
                <Route key={`ui-dynamic-${slug}`} path={`/ui/${slug}`} element={<UIComponentShowcaseBySlug slug={slug} />} />
              ))}

              {showcaseRoutes.flatMap(({ slug, element }) => [
                <Route key={`ui-${slug}`} path={`/ui/${slug}`} element={element} />,
                <Route key={`showcases-${slug}`} path={`/showcases/${slug}`} element={element} />,
              ])}
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
