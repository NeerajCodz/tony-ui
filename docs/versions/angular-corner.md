# VERSION 01 — ANGULAR CORNER

> **Codename:** `angular-corner`
> **Shape Language:** Military octagon — aggressive clip-path geometry

## Philosophy
Born from stealth aircraft and armored vehicle aesthetics. Every corner is an engineering decision, not a design flourish. The component looks like it was machined, not drawn.

## Primary Shape
```
Octagonal clip-path. Corners are cut at 45°.
clip-path: polygon(
  var(--corner) 0%,
  calc(100% - var(--corner)) 0%,
  100% var(--corner),
  100% calc(100% - var(--corner)),
  calc(100% - var(--corner)) 100%,
  var(--corner) 100%,
  0% calc(100% - var(--corner)),
  0% var(--corner)
);
```
- `--corner`: `12px` (standard), `8px` (compact), `18px` (large)
- Shape is **always** sharp. Never rounded.

## Color Tokens
```css
--ac-bg:          #080c10;
--ac-surface:     #0d1218;
--ac-border:      #1e3a4a;
--ac-accent:      #00c8ff;
--ac-accent-dim:  #004f66;
--ac-edge-light:  #80e8ff;
--ac-danger:      #ff3a00;
```

## Typography
```
Font Stack:
  Display:  'Rajdhani', 'Orbitron', sans-serif
  Body:     'Share Tech Mono', monospace
  Code:     'Share Tech Mono', monospace

h1: 56px | weight 900 | tracking -0.04em | UPPERCASE | color: --ac-edge-light
h2: 40px | weight 700 | tracking -0.02em | UPPERCASE | color: --text-primary
h3: 28px | weight 700 | tracking 0.05em  | UPPERCASE | color: --text-primary
h4: 20px | weight 600 | tracking 0.1em   | UPPERCASE | color: --ac-accent
h5: 16px | weight 600 | tracking 0.15em  | UPPERCASE | color: --text-secondary
h6: 14px | weight 500 | tracking 0.3em   | UPPERCASE | color: --text-muted
body: 14px | weight 400 | color: --text-secondary
label: 10px | weight 700 | tracking 0.4em | UPPERCASE | color: --ac-accent
```

## Border & Edge System
- **Primary border:** `2px solid --ac-border`
- **The border traces the clip-path** using a pseudo-element technique: a slightly larger div behind the component with the same clip-path and a brighter fill, creating an "edge" illusion
- **Edge highlight:** Top-left angled edge gets `--ac-edge-light` at 60% opacity
- **Inner bevel:** `inset 0 1px 0 rgba(128,232,255,0.15)`

## Effects & Animation
```
Mount:     clip-path animates from bottom-left triangle to full octagon (300ms, cubic-bezier(0.34,1.56,0.64,1))
Hover:     --corner shrinks by 4px (geometry tightens) + edge glow intensifies
Active:    Flash white on edge-light, scale 0.98
Focus:     ac-accent border replaces ac-border, edge-light goes full opacity
Shimmer:   Diagonal highlight sweeps across on mount (one-time)
```

## Component Types

| Type       | Background        | Border                    | Text               | Special Effect                            |
|------------|-------------------|---------------------------|--------------------|-------------------------------------------|
| `default`  | `--ac-bg`         | `--ac-border` 2px          | `--text-primary`   | Standard edge bevel                       |
| `solid`    | `--ac-accent-dim` | `--ac-accent` 2px          | `--ac-edge-light`  | Inner glow: `--ac-accent` 20% fill        |
| `outline`  | transparent       | `--ac-accent` 2px          | `--ac-accent`      | Pseudo-border only, no fill               |
| `ghost`    | transparent       | none                      | `--text-secondary` | Corner markers (tiny 6px L-shapes only)   |
| `inverse`  | `--ac-edge-light` | `--ac-bg` 2px              | `--ac-bg`          | Bright fill, dark text — high impact      |
| `contrast` | `#000000`         | `--ac-danger` 2px          | `#ffffff`          | Warning edge: danger-colored bevel        |
| `soft`     | `rgba(0,200,255,0.06)` | `rgba(0,200,255,0.2)` | `--text-secondary` | Muted glow, reduced opacity               |

## Best Use Cases
Combat HUD elements, tactical overlays, weapon/armor stats, secure terminal access panels

---

---