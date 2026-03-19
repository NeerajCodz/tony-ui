# UI Components Restructure Plan

## Overview
This document outlines the plan to restructure the UI component architecture from a component-first to a version-first organization, with centralized handlers and configuration management.

---

## Current Issues

### 1. Component-First Structure Makes Version Management Complex
- Current structure: `src/ui/components/card/angular-corner.tsx`, `card/holo-frame.tsx`, etc.
- Makes it difficult to see all components within a version
- Version-specific patterns and utilities are scattered
- Hard to maintain consistent styling across components in same version

### 2. Duplicated Code Across Version Files
- Each version file reimplements similar logic
- Variant handling duplicated in every component version
- Color resolution logic repeated
- No shared utilities for version-specific behaviors

### 3. Inconsistent Handler Patterns
- Some components use dynamic imports, others don't
- Variant resolution varies between components
- No standardized prop forwarding pattern
- Inconsistent fallback/skeleton handling

### 4. Border Clipping with clip-path
- Border styles get clipped by component clip-paths
- Need centralized solution for applying clip-paths to parent containers
- Current approach applies clip-path directly to styled elements

---

## New Architecture

### Folder Structure

```
src/ui/
├── components/
│   ├── angular-corner/          # Version-specific implementations
│   │   ├── card.tsx
│   │   ├── button.tsx
│   │   ├── alert.tsx
│   │   ├── badge.tsx
│   │   ├── checkbox.tsx
│   │   ├── input.tsx
│   │   ├── label.tsx
│   │   ├── switch.tsx
│   │   ├── textarea.tsx
│   │   └── utils.ts             # Version-specific utilities
│   ├── holo-frame/
│   │   └── (same structure)
│   ├── circuit-border/
│   │   └── (same structure)
│   ├── glitch-grid/
│   │   └── (same structure)
│   ├── neon-hex/
│   │   └── (same structure)
│   ├── data-stream/
│   │   └── (same structure)
│   ├── terminal-scan/
│   │   └── (same structure)
│   ├── quantum-pulse/
│   │   └── (same structure)
│   ├── matrix-code/
│   │   └── (same structure)
│   └── stealth-ops/
│       └── (same structure)
│
├── handlers/                    # Main export handlers
│   ├── card.tsx                 # <Card version="..." variant="..." />
│   ├── button.tsx
│   ├── alert.tsx
│   ├── badge.tsx
│   ├── checkbox.tsx
│   ├── input.tsx
│   ├── label.tsx
│   ├── switch.tsx
│   └── textarea.tsx
│
├── config/
│   └── variants/                # Variant color configurations
│       ├── primary.json         # { colors: { base, foreground, border, ... } }
│       ├── secondary.json
│       ├── info.json
│       ├── success.json
│       ├── warning.json
│       └── destructive.json
│
├── types/
│   ├── components/              # Component-specific types
│   │   ├── card.ts              # CardProps, CardVersion, CardVariant
│   │   ├── button.ts
│   │   ├── alert.ts
│   │   └── (others)
│   ├── common.ts                # Shared types: Version, Variant, etc.
│   └── index.ts
│
└── utils/
    ├── clip-paths.ts            # Centralized clip-path utilities
    ├── variant-colors.ts        # Color resolution helpers
    ├── version-loader.ts        # Dynamic import helpers
    └── index.ts
```

### Handler Pattern

All components follow this standardized pattern:

```typescript
// src/ui/handlers/card.tsx
import { FC, lazy, Suspense } from 'react';
import { CardProps } from '../types/components/card';
import { loadVariantConfig } from '../utils/variant-colors';
import { CardSkeleton } from '../components/skeletons/card';

export const Card: FC<CardProps> = ({ 
  version = 'angular-corner', 
  variant = 'primary', 
  ...props 
}) => {
  // Dynamically load version-specific component
  const Component = lazy(() => import(`../components/${version}/card.tsx`));
  
  // Load variant configuration
  const variantConfig = loadVariantConfig(variant);
  
  return (
    <Suspense fallback={<CardSkeleton />}>
      <Component 
        variant={variant} 
        variantConfig={variantConfig} 
        {...props} 
      />
    </Suspense>
  );
};
```

### Version Component Pattern

Each version implementation receives standardized props:

```typescript
// src/ui/components/angular-corner/card.tsx
import { FC } from 'react';
import { CardVersionProps } from '../../types/components/card';
import { applyClipPath } from '../../utils/clip-paths';

export const AngularCornerCard: FC<CardVersionProps> = ({
  variant = 'primary',
  variantConfig,
  className,
  children,
  ...props
}) => {
  return (
    <div 
      className={cn(
        'relative p-6',
        variantConfig.colors.base,
        variantConfig.colors.foreground,
        className
      )}
      style={applyClipPath('angular-corner')}
      {...props}
    >
      {children}
    </div>
  );
};

export default AngularCornerCard;
```

### Variant Configuration System

Centralized color definitions:

```json
// src/ui/config/variants/primary.json
{
  "colors": {
    "base": "bg-cyber-primary",
    "foreground": "text-cyber-primary-foreground",
    "border": "border-cyber-primary",
    "hover": "hover:bg-cyber-primary/80",
    "active": "active:bg-cyber-primary/90",
    "disabled": "disabled:bg-cyber-primary/50"
  }
}
```

Loading and merging:

