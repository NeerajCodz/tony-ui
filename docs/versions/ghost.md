# VERSION 08 — GHOST

> **Codename:** `ghost`
> **Shape Language:** No shape — defined only by interaction state

## Philosophy
The element is invisible until it needs to exist. Hover reveals the ghost. Used in dense interfaces to avoid visual noise while preserving interaction affordance.

## Primary Shape
```
Sharp rectangle (4px radius max).
Border: none at rest.
Background: transparent at rest.
The shape only materializes on :hover/:focus.
```

## Color Tokens
```css
--gh-reveal-bg:    rgba(255, 255, 255, 0.05);
--gh-reveal-border:rgba(255, 255, 255, 0.15);
--gh-accent:       #6a7fff;
--gh-text:         #8a8fa8;
--gh-text-hover:   #d8daf0;
```

## Typography
```
Font Stack:
  Display:  'Syne', sans-serif
  Body:     'Syne', sans-serif

h1: 52px | weight 800 | tracking -0.04em | color: --text-primary
h2: 38px | weight 700 | tracking -0.03em | color: --text-primary
h3: 26px | weight 600 | tracking -0.01em | color: --text-primary
h4: 18px | weight 600 | tracking 0em     | color: --text-secondary
h5: 14px | weight 500 | tracking 0.04em  | color: --gh-text
h6: 12px | weight 400 | tracking 0.1em   | color: --gh-text
body: 14px | leading: 1.6 | color: --gh-text
  — text opacity increases on hover
```

## Effects & Animation
```
Rest:         Completely invisible background/border
Hover:        Background fades in (opacity 0→1, 150ms)
              Border fades in simultaneously
              Text brightens (--gh-text → --gh-text-hover)
Active:       Background briefly fully opaque
Focus:        Solid border in --gh-accent
Transition:   150ms cubic-bezier(0.4, 0, 0.2, 1)
```

## Component Types

| Type       | Rest BG     | Hover BG              | Border (hover)          | Text Rest       | Text Hover         |
|------------|-------------|-----------------------|-------------------------|-----------------|--------------------|
| `default`  | transparent | `--gh-reveal-bg`      | `--gh-reveal-border`    | `--gh-text`     | `--gh-text-hover`  |
| `solid`    | transparent | `--gh-accent` 20%     | `--gh-accent` 40%       | `--gh-text`     | `--gh-accent`      |
| `outline`  | transparent | transparent           | `--gh-accent` 1px       | `--gh-text`     | `--gh-text-hover`  |
| `ghost`    | transparent | transparent           | none                    | `--gh-text`     | `--gh-text-hover`  |
| `inverse`  | transparent | `rgba(255,255,255,0.1)` | `rgba(255,255,255,0.3)` | `--gh-text`   | `#fff`             |
| `contrast` | transparent | `rgba(255,255,255,0.95)` | none                  | `--gh-text`     | `#000`             |
| `soft`     | transparent | `rgba(106,127,255,0.06)` | none                  | `--gh-text` 60% | `--gh-text`        |

## Best Use Cases
Navigation items, toolbar actions, contextual menus, secondary buttons, list item rows
