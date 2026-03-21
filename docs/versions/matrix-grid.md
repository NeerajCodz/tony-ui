# VERSION 12 — MATRIX GRID

> **Codename:** `matrix-grid`
> **Shape Language:** Sharp rectangle with internal cell grid

## Philosophy
Data is a living grid. The component is a window into a numerical/symbolic matrix. Inspired by digital rain and grid-based data structures. Everything aligns to a rhythm.

## Primary Shape
```
Sharp rectangle (border-radius: 0)
Internal background: visible grid of --grid-spacing cells
The grid cells are the texture, not decoration
```

## Color Tokens
```css
--mg-bg:          #010804;
--mg-surface:     #040f08;
--mg-grid:        rgba(0, 220, 80, 0.08);
--mg-grid-bright: rgba(0, 220, 80, 0.2);
--mg-text:        #00dd55;
--mg-text-dim:    rgba(0, 200, 80, 0.5);
--mg-rain:        rgba(0, 255, 80, 0.6);
--mg-accent:      #00ff55;
--mg-border:      rgba(0, 180, 60, 0.3);
```

## Grid Background
```css
--grid-spacing: 20px;
background-image:
  linear-gradient(--mg-grid 1px, transparent 1px),
  linear-gradient(90deg, --mg-grid 1px, transparent 1px);
background-size: var(--grid-spacing) var(--grid-spacing);

/* Highlight every 4th line to create major/minor grid */
/* Overlaid via pseudo-element with 4× spacing */
```

## Typography
```
Font Stack:
  ALL:  'Matrix Code NFI', 'Courier New', monospace
  (fallback: 'Share Tech Mono')

h1: 52px | weight 400 | tracking 0.1em | color: --mg-accent
     text-shadow: 0 0 30px --mg-accent, 0 0 60px rgba(0,255,80,0.3)
h2: 36px | weight 400 | tracking 0.08em | color: --mg-text
h3: 24px | weight 400 | tracking 0.1em  | color: --mg-text
h4: 18px | weight 400 | tracking 0.15em | color: --mg-text-dim
h5: 13px | weight 400 | tracking 0.2em  | UPPERCASE | color: --mg-text-dim
h6: 11px | weight 400 | tracking 0.3em  | color: rgba(0,180,60,0.5)
body: 13px | leading: 1.8 | color: --mg-text-dim | letter-spacing: 0.05em
```

## Digital Rain Effect
```css
/* Canvas-based or CSS animation column of random chars scrolling vertically */
/* Applied as ::before overlay with pointer-events: none */
/* --matrix-speed: 1.5s */
/* Active only on hover or in "active" state to avoid performance issues */
```

## Effects & Animation
```
Background:     Static grid always visible
Mount:          Grid cells "fill in" — opacity 0→target column by column (staggered)
Hover:          Digital rain columns activate in the background
                Border goes full --mg-accent opacity
Cell flash:     Random grid cell brightens briefly (every 0.5–2s random)
Active:         Full rain burst for 500ms, then returns to hover state
Data entry:     Typing triggers column highlights
```

## Component Types

| Type       | Background              | Grid       | Border                 | Text             | Rain                  |
|------------|-------------------------|------------|------------------------|------------------|-----------------------|
| `default`  | `--mg-surface`          | dim grid   | `--mg-border`          | `--mg-text-dim`  | Off (hover only)      |
| `solid`    | `rgba(0,180,60,0.1)`    | bright grid| `--mg-accent` 1px      | `--mg-accent`    | Slow continuous rain  |
| `outline`  | transparent             | faint grid | `--mg-accent` 1px      | `--mg-accent`    | Off                   |
| `ghost`    | transparent             | none       | none                   | `--mg-text-dim`  | Off                   |
| `inverse`  | `--mg-accent`           | dark grid  | none                   | `--mg-bg`        | Inverted rain (dark)  |
| `contrast` | `#000`                  | bright grid| `--mg-accent` 2px      | `--mg-accent`    | Full rain             |
| `soft`     | `rgba(0,100,40,0.04)`   | very dim   | `rgba(0,180,60,0.15)`  | `--mg-text-dim` 60% | Off                |

## Best Use Cases
Loading screens, data decryption UI, database explorers, code injection interfaces
