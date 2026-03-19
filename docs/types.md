# Cyber UI Types

## What Are Types?

Types define the **visual style** of a component's appearance. While variants control color, types control the rendering style—how backgrounds, borders, and transparency are handled.

## Available Types

| Type | Description |
|------|-------------|
| `default` | Glass/translucent with backdrop blur, subtle border |
| `outline` | Transparent background, strong visible border |
| `solid` | Filled background (90% opacity), matching border |
| `ghost` | Minimal/no border, transparent, reveals on hover |
| `soft` | Muted background, low-contrast border, gentle appearance |
| `disabled` | Grayscale, reduced opacity, non-interactive |
| `interactive` | Animated, glow-on-hover, high-response state |

## Category-Specific Types

Beyond core types, components may support category-specific types:

| Category | Specialized Types |
|----------|-------------------|
| **Core** | `default`, `solid`, `outline`, `ghost`, `soft`, `disabled`, `interactive` |
| **Button** | `action`, `submit`, `cancel`, `icon-only` |
| **Overlay** | `modal`, `drawer`, `tooltip`, `popover`, `sheet` |
| **Feedback** | `toast`, `alert`, `progress`, `status-indicator` |
| **Data Display** | `card`, `table`, `list`, `badge`, `avatar` |
| **Navigation** | `breadcrumb`, `pagination`, `menu-item`, `tab` |
| **Input** | `text`, `toggle`, `checkbox`, `slider`, `select` |
| **Control** | `joystick`, `knob`, `fader`, `trigger` |
| **Layout** | `panel`, `section`, `grid-container`, `spacer` |

## Type Details

### Default (Glass)

The signature cyberpunk aesthetic with translucent glass panels.

```css
.cyber-default {
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(var(--variant), 0.3);
}
```

**Characteristics:**
- Semi-transparent dark background
- Backdrop blur creates frosted glass effect
- Subtle border in variant color
- Content behind is visible but blurred
- Best for overlays and floating panels

**Use Cases:**
- Modal dialogs
- Dropdown menus
- Floating cards
- Navigation overlays

---

### Outline

High-contrast borders with full transparency.

```css
.cyber-outline {
  background: transparent;
  border: 2px solid var(--variant);
  border-opacity: 0.8;
}
```

**Characteristics:**
- Completely transparent background
- Strong, visible border (2px)
- Border uses full variant color
- Content behind is fully visible
- Creates wireframe/schematic aesthetic

**Use Cases:**
- Secondary buttons
- Selection indicators
- Interactive zones
- Diagnostic overlays

---

### Solid

Filled, opaque panels with presence.

```css
.cyber-solid {
  background: rgba(var(--variant-rgb), 0.15);
  /* OR for darker variants */
  background: rgba(0, 20, 30, 0.9);
  border: 1px solid var(--variant);
}
```

**Characteristics:**
- Filled background at 90% opacity (not fully opaque)
- Matching border in variant color
- Slight transparency maintains cohesion
- Strong visual presence
- Commands attention

**Use Cases:**
- Primary call-to-action buttons
- Important alerts
- Active/selected states
- Header panels

---

### Ghost

Minimal presence until interaction.

```css
.cyber-ghost {
  background: transparent;
  border: 1px solid transparent;
}

.cyber-ghost:hover {
  background: rgba(var(--variant-rgb), 0.1);
  border-color: rgba(var(--variant), 0.3);
}
```

**Characteristics:**
- Fully transparent by default
- No visible border initially
- Reveals on hover/focus
- Minimal visual footprint
- Feels lightweight and unobtrusive

**Use Cases:**
- Toolbar buttons
- Icon buttons
- List items
- Inline actions
- Secondary navigation

## How to Apply

Use the `type` prop on any Cyber component:

```tsx
<CyberButton type="solid" variant="primary">
  Submit
</CyberButton>

<CyberCard type="outline" variant="info">
  Technical specifications
</CyberCard>

<CyberButton type="ghost">
  Cancel
</CyberButton>
```

## Combining Types and Variants

Types and variants work together:

```tsx
// Solid destructive button - high urgency delete action
<CyberButton type="solid" variant="destructive">
  Delete Forever
</CyberButton>

// Ghost info button - subtle help action
<CyberButton type="ghost" variant="info">
  Learn More
</CyberButton>

// Outline success card - confirmation display
<CyberCard type="outline" variant="success">
  Payment Confirmed
</CyberCard>
```

## Visual Hierarchy

Use types to establish visual hierarchy:

1. **Solid** - Primary actions, most important
2. **Default** - Standard content containers
3. **Outline** - Secondary actions, boundaries
4. **Ghost** - Tertiary actions, minimal presence

## Accessibility Notes

- **Ghost** type requires sufficient color contrast on hover
- **Outline** type borders should meet contrast requirements
- Always ensure text remains readable against any background
- Test solid types against various backdrop colors
