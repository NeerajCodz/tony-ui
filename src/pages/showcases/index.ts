/**
 * Showcase Exports
 * Central export file for all component showcases
 */

// Buttons & Actions
export { ButtonShowcase } from './buttons/ButtonShowcase';
export { ButtonGroupShowcase } from './buttons/ButtonGroupShowcase';
export { ToggleShowcase } from './buttons/ToggleShowcase';
export { ToggleGroupShowcase } from './buttons/ToggleGroupShowcase';

// Inputs
export { InputShowcase } from './inputs/InputShowcase';
export { TextareaShowcase } from './inputs/TextareaShowcase';
export { CheckboxShowcase } from './inputs/CheckboxShowcase';
export { RadioGroupShowcase } from './inputs/RadioGroupShowcase';
export { SwitchShowcase } from './inputs/SwitchShowcase';
export { SliderShowcase } from './inputs/SliderShowcase';
export { SelectShowcase } from './inputs/SelectShowcase';
export { LabelShowcase } from './inputs/LabelShowcase';

// Data Display
export { BadgeShowcase } from './data-display/BadgeShowcase';
export { AvatarShowcase } from './data-display/AvatarShowcase';
export { SkeletonShowcase } from './data-display/SkeletonShowcase';
export { SpinnerShowcase } from './data-display/SpinnerShowcase';
export { TableShowcase } from './data-display/TableShowcase';
export { DataTableShowcase } from './data-display/DataTableShowcase';
export { CalendarShowcase } from './data-display/CalendarShowcase';
export { CarouselShowcase } from './data-display/CarouselShowcase';
export { AspectRatioShowcase } from './data-display/AspectRatioShowcase';
export { AnalogClockShowcase } from './data-display/AnalogClockShowcase';
export { DigitalClockShowcase } from './data-display/DigitalClockShowcase';
export { TypographyShowcase } from './data-display/TypographyShowcase';

// Navigation
export { TabsShowcase } from './navigation/TabsShowcase';
export { PaginationShowcase } from './navigation/PaginationShowcase';
export { BreadcrumbShowcase } from './navigation/BreadcrumbShowcase';
export { MenubarShowcase } from './navigation/MenubarShowcase';
export { NavigationMenuShowcase } from './navigation/NavigationMenuShowcase';
export { CommandShowcase } from './navigation/CommandShowcase';

// Layout
export { CardShowcase } from './layout/CardShowcase';
export { SeparatorShowcase } from './layout/SeparatorShowcase';
export { AccordionShowcase } from './layout/AccordionShowcase';
export { CollapsibleShowcase } from './layout/CollapsibleShowcase';
export { ScrollAreaShowcase } from './layout/ScrollAreaShowcase';

// Overlays
export { DialogShowcase } from './overlays/DialogShowcase';
export { AlertDialogShowcase } from './overlays/AlertDialogShowcase';
export { SheetShowcase } from './overlays/SheetShowcase';
export { DrawerShowcase } from './overlays/DrawerShowcase';
export { PopoverShowcase } from './overlays/PopoverShowcase';
export { TooltipShowcase } from './overlays/TooltipShowcase';
export { HoverCardShowcase } from './overlays/HoverCardShowcase';
export { DropdownMenuShowcase } from './overlays/DropdownMenuShowcase';
export { ContextMenuShowcase } from './overlays/ContextMenuShowcase';

// Feedback
export { AlertShowcase } from './feedback/AlertShowcase';
export { ProgressShowcase } from './feedback/ProgressShowcase';
export { SonnerShowcase } from './feedback/SonnerShowcase';

/**
 * Showcase Registry
 * Maps component slug to showcase component
 */
export const showcaseRegistry = {
  // Buttons & Actions
  'button': () => import('./buttons/ButtonShowcase'),
  'button-group': () => import('./buttons/ButtonGroupShowcase'),
  'toggle': () => import('./buttons/ToggleShowcase'),
  'toggle-group': () => import('./buttons/ToggleGroupShowcase'),
  
  // Inputs
  'input': () => import('./inputs/InputShowcase'),
  'textarea': () => import('./inputs/TextareaShowcase'),
  'checkbox': () => import('./inputs/CheckboxShowcase'),
  'radio-group': () => import('./inputs/RadioGroupShowcase'),
  'switch': () => import('./inputs/SwitchShowcase'),
  'slider': () => import('./inputs/SliderShowcase'),
  'select': () => import('./inputs/SelectShowcase'),
  'label': () => import('./inputs/LabelShowcase'),
  
  // Data Display
  'badge': () => import('./data-display/BadgeShowcase'),
  'avatar': () => import('./data-display/AvatarShowcase'),
  'skeleton': () => import('./data-display/SkeletonShowcase'),
  'spinner': () => import('./data-display/SpinnerShowcase'),
  'table': () => import('./data-display/TableShowcase'),
  'data-table': () => import('./data-display/DataTableShowcase'),
  'calendar': () => import('./data-display/CalendarShowcase'),
  'carousel': () => import('./data-display/CarouselShowcase'),
  'aspect-ratio': () => import('./data-display/AspectRatioShowcase'),
  'analog-clock': () => import('./data-display/AnalogClockShowcase'),
  'digital-clock': () => import('./data-display/DigitalClockShowcase'),
  'typography': () => import('./data-display/TypographyShowcase'),
  
  // Navigation
  'tabs': () => import('./navigation/TabsShowcase'),
  'pagination': () => import('./navigation/PaginationShowcase'),
  'breadcrumb': () => import('./navigation/BreadcrumbShowcase'),
  'menubar': () => import('./navigation/MenubarShowcase'),
  'navigation-menu': () => import('./navigation/NavigationMenuShowcase'),
  'command': () => import('./navigation/CommandShowcase'),
  
  // Layout
  'card': () => import('./layout/CardShowcase'),
  'separator': () => import('./layout/SeparatorShowcase'),
  'accordion': () => import('./layout/AccordionShowcase'),
  'collapsible': () => import('./layout/CollapsibleShowcase'),
  'scroll-area': () => import('./layout/ScrollAreaShowcase'),
  
  // Overlays
  'dialog': () => import('./overlays/DialogShowcase'),
  'alert-dialog': () => import('./overlays/AlertDialogShowcase'),
  'sheet': () => import('./overlays/SheetShowcase'),
  'drawer': () => import('./overlays/DrawerShowcase'),
  'popover': () => import('./overlays/PopoverShowcase'),
  'tooltip': () => import('./overlays/TooltipShowcase'),
  'hover-card': () => import('./overlays/HoverCardShowcase'),
  'dropdown-menu': () => import('./overlays/DropdownMenuShowcase'),
  'context-menu': () => import('./overlays/ContextMenuShowcase'),
  
  // Feedback
  'alert': () => import('./feedback/AlertShowcase'),
  'progress': () => import('./feedback/ProgressShowcase'),
  'sonner': () => import('./feedback/SonnerShowcase'),
} as const;

export type ShowcaseSlug = keyof typeof showcaseRegistry;
