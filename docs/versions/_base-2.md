# _BASE — Component Mechanics Reference

> **Purpose:** Defines the structural anatomy, behavioral states, interaction model, accessibility contract, size scale, and token consumption for all 62 components. This is the foundation layer. Version themes (v01–v20) override only visual tokens — shape, color, border, glow, animation style. All mechanics defined here remain constant across every version.

---

## HOW THE LAYER SYSTEM WORKS

```
_base.md          ← YOU ARE HERE
  └── Anatomy     (DOM structure, slots, required/optional parts)
  └── States      (default | hover | focus | active | disabled | loading | error | selected)
  └── Behavior    (keyboard, pointer, ARIA, open/close, scroll, resize)
  └── Sizes       (xs | sm | md | lg | xl — base measurements)
  └── Types       (which of the 15 component types apply)
  └── Variants    (semantic color override — see variant.md)
  └── Tokens      (which CSS variables the component reads)

version-XX.md     ← Theme layer (20 versions)
  └── Overrides --token values only
  └── Adds shape effects (clip-path, box-shadow, filters)
  └── Adds version-specific animations
  └── Never changes anatomy or behavior

variant.md        ← Semantic color layer (see separate doc)
  └── Overrides --variant-* color tokens only
  └── Applied on top of both _base AND version
  └── Never changes type structure or layout
```

---

## UNDERSTANDING: TYPE vs VARIANT vs STATE

These are three completely independent axes. They compose freely.

```
TYPE     — HOW it is visually structured
           (the shape of the visual treatment: filled / bordered / transparent / etc.)
           Examples: solid, outline, ghost, elevated, link, flat

VARIANT  — WHAT semantic color it communicates
           (which color palette signals its meaning)
           Examples: primary, success, warning, destructive, neutral
           → Defined in variant.md

STATE    — WHAT interaction phase it is currently in
           (runtime condition driven by user interaction or system)
           Examples: hover, focus, active, disabled, loading, error

They compose independently:
  <Button type="outline" variant="destructive" />  — in hover state
  → outline structure + red color palette + hover brightness shift
```

---

## GLOBAL BASE TOKENS

Every component reads from this set. Versions override these:

```css
/* Spacing scale */
--space-0:   0px;
--space-1:   2px;
--space-2:   4px;
--space-3:   6px;
--space-4:   8px;
--space-5:   12px;
--space-6:   16px;
--space-7:   20px;
--space-8:   24px;
--space-9:   32px;
--space-10:  40px;
--space-11:  48px;
--space-12:  64px;

/* Size scale (component height) */
--size-xs:   20px;
--size-sm:   28px;
--size-md:   36px;
--size-lg:   44px;
--size-xl:   52px;

/* Radius scale (versions override toward 0 or specific values) */
--radius-none:  0px;
--radius-sm:    2px;
--radius-md:    4px;
--radius-lg:    8px;
--radius-xl:    12px;
--radius-2xl:   16px;
--radius-full:  9999px;

/* Base transition */
--duration-instant: 50ms;
--duration-fast:    100ms;
--duration-base:    150ms;
--duration-slow:    250ms;
--duration-slower:  400ms;
--ease-standard:    cubic-bezier(0.4, 0, 0.2, 1);
--ease-decelerate:  cubic-bezier(0, 0, 0.2, 1);
--ease-accelerate:  cubic-bezier(0.4, 0, 1, 1);
--ease-spring:      cubic-bezier(0.34, 1.56, 0.64, 1);

/* Z-index scale */
--z-base:     0;
--z-raised:   10;
--z-dropdown: 100;
--z-sticky:   200;
--z-overlay:  300;
--z-modal:    400;
--z-toast:    500;
--z-tooltip:  600;

/* Focus ring — always visible, never styled away */
--focus-ring-width:  2px;
--focus-ring-offset: 2px;
--focus-ring-color:  var(--accent-primary);

/* Disabled state */
--disabled-opacity:      0.4;
--disabled-cursor:       not-allowed;
--disabled-type-opacity: 0.5;  /* TYPE-disabled — slightly higher than state disabled */
```

---

## GLOBAL STATE MODEL

Every interactive component implements this state machine:

```
States:
  default       → The component at rest. No interaction. Full opacity.
  hover         → Pointer is within bounds. Visual feedback, no commitment.
  focus         → Keyboard focus. Focus ring visible. ALWAYS visible. Never hidden.
  active        → Pointer down OR keyboard activation. Pressed state.
  disabled      → Not interactive. opacity: --disabled-opacity. pointer-events: none.
  loading       → Async operation in progress. Content may be replaced by spinner.
  error         → Validation failure or async error. Error color tokens active.
  selected      → Item is chosen/checked/on. Selected color tokens active.
  indeterminate → Partial selection (checkbox, progress). Mid-state visual.
  empty         → No content to show. Empty state component or placeholder.
  readonly      → Displays value, not editable. No hover feedback. Focusable.

Compound states (allowed simultaneously):
  hover + focus          ✓
  focus + error          ✓
  selected + hover       ✓
  disabled + error       ✓  (show error message, disable interaction)
  loading + disabled     ✓  (loading implies disabled)
  readonly + focus       ✓  (focusable but not editable)
  selected + disabled    ✓  (show selection, deny interaction)
```

---

## COMPONENT TYPE SYSTEM — ALL 15 TYPES

Types define the **structural visual treatment** of a component. They are presentation patterns — how borders, backgrounds, and text weights are applied. Types carry NO semantic meaning. Semantic meaning comes from **variants** (see variant.md).

---

### TYPE 01 — `default`
The standard resting surface. Has a visible background and border. The most common type — used when a component needs to feel grounded and distinct from its parent.

```
Structure:    background fill + border
Background:   --v-bg
Border:       --v-border (1px)
Text:         --v-text
Hover:        --v-bg-hover / --v-border-hover
Active:       --v-bg-active / scale(0.98)
```
Best for: cards, panels, inputs, dropdowns — anything that must read as a distinct surface.

---

### TYPE 02 — `solid`
Fully filled with the current accent/variant color. Maximum visual weight.

```
Structure:    solid filled background, no border
Background:   --v-accent (full opacity)
Border:       none
Text:         --v-on-accent (high contrast)
Hover:        --v-accent-hover
Active:       --v-accent-active + scale(0.97)
```
Best for: primary CTA buttons, active indicators, dominant selected states.

---

### TYPE 03 — `outline`
Transparent interior with a visible accent-colored border. The border IS the component.

```
Structure:    transparent background + accent border
Background:   transparent
Border:       --v-accent 1px solid
Text:         --v-accent
Hover:        bg → --v-accent-ghost (faint accent fill)
Active:       bg → --v-accent-ghost + scale(0.98)
```
Best for: secondary buttons, toggleable states, lower-priority alternatives to `solid`.

---

### TYPE 04 — `ghost`
Invisible at rest. Shape revealed only on interaction. Zero visual weight until needed.

```
Structure:    transparent, no border at rest
Background:   transparent → --v-ghost-hover (on hover)
Border:       none
Text:         --v-text-secondary (rest) → --v-text (hover)
Active:       --v-ghost-active
```
Best for: toolbar actions, nav items, list row actions — minimize visual noise.

---

### TYPE 05 — `inverse`
Flips the color relationship. In a dark theme: light background, dark text. High impact.

```
Structure:    inverted surface
Background:   --v-text (primary text color becomes bg)
Border:       none
Text:         --v-bg (bg color becomes text)
Hover:        bg opacity 0.9
Active:       bg opacity 0.8
```
Best for: selected pills, "on" state toggles, mode indicators needing strong contrast.

---

### TYPE 06 — `contrast`
Maximum contrast mode. Highest priority visual signal in the interface.

```
Structure:    near-black bg (dark theme) + strong border
Background:   --v-contrast-bg
Border:       --v-contrast-border (1–2px)
Text:         --v-contrast-text
Hover:        filter: brightness(1.1)
Active:       filter: brightness(0.9) + scale(0.98)
```
Best for: danger confirmations, critical alerts, the single most important action on screen.

---

### TYPE 07 — `soft`
Muted, gentle version of `solid`. Accent at very low opacity (~6%). Low weight but still tinted.

```
Structure:    faint accent-tinted background, no border
Background:   --v-accent-muted (~6% opacity)
Border:       none
Text:         --v-text-secondary
Hover:        --v-accent-muted-hover (~10%) → text shifts to --v-text
```
Best for: metadata tags/badges, background chips, non-dominant selected states.

---

### TYPE 08 — `neutral`
*NEW.* Pure gray/neutral. No accent color. Completely desaturated — version hue does not bleed in.

