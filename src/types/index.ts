/**
 * Component variant system types
 */

export type Variant = 
  | 'default'
  | 'destructive'
  | 'warning'
  | 'success'
  | 'accent'
  | 'outline'
  | 'solid'
  | 'ghost'
  | 'secondary';

export type Size = 'sm' | 'md' | 'lg' | 'xl';

export interface ComponentVersion {
  version: string | number; // e.g., "1", "2", "rectangle_card"
  description?: string;
}

export interface ComponentVariant {
  name: Variant;
  label: string;
  description?: string;
}

export interface ComponentShowcaseProps {
  component: React.ComponentType<any>;
  versions: ComponentVersion[];
  variants: ComponentVariant[];
  defaultVersion?: string | number;
  defaultVariant?: Variant;
}
