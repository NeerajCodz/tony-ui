# VERSION 14 — PADDING

> **Codename:** `padding`
> **Shape Language:** Rounded rectangle — defined by space, not style

## Philosophy
The component's design is the whitespace inside it. No border. No decoration. The padding creates visual separation through air.

## Primary Shape
```
border-radius: 8px
padding: 24px (standard), 32px (spacious), 16px (compact variant)
No visible border at rest.
Background: Extremely subtle.
```

## Color Tokens
```css
--pd-bg:      rgba(16, 18, 30, 0.6);
--pd-text:    #c0c4d8;
--pd-accent:  #5570ff;
--pd-muted:   #585c78;
```

## Typography
```
Font Stack:
  Display:  'Cormorant Garamond', serif   ← Unexpected luxury serif
  Body:     'DM Sans', sans-serif

h1: 56px | weight 300 | tracking -0.04em | color: --text-primary | font: Cormorant
h2: 40px | weight 400 | tracking -0.03em | color: --text-primary
h3: 28px | weight 600 | tracking -0.01em | color: --text-primary | font: DM Sans
h4: 20px | weight 600 | tracking 0em     | color: --text-secondary
h5: 15px | weight 500 | tracking 0.04em  | color: --pd-muted
h6: 12px | weight 500 | tracking 0.12em  | UPPERCASE | color: --pd-muted
body: 15px | weight 400 | leading: 1.8 | color: --pd-text
  — generous line height for breathing room
```

## Component Types

| Type       | Background    | Padding  | Border  | Text        |
|------------|---------------|----------|---------|-------------|
| `default`  | `--pd-bg`     | 24px     | none    | `--pd-text` |
| `solid`    | `rgba(85,112,255,0.15)` | 24px | none | `--pd-text` |
| `outline`  | transparent   | 24px     | `--pd-accent` 1px | `--pd-text` |
| `ghost`    | transparent   | 24px     | none    | `--pd-text` |
| `inverse`  | `rgba(192,196,216,0.1)` | 24px | none | `--pd-text` |
| `contrast` | `rgba(255,255,255,0.07)` | 32px | none | `#fff` |
| `soft`     | `rgba(85,112,255,0.05)` | 20px | none | `--pd-muted` |
