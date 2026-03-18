# Dynamic Theme System - Knowledge Reference

## Architecture Overview

Everything is **JSON-driven**. No hardcoded colors in CSS or components.

```
config/ (JSON data)  →  providers/ (inject CSS vars)  →  components/ (consume CSS vars)
```

## Core Data Files (src/ui/config/)

### colors.json
- Multiple themes (cyan, dark, light)
- Each theme has 8 color types: `primary, secondary, accent, muted, solid, input, surface, container`
- Each color type has 7 states: `base, background, foreground, hover, border, ring, active`
- Also has `text` object with: headings (h1-h6), roles (paragraph, small, caption, normal, primary, secondary, disabled, button, placeholder), link (default, hover, focus, visited, disabled), inverse (heading, normal, link), code (inline, block)
- All values are HSL: `"190 100% 50%"`

### semantic.json
- Semantic colors: `success, info, warning, destructive, neutral, placeholder`
- Each has same 7 states as color types
- Used for variant-based coloring (alert/badge/toast variants)

### themes.json
- List of available themes with `id, name, icon_name, enabled`

### animations.json
- `durations`: fast (150ms), normal (300ms), slow (500ms)
- `easings`: in, out, inOut, elastic
- `transitions`: fade, slideUp, scale

### Other config files
- `radius.json`: none, sm (4px), md (8px), lg (16px), xl (24px), 2xl (32px), full (9999px)
- `shadows.json`: sm, md, lg, xl, glow (all CSS var references)
- `spacing.json`: 0-20 scale mapping to px values
- `borders.json`: none, thin (1px), medium (2px), thick (4px)
- `duration.json`: fast, normal, slow, slower
- `texts.json`: fonts, weights, sizes, line heights, letter spacing, heading configs, role configs

## CSS Variable Pattern

All colors become CSS variables: `--{colorType}-{state}`

```
--primary-base        → hsl(190 100% 50%)
--primary-background  → hsl(190 80% 15%)
--primary-foreground  → hsl(190 100% 95%)
--primary-hover       → hsl(190 100% 55%)
--primary-border      → hsl(190 80% 40%)
--primary-ring        → hsl(190 100% 25%)
--primary-active      → hsl(190 100% 45%)
```

Semantic colors follow same pattern: `--success-base`, `--warning-border`, etc.

Text colors: `--text-heading-h1`, `--text-roles-paragraph`, etc.

## Component Architecture

### Type-First Pattern
1. Declare version type union in `types/components/{component}.ts`
2. Add version config metadata
3. Only then create `components/{component}/{component}-{version}.tsx`
4. Export from `components/{component}/index.ts`

### Standard Props (every component)
```typescript
interface BaseProps {
  version?: ComponentVersion;            // Shape/layout variant
  type?: 'default' | 'outline' | 'solid';  // Fill style
  variant?: 'neutral' | 'success' | 'warning' | 'info' | 'destructive' | 'primary';
  colorType?: ColorType;                 // Override color source
  animated?: boolean;                    // Enable/disable animations
  className?: string;
  disabled?: boolean;
}
```

### Color Resolution
```typescript
// variant → activeColorType mapping
const VARIANT_COLOR_MAP = {
  primary: 'primary',
  neutral: 'primary',
  success: 'success',    // from semantic.json
  warning: 'warning',    // from semantic.json
  info: 'info',          // from semantic.json
  destructive: 'destructive', // from semantic.json
};
```

### Type Styles (how type prop affects rendering)
```typescript
// type='default': border + background fill
// type='outline': border only, transparent background
// type='solid':   no border, solid base color fill
```

## Provider Stack
```tsx
<ThemeProvider>      {/* light/dark/system mode */}
  <ColorProvider>    {/* injects --{type}-{state} CSS vars from colors.json */}
    <App />
  </ColorProvider>
</ThemeProvider>
```

ColorProvider also injects semantic colors from semantic.json as CSS variables.

## Key Rules
1. **Never hardcode colors** — always use `hsl(var(--{type}-{state}))`
2. **All styling data from JSON** — spacing, radius, shadows, etc.
3. **Type-first versioning** — declare in types before creating component files
4. **Components consume CSS vars** — via `getColorVar(type, state)` helper
5. **animated prop** — controls whether transitions apply
6. **Color types**: primary, secondary, accent, muted, solid, input, surface, container
7. **Color states**: base, background, foreground, hover, border, ring, active