```
Structure:    neutral gray surface + neutral gray border
Background:   --v-neutral-bg
Border:       --v-neutral-border
Text:         --v-neutral-text
Hover:        --v-neutral-bg-hover
Active:       --v-neutral-bg-active
```
Contrast with `default`: `default` uses accent-aware surface tokens that may be subtly tinted.
`neutral` is purely desaturated — no version hue, no color context.

Best for: secondary chrome, utility UI, read-only data displays, UI that must not distract.

---

### TYPE 09 — `subtle`
*NEW.* The gentlest possible surface. Even lighter than `soft`. A whisper of differentiation.

```
Structure:    near-invisible background tint (2–3%), no visible border
Background:   --v-subtle-bg (~2–3% accent or neutral opacity)
Border:       none (or 0.5px --v-border at 50% opacity)
Text:         --v-text-secondary
Hover:        shifts to --v-ghost-hover level
Active:       --v-ghost-active
```
Contrast with `ghost`: `ghost` is fully transparent at rest. `subtle` has a barely-perceptible
tint always present — visible if you look closely, but doesn't compete.

Best for: grouped form sections, slight visual grouping without borders, secondary info blocks within a card.

---

### TYPE 10 — `elevated`
*NEW.* Uses shadow/depth instead of border or fill. Feels physically above the surface.

```
Structure:    clean surface + box-shadow (no border by default)
Background:   --v-bg-elevated
Border:       none (shadow defines the edge)
Shadow:       --v-shadow-elevated (version defines: hard offset | soft blur | accent glow)
Text:         --v-text
Hover:        shadow intensifies + optional translateY(-1px)
Active:       shadow reduces + translateY(1px) — presses down
```
Version defines the shadow style (Angular Corner: hard colored shadow. Glass Morphism: soft radial glow. Raised: hard offset).

Best for: floating cards, borderless dropdown panels, popovers, elevated selection states.

---

### TYPE 11 — `flat`
*NEW.* Visual opposite of elevated. Flush with the background. No border, no shadow, no fill.

```
Structure:    no background, no border, no shadow
Background:   transparent (identical to parent)
Border:       none
Shadow:       none
Text:         --v-text (full opacity — same as body text)
Hover:        --v-ghost-hover reveals background
Active:       --v-ghost-active
```
Contrast with `ghost`: `ghost` text is `--v-text-secondary` (dimmed) at rest. `flat` text is
full `--v-text` — reads as inline content until hovered.

Best for: inline actions within prose, table row controls, toolbar items in dense UIs where borders clutter.

---

### TYPE 12 — `tinted`
*NEW.* Stronger accent tint than `soft`, lighter than `solid`. Medium-weight (~22–25% opacity).

```
Structure:    medium-opacity accent bg + optional accent border (0.3–0.4 opacity)
Background:   --v-accent-tinted (~22–25% opacity)
Border:       --v-accent-tinted-border (optional — version decides)
Text:         --v-text (primary, readable against tinted bg)
Hover:        opacity increases toward ~35%
Active:       opacity ~45% + scale(0.98)
```
Contrast with `soft` (6%) and `solid` (100%): `tinted` at ~22% — visible color without feeling
like a button. Feels "highlighted" or "lit up".

Best for: active nav items, selected rows in multi-select, "highlighted" content sections.

---

### TYPE 13 — `link`
*NEW.* Renders as a hyperlink. No box, no background, no border. Text colored, underline on hover.

```
Structure:    no background, no border, minimal/no padding
Background:   transparent
Border:       none
Text:         --v-accent
Decoration:   underline on hover (or always — version decides)
Hover:        --v-accent-hover + underline
Active:       --v-accent-active
Focus:        focus ring around text content
```
Note: Minimum 44px touch target still required — use padding even though visually invisible.

Best for: inline text actions ("Learn more", "View all"), breadcrumb links, "Cancel" when ghost is too prominent.

---

### TYPE 14 — `disabled`
*NEW.* A TYPE (not just a state) that permanently renders the component with an inactive visual treatment, regardless of whether interaction is actually blocked.

```
Structure:    muted gray surface, flattened visual
Background:   --v-disabled-bg (gray, no accent)
Border:       --v-disabled-border (very faint)
Text:         --v-disabled-text (muted, no accent)
Opacity:      --disabled-type-opacity (0.5)
Cursor:       default (NOT not-allowed — interaction may still be active)
Hover:        NO change — visually inert
Active:       NO change
Focus:        Focus ring still shows IF component is actually interactive
              (e.g., "coming soon" button that opens a tooltip explaining why)
```
Contrast with the `disabled` STATE: The STATE blocks interaction (`pointer-events: none`,
`aria-disabled`). The TYPE is purely visual — component may still be interactive.

Best for: locked/coming-soon features, upsell placeholders, items ineligible for current action that must remain readable.

---

### TYPE 15 — `unstyled`
*NEW.* Zero visual treatment. Resets all visual opinions. Uses component mechanics only.

```
Structure:    none
Background:   transparent / inherit
Border:       none
Text:         inherit (no color override)
Padding:      0 or inherit (no padding injection)
Radius:       0 or inherit
Shadow:       none
All v-tokens: ignored
```
Preserves: focus ring (accessibility, override at your own risk) + min touch target sizing.
Everything else: stripped.

Best for: building highly custom UI on top of mechanics, one-off designs, wrapping external styled components.

---

### Type Quick Reference

| Type        | Background     | Border   | Visual Weight | Primary Use Case                       |
|-------------|----------------|----------|---------------|----------------------------------------|
| `default`   | Surface        | Yes      | Medium        | Standard containers, inputs            |
| `solid`     | Accent (100%)  | No       | High          | Primary CTAs, key actions              |
| `outline`   | Transparent    | Accent   | Medium        | Secondary CTAs, toggles               |
| `ghost`     | Transparent    | No       | Low           | Toolbar items, nav links              |
| `inverse`   | Text→Bg flip   | No       | High          | Selected states, mode indicators      |
| `contrast`  | Max contrast   | Strong   | Highest       | Critical/danger actions               |
| `soft`      | Accent ~6%     | No       | Low           | Tags, background chips                |
| `neutral`   | Pure gray      | Gray     | Low-Medium    | Utility UI, no-color zones            |
| `subtle`    | ~2–3% tint     | No       | Lowest        | Grouping within surfaces              |
| `elevated`  | Surface+shadow | No       | Medium        | Floating panels, borderless cards     |
| `flat`      | Transparent    | No       | None          | Inline actions, dense UIs             |
| `tinted`    | Accent ~22%    | Optional | Medium        | Active nav, highlighted rows          |
| `link`      | Transparent    | No       | None          | Inline text actions                   |
| `disabled`  | Gray, muted    | Faint    | Lowest        | Locked/coming-soon states             |
| `unstyled`  | None           | None     | None          | Custom builds, external wrappers      |

---

## GLOBAL TYPE × STATE TOKEN MAP

