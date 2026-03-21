# VERSION 10 — HOLO FRAME

> **Codename:** `holo-frame`
> **Shape Language:** Parallelogram — skewed projection artifact

## Philosophy
The component is being projected from a beam emitter below. It appears as a slightly unstable 3D plane hanging in space. Thin, lightweight, shimmering — like a hologram from a sci-fi film.

## Primary Shape
```
Parallelogram via clip-path or CSS transform skew:
clip-path: polygon(var(--skew) 0%, 100% 0%, calc(100% - var(--skew)) 100%, 0% 100%);
--skew: 16px (standard)

OR: transform: skewX(-4deg) on outer, skewX(4deg) on inner to compensate.

Base projector: two small triangular "nodes" at bottom edge — ::after pseudo-elements
```

## Color Tokens
```css
--hf-bg:            #04060c;
--hf-surface:       rgba(0, 180, 255, 0.04);
--hf-border-main:   rgba(0, 220, 255, 0.6);
--hf-border-dim:    rgba(0, 120, 200, 0.2);
--hf-scanline:      rgba(0, 200, 255, 0.06);
--hf-glow-bottom:   rgba(0, 150, 255, 0.5);
--hf-chromatic-r:   rgba(255, 0, 80, 0.15);
--hf-chromatic-b:   rgba(0, 80, 255, 0.15);
--hf-text:          rgba(160, 220, 255, 0.9);
```

## Typography
```
Font Stack:
  Display:  'Orbitron', sans-serif
  Body:     'Exo 2', sans-serif
  Code:     'Share Tech Mono', monospace

h1: 48px | weight 900 | tracking 0.08em | UPPERCASE | color: rgba(160,220,255,1)
     text-shadow: 2px 0 0 --hf-chromatic-r, -2px 0 0 --hf-chromatic-b (chromatic aberration)
h2: 36px | weight 700 | tracking 0.05em | UPPERCASE | color: --hf-text
h3: 24px | weight 600 | tracking 0.08em | color: rgba(0,220,255,0.9)
h4: 18px | weight 600 | tracking 0.1em  | UPPERCASE | color: --hf-text
h5: 13px | weight 500 | tracking 0.2em  | UPPERCASE | color: rgba(100,180,220,0.7)
h6: 11px | weight 400 | tracking 0.3em  | UPPERCASE | color: rgba(80,140,180,0.6)
body: 13px | leading: 1.7 | color: --hf-text | font: --exo2
```

## Special Effects
```css
/* Scanlines: repeating horizontal lines over content */
background: repeating-linear-gradient(
  0deg,
  transparent,
  transparent calc(var(--line-height) - 1px),
  var(--hf-scanline) var(--line-height)
);
--line-height: 3px;

/* Bottom glow: radial gradient from bottom edge */
::after { background: radial-gradient(ellipse at 50% 100%, --hf-glow-bottom, transparent 70%); }

/* Chromatic aberration on text: text-shadow offset trick */
```

## Effects & Animation
```
Flicker:        Random opacity pulses (0.95→1, every 2–6s random)
                CSS animation with multiple keyframe stops
Scanline:       No movement — scanlines are static texture
Vertical glitch: Occasionally (8s interval) content shifts ±2px vertically (1 frame)
Mount:          Fade up from 30% opacity (300ms), glow intensifies from below
Hover:          Scanlines intensify, border brightens
Active:         Full-white flash (1 frame), then recover (50ms)
```

## Component Types

| Type       | Background              | Border                         | Glow              | Text                |
|------------|-------------------------|--------------------------------|-------------------|---------------------|
| `default`  | `--hf-surface`          | `--hf-border-main` parallelogram| Bottom glow low   | `--hf-text`         |
| `solid`    | `rgba(0,180,255,0.12)`  | `--hf-border-main` bright       | Bottom glow high  | `rgb(160,220,255)`  |
| `outline`  | transparent             | `--hf-border-main` 1px          | none              | `rgba(0,220,255,.8)`|
| `ghost`    | transparent             | `--hf-border-dim` 1px           | none              | `rgba(100,180,220,.6)`|
| `inverse`  | `rgba(0,220,255,0.25)`  | none                            | Strong bottom glow| `--hf-bg`           |
| `contrast` | `rgba(0,0,0,0.9)`       | `rgba(0,220,255,1)` 2px         | Full bottom glow  | `rgb(200,240,255)`  |
| `soft`     | transparent             | `--hf-border-dim`               | none              | `rgba(100,160,200,.6)` |

## Best Use Cases
Character info cards, floating objectives, NPC dialogue, quest log entries, help tooltips

---

---

# VERSION 11 — LARGE

> **Codename:** `large`
> **Shape Language:** Big rounded rectangle — intentionally generous

## Philosophy
Prominence through scale. Used for hero sections, primary CTAs, major content blocks. No cyberpunk decoration — the scale IS the statement.

## Primary Shape
```
border-radius: 16px
padding: 32px (standard), 48px (hero)
No clip-path.
```

## Color Tokens
```css
--lg-bg:       #0a0b12;
--lg-surface:  #12141e;
--lg-border:   #1e2038;
--lg-accent:   #7c6fff;
--lg-text:     #e0e2f0;
```

## Typography
```
Font Stack:
  Display:  'Clash Display', 'Syne', sans-serif
  Body:     'Satoshi', 'Plus Jakarta Sans', sans-serif

h1: 80px | weight 800 | tracking -0.05em | color: --text-primary
h2: 56px | weight 700 | tracking -0.04em | color: --text-primary
h3: 40px | weight 700 | tracking -0.02em | color: --text-primary
h4: 28px | weight 600 | tracking -0.01em | color: --text-primary
h5: 20px | weight 600 | tracking 0em     | color: --text-secondary
h6: 16px | weight 500 | tracking 0.02em  | color: --lg-accent
body: 16px | leading: 1.7 | color: --lg-text
  — everything scaled up for large components
```

## Component Types

| Type       | Background    | Border              | Text         |
|------------|---------------|---------------------|--------------|
| `default`  | `--lg-surface`| `--lg-border` 1px   | `--lg-text`  |
| `solid`    | `--lg-accent` | none                | `#fff`       |
| `outline`  | transparent   | `--lg-accent` 2px   | `--lg-accent`|
| `ghost`    | transparent   | none                | `--lg-text`  |
| `inverse`  | `--lg-text`   | none                | `--lg-bg`    |
| `contrast` | `#fff`        | none                | `#000`       |
| `soft`     | `rgba(124,111,255,0.08)` | none | `--lg-text` |

## Best Use Cases
Hero sections, feature highlights, primary marketing panels, onboarding screens
