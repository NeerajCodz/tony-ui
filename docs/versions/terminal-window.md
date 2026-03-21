# VERSION 19 — TERMINAL WINDOW

> **Codename:** `terminal-window`
> **Shape Language:** Sharp rectangle with distinct title bar — CRT terminal

## Philosophy
Pre-cyberpunk retro-computing aesthetics. The component IS a terminal — phosphor screen, scanlines, cursor blink. Monochrome with a single phosphor color. Raw. Authentic.

## Primary Shape
```
Outer container: Sharp rectangle (0 radius)
Title bar: Separate band at top (--header-height: 24px)
  — contains 3 "traffic light" dots (□□□) or window control marks
  — or: text-based title like "> SYSTEM_TERMINAL_v2.4"
Body: CRT-like surface with scanlines and curvature
  border-radius: 0 (outer), optional inner: 4px (CRT glass curve)
```

## Color Tokens — Phosphor Sets (pick one per usage)
```css
/* Phosphor Green (P1) — default */
--tm-phosphor:   #33ff66;
--tm-phosphor-dim:#0d4420;
--tm-bg:         #020806;
--tm-scanline:   rgba(0, 0, 0, 0.35);

/* Phosphor Amber (P3) — alternate */
--tm-phosphor:   #ffb300;
--tm-phosphor-dim:#3d2800;
--tm-bg:         #080600;

/* Phosphor White (P4) — alternate */
--tm-phosphor:   #d8e8f0;
--tm-phosphor-dim:#1a2830;
--tm-bg:         #040608;
```

## Typography
```
Font Stack:
  ALL: 'VT323', 'Courier New', monospace
  (authentic CRT font — pixelated character ROM)

h1: 48px | weight 400 | tracking 0.05em | color: --tm-phosphor
     text-shadow: 0 0 8px --tm-phosphor (CRT phosphor glow)
h2: 32px | weight 400 | tracking 0.04em | color: --tm-phosphor
h3: 22px | weight 400 | tracking 0.06em | color: --tm-phosphor | opacity: 0.9
h4: 16px | weight 400 | tracking 0.1em  | UPPERCASE | color: --tm-phosphor | opacity: 0.8
h5: 14px | weight 400 | tracking 0.1em  | color: --tm-phosphor-dim | opacity: 1
h6: 12px | weight 400 | tracking 0.15em | color: --tm-phosphor-dim
body: 15px | leading: 1.8 | color: --tm-phosphor | opacity: 0.85
cursor: blinking block █ via ::after
```

## CRT Effects
```css
/* Scanlines: repeating black lines */
--scanline-opacity: 0.1;
background: repeating-linear-gradient(
  0deg,
  transparent, transparent 2px,
  rgba(0,0,0,--scanline-opacity) 2px, rgba(0,0,0,--scanline-opacity) 3px
);

/* CRT curvature: subtle border-radius on inner (2%), plus slight edge vignette */
--crt-curvature: 2%;

/* Flicker: very subtle opacity animation */
@keyframes crt-flicker {
  0%, 97%, 100% { opacity: 1; }
  98% { opacity: 0.97; }
  99% { opacity: 0.99; }
}
animation: crt-flicker 0.15s infinite;

/* Phosphor glow: text-shadow on all text elements */
```

## Effects & Animation
```
Mount:         "Power on" sequence: screen brightens from center outward (radial gradient expands, 300ms)
               Optionally: horizontal scanline wipe from top to bottom
Typing effect: Text content renders character-by-character (JS: setInterval + innerHTML)
               --type-speed: 30ms per character
Cursor blink:  Blinking █ cursor at text end (CSS animation, 500ms period)
CRT flicker:   Continuous subtle opacity oscillation
Hover:         Scanlines reduce opacity (clearer view), phosphor brightens slightly
Active:        Brief "static burst" (noise texture appears for 50ms)
Scroll:        Content scrolls like a real terminal (no momentum scrolling)
```

## Component Types

| Type         | Phosphor Set  | Title Bar BG         | Body BG          | Scanlines | Special                             |
|--------------|---------------|----------------------|------------------|-----------|-------------------------------------|
| `default`    | Green (P1)    | `--tm-phosphor-dim`  | `--tm-bg`        | 0.1       | Standard CRT                        |
| `solid`      | Green (P1)    | `--tm-phosphor` 30%  | `rgba(P1, 0.08)` | 0.05      | Brighter phosphor, lighter screen   |
| `outline`    | Amber (P3)    | transparent          | transparent      | 0.06      | Amber outline only, no fill         |
| `ghost`      | White (P4)    | transparent          | transparent      | none      | Clean white-phosphor ghost          |
| `inverse`    | Any           | `--tm-phosphor`      | `--tm-bg`        | 0.15      | Bright header strip inverted        |
| `contrast`   | White (P4)    | `#111`               | `#000`           | 0.2       | Maximum contrast terminal           |
| `soft`       | Green (P1)    | transparent          | `rgba(bg,0.3)`   | 0.05      | Dim/powered-down state              |

## Best Use Cases
Dev consoles, game terminals, retro UI sections, password prompts, log streams
