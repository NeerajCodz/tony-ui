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

// Data Display
export { BadgeShowcase } from './data-display/BadgeShowcase';
export { AvatarShowcase } from './data-display/AvatarShowcase';
export { SkeletonShowcase } from './data-display/SkeletonShowcase';
export { SpinnerShowcase } from './data-display/SpinnerShowcase';

// Navigation
export { TabsShowcase } from './navigation/TabsShowcase';
export { PaginationShowcase } from './navigation/PaginationShowcase';
export { BreadcrumbShowcase } from './navigation/BreadcrumbShowcase';

// Layout
export { CardShowcase } from './layout/CardShowcase';
export { SeparatorShowcase } from './layout/SeparatorShowcase';
export { AccordionShowcase } from './layout/AccordionShowcase';
export { CollapsibleShowcase } from './layout/CollapsibleShowcase';

// Feedback
export { AlertShowcase } from './feedback/AlertShowcase';
export { ProgressShowcase } from './feedback/ProgressShowcase';

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
  
  // Data Display
  'badge': () => import('./data-display/BadgeShowcase'),
  'avatar': () => import('./data-display/AvatarShowcase'),
  'skeleton': () => import('./data-display/SkeletonShowcase'),
  'spinner': () => import('./data-display/SpinnerShowcase'),
  
  // Navigation
  'tabs': () => import('./navigation/TabsShowcase'),
  'pagination': () => import('./navigation/PaginationShowcase'),
  'breadcrumb': () => import('./navigation/BreadcrumbShowcase'),
  
  // Layout
  'card': () => import('./layout/CardShowcase'),
  'separator': () => import('./layout/SeparatorShowcase'),
  'accordion': () => import('./layout/AccordionShowcase'),
  'collapsible': () => import('./layout/CollapsibleShowcase'),
  
  // Feedback
  'alert': () => import('./feedback/AlertShowcase'),
  'progress': () => import('./feedback/ProgressShowcase'),
} as const;

export type ShowcaseSlug = keyof typeof showcaseRegistry;
