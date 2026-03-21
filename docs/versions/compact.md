# VERSION 04 — COMPACT

> **Codename:** `compact`
> **Shape Language:** Minimal sharp rectangle — pure utility

## Philosophy
No decoration. No effects. Maximum information density. The component exists only to contain and communicate data. Every pixel is functional.

## Primary Shape
```
Sharp rectangle. border-radius: 2px maximum.
Padding: 4px 8px (inner), 2px 4px (tightest).
Height auto-collapses to content.
```

## Color Tokens
```css
--cp-bg:      #080a0f;
--cp-border:  #1a1e2e;
--cp-accent:  #4a6eff;
--cp-text:    #c8cce0;
--cp-muted:   #4a4e66;
```

## Typography
```
Font Stack:
  All:  'JetBrains Mono', 'Fira Code', monospace

h1: 24px | weight 700 | tracking -0.01em | color: --text-primary
h2: 20px | weight 600 | tracking 0em     | color: --text-primary
h3: 16px | weight 600 | tracking 0.02em  | color: --cp-accent
h4: 14px | weight 600 | tracking 0.04em  | color: --text-primary
h5: 12px | weight 500 | tracking 0.08em  | UPPERCASE | color: --text-secondary
h6: 11px | weight 500 | tracking 0.15em  | UPPERCASE | color: --cp-muted
body: 12px | leading: 1.5 | color: --cp-text

  (Everything scaled down — this is a dense-data theme)
```

## Effects & Animation
```
Mount:    Instant — no animation (performance mode)
Hover:    Border brightens slightly (opacity 0.4 → 0.8)
Active:   Background briefly flashes --cp-accent at 10% opacity
Transition: 80ms ease (minimal)
```

## Component Types

| Type       | Background    | Border                | Text             | Padding    |
|------------|---------------|-----------------------|------------------|------------|
| `default`  | `--cp-bg`     | `--cp-border` 1px     | `--cp-text`      | 4px 8px    |
| `solid`    | `--cp-accent` | none                  | `#fff`           | 4px 8px    |
| `outline`  | transparent   | `--cp-accent` 1px     | `--cp-accent`    | 4px 8px    |
| `ghost`    | transparent   | none                  | `--cp-text`      | 4px 8px    |
| `inverse`  | `--cp-text`   | none                  | `--cp-bg`        | 4px 8px    |
| `contrast` | `#000`        | `#fff` 1px            | `#fff`           | 4px 8px    |
| `soft`     | `rgba(74,110,255,0.08)` | none     | `--cp-muted`     | 4px 8px    |

## Best Use Cases
Data grids, tags/chips, badges, inline status indicators, dense menu items
