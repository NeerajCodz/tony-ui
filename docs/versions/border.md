# VERSION 02 — BORDER

> **Codename:** `border`
> **Shape Language:** Sharp rectangle — the border IS the component

## Philosophy
Absolute minimalism where the border is not decoration but structure. Inspired by engineering blueprints and PCB silkscreen layers. The boundary defines everything.

## Primary Shape
```
Sharp rectangle. border-radius: 0px. No exceptions.
The visual weight lives entirely in the border treatment.
Segmented dashed borders with precise gap/dash ratios.
```

## Color Tokens
```css
--br-bg:           #060609;
--br-surface:      #0c0d14;
--br-border-dim:   #1a1d2e;
--br-border-main:  #2e3352;
--br-border-bright:#4a5280;
--br-accent:       #6c8eff;
--br-accent-dim:   #1a2466;
```

## Typography
```
Font Stack:
  Display:  'IBM Plex Mono', monospace
  Body:     'IBM Plex Mono', monospace
  Code:     'IBM Plex Mono', monospace

  (All mono — this theme is purely technical)

h1: 48px | weight 700 | tracking -0.02em | color: --text-primary
h2: 36px | weight 600 | tracking 0em     | color: --text-primary
h3: 24px | weight 600 | tracking 0.04em  | color: --br-accent
h4: 18px | weight 500 | tracking 0.08em  | color: --text-secondary
h5: 14px | weight 400 | tracking 0.15em  | UPPERCASE | color: --text-secondary
h6: 12px | weight 400 | tracking 0.25em  | UPPERCASE | color: --text-muted
body: 13px | weight 400 | leading: 1.7   | color: --text-secondary
```

## Border System
```css
/* Segmented border via SVG or background-image */
--border-segment-length: 20px;
--border-gap:            10px;
--border-width:          1px;  /* primary */
--border-width-accent:   2px;  /* accent/hover */

/* Double border variant: outer dim + inner bright */
outline: 1px solid --br-border-dim;
border:  1px solid --br-border-main;
```
- Corner squares: 3x3px filled squares at each corner — always visible
- Active state adds a second border offset by 2px

## Effects & Animation
```
Mount:      Border segments "draw in" clockwise (stroke-dashoffset animation)
Hover:      Segment gap closes — border becomes more solid
            Corner squares scale up to 5x5px
Pulse:      Subtle brightness oscillation on border every 3s
Active:     Both borders flash --br-accent simultaneously
```

## Component Types

| Type       | Background       | Border                          | Text               | Special Effect                               |
|------------|------------------|---------------------------------|--------------------|----------------------------------------------|
| `default`  | `--br-bg`        | segmented `--br-border-main`    | `--text-primary`   | Corner squares: `--br-border-bright`          |
| `solid`    | `--br-accent-dim`| `--br-accent` 2px solid         | `--br-accent`      | All 4 border segments fully lit               |
| `outline`  | transparent      | `--br-accent` 1px segmented     | `--br-accent`      | Animated draw on mount                        |
| `ghost`    | transparent      | none                            | `--text-secondary` | Only corner squares remain (4 dots)           |
| `inverse`  | `--br-accent`    | `--br-bg` 2px                   | `--br-bg`          | Inverted, corner squares in `--br-bg`         |
| `contrast` | `#000`           | `#ffffff` 1px double            | `#ffffff`          | Maximum contrast, no color accent             |
| `soft`     | `rgba(108,142,255,0.05)` | `--br-border-dim` 1px | `--text-secondary` | Near-invisible, reveals on hover              |

## Best Use Cases
Data tables, form inputs, code blocks, section dividers, technical specifications