```
TYPE: default
  default:   bg=--v-bg              border=--v-border           text=--v-text
  hover:     bg=--v-bg-hover        border=--v-border-hover     text=--v-text
  focus:     bg=--v-bg              border=--focus-ring-color   text=--v-text        + focus ring
  active:    bg=--v-bg-active       border=--v-border           text=--v-text        + scale(0.98)
  disabled:  opacity=--disabled-opacity | pointer-events:none

TYPE: solid
  default:   bg=--v-accent          border=none                 text=--v-on-accent
  hover:     bg=--v-accent-hover    border=none                 text=--v-on-accent
  focus:     bg=--v-accent          border=none                 text=--v-on-accent   + focus ring
  active:    bg=--v-accent-active   border=none                 text=--v-on-accent   + scale(0.97)
  disabled:  opacity=--disabled-opacity

TYPE: outline
  default:   bg=transparent         border=--v-accent 1px       text=--v-accent
  hover:     bg=--v-accent-ghost    border=--v-accent           text=--v-accent
  focus:     bg=transparent         border=--focus-ring-color   text=--v-accent      + focus ring
  active:    bg=--v-accent-ghost    border=--v-accent           text=--v-accent      + scale(0.98)
  disabled:  opacity=--disabled-opacity

TYPE: ghost
  default:   bg=transparent         border=none                 text=--v-text-secondary
  hover:     bg=--v-ghost-hover     border=none                 text=--v-text
  focus:     bg=transparent         border=none                 text=--v-text        + focus ring
  active:    bg=--v-ghost-active    border=none                 text=--v-text
  disabled:  opacity=--disabled-opacity

TYPE: inverse
  default:   bg=--v-text            border=none                 text=--v-bg
  hover:     bg=--v-text (0.9)      border=none                 text=--v-bg
  focus:     bg=--v-text            border=none                 text=--v-bg          + focus ring
  active:    bg=--v-text (0.8)      border=none                 text=--v-bg
  disabled:  opacity=--disabled-opacity

TYPE: contrast
  default:   bg=--v-contrast-bg     border=--v-contrast-border  text=--v-contrast-text
  hover:     filter:brightness(1.1)
  focus:     + focus ring (adjusted for contrast bg)
  active:    filter:brightness(0.9) + scale(0.98)
  disabled:  opacity=--disabled-opacity

TYPE: soft
  default:   bg=--v-accent-muted    border=none                 text=--v-text-secondary
  hover:     bg=--v-accent-muted-hover                          text=--v-text
  focus:     bg=--v-accent-muted    border=none                 text=--v-text        + focus ring
  active:    bg=--v-accent-muted-hover                          text=--v-text        + scale(0.98)
  disabled:  opacity=--disabled-opacity

TYPE: neutral
  default:   bg=--v-neutral-bg      border=--v-neutral-border   text=--v-neutral-text
  hover:     bg=--v-neutral-bg-hover                            text=--v-neutral-text
  focus:     bg=--v-neutral-bg      border=--focus-ring-color   text=--v-neutral-text + focus ring
  active:    bg=--v-neutral-bg-active                           text=--v-neutral-text + scale(0.98)
  disabled:  opacity=--disabled-opacity

TYPE: subtle
  default:   bg=--v-subtle-bg       border=none                 text=--v-text-secondary
  hover:     bg=--v-ghost-hover     border=none                 text=--v-text
  focus:     bg=--v-subtle-bg       border=none                 text=--v-text-secondary + focus ring
  active:    bg=--v-ghost-active    border=none                 text=--v-text
  disabled:  opacity=--disabled-opacity

TYPE: elevated
  default:   bg=--v-bg-elevated     border=none   shadow=--v-shadow-elevated  text=--v-text
  hover:     shadow=--v-shadow-elevated-hover + translateY(-1px)
  focus:     shadow=--v-shadow-elevated                                        + focus ring
  active:    shadow=--v-shadow-elevated-active + translateY(1px)
  disabled:  opacity=--disabled-opacity

TYPE: flat
  default:   bg=transparent         border=none                 text=--v-text
  hover:     bg=--v-ghost-hover     border=none                 text=--v-text
  focus:     bg=transparent         border=none                 text=--v-text        + focus ring
  active:    bg=--v-ghost-active    border=none                 text=--v-text
  disabled:  opacity=--disabled-opacity

TYPE: tinted
  default:   bg=--v-accent-tinted   border=--v-accent-tinted-border text=--v-text
  hover:     bg=--v-accent-tinted-hover                         text=--v-text
  focus:     bg=--v-accent-tinted   border=--focus-ring-color   text=--v-text        + focus ring
  active:    bg=--v-accent-tinted-active                        text=--v-text        + scale(0.98)
  disabled:  opacity=--disabled-opacity

TYPE: link
  default:   bg=transparent         border=none  text=--v-accent  decoration=underline (or none)
  hover:     bg=transparent         border=none  text=--v-accent-hover  decoration=underline
  focus:     bg=transparent         border=none  text=--v-accent                      + focus ring
  active:    bg=transparent         border=none  text=--v-accent-active
  disabled:  opacity=--disabled-opacity | text=--v-text-muted

TYPE: disabled  ← TYPE not STATE. Component may still be interactive.
  always:    bg=--v-disabled-bg     border=--v-disabled-border  text=--v-disabled-text
             opacity=--disabled-type-opacity (0.5) | cursor:default (not not-allowed)
  hover:     NO CHANGE — visually inert
  focus:     focus ring still shows IF actually focusable (e.g., tooltip trigger)
  active:    NO CHANGE

TYPE: unstyled
  all states: ALL tokens ignored. Zero visual treatment.
              Only preserved: focus ring (accessibility) + min touch target (44×44px).
```

---

## GLOBAL SIZE SCALE

| Size | Height | Padding H | Padding V | Font Size | Icon Size | Base Radius  |
|------|--------|-----------|-----------|-----------|-----------|--------------|
| `xs` | 20px   | 6px       | 2px       | 10px      | 12px      | --radius-sm  |
| `sm` | 28px   | 10px      | 4px       | 12px      | 14px      | --radius-md  |
| `md` | 36px   | 14px      | 8px       | 14px      | 16px      | --radius-md  |
| `lg` | 44px   | 18px      | 10px      | 16px      | 18px      | --radius-lg  |
| `xl` | 52px   | 22px      | 12px      | 18px      | 20px      | --radius-lg  |

---
---

# COMPONENT CATALOG

---

## GROUP A — LAYOUT & CONTAINER

### A1. `accordion.tsx`

**What it is:** Vertically stacked set of collapsible panels.

**Anatomy:**
```
<Accordion>
  <AccordionItem>
    <AccordionTrigger>  [chevron icon] [label]
    <AccordionContent>  [slot: any content]
  </AccordionItem>
</Accordion>
```

**Props:** `type` ("single"|"multiple") | `defaultValue` | `value`/`onValueChange` | `collapsible` | `disabled`

**States:** closed (height:0) | open (height:auto, animated) | disabled (--disabled-opacity)

**Trigger states:** default | hover | focus | active | open (`data-state="open"`)

**Behavior:** Click/Enter/Space → toggle. Tab → next trigger (skips closed content). Chevron: rotate(0→180deg) on open.

**Animation:**
```
Open:    height 0→auto | --duration-slow | --ease-decelerate. Content opacity 0→1 (delay)
Close:   height auto→0 | --duration-base | --ease-accelerate
```

**Accessibility:** `role="button"`, `aria-expanded`, `aria-controls`. Content: `role="region"`, linked id.

**Types:** `default` | `ghost` | `soft` | `subtle` | `flat` | `neutral` | `elevated` | `tinted` | `unstyled`

**Sizes:** `sm` | `md` | `lg` (trigger padding + font)

---

### A2. `aspect-ratio.tsx`

**What it is:** Enforces fixed aspect ratio on child content.

**Anatomy:** `<AspectRatio ratio={16/9}> [slot: child] </AspectRatio>`

**Behavior:** CSS `aspect-ratio` property (modern) or padding-top fallback. No interaction, no states, no types.

**Token consumption:** None. Pure geometry.

---

### A3. `card.tsx`

**What it is:** The foundational surface container.

**Anatomy:**
```
<Card>
  <CardHeader>  <CardTitle> <CardDescription>
  <CardContent>  [slot: any content]
  <CardFooter>   [slot: actions/meta]
</Card>
```

**Props:** `clickable` | `selected` | `disabled` | `href` | `orientation` ("vertical"|"horizontal")

**States:** default | hover (if clickable) | focus (if clickable) | active (if clickable) | selected | disabled

**Sections padding:**
```
CardHeader:  padding-bottom = ½ CardContent padding
CardContent: full padding (size-controlled)
CardFooter:  padding-top = ½ CardContent padding; flex row; gap --space-4
```

**Animation:** Hover: transition all --duration-base. Selected: --duration-fast.

**Accessibility:** Non-clickable: no role. Clickable: `role="button"` or `<a>`. Selected: `aria-selected`/`aria-checked`.

**Types:** All 15.

**Sizes:** sm:16px pad | md:20px pad | lg:24px pad

---

### A4. `collapsible.tsx`

**What it is:** Single standalone toggle-able section.

**Anatomy:**
```
<Collapsible>
  <CollapsibleTrigger>  [slot: trigger]
  <CollapsibleContent>  [slot: content]
</Collapsible>
```

**Behavior/Animation/Accessibility:** Identical to AccordionItem in isolation.

**Types:** Trigger inherits type. Content: transparent.

---

### A5. `resizable.tsx`

**What it is:** Panels with a draggable resize handle.

**Anatomy:**
```
<ResizablePanelGroup direction="horizontal|vertical">
  <ResizablePanel defaultSize={50}>  [slot]
  <ResizableHandle>  [optional grip icon]
  <ResizablePanel defaultSize={50}>  [slot]
</ResizablePanelGroup>
```

**Handle states:** default | hover (brightens + grip) | focus | active (dragging)

**Behavior:** Drag → flex-basis%. Double-click → collapse/expand. Keyboard: `←`/`→`/`↑`/`↓` ±1%, `Shift+Arrow` ±10%, `Home`/`End`.

**Accessibility:** `role="separator"`, `aria-orientation`, `aria-valuenow/min/max`, `aria-label="Resize"`

**No types** (handle inherits --v-accent)

---

### A6. `scroll-area.tsx`

**What it is:** Custom-styled scroll container replacing native scrollbar.

**Anatomy:**
```
<ScrollArea>
  <ScrollAreaViewport>  [slot: content]
  <ScrollAreaScrollbar orientation="vertical|horizontal">
    <ScrollAreaThumb>
  <ScrollAreaCorner>
</ScrollArea>
```

**Props:** `type` (auto|always|scroll|hover) | `scrollHideDelay` (600ms) | `dir`

