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
export * from './components/card';
export * from './components/button';
export * from './components/icon-button';

// ===== FORM INPUTS =====
export * from './components/input';
export * from './components/input-group';
export * from './components/input-otp';
export * from './components/item';
export * from './components/menubar';
export * from './components/native-select';
export * from './components/navigation-menu';
export * from './components/resizable';
export * from './components/sidebar';
export * from './components/sonner';
export * from './components/typography';
export * from './components/textarea';
export * from './components/checkbox';
export * from './components/calendar';
export * from './components/switch';
export * from './components/radio-group';
export * from './components/select';
export * from './components/combobox';
export * from './components/slider';
export * from './components/field';
export * from './components/label';

// ===== FEEDBACK =====
export * from './components/alert';
export * from './components/badge';
export * from './components/progress';
export * from './components/spinner';
export * from './components/skeleton';
export * from './components/empty';
export * from './components/toast';

// ===== OVERLAYS =====
export * from './components/dialog';
export * from './components/alert-dialog';
export * from './components/command';
export * from './components/sheet';
export * from './components/tooltip';
export * from './components/popover';
export * from './components/context-menu';

// ===== NAVIGATION =====
export * from './components/tabs';
export * from './components/breadcrumb';
export * from './components/pagination';

// ===== DATA DISPLAY =====
export * from './components/avatar';
export * from './components/chart';
export * from './components/table';
export * from './components/data-table';
export * from './components/date-picker';
export * from './components/direction';
export * from './components/drawer';
export * from './components/dropdown-menu';
export * from './components/hover-card';
export * from './components/aspect-ratio';
export * from './components/carousel';

// ===== LAYOUT =====
export * from './components/accordion';
export * from './components/separator';
export * from './components/collapsible';
export * from './components/scroll-area';

// ===== MISC =====
export * from './components/toggle';
export * from './components/toggle-group';
export * from './components/button-group';
export * from './components/kbd';

// ===== TYPES =====
export * from './types/colors.d';
export * from './types/themes.d';
export * from './types/components/card';
export * from './types/components/button';
export * from './types/components/inputs';
export * from './types/components/feedback';
export * from './types/components/overlay';
export * from './types/components/navigation';
export * from './types/components/data-display';
export * from './types/components/layout';
export * from './types/components/misc';

// ===== UTILS =====
export * from './utils/component-helpers';
