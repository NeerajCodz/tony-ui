# VERSION 15 — QUANTUM GATE

> **Codename:** `quantum-gate`
> **Shape Language:** Folded-corner parallelogram — dimensional shift

## Philosophy
The component is a portal between states. Corners fold like physical paper. The surface is iridescent — multiple dimensional layers visible simultaneously. Advanced tech, exotic matter.

## Primary Shape
```
Folded corners via clip-path (triangle cut + shadow trick to suggest fold):
clip-path: polygon(
  var(--fold) 0%,          /* top-left: cut corner */
  100% 0%,                 /* top-right: sharp */
  100% calc(100% - var(--fold)), /* bottom-right: cut corner */
  calc(100% - var(--fold)) 100%, /* bottom-right fold */
  0% 100%,                 /* bottom-left: sharp */
  0% var(--fold)           /* top-left fold */
);
--fold: 20px (two diagonal cuts — top-left and bottom-right, opposing corners)

"Folded" appearance: triangle overlays in ::before/::after using slightly different
color to suggest paper fold depth
```

## Color Tokens
```css
--qg-bg:         #060510;
--qg-surface:    #0c0820;
--qg-iris-1:     #6600ff;
--qg-iris-2:     #00ccff;
--qg-iris-3:     #ff0099;
--qg-iris-4:     #00ffaa;
--qg-fold-shadow:rgba(0, 0, 0, 0.5);
--qg-fold-light: rgba(255, 255, 255, 0.1);
--qg-border:     rgba(102, 0, 255, 0.4);
```

## Iridescent Effect
```css
/* Shifting gradient background that changes on hover/time */
background: conic-gradient(
  from var(--angle, 0deg),
  --qg-iris-1, --qg-iris-2, --qg-iris-3, --qg-iris-4, --qg-iris-1
);
/* Applied as ::before with low opacity (0.12) over solid dark bg */
/* --angle animates continuously: @keyframes rotate { to { --angle: 360deg; } } */
/* Animation duration: 8s linear infinite */
```

## Typography
```
Font Stack:
  Display:  'Syncopate', sans-serif
  Body:     'Josefin Sans', sans-serif
  Code:     'Fira Code', monospace

h1: 50px | weight 700 | tracking 0.1em | UPPERCASE | color: --text-primary
     background: linear-gradient(135deg, --qg-iris-2, --qg-iris-1) | -webkit-background-clip: text
     (iridescent text gradient)
h2: 36px | weight 700 | tracking 0.06em | UPPERCASE | color: --text-primary
h3: 24px | weight 700 | tracking 0.1em  | UPPERCASE | color: --qg-iris-2
h4: 18px | weight 400 | tracking 0.15em | UPPERCASE | color: --text-secondary
h5: 13px | weight 400 | tracking 0.25em | UPPERCASE | color: --qg-iris-1 | opacity: 0.8
h6: 11px | weight 400 | tracking 0.4em  | UPPERCASE | color: --text-muted
body: 13px | leading: 1.7 | color: rgba(200,180,255,0.8)
```

## Effects & Animation
```
Iridescent BG: Conic gradient rotates continuously (8s)
Mount:         Clip-path "unfolds" — starts as thin horizontal line, expands to full shape (400ms)
Hover:         Iridescence intensifies (opacity 0.12 → 0.25)
               --fold decreases (20px → 14px) — corners sharpen
Active:        Full-spectrum burst (all 4 iris colors flash simultaneously, 100ms)
Close:         Reverse unfold animation
```

## Component Types

| Type       | Background                | Iris Opacity | Border                 | Text                |
|------------|---------------------------|--------------|------------------------|---------------------|
| `default`  | `--qg-surface`            | 0.12         | `--qg-border` 1px       | rgba(200,180,255,.8)|
| `solid`    | `rgba(102,0,255,0.15)`    | 0.25         | `--qg-iris-1` 1px       | `--text-primary`    |
| `outline`  | transparent               | 0.08         | conic-gradient border   | `--qg-iris-2`       |
| `ghost`    | transparent               | 0            | none                    | `--text-secondary`  |
| `inverse`  | conic at 30% opacity      | 0.4          | none                    | `--qg-bg`           |
| `contrast` | `#000`                    | 0.2          | `--qg-iris-3` 2px       | `--qg-iris-3`       |
| `soft`     | `rgba(102,0,255,0.05)`    | 0.06         | `rgba(102,0,255,0.2)`   | rgba(180,160,220,.7)|

## Best Use Cases
Fast-travel portals, legendary item frames, dimensional shift transitions, core system settings
