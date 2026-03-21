# VARIANT — Semantic Color System

> **Purpose:** Defines the semantic color layer. Variants communicate *meaning* — they answer "why does this component look this way?" Types (see _base.md) answer "what structural presentation does this component use?" These are independent axes that compose freely.

---

## VARIANTS vs TYPES vs STATES — RECAP

```
TYPE     → HOW it is visually structured
           "solid" means: filled background, no border, high weight
           "outline" means: transparent bg, bordered, accent-colored

VARIANT  → WHAT meaning/color context it carries
           "success" means: green palette — something went right
           "destructive" means: red palette — something is dangerous

STATE    → WHAT interaction phase it is in
           "hover" | "focus" | "active" | "disabled" | "error"

Composition example:
  <Button type="outline" variant="destructive" />
  → Transparent bg, red border, red text (outline structure)
  → in red color palette (destructive variant)
  → This is NOT contradictory — type=outline, variant=destructive
```

---

## VARIANT APPLICATION RULE

When a variant is applied, it overrides the **color tokens** used by the type's structure, but **never changes the structure itself**.

```
Default type tokens:       --v-accent, --v-border, --v-text
With variant override:     --variant-color, --variant-border, --variant-text

The type still controls:   background opacity, border presence/absence, weight
The variant controls:      WHICH color fills those roles
```

---

## ALL VARIANTS

### 1. `default` / `primary`
The base accent color of the current version theme. Cyan in most cyberpunk versions.

```css
--variant-color:          var(--v-accent)
--variant-color-hover:    var(--v-accent-hover)
--variant-color-active:   var(--v-accent-active)
--variant-color-muted:    var(--v-accent-muted)
--variant-color-tinted:   var(--v-accent-tinted)
--variant-on-color:       var(--v-on-accent)
--variant-border:         var(--v-accent)
--variant-glow:           var(--v-accent-glow)
```
Use when: standard UI elements, primary actions, default state. This is the "no override" state — using `default` variant is the same as not specifying a variant.

---

### 2. `secondary`
Subdued, lower-contrast action. Does not compete with primary.

```css
--variant-color:          #64748b   /* slate-500 */
--variant-color-hover:    #94a3b8   /* slate-400 */
--variant-color-active:   #475569   /* slate-600 */
--variant-color-muted:    rgba(100, 116, 139, 0.1)
--variant-color-tinted:   rgba(100, 116, 139, 0.2)
--variant-on-color:       #f8fafc
--variant-border:         #64748b
--variant-glow:           rgba(100, 116, 139, 0.25)
```
Icon: no standard icon — secondary is a structural variant, not a status signal.

Use when: secondary/alternative actions, cancel buttons, supporting UI elements, de-emphasized content.

---

### 3. `accent`
High-contrast purple/indigo. For premium features, special states, or calls-to-action distinct from primary.

```css
--variant-color:          #7c3aed   /* violet-600 */
--variant-color-hover:    #8b5cf6   /* violet-500 */
--variant-color-active:   #6d28d9   /* violet-700 */
--variant-color-muted:    rgba(124, 58, 237, 0.1)
--variant-color-tinted:   rgba(124, 58, 237, 0.2)
--variant-on-color:       #ffffff
--variant-border:         #7c3aed
--variant-glow:           rgba(124, 58, 237, 0.35)
```
Icon: Star, Sparkles, Crown — "special" or "premium" signal.

Use when: featured items, premium tier markers, "Pro" badges, unique/rare game items, highlight something as exceptional.

---

### 4. `neutral`
Purely gray. No color signal — no urgency, no celebration, no danger. Zero semantic meaning beyond "this exists."

```css
--variant-color:          #6b7280   /* gray-500 */
--variant-color-hover:    #9ca3af   /* gray-400 */
--variant-color-active:   #4b5563   /* gray-600 */
--variant-color-muted:    rgba(107, 114, 128, 0.1)
--variant-color-tinted:   rgba(107, 114, 128, 0.15)
--variant-on-color:       #f9fafb
--variant-border:         rgba(107, 114, 128, 0.4)
--variant-glow:           rgba(107, 114, 128, 0.15)
```
Icon: none standard.

Use when: read-only values, disabled-adjacent UI, archived items, "neutral" status badges, system information with no emotional valence.

---

### 5. `info`
Blue. Informational content — help text, tips, documentation links, passive notifications.

