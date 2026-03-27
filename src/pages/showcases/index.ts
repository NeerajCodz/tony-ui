/**
 * Showcase Exports
 * Central export file for all component showcases
 */

// Buttons & Actions
export { ButtonGroupShowcase } from './buttons/ButtonGroupShowcase';
export { ButtonShowcase } from './buttons/ButtonShowcase';
export { ToggleGroupShowcase } from './buttons/ToggleGroupShowcase';
export { ToggleShowcase } from './buttons/ToggleShowcase';

// Inputs
export { CheckboxShowcase } from './inputs/CheckboxShowcase';
export { InputShowcase } from './inputs/InputShowcase';
export { LabelShowcase } from './inputs/LabelShowcase';
export { RadioGroupShowcase } from './inputs/RadioGroupShowcase';
export { SelectShowcase } from './inputs/SelectShowcase';
export { SliderShowcase } from './inputs/SliderShowcase';
export { SwitchShowcase } from './inputs/SwitchShowcase';
export { TextareaShowcase } from './inputs/TextareaShowcase';

// Data Display
export { AnalogClockShowcase } from './data-display/AnalogClockShowcase';
export { AspectRatioShowcase } from './data-display/AspectRatioShowcase';
export { AvatarShowcase } from './data-display/AvatarShowcase';
export { BadgeShowcase } from './data-display/BadgeShowcase';
export { CalendarShowcase } from './data-display/CalendarShowcase';
export { CarouselShowcase } from './data-display/CarouselShowcase';
export { DataTableShowcase } from './data-display/DataTableShowcase';
export { DigitalClockShowcase } from './data-display/DigitalClockShowcase';
export { SkeletonShowcase } from './data-display/SkeletonShowcase';
export { SpinnerShowcase } from './data-display/SpinnerShowcase';
export { TableShowcase } from './data-display/TableShowcase';
export { TypographyShowcase } from './data-display/TypographyShowcase';

// Navigation
export { BreadcrumbShowcase } from './navigation/BreadcrumbShowcase';
export { CommandShowcase } from './navigation/CommandShowcase';
export { MenubarShowcase } from './navigation/MenubarShowcase';
export { NavigationMenuShowcase } from './navigation/NavigationMenuShowcase';
export { PaginationShowcase } from './navigation/PaginationShowcase';
export { TabsShowcase } from './navigation/TabsShowcase';

// Layout
export { AccordionShowcase } from './layout/AccordionShowcase';
export { CardShowcase } from './layout/CardShowcase';
export { CollapsibleShowcase } from './layout/CollapsibleShowcase';
export { ScrollAreaShowcase } from './layout/ScrollAreaShowcase';
export { SeparatorShowcase } from './layout/SeparatorShowcase';

// Overlays
export { AlertDialogShowcase } from './overlays/AlertDialogShowcase';
export { ContextMenuShowcase } from './overlays/ContextMenuShowcase';
export { DialogShowcase } from './overlays/DialogShowcase';
export { DrawerShowcase } from './overlays/DrawerShowcase';
export { DropdownMenuShowcase } from './overlays/DropdownMenuShowcase';
export { HoverCardShowcase } from './overlays/HoverCardShowcase';
export { PopoverShowcase } from './overlays/PopoverShowcase';
export { SheetShowcase } from './overlays/SheetShowcase';
export { TooltipShowcase } from './overlays/TooltipShowcase';

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
