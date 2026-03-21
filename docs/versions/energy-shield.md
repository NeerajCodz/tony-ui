# VERSION 07 — ENERGY SHIELD

> **Codename:** `energy-shield`
> **Shape Language:** Irregular hexagonal shield — organic plasma edge

## Philosophy
Defensive energy made visible. The component looks like it's actively blocking something. Inspired by sci-fi deflector shields — shimmering, plasma-edged, hexagonally-tiled.

## Primary Shape
```
Outer shell: Hexagonal clip-path (wide hex, landscape orientation)
clip-path: polygon(5% 25%, 5% 75%, 50% 100%, 95% 75%, 95% 25%, 50% 0%);

OR for rectangular content: "Shield border" using SVG filter
  — the border is blurred/plasma rather than sharp

Internal hex tile pattern: CSS background-image with hexagonal repeat
```

## Color Tokens
```css
--es-bg:           #060810;
--es-surface:      #0b1020;
--es-plasma-1:     #00aaff;
--es-plasma-2:     #44ffcc;
--es-plasma-3:     #7700ff;
--es-hex-line:     rgba(0, 170, 255, 0.12);
--es-hex-fill:     rgba(0, 170, 255, 0.03);
--es-glow-inner:   rgba(0, 200, 255, 0.15);
--es-glow-outer:   rgba(0, 100, 200, 0.3);
--es-impact:       rgba(255, 255, 255, 0.8);
```

## Typography
```
Font Stack:
  Display:  'Audiowide', 'Exo 2', sans-serif
  Body:     'Exo 2', sans-serif
  Code:     'JetBrains Mono', monospace

h1: 52px | weight 700 | tracking -0.02em | color: --es-plasma-2
     text-shadow: 0 0 40px --es-plasma-1, 0 0 80px --es-plasma-3 (iridescent)
h2: 38px | weight 700 | tracking -0.01em | color: --text-primary
h3: 26px | weight 600 | tracking 0.03em  | color: --es-plasma-1
h4: 18px | weight 600 | tracking 0.06em  | color: --text-primary
h5: 14px | weight 500 | tracking 0.1em   | color: --text-secondary
h6: 12px | weight 500 | tracking 0.15em  | color: --es-plasma-1 | opacity: 0.7
body: 14px | leading: 1.7 | color: rgba(200, 220, 255, 0.85)
```

## Hex Background Pattern
```css
/* SVG hex grid as background — applied to card surface */
background-image: url("data:image/svg+xml,<svg ...>"); /* hexagonal tessellation */
background-size: var(--pattern-size, 30px) calc(var(--pattern-size, 30px) * 1.732);
/* Lines at --es-hex-line opacity, fill at --es-hex-fill */
```

## Plasma Edge Effect
```css
/* "Plasma" border using multi-layer box-shadow + SVG filter blur */
filter: drop-shadow(0 0 4px --es-plasma-1) drop-shadow(0 0 12px --es-plasma-2);
/* NOT a solid border line — blurred energy field */
```

## Effects & Animation
```
Mount:          Shield "activates" — scale 0.95→1 with plasma edge brightening (400ms)
Ripple:         On mount, a "ripple wave" from center outward (radial gradient pulse)
Hover:          Inner glow intensifies; hex cells under cursor illuminate
Impact sim:     Click triggers "impact" — white flash at click point, ripple outward
Shimmer:        Continuous slow gradient rotation on the plasma edge (8s loop)
Cursor track:   Dynamic glow follows cursor position within component (JS)
```

## Component Types

| Type       | Background                          | Border/Edge                        | Text                | Special                                   |
|------------|-------------------------------------|------------------------------------|---------------------|-------------------------------------------|
| `default`  | `--es-surface` + hex pattern        | plasma edge: `--es-plasma-1`        | `--text-primary`    | Subtle hex grid, soft plasma              |
| `solid`    | `rgba(0,170,255,0.15)` + hex pattern| plasma edge: `--es-plasma-2` bright | `--es-plasma-2`     | Bright hex grid, strong plasma pulse      |
| `outline`  | transparent                         | plasma edge only (no fill glow)     | `--es-plasma-1`     | Hexagonal outline, minimal fill           |
| `ghost`    | transparent                         | none                                | `--text-secondary`  | Faint hex grid trace only                 |
| `inverse`  | `--es-plasma-1` at 30%              | `--es-glow-inner` no blur           | `--es-bg`           | Light fill inverted — "overcharged"       |
| `contrast` | `#000`                              | `--es-plasma-3` plasma edge         | `--es-plasma-3`     | Purple shield — exotic matter mode        |
| `soft`     | `rgba(0,100,200,0.06)` + faint hex  | `rgba(0,170,255,0.1)` blurred       | `--text-secondary`  | Dormant shield state                      |

## Best Use Cases
Defense indicators, protective status overlays, rare/legendary item frames, magical protection UI, shield hit-point bars
