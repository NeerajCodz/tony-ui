import React, { lazy, Suspense, createContext, useContext, useMemo } from 'react';

// Context to share version between compound components
const SelectVersionContext = createContext('angular-corner');

// Helper for lazy loading subcomponents
const createLazySubcomponent = (componentName) => {
  return React.forwardRef((props, ref) => {
    const version = useContext(SelectVersionContext);
    
    const LazyComponent = useMemo(() => lazy(async () => {
      try {
        const module = await import(`./select-${version}.tsx`);
        return { default: module[componentName] };
      } catch (e) {
        // Fallback for missing components
        return { 
          default: ({ children, className = '', ...p }) => (
            <div className={`ui-select-${componentName.toLowerCase()} ${className}`} {...p}>{children}</div>
          ) 
        };
      }
    }), [version]);

    return (
      <Suspense fallback={<div className="animate-pulse bg-muted/10 h-8 rounded" />}>
        <LazyComponent ref={ref} {...props} />
      </Suspense>
    );
  });
};

// Main Component (Root)
// Note: Select Root does not render DOM, it just provides Context. 
// But we need to load the version-specific Root to ensure we are using the correct context provider if needed (though Radix Select Root is usually generic).
// However, to keep pattern consistent, we lazy load the Root too.

const SelectRoot = React.forwardRef(({ 
  version = 'angular-corner',
  children,
  ...props 
}, ref) => {
  
  const LazyRoot = useMemo(() => lazy(async () => {
    try {
      const module = await import(`./select-${version}.tsx`);
      return { default: module.Select }; // Radix exports 'Select' as Root
    } catch (e) {
      return { 
        default: ({ children }) => <>{children}</> // Fallback just renders children
      };
    }
  }), [version]);

  return (
    <SelectVersionContext.Provider value={version}>
      <Suspense fallback={null}>
        <LazyRoot {...props}>
          {children}
        </LazyRoot>
      </Suspense>
    </SelectVersionContext.Provider>
  );
});
SelectRoot.displayName = 'Select';

// Subcomponents
export const SelectGroup = createLazySubcomponent('SelectGroup');
SelectGroup.displayName = 'SelectGroup';

export const SelectValue = createLazySubcomponent('SelectValue');
SelectValue.displayName = 'SelectValue';

export const SelectTrigger = createLazySubcomponent('SelectTrigger');
SelectTrigger.displayName = 'SelectTrigger';

export const SelectContent = createLazySubcomponent('SelectContent');
SelectContent.displayName = 'SelectContent';

export const SelectLabel = createLazySubcomponent('SelectLabel');
SelectLabel.displayName = 'SelectLabel';

export const SelectItem = createLazySubcomponent('SelectItem');
SelectItem.displayName = 'SelectItem';

export const SelectSeparator = createLazySubcomponent('SelectSeparator');
SelectSeparator.displayName = 'SelectSeparator';

export const SelectScrollUpButton = createLazySubcomponent('SelectScrollUpButton');
SelectScrollUpButton.displayName = 'SelectScrollUpButton';

export const SelectScrollDownButton = createLazySubcomponent('SelectScrollDownButton');
SelectScrollDownButton.displayName = 'SelectScrollDownButton';

export const Select = Object.assign(SelectRoot, {
  Group: SelectGroup,
  Value: SelectValue,
  Trigger: SelectTrigger,
  Content: SelectContent,
  Label: SelectLabel,
  Item: SelectItem,
  Separator: SelectSeparator,
  ScrollUpButton: SelectScrollUpButton,
  ScrollDownButton: SelectScrollDownButton,
});

export default Select;

