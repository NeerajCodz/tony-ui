# VERSION 09 — GLASS MORPHISM

> **Codename:** `glass-morphism`
> **Shape Language:** Frosted rounded rectangle — depth through transparency

## Philosophy
The UI exists in layers. Components float above a context layer that bleeds through them. Clean, modern, premium — the cyberpunk glass aesthetic (think `Blade Runner 2049` UI panels).

## Primary Shape
```
border-radius: 12px (standard), 16px (large card)
backdrop-filter: blur(16px) saturate(180%)
Background: rgba(255, 255, 255, 0.04) to rgba(16, 20, 36, 0.6)
```

## Color Tokens
```css
--gl-glass-bg:     rgba(12, 16, 28, 0.55);
--gl-glass-border: rgba(255, 255, 255, 0.08);
--gl-glass-shine:  rgba(255, 255, 255, 0.12);
--gl-accent:       #4fc3f7;
--gl-accent-dim:   rgba(79, 195, 247, 0.15);
--gl-frost-dark:   rgba(4, 8, 20, 0.75);
--gl-frost-light:  rgba(20, 30, 60, 0.4);
```

## Glass Effect
```css
background:       var(--gl-glass-bg);
backdrop-filter:  blur(16px) saturate(180%);
border:           1px solid var(--gl-glass-border);
/* Top-edge shine via ::before */
::before {
  background: linear-gradient(180deg, var(--gl-glass-shine) 0%, transparent 40%);
  /* horizontal stripe at top — simulates light hitting glass edge */
}
```

## Typography
```
Font Stack:
  Display:  'Outfit', sans-serif
  Body:     'Outfit', sans-serif
  Code:     'JetBrains Mono', monospace

h1: 52px | weight 800 | tracking -0.04em | color: rgba(240,248,255,0.95)
h2: 38px | weight 700 | tracking -0.03em | color: rgba(240,248,255,0.9)
h3: 26px | weight 600 | tracking -0.01em | color: rgba(200,228,255,0.85)
h4: 18px | weight 600 | tracking 0em     | color: rgba(200,228,255,0.8)
h5: 14px | weight 500 | tracking 0.04em  | color: rgba(140,180,220,0.7)
h6: 12px | weight 400 | tracking 0.1em   | color: rgba(100,140,180,0.6)
body: 14px | leading: 1.7 | color: rgba(180,210,240,0.75)
```

## Effects & Animation
```
Mount:          Blur starts at 4px and increases to 16px (350ms ease-out)
                Background opacity 0→target (350ms)
Hover:          Glass lightens slightly, shine stripe brightens
                Border opacity increases from 0.08 → 0.18
Tilt:           3D perspective tilt following cursor (CSS perspective + rotateX/Y, max ±5°)
Active:         Brief opacity flash
```

## Component Types

| Type       | Background                    | Blur    | Border                        | Special                                      |
|------------|-------------------------------|---------|-------------------------------|----------------------------------------------|
| `default`  | `--gl-glass-bg`               | 16px    | `--gl-glass-border`           | Top-edge shine                               |
| `solid`    | `--gl-frost-dark`             | 24px    | `rgba(255,255,255,0.15)`      | Darker frost, stronger blur                  |
| `outline`  | `rgba(255,255,255,0.02)`      | 8px     | `rgba(79,195,247,0.4)` 1px    | Accent-tinted outline, light blur            |
| `ghost`    | transparent                   | none    | `rgba(255,255,255,0.06)`      | No blur — just border                        |
| `inverse`  | `rgba(79,195,247,0.15)`       | 12px    | `rgba(79,195,247,0.3)`        | Accent-tinted glass                          |
| `contrast` | `rgba(0,0,0,0.85)`            | 0px     | `rgba(255,255,255,0.25)`      | Solid dark — maximum readability             |
| `soft`     | `rgba(12,16,28,0.25)`         | 8px     | `rgba(255,255,255,0.04)`      | Ultra-light glass — nearly invisible         |

## Best Use Cases
Floating panels, modals on visual backgrounds, status overlays, holographic menu layers
