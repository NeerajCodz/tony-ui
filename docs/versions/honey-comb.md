# VERSION 20 — HONEYCOMB

> **Codename:** `honeycomb`
> **Shape Language:** Hexagonal — pure tessellating geometry

## Philosophy
The most efficient tiling structure in nature, repurposed for a technological interface. Every surface is a hexagonal grid — the component itself is hexagonal, its background is hexagonal, its interactive cells are hexagonal. Organic efficiency meets machine precision.

## Primary Shape
```
Outer container: Hexagonal clip-path (flat-top orientation)
clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);

OR for wide rectangular content: "Hive frame" variant —
  Rectangular outer with hexagonal internal grid texture
  + hexagonal corner cuts:
  clip-path: polygon(
    3% 0%, 97% 0%,
    100% 3%, 100% 97%,
    97% 100%, 3% 100%,
    0% 97%, 0% 3%
  );  ← minimal hex chamfer

Cards/panels: Always show hexagonal bg grid beneath content
Button variant: Pure hexagon (landscape or portrait)
```

## Color Tokens
```css
--hc-bg:          #030608;
--hc-surface:     #060c10;
--hc-hex-stroke:  rgba(255, 160, 20, 0.18);   /* amber hex grid lines */
--hc-hex-fill:    rgba(255, 140, 10, 0.04);    /* amber hex cell fill */
--hc-hex-hover:   rgba(255, 160, 40, 0.15);    /* individual cell hover */
--hc-hex-active:  rgba(255, 200, 80, 0.35);    /* selected hex cell */
--hc-accent:      #ffaa00;                      /* amber — primary accent */
--hc-accent-dim:  #3d2800;
--hc-accent-bright: #ffd040;
--hc-wax:         rgba(255, 200, 60, 0.08);    /* warm internal glow */
--hc-queen:       #ff6600;                      /* special/rare highlight */
--hc-border:      rgba(255, 160, 20, 0.35);
```

## Hexagonal Background Pattern
```css
/* SVG-based hex grid — two overlapping SVG repeat patterns create honeycomb */
/* Pattern A: rows of flat-top hexagons */
background-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='60' height='104'>
  <polygon points='30,2 58,17 58,49 30,64 2,49 2,17'
           fill='rgba(255,140,10,0.04)'
           stroke='rgba(255,160,20,0.18)'
           stroke-width='1' />
  <polygon points='30,54 58,69 58,101 30,116 2,101 2,69'
           fill='rgba(255,140,10,0.04)'
           stroke='rgba(255,160,20,0.18)'
           stroke-width='1' />
</svg>");
background-size: 60px 104px;

/* Second pattern offset to create tessellation */
background-image: [above], url([same svg with x-offset 30px]);
background-position: 0 0, 30px 52px;
```

## Typography
```
Font Stack:
  Display:  'Bebas Neue', sans-serif
  Body:     'Barlow', sans-serif
  Code:     'JetBrains Mono', monospace

h1: 58px | weight 400 | tracking 0.06em | UPPERCASE | color: --hc-accent-bright
     (Bebas is naturally bold, tracking adds honeycomb cell rhythm)
h2: 42px | weight 400 | tracking 0.04em | UPPERCASE | color: --text-primary
h3: 28px | weight 400 | tracking 0.06em | UPPERCASE | color: --hc-accent
h4: 20px | weight 600 | tracking 0.08em | UPPERCASE | color: --text-primary | font: Barlow
h5: 14px | weight 600 | tracking 0.15em | UPPERCASE | color: --text-secondary | font: Barlow
h6: 11px | weight 600 | tracking 0.3em  | UPPERCASE | color: --hc-border | font: Barlow
body: 14px | weight 400 | leading: 1.7 | color: rgba(255,200,120,0.75) | font: Barlow
label: 10px | UPPERCASE | tracking: 0.4em | color: --hc-accent | font: Barlow
```

## Hex Cell Interactions
```css
/* Individual hex cells in the background pattern can be highlighted:
   Done via canvas overlay or SVG layer with individual polygon elements
   Each cell responds to hover with --hc-hex-hover fill
   Creates an interactive honeycomb surface where hovering "fills" cells */

/* For card backgrounds: cells near cursor brighten (JS-powered proximity highlight)
   Radius: 80px, falloff: cosine curve */
```

## Effects & Animation
```
Background:     Static honeycomb grid always visible
Mount:          Cells "fill in" expanding from center outward — each hex cell fades in
                with radial stagger (distance from center determines delay: dist × 20ms)
Honey drip:     On certain states, amber "drop" appears at a hex cell edge and falls
                (CSS + JS, purely decorative, optional)
Cell ripple:    Click triggers hex ripple — clicked cell flashes, neighbors dim then recover
Hover (card):   Nearest hex cells to cursor illuminate with --hc-hex-hover
Hover (button): The hexagonal button's cells pulse once inward
Active:         All cells flash --hc-hex-active simultaneously, then settle
Queen cell:     Special "marked" cells use --hc-queen color — used for featured content
Ambient:        Occasional random cell briefly brightens (1–2 cells every 3–5s)
```

## Component Types

| Type       | Background                    | Grid               | Border                      | Text                      | Cells                          |
|------------|-------------------------------|--------------------|-----------------------------|---------------------------|--------------------------------|
| `default`  | `--hc-surface` + hex grid     | dim amber grid     | `--hc-border` 1px chamfer    | rgba(255,200,120,.75)     | Hover: --hc-hex-hover          |
| `solid`    | `--hc-wax` + bright hex grid  | bright amber grid  | `--hc-accent` 1px            | `--hc-accent-bright`      | Hover: --hc-hex-active         |
| `outline`  | transparent + faint hex grid  | very dim grid      | `--hc-accent` 1px chamfer    | `--hc-accent`             | No cell hover                  |
| `ghost`    | transparent                   | none               | none                         | rgba(255,200,120,.5)      | None                           |
| `inverse`  | `--hc-accent` 20% + hex grid  | dark inverted grid | none                         | `--hc-bg`                 | Inverted (dark cells, bg lit)  |
| `contrast` | `#000` + bright hex grid      | `--hc-queen` grid  | `--hc-queen` 2px             | `--hc-queen`              | Queen-cell highlight           |
| `soft`     | `rgba(255,140,10,0.03)` + faint| barely-visible grid| `rgba(255,160,20,0.12)`      | rgba(255,180,80,.5)       | No cell hover                  |

## Hex Button (Special Variant)
```css
/* Pure hexagonal button — no rectangular fallback */
/* clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%) */
/* aspect-ratio approximately 1.15:1 */
/* Used for: confirm actions, cell selections, hex-grid navigation */
```

## Best Use Cases
Strategy game UI, resource management, upgrade hex-grids, map cells, faction/team selection, ability panels, inventory hex-grids
