# VERSION 05 — DATA PANEL

> **Codename:** `data-panel`
> **Shape Language:** Trapezoid header tab + sharp rectangle body

## Philosophy
Inspired by oscilloscope screens and command consoles. The component is a vessel for information. The header "tab" is a trapezoid — a physical affordance suggesting a real-world interface.

## Primary Shape
```
Body: Sharp rectangle (0px radius)
Header tab: Trapezoid using clip-path
  clip-path: polygon(0 0, calc(100% - 16px) 0, 100% 100%, 0 100%)
  — creates a parallelogram/angled tab

The tab bleeds above the panel body by --header-height.
```

## Color Tokens
```css
--dp-bg:           #060810;
--dp-surface:      #0c1020;
--dp-header-bg:    #101828;
--dp-header-accent:#002244;
--dp-border:       #1e2a44;
--dp-accent:       #0088ff;
--dp-accent-dim:   #003366;
--dp-data:         #66aaff;
--dp-critical:     #ff4400;
--dp-normal:       #33cc88;
--dp-scan:         rgba(0, 136, 255, 0.04);
```

## Typography
```
Font Stack:
  Display:  'Exo 2', sans-serif
  Body:     'JetBrains Mono', monospace
  Code:     'JetBrains Mono', monospace

h1: 44px | weight 800 | tracking -0.03em | UPPERCASE | color: --text-primary
h2: 32px | weight 700 | tracking -0.01em | color: --text-primary
h3: 22px | weight 700 | tracking 0.04em  | UPPERCASE | color: --dp-accent
h4: 16px | weight 600 | tracking 0.08em  | UPPERCASE | color: --dp-data
h5: 13px | weight 500 | tracking 0.15em  | UPPERCASE | color: --text-secondary
h6: 11px | weight 500 | tracking 0.25em  | UPPERCASE | color: --text-muted
body: 13px | leading: 1.6 | color: --dp-data | font: mono
label: 10px | UPPERCASE | tracking 0.4em | color: --dp-accent
```

## Special Features
- `--header-height: 28px` — trapezoid tab
- `--accent-opacity: 0.8`
- **Scanline:** Horizontal bar (4px tall, `--dp-scan` color) sweeps top-to-bottom every 3s using `@keyframes scan`
- **Corner accents:** 8px right-angle decorators at each body corner
- **Status pips:** Row of 3–5 small colored dots in header right side

## Effects & Animation
```
Mount:         Header slides in from top, body expands downward (stagger 80ms)
Scanline:      Continuous slow sweep, pauses 1s at top before repeating
Hover:         Border transitions to --dp-accent, corner accents brighten
Data change:   Brief highlight flash on changed cell
Focus:         Scanline speeds up (1.5s instead of 3s)
```

## Component Types

| Type       | Background         | Header BG            | Border                | Text              | Special                              |
|------------|--------------------|-----------------------|----------------------|-------------------|--------------------------------------|
| `default`  | `--dp-surface`     | `--dp-header-bg`      | `--dp-border` 1px    | `--dp-data`       | Standard scanline                    |
| `solid`    | `--dp-header-accent`| `--dp-accent-dim`    | `--dp-accent` 1px    | `--dp-accent`     | Scanline brighter                    |
| `outline`  | transparent        | transparent           | `--dp-accent` 1px    | `--dp-accent`     | Scanline visible through bg          |
| `ghost`    | transparent        | transparent           | none                  | `--text-secondary`| Header tab outline only              |
| `inverse`  | `--dp-accent`      | `--dp-bg`             | `--dp-bg` 1px        | `--dp-bg`         | Blue-fill inverted state             |
| `contrast` | `#000`             | `#001133`             | `--dp-critical` 1px  | `--dp-critical`   | Red alert mode                       |
| `soft`     | `rgba(0,136,255,0.05)` | `rgba(0,136,255,0.08)` | `--dp-border` 0.5px | `--text-secondary`| Subdued panel                       |

## Best Use Cases
Telemetry readouts, inventory panels, ship/vehicle stats, log consoles, mission briefings