**Thumb states:** default | hover (brighter) | active (dragging, never hides)

**Accessibility:** Viewport: `tabindex="0"`. Scrollbar: `aria-hidden="true"`.

**Token consumption:** Track: `--v-border`. Thumb: `--v-text-muted`→`--v-text-secondary`→`--v-accent`.

---

### A7. `separator.tsx`

**What it is:** Visual/semantic divider.

**Anatomy:** `<Separator orientation="horizontal|vertical" decorative />`

**States:** None (not interactive). **Types:** None (version controls color/pattern).

**Accessibility:** Non-decorative: `role="separator"`, `aria-orientation`. Decorative: `aria-hidden="true"`.

---

### A8. `sheet.tsx`

**What it is:** Panel sliding from screen edge. For persistent secondary content.

**Anatomy:**
```
<Sheet>
  <SheetTrigger>
  <SheetPortal>
    <SheetOverlay>
    <SheetContent side="right|left|top|bottom">
      <SheetHeader>  <SheetTitle> <SheetDescription>
      [slot: content]
      <SheetFooter>  [slot: actions]
      <SheetClose>
    </SheetContent>
  </SheetPortal>
</Sheet>
```

**Sizes:** right/left: 400px. top/bottom: 50vh.

**Animation:** Open: translateX/Y ±100%→0 + overlay fade | --duration-slower | --ease-decelerate. Close: reverse.

**Focus:** Moves to first focusable. Trapped. Returns to trigger on close. `Escape` → close.

**Accessibility:** `role="dialog"`, `aria-labelledby`, `aria-describedby`, `aria-modal="true"`

**Types:** `default` | `solid` | `outline` | `elevated` | `contrast` | `soft` | `tinted` | `neutral`

---

### A9. `sidebar.tsx`

**What it is:** Persistent or collapsible navigation sidebar.

**Anatomy:**
```
<SidebarProvider>
  <Sidebar side collapsible="offcanvas|icon|none">
    <SidebarHeader>
    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupLabel>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton>  [icon] [label]
            <SidebarMenuBadge>
            <SidebarMenuSub>
              <SidebarMenuSubItem> <SidebarMenuSubButton>
    </SidebarContent>
    <SidebarFooter>
    <SidebarRail>
  </Sidebar>
  <SidebarInset>  [page content]
</SidebarProvider>
```

**States:** expanded (260px) | collapsed icon-only (48px) | mobile off-canvas

**MenuButton states:** default | hover | focus | active | selected (current route)

**Keyboard:** Tab navigates. Enter/Space activates. Sub items: disclosure pattern.

**Accessibility:** `<nav>`, `aria-label="Main navigation"`, `aria-current="page"`, `aria-expanded` on sub items

**Types (MenuButton):** `ghost` (default) | `flat` | `soft` | `tinted` | `subtle` | `default` | `neutral`

---
---

## GROUP B — NAVIGATION

### B1. `breadcrumb.tsx`

**Anatomy:**
```
<Breadcrumb>  <nav aria-label="breadcrumb">
  <BreadcrumbList>  <ol>
    <BreadcrumbItem>  <li>
      <BreadcrumbLink href>  <a>  ← ancestors
    <BreadcrumbSeparator>  aria-hidden
    <BreadcrumbItem>
      <BreadcrumbPage>  <span aria-current="page">  ← current
    <BreadcrumbEllipsis>  collapsed items (button/dropdown)
```

**States:** Link: default | hover | focus | active. Current: not a link, distinct color/weight.

**Types (links):** `ghost` | `flat` | `link` | `neutral`

**Sizes:** `sm` | `md`

---

### B2. `menubar.tsx`

**Anatomy:**
```
<Menubar>
  <MenubarMenu>
    <MenubarTrigger>  [label]
    <MenubarContent>
      <MenubarItem>  [icon] [label] [shortcut]
      <MenubarCheckboxItem> | <MenubarRadioGroup><MenubarRadioItem>
      <MenubarSeparator> | <MenubarSub> | <MenubarLabel> | <MenubarShortcut>
```

**States:** Trigger: default|hover|focus|active|open. Item: default|hover|focus|disabled|checked.

**Behavior:** Click → open (closes others). Hover when open → switch. Escape → close. ←/→ trigger nav. ↑/↓ item nav. Enter/Space activate.

**Accessibility:** `role="menubar"`, `role="menu"`, `role="menuitem/*checkbox/*radio"`, `aria-haspopup`, `aria-expanded`, `aria-checked`

---

### B3. `navigation-menu.tsx`

**What it is:** Website navigation with rich dropdown panels. Single shared viewport.

**Key mechanic:** All panels project into one `NavigationMenuViewport`. Viewport animates between panels.

**States:** Trigger: default|hover|focus|active|open. Viewport: hidden|visible|animating.

**Animation:** Viewport: scale+opacity enter/exit. Indicator: translate-x under active trigger.

**Behavior:** Hover → open (200ms delay). Leave → close (300ms). Click → toggle. Escape → close.

**Accessibility:** `<nav aria-label>`. Trigger: `aria-expanded`, `aria-haspopup="dialog"`.

---

### B4. `pagination.tsx`

**Anatomy:**
```
<Pagination>  <nav>
  <PaginationContent>  <ul>
    <PaginationItem> <PaginationPrevious>
    <PaginationItem> <PaginationLink page isActive>
    <PaginationItem> <PaginationEllipsis>
    <PaginationItem> <PaginationNext>
```

**Types (links):** All 15. Active page: `solid`/`tinted`. Others: `ghost`/`flat`. Prev/Next: `outline`/`ghost`.

**Sizes:** `sm` | `md` | `lg`

---

### B5. `tabs.tsx`

**Anatomy:**
```
<Tabs defaultValue orientation="horizontal|vertical">
  <TabsList>
    <TabsTrigger value>  [icon] [label] [badge]
  <TabsContent value>  [slot: content]
```

**Active indicator:** Underline (2px slides) or fill pill (moves). Version defines style.

**Keyboard:** ←/→ or ↑/↓ focus. Automatic: focus activates. Manual: Enter/Space. Home/End.

**Accessibility:** `role="tablist"`, `aria-orientation`. Trigger: `role="tab"`, `aria-selected`, `aria-controls`. Content: `role="tabpanel"`, `aria-labelledby`, `tabindex="0"`. Inactive: `hidden`.

**Types (trigger):** All 15. List/Content: `default` | `ghost` | `subtle` | `flat` | `neutral`

**Sizes:** `sm` | `md` | `lg`

---
---

## GROUP C — OVERLAY & FLOATING

### C1. `alert-dialog.tsx`

**Anatomy:**
```
<AlertDialog>
  <AlertDialogTrigger>
  <AlertDialogPortal>
    <AlertDialogOverlay>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>     ← REQUIRED
        <AlertDialogDescription> ← REQUIRED
      <AlertDialogFooter>
        <AlertDialogCancel>    ← REQUIRED
        <AlertDialogAction>
```

**Rules:** Title + Description + Cancel are REQUIRED. NO Escape close by default.

**Focus:** Opens to Action or Cancel. Trapped. Returns to trigger.

**Accessibility:** `role="alertdialog"` (NOT `role="dialog"`), `aria-labelledby`, `aria-describedby`, `aria-modal="true"`

**Types:** Content: `default`|`elevated`|`contrast`|`soft`|`neutral`. Cancel: `ghost`/`outline`/`neutral`. Action: `solid`/`contrast`.

---

### C2. `context-menu.tsx`

**Anatomy:**
```
<ContextMenu>
  <ContextMenuTrigger>  [right-click target]
  <ContextMenuContent>
    <ContextMenuItem>  [icon] [label] [shortcut]
    <ContextMenuCheckboxItem> | <ContextMenuRadioGroup><ContextMenuRadioItem>
    <ContextMenuSeparator> | <ContextMenuSub> | <ContextMenuLabel> | <ContextMenuShortcut>
```

**Behavior:** contextmenu event → opens at pointer. Escape/outside → close. ↑/↓ nav. →/← sub open/close.

**Accessibility:** `role="menu"`, `role="menuitem/*checkbox/*radio"`, `aria-haspopup`, `aria-expanded`

---

### C3. `dialog.tsx`

**Anatomy:**
```
<Dialog>
  <DialogTrigger>
  <DialogPortal>
    <DialogOverlay>
    <DialogContent>
      <DialogHeader>  <DialogTitle> <DialogDescription>
      [slot: body]
      <DialogFooter>  [slot: actions]
      <DialogClose>   X button
```

**Animation:** Overlay opacity 0→0.6 | --duration-slow. Content: opacity+scale+translateY | --duration-slower | --ease-decelerate.

**Sizes:** sm:400px | md:500px | lg:640px | xl:800px | full:calc(100vw - 48px)

