# CYBERPUNK UI DESIGN SYSTEM
### 20-Version Component Specification

> **System Philosophy:** Sharp. Bold. Dangerous. Every version lives in a dark, high-contrast world where shape, light, and motion communicate function. The system is built on a foundation of aggressive geometry — rounded corners are earned, not default.

---

## GLOBAL FOUNDATIONS

### Base Color Palette
```css
/* Global tokens used across all themes */
--bg-void:        #050508;     /* Deepest background */
--bg-surface:     #0a0b0f;     /* Card/panel surface */
--bg-elevated:    #10121a;     /* Elevated surfaces */
--bg-overlay:     #181b26;     /* Overlays, dropdowns */

/* Neutral text scale */
--text-primary:   #f0f2ff;
--text-secondary: #8a8fa8;
--text-muted:     #4a4e66;
--text-disabled:  #2a2c3a;

/* Theme accent — each version overrides these */
--accent-primary:   #00f5ff;   /* Cyan — system default */
--accent-secondary: #ff2d78;   /* Hot pink — danger/action */
--accent-tertiary:  #7b2fff;   /* Purple — system/special */
--accent-warning:   #ffb800;   /* Amber — warning */
--accent-success:   #00ff88;   /* Green — confirm */
```

### Global Typography Scale

All versions share this typographic hierarchy. Individual versions may override `font-family` only.

```css
/* — Display Typefaces (version-specific) —
   Each version specifies its own font stack below.
   Global fallback: 'Courier New', monospace */

/* Scale */
--font-size-xs:   10px;
--font-size-sm:   12px;
--font-size-base: 14px;
--font-size-md:   16px;
--font-size-lg:   20px;
--font-size-xl:   28px;
--font-size-2xl:  40px;
--font-size-3xl:  56px;
--font-size-4xl:  80px;

/* Weight */
--font-weight-thin:     100;
--font-weight-light:    300;
--font-weight-regular:  400;
--font-weight-medium:   500;
--font-weight-bold:     700;
--font-weight-black:    900;

/* Letter spacing */
--tracking-tight:   -0.03em;
--tracking-normal:   0em;
--tracking-wide:     0.08em;
--tracking-wider:    0.15em;
--tracking-widest:   0.3em;

/* Line height */
--leading-tight:  1.1;
--leading-snug:   1.3;
--leading-normal: 1.5;
--leading-loose:  1.8;
```

### Global Heading Hierarchy (Base — versions override font-family & sizing)

