'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import type { StyleComponentType, Variant, Version } from '../types/common';
import { getVariantColors } from '../core/handler-factory';
import { loadVersionModule } from './load-version-module';

export interface AccordionProps {
  version?: Version;
  variant?: Variant;
  type?: StyleComponentType;
  children?: React.ReactNode;
  className?: string;
  value?: string | string[];
  defaultValue?: string | string[];
  onValueChange?: (value: string | string[]) => void;
  collapsible?: boolean;
  disabled?: boolean;
  dir?: 'ltr' | 'rtl';
  orientation?: 'horizontal' | 'vertical';
  asChild?: boolean;
  accordionType?: 'single' | 'multiple';
}

export interface AccordionItemProps extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item> {
  version?: Version;
  variant?: Variant;
}

export interface AccordionTriggerProps extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> {
  version?: Version;
  variant?: Variant;
}

export interface AccordionContentProps extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content> {
  version?: Version;
  variant?: Variant;
}

interface AccordionContextValue {
  version: Version;
  variant: Variant;
  type: StyleComponentType;
  colors: ReturnType<typeof getVariantColors>;
  versionModule: any;
}

const AccordionContext = createContext<AccordionContextValue>({
  version: 'default',
  variant: 'default',
  type: 'default',
  colors: getVariantColors('default'),
  versionModule: null,
});

const useAccordionContext = () => useContext(AccordionContext);

const LoadingSkeleton: React.FC = () => <div className="h-16 animate-pulse rounded bg-gray-800/20" />;

const AccordionBase = React.forwardRef<HTMLDivElement, AccordionProps>(
  ({
    version = 'default',
    variant = 'default',
    type = 'default',
    children,
    className,
    value,
    defaultValue,
    onValueChange,
    collapsible,
    disabled,
    dir,
    orientation,
    asChild,
    accordionType = 'single',
  }, ref) => {
    const [versionModule, setVersionModule] = useState<any>(null);
    const colors = React.useMemo(() => getVariantColors(variant), [variant]);

    useEffect(() => {
      loadVersionModule(version, 'accordion', true).then(setVersionModule).catch(() => setVersionModule(null));
    }, [version]);

    return (
      <AccordionContext.Provider value={{ version, variant, type, colors, versionModule }}>
        <AccordionPrimitive.Root
          ref={ref}
          className={className}
          type={accordionType as any}
          value={value as any}
          defaultValue={defaultValue as any}
          onValueChange={onValueChange as any}
          collapsible={collapsible}
          disabled={disabled}
          dir={dir}
          orientation={orientation}
          asChild={asChild}
        >
          {children}
        </AccordionPrimitive.Root>
      </AccordionContext.Provider>
    );
  }
);
AccordionBase.displayName = 'Accordion';

const AccordionItem = React.forwardRef<React.ComponentRef<typeof AccordionPrimitive.Item>, AccordionItemProps>((props, ref) => {
  const { versionModule, variant, type, colors } = useAccordionContext();
  if (!versionModule) return <LoadingSkeleton />;
  const Component = (versionModule.AccordionItem || versionModule.Item) as React.ComponentType<any>;
  if (!Component) return <AccordionPrimitive.Item ref={ref} {...props} />;
  return <Component ref={ref} variant={variant} type={type} colors={colors} {...props} />;
});
AccordionItem.displayName = 'AccordionItem';

const AccordionTrigger = React.forwardRef<React.ComponentRef<typeof AccordionPrimitive.Trigger>, AccordionTriggerProps>((props, ref) => {
  const { versionModule, variant, type, colors } = useAccordionContext();
  const Component = (versionModule?.AccordionTrigger || versionModule?.Trigger) as React.ComponentType<any> | undefined;
  if (!Component) return <AccordionPrimitive.Trigger ref={ref} {...props} />;
  return <Component ref={ref} variant={variant} type={type} colors={colors} {...props} />;
});
AccordionTrigger.displayName = 'AccordionTrigger';

const AccordionContent = React.forwardRef<React.ComponentRef<typeof AccordionPrimitive.Content>, AccordionContentProps>((props, ref) => {
  const { versionModule, variant, type, colors } = useAccordionContext();
  const Component = (versionModule?.AccordionContent || versionModule?.Content) as React.ComponentType<any> | undefined;
  if (!Component) return <AccordionPrimitive.Content ref={ref} {...props} />;
  return <Component ref={ref} variant={variant} type={type} colors={colors} {...props} />;
});
AccordionContent.displayName = 'AccordionContent';

export const Accordion = Object.assign(AccordionBase, {
  Item: AccordionItem,
  Trigger: AccordionTrigger,
  Content: AccordionContent,
});

export { AccordionItem, AccordionTrigger, AccordionContent };

export default Accordion;
