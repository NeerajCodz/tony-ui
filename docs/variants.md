# Cyber UI Variants

## What Are Variants?

Variants are **color themes** that communicate semantic meaning across components. Each variant applies a consistent color palette to borders, icons, headings, and glow effects.

## Available Variants

| Variant | Color | Use Case |
|---------|-------|----------|
| `default` / `primary` | Cyan | Standard UI elements, primary actions |
| `secondary` | Slate/Gray | Subdued actions, less prominent UI |
| `accent` | Indigo/Purple | High-contrast highlights, special features |
| `info` | Blue | Informational content, help text |
| `success` | Green | Confirmations, completed actions |
| `warning` | Amber/Yellow | Caution states, important notices |
| `destructive` / `danger` | Red | Errors, dangerous actions, deletions |
| `neutral` | White/Gray | Desaturated metallic/functional tones |
| `inverse` | Black/White | High-contrast inverted overlays |
| `success-soft` | Pale Green | Muted positive backgrounds |
| `warning-soft` | Pale Amber | Muted cautionary backgrounds |
| `danger-soft` | Pale Red | Muted error backgrounds |

## How to Apply

Use the `variant` prop on any Cyber component:

```tsx
<CyberCard variant="success">
  Operation completed successfully
</CyberCard>

<CyberAlert variant="warning">
  This action cannot be undone
</CyberAlert>

<CyberButton variant="destructive">
  Delete Account
</CyberButton>
```

## Color Application

### Where Variants Apply

1. **Borders** - Border colors match the variant
2. **Icons** - Icon fill/stroke colors match the variant
3. **Headings** - Title/header text uses variant color
4. **Glow Effects** - Box shadows and glows use variant color with transparency
5. **Accent Lines** - Left bars, underlines, and decorative elements

### Color Values

```css
/* Primary/Default - Cyan */
--cyber-primary: #00ffff;
--cyber-primary-glow: rgba(0, 255, 255, 0.3);

/* Info - Blue */
--cyber-info: #3b82f6;
--cyber-info-glow: rgba(59, 130, 246, 0.3);

/* Success - Green */
--cyber-success: #22c55e;
--cyber-success-glow: rgba(34, 197, 94, 0.3);

/* Warning - Amber */
--cyber-warning: #f59e0b;
--cyber-warning-glow: rgba(245, 158, 11, 0.3);

/* Destructive - Red */
--cyber-destructive: #ef4444;
--cyber-destructive-glow: rgba(239, 68, 68, 0.3);
```

## Dialog & Alert Icons

When displaying dialogs or alerts, include appropriate icons for each variant:

| Variant | Icon | Description |
|---------|------|-------------|
| `info` | ℹ️ Info Circle | Circle with "i" inside |
| `success` | ✓ Checkmark | Checkmark in circle |
| `warning` | ⚠️ Triangle | Warning triangle with "!" |
| `destructive` | ✕ Error X | X mark in circle |

### Icon Implementation

```tsx
// Recommended icons (Lucide React)
import { Info, CheckCircle, AlertTriangle, XCircle } from 'lucide-react';

const variantIcons = {
  info: Info,
  success: CheckCircle,
  warning: AlertTriangle,
  destructive: XCircle,
};
```

## Design Guidelines

### Border Colors
- Border color should **always** match the variant
- Use semi-transparent borders for subtle appearance: `border-color: rgba(variant, 0.5)`
- Use solid borders for emphasis: `border-color: variant`

### Text & Headings
- Headings and titles should use the variant color
- Body text remains neutral (white/gray) for readability
- Links and interactive elements can use variant color

### Glow Effects
- Apply variant-colored glow on hover/focus states
- Use `box-shadow: 0 0 20px var(--variant-glow)`
- Pulse animations should use the variant glow color

## Best Practices

1. **Be Consistent** - Use the same variant for related actions
2. **Don't Overuse** - Reserve `destructive` for truly dangerous actions
3. **Provide Context** - Combine variant color with clear text messaging
4. **Accessibility** - Ensure sufficient contrast; don't rely on color alone
