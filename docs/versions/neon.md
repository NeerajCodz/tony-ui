# VERSION 13 — NEON OUTLINE

> **Codename:** `neon-outline`
> **Shape Language:** Sharp rectangle — the border glows like a physical neon tube

## Philosophy
High-energy street aesthetics. Neon signs don't have rounded corners — they're bent glass tubes with visible light bleeding outward. This component looks like it was made from actual neon.

## Primary Shape
```
Sharp rectangle (border-radius: 0) for maximum neon tube authenticity.
The "tube" appearance is achieved via:
  — Main border: 2px solid accent
  — Inner shadow: inset 0 0 6px accent (tube interior glow)
  — Outer shadow: 0 0 8px accent, 0 0 20px accent/50%, 0 0 40px accent/20%
  — Second box-shadow "tube" color for multi-color neon
```

## Color Tokens
```css
/* Base neon palette — component picks 1 primary neon color */
--ne-cyan:    #00f5ff;
--ne-pink:    #ff0090;
--ne-yellow:  #ffee00;
--ne-green:   #00ff55;
--ne-orange:  #ff6600;
--ne-purple:  #cc00ff;

/* Default: cyan primary, pink secondary */
--ne-primary: var(--ne-cyan);
--ne-secondary: var(--ne-pink);

--ne-bg:      #050508;
--ne-tube-r:  4px;      /* tube roundness */
--ne-bright:  1.2;      /* brightness multiplier */
```

## Typography
```
Font Stack:
  Display:  'Bungee', 'Black Han Sans', sans-serif
  Body:     'Barlow Condensed', sans-serif
  Code:     'Share Tech Mono', monospace

h1: 60px | weight 900 | tracking 0.06em | UPPERCASE | color: --ne-primary
     text-shadow: 0 0 10px --ne-primary, 0 0 30px --ne-primary, 0 0 60px --ne-primary (neon glow)
h2: 42px | weight 900 | tracking 0.04em | UPPERCASE | color: --text-primary
h3: 28px | weight 700 | tracking 0.06em | UPPERCASE | color: --ne-primary
h4: 20px | weight 700 | tracking 0.1em  | UPPERCASE | color: --text-primary
h5: 15px | weight 700 | tracking 0.2em  | UPPERCASE | color: --ne-secondary
h6: 12px | weight 600 | tracking 0.35em | UPPERCASE | color: rgba(255,255,255,0.5)
body: 14px | weight 400 | leading: 1.6  | color: rgba(230,240,255,0.8) | font: Barlow Condensed
```

## Neon Tube Effect
```css
/* Multi-layer box-shadow for neon tube simulation */
box-shadow:
  inset 0 0 6px var(--ne-primary),          /* inner tube glow */
  0 0 var(--tube-r) var(--ne-primary),       /* immediate glow */
  0 0 calc(var(--tube-r) * 4) var(--ne-primary), /* mid glow */
  0 0 calc(var(--tube-r) * 10) rgba(ne-primary, 0.3); /* far diffusion */
```

## Effects & Animation
```
Mount:        "Warm-up" flicker sequence (3–4 quick flickers, then steady)
              Implemented as opacity keyframes: 0→0.3→1→0.7→1 (400ms total)
Hover:        Neon brightens (filter: brightness(1.3))
              Secondary color pulses on border
Active:       Intense flash then dim to 80% (simulates neon surge)
Buzz:         Occasional random very brief flicker (1% opacity for 1 frame, every 4–10s)
Off state:    Can animate to "off" state — dim orange glow with buzzing (damaged neon tube)
```

## Component Types

| Type       | Background    | Border                         | Glow                         | Text             |
|------------|---------------|--------------------------------|------------------------------|------------------|
| `default`  | `--ne-bg`     | `--ne-primary` 2px              | Primary tube glow            | `--text-primary` |
| `solid`    | `rgba(primary,0.12)` | `--ne-primary` 2px       | Intense primary glow         | `--ne-primary`   |
| `outline`  | transparent   | `--ne-primary` 1px              | Soft outer glow only         | `--ne-primary`   |
| `ghost`    | transparent   | none                            | none                         | `--text-secondary`|
| `inverse`  | `--ne-primary`| `--ne-bg` 2px                   | Inverted: inward glow only   | `--ne-bg`        |
| `contrast` | `#000`        | `--ne-secondary` 2px            | Secondary (pink) glow        | `--ne-secondary` |
| `soft`     | `rgba(primary,0.05)` | `rgba(primary,0.3)` 1px | Faint diffusion glow         | `rgba(primary,.6)`|

## Best Use Cases
CTAs, purchase buttons, alert banners, game storefront items, nightlife UI
