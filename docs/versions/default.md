# VERSION 06 — DEFAULT

> **Codename:** `default`
> **Shape Language:** Rounded rectangle — intentionally clean

## Philosophy
The neutral ground state. No cyberpunk flourish. Clean, legible, accessible. Used when data clarity takes complete priority over aesthetic.

## Primary Shape
```
border-radius: 6px (standard), 8px (comfortable)
No clip-path. No decorative borders.
Pure function.
```

## Color Tokens
```css
--df-bg:       #0a0b0f;
--df-surface:  #12141e;
--df-border:   #1e2138;
--df-accent:   #5b6dff;
--df-text:     #d8daf0;
--df-muted:    #6a6e88;
```

## Typography
```
Font Stack:
  Display:  'Plus Jakarta Sans', sans-serif
  Body:     'Plus Jakarta Sans', sans-serif
  Code:     'JetBrains Mono', monospace

h1: 56px | weight 800 | tracking -0.04em | color: --text-primary
h2: 40px | weight 700 | tracking -0.03em | color: --text-primary
h3: 28px | weight 700 | tracking -0.01em | color: --text-primary
h4: 20px | weight 600 | tracking 0em     | color: --text-primary
h5: 16px | weight 600 | tracking 0.02em  | color: --text-secondary
h6: 14px | weight 500 | tracking 0.04em  | color: --df-muted
body: 15px | leading: 1.6 | color: --df-text
```

## Effects & Animation
```
Mount:    Fade-in opacity 0→1 (200ms ease)
Hover:    Border lightens slightly
Active:   Background briefly darkens
Transition: 150ms ease
```

## Component Types

| Type       | Background    | Border              | Text             |
|------------|---------------|---------------------|------------------|
| `default`  | `--df-surface`| `--df-border` 1px   | `--df-text`      |
| `solid`    | `--df-accent` | none                | `#fff`           |
| `outline`  | transparent   | `--df-accent` 1px   | `--df-accent`    |
| `ghost`    | transparent   | none                | `--df-text`      |
| `inverse`  | `--df-text`   | none                | `--df-bg`        |
| `contrast` | `#fff`        | none                | `#000`           |
| `soft`     | `rgba(91,109,255,0.1)` | none    | `--df-text`      |

## Best Use Cases
General content containers, modals, tooltips, any UI where aesthetics should not distract
