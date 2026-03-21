# VERSION 16 — RAISED

> **Codename:** `raised`
> **Shape Language:** Elevated sharp rectangle — hard physical shadow

## Philosophy
The component is a physical object with mass. It sits above the surface and casts a shadow. Tactile and real — pressing it feels satisfying. Neo-brutalist influenced.

## Primary Shape
```
border-radius: 4px (slightly sharp, not rounded-smooth)
Hard offset shadow: box-shadow: 4px 4px 0px var(--ra-shadow)
On :active: transform: translate(2px, 2px); box-shadow reduced to 2px 2px
On :hover:  transform: translate(-1px, -1px); box-shadow extends to 6px 6px
```

## Color Tokens
```css
--ra-bg:      #0a0c14;
--ra-surface: #141828;
--ra-border:  #2a3050;
--ra-shadow:  #040610;
--ra-accent:  #4060ff;
--ra-shadow-accent: #1020aa;
--ra-text:    #d0d4f0;
```

## Typography
```
Font Stack:
  Display:  'Space Grotesk'? NO. Use 'Martian Mono', monospace — heavy and architectural
  Body:     'Martian Mono', monospace

h1: 48px | weight 700 | tracking -0.02em | color: --text-primary
h2: 36px | weight 700 | tracking -0.01em | color: --text-primary
h3: 24px | weight 700 | tracking 0em     | color: --ra-accent
h4: 18px | weight 600 | tracking 0.02em  | color: --text-primary
h5: 14px | weight 500 | tracking 0.06em  | color: --text-secondary
h6: 12px | weight 500 | tracking 0.12em  | UPPERCASE | color: --text-muted
body: 13px | leading: 1.6 | color: --ra-text
```

## Effects & Animation
```
Rest:      Normal shadow (4px 4px)
Hover:     translate(-1px, -1px), shadow 6px 6px (lifts higher)
Active:    translate(2px, 2px), shadow 2px 2px (presses down) — instant snap, no ease
Release:   Spring back: translate(-1px, -1px) → (0,0) (150ms back-out easing)
Transition: 80ms for active (snappy), 150ms for hover
```

## Component Types

| Type       | Background     | Border             | Shadow                 | Text          |
|------------|----------------|--------------------|------------------------|---------------|
| `default`  | `--ra-surface` | `--ra-border` 1px  | `--ra-shadow` 4px 4px  | `--ra-text`   |
| `solid`    | `--ra-accent`  | none               | `--ra-shadow-accent`   | `#fff`        |
| `outline`  | transparent    | `--ra-accent` 2px  | `--ra-accent` opaque   | `--ra-accent` |
| `ghost`    | transparent    | none               | none                   | `--ra-text`   |
| `inverse`  | `--ra-text`    | none               | `--ra-border`          | `--ra-bg`     |
| `contrast` | `#000`         | `#fff` 2px         | `#fff` opaque          | `#fff`        |
| `soft`     | `rgba(64,96,255,0.08)` | `--ra-border` | `--ra-shadow` 2px 2px | `--text-secondary` |

## Best Use Cases
Primary action buttons, interactive cards, selectable items, toggle switches