**Keyboard:** Escape → close. Tab → cycles within (trapped).

**Accessibility:** `role="dialog"`, `aria-modal="true"`, `aria-labelledby`, `aria-describedby`

**Types (content):** `default` | `solid` | `elevated` | `contrast` | `soft` | `tinted` | `neutral`

---

### C4. `dropdown-menu.tsx`

**Anatomy:** Mirrors ContextMenu. Add: `side`/`align`/`sideOffset` props on Content.

**Behavior:** Click trigger → open/close. Same keyboard nav as ContextMenu.

**Accessibility:** Same as ContextMenu.

---

### C5. `hover-card.tsx`

**Anatomy:**
```
<HoverCard openDelay={300} closeDelay={300}>
  <HoverCardTrigger>  [slot]
  <HoverCardContent side align sideOffset>  [slot: rich content]
```

**Behavior:** Mouse enters → openDelay → show. Enter content → stays. Leave both → closeDelay → hide. Touch: no trigger.

**Animation:** open: opacity+scale | --duration-fast. Close: opacity | --duration-fast.

**Accessibility:** `role="tooltip"` (info) or `role="dialog"` (interactive). Touch: provide alternative.

---

### C6. `popover.tsx`

**Anatomy:**
```
<Popover>
  <PopoverTrigger>
  <PopoverContent side align sideOffset>
    [slot: interactive content]
    <PopoverClose>
```

**Behavior:** Click → open/close. Escape → close. Outside click → close. Focus moves into content.

**Accessibility:** `role="dialog"` or `role="tooltip"`. `aria-labelledby`, `aria-expanded`.

---

### C7. `tooltip.tsx`

**Anatomy:**
```
<TooltipProvider delayDuration={400}>
  <Tooltip>
    <TooltipTrigger asChild>  [slot: trigger]
    <TooltipContent side align sideOffset>
      [text only — NO interactive elements]
      <TooltipArrow>
```

**Rules:** Text ONLY. Never wrap disabled element — wrap `<span>` around it. `aria-describedby` always present.

**Behavior:** Hover → open after delay. Focus → open immediately. Leave/Blur/Escape → close.

**Accessibility:** `role="tooltip"`. Trigger: `aria-describedby` (always). Content: matching `id`.

**Sizes:** `sm` (max-w 200px) | `md` (max-w 300px)

---
---

## GROUP D — FORM & INPUT

### D1. `button.tsx`

**Anatomy:**
```
<Button size type variant>
  [leading-icon]  [label]  [trailing-icon]
  [spinner]  ← loading state replaces content
</Button>
```

**States:** default | hover | focus | active (scale 0.97, 80ms snap) | loading (spinner, min-width fixed) | disabled

**Loading:** `aria-disabled="true"` (not `disabled`), `aria-busy="true"`. Width fixed.

**Keyboard:** Enter/Space. Default `type="button"`.

**Accessibility:** Native `<button>`. `aria-disabled` for loading. `aria-label` if icon-only.

**Types:** All 15. This is the reference implementation.

**Sizes:**
| Size | H    | Pad H | Font | Icon |
|------|------|-------|------|------|
| xs   | 20px | 8px   | 10px | 12px |
| sm   | 28px | 12px  | 12px | 14px |
| md   | 36px | 16px  | 14px | 16px |
| lg   | 44px | 20px  | 16px | 18px |
| xl   | 52px | 24px  | 18px | 20px |

---

### D2. `button-group.tsx`

**Anatomy:** `<ButtonGroup orientation="horizontal|vertical" attached size> [Buttons] </ButtonGroup>`

**Attached mode:** First child: left radius only. Middle: no radius. Last: right radius only. Shared border collapses.

**Accessibility:** `role="group"`, `aria-label` if meaningful.

---

### D3. `checkbox.tsx`

**Anatomy:**
```
<Checkbox id checked indeterminate disabled>  [checkmark/dash icon]
<Label htmlFor>Label</Label>
```

**States:** unchecked | checked (SVG draws in) | indeterminate (dash) | hover | focus | active (scale 0.9) | disabled

**Keyboard:** Space → toggle.

**Accessibility:** `role="checkbox"`, `aria-checked` (true|false|mixed), `aria-disabled`, `aria-required`. Must have label.

**Types:** `default` | `solid` | `outline` | `tinted` | `soft` | `neutral` | `unstyled`

**Sizes:** sm:14px | md:18px | lg:22px (box size)

---

### D4. `combo-box.tsx`

**Anatomy:**
```
<ComboBox>
  <ComboBoxTrigger>  [value|placeholder] [chevron]
  <ComboBoxContent>
    <ComboBoxInput>
    <ComboBoxEmpty>
    <ComboBoxList>
      <ComboBoxGroup label>
        <ComboBoxItem value>  [check] [label]
```

**Behavior:** Click → open, focus input. Type → filter. ↑/↓ nav. Enter → select+close. Escape → close. Multi-select: tags in trigger.

**Accessibility:** Trigger: `role="combobox"`, `aria-expanded`, `aria-haspopup="listbox"`. List: `role="listbox"`. Item: `role="option"`, `aria-selected`.

**Types (trigger):** All 15. Panel: `default`/`elevated`.

**Sizes:** `sm` | `md` | `lg`

---

### D5. `date-picker.tsx`

**Anatomy:**
```
<DatePicker>
  <DatePickerTrigger>  [calendar icon] [date|placeholder]
  <DatePickerContent>
    <Calendar>
    [time picker — optional]
    [preset buttons — optional: "Today", "Yesterday", "Last 7 days"]
```

**Accessibility:** Trigger: `aria-haspopup="dialog"`, `aria-expanded`. Content: `role="dialog"`. See Calendar.

---

### D6. `field.tsx`

**Anatomy:**
```
<Field name required disabled error>
  <FieldLabel>  [text] [required *]
  <FieldControl>  [slot: Input | Select | Textarea | etc.]
  <FieldDescription>  helper text (always shown)
  <FieldError>  error message (shown on error only)
```

**State propagation (context):** error → control error border + FieldError visible. required → `*` + `aria-required`. disabled → all dimmed.

**Accessibility:** Label `htmlFor`↔control `id`. Control: `aria-describedby` (desc+error), `aria-invalid`. Error: `role="alert"`.

---

### D7. `input.tsx`

**Anatomy:** `<Input type placeholder value onChange disabled readOnly invalid />`

**States:** default | hover (border brightens) | focus (border→focus-ring-color + ring) | filled | disabled | readonly | invalid (border→error-color)

**Accessibility:** Must have label. `aria-invalid`, `aria-describedby`, `aria-required`.

**Types:** `default` | `outline` | `ghost` | `soft` | `subtle` | `flat` | `neutral` | `elevated` | `unstyled`

**Sizes:** sm:28px | md:36px | lg:44px

---

### D8. `input-group.tsx`

**Anatomy:**
```
<InputGroup>
  <InputGroupAddon position="left">  [icon | text | button]
  <Input />
  <InputGroupAddon position="right">  [slot]
</InputGroup>
```

**Visual:** Single visual unit. Shared border. Focus on input → full group border activates. Addon heights match input.

---

### D9. `input-otp.tsx`

**Anatomy:**
```
<InputOTP maxLength={6} pattern="[0-9]*">
  <InputOTPGroup>  <InputOTPSlot index={0}> ... <InputOTPSlot index={2}>
  <InputOTPSeparator>  "-"
  <InputOTPGroup>  <InputOTPSlot index={3}> ...
```

**States (slot):** empty (placeholder) | active (caret+focus ring) | filled (character)

**Behavior:** Single underlying `<input>`. Type → advance. Backspace → clear+retreat. Paste → distribute.

**Accessibility:** `inputmode="numeric"`, `autocomplete="one-time-code"`, `aria-label`.

---

### D10. `label.tsx`

**Anatomy:** `<Label htmlFor="id">  [text] [required indicator]  </Label>`

**States:** Associated disabled control → `--disabled-opacity`. Associated invalid → optional error color.

**Sizes:** `sm` | `md` | `lg`

---

### D11. `native-select.tsx`

**Anatomy:** Styled `<select>` with custom SVG chevron. Options/optgroups native.

**States:** Same as Input. **Accessibility:** Fully native.

---

### D12. `radio-group.tsx`

**Anatomy:**
```
<RadioGroup value onValueChange orientation>
  <RadioGroupItem value id disabled>  [radio circle]
  <Label htmlFor>Option A</Label>
```

**States:** unselected | selected (dot scales in) | hover | focus | disabled

**Keyboard:** Tab → into group. ↑/↓ or ←/→ → cycle + auto-select (loops). One tab stop in group.

**Accessibility:** `role="radiogroup"`, `aria-orientation`. Item: `role="radio"`, `aria-checked`.