```
h1: --font-size-3xl / 56px  | weight: 900 | tracking: --tracking-tight | leading: --leading-tight
h2: --font-size-2xl / 40px  | weight: 700 | tracking: --tracking-tight | leading: --leading-tight
h3: --font-size-xl  / 28px  | weight: 700 | tracking: --tracking-normal | leading: --leading-snug
h4: --font-size-lg  / 20px  | weight: 600 | tracking: --tracking-wide  | leading: --leading-snug
h5: --font-size-md  / 16px  | weight: 600 | tracking: --tracking-wider | leading: --leading-normal
h6: --font-size-base/ 14px  | weight: 500 | tracking: --tracking-widest | leading: --leading-normal

body:    --font-size-base / 14px | weight: 400 | leading: --leading-normal
caption: --font-size-sm  / 12px | weight: 400 | leading: --leading-loose
label:   --font-size-xs  / 10px | weight: 500 | tracking: --tracking-widest | UPPERCASE
code/mono: same font-size as context, monospace stack

---

---

# COMPONENT TYPE SYSTEM — GLOBAL REFERENCE

All 20 versions implement these 7 types. The visual treatment maps to the theme, but the **semantic meaning** is constant across all versions:

| Type       | Semantic Meaning                              | Default Hierarchy |
|------------|-----------------------------------------------|-------------------|
| `default`  | Standard/resting state. Primary use.           | 1st               |
| `solid`    | Filled/active state. High visual weight.        | 2nd               |
| `outline`  | Bordered/secondary state. Clear but lighter.    | 3rd               |
| `ghost`    | Minimal. Blend with background.                 | 4th               |
| `inverse`  | Reversed contrast. Used for selected/active.    | special           |
| `contrast` | Highest impact. Danger, warning, featured.      | special           |
| `soft`     | Muted/subdued. Background elements, disabled.   | lowest            |

---

# TYPOGRAPHY — FONT STACK SUMMARY BY VERSION

| Version           | Display Font              | Body Font              | Code Font           |
|-------------------|---------------------------|------------------------|---------------------|
| Angular Corner    | Rajdhani / Orbitron       | Share Tech Mono        | Share Tech Mono     |
| Border            | IBM Plex Mono             | IBM Plex Mono          | IBM Plex Mono       |
| Circuit Board     | VT323                     | Source Code Pro        | Source Code Pro     |
| Compact           | JetBrains Mono            | JetBrains Mono         | JetBrains Mono      |
| Data Panel        | Exo 2                     | JetBrains Mono         | JetBrains Mono      |
| Default           | Plus Jakarta Sans         | Plus Jakarta Sans      | JetBrains Mono      |
| Energy Shield     | Audiowide / Exo 2         | Exo 2                  | JetBrains Mono      |
| Ghost             | Syne                      | Syne                   | JetBrains Mono      |
| Glass Morphism    | Outfit                    | Outfit                 | JetBrains Mono      |
| Holo Frame        | Orbitron                  | Exo 2                  | Share Tech Mono     |
| Large             | Clash Display / Syne      | Satoshi                | JetBrains Mono      |
| Matrix Grid       | Matrix Code NFI / Share Tech | Share Tech Mono     | Share Tech Mono     |
| Neon Outline      | Bungee                    | Barlow Condensed       | Share Tech Mono     |
| Padding           | Cormorant Garamond (serif)| DM Sans                | JetBrains Mono      |
| Quantum Gate      | Syncopate                 | Josefin Sans           | Fira Code           |
| Raised            | Martian Mono              | Martian Mono           | Martian Mono        |
| Tactical HUD      | Chakra Petch              | Chakra Petch           | Fira Code           |
| Tech Panel        | Saira Condensed           | Saira                  | Overpass Mono       |
| Terminal Window   | VT323                     | VT323                  | VT323               |
| Honeycomb         | Bebas Neue                | Barlow                 | JetBrains Mono      |

---

# SHAPE QUICK REFERENCE

| Version           | Primary Shape              | Key Geometry Tool                     |
|-------------------|----------------------------|---------------------------------------|
| Angular Corner    | Octagon                    | `clip-path: polygon (8-point)`        |
| Border            | Sharp Rectangle            | segmented `border` + corner squares   |
| Circuit Board     | Rectangle + Trace Ext.     | pseudo-element SVG traces             |
| Compact           | Tight Rectangle (2px)      | standard border-radius                |
| Data Panel        | Rect + Trapezoid Tab       | `clip-path` on header tab             |
| Default           | Rounded Rectangle (6-8px)  | `border-radius`                       |
| Energy Shield     | Hexagon / Plasma Edge      | `clip-path: polygon (6-point)`        |
| Ghost             | Invisible → Sharp Rect     | transparent, reveals on hover         |
| Glass Morphism    | Frosted Rounded Rect       | `backdrop-filter: blur`               |
| Holo Frame        | Parallelogram              | `clip-path: polygon (skewed rect)`    |
| Large             | Large Rounded Rect (16px)  | `border-radius: 16px`                 |
| Matrix Grid       | Sharp Rectangle + Grid     | background-image grid pattern         |
| Neon Outline      | Sharp Rectangle            | `box-shadow` multi-layer neon         |
| Padding           | Rounded Rect (8px)         | `padding` focus, minimal border       |
| Quantum Gate      | Folded-Corner Rect         | `clip-path: polygon (opposing cuts)`  |
| Raised            | Sharp Rect (4px)           | `box-shadow` hard offset              |
| Tactical HUD      | Implied Rect (brackets)    | `:before/:after` L-shapes             |
| Tech Panel        | Rect + Inset Bevel         | double border + `box-shadow: inset`   |
| Terminal Window   | Sharp Rect + Title Bar     | separate header `div` + CRT effects   |
| Honeycomb         | Hexagon / Chamfered Rect   | `clip-path: polygon (6-point / 8-pt)` |

---

*End of CYBERPUNK UI DESIGN SYSTEM v1.0 — 20 Versions*