```typescript
// src/ui/utils/variant-colors.ts
export const loadVariantConfig = (variant: Variant) => {
  const config = require(`../config/variants/${variant}.json`);
  return config;
};
```

### Clip-Path Utilities

Centralized border clipping solution:

```typescript
// src/ui/utils/clip-paths.ts
export const clipPaths = {
  'angular-corner': 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))',
  'holo-frame': 'polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)',
  // ... other versions
};

export const applyClipPath = (version: Version, useWrapper = false) => {
  if (useWrapper) {
    return {
      clipPath: clipPaths[version],
      padding: '2px', // Space for border
    };
  }
  return {
    clipPath: clipPaths[version],
  };
};
```

---

## Migration Strategy

### Phase 1: Setup Base Structure
1. Create new folder structure
2. Create type definitions in `types/`
3. Create utility files in `utils/`
4. Create variant configs in `config/variants/`

### Phase 2: Migrate Card Component
**Why Card First?**
- Simplest component (no icons, sizes, or complex states)
- Best example for establishing patterns
- Validates architecture before tackling complex components

**Steps:**
1. Create `handlers/card.tsx` with handler pattern
2. Migrate each version to `components/{version}/card.tsx`
3. Update imports in showcase
4. Test all versions and variants
5. Verify clip-path handling

### Phase 3: Migrate Button Component
**Why Button Second?**
- More complex: icons, sizes, loading states
- Tests pattern flexibility
- Common component used throughout

**Steps:**
1. Create `handlers/button.tsx`
2. Migrate versions with size handling
3. Test icon integration
4. Verify loading states across versions

### Phase 4: Migrate Remaining Components
**Parallel Migration:**
- Group 1: Alert, Badge (simple)
- Group 2: Input, Textarea (form elements)
- Group 3: Checkbox, Switch, Label (interactive)

Each group can be migrated independently.

### Phase 5: Verification & Cleanup
1. Update all showcase pages
2. Run full test suite
3. Verify all variants work
4. Check clip-path rendering
5. Remove old component structure
6. Update documentation

---

## Breaking Changes

### Import Path Changes
**Before:**
```typescript
import { Card } from '@/ui/components/card';
import { Button } from '@/ui/components/button';
```

**After:**
```typescript
import { Card } from '@/ui/handlers/card';
import { Button } from '@/ui/handlers/button';
```

### Component Usage (No Breaking Changes)
Component props remain the same:
```typescript
<Card version="angular-corner" variant="primary">Content</Card>
<Button version="holo-frame" variant="destructive">Click</Button>
```

### Files Requiring Updates
1. All showcase pages in `src/pages/showcase/`
2. Any demo or example files
3. Documentation code samples
4. Main `src/ui/index.ts` export file

---

## Benefits of New Architecture

### 1. Better Organization
- Easy to see all components within a version
- Version-specific utilities co-located
- Clear separation of concerns

### 2. Reduced Duplication
- Centralized variant handling
- Shared clip-path utilities
- Consistent handler pattern

### 3. Easier Maintenance
- Update a version's entire style in one folder
- Add new versions by copying folder structure
- Standardized patterns across all components

### 4. Better Performance
- Lazy loading per version reduces bundle size
- Only load components when needed
- Suspense boundaries for better UX

### 5. Scalability
- Easy to add new versions
- Simple to add new components
- Clear patterns for contributors

---

## Implementation Checklist

- [ ] Phase 1: Base structure
  - [ ] Create folder structure
  - [ ] Create type definitions
  - [ ] Create utility files
  - [ ] Create variant configs
  
- [ ] Phase 2: Migrate Card
  - [ ] Create handler
  - [ ] Migrate all 10 versions
  - [ ] Update showcase
  - [ ] Test and verify
  
- [ ] Phase 3: Migrate Button
  - [ ] Create handler
  - [ ] Migrate all versions
  - [ ] Test icons and sizes
  - [ ] Update showcase
  
- [ ] Phase 4: Migrate remaining
  - [ ] Alert & Badge
  - [ ] Input & Textarea
  - [ ] Checkbox, Switch, Label
  
- [ ] Phase 5: Verification
  - [ ] Update all imports
  - [ ] Run tests
  - [ ] Clean up old structure
  - [ ] Update documentation

---

## Timeline Estimate

- Phase 1: 1-2 hours (setup)
- Phase 2: 2-3 hours (Card migration + testing)
- Phase 3: 2-3 hours (Button migration + testing)
- Phase 4: 4-6 hours (remaining components)
- Phase 5: 1-2 hours (verification + cleanup)

**Total: 10-16 hours**

---

## Risk Mitigation

### Risk: Breaking existing code
**Mitigation:** Keep old structure until migration complete, update all imports in single commit

### Risk: Clip-path issues
**Mitigation:** Test clip-path utilities extensively in Phase 2 (Card)

### Risk: Dynamic imports failing
**Mitigation:** Create fallback components and error boundaries

### Risk: Performance regression
**Mitigation:** Measure bundle size before/after, verify lazy loading works

---

## Success Criteria

1. ✅ All components work with all 10 versions
2. ✅ All 6 variants render correctly
3. ✅ Clip-paths work without border clipping
4. ✅ No code duplication across versions
5. ✅ Showcase pages work without issues
6. ✅ Bundle size same or smaller
7. ✅ Clear, maintainable code structure