**Types:** `default` | `solid` | `outline` | `tinted` | `soft` | `neutral` | `unstyled`

**Sizes:** sm:14px | md:18px | lg:22px (circle)

---

### D13. `select.tsx`

**Anatomy:**
```
<Select>
  <SelectTrigger size>  <SelectValue placeholder> <SelectIcon>
  <SelectPortal>
    <SelectContent position side>
      <SelectScrollUpButton>
      <SelectViewport>
        <SelectGroup>  <SelectLabel>  <SelectItem>  <SelectItemIndicator> <SelectItemText>
        <SelectSeparator>
      <SelectScrollDownButton>
```

**Behavior:** Click → open, focus selected. ↑/↓ nav. Enter/Space → select. Escape → close. Type char → jump. Home/End.

**Accessibility:** `role="combobox"`, `aria-expanded`, `aria-haspopup="listbox"`. Content: `role="listbox"`. Item: `role="option"`, `aria-selected`.

**Sizes:** `sm` | `md` | `lg`

---

### D14. `slider.tsx`

**Anatomy:**
```
<Slider min max step value orientation disabled>
  <SliderTrack>  <SliderRange>
  <SliderThumb>  [second thumb for range variant]
```

**States:** Track: static. Range: proportional fill. Thumb: default | hover (scale) | focus (ring) | active (dragging).

**Keyboard:** ←/→/↑/↓ ±step. Shift+Arrow ±10. PageUp/Down ±10%. Home→min, End→max.

**Accessibility:** `role="slider"`, `aria-valuemin/max/now/text`, `aria-orientation`, `aria-disabled`

**Sizes:** sm: 2px track/14px thumb | md: 4px/18px | lg: 6px/22px

---

### D15. `switch.tsx`

**Anatomy:** `<Switch checked onCheckedChange disabled> <SwitchThumb> </Switch>`

**States:** unchecked (thumb left, dim track) | checked (thumb right, accent track) | hover | focus | active (thumb squeeze) | disabled

**Animation:** Thumb translate | --duration-base | --ease-spring. Track bg transition simultaneously.

**Accessibility:** `role="switch"`, `aria-checked`, `aria-disabled`. Must have label.

**Sizes:** sm:32×16/thumb12 | md:44×24/thumb18 | lg:56×32/thumb24

---

### D16. `textarea.tsx`

**Anatomy:** `<Textarea placeholder value rows resize disabled readOnly invalid autoResize />`

**Same states as Input.** autoResize: height grows with content via scrollHeight.

**Types:** Same as Input.

---

### D17. `toggle.tsx`

**Anatomy:** `<Toggle pressed onPressedChange disabled size type> [icon] [label] </Toggle>`

**States:** unpressed | pressed (solid/accent) | hover | focus | disabled

**Accessibility:** `role="button"`, `aria-pressed="true|false"`

**Types:** `default` | `outline` | `ghost` | `tinted` | `soft` | `solid` | `neutral` | `flat` | `unstyled`

---

### D18. `toggle-group.tsx`

**Anatomy:**
```
<ToggleGroup type="single|multiple" value onValueChange orientation>
  <ToggleGroupItem value>  [icon] [label]
```

**Keyboard:** ←/→ or ↑/↓ focus. Single: arrow auto-selects. Multiple: Space toggles.

**Accessibility:** `role="group"`. Item: `role="radio"` (single) or `role="checkbox"` (multiple). `aria-checked`/`aria-pressed`.

---
---

## GROUP E — DATA DISPLAY

### E1. `avatar.tsx`

**Anatomy:**
```
<Avatar size fallback>
  <AvatarImage src alt>
  <AvatarFallback delayMs={600}>  [initials | icon]
```

**States:** loading (fallback) | loaded (image) | error (fallback)

**Sizes:** xs:20 | sm:28 | md:36 | lg:48 | xl:64 | 2xl:96 (px diameter)

**Shape:** circle default. Square via prop.

**Accessibility:** `alt` required on image. Fallback: `aria-hidden` if alt covers it.

---

### E2. `badge.tsx`

**Anatomy:** `<Badge type size> [leading icon] [text] [trailing icon/close] </Badge>`

**Interactive:** When onClick/onRemove → hover/focus/active states.

**Types:** All 15.

**Sizes:** sm:16px | md:20px | lg:24px (height)

---

### E3. `calendar.tsx`

**Anatomy:**
```
<Calendar mode="single|multiple|range" selected onSelect disabled>
  <CalendarCaption>  [prev button] [month/year] [next button]
  <CalendarGrid>
    <CalendarGridHead>  <CalendarColumnHeader>  M T W T F S S
    <CalendarGridBody>
      <CalendarRow>  <CalendarCell>  <CalendarDay>
```

**Day states:** default | hover | focus | selected | range-start | range-end | range-middle | today | outside (dimmed) | disabled | hidden

**Keyboard:** ←/→ day. ↑/↓ week. PageUp/Down month. Home/End week bounds. Enter/Space select.

**Accessibility:** `role="grid"`, `role="gridcell"`, `role="button"` on days. `aria-label` (full date string). `aria-selected`, `aria-disabled`, `aria-current="date"` (today).

---

### E4. `carousel.tsx`

**Anatomy:**
```
<Carousel orientation opts>
  <CarouselContent>
    <CarouselItem>  [slot]
  <CarouselPrevious>  <CarouselNext>
  [CarouselDots]
```

**States:** Prev/Next: default|hover|focus|active|disabled (at bounds). Dots: default|active.

**Behavior:** Drag/swipe (Embla). Autoplay pauses on hover/focus. Loop wraps.

**Keyboard:** ←/→ or ↑/↓ when carousel focused. Tab cycles through slide content.

**Accessibility:** `role="region"`, `aria-roledescription="carousel"`. Slide: `role="group"`, `aria-roledescription="slide"`, `aria-label="X of Y"`. Live region on change.

---

### E5. `chart.tsx`

**Anatomy:**
```
<ChartContainer config={chartConfig}>
  [Recharts: LineChart | BarChart | PieChart | AreaChart | ...]
    [ChartTooltip content={<ChartTooltipContent />}]
    [ChartLegend content={<ChartLegendContent />}]
```

**Config:** `{ [dataKey]: { label, color: "hsl(var(--chart-N))", icon? } }`

**Colors:** `--chart-1` through `--chart-12` (version defines)

**Accessibility:** `role="img"`, `aria-label`. Data table alternative recommended. Tooltip: `role="tooltip"`.

---

### E6. `data-table.tsx`

**Anatomy:**
```
<DataTable columns data>
  [DataTableToolbar]  search | filters | column toggle | row actions
  <Table>
  [DataTablePagination]
```

**Features:** Sorting | Filtering (global + per-column) | Row selection | Pagination | Column resize | Reorder

**States:** Row: default|hover|selected|focused. Header: default|hover|sorted-asc|sorted-desc. Loading: skeleton rows.

**Keyboard:** ↑/↓ rows. Space → select. Enter → activate. Header Enter → cycle sort.

**Accessibility:** Native `<table>`, `scope="col"`, `aria-sort`, `role="checkbox"` on selection cells.

---

### E7. `empty-state.tsx`

**Anatomy:**
```
<EmptyState>
  <EmptyStateIllustration>  [icon | SVG | image]
  <EmptyStateContent>
    <EmptyStateTitle>
    <EmptyStateDescription>
  <EmptyStateActions>  [slot: Buttons]
```

**Sizes:** sm: 32px icon / h5-title | md: 48px icon / h4-title | lg: 80px icon / h2-title

**Accessibility:** `aria-live="polite"` on container.

---

### E8. `empty.tsx`

**Anatomy:** `<Empty> [icon] [text] </Empty>` — inline, ~40–60px. Used inside ComboBox/Select/Command.

**Token consumption:** `--v-text-muted` for both icon and text.

---

### E9. `item.tsx`

**What it is:** Generic list item primitive. Base for menu items, command items, list rows.

**Anatomy:**
```
<Item size disabled selected>
  <ItemIcon>
  <ItemContent>  <ItemLabel> <ItemDescription>
  <ItemTrailing>  [badge | shortcut | chevron]
```

**States:** default | hover | focus | active | selected | disabled

**Token consumption:** default: transparent/--v-text. hover: --v-bg-hover. selected: --v-accent 10%/--v-accent text. disabled: --disabled-opacity.

---

### E10. `kbd.tsx`

**Anatomy:** `<Kbd>⌘</Kbd>` / `<Kbd>Ctrl</Kbd>` / `<Kbd>K</Kbd>` → `<kbd>` element

**No interaction. No states. No types.**

**Token consumption:** `--v-bg-elevated`, `--v-border` (raised effect), `--v-text`, monospace font.

---

### E11. `progress.tsx`

