import type { Version, Variant, ComponentType } from '../common.js';

export type DrawerVersion = Version;

export interface DrawerProps {
  version?: DrawerVersion;
  variant?: Variant;
  type?: ComponentType;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  dismissible?: boolean;
  snapPoints?: (string | number)[];
  activeSnapPoint?: string | number;
  setActiveSnapPoint?: (point: string | number | null) => void;
}

export interface DrawerContentProps {
  version?: DrawerVersion;
  variant?: Variant;
  children?: React.ReactNode;
  className?: string;
}

export interface DrawerHeaderProps {
  version?: DrawerVersion;
  variant?: Variant;
  children?: React.ReactNode;
  className?: string;
}

export interface DrawerTitleProps {
  version?: DrawerVersion;
  variant?: Variant;
  children?: React.ReactNode;
  className?: string;
}

export interface DrawerDescriptionProps {
  version?: DrawerVersion;
  variant?: Variant;
  children?: React.ReactNode;
  className?: string;
}

export interface DrawerComponent {
  (props: DrawerProps): React.ReactElement | null;
  displayName?: string;
}

export interface VersionDrawerComponents {
  Overlay: React.ForwardRefExoticComponent<any>;
  Content: React.ForwardRefExoticComponent<DrawerContentProps & React.RefAttributes<HTMLDivElement>>;
  Title?: React.ForwardRefExoticComponent<DrawerTitleProps & React.RefAttributes<HTMLHeadingElement>>;
  Description?: React.ForwardRefExoticComponent<DrawerDescriptionProps & React.RefAttributes<HTMLParagraphElement>>;
}
