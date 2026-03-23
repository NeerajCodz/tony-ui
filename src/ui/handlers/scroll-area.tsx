'use client';

import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';
import type { StyleComponentType, Variant, Version } from '../types/common';
import { getVariantColors } from '../core/handler-factory';
import { loadVersionModule } from './load-version-module';

type ScrollAreaVersion = Version;
type ScrollAreaVariant = Variant;

export interface ScrollAreaProps extends React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root> {
  version?: ScrollAreaVersion;
  variant?: ScrollAreaVariant;
  uiType?: StyleComponentType;
  withHorizontalBar?: boolean;
  hideBar?: boolean;
}

export interface ScrollBarProps extends React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar> {
  version?: ScrollAreaVersion;
  variant?: ScrollAreaVariant;
  uiType?: StyleComponentType;
}

interface ScrollAreaContextValue {
  version: ScrollAreaVersion;
  variant: ScrollAreaVariant;
  uiType: StyleComponentType;
  colors: ReturnType<typeof getVariantColors>;
  versionModule: any;
}

const ScrollAreaContext = createContext<ScrollAreaContextValue>({
  version: 'default',
  variant: 'default',
  uiType: 'default',
  colors: getVariantColors('default'),
  versionModule: null,
});

const useScrollAreaContext = () => useContext(ScrollAreaContext);

const FallbackScrollBar = React.forwardRef<
  React.ComponentRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>
>(({ className = '', orientation = 'vertical', ...props }, ref) => (
  <ScrollAreaPrimitive.ScrollAreaScrollbar
    ref={ref}
    orientation={orientation}
    className={`flex touch-none select-none transition-colors ${
      orientation === 'vertical' ? 'h-full w-2.5 border-l border-l-transparent p-[1px]' : 'h-2.5 flex-col border-t border-t-transparent p-[1px]'
    } ${className}`}
    {...props}
  >
    <ScrollAreaPrimitive.ScrollAreaThumb className="relative flex-1 rounded-full bg-border" />
  </ScrollAreaPrimitive.ScrollAreaScrollbar>
));
FallbackScrollBar.displayName = 'FallbackScrollBar';

const FallbackScrollArea = React.forwardRef<
  React.ComponentRef<typeof ScrollAreaPrimitive.Root>,
  Omit<ScrollAreaProps, 'version' | 'variant' | 'type'>
>(({ className = '', children, withHorizontalBar, hideBar, ...props }, ref) => (
  <ScrollAreaPrimitive.Root ref={ref} className={`relative overflow-hidden ${className}`} {...props}>
    <ScrollAreaPrimitive.Viewport className="h-full w-full rounded-[inherit]">{children}</ScrollAreaPrimitive.Viewport>
    {!hideBar ? <FallbackScrollBar /> : null}
    {!hideBar && withHorizontalBar ? <FallbackScrollBar orientation="horizontal" /> : null}
    <ScrollAreaPrimitive.Corner />
  </ScrollAreaPrimitive.Root>
));
FallbackScrollArea.displayName = 'FallbackScrollArea';

const ScrollAreaRoot = React.forwardRef<React.ComponentRef<typeof ScrollAreaPrimitive.Root>, ScrollAreaProps>(
  ({
    version = 'default',
    variant = 'default',
    uiType = 'default',
    withHorizontalBar,
    hideBar,
    children,
    ...props
  }, ref) => {
    const [versionModule, setVersionModule] = useState<any>(null);
    const colors = useMemo(() => getVariantColors(variant), [variant]);

    useEffect(() => {
      loadVersionModule(version, 'scroll-area', true).then(setVersionModule).catch(() => setVersionModule(null));
    }, [version]);

    const Component = versionModule?.ScrollArea;

    return (
      <ScrollAreaContext.Provider value={{ version, variant, uiType, colors, versionModule }}>
        {Component ? (
          <Component
            ref={ref}
            version={version}
            variant={variant}
            uiType={uiType}
            colors={colors}
            withHorizontalBar={withHorizontalBar}
            hideBar={hideBar}
            {...props}
          >
            {children}
          </Component>
        ) : (
          <FallbackScrollArea ref={ref} withHorizontalBar={withHorizontalBar} hideBar={hideBar} {...props}>
            {children}
          </FallbackScrollArea>
        )}
      </ScrollAreaContext.Provider>
    );
  }
);
ScrollAreaRoot.displayName = 'ScrollArea';

const ScrollBar = React.forwardRef<React.ComponentRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>, ScrollBarProps>(
  ({ version: explicitVersion, variant: explicitVariant, uiType: explicitUiType, ...props }, ref) => {
    const context = useScrollAreaContext();
    const version = explicitVersion ?? context.version;
    const variant = explicitVariant ?? context.variant;
    const uiType = explicitUiType ?? context.uiType;
    const colors = useMemo(() => getVariantColors(variant), [variant]);
    const versionModule = version === context.version ? context.versionModule : null;
    const Component = versionModule?.ScrollBar;

    if (Component) {
      return <Component ref={ref} version={version} variant={variant} uiType={uiType} colors={colors} {...props} />;
    }

    return <FallbackScrollBar ref={ref} {...props} />;
  }
);
ScrollBar.displayName = 'ScrollBar';

export const ScrollArea = Object.assign(ScrollAreaRoot, {
  ScrollBar,
});

export { ScrollBar };
export default ScrollArea;

