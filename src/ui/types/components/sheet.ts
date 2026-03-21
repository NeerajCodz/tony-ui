import type { Version, Variant, StyleComponentType } from '../common.js';
import type * as SheetPrimitive from '@radix-ui/react-dialog';

export type SheetVersion = Version;

export interface SheetProps {
  version?: SheetVersion;
  variant?: Variant;
  type?: StyleComponentType;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  title?: string;
  description?: string;
  side?: 'top' | 'right' | 'bottom' | 'left';
  icon?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}

export interface SheetContentProps extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content> {
  version?: SheetVersion;
  variant?: Variant;
  side?: 'top' | 'right' | 'bottom' | 'left';
  children?: React.ReactNode;
  className?: string;
}

export interface SheetHeaderProps {
  version?: SheetVersion;
  variant?: Variant;
  children?: React.ReactNode;
  className?: string;
}

export interface SheetTitleProps extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title> {
  version?: SheetVersion;
  variant?: Variant;
  className?: string;
}

export interface SheetDescriptionProps extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description> {
  version?: SheetVersion;
  variant?: Variant;
  className?: string;
}

export interface SheetComponent {
  (props: SheetProps): React.ReactElement | null;
  displayName?: string;
}

export interface VersionSheetComponents {
  SheetContent: React.ForwardRefExoticComponent<SheetContentProps & React.RefAttributes<HTMLDivElement>>;
  SheetHeader?: React.ForwardRefExoticComponent<SheetHeaderProps & React.RefAttributes<HTMLDivElement>>;
  SheetTitle?: React.ForwardRefExoticComponent<SheetTitleProps & React.RefAttributes<HTMLHeadingElement>>;
  SheetDescription?: React.ForwardRefExoticComponent<SheetDescriptionProps & React.RefAttributes<HTMLParagraphElement>>;
}
