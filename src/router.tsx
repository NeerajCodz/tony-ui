import { Box, Layers, Layout } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { Link, Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom';
import { ElementsGallery, PanelsGallery } from './pages/legacy';

// Import new showcase components
import { AccordionShowcase, AlertDialogShowcase, AlertShowcase, AnalogClockShowcase, AspectRatioShowcase, AvatarShowcase, BadgeShowcase, BreadcrumbShowcase, ButtonGroupShowcase, ButtonShowcase, CalendarShowcase, CardShowcase, CarouselShowcase, CheckboxShowcase, CollapsibleShowcase, CommandShowcase, ContextMenuShowcase, DataTableShowcase, DialogShowcase, DigitalClockShowcase, DrawerShowcase, DropdownMenuShowcase, HoverCardShowcase, InputShowcase, LabelShowcase, MenubarShowcase, NavigationMenuShowcase, PaginationShowcase, PopoverShowcase, ProgressShowcase, RadioGroupShowcase, ScrollAreaShowcase, SelectShowcase, SeparatorShowcase, SheetShowcase, SkeletonShowcase, SliderShowcase, SonnerShowcase, SpinnerShowcase, SwitchShowcase, TableShowcase, TabsShowcase, TextareaShowcase, ToggleGroupShowcase, ToggleShowcase, TooltipShowcase, TypographyShowcase } from './pages/showcases';
import { ShowcaseIndex } from './pages/showcases/ShowcaseIndex';

const showcaseRoutes = [
  // Buttons & Actions
  { slug: 'button', element: <ButtonShowcase /> },
  { slug: 'button-group', element: <ButtonGroupShowcase /> },
  { slug: 'toggle', element: <ToggleShowcase /> },
  { slug: 'toggle-group', element: <ToggleGroupShowcase /> },
  // Inputs
  { slug: 'input', element: <InputShowcase /> },
  { slug: 'textarea', element: <TextareaShowcase /> },
  { slug: 'checkbox', element: <CheckboxShowcase /> },
  { slug: 'radio-group', element: <RadioGroupShowcase /> },
  { slug: 'switch', element: <SwitchShowcase /> },
  { slug: 'slider', element: <SliderShowcase /> },
  { slug: 'select', element: <SelectShowcase /> },
  { slug: 'label', element: <LabelShowcase /> },
  // Data Display
  { slug: 'badge', element: <BadgeShowcase /> },
  { slug: 'avatar', element: <AvatarShowcase /> },
  { slug: 'skeleton', element: <SkeletonShowcase /> },
  { slug: 'spinner', element: <SpinnerShowcase /> },
  { slug: 'table', element: <TableShowcase /> },
  { slug: 'data-table', element: <DataTableShowcase /> },
  { slug: 'calendar', element: <CalendarShowcase /> },
  { slug: 'carousel', element: <CarouselShowcase /> },
  { slug: 'aspect-ratio', element: <AspectRatioShowcase /> },
  { slug: 'analog-clock', element: <AnalogClockShowcase /> },
  { slug: 'digital-clock', element: <DigitalClockShowcase /> },
  { slug: 'typography', element: <TypographyShowcase /> },
  // Navigation
  { slug: 'tabs', element: <TabsShowcase /> },
  { slug: 'pagination', element: <PaginationShowcase /> },
  { slug: 'breadcrumb', element: <BreadcrumbShowcase /> },
  { slug: 'menubar', element: <MenubarShowcase /> },
  { slug: 'navigation-menu', element: <NavigationMenuShowcase /> },
  { slug: 'command', element: <CommandShowcase /> },
  // Layout
  { slug: 'card', element: <CardShowcase /> },
  { slug: 'separator', element: <SeparatorShowcase /> },
  { slug: 'accordion', element: <AccordionShowcase /> },
  { slug: 'collapsible', element: <CollapsibleShowcase /> },
  { slug: 'scroll-area', element: <ScrollAreaShowcase /> },
  // Overlays
  { slug: 'dialog', element: <DialogShowcase /> },
  { slug: 'alert-dialog', element: <AlertDialogShowcase /> },
  { slug: 'sheet', element: <SheetShowcase /> },
  { slug: 'drawer', element: <DrawerShowcase /> },
  { slug: 'popover', element: <PopoverShowcase /> },
  { slug: 'tooltip', element: <TooltipShowcase /> },
  { slug: 'hover-card', element: <HoverCardShowcase /> },
  { slug: 'dropdown-menu', element: <DropdownMenuShowcase /> },
  { slug: 'context-menu', element: <ContextMenuShowcase /> },
  // Feedback
  { slug: 'alert', element: <AlertShowcase /> },
  { slug: 'progress', element: <ProgressShowcase /> },
  { slug: 'sonner', element: <SonnerShowcase /> },
] as const;

const Navigation = () => {
  const location = useLocation();
  const links = [
    { to: '/', label: 'DASHBOARD', icon: Layout },
    { to: '/panels', label: 'PANELS', icon: Layers },
    { to: '/elements', label: 'ELEMENTS', icon: Box },
    { to: '/ui', label: 'SHOWCASES', icon: Box },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4">
      <div className="bg-cyber-panel/90 border border-cyber-blue/30 px-2 py-2 flex gap-2 clip-path-panel backdrop-blur-md">
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
              <Route path="/" element={<ShowcaseIndex />} />
              <Route path="/panels" element={<PanelsGallery />} />
              <Route path="/elements" element={<ElementsGallery />} />
              <Route path="/ui" element={<ShowcaseIndex />} />
              <Route path="/showcases" element={<ShowcaseIndex />} />

              {/* New showcase routes with version grid */}
              {showcaseRoutes.map(({ slug, element }) => [
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
