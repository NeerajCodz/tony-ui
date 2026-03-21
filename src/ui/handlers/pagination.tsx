import React, { createContext, useContext, useEffect, useState } from 'react';
import type { StyleComponentType, Variant, Version } from '../types/common';
import { getVariantColors } from '../core/handler-factory';
import { loadVersionModule } from './load-version-module';

type PaginationVersion = Version;
type PaginationVariant = Variant;

export interface PaginationProps extends React.ComponentPropsWithoutRef<'nav'> {
  version?: PaginationVersion;
  variant?: PaginationVariant;
  type?: StyleComponentType;
}

interface PaginationContextValue {
  version: PaginationVersion;
  variant: PaginationVariant;
  type: StyleComponentType;
  colors: ReturnType<typeof getVariantColors>;
  versionModule: any;
}

const PaginationContext = createContext<PaginationContextValue>({
  version: 'default',
  variant: 'default',
  type: 'default',
  colors: getVariantColors('default'),
  versionModule: null,
});

const usePaginationContext = () => useContext(PaginationContext);

const PaginationRoot = React.forwardRef<HTMLElement, PaginationProps>(
  ({ version = 'default', variant = 'default', type = 'default', children, ...props }, ref) => {
    const [versionModule, setVersionModule] = useState<any>(null);
    const colors = React.useMemo(() => getVariantColors(variant), [variant]);

    useEffect(() => {
      loadVersionModule(version, 'pagination').then(setVersionModule).catch(() => setVersionModule(null));
    }, [version]);

    const Component = versionModule?.Pagination;

    return (
      <PaginationContext.Provider value={{ version, variant, type, colors, versionModule }}>
        {Component ? (
          <Component ref={ref} variant={variant} type={type} colors={colors} {...props}>
            {children}
          </Component>
        ) : (
          <nav ref={ref} aria-label="pagination" {...props}>
            {children}
          </nav>
        )}
      </PaginationContext.Provider>
    );
  }
);
PaginationRoot.displayName = 'Pagination';

const PaginationContent = React.forwardRef<HTMLUListElement, React.ComponentPropsWithoutRef<'ul'>>((props, ref) => {
  const { versionModule, variant, type, colors } = usePaginationContext();
  const Component = versionModule?.PaginationContent;
  return Component ? <Component ref={ref} variant={variant} type={type} colors={colors} {...props} /> : <ul ref={ref} {...props} />;
});

const PaginationItem = React.forwardRef<HTMLLIElement, React.ComponentPropsWithoutRef<'li'>>((props, ref) => {
  const { versionModule, variant, type, colors } = usePaginationContext();
  const Component = versionModule?.PaginationItem;
  return Component ? <Component ref={ref} variant={variant} type={type} colors={colors} {...props} /> : <li ref={ref} {...props} />;
});

type PaginationLinkProps = { isActive?: boolean } & React.ComponentPropsWithoutRef<'a'>;

const PaginationLink: React.FC<PaginationLinkProps> = ({ isActive, ...props }) => {
  const { versionModule, variant, type, colors } = usePaginationContext();
  const Component = versionModule?.PaginationLink;
  if (Component) return <Component variant={variant} type={type} colors={colors} isActive={isActive} {...props} />;
  return <a aria-current={isActive ? 'page' : undefined} {...props} />;
};

const PaginationPrevious: React.FC<React.ComponentPropsWithoutRef<'a'>> = (props) => {
  const { versionModule, variant, type, colors } = usePaginationContext();
  const Component = versionModule?.PaginationPrevious;
  return Component ? (
    <Component variant={variant} type={type} colors={colors} {...props} />
  ) : (
    <a aria-label="Go to previous page" {...props} />
  );
};

const PaginationNext: React.FC<React.ComponentPropsWithoutRef<'a'>> = (props) => {
  const { versionModule, variant, type, colors } = usePaginationContext();
  const Component = versionModule?.PaginationNext;
  return Component ? (
    <Component variant={variant} type={type} colors={colors} {...props} />
  ) : (
    <a aria-label="Go to next page" {...props} />
  );
};

const PaginationEllipsis: React.FC<React.ComponentPropsWithoutRef<'span'>> = (props) => {
  const { versionModule, variant, type, colors } = usePaginationContext();
  const Component = versionModule?.PaginationEllipsis;
  return Component ? <Component variant={variant} type={type} colors={colors} {...props} /> : <span {...props}>...</span>;
};

export const Pagination = Object.assign(PaginationRoot, {
  Content: PaginationContent,
  Item: PaginationItem,
  Link: PaginationLink,
  Previous: PaginationPrevious,
  Next: PaginationNext,
  Ellipsis: PaginationEllipsis,
});

export default Pagination;

