# VERSION 03 — CIRCUIT BOARD

> **Codename:** `circuit-board`
> **Shape Language:** Rectangle with PCB trace extensions — nodes and pathways

## Philosophy
Components are soldered onto a board. Every element has a trace connecting it to the system. The visual language is derived from physical PCB routing: L-shaped traces, circular pads, and signal-flow directionality.

## Primary Shape
```
Sharp rectangle (border-radius: 0) as the IC "chip" body.
Extensions: Decorative trace lines exit from edge midpoints
using ::before/::after pseudo-elements or SVG overlays.
Trace termination nodes (circles) mark connection points.
```

## Color Tokens
```css
--cb-bg:          #040a06;
--cb-surface:     #081210;
--cb-trace:       #0f3320;
--cb-trace-lit:   #00ff88;
--cb-trace-dim:   #003318;
--cb-node:        #00cc66;
--cb-node-active: #88ffcc;
--cb-copper:      #b87333;
--cb-soldermask:  #0d2218;
```

## Typography
```
Font Stack:
  Display:  'VT323', 'Courier New', monospace
  Body:     'Source Code Pro', monospace
  Code:     'Source Code Pro', monospace

h1: 52px | weight 400 | tracking 0.05em | color: --cb-trace-lit | text-shadow: 0 0 20px --cb-node
h2: 38px | weight 400 | tracking 0.04em | color: --text-primary
h3: 26px | weight 400 | tracking 0.06em | color: --cb-node
h4: 18px | weight 400 | tracking 0.1em  | color: --text-primary
h5: 14px | weight 400 | tracking 0.15em | UPPERCASE | color: --cb-trace-lit
h6: 12px | weight 400 | tracking 0.2em  | UPPERCASE | color: --text-muted
body: 13px | leading: 1.8 | color: rgba(0,255,136,0.7)
```

## Border & Trace System
```css
--node-size:  4px;    /* PCB pad circles */
--trace-width: 1px;
--trace-length: 20px; /* extension from component edge */

/* Trace pattern: exits midpoint of each side, turns 90° then terminates in node circle */
/* Implemented via SVG absolute overlay or carefully placed pseudo-elements */
```
- 4 corner dots (pads) always present
- Interrupted line borders: segments with `--node-size` gap at midpoints where traces exit
- On hover: traces light up sequentially (stagger: 80ms each)

## Effects & Animation
```
Mount:         Nodes illuminate one by one, then traces fill (total: 600ms stagger)
Signal pulse:  A bright point travels from node to node along the border every 2s
Hover:         All traces go to --cb-trace-lit simultaneously
               Nodes pulse outward (scale 1 → 1.4 → 1)
Active:        Flash white on all nodes + brief trace-lit pulse
Data update:   Random "node blink" sequence on content change
```

## Component Types

| Type       | Background         | Border                          | Text                | Special Effect                             |
|------------|--------------------|---------------------------------|---------------------|--------------------------------------------|
| `default`  | `--cb-soldermask`  | `--cb-trace` 1px segmented      | `rgba(0,255,136,.7)`| 4 corner pads + trace extensions           |
| `solid`    | `--cb-trace-dim`   | `--cb-trace-lit` 1px            | `--cb-node-active`  | All traces fully lit, nodes pulse          |
| `outline`  | transparent        | `--cb-trace-lit` 1px            | `--cb-trace-lit`    | Trace "draw-in" animation on mount         |
| `ghost`    | transparent        | none                            | `--text-secondary`  | 4 corner pad dots only, no traces          |
| `inverse`  | `--cb-trace-lit`   | `--cb-soldermask` 1px           | `--cb-soldermask`   | Bright green fill — active/selected state  |
| `contrast` | `#000`             | `--cb-copper` 1px               | `--cb-copper`       | Copper-toned — hardware/physical emphasis  |
| `soft`     | `rgba(0,255,136,0.04)` | `--cb-trace` 0.5px          | `rgba(0,255,136,.5)`| Barely-there, ghost circuit                |

## Best Use Cases
Upgrade/skill trees, system diagnostics, component selection menus, tech-tree nodes