**Anatomy:**
```
<Progress value max indeterminate>
  <ProgressTrack>  <ProgressFill>
```

**States:** determinate (fill = value/max%) | indeterminate (looping) | complete (optional color change)

**Animation:** Value change: smooth | --duration-slow | --ease-decelerate. Indeterminate: loop | 1.5s | linear.

**Sizes:** sm:2px | md:6px | lg:10px | xl:16px (track height)

**Accessibility:** `role="progressbar"`, `aria-valuemin/max/now`, `aria-valuetext`. Indeterminate: omit `aria-valuenow`.

---

### E12. `table.tsx`

**Anatomy:**
```
<Table>
  <TableCaption>
  <TableHeader>  <TableRow>  <TableHead>  ← <th>
  <TableBody>    <TableRow>  <TableCell>  ← <td>
  <TableFooter>  <TableRow>  <TableCell>
```

**Row states:** default | hover (if interactive) | selected

**Column:** `sticky` (first col) | `align` (left|center|right)

---

### E13. `typography.tsx`

**Components:**
```
<H1>–<H6>    headings
<P>          paragraph
<Lead>       intro text (1.25× base)
<Large>      slightly larger (1.125×)
<Small>      smaller (0.875×)
<Muted>      dimmed (--v-text-secondary)
<Blockquote> quoted section — left border 4px --v-accent
<Code>       inline code — mono, bg highlight
<Pre>        code block — scrollable, full width
<List type="ul|ol">  <ListItem>
<Mark>       highlighted
<Del>        strikethrough
<Kbd>        keyboard key
<Anchor>     styled hyperlink — --v-accent + underline on hover
```

All headings: scale/weight/tracking/leading per version's typography spec.

---
---

## GROUP F — FEEDBACK & STATUS

### F1. `alert.tsx`

**Anatomy:**
```
<Alert variant="default|info|success|warning|destructive">
  <AlertIcon>     variant-matched icon
  <AlertContent>
    <AlertTitle>
    <AlertDescription>
  [AlertClose]
```

**Variants** (semantic — see variant.md): default/info/success/warning/destructive.
Each variant controls: icon, border accent, bg tint.

**Types (structural):** `default` | `outline` | `solid` | `soft` | `tinted` | `subtle` | `elevated`

**Accessibility:** `role="alert"` (auto-announces) or `role="status"` (less urgent). Icon: `aria-hidden`. Close: `aria-label="Dismiss"`.

---

### F2. `skeleton.tsx`

**Anatomy:** `<Skeleton className="h-4 w-[250px]" />` / `<Skeleton circle />`

**Animation:** Shimmer sweeps (translateX -100%→100%) | 1.5s | linear | infinite. Gradient: transparent→`--v-skeleton-highlight`→transparent.

**Accessibility:** `aria-hidden="true"`. Loading: parent `aria-busy="true"`.

---

### F3. `sonner.tsx`

**Anatomy:**
```
<Toaster position duration>

toast("msg") | toast.success() | toast.error() | toast.warning()
toast.loading() | toast.promise(promise, {loading, success, error})
```

**Toast anatomy:** `[icon] [title] [description] [action button] [close button]`

**Position:** top-left/center/right | bottom-left/center(default)/right

**Stacking:** Stack → hover spreads. Hover pauses auto-dismiss (default 4000ms).

**Animation:** Enter: slide+opacity | --duration-slower. Dismiss: slide | --duration-slow.

**Accessibility:** `aria-live="polite"` (non-error) / `"assertive"` (error). `role="status"`/`role="alert"`.

---

### F4. `spinner.tsx`

**Anatomy:** `<Spinner size label />` — SVG/CSS rotation

**Animation:** 360deg | 0.7s | linear | infinite

**Sizes:** xs:12px | sm:16px | md:24px | lg:36px

**Accessibility:** `role="status"`, visually hidden label ("Loading..."), `aria-live="polite"`.

**Token consumption:** Track: `--v-border`. Arc: `--v-accent`.

---

### F5. `toast.tsx`

**Anatomy:**
```
<ToastProvider swipeDirection>
  <Toast variant duration open onOpenChange>
    <ToastTitle> <ToastDescription>
    <ToastAction altText>  [button]
    <ToastClose>
  <ToastViewport>
```

**States:** open | closed | swipe (dragging)

**Swipe-to-dismiss:** Past threshold → dismiss. Before threshold → snap back.

**Animation:** Open: slide+opacity | --duration-slow. Close: slide | --duration-base. Swipe: realtime.

**Accessibility:** `role="status"`/`role="alert"`. `aria-live`. `aria-atomic="true"`.

---
---

## GROUP G — SPECIALTY COMPONENTS

### G1. `analog-clock.tsx`

**Anatomy:**
```
<AnalogClock time size showSeconds showNumbers>
  <ClockFace>
    <ClockNumbers>  <ClockTicks>
    <ClockHand name="hour|minute|second">
    <ClockCenter>
```

**Hand rotation:**
```css
--hour-angle:   calc(H * 30deg + M * 0.5deg);
--minute-angle: calc(M * 6deg);
--second-angle: calc(S * 6deg);
transform-origin: 50% 100%; /* bottom-center */
```

**Second hand:** smooth (0.1s linear) or tick (snap to second).

**Accessibility:** `role="img"`, `aria-label="Clock showing [time]"` (live update). Pair with DigitalClock as accessible fallback.

---

### G2. `digital-clock.tsx`

**Anatomy:**
```
<DigitalClock format="12|24" showSeconds showDate timezone live>
  <ClockSegment> HH  <ClockSeparator> :  <ClockSegment> MM
  [<ClockAmPm>]  [<ClockDate>]
```

**Optional:** Flip animation (split-flap board style).

**Accessibility:** `role="timer"`. `aria-live="off"`. `aria-label` updated per minute.

---

### G3. `direction.tsx`

**Anatomy:**
```
<Direction value size animated>
  <DirectionArrow>  rotating arrow indicator
  <DirectionLabel>  "N" | "NE" | "45°"
```

**Props:** `value`: 0–360 or cardinal string. `animated`: smooth transition.

**Accessibility:** `role="img"`, `aria-label="Direction: North-East, 45 degrees"`.

---

### G4. `drawer.tsx`

**Anatomy:** Mirrors Sheet + `<DrawerHandle>` (drag bar at top of bottom drawer).

**Key differences from Sheet:**
- Drag-to-dismiss gesture (drag past threshold → dismiss)
- Snap points (e.g. 40vh, 70vh, fullscreen)
- `shouldScaleBackground` — scales page behind for depth

**Animation:** Enter: --duration-slower --ease-decelerate. Dismiss: --duration-slow. Drag: realtime. Snap: --ease-spring.

**Accessibility:** Same as Sheet (`role="dialog"`, focus trap).

---

### G5. `command.tsx`

**Anatomy:**
```
<Command>
  <CommandDialog open onOpenChange>
    <CommandInput placeholder>
    <CommandEmpty>
    <CommandList>
      <CommandGroup heading>
        <CommandItem value onSelect>  [icon] [label] [shortcut]
        <CommandSeparator>
```

**Behavior:** Type → filter (fuzzy, score 0–1). ↑/↓ nav. Enter → execute. Escape → close/clear.

**Filtering:** Default fuzzy. Custom: `filter(value, search) → 0–1`. Score 0 = hidden.

**Accessibility:** Input: `role="combobox"`, `aria-autocomplete="list"`, `aria-controls`. List: `role="listbox"`. Items: `role="option"`, `aria-selected`. Empty: `aria-live="polite"`.

---

### G6. `icon-button.tsx`

**Anatomy:**
```
<IconButton size type tooltip shape="square|circle">
  [icon]
  <VisuallyHidden>Accessible label</VisuallyHidden>
```

**Rules:** MUST have `tooltip` prop OR `aria-label`. Loading: spinner replaces icon.

**Types:** All 15.

**Sizes:** xs:20px | sm:28px | md:36px | lg:44px | xl:52px (square dimensions)

---
---

## COMPONENT × SIZE SUPPORT MATRIX

| Component         | xs | sm | md | lg | xl |
|-------------------|----|----|----|----|----|
| Button            | ✓  | ✓  | ✓  | ✓  | ✓  |
| IconButton        | ✓  | ✓  | ✓  | ✓  | ✓  |
| Badge             | ✓  | ✓  | ✓  | -  | -  |
| Input             | -  | ✓  | ✓  | ✓  | -  |
| Textarea          | -  | ✓  | ✓  | ✓  | -  |
| Select            | -  | ✓  | ✓  | ✓  | -  |
| NativeSelect      | -  | ✓  | ✓  | ✓  | -  |
| Checkbox          | ✓  | ✓  | ✓  | -  | -  |
| RadioGroup        | -  | ✓  | ✓  | ✓  | -  |
| Switch            | -  | ✓  | ✓  | ✓  | -  |
| Slider            | -  | ✓  | ✓  | ✓  | -  |
| Avatar            | ✓  | ✓  | ✓  | ✓  | ✓  |
| Progress          | -  | ✓  | ✓  | ✓  | ✓  |
| Spinner           | ✓  | ✓  | ✓  | ✓  | -  |
| Tooltip           | -  | ✓  | ✓  | -  | -  |
| Accordion         | -  | ✓  | ✓  | ✓  | -  |
| Tabs              | -  | ✓  | ✓  | ✓  | -  |
| Pagination        | -  | ✓  | ✓  | ✓  | -  |