```css
--variant-color:          #3b82f6   /* blue-500 */
--variant-color-hover:    #60a5fa   /* blue-400 */
--variant-color-active:   #2563eb   /* blue-600 */
--variant-color-muted:    rgba(59, 130, 246, 0.1)
--variant-color-tinted:   rgba(59, 130, 246, 0.18)
--variant-on-color:       #ffffff
--variant-border:         #3b82f6
--variant-glow:           rgba(59, 130, 246, 0.3)
```
Icon (Lucide): `Info` — circle with "i" inside.

Use when: help dialogs, informational alerts, documentation links, non-urgent notifications, "Did you know?" callouts, system messages without action required.

---

### 6. `success`
Green. Confirms that something worked, completed, or passed.

```css
--variant-color:          #22c55e   /* green-500 */
--variant-color-hover:    #4ade80   /* green-400 */
--variant-color-active:   #16a34a   /* green-600 */
--variant-color-muted:    rgba(34, 197, 94, 0.1)
--variant-color-tinted:   rgba(34, 197, 94, 0.18)
--variant-on-color:       #052e16
--variant-border:         #22c55e
--variant-glow:           rgba(34, 197, 94, 0.3)
```
Icon (Lucide): `CheckCircle` — checkmark in circle.

Use when: form submission success, payment confirmed, file uploaded, operation complete, positive validation feedback, "online" status, quest completed, achievement unlocked.

---

### 7. `warning`
Amber/yellow. Something needs attention. Not necessarily broken — but requires awareness.

```css
--variant-color:          #f59e0b   /* amber-500 */
--variant-color-hover:    #fbbf24   /* amber-400 */
--variant-color-active:   #d97706   /* amber-600 */
--variant-color-muted:    rgba(245, 158, 11, 0.1)
--variant-color-tinted:   rgba(245, 158, 11, 0.18)
--variant-on-color:       #451a03
--variant-border:         #f59e0b
--variant-glow:           rgba(245, 158, 11, 0.3)
```
Icon (Lucide): `AlertTriangle` — triangle with "!" inside.

Use when: irreversible actions (not destructive), resource limits approaching (80% storage used), deprecated feature notices, "Are you sure?" without full danger, rate limit warnings, low battery/ammo/health, unstable/beta features.

---

### 8. `destructive` / `danger`
Red. The highest severity semantic signal. Something will be deleted, lost, or broken.

```css
--variant-color:          #ef4444   /* red-500 */
--variant-color-hover:    #f87171   /* red-400 */
--variant-color-active:   #dc2626   /* red-600 */
--variant-color-muted:    rgba(239, 68, 68, 0.1)
--variant-color-tinted:   rgba(239, 68, 68, 0.18)
--variant-on-color:       #ffffff
--variant-border:         #ef4444
--variant-glow:           rgba(239, 68, 68, 0.35)
```
Icon (Lucide): `XCircle` — X mark in circle. Or `AlertCircle` for form errors.

Use when: delete account, remove data, unrecoverable action, error state, failed operation, critical system alert, health at zero, mission failed, banned/blocked status.

**Rule:** Reserve EXCLUSIVELY for truly dangerous or irreversible actions. Overusing `destructive` dilutes its signal.

---

### 9. `success-soft`
Pale green. A muted version of `success` — positive without demanding attention.

