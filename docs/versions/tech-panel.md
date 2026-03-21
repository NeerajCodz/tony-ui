# VERSION 18 — TECH PANEL

> **Codename:** `tech-panel`
> **Shape Language:** Recessed multi-plane rectangle — mechanical depth

## Philosophy
The component is a physical server panel or control console. It has mass and weight — multiple inset planes create depth. Inspired by industrial control systems, Warhammer 40K cogitators, and server rack frontplates.

## Primary Shape
```
Outer shell: Sharp rectangle (0 radius)
Inner inset: Second border inset by --inset-depth creating a "recessed" tray effect
  box-shadow: inset 0 0 0 var(--inset-depth) var(--tp-inset-border)

"Vent" elements: Thin decorative horizontal slots in a side panel
  — implemented as repeating gradient or individual div elements
  --vent-count: 5
```

## Color Tokens
```css
--tp-bg:           #050810;
--tp-panel:        #0a0e1a;
--tp-inset:        #060a12;
--tp-border-outer: #1a2030;
--tp-border-inner: #0f1520;
--tp-inset-border: #1e2840;
--tp-vent:         rgba(0, 80, 160, 0.2);
--tp-power-1:      #00ff88;   /* green power light */
--tp-power-2:      #0088ff;   /* blue activity light */
--tp-power-3:      #ffaa00;   /* amber warning light */
--tp-accent:       #0088ff;
--tp-metal:        #1a2030;
```

## Typography
```
Font Stack:
  Display:  'Saira Condensed', sans-serif
  Body:     'Saira', sans-serif
  Code:     'Overpass Mono', monospace

h1: 48px | weight 800 | tracking 0.04em | UPPERCASE | color: --text-primary
h2: 34px | weight 700 | tracking 0.04em | UPPERCASE | color: --text-primary
h3: 22px | weight 700 | tracking 0.08em | UPPERCASE | color: --tp-accent
h4: 16px | weight 700 | tracking 0.1em  | UPPERCASE | color: --text-primary
h5: 12px | weight 600 | tracking 0.2em  | UPPERCASE | color: --text-secondary
h6: 10px | weight 600 | tracking 0.35em | UPPERCASE | color: --text-muted
body: 13px | leading: 1.6 | color: rgba(140,180,220,0.7) | font: Saira
label: 9px | UPPERCASE | tracking: 0.5em | color: --tp-accent
```

## Special Features
- **Power lights:** Row of 3 tiny circles (4px each) in header — green, blue, amber
- **Vent slots:** Side decoration (right edge preferred)
- **Inset tray:** Double-border creates depth illusion
- **Hydraulic animation:** Sliding panels rather than fades

## Effects & Animation
```
Mount:         Panel slides in (translateX from 20px, opacity 0→1, 300ms)
               Power lights activate sequentially (stagger 80ms each)
Hover:         Inset border brightens, active power light pulses
Vent hover:    Individual vent slots highlight briefly
Active:        "Press" — inset deepens briefly (--inset-depth increases 4px→6px)
Power change:  Light color cycles when state changes
Update:        Blue activity light blinks
```

## Component Types

| Type       | Background       | Outer Border           | Inset         | Power Lights        | Text                   |
|------------|------------------|------------------------|---------------|---------------------|------------------------|
| `default`  | `--tp-panel`     | `--tp-border-outer` 1px| Standard      | Green on            | `rgba(140,180,220,.7)` |
| `solid`    | `--tp-inset`     | `--tp-accent` 1px       | Deep inset    | All on              | `--text-primary`       |
| `outline`  | transparent      | `--tp-border-outer` 1px| No inset      | Off                 | `--tp-accent`          |
| `ghost`    | transparent      | none                   | None          | Off                 | `--text-secondary`     |
| `inverse`  | `--tp-accent` 20%| `--tp-accent` 1px       | Accent inset  | Amber on            | `--text-primary`       |
| `contrast` | `#000`           | `--tp-power-3` 1px      | Standard      | All amber (warning) | `--tp-power-3`         |
| `soft`     | `rgba(10,14,26,0.5)` | `--tp-border-inner` 0.5px | Shallow | Off                | `--text-muted`         |

## Best Use Cases
System settings, hardware config, industrial controls, upgrade stations, server management UI
