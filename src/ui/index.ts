/**
 * Complete UI System Export
 * Includes all providers, components, hooks, and types
 */

// ===== PROVIDERS =====
export { ColorProvider, ColorContext } from './providers/ColorProvider';
export { ThemeProvider, ThemeContext } from './providers/ThemeProvider';

// ===== HOOKS =====
export { useColors, useTheme, useCSSVariable, useColorValue } from './hooks/useColorTheme';

// ===== CORE COMPONENTS =====
export { default as Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './handlers/card';
export { default as Button } from './handlers/button';
export { CyberBorder } from './components/CyberBorder';

// ===== FORM INPUTS =====
export { default as Input } from './handlers/input';
export { default as InputGroup } from './components/input-group';
export { default as InputOtp } from './components/input-otp';
// export * from './components/item';
// export * from './components/menubar';
// export * from './components/native-select';
// export * from './components/navigation-menu';
// export * from './components/resizable';
// export * from './components/sidebar';
export { default as Sonner } from './handlers/sonner';
// export * from './components/typography';
// export * from './components/textarea';
export { default as Checkbox } from './handlers/checkbox';
export { default as Calendar } from './handlers/calendar';
// export * from './components/switch';
export { default as RadioGroup } from './handlers/radio-group';
export { default as Select } from './handlers/select';
export { default as Combobox } from './components/combobox';
// export * from './components/slider';
export { default as Field } from './components/field';
export { default as Label } from './handlers/label';

// ===== FEEDBACK =====
export { default as Alert, AlertTitle, AlertDescription } from './handlers/alert';
export { default as Badge } from './handlers/badge';
export { default as Progress } from './handlers/progress';
// export * from './components/spinner'; // TODO: spinner component not yet implemented
export { default as Skeleton } from './handlers/skeleton';
export { default as Empty } from './components/empty';
// export * from './components/toast';

// ===== OVERLAYS =====
export { default as Dialog } from './handlers/dialog';
export { default as AlertDialog } from './handlers/alert-dialog';
export { default as Command } from './components/command';
export { default as Sheet } from './handlers/sheet';
// export * from './components/tooltip'; // TODO: tooltip not yet implemented
export { default as Popover } from './handlers/popover';
export { default as ContextMenu } from './components/context-menu';

// ===== NAVIGATION =====
// export * from './components/tabs';
export { default as Breadcrumb } from './handlers/breadcrumb';
// export * from './components/pagination';

// ===== DATA DISPLAY =====
export { default as Avatar, AvatarImage, AvatarFallback } from './handlers/avatar';
export { default as Chart } from './components/chart';
// export * from './components/table';
export { default as DataTable } from './components/data-table';
export { default as DatePicker } from './components/date-picker';
export { default as Direction } from './components/direction';
export { default as Drawer } from './handlers/drawer';
export { default as DropdownMenu } from './handlers/dropdown-menu';
export { default as HoverCard } from './components/hover-card';
export { default as AspectRatio } from './handlers/aspect-ratio';
export { default as Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from './handlers/carousel';

// ===== LAYOUT =====
export { default as Accordion } from './handlers/accordion';
export { default as Separator } from './handlers/separator';
export { default as Collapsible, CollapsibleTrigger, CollapsibleContent } from './handlers/collapsible';
// export * from './components/scroll-area';

// ===== MISC =====
// export * from './components/toggle';
// export * from './components/toggle-group';
export { default as ButtonGroup } from './handlers/button-group';
export { IconButton } from './components/icon-button';
// export * from './components/kbd';

// ===== TYPES =====
export * from './types/colors.d';
export * from './types/themes.d';
export * from './types/common';
export * from './types/components/card';
export * from './types/components/button';
export * from './types/components/alert';
export * from './types/components/drawer';
export * from './types/components/dialog';
export * from './types/components/input';
export * from './types/components/select';
// export * from './types/components/inputs';
// export * from './types/components/feedback';
// export * from './types/components/overlay';
// export * from './types/components/navigation';
// export * from './types/components/data-display';
// export * from './types/components/layout';
// export * from './types/components/misc';

// ===== UTILS =====
export * from './utils/component-helpers';
export * from './utils/clip-paths';
export * from './utils/version-loader';