---

## COMPONENT × TYPE SUPPORT MATRIX

*(✓ supported | ○ valid but rarely used | — not applicable)*

| Component             | dflt | solid | outln | ghost | inv | cntr | soft | neut | sbtl | elvd | flat | tntd | link | dsbl | unstl |
|-----------------------|------|-------|-------|-------|-----|------|------|------|------|------|------|------|------|------|-------|
| **Button**            | ✓    | ✓     | ✓     | ✓     | ✓   | ✓    | ✓    | ✓    | ○    | ✓    | ✓    | ✓    | ✓    | ✓    | ✓     |
| **IconButton**        | ✓    | ✓     | ✓     | ✓     | ✓   | ✓    | ✓    | ✓    | ○    | ✓    | ✓    | ✓    | —    | ✓    | ✓     |
| **Badge**             | ✓    | ✓     | ✓     | ✓     | ✓   | ✓    | ✓    | ✓    | ✓    | ○    | ✓    | ✓    | —    | ✓    | ○     |
| **Card**              | ✓    | ✓     | ✓     | ✓     | ✓   | ✓    | ✓    | ✓    | ✓    | ✓    | ✓    | ✓    | —    | ✓    | ✓     |
| **Input**             | ✓    | —     | ✓     | ✓     | —   | —    | ✓    | ✓    | ✓    | ✓    | ✓    | —    | —    | ✓    | ✓     |
| **Textarea**          | ✓    | —     | ✓     | ✓     | —   | —    | ✓    | ✓    | ✓    | ✓    | ✓    | —    | —    | ✓    | ✓     |
| **Select/ComboBox**   | ✓    | —     | ✓     | ✓     | —   | —    | ✓    | ✓    | ○    | ✓    | ✓    | —    | —    | ✓    | ✓     |
| **Toggle**            | ✓    | ✓     | ✓     | ✓     | —   | ✓    | ✓    | ✓    | ○    | —    | ✓    | ✓    | —    | ✓    | ✓     |
| **ToggleGroup items** | ✓    | ✓     | ✓     | ✓     | —   | ✓    | ✓    | ✓    | ○    | —    | ✓    | ✓    | —    | ✓    | ✓     |
| **Tabs trigger**      | ✓    | ✓     | ✓     | ✓     | —   | ✓    | ✓    | ✓    | ○    | —    | ✓    | ✓    | —    | ✓    | ✓     |
| **Pagination link**   | ✓    | ✓     | ✓     | ✓     | —   | ✓    | ✓    | ✓    | —    | —    | ✓    | ✓    | ✓    | ✓    | ○     |
| **Accordion trigger** | ✓    | —     | —     | ✓     | —   | —    | ✓    | ✓    | ✓    | —    | ✓    | ○    | —    | ✓    | ✓     |
| **Alert**             | ✓    | ✓     | ✓     | —     | —   | ✓    | ✓    | ✓    | ✓    | ○    | —    | ✓    | —    | —    | ○     |
| **Sheet/Drawer**      | ✓    | ✓     | ✓     | —     | ✓   | ✓    | ✓    | ✓    | ○    | ✓    | —    | ✓    | —    | —    | ○     |
| **Dialog/AlertDialog**| ✓    | ✓     | —     | —     | —   | ✓    | ✓    | ✓    | —    | ✓    | —    | ○    | —    | —    | ○     |
| **Tooltip**           | ✓    | ✓     | —     | —     | ✓   | ✓    | —    | ✓    | —    | —    | —    | —    | —    | —    | ○     |
| **Menubar items**     | ✓    | —     | —     | ✓     | —   | —    | —    | ✓    | ✓    | —    | ✓    | —    | —    | ✓    | ○     |
| **Sidebar MenuButton**| ✓    | ✓     | —     | ✓     | —   | —    | ✓    | ✓    | ✓    | —    | ✓    | ✓    | —    | ✓    | ○     |
| **Checkbox**          | ✓    | ✓     | ✓     | —     | —   | —    | ✓    | ✓    | —    | —    | —    | ✓    | —    | ✓    | ✓     |
| **RadioGroup item**   | ✓    | ✓     | ✓     | —     | —   | —    | ✓    | ✓    | —    | —    | —    | ✓    | —    | ✓    | ✓     |

**Column key:** dflt=default | outln=outline | inv=inverse | cntr=contrast | neut=neutral | sbtl=subtle | elvd=elevated | tntd=tinted | dsbl=disabled-type | unstl=unstyled

---

## GLOBAL ACCESSIBILITY REQUIREMENTS

1. **Focus visible:** ALWAYS visible. Never `outline:none` without replacement. Ring: `--focus-ring-width` offset `--focus-ring-offset` color `--focus-ring-color`.

2. **Color contrast:** WCAG AA (4.5:1 normal text, 3:1 large text). Verify per version × variant combination.

3. **Touch targets:** Minimum 44×44px. Use padding or pseudo-element expansion.

4. **Reduced motion:** All animations respect `prefers-reduced-motion: reduce`.

5. **Screen reader text:** `<VisuallyHidden>` / `.sr-only` for icon-only or implied labels.

6. **Error association:** Form errors linked via `aria-describedby`.

7. **Loading states:** `aria-busy="true"` on containers. Spinners have visually-hidden labels.

8. **Dynamic content:** `aria-live` regions (polite non-urgent, assertive errors/alerts only).

9. **`disabled` TYPE vs STATE:** Type is visual only — component may still be interactive. Do NOT add `aria-disabled` unless interaction is also blocked. Use `aria-describedby` to explain the locked state.

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## THEMING CONTRACT

Every version file MUST provide all of these tokens:

```css
/* ── SURFACE ── */
--v-bg
--v-bg-hover
--v-bg-active
--v-bg-elevated

/* ── BORDER ── */
--v-border
--v-border-hover

/* ── TEXT ── */
--v-text
--v-text-secondary
--v-text-muted

/* ── ACCENT (solid / outline / soft / tinted) ── */
--v-accent
--v-accent-hover
--v-accent-active
--v-on-accent                  /* text ON solid accent bg */
--v-accent-ghost               /* ~10% opacity */
--v-accent-muted               /* ~6% — soft type bg */
--v-accent-muted-hover         /* ~10% — soft type hover */
--v-accent-tinted              /* ~22% — tinted type bg */
--v-accent-tinted-hover        /* ~30% — tinted type hover */
--v-accent-tinted-active       /* ~38% — tinted type active */
--v-accent-tinted-border       /* ~35% — tinted type border (optional) */

/* ── CONTRAST ── */
--v-contrast-bg
--v-contrast-border
--v-contrast-text

/* ── GHOST ── */
--v-ghost-hover               /* ~8% white/dark */
--v-ghost-active              /* ~12% white/dark */

/* ── NEUTRAL (new) ── */
--v-neutral-bg                /* pure gray, no hue influence */
--v-neutral-bg-hover
--v-neutral-bg-active
--v-neutral-border
--v-neutral-text

/* ── SUBTLE (new) ── */
--v-subtle-bg                 /* 2–3% accent or neutral opacity */

/* ── ELEVATED (new) ── */
--v-shadow-elevated           /* hard offset | soft blur | glow — version defines */
--v-shadow-elevated-hover     /* intensified */
--v-shadow-elevated-active    /* reduced (pressed) */

/* ── DISABLED TYPE (new) ── */
--v-disabled-bg               /* gray, no accent */
--v-disabled-border           /* very faint */
--v-disabled-text             /* muted, no accent */

/* ── SKELETON ── */
--v-skeleton-bg
--v-skeleton-highlight

/* ── INPUT ── */
--v-input-bg

/* ── SEMANTIC (consistent across all versions) ── */
--error-color
--success-color
--warning-color
--info-color
--error-bg                    /* faint red tint */
--success-bg
--warning-bg
--info-bg

/* ── CHART ── */
--chart-1 through --chart-12
```

---

*End of _BASE — Component Mechanics Reference*
*62 components | 15 types | 10 interaction states | Version-agnostic*
*Pairs with: version files v01–v20 (visual themes) + variant.md (semantic colors)*