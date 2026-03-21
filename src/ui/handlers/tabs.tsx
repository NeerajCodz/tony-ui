import React, { createContext, useContext, useEffect, useState } from 'react';
import type { StyleComponentType, Variant, Version } from '../types/common';
import { getVariantColors } from '../core/handler-factory';
import { loadVersionModule } from './load-version-module';

type TabsVersion = Version;
type TabsVariant = Variant;

export interface TabsProps extends React.ComponentPropsWithoutRef<'div'> {
  version?: TabsVersion;
  variant?: TabsVariant;
  type?: StyleComponentType;
}

interface TabsContextValue {
  version: TabsVersion;
  variant: TabsVariant;
  type: StyleComponentType;
  colors: ReturnType<typeof getVariantColors>;
  versionModule: any;
}

const TabsContext = createContext<TabsContextValue>({
  version: 'default',
  variant: 'default',
  type: 'default',
  colors: getVariantColors('default'),
  versionModule: null,
});

const useTabsContext = () => useContext(TabsContext);

const TabsRoot = React.forwardRef<any, TabsProps>(
  ({ version = 'default', variant = 'default', type = 'default', children, ...props }, ref) => {
    const [versionModule, setVersionModule] = useState<any>(null);
    const colors = React.useMemo(() => getVariantColors(variant), [variant]);

    useEffect(() => {
      loadVersionModule(version, 'tabs').then(setVersionModule).catch(() => setVersionModule(null));
    }, [version]);

    const Component = versionModule?.Tabs;

    return (
      <TabsContext.Provider value={{ version, variant, type, colors, versionModule }}>
        {Component ? (
          <Component ref={ref} variant={variant} type={type} colors={colors} {...props}>
            {children}
          </Component>
        ) : (
          <div ref={ref} {...props}>
            {children}
          </div>
        )}
      </TabsContext.Provider>
    );
  }
);
TabsRoot.displayName = 'Tabs';

const makePart = <T,>(key: string) =>
  React.forwardRef<any, any>((props, ref) => {
    const { versionModule, variant, type, colors } = useTabsContext();
    const Component = versionModule?.[key];
    return Component ? <Component ref={ref} variant={variant} type={type} colors={colors} {...props} /> : null;
  });

const TabsList = makePart('TabsList');
const TabsTrigger = makePart('TabsTrigger');
const TabsContent = makePart('TabsContent');

export const Tabs = Object.assign(TabsRoot, {
  List: TabsList,
  Trigger: TabsTrigger,
  Content: TabsContent,
});

export default Tabs;

