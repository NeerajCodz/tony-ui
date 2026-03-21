# VERSION 17 — TACTICAL HUD

> **Codename:** `tactical-hud`
> **Shape Language:** Corner brackets only — the component exists by implication

## Philosophy
Minimal targeting reticle aesthetics. Only the four corners are marked — the component outline is implied by context. Derived from military targeting systems and AR HUD displays.

## Primary Shape
```
NO full border. Only corner brackets:
Each corner has an L-shaped mark:
  — top-left:     border-top + border-left
  — top-right:    border-top + border-right
  — bottom-left:  border-bottom + border-left
  — bottom-right: border-bottom + border-right

--bracket-size: 15px  (length of each arm)
--bracket-width: 2px
--pip-count: 4  (dots along midpoints of each edge)

Small rectangular "pip" markers at midpoints of each side.
```

## Color Tokens
```css
--th-bg:         #030506;
--th-surface:    transparent; /* almost always transparent */
--th-bracket:    #00ffaa;
--th-bracket-dim:#006644;
--th-pip:        #00cc88;
--th-pip-dim:    #004433;
--th-accent:     #00ffaa;
--th-danger:     #ff4400;
--th-text:       rgba(0, 240, 160, 0.9);
--th-text-dim:   rgba(0, 180, 100, 0.6);
```

## Typography
```
Font Stack:
  Display:  'Chakra Petch', sans-serif
  Body:     'Chakra Petch', sans-serif
  Code:     'Fira Code', monospace

h1: 46px | weight 700 | tracking 0.1em | UPPERCASE | color: --th-accent
     (sparse, military-stencil feel)
h2: 32px | weight 600 | tracking 0.1em | UPPERCASE | color: --text-primary
h3: 22px | weight 600 | tracking 0.12em | UPPERCASE | color: --th-accent
h4: 16px | weight 600 | tracking 0.15em | UPPERCASE | color: --text-secondary
h5: 12px | weight 500 | tracking 0.2em  | UPPERCASE | color: --th-text-dim
h6: 10px | weight 500 | tracking 0.3em  | UPPERCASE | color: --th-pip-dim
body: 12px | leading: 1.7 | color: --th-text-dim | tracking: 0.05em
label: 9px | UPPERCASE | tracking: 0.5em | color: --th-bracket-dim
```

## Pip & Bracket Details
```css
/* Pips: 4px × 4px squares at edge midpoints */
/* Brackets: L-shaped, 15px arm length, 2px width */
/* Small number labels near corners (optional): "00A", "00B" etc. */
/* Targeting crosshair variant: center crosshair overlay (optional) */
```

## Effects & Animation
```
Mount:         Brackets snap in from center outward (scale 0 → 1, 200ms, snap ease)
Hover:         Brackets brighten, pips blink once
               Optional: additional bracket appears slightly outside the main one
Lock:          "Locked-on" state: brackets animate to tighten inward (track target)
Active:        All brackets flash white simultaneously
Scan:          Horizontal scan line passes through component every 2s
Danger state:  --th-danger replaces --th-bracket, brackets pulse rapidly
```

## Component Types

| Type       | Background     | Brackets               | Pips              | Text                | Special                     |
|------------|----------------|------------------------|-------------------|---------------------|-----------------------------|
| `default`  | transparent    | `--th-bracket`         | `--th-pip`        | `--th-text-dim`     | Standard corner marks       |
| `solid`    | `rgba(0,255,170,0.06)`| `--th-accent`   | `--th-accent`     | `--th-accent`       | Filled bg reveals           |
| `outline`  | transparent    | `--th-bracket`         | none              | `--th-accent`       | Clean brackets, no pips     |
| `ghost`    | transparent    | `--th-bracket-dim`     | none              | `--th-text-dim`     | Barely-there brackets       |
| `inverse`  | `--th-accent`  | `--th-bg`              | `--th-bg`         | `--th-bg`           | Filled, brackets invert     |
| `contrast` | `#000`         | `--th-danger`          | `--th-danger`     | `--th-danger`       | Alert/threat state          |
| `soft`     | transparent    | `--th-bracket-dim`     | `--th-pip-dim`    | `--th-text-dim` 50% | Passive/idle state          |

## Best Use Cases
Target indicators, tracking reticles, selection states, enemy health bars, vehicle HUD

---

---