```css
--variant-color:          #86efac   /* green-300 */
--variant-color-hover:    #4ade80   /* green-400 */
--variant-color-active:   #22c55e   /* green-500 */
--variant-color-muted:    rgba(134, 239, 172, 0.08)
--variant-color-tinted:   rgba(134, 239, 172, 0.15)
--variant-on-color:       #14532d
--variant-border:         rgba(134, 239, 172, 0.4)
--variant-glow:           rgba(134, 239, 172, 0.2)
```
Use when: optional positive status (user is online, but it's not the focus), background success indicators, subtle "completed" states in a list, small checkmark badges, "verified" labels.

---

### 10. `warning-soft`
Pale amber. A muted version of `warning` — cautious without alarming.

```css
--variant-color:          #fcd34d   /* amber-300 */
--variant-color-hover:    #fbbf24   /* amber-400 */
--variant-color-active:   #f59e0b   /* amber-500 */
--variant-color-muted:    rgba(252, 211, 77, 0.08)
--variant-color-tinted:   rgba(252, 211, 77, 0.15)
--variant-on-color:       #451a03
--variant-border:         rgba(252, 211, 77, 0.35)
--variant-glow:           rgba(252, 211, 77, 0.2)
```
Use when: informational callouts that are advisory but not urgent, "tip" boxes with amber tinting, background indicators for pending actions, "requires review" labels.

---

### 11. `danger-soft`
Pale red. A muted version of `destructive` — signals a problem without full alarm mode.

```css
--variant-color:          #fca5a5   /* red-300 */
--variant-color-hover:    #f87171   /* red-400 */
--variant-color-active:   #ef4444   /* red-500 */
--variant-color-muted:    rgba(252, 165, 165, 0.08)
--variant-color-tinted:   rgba(252, 165, 165, 0.15)
--variant-on-color:       #450a0a
--variant-border:         rgba(252, 165, 165, 0.35)
--variant-glow:           rgba(252, 165, 165, 0.2)
```
Use when: form validation errors (softer than full destructive), "at risk" indicators, expired/invalid badges that don't require immediate action, background error rows in a table.

---

### 12. `brand`
Custom brand color. Reserved for branding moments — logos, hero sections, premium branding elements.

```css
/* Defined per project — not a global default */
--variant-color:          var(--brand-primary)
--variant-color-hover:    var(--brand-primary-hover)
--variant-color-active:   var(--brand-primary-active)
--variant-color-muted:    rgba(brand, 0.1)
--variant-color-tinted:   rgba(brand, 0.2)
--variant-on-color:       var(--brand-on-primary)
--variant-border:         var(--brand-primary)
--variant-glow:           rgba(brand, 0.3)
```
Use when: brand-specific marketing components, onboarding highlights, partnership badges, branded CTAs that must match identity guidelines.

---

## VARIANT × ICON MAP

| Variant         | Lucide Icon         | SVG Description             | Color Applied To  |
|-----------------|---------------------|------------------------------|-------------------|
| `info`          | `Info`              | Circle with "i"              | icon fill/stroke  |
| `success`       | `CheckCircle`       | Checkmark in circle          | icon fill/stroke  |
| `success-soft`  | `Check`             | Simple checkmark             | icon stroke       |
| `warning`       | `AlertTriangle`     | Triangle with "!"            | icon fill/stroke  |
| `warning-soft`  | `AlertCircle`       | Circle with "!"              | icon stroke       |
| `destructive`   | `XCircle`           | X in circle                  | icon fill/stroke  |
| `danger-soft`   | `AlertCircle`       | Circle with "!"              | icon stroke       |
| `accent`        | `Sparkles` / `Star` | Sparkle or star              | icon fill         |
| `secondary`     | —                   | Context-dependent            | —                 |
| `neutral`       | —                   | Context-dependent            | —                 |
| `default`       | —                   | Context-dependent            | --v-accent        |

```tsx
// Implementation reference
import { Info, CheckCircle, AlertTriangle, XCircle,
         AlertCircle, Check, Sparkles } from 'lucide-react';

const variantIcons = {
  info:          Info,
  success:       CheckCircle,
  'success-soft': Check,
  warning:       AlertTriangle,
  'warning-soft': AlertCircle,
  destructive:   XCircle,
  'danger-soft': AlertCircle,
  danger:        XCircle,   // alias for destructive
  accent:        Sparkles,
} as const;
```

---

## VARIANT × SEVERITY SCALE

Ordered from lowest to highest urgency. Use this to pick the appropriate variant.

```
Lowest urgency
  neutral         — No signal at all. Just a color-free label.
  secondary       — Subdued, supporting. No semantic meaning.
  success-soft    — Gently positive. Doesn't demand attention.
  warning-soft    — Gently cautious. Worth noting.
  info            — Informational. User should know, no action required.
  default/primary — Standard UI. The baseline.
  accent          — Special/premium. Worth noticing.
  success         — Positive outcome confirmed. Celebrate briefly.
  warning         — Pay attention. Action may be needed.
  danger-soft     — Something is wrong, not critical yet.
  destructive     — DANGER. Irreversible. Requires explicit acknowledgement.
Highest urgency
```

---

## WHERE VARIANTS APPLY

### 1. Borders
Border color matches the variant color.
```css
/* default intensity — subtle, acknowledges the variant */
border-color: rgba(var(--variant-color-raw), 0.5);

/* emphasis — full variant color border */
border-color: var(--variant-color);
```

### 2. Icons
Icon fill or stroke color matches the variant.
```css
color: var(--variant-color);
/* OR for filled icons: */
fill: var(--variant-color);
```

### 3. Headings / Title Text
Heading/title text in panels, alerts, and cards.
```css
color: var(--variant-color);
/* Body text stays neutral — readability */
```

### 4. Glow Effects (Cyberpunk versions)
Box shadows and glow effects use the variant color.
```css
box-shadow: 0 0 12px var(--variant-glow),
            0 0 24px rgba(variant, 0.15);
```

### 5. Accent Lines
Left border bars, underlines, decorative dividers.
```css
border-left: 4px solid var(--variant-color);
/* OR */
background: var(--variant-color); /* for filled accent bars */
```

### 6. Background Tints
For `soft`, `tinted`, or `subtle` types — background tint uses variant muted color.
```css
background-color: var(--variant-color-muted);   /* soft type */
background-color: var(--variant-color-tinted);  /* tinted type */
```

---

## TYPE × VARIANT COMPOSITION EXAMPLES

### `solid` type with variants
```
solid + default:     filled cyan button
solid + success:     filled green "Confirmed" button
solid + destructive: filled red "Delete" button
solid + warning:     filled amber "Caution" button
solid + neutral:     filled gray — subdued action
```

### `outline` type with variants
```
outline + default:     cyan-bordered secondary button
outline + success:     green-bordered status indicator
outline + destructive: red-bordered "Remove" option
outline + info:        blue-bordered info callout
```

### `soft` type with variants
```
soft + success:     pale green success badge
soft + warning:     pale amber caution label
soft + destructive: pale red error tag
soft + info:        pale blue info chip
soft + neutral:     near-invisible neutral tag
```

### `tinted` type with variants
```
tinted + success:     medium-green selected row in a list
tinted + warning:     amber-highlighted caution section
tinted + destructive: red-tinted error row in a table
tinted + info:        blue-highlighted help section
```

### `ghost` type with variants
```
ghost + default:     invisible at rest, cyan on hover
ghost + destructive: invisible at rest, red on hover (for delete row actions)
ghost + success:     invisible at rest, green on hover (confirm action)
```

### `link` type with variants
```
link + default:     standard cyan hyperlink
link + destructive: red "Delete" inline text action
link + info:        blue "Learn more" link
```

---

## COMPONENT-SPECIFIC VARIANT BEHAVIOR

### Alert
Variant controls: icon selection, left border color, background tint, title color.
```
<Alert variant="warning">       amber icon, amber left border, amber bg tint
<Alert variant="destructive">   red X icon, red left border, red bg tint
<Alert variant="success">       green check icon, green left border, green bg tint
<Alert variant="info">          blue info icon, blue left border, blue bg tint
```

### Toast / Sonner
```
toast.success()     → success variant applied automatically
toast.error()       → destructive variant applied automatically
toast.warning()     → warning variant applied automatically
toast("message")    → default variant
```

### Badge
Badges are the most common use of combined type + variant:
```
<Badge type="soft" variant="success">   Active
<Badge type="soft" variant="destructive"> Banned
<Badge type="soft" variant="warning">   Expiring
<Badge type="outline" variant="accent"> Pro
<Badge type="solid" variant="info">     Beta
```

### Button
The classic type + variant:
```
<Button type="solid" variant="destructive">    Delete Account
<Button type="outline" variant="destructive">  Cancel Subscription
<Button type="ghost" variant="destructive">    Remove Item   ← least aggressive
<Button type="solid" variant="success">        Confirm Order
<Button type="link" variant="info">            Learn More
```

### Progress
Variant controls fill color:
```
<Progress variant="success">     green fill (complete/healthy)
<Progress variant="warning">     amber fill (approaching limit)
<Progress variant="destructive"> red fill (critical/over limit)
<Progress variant="info">        blue fill (neutral loading)
```

### Input (field-level variant for validation states)
```
<Input variant="success">        green border + icon (valid input)
<Input variant="destructive">    red border + icon (invalid input)
                                  ← this is different from the `error` STATE
                                  STATE: determined by validation
                                  VARIANT: explicit prop override
```

---

## CSS VARIABLE CONTRACT

Every variant must define the following tokens. Versions do NOT change these — variants are consistent across all 20 versions.

```css
/* Applied when variant prop is set */
--variant-color:          /* primary color value */
--variant-color-hover:    /* lighter/brighter for hover */
--variant-color-active:   /* darker for active/press */
--variant-color-muted:    /* ~8–10% opacity — soft bg, subtle borders */
--variant-color-tinted:   /* ~18–22% opacity — tinted bg */
--variant-on-color:       /* text color when ON the variant fill */
--variant-border:         /* border color (often same as --variant-color) */
--variant-glow:           /* glow color for box-shadow (version-specific usage) */
```

### Implementation pattern
```css
/* Root-level variant class */
[data-variant="success"] {
  --variant-color:        #22c55e;
  --variant-color-hover:  #4ade80;
  --variant-color-active: #16a34a;
  --variant-color-muted:  rgba(34, 197, 94, 0.1);
  --variant-color-tinted: rgba(34, 197, 94, 0.18);
  --variant-on-color:     #052e16;
  --variant-border:       #22c55e;
  --variant-glow:         rgba(34, 197, 94, 0.3);
}

/* Components consume via --variant-* tokens */
.component-border {
  border-color: var(--variant-border);
}
.component-icon {
  color: var(--variant-color);
}
.component-title {
  color: var(--variant-color);
}
.component-glow {
  box-shadow: 0 0 16px var(--variant-glow);
}

/* Type + Variant: the type provides structure, variant provides color */
/* soft type with success variant: */
[data-type="soft"][data-variant="success"] .component-bg {
  background-color: var(--variant-color-muted); /* from variant */
  /* no border — from soft type */
  color: var(--v-text-secondary);               /* from base */
}
```

---

## DESIGN GUIDELINES

### 1. Consistency
Use the same variant for related actions across the interface. If "Delete" is always `destructive`, never use `destructive` for a non-destructive action.

### 2. Hierarchy of urgency
Never use `destructive` for warnings. Never use `warning` for errors. Respect the severity scale.

### 3. Don't rely on color alone
Every variant must pair color with an icon, label text, or other non-color signal. A color-blind user must be able to understand the meaning.

### 4. Soft variants reduce alarm fatigue
When showing many status indicators simultaneously (e.g., a table with mixed statuses), prefer `soft` or `tinted` types over `solid`. Reserve full `solid + destructive` for the one thing that truly needs immediate attention.

### 5. Glow and intensity (cyberpunk versions)
In cyberpunk versions, the glow effect SCALES with urgency:
```
neutral:     0 glow
info:        minimal glow (8px)
success:     soft glow (12px)
warning:     moderate glow (16px, pulsing)
destructive: intense glow (20px, rapid pulse)
```
This creates an information hierarchy through light intensity — consistent with the aesthetic and semantically meaningful.

### 6. Variant in forms
- Use the `error` STATE for runtime validation errors (controlled by the form system)
- Use `destructive` VARIANT for explicit "danger" labeling (controlled by the developer)
- They can co-exist: an input can have `state=error` AND `variant=destructive` when it's both invalid AND the field is for a dangerous action

---

## VARIANT SUMMARY TABLE

| Variant          | Color    | Severity   | Primary Icon       | Use For                                      |
|------------------|----------|------------|---------------------|----------------------------------------------|
| `default/primary`| Cyan     | Baseline   | Context-dependent   | Standard UI, primary actions                 |
| `secondary`      | Slate    | Low        | —                   | Supporting actions, alternatives             |
| `accent`         | Purple   | Special    | Sparkles / Star     | Premium, featured, special                   |
| `neutral`        | Gray     | None       | —                   | No-signal UI, archived, read-only            |
| `info`           | Blue     | Low        | Info                | Help text, tips, passive notices             |
| `success`        | Green    | Positive   | CheckCircle         | Completed, confirmed, valid                  |
| `success-soft`   | Pale green| Positive  | Check               | Subtle positive indicators                   |
| `warning`        | Amber    | Medium     | AlertTriangle       | Needs attention, action may be required      |
| `warning-soft`   | Pale amber| Low-Med   | AlertCircle         | Advisory, pending, worth noting              |
| `destructive`    | Red      | Highest    | XCircle             | Delete, destroy, irreversible actions        |
| `danger-soft`    | Pale red | Medium-High| AlertCircle         | Error state, at-risk, soft danger indicators |
| `brand`          | Custom   | Special    | Brand-defined       | Branding moments, identity-critical UI       |

---

*End of VARIANT — Semantic Color System*
*12 variants | Composes with 15 types (from _base.md) | Consistent across all 20 versions*