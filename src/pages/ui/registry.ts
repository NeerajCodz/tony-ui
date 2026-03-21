import { VERSIONS } from '../../ui/types/common';

export interface UIComponentRegistryItem {
  slug: string;
  name: string;
  exportName: string;
  description: string;
  versions: number;
}

const VERSION_COUNT = VERSIONS.length;

export const uiComponentRegistry: UIComponentRegistryItem[] = [
  { slug: 'accordion', name: 'Accordion', exportName: 'Accordion', description: 'Accordion component', versions: VERSION_COUNT },
  { slug: 'alert-dialog', name: 'Alert Dialog', exportName: 'AlertDialog', description: 'Alert dialog component', versions: VERSION_COUNT },
  { slug: 'alert', name: 'Alert', exportName: 'Alert', description: 'Alert component', versions: VERSION_COUNT },
  { slug: 'analog-clock', name: 'Analog Clock', exportName: 'AnalogClock', description: 'Analog clock component', versions: VERSION_COUNT },
  { slug: 'aspect-ratio', name: 'Aspect Ratio', exportName: 'AspectRatio', description: 'Aspect ratio component', versions: VERSION_COUNT },
  { slug: 'avatar', name: 'Avatar', exportName: 'Avatar', description: 'Avatar component', versions: VERSION_COUNT },
  { slug: 'badge', name: 'Badge', exportName: 'Badge', description: 'Badge component', versions: VERSION_COUNT },
  { slug: 'breadcrumb', name: 'Breadcrumb', exportName: 'Breadcrumb', description: 'Breadcrumb component', versions: VERSION_COUNT },
  { slug: 'button-group', name: 'Button Group', exportName: 'ButtonGroup', description: 'Button group component', versions: VERSION_COUNT },
  { slug: 'button', name: 'Button', exportName: 'Button', description: 'Button component', versions: VERSION_COUNT },
  { slug: 'calendar', name: 'Calendar', exportName: 'Calendar', description: 'Calendar component', versions: VERSION_COUNT },
  { slug: 'card', name: 'Card', exportName: 'Card', description: 'Card component', versions: VERSION_COUNT },
  { slug: 'carousel', name: 'Carousel', exportName: 'Carousel', description: 'Carousel component', versions: VERSION_COUNT },
  { slug: 'chart', name: 'Chart', exportName: 'Chart', description: 'Chart component', versions: VERSION_COUNT },
  { slug: 'checkbox', name: 'Checkbox', exportName: 'Checkbox', description: 'Checkbox component', versions: VERSION_COUNT },
  { slug: 'collapsible', name: 'Collapsible', exportName: 'Collapsible', description: 'Collapsible component', versions: VERSION_COUNT },
  { slug: 'combobox', name: 'Combobox', exportName: 'Combobox', description: 'Combobox component', versions: VERSION_COUNT },
  { slug: 'command', name: 'Command', exportName: 'Command', description: 'Command component', versions: VERSION_COUNT },
  { slug: 'context-menu', name: 'Context Menu', exportName: 'ContextMenu', description: 'Context menu component', versions: VERSION_COUNT },
  { slug: 'data-table', name: 'Data Table', exportName: 'DataTable', description: 'Data table component', versions: VERSION_COUNT },
  { slug: 'digital-clock', name: 'Digital Clock', exportName: 'DigitalClock', description: 'Digital clock component', versions: VERSION_COUNT },
  { slug: 'date-picker', name: 'Date Picker', exportName: 'DatePicker', description: 'Date picker component', versions: VERSION_COUNT },
  { slug: 'dialog', name: 'Dialog', exportName: 'Dialog', description: 'Dialog component', versions: VERSION_COUNT },
  { slug: 'direction', name: 'Direction', exportName: 'Direction', description: 'Direction component', versions: VERSION_COUNT },
  { slug: 'drawer', name: 'Drawer', exportName: 'Drawer', description: 'Drawer component', versions: VERSION_COUNT },
  { slug: 'dropdown-menu', name: 'Dropdown Menu', exportName: 'DropdownMenu', description: 'Dropdown menu component', versions: VERSION_COUNT },
  { slug: 'empty', name: 'Empty', exportName: 'Empty', description: 'Empty component', versions: VERSION_COUNT },
  { slug: 'field', name: 'Field', exportName: 'Field', description: 'Field component', versions: VERSION_COUNT },
  { slug: 'hover-card', name: 'Hover Card', exportName: 'HoverCard', description: 'Hover card component', versions: VERSION_COUNT },
  { slug: 'icon-button', name: 'Icon Button', exportName: 'IconButton', description: 'Icon button component', versions: VERSION_COUNT },
  { slug: 'input-group', name: 'Input Group', exportName: 'InputGroup', description: 'Input group component', versions: VERSION_COUNT },
  { slug: 'input-otp', name: 'Input OTP', exportName: 'InputOtp', description: 'Input OTP component', versions: VERSION_COUNT },
  { slug: 'input', name: 'Input', exportName: 'Input', description: 'Input component', versions: VERSION_COUNT },
  { slug: 'item', name: 'Item', exportName: 'Item', description: 'Item component', versions: VERSION_COUNT },
  { slug: 'kbd', name: 'Kbd', exportName: 'Kbd', description: 'Kbd component', versions: VERSION_COUNT },
  { slug: 'label', name: 'Label', exportName: 'Label', description: 'Label component', versions: VERSION_COUNT },
  { slug: 'menubar', name: 'Menubar', exportName: 'Menubar', description: 'Menubar component', versions: VERSION_COUNT },
  { slug: 'native-select', name: 'Native Select', exportName: 'NativeSelect', description: 'Native select component', versions: VERSION_COUNT },
  { slug: 'navigation-menu', name: 'Navigation Menu', exportName: 'NavigationMenu', description: 'Navigation menu component', versions: VERSION_COUNT },
  { slug: 'pagination', name: 'Pagination', exportName: 'Pagination', description: 'Pagination component', versions: VERSION_COUNT },
  { slug: 'popover', name: 'Popover', exportName: 'Popover', description: 'Popover component', versions: VERSION_COUNT },
  { slug: 'progress', name: 'Progress', exportName: 'Progress', description: 'Progress component', versions: VERSION_COUNT },
  { slug: 'radio-group', name: 'Radio Group', exportName: 'RadioGroup', description: 'Radio group component', versions: VERSION_COUNT },
  { slug: 'resizable', name: 'Resizable', exportName: 'ResizablePanelGroup', description: 'Resizable component', versions: VERSION_COUNT },
  { slug: 'scroll-area', name: 'Scroll Area', exportName: 'ScrollArea', description: 'Scroll area component', versions: VERSION_COUNT },
  { slug: 'select', name: 'Select', exportName: 'Select', description: 'Select component', versions: VERSION_COUNT },
  { slug: 'separator', name: 'Separator', exportName: 'Separator', description: 'Separator component', versions: VERSION_COUNT },
  { slug: 'sheet', name: 'Sheet', exportName: 'Sheet', description: 'Sheet component', versions: VERSION_COUNT },
  { slug: 'sidebar', name: 'Sidebar', exportName: 'Sidebar', description: 'Sidebar component', versions: VERSION_COUNT },
  { slug: 'skeleton', name: 'Skeleton', exportName: 'Skeleton', description: 'Skeleton component', versions: VERSION_COUNT },
  { slug: 'slider', name: 'Slider', exportName: 'Slider', description: 'Slider component', versions: VERSION_COUNT },
  { slug: 'sonner', name: 'Sonner', exportName: 'Sonner', description: 'Sonner component', versions: VERSION_COUNT },
  { slug: 'spinner', name: 'Spinner', exportName: 'Spinner', description: 'Spinner component', versions: VERSION_COUNT },
  { slug: 'switch', name: 'Switch', exportName: 'Switch', description: 'Switch component', versions: VERSION_COUNT },
  { slug: 'table', name: 'Table', exportName: 'Table', description: 'Table component', versions: VERSION_COUNT },
  { slug: 'tabs', name: 'Tabs', exportName: 'Tabs', description: 'Tabs component', versions: VERSION_COUNT },
  { slug: 'textarea', name: 'Textarea', exportName: 'Textarea', description: 'Textarea component', versions: VERSION_COUNT },
  { slug: 'toast', name: 'Toast', exportName: 'Toast', description: 'Toast component', versions: VERSION_COUNT },
  { slug: 'toggle-group', name: 'Toggle Group', exportName: 'ToggleGroup', description: 'Toggle group component', versions: VERSION_COUNT },
  { slug: 'toggle', name: 'Toggle', exportName: 'Toggle', description: 'Toggle component', versions: VERSION_COUNT },
  { slug: 'tooltip', name: 'Tooltip', exportName: 'Tooltip', description: 'Tooltip component', versions: VERSION_COUNT },
  { slug: 'typography', name: 'Typography', exportName: 'Typography', description: 'Typography component', versions: VERSION_COUNT },
];

export const uiComponentCount = uiComponentRegistry.length;

export const findUIComponentBySlug = (slug?: string) =>
  uiComponentRegistry.find((component) => component.slug === slug);
