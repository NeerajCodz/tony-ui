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
  └── Types       (which of the 7 component types apply)
  └── Tokens      (which CSS variables the component reads)

version-XX.md     ← Theme layer (20 versions)
  └── Overrides --token values only
  └── Adds shape effects (clip-path, box-shadow, filters)
  └── Adds version-specific animations
  └── Never changes anatomy or behavior
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
--disabled-opacity: 0.4;
--disabled-cursor:  not-allowed;
```

## GLOBAL STATE MODEL

Every interactive component implements this state machine:

```
States:
  default   → The component at rest. No interaction. Full opacity.
  hover     → Pointer is within bounds. Visual feedback, no commitment.
  focus     → Keyboard focus. Focus ring visible. ALWAYS visible. Never hidden.
  active    → Pointer down OR keyboard activation. Pressed state.
  disabled  → Not interactive. opacity: --disabled-opacity. pointer-events: none.
  loading   → Async operation in progress. Content may be replaced by spinner.
  error     → Validation failure or async error. Error color tokens active.
  selected  → Item is chosen/checked/on. Selected color tokens active.
  indeterminate → Partial selection (checkbox, progress). Mid-state visual.
  empty     → No content to show. Empty state component or placeholder.
  readonly  → Displays value, not editable. No hover feedback. Focusable.

Compound states (allowed simultaneously):
  hover + focus     ✓
  focus + error     ✓
  selected + hover  ✓
  disabled + error  ✓ (show error message, disable interaction)
  loading + disabled ✓ (loading implies disabled)
```

## GLOBAL TYPE × STATE TOKEN MAP

```
For each component type, these tokens apply per state:
(Versions fill in the actual values; the mapping structure is constant)

TYPE: default
  default:  bg=--v-bg         border=--v-border        text=--v-text
  hover:    bg=--v-bg-hover   border=--v-border-hover  text=--v-text
  focus:    bg=--v-bg         border=--focus-ring-color text=--v-text   + focus ring
  active:   bg=--v-bg-active  border=--v-border        text=--v-text   + scale(0.98)
  disabled: opacity=--disabled-opacity

TYPE: solid
  default:  bg=--v-accent           border=none              text=--v-on-accent
  hover:    bg=--v-accent-hover      border=none              text=--v-on-accent
  active:   bg=--v-accent-active     border=none              text=--v-on-accent

TYPE: outline
  default:  bg=transparent     border=--v-accent 1px    text=--v-accent
  hover:    bg=--v-accent-ghost border=--v-accent        text=--v-accent
  active:   bg=--v-accent-ghost border=--v-accent        text=--v-accent + scale(0.98)

TYPE: ghost
  default:  bg=transparent     border=none              text=--v-text-secondary
  hover:    bg=--v-ghost-hover  border=none              text=--v-text
  active:   bg=--v-ghost-active border=none              text=--v-text

TYPE: inverse
  default:  bg=--v-text        border=none              text=--v-bg
  hover:    bg=--v-text-hover   border=none              text=--v-bg

TYPE: contrast
  default:  bg=--v-contrast-bg  border=--v-contrast-border text=--v-contrast-text
  hover:    brightness(1.1)

TYPE: soft
  default:  bg=--v-accent-muted border=none              text=--v-text-secondary
  hover:    bg=--v-accent-muted-hover                    text=--v-text
```

---

## GLOBAL SIZE SCALE

All sizeable components use this scale as baseline. Individual component docs note overrides.

| Size | Height    | Padding H | Padding V | Font Size | Icon Size | Radius (base) |
|------|-----------|-----------|-----------|-----------|-----------|----------------|
| `xs` | 20px      | 6px       | 2px       | 10px      | 12px      | --radius-sm     |
| `sm` | 28px      | 10px      | 4px       | 12px      | 14px      | --radius-md     |
| `md` | 36px      | 14px      | 8px       | 14px      | 16px      | --radius-md     |
| `lg` | 44px      | 18px      | 10px      | 16px      | 18px      | --radius-lg     |
| `xl` | 52px      | 22px      | 12px      | 18px      | 20px      | --radius-lg     |

---
---

# COMPONENT CATALOG

Components are grouped by functional category. Within each group, alphabetical order.

---

## GROUP A — LAYOUT & CONTAINER

### A1. `accordion.tsx`

**What it is:** Vertically stacked set of collapsible panels. One or multiple items open simultaneously.

**Anatomy:**
```
<Accordion>                          root — manages open state
  <AccordionItem>                    item — owns one trigger/content pair
    <AccordionTrigger>               trigger — button, always focusable
      [icon: chevron or custom]      decoration — rotates on open
      [label text]
    </AccordionTrigger>
    <AccordionContent>               content — collapsible region
      [slot: any content]
    </AccordionContent>
  </AccordionItem>
  ...
</Accordion>
```

**Props:**
- `type`: `"single"` (one open at a time) | `"multiple"` (many open)
- `defaultValue`: initially open item(s)
- `value` / `onValueChange`: controlled open state
- `collapsible`: (single mode) allow closing all items
- `disabled`: disable entire accordion

**States per AccordionItem:**
```
closed    → content hidden (height: 0, overflow: hidden)
open      → content visible (height: auto, animated)
disabled  → trigger non-interactive, --disabled-opacity
```

**Trigger states:** default | hover | focus | active | open (data-state="open")

**Behavior:**
- Click trigger → toggle open/close
- `Enter` / `Space` on focused trigger → toggle
- `Tab` → moves focus to next trigger (skips closed content)
- When open: content region receives `role="region"` linked to trigger via `aria-controls`
- Chevron icon: `transform: rotate(0deg)` → `rotate(180deg)` on open (version may override direction/style)

**Animation:**
```
Open:  height 0 → auto via @keyframes (or JS ResizeObserver)
       duration: --duration-slow | ease: --ease-decelerate
Close: height auto → 0
       duration: --duration-base | ease: --ease-accelerate
Content opacity: 0 → 1 on open (separate transition, slight delay)
```

**Accessibility:**
- `role="button"` on trigger (or native `<button>`)
- `aria-expanded="true|false"` on trigger
- `aria-controls="[content-id]"` on trigger
- `id` on content region matching `aria-controls`
- Trigger is always in tab order regardless of open state

**Types supported:** `default` | `ghost` | `soft`
(The trigger area inherits the type; content area is always transparent)

**Sizes:** `sm` | `md` | `lg` — affects trigger padding and font size only

**Token consumption:**
```
--v-bg, --v-border, --v-text, --v-text-secondary
--v-bg-hover, --v-border-hover
Trigger: all interactive tokens
Content: --v-bg (may be slightly different shade)
Divider between items: --v-border
```

---

### A2. `aspect-ratio.tsx`

**What it is:** A container that enforces a fixed aspect ratio on its child content.

**Anatomy:**
```
<AspectRatio ratio={16/9}>          root — sets padding-top trick or aspect-ratio CSS
  [slot: child content]              fills 100% width and height of parent
</AspectRatio>
```

**Props:**
- `ratio`: number (e.g. `16/9`, `4/3`, `1`, `21/9`)

**Behavior:**
- Uses CSS `aspect-ratio: var(--ratio)` property (modern) with fallback padding-top hack
- Child is `position: absolute; inset: 0` (padding-top method) or fills naturally (CSS property method)
- Does NOT clip content by default — overflow visible; version may add clip-path or overflow:hidden
- No interaction, no states, no focus management

**No Types** (layout primitive only — no visual treatment at this level)

**Token consumption:** None. Pure geometry.

---

### A3. `card.tsx`

**What it is:** A rectangular container for grouping related content. The foundational surface component.

**Anatomy:**
```
<Card>                               root surface — the styled container
  <CardHeader>                       optional — top section, usually title area
    <CardTitle>                      h-level heading
    <CardDescription>               secondary text
  </CardHeader>
  <CardContent>                      main content slot — always present
    [slot: any content]
  </CardContent>
  <CardFooter>                       optional — actions, meta info
    [slot: buttons/links]
  </CardFooter>
</Card>
```

**Props:**
- `clickable`: boolean — makes the entire card interactive (adds hover/active states + cursor:pointer)
- `selected`: boolean — selected state (checkbox-card pattern)
- `disabled`: boolean
- `href`: string — makes card a link container
- `orientation`: `"vertical"` (default) | `"horizontal"`

**States:**
```
default     → surface at rest
hover       → (if clickable) background shifts, border brightens
focus       → (if clickable) focus ring on root
active      → (if clickable) slight scale or translate down
selected    → selected token colors applied
disabled    → --disabled-opacity
```

**Non-clickable card:** No hover, no focus, no active state. Static surface.

**Sections:**
- `CardHeader`: padding-bottom is half of CardContent padding
- `CardContent`: full padding on all sides
- `CardFooter`: padding-top is half of CardContent padding; flex row, gap --space-4
- `CardTitle`: uses h3-equivalent styling (version typography tokens)
- `CardDescription`: uses body/secondary text tokens

**Animation:**
```
Clickable hover: transition all --duration-base --ease-standard
Selected:        border and background transition --duration-fast
Mount:           No animation by default; versions may add reveal
```

**Accessibility:**
- Non-clickable: no role needed
- Clickable: `role="button"` or native `<button>` / `<a>` wrapper, `tabindex="0"`
- Selected: `aria-selected="true"` or `aria-checked="true"` depending on pattern
- If link card: `<a>` wrapping all content, `aria-label` if title not descriptive enough

**Types supported:** All 7 (`default` | `solid` | `outline` | `ghost` | `inverse` | `contrast` | `soft`)

**Sizes:** Card has no strict size — it adapts to content. Padding controlled by size variant:
```
sm: --space-4 padding (16px)
md: --space-6 padding (20px) ← default
lg: --space-8 padding (24px)
```

**Token consumption:**
```
--v-bg, --v-border, --v-text, --v-text-secondary
--v-bg-hover, --v-border-hover, --v-bg-active (clickable)
--v-accent (selected border)
Sections use same bg (slightly different shade via version override)
```

---

### A4. `collapsible.tsx`

**What it is:** A single toggle-able section. Unlike Accordion, it's standalone — not part of a vertical stack.

**Anatomy:**
```
<Collapsible>                        root — manages open/close state
  <CollapsibleTrigger>               toggle button — any element with trigger role
    [slot: trigger content]
  </CollapsibleTrigger>
  <CollapsibleContent>               animated content region
    [slot: any content]
  </CollapsibleContent>
</Collapsible>
```

**Props:**
- `open` / `onOpenChange`: controlled state
- `defaultOpen`: initial state
- `disabled`: boolean

**Behavior:** Identical to AccordionItem in isolation. See Accordion.

**Animation:** Same as Accordion — height 0 → auto with opacity fade.

**Trigger states:** default | hover | focus | active

**Accessibility:**
- Trigger: `aria-expanded`, `aria-controls`
- Content: `role="region"`, `aria-labelledby`

**Types:** Trigger inherits component type. Content: transparent.

**Token consumption:** Same as Accordion single item.

---

### A5. `resizable.tsx`

**What it is:** Panels with a drag handle between them, allowing runtime resize.

**Anatomy:**
```
<ResizablePanelGroup direction="horizontal|vertical">
  <ResizablePanel defaultSize={50}>     panel A
    [slot: content]
  </ResizablePanel>
  <ResizableHandle>                     drag handle — the interactive divider
    [optional: grip icon]
  </ResizableHandle>
  <ResizablePanel defaultSize={50}>     panel B
    [slot: content]
  </ResizablePanel>
</ResizablePanelGroup>
```

**Props (PanelGroup):**
- `direction`: `"horizontal"` | `"vertical"`
- `onLayout`: callback with panel sizes

**Props (Panel):**
- `defaultSize`: percentage (0–100)
- `minSize` / `maxSize`: percentage constraints
- `collapsible`: can collapse to 0
- `collapsedSize`: size when collapsed

**Handle states:** default | hover | focus | active (dragging)

**Behavior:**
- Pointer down on handle → dragging state, cursor changes to `col-resize` or `row-resize`
- Drag → updates panel flex-basis percentages in real time
- Double-click handle → collapse/expand if `collapsible`
- Keyboard: `←` `→` (horizontal) or `↑` `↓` (vertical) to move handle by `--resizable-step` (default 1%)
  - `Shift + Arrow`: move by 10%
  - `Home`: minimize left/top panel
  - `End`: maximize left/top panel

**Handle visual:**
```
Idle:    thin line (1px), low opacity
Hover:   line brightens + optional grip dots appear
Active:  line color → --v-accent, grip dots brighten
Focus:   focus ring around handle, line → --v-accent
```

**Accessibility:**
- Handle: `role="separator"` with `aria-orientation`
- Handle: `aria-valuenow`, `aria-valuemin="0"`, `aria-valuemax="100"` (percentage)
- Handle: `aria-label="Resize"`

**No Types** (structural — no color variant; handle inherits --v-accent from version)

**Token consumption:**
```
--v-border (handle idle)
--v-accent (handle hover/active)
--v-bg-hover (handle background on hover)
```

---

### A6. `scroll-area.tsx`

**What it is:** A custom-styled scroll container replacing the browser's native scrollbar.

**Anatomy:**
```
<ScrollArea>                          root — overflow: hidden
  <ScrollAreaViewport>                inner container — overflow: scroll (hidden scrollbar)
    [slot: scrollable content]
  </ScrollAreaViewport>
  <ScrollAreaScrollbar orientation="vertical">    custom scrollbar track
    <ScrollAreaThumb>                 draggable thumb
    </ScrollAreaThumb>
  </ScrollAreaScrollbar>
  <ScrollAreaScrollbar orientation="horizontal">  optional horizontal bar
    <ScrollAreaThumb>
    </ScrollAreaThumb>
  </ScrollAreaScrollbar>
  <ScrollAreaCorner>                  optional — bottom-right corner when both bars shown
  </ScrollAreaCorner>
</ScrollArea>
```

**Props:**
- `type`: `"auto"` (shows on hover) | `"always"` | `"scroll"` (shows while scrolling) | `"hover"`
- `scrollHideDelay`: ms before bar hides (default 600ms)
- `dir`: `"ltr"` | `"rtl"`

**Scrollbar behavior:**
```
auto:   appears when content overflows, visible on hover, fades after scrollHideDelay
always: always visible
scroll: appears on scroll, fades after scrollHideDelay
hover:  appears only when hovering the scroll area
```

**Scrollbar visual anatomy:**
```
Track: thin strip (6px wide default, 4px compact)
Thumb: rounded rect proportional to content, draggable
       min-height/width: 40px (prevents invisible thumb on huge content)
```

**Thumb states:** default | hover (brighter) | active (dragging — brightest, never hide)

**Behavior:**
- Pointer drag on thumb → proportional scroll
- Click on track → jump to position (page scroll)
- Native scroll (mousewheel, touch) always works
- Scrollbar never overlaps content (uses margin/padding offset)

**Accessibility:**
- Viewport: `tabindex="0"` for keyboard scroll via arrow keys
- Scrollbar: hidden from screen readers (decorative — native scroll semantics apply)

**Token consumption:**
```
Track:  --v-border (subtle, near-invisible by default)
Thumb:  --v-text-muted (idle), --v-text-secondary (hover), --v-accent (active)
Width:  --scrollbar-width (default 6px, sm: 4px)
```

---

### A7. `separator.tsx`

**What it is:** A visual and semantic divider between content sections.

**Anatomy:**
```
<Separator orientation="horizontal|vertical" decorative />
  (single self-closing element — renders as <hr> or <div role="separator">)
```

**Props:**
- `orientation`: `"horizontal"` (default) | `"vertical"`
- `decorative`: boolean — if true, `aria-hidden="true"` (purely visual)

**Visual:**
- Horizontal: full width, 1px height
- Vertical: full height, 1px width
- Versions may add: dashed pattern, gradient fade at ends, decorative midpoint icon

**States:** None (not interactive)

**Accessibility:**
- Non-decorative: `role="separator"` with `aria-orientation`
- Decorative: `aria-hidden="true"`

**No Types** (single appearance — versions control color and style)

**Token consumption:**
```
border-color: --v-border (default)
Versions may use --v-accent, --v-text-muted, or dashed pattern
```

---

### A8. `sheet.tsx`

**What it is:** A panel that slides in from a screen edge (drawer/side panel pattern). Unlike Drawer, Sheet is for persistent secondary content like settings, details panels, or navigation.

**Anatomy:**
```
<Sheet>
  <SheetTrigger>                      trigger element (any)
  </SheetTrigger>
  <SheetPortal>                       teleported to document body
    <SheetOverlay>                     backdrop scrim
    <SheetContent side="right|left|top|bottom">
      <SheetHeader>
        <SheetTitle>
        <SheetDescription>
      </SheetHeader>
      [slot: main content]
      <SheetFooter>
        [slot: actions]
      </SheetFooter>
      <SheetClose>                     explicit close button (X)
      </SheetClose>
    </SheetContent>
  </SheetPortal>
</Sheet>
```

**Props:**
- `side`: `"right"` (default) | `"left"` | `"top"` | `"bottom"`
- `open` / `onOpenChange`: controlled

**Size defaults by side:**
```
right / left:   width 400px (sm: 320px, lg: 540px)
top / bottom:   height 50vh (sm: 40vh, lg: 70vh)
```

**Overlay:** Semi-transparent backdrop, click to close

**Animation:**
```
Open:   slide in from edge (translateX/Y ±100% → 0) + opacity 0→1 on overlay
        duration: --duration-slower | ease: --ease-decelerate
Close:  reverse slide + overlay fade
        duration: --duration-slow | ease: --ease-accelerate
```

**Focus management:**
- On open: focus moves to first focusable element inside SheetContent
- Focus is trapped within while open
- On close: focus returns to trigger

**Keyboard:**
- `Escape` → close
- `Tab` / `Shift+Tab` → cycles within content (trapped)

**Accessibility:**
- `role="dialog"` on SheetContent
- `aria-labelledby` → SheetTitle id
- `aria-describedby` → SheetDescription id
- `aria-modal="true"`

**Types:** Sheet surface takes the current component type. Overlay is always semi-transparent black.

**Token consumption:**
```
SheetContent: --v-bg, --v-border (edge border), --v-text
SheetOverlay: rgba(0,0,0, 0.6) — fixed, not version-controlled
SheetTitle:   --v-text (h3 scale)
SheetDescription: --v-text-secondary
Close button: ghost type tokens
```

---

### A9. `sidebar.tsx`

**What it is:** A persistent or collapsible navigation sidebar. The main layout rail component.

**Anatomy:**
```
<SidebarProvider>                         context — collapsed state, breakpoint
  <Sidebar side="left|right" variant="sidebar|floating|inset" collapsible="offcanvas|icon|none">
    <SidebarHeader>                        brand/logo area
      [slot]
    </SidebarHeader>
    <SidebarContent>                       scrollable main area
      <SidebarGroup>                       logical group of nav items
        <SidebarGroupLabel>               group heading (small uppercase)
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton>         the actual nav link/button
                [icon]
                [label]
              </SidebarMenuButton>
              <SidebarMenuBadge>          optional — count/status badge
              <SidebarMenuSub>            optional — nested items
                <SidebarMenuSubItem>
                  <SidebarMenuSubButton>
                </SidebarMenuSubItem>
              </SidebarMenuSub>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
    <SidebarFooter>                        user profile, settings
      [slot]
    </SidebarFooter>
    <SidebarRail>                          collapse/expand drag handle (optional)
  </Sidebar>
  <SidebarInset>                           main content area (pushes/overlaps)
    [slot: page content]
  </SidebarInset>
</SidebarProvider>
```

**Props (Sidebar):**
- `side`: `"left"` | `"right"`
- `variant`: `"sidebar"` (pushes content) | `"floating"` (overlaps) | `"inset"` (nested)
- `collapsible`: `"offcanvas"` (slides off-screen) | `"icon"` (collapses to icon-only) | `"none"`

**States:**
```
expanded:    full width (default: 260px, --sidebar-width)
collapsed:   icon-only width (48px, --sidebar-width-icon) — collapsible="icon"
mobile:      off-canvas overlay (breakpoint: < 768px)
```

**SidebarMenuButton states:** default | hover | focus | active | selected (current route)

**Collapse behavior:**
- `icon` mode: labels hidden, icons centered, tooltips appear on hover
- `offcanvas` mode: sidebar slides fully off screen, overlay appears
- Rail drag: pointer drag on SidebarRail resizes width (same as Resizable mechanic)

**Keyboard:**
- `Tab` navigates through menu items
- `Enter` / `Space` activates SidebarMenuButton
- Nested items: disclosure pattern (SidebarMenuSub toggled by chevron)

**Accessibility:**
- `<nav>` element wrapping SidebarContent
- `aria-label="Main navigation"` on nav
- `aria-current="page"` on active SidebarMenuButton
- Collapsed/icon mode: `aria-label` on icon-only buttons (label becomes tooltip)
- `aria-expanded` on items with SidebarMenuSub

**Responsive:**
- Desktop: `variant` controls push/float behavior
- Mobile (< --sidebar-breakpoint, default 768px): always off-canvas, toggle via SidebarTrigger (hamburger)

**Token consumption:**
```
Sidebar bg:           --v-bg (slightly different from page bg)
Border:               --v-border (right/left edge)
MenuButton default:   ghost type tokens
MenuButton selected:  soft or solid type tokens (version configures which)
GroupLabel:           --v-text-muted, xs font, uppercase, wide tracking
Badge:                inherits Badge component tokens
Width vars:           --sidebar-width, --sidebar-width-icon (version may adjust)
```

---
---

## GROUP B — NAVIGATION

### B1. `breadcrumb.tsx`

**What it is:** A hierarchical path display showing the user's location within an information architecture.

**Anatomy:**
```
<Breadcrumb>                              root — <nav aria-label="breadcrumb">
  <BreadcrumbList>                        <ol> list
    <BreadcrumbItem>                      <li>
      <BreadcrumbLink href="/">           <a> — ancestor pages
        [text | icon]
      </BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator>                 decorative "/" or ">" or custom icon
    </BreadcrumbSeparator>
    <BreadcrumbItem>
      <BreadcrumbPage>                    <span aria-current="page"> — current page
        [text]
      </BreadcrumbPage>
    </BreadcrumbItem>
    <BreadcrumbEllipsis>                  "..." for collapsed middle items
    </BreadcrumbEllipsis>
  </BreadcrumbList>
</Breadcrumb>
```

**States:**
- Link: default | hover (underline or color shift) | focus | active
- Current page: always visually distinct (different color/weight), not a link

**Separator:** Not interactive. Decorative. `aria-hidden="true"`

**Ellipsis:** When middle items collapse, BreadcrumbEllipsis is a `<button>` or dropdown trigger showing hidden items on click.

**Accessibility:**
- `<nav aria-label="breadcrumb">` wraps all
- `<ol>` for ordered list semantics
- `aria-current="page"` on current BreadcrumbPage
- Separators: `aria-hidden="true"`

**Sizes:** `sm` | `md` (default) — affects font size and separator spacing

**Token consumption:**
```
Link:          --v-text-secondary (default), --v-accent (hover)
Current page:  --v-text (primary, slightly bolder)
Separator:     --v-text-muted
```

---

### B2. `menubar.tsx`

**What it is:** A horizontal menu bar with dropdown submenus. Desktop application-style navigation (like File, Edit, View menus).

**Anatomy:**
```
<Menubar>                                 root — flex row container
  <MenubarMenu>                           individual top-level menu
    <MenubarTrigger>                      top-level button — opens dropdown
      [label]
    </MenubarTrigger>
    <MenubarContent>                      dropdown panel
      <MenubarItem>                       clickable menu item
        [icon] [label] [shortcut]
      </MenubarItem>
      <MenubarCheckboxItem>              toggleable item
      <MenubarRadioGroup>
        <MenubarRadioItem>
      <MenubarSeparator>
      <MenubarSub>                       nested submenu
        <MenubarSubTrigger>             opens sub
        <MenubarSubContent>             sub dropdown
      <MenubarLabel>                    non-interactive group label
      <MenubarShortcut>                 keyboard shortcut display (right-aligned)
    </MenubarContent>
  </MenubarMenu>
</Menubar>
```

**States:**
- Trigger: default | hover | focus | active | open (menu visible)
- Item: default | hover | focus | disabled | checked (checkbox/radio)
- Content: hidden | visible

**Behavior:**
- Click trigger → opens content dropdown (closes other open menus)
- Hover trigger (when any menu open) → switches to this menu
- `Escape` → close open menu, return focus to trigger
- `←` `→` on trigger → moves to prev/next trigger
- `↑` `↓` within content → navigates items
- `Enter` / `Space` → activates focused item
- Click outside → close all

**Shortcut display:** `<MenubarShortcut>` is visually right-aligned, `--v-text-muted` color, not functional (keyboard shortcuts handled by app, not component)

**Accessibility:**
- `role="menubar"` on root
- `role="menu"` on content
- `role="menuitem"` / `role="menuitemcheckbox"` / `role="menuitemradio"` on items
- `aria-haspopup="menu"` on trigger
- `aria-expanded` on trigger
- `aria-checked` on checkbox/radio items

**Token consumption:**
```
Trigger:       ghost-like at rest, solid-ish when open
Content:       --v-bg (elevated), --v-border 1px, box-shadow
Item hover:    --v-bg-hover
Shortcut:      --v-text-muted
Separator:     --v-border
```

---

### B3. `navigation-menu.tsx`

**What it is:** A top-level navigation with large rich dropdown panels (mega-menu style). Different from Menubar — designed for website navigation, not app menus.

**Anatomy:**
```
<NavigationMenu>                          root — <nav>
  <NavigationMenuList>                    <ul> — flex row
    <NavigationMenuItem>                  <li>
      <NavigationMenuTrigger>             button — opens viewport panel
        [label] [chevron]
      </NavigationMenuTrigger>
      <NavigationMenuContent>            rich content panel (slots freely)
        [slot: any layout — links, cards, descriptions]
      </NavigationMenuContent>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <NavigationMenuLink>               direct link item (no dropdown)
      </NavigationMenuLink>
    </NavigationMenuItem>
  </NavigationMenuList>
  <NavigationMenuViewport>               single animated viewport that all content panels project into
  </NavigationMenuViewport>
  <NavigationMenuIndicator>             visual indicator bar under active trigger
  </NavigationMenuIndicator>
</NavigationMenu>
```

**Key mechanic:** All content panels render into a single `NavigationMenuViewport` element. The viewport animates position/size when switching between panels. This prevents multiple overlapping dropdowns.

**States:**
- Trigger: default | hover | focus | active | open
- Viewport: hidden | visible | animating-in | animating-out

**Animation:**
```
Viewport: enter from --motion-from (scale 0.95, opacity 0 → 1) -- duration-slow, ease-decelerate
Viewport: exit to scale 0.95, opacity 0 -- duration-base, ease-accelerate
Width/height: animates between panels on switch (cross-fade content)
Indicator: slides horizontally under active trigger (translate-x)
```

**Behavior:**
- Hover trigger → open (with small delay: 200ms) 
- Move to viewport content → stays open
- Move off both → close (with delay: 300ms)
- Click trigger → open/close (touch-friendly)
- `Escape` → close, return focus to trigger
- Arrow keys within content → navigate links

**Accessibility:**
- `<nav>` root with `aria-label`
- Trigger: `aria-expanded`, `aria-haspopup="dialog"`
- Content: `role="dialog"` equivalent

**Token consumption:**
```
Trigger:        ghost at rest, highlight when open
Viewport:       --v-bg elevated, --v-border, box-shadow (elevated panel)
Indicator:      --v-accent (underline bar)
Link items:     --v-text, --v-accent on hover
```

---

### B4. `pagination.tsx`

**What it is:** A set of controls for navigating through paged content.

**Anatomy:**
```
<Pagination>                             root — <nav aria-label="pagination">
  <PaginationContent>                    <ul> flex row
    <PaginationItem>                     <li>
      <PaginationPrevious>               ← Previous link/button
    </PaginationItem>
    <PaginationItem>
      <PaginationLink page={1}>          page number link
    </PaginationItem>
    <PaginationItem>
      <PaginationEllipsis>              "..." for skipped pages
    </PaginationItem>
    <PaginationItem>
      <PaginationNext>                   Next → link/button
    </PaginationItem>
  </PaginationContent>
</Pagination>
```

**Props (PaginationLink):**
- `page`: number
- `isActive`: boolean — current page
- `size`: inherits global size scale

**States:**
- Link: default | hover | focus | active | current (`isActive`)
- Prev/Next: default | hover | focus | disabled (at first/last page)

**Behavior:**
- Each link is an `<a>` (when href provided) or `<button>` (when onClick only)
- Active page: distinct visual treatment (solid or outline type by default)
- Ellipsis: non-interactive, `aria-hidden`

**Accessibility:**
- `<nav aria-label="pagination navigation">`
- `<ul>` / `<li>` list structure
- `aria-current="page"` on active page link
- Previous/Next: `aria-label="Go to previous page"` etc.
- Ellipsis: `aria-hidden="true"`

**Types:** PaginationLink supports all 7 (active page often `solid`, others `ghost` or `outline`)

**Sizes:** `sm` | `md` (default) | `lg`

**Token consumption:**
```
Default pages:   ghost type tokens
Active page:     solid type tokens (--v-accent bg)
Prev/Next:       outline or ghost type
Ellipsis:        --v-text-muted
```

---

### B5. `tabs.tsx`

**What it is:** A tabbed interface where one panel is visible at a time, selected by clicking tab triggers.

**Anatomy:**
```
<Tabs defaultValue="tab1" orientation="horizontal|vertical">
  <TabsList>                             tab trigger container
    <TabsTrigger value="tab1">           tab button
      [icon] [label] [badge]
    </TabsTrigger>
    <TabsTrigger value="tab2">
    ...
  </TabsList>
  <TabsContent value="tab1">            associated panel
    [slot: content]
  </TabsContent>
  <TabsContent value="tab2">
  ...
</Tabs>
```

**Props:**
- `defaultValue` / `value` / `onValueChange`: controlled tab state
- `orientation`: `"horizontal"` (default) | `"vertical"`
- `activationMode`: `"automatic"` (focus → activate) | `"manual"` (Enter/Space to activate)

**States:**
- Trigger: default | hover | focus | active | selected (`data-state="active"`)
- Content: hidden (visually + from AT) | visible

**TabsList visual:** Container for triggers. Often has a background/border that unifies the tab row. An indicator element (line or fill) moves to show active tab.

**Active indicator:**
- Underline: 2px line under active trigger (slides horizontally)
- Fill: background pill moves under active trigger
- Versions define which indicator style and animation

**Animation:**
```
Indicator: translate-x to active tab position (duration: --duration-base, ease: --ease-standard)
Content switch: opacity 0→1 (duration: --duration-fast) — previous fades, new fades in
```

**Keyboard:**
- `←` / `→` (horizontal) or `↑` / `↓` (vertical) → move focus between triggers
- Automatic mode: focus movement also activates
- Manual mode: `Enter` / `Space` activates focused trigger
- `Home` → first tab, `End` → last tab

**Accessibility:**
- TabsList: `role="tablist"`, `aria-orientation`
- Trigger: `role="tab"`, `aria-selected`, `aria-controls="[panel-id]"`
- Content: `role="tabpanel"`, `aria-labelledby="[trigger-id]"`, `tabindex="0"`
- Inactive content: `hidden` attribute (removes from AT)

**Types:** TabsTrigger supports all 7; TabsList and TabsContent use `default` or `ghost`

**Sizes:** `sm` | `md` | `lg` — affects trigger padding, font size

**Token consumption:**
```
TabsList:           --v-bg (subtle), --v-border (bottom edge or container)
Trigger default:    ghost tokens
Trigger active:     solid or outline tokens (version defines)
Indicator:          --v-accent (underline) or solid bg (fill pill)
Content:            transparent bg
```

---
---

## GROUP C — OVERLAY & FLOATING

### C1. `alert-dialog.tsx`

**What it is:** A modal dialog requiring the user to explicitly acknowledge before continuing. Blocks all interaction behind it. Used for destructive or irreversible actions.

**Anatomy:**
```
<AlertDialog>
  <AlertDialogTrigger>
  </AlertDialogTrigger>
  <AlertDialogPortal>                    teleported to <body>
    <AlertDialogOverlay>                 full-screen backdrop
    <AlertDialogContent>                 centered modal box
      <AlertDialogHeader>
        <AlertDialogTitle>              required — concise action statement
        <AlertDialogDescription>        required — consequence explanation
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>             secondary action ("Cancel")
        <AlertDialogAction>             primary action ("Delete", "Confirm")
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialogPortal>
</AlertDialog>
```

**Critical rules:**
- `AlertDialogTitle` and `AlertDialogDescription` are REQUIRED (not optional)
- `AlertDialogCancel` must always be present — user must have an escape route
- `AlertDialogAction` is typically the destructive/confirm action
- NO `Escape` key close by default (unlike Dialog) — user must make explicit choice

**Animation:** Same as Dialog — overlay + content mount/unmount animations.

**Focus management:**
- Opens → focus to `AlertDialogAction` (or `AlertDialogCancel` — version/context decision)
- Focus trapped within
- Closes → focus returns to trigger

**Accessibility:**
- `role="alertdialog"` (NOT `role="dialog"`) — critical distinction for AT
- `aria-labelledby` → Title id
- `aria-describedby` → Description id
- `aria-modal="true"`

**Token consumption:**
```
Overlay:    rgba(0,0,0,0.7) — slightly darker than Dialog
Content:    --v-bg, --v-border, --v-text
Title:      h4-scale, --v-text
Description:--v-text-secondary
Cancel:     ghost/outline Button
Action:     contrast Button (destructive) or solid Button
```

---

### C2. `context-menu.tsx`

**What it is:** A menu that appears on right-click (or long-press on touch). Provides contextual actions for the right-clicked element.

**Anatomy:**
```
<ContextMenu>
  <ContextMenuTrigger>                   right-click target area
    [slot: any element]
  </ContextMenuTrigger>
  <ContextMenuContent>                   floating menu panel
    <ContextMenuItem>
      [icon] [label] [shortcut]
    </ContextMenuItem>
    <ContextMenuCheckboxItem>
    <ContextMenuRadioGroup>
      <ContextMenuRadioItem>
    <ContextMenuSeparator>
    <ContextMenuSub>
      <ContextMenuSubTrigger>
      <ContextMenuSubContent>
    <ContextMenuLabel>
    <ContextMenuShortcut>
  </ContextMenuContent>
</ContextMenu>
```

**Behavior:**
- Trigger: `contextmenu` event (right-click / Ctrl+click / long-press)
- Opens at pointer position (bounded to viewport)
- `Escape` → close
- Click outside → close
- Click item → execute action + close
- Keyboard: `↑` `↓` navigate, `Enter` activate, `→` open sub, `←` close sub

**Positioning:** Anchored to pointer position. Flip to stay in viewport. Never overlaps cursor.

**Accessibility:**
- `role="menu"` on content
- `role="menuitem"` / `role="menuitemcheckbox"` / `role="menuitemradio"`
- `aria-haspopup="menu"` on SubTrigger
- `aria-expanded` on SubTrigger

**Token consumption:** Same as Menubar content panel.

---

### C3. `dialog.tsx`

**What it is:** A modal window for focused tasks or content. Less urgent than AlertDialog. Can be closed by Escape or clicking overlay.

**Anatomy:**
```
<Dialog>
  <DialogTrigger>
  </DialogTrigger>
  <DialogPortal>
    <DialogOverlay>                      backdrop
    <DialogContent>                      centered dialog box
      <DialogHeader>
        <DialogTitle>
        <DialogDescription>
      </DialogHeader>
      [slot: body content]
      <DialogFooter>
        [slot: actions]
      </DialogFooter>
      <DialogClose>                      X button (top-right) — optional but recommended
      </DialogClose>
    </DialogContent>
  </DialogPortal>
</Dialog>
```

**Props:**
- `open` / `onOpenChange`: controlled
- `modal`: boolean (default true) — if false, allows interaction behind dialog

**Animation:**
```
Overlay:  opacity 0→0.6 (duration: --duration-slow)
Content:  opacity 0→1 + scale 0.95→1 + translateY(4px→0)
          duration: --duration-slower | ease: --ease-decelerate
Close:    reverse — scale 1→0.95, opacity 1→0 | duration: --duration-slow | ease: --ease-accelerate
```

**Focus:** Focus trapped inside. Opens to first focusable element or DialogContent itself.

**Keyboard:** `Escape` → close. `Tab` cycles within.

**Sizes:**
```
sm:      max-width: 400px
md:      max-width: 500px (default)
lg:      max-width: 640px
xl:      max-width: 800px
full:    max-width: calc(100vw - 48px)
```

**Accessibility:**
- `role="dialog"`, `aria-modal="true"`
- `aria-labelledby`, `aria-describedby`
- Overlay: `aria-hidden="true"`

**Types:** Dialog content supports all 7 types. Overlay: fixed.

**Token consumption:**
```
Overlay:     rgba(0,0,0,0.6)
Content:     --v-bg, --v-border, box-shadow (elevated)
Title:       h3-scale, --v-text
Description: --v-text-secondary
Close btn:   ghost icon-button tokens
```

---

### C4. `dropdown-menu.tsx`

**What it is:** A menu that appears below (or above) its trigger on click. Standard UI dropdown for actions.

**Anatomy:** Mirrors `ContextMenu` structure — same item types, same keyboard nav.
```
<DropdownMenu>
  <DropdownMenuTrigger>               click target
  </DropdownMenuTrigger>
  <DropdownMenuContent side="bottom|top|left|right" align="start|center|end">
    <DropdownMenuItem>
    <DropdownMenuCheckboxItem>
    <DropdownMenuRadioGroup>
      <DropdownMenuRadioItem>
    <DropdownMenuSeparator>
    <DropdownMenuLabel>
    <DropdownMenuSub>
      <DropdownMenuSubTrigger>
      <DropdownMenuSubContent>
    <DropdownMenuShortcut>
    <DropdownMenuGroup>             logical grouping (no visual effect — semantic)
  </DropdownMenuContent>
</DropdownMenu>
```

**Positioning:**
- `side`: which side of trigger to open (default: `"bottom"`)
- `align`: alignment relative to trigger (default: `"start"`)
- Auto-flip if near viewport edge
- `sideOffset`: gap between trigger and content (default: 4px)

**Behavior:**
- Click trigger → open/close
- `↑` `↓` in content → navigate
- `Enter` / `Space` → activate item
- `Escape` → close, focus back to trigger
- Click outside → close
- Sub-trigger: `→` opens, `←` closes

**Accessibility:** Same as ContextMenu.

**Token consumption:** Same as Menubar/ContextMenu content.

---

### C5. `hover-card.tsx`

**What it is:** A rich information card that appears on hover over a trigger (typically a username, link, or term). Provides additional context without requiring a click.

**Anatomy:**
```
<HoverCard openDelay={300} closeDelay={300}>
  <HoverCardTrigger>                  hover target (link, avatar, etc.)
    [slot: trigger element]
  </HoverCardTrigger>
  <HoverCardContent side align sideOffset>
    [slot: rich content — avatar, name, bio, stats, etc.]
  </HoverCardContent>
</HoverCard>
```

**Props:**
- `openDelay`: ms before showing (default 300ms — prevents accidental triggers)
- `closeDelay`: ms before hiding (default 300ms — allows moving cursor to content)

**Behavior:**
- Mouse enters trigger → start openDelay timer
- Timer completes → show content
- Mouse enters content → cancel closeDelay (stays open while on content)
- Mouse leaves trigger AND content → start closeDelay timer
- Timer completes → hide content
- Touch: does NOT trigger (hover-only) — content inaccessible on touch unless duplicated

**Animation:**
```
Open:  opacity 0→1 + scale 0.95→1 | duration: --duration-fast | ease: --ease-decelerate
Close: opacity 1→0 | duration: --duration-fast | ease: --ease-accelerate
```

**Accessibility:**
- Content: `role="tooltip"` if purely informational, `role="dialog"` if interactive
- If interactive: focus management required (Tab should be able to enter content)
- Touch accessibility: provide alternative disclosure mechanism

**Token consumption:**
```
Content: --v-bg (elevated), --v-border, box-shadow
Inherits version's elevated surface tokens
```

---

### C6. `popover.tsx`

**What it is:** A floating panel anchored to a trigger. Similar to HoverCard but click-triggered, and can contain interactive elements (forms, menus, pickers).

**Anatomy:**
```
<Popover>
  <PopoverTrigger>                    click target
  </PopoverTrigger>
  <PopoverContent side align sideOffset>
    [slot: any interactive content]
    <PopoverClose>                    optional explicit close button
    </PopoverClose>
  </PopoverContent>
</Popover>
```

**Behavior:**
- Click trigger → open/close
- `Escape` → close, focus to trigger
- Click outside → close
- Content may contain forms, date pickers, color pickers, etc.
- Focus moves INTO content on open (first focusable element)

**Positioning:** Same as DropdownMenu — side, align, flip logic.

**Accessibility:**
- `role="dialog"` on content (if interactive) or `role="tooltip"` (if purely informational)
- `aria-labelledby` if title present
- `aria-expanded` on trigger

**Token consumption:**
```
Content: --v-bg (elevated), --v-border, box-shadow
Same elevated surface treatment as Dialog
```

---

### C7. `tooltip.tsx`

**What it is:** A small floating label providing supplementary information on hover/focus. Non-interactive — text only.

**Anatomy:**
```
<TooltipProvider delayDuration={400}>   root context — controls delay
  <Tooltip>
    <TooltipTrigger asChild>             wraps trigger element (doesn't add wrapper DOM)
      [slot: trigger — button, icon, etc.]
    </TooltipTrigger>
    <TooltipContent side align sideOffset>
      [text content]
      <TooltipArrow>                     optional pointing arrow
    </TooltipContent>
  </Tooltip>
</TooltipProvider>
```

**Rules:**
- Content is text ONLY — no interactive elements
- NEVER wrap a disabled element (AT cannot access tooltip on disabled trigger)
  - Instead: wrap a `<span>` around the disabled element
- Always present — not just on hover. `aria-describedby` makes it available to screen readers

**Behavior:**
- Hover trigger → open after delayDuration
- Mouse leave → close immediately
- Focus trigger (keyboard) → open immediately (no delay)
- Blur trigger → close
- `Escape` → close without losing focus

**Animation:**
```
Open:  opacity 0→1 + scale 0.96→1 | duration: --duration-fast
Close: opacity 1→0 | duration: --duration-instant
```

**Accessibility:**
- `role="tooltip"` on content
- Trigger: `aria-describedby="[tooltip-id]"` (always, not just when visible)
- Content: `id` matching aria-describedby
- Never interactive → never needs focus management

**Sizes:** `sm` (compact) | `md` (default) — max-width 200px (sm), 300px (md)

**Token consumption:**
```
Content: high-contrast bg (--v-contrast-bg or near-black), --v-contrast-text
Arrow: same fill as content bg
Versions may add glow or accent border
```

---
---

## GROUP D — FORM & INPUT

### D1. `button.tsx`

**What it is:** The primary interactive trigger element. Executes an action on click.

**Anatomy:**
```
<Button size="sm|md|lg|xl" type="default|solid|outline|ghost|inverse|contrast|soft">
  [leading-icon]    optional
  [label text]      primary content
  [trailing-icon]   optional
  [spinner]         replaces content during loading state
</Button>
```

**Props:**
- All 7 types supported
- `size`: `xs` | `sm` | `md` | `lg` | `xl`
- `loading`: boolean — shows spinner, disables interaction
- `disabled`: boolean
- `asChild`: renders as child element (e.g., `<a>` for link buttons)
- `fullWidth`: boolean — `width: 100%`

**States:**
```
default:    base appearance
hover:      background/border shift, cursor: pointer
focus:      focus ring (ALWAYS visible — 2px offset)
active:     scale(0.97) + slightly darker bg — 80ms snap transition
loading:    spinner replaces (or precedes) label, pointer-events: none
disabled:   opacity: --disabled-opacity, cursor: --disabled-cursor, pointer-events: none
```

**Loading state behavior:**
- Spinner appears in leading-icon position OR replaces entire content
- Width does NOT change during loading (prevents layout shift) — use min-width
- `aria-disabled="true"` during loading (not `disabled` attr, so AT can still read it)

**Icon-only button:** Label is visually hidden (sr-only) but present for accessibility. See `icon-button.tsx` for dedicated component.

**Keyboard:** `Enter` / `Space` → activate. Default `type="button"` to prevent accidental form submission.

**Accessibility:**
- Native `<button>` element
- `aria-disabled` (not `disabled`) for loading state
- `aria-label` if icon-only
- `aria-busy="true"` during loading

**Sizes:**

| Size | Height | Padding H | Font  | Icon  |
|------|--------|-----------|-------|-------|
| xs   | 20px   | 8px       | 10px  | 12px  |
| sm   | 28px   | 12px      | 12px  | 14px  |
| md   | 36px   | 16px      | 14px  | 16px  |
| lg   | 44px   | 20px      | 16px  | 18px  |
| xl   | 52px   | 24px      | 18px  | 20px  |

**Types:** All 7. This is the reference implementation for all type variants.

---

### D2. `button-group.tsx`

**What it is:** A container that groups multiple buttons into a single visual unit, collapsing their adjacent borders/gaps.

**Anatomy:**
```
<ButtonGroup orientation="horizontal|vertical" size attached>
  <Button>First</Button>
  <Button>Second</Button>
  <Button>Third</Button>
</ButtonGroup>
```

**Props:**
- `orientation`: `"horizontal"` (default) | `"vertical"`
- `attached`: boolean — buttons share borders (adjacent borders collapse)
- `size`: applies to all children
- `spacing`: gap when not attached

**Attached mode mechanics:**
```
Horizontal:
  First child:   radius on left, square on right
  Middle children: square on both sides (radius: 0)
  Last child:    square on left, radius on right
  Between items: shared border (2px total → 1px each with outline variant)

Vertical: same logic for top/bottom
```

**Non-attached mode:** Buttons render with gap (--space-2 default), keep their full radius.

**Accessibility:**
- `role="group"` on container
- `aria-label` if the group has semantic meaning
- Individual buttons retain all their own accessibility properties

**Token consumption:** Each child Button uses its own type tokens. Container adds only layout.

---

### D3. `checkbox.tsx`

**What it is:** A binary toggle for boolean values, or part of a multi-select group.

**Anatomy:**
```
<Checkbox id="cb1" checked indeterminate disabled>  root — the interactive control
  [checkmark icon / dash icon]                        visual indicator inside box
</Checkbox>
<Label htmlFor="cb1">Label text</Label>              associated label (separate component)
```

**Props:**
- `checked`: `boolean` | `"indeterminate"`
- `defaultChecked`: uncontrolled
- `onCheckedChange`: callback
- `disabled`: boolean
- `required`: boolean (form)
- `name` / `value`: form integration

**States:**
```
unchecked:      empty box, no indicator
checked:        box filled/bordered, checkmark icon visible
indeterminate:  box with dash icon — partial selection state
hover:          border brightens (all states)
focus:          focus ring (all states)
active:         brief scale(0.9) snap — tactile feel
disabled:       --disabled-opacity, no interaction
```

**Animation:**
```
Check:    checkmark SVG path draws in (stroke-dashoffset 0) | duration: --duration-fast
Uncheck:  icon fades out, box returns to empty | duration: --duration-fast
Indeterminate: dash appears | duration: --duration-fast
```

**Keyboard:** `Space` → toggle. `Enter` → submits form (native behavior).

**Accessibility:**
- `role="checkbox"` (or native `<input type="checkbox">`)
- `aria-checked`: `"true"` | `"false"` | `"mixed"` (indeterminate)
- `aria-disabled` if disabled
- `aria-required` if required
- Must have accessible label (via `<label>`, `aria-label`, or `aria-labelledby`)

**Sizes:**

| Size | Box Size | Icon Size |
|------|----------|-----------|
| sm   | 14px     | 10px      |
| md   | 18px     | 12px      |
| lg   | 22px     | 14px      |

**Types:** `default` (border/fill) | `solid` (filled bg when checked) | `outline` (always bordered) — others less common

---

### D4. `combo-box.tsx`

**What it is:** A combination of an input field and a dropdown list. Allows searching/filtering options and selecting one.

**Anatomy:**
```
<ComboBox>
  <ComboBoxTrigger>                   button showing selected value + chevron
    [value | placeholder]
    [chevron icon]
  </ComboBoxTrigger>
  <ComboBoxContent>                   floating panel
    <ComboBoxInput>                   search input inside panel
    <ComboBoxEmpty>                   shown when no results match
    <ComboBoxList>
      <ComboBoxGroup label="Group">
        <ComboBoxItem value="x">
          [check icon — shown when selected]
          [label]
        </ComboBoxItem>
      </ComboBoxGroup>
    </ComboBoxList>
  </ComboBoxContent>
</ComboBox>
```

**Behavior:**
- Click trigger → open panel with search input focused
- Type in search → filters ComboBoxItems in real time
- `↑` `↓` → navigate filtered items
- `Enter` → select focused item, close panel
- `Escape` → close panel without selecting
- Click item → select, close
- Selected item: check icon shown, item highlighted

**Empty state:** `<ComboBoxEmpty>` shown when filter produces 0 results.

**Multi-select variant:** Selected items shown as tags/chips in trigger area.

**Accessibility:**
- Trigger: `role="combobox"`, `aria-expanded`, `aria-controls="[list-id]"`, `aria-haspopup="listbox"`
- Input: `role="combobox"`, `aria-autocomplete="list"`, `aria-controls`
- List: `role="listbox"`
- Items: `role="option"`, `aria-selected`

**Sizes:** `sm` | `md` | `lg` (trigger height follows Button sizes)

**Types:** Trigger inherits all 7 types. Panel is always default/elevated.

---

### D5. `date-picker.tsx`

**What it is:** An input for selecting a single date or date range. Combines a text input with a Calendar popover.

**Anatomy:**
```
<DatePicker>
  <DatePickerTrigger>                 trigger button showing selected date
    [calendar icon] [date text | placeholder]
  </DatePickerTrigger>
  <DatePickerContent>                 Popover wrapping Calendar
    <Calendar>                        see Calendar component
    </Calendar>
    [optional: time picker section]
    [optional: preset buttons — "Today", "Yesterday", "Last 7 days"]
  </DatePickerContent>
</DatePicker>
```

**Behavior:**
- Click trigger → open Calendar popover
- Select date → update trigger display, optionally auto-close (single) or stay open (range)
- `Escape` → close without selecting
- Type directly in trigger input (if editable) → parse date string

**Date range variant:**
- Two triggers (start/end) or unified range display
- Calendar shows range highlight between start and end dates
- First click = start, second click = end

**Accessibility:**
- Trigger: `aria-haspopup="dialog"`, `aria-expanded`
- Content: `role="dialog"` with label
- Calendar inside: see Calendar component accessibility

**Token consumption:** Trigger inherits Input tokens. Calendar in panel inherits its own tokens.

---

### D6. `field.tsx`

**What it is:** A form field wrapper that composes Label + Input/Control + Helper text + Error message into a cohesive unit.

**Anatomy:**
```
<Field name="email" required disabled error="Email is required">
  <FieldLabel>                         Label component, linked via htmlFor/id
    Email address
    [required indicator: *]
  </FieldLabel>
  <FieldControl>                       wraps the actual control (Input, Select, etc.)
    [slot: Input | Select | Textarea | etc.]
  </FieldControl>
  <FieldDescription>                   helper text (optional) — shown always
    Enter your work email
  </FieldDescription>
  <FieldError>                         error message — shown only when error present
    Email is required
  </FieldError>
</Field>
```

**Props:**
- `name`: form field name (propagated to control via context)
- `required`: boolean — adds `*` to label, `aria-required` to control
- `disabled`: boolean — disables label and control
- `invalid` / `error`: boolean or string — activates error state

**State propagation via context:**
- Field provides a context that Label, Control, Description, and Error consume
- Error state: `FieldControl` adds error border, `FieldError` becomes visible
- Required: `FieldLabel` shows `*`, control gets `aria-required`

**Accessibility:**
- Label `htmlFor` → control `id` (auto-generated from `name` if not set)
- Control: `aria-describedby` includes both `FieldDescription` id AND `FieldError` id
- Control: `aria-invalid="true"` when error state
- Error: `role="alert"` for live announcement (or `aria-live="polite"`)

---

### D7. `input.tsx`

**What it is:** A single-line text entry field.

**Anatomy:**
```
<Input
  type="text|email|password|number|search|url|tel"
  placeholder
  value / defaultValue
  onChange
  disabled
  readOnly
  invalid
/>
```

**Rendered as:** Native `<input>` element. No wrapper unless used inside InputGroup or Field.

**States:**
```
default:     base border, base bg
hover:       border brightens
focus:       border → --focus-ring-color, focus ring visible
active:      same as focus (input is focused on click)
filled:      value present — no visual change (unless version adds floating label)
disabled:    --disabled-opacity, cursor: not-allowed, bg: slightly different
readonly:    no hover effect, cursor: default, softer bg
invalid:     border → error color, error shadow/glow
```

**Sizes:**

| Size | Height | Padding H | Font  |
|------|--------|-----------|-------|
| sm   | 28px   | 10px      | 12px  |
| md   | 36px   | 12px      | 14px  |
| lg   | 44px   | 16px      | 16px  |

**Accessibility:**
- Must have accessible label (via `<label>`, `aria-label`, or `aria-labelledby`)
- `aria-invalid` when invalid
- `aria-describedby` for helper/error text
- `aria-required` if required

**Types:** `default` | `outline` | `ghost` | `soft` (others less applicable to inputs)

**Token consumption:**
```
bg:          --v-input-bg (slightly different from surface)
border:      --v-border → --v-border-hover → --focus-ring-color
text:        --v-text
placeholder: --v-text-muted
error-border:--error-color (global: red variant)
```

---

### D8. `input-group.tsx`

**What it is:** A composite that combines an Input with leading/trailing addons (icons, buttons, labels).

**Anatomy:**
```
<InputGroup>
  <InputGroupAddon position="left">   leading addon — icon, text, or button
    [slot]
  </InputGroupAddon>
  <Input />                            the actual input
  <InputGroupAddon position="right">  trailing addon
    [slot]
  </InputGroupAddon>
</InputGroup>
```

**Addon types:**
- Text addon: non-interactive label ("https://", "@", ".com")
- Icon addon: decorative icon (non-interactive) or interactive icon button
- Button addon: action button attached to input (search submit, copy, clear)

**Visual treatment:**
- Group forms a single visual unit — shared border, no internal gaps
- Leading addon: shares left border and radius with input
- Trailing addon: shares right border and radius with input
- All elements maintain same height

**States:**
- Input states apply to the entire group's border (focus makes full group border light up)
- Individual addon buttons have their own hover/active states (localized)

**Token consumption:**
```
Group border: unified (follows Input focus state)
Addon bg:     --v-bg-elevated (slightly different from input bg)
Addon text:   --v-text-secondary
Button addons: ghost type tokens internally
```

---

### D9. `input-otp.tsx`

**What it is:** An OTP (One-Time Password) or PIN code entry — a series of individual character inputs.

**Anatomy:**
```
<InputOTP maxLength={6} pattern="[0-9]*">
  <InputOTPGroup>                       first segment group
    <InputOTPSlot index={0}>            individual character slot
    <InputOTPSlot index={1}>
    <InputOTPSlot index={2}>
  </InputOTPGroup>
  <InputOTPSeparator>                   visual separator between groups (e.g. "-")
  </InputOTPSeparator>
  <InputOTPGroup>                       second segment group
    <InputOTPSlot index={3}>
    <InputOTPSlot index={4}>
    <InputOTPSlot index={5}>
  </InputOTPGroup>
</InputOTP>
```

**Props:**
- `maxLength`: total characters
- `pattern`: validation pattern (default: `[0-9]*` for PIN)
- `value` / `onChange`: controlled

**States per slot:**
```
empty:     placeholder visible (underscore, dot, or empty box)
active:    caret visible + slot has focus ring
filled:    character shown
```

**Behavior:**
- Single underlying input element (accessible) — slots are visual overlays
- Type character → advances to next slot automatically
- Backspace → clears current slot, moves to previous
- Paste: distributes pasted string across slots
- Pattern enforcement: non-matching characters ignored

**Accessibility:**
- Single `<input>` with `inputmode="numeric"` (for PIN) — visually overlaid with slots
- `autocomplete="one-time-code"` for SMS OTP
- `aria-label="One-time password"` or similar

**Token consumption:**
```
Slot box:       --v-input-bg, --v-border
Active slot:    --focus-ring-color border
Filled slot:    --v-text
Separator:      --v-text-muted
Caret:          --v-accent
```

---

### D10. `label.tsx`

**What it is:** A text label associated with a form control. Wraps or references its control via `htmlFor`/`id`.

**Anatomy:**
```
<Label htmlFor="input-id">            renders as <label>
  [text]
  [required indicator — optional]
</Label>
```

**States:**
- When associated control is `disabled`: label appears at --disabled-opacity
- When associated control is `invalid`: label color shifts to error color (optional)

**Sizes:** Inherits from parent Field size or explicit `size` prop: `sm` | `md` | `lg`

**Token consumption:**
```
text:       --v-text-secondary (label is secondary to control)
required *: --v-accent or --error-color
disabled:   --disabled-opacity
```

---

### D11. `native-select.tsx`

**What it is:** A browser-native `<select>` element styled to match the design system. Less flexible than the custom Select component but more performant and touch-friendly.

**Anatomy:**
```
<NativeSelect size disabled invalid>   renders as styled <select>
  <option value="">Placeholder</option>
  <option value="a">Option A</option>
  <optgroup label="Group">
    <option value="b">Option B</option>
  </optgroup>
</NativeSelect>
```

**States:** Same as Input (default | hover | focus | disabled | invalid)

**Visual:** Custom chevron icon replacing browser arrow (via background-image SVG or pseudo-element). The rest inherits Input styling.

**Accessibility:** Native semantics — fully accessible by default.

**Token consumption:** Same as Input. Custom arrow: --v-text-secondary.

---

### D12. `radio-group.tsx`

**What it is:** A group of mutually exclusive options. Exactly one can be selected.

**Anatomy:**
```
<RadioGroup value defaultValue onValueChange orientation="horizontal|vertical">
  <RadioGroupItem value="a" id="r1" disabled>    individual radio
    [radio circle visual]
  </RadioGroupItem>
  <Label htmlFor="r1">Option A</Label>
  <RadioGroupItem value="b" id="r2">
  <Label htmlFor="r2">Option B</Label>
</RadioGroup>
```

**States per item:**
```
unselected: empty circle
selected:   filled circle (inner dot or filled ring)
hover:      ring brightens
focus:      focus ring (on item, not label)
disabled:   --disabled-opacity (individual item or whole group)
```

**Animation:**
```
Select:   inner dot scales in 0→1 | duration: --duration-fast | ease: --ease-spring
Deselect: dot scales out 1→0
```

**Keyboard:**
- `Tab` → moves into group (first or selected item)
- `↑` / `↓` (vertical) or `←` / `→` (horizontal) → cycles through items, auto-selects
- Arrow key navigation: looping (end → back to start)

**Accessibility:**
- `role="radiogroup"` on container
- `aria-orientation`
- `role="radio"` on each item
- `aria-checked="true|false"`
- Items are arrow-key navigable, NOT Tab navigable (only one tab stop in group)

**Sizes:** `sm` | `md` | `lg` (circle size + font)

| Size | Circle | Inner dot |
|------|--------|-----------|
| sm   | 14px   | 6px       |
| md   | 18px   | 8px       |
| lg   | 22px   | 10px      |

---

### D13. `select.tsx`

**What it is:** A custom dropdown select — more visually rich than NativeSelect. Not a browser native element.

**Anatomy:**
```
<Select value onValueChange>
  <SelectTrigger size>                 button showing selected value
    <SelectValue placeholder>          current value display
    <SelectIcon>                       chevron
  </SelectTrigger>
  <SelectPortal>
    <SelectContent position="popper|item-aligned" side sideOffset>
      <SelectScrollUpButton>           scroll indicator
      <SelectViewport>
        <SelectGroup>
          <SelectLabel>                group header
          <SelectItem value>
            <SelectItemIndicator>      check icon (when selected)
            <SelectItemText>           label text
          </SelectItem>
        </SelectGroup>
        <SelectSeparator>
      </SelectViewport>
      <SelectScrollDownButton>
    </SelectContent>
  </SelectPortal>
</Select>
```

**Behavior:**
- Click trigger → open dropdown, focus selected item (or first item)
- `↑` `↓` → navigate items
- `Enter` / `Space` → select focused item
- `Escape` → close, return focus to trigger
- Type character → jump to item starting with that character
- `Home` / `End` → first/last item

**Accessibility:**
- Trigger: `role="combobox"`, `aria-expanded`, `aria-haspopup="listbox"`
- Content: `role="listbox"`
- Item: `role="option"`, `aria-selected`

**Sizes:** sm | md | lg (trigger height follows Button sizes)

---

### D14. `slider.tsx`

**What it is:** A draggable control for selecting a numeric value within a range.

**Anatomy:**
```
<Slider min={0} max={100} step={1} value defaultValue orientation disabled>
  <SliderTrack>                        full-width track bar
    <SliderRange>                      filled portion from min to value
    </SliderRange>
  </SliderTrack>
  <SliderThumb>                        draggable handle
  </SliderThumb>
  [second SliderThumb for range variant]
</Slider>
```

**Props:**
- `min` / `max` / `step`
- `value[]` / `defaultValue[]` (array — single value or [start, end] for range)
- `orientation`: `"horizontal"` | `"vertical"`
- `inverted`: reverse direction
- `disabled`

**States:**
- Track: static visual
- Range: fills proportionally to value
- Thumb: default | hover (scale up) | focus (focus ring) | active (dragging — scale up + color change)

**Behavior:**
- Pointer drag on thumb → update value (clamped to min/max, snapped to step)
- Click on track → jump thumb to clicked position
- Keyboard on focused thumb: `←` / `→` (horizontal) or `↑` / `↓` (vertical) → step ±1
  - `Shift + Arrow` → step ±10
  - `PageUp` / `PageDown` → step ±10 (or 10% of range)
  - `Home` → min, `End` → max

**Accessibility:**
- `role="slider"`
- `aria-valuemin`, `aria-valuemax`, `aria-valuenow`, `aria-valuetext`
- `aria-orientation`
- `aria-disabled`

**Sizes:**

| Size | Track H (horizontal) | Thumb   |
|------|----------------------|---------|
| sm   | 2px                  | 14px    |
| md   | 4px                  | 18px    |
| lg   | 6px                  | 22px    |

**Token consumption:**
```
Track:   --v-border (dim)
Range:   --v-accent
Thumb:   --v-bg (center), --v-accent (border/fill), box-shadow for lift
```

---

### D15. `switch.tsx`

**What it is:** A toggle switch for boolean on/off states. Visually distinct from Checkbox — implies immediate effect (not form submission).

**Anatomy:**
```
<Switch checked defaultChecked onCheckedChange disabled>
  <SwitchThumb>                        the sliding circle inside the track
  </SwitchThumb>
</Switch>
```

**States:**
```
unchecked: thumb left, track dim
checked:   thumb right, track accent color
hover:     track brightens slightly
focus:     focus ring on switch track
active:    thumb compresses slightly (width increases, squeeze effect)
disabled:  --disabled-opacity
```

**Animation:**
```
Thumb translate: left → right (or right → left)
                 duration: --duration-base | ease: --ease-spring
Track bg:        dim → accent | duration: --duration-base
Thumb squeeze:   scale(1.1) width on active press (optional — version decides)
```

**Sizes:**

| Size | Track W  | Track H | Thumb   |
|------|----------|---------|---------|
| sm   | 32px     | 16px    | 12px    |
| md   | 44px     | 24px    | 18px    |
| lg   | 56px     | 32px    | 24px    |

**Accessibility:**
- `role="switch"`
- `aria-checked="true|false"`
- `aria-disabled`
- Must have accessible label

**Token consumption:**
```
Track unchecked: --v-border (medium)
Track checked:   --v-accent
Thumb:           --v-bg-elevated (white or near-white equivalent in theme)
Focus ring:      --focus-ring-color
```

---

### D16. `textarea.tsx`

**What it is:** A multi-line text entry field.

**Anatomy:**
```
<Textarea
  placeholder
  value / defaultValue
  onChange
  rows={4}
  resize="none|vertical|horizontal|both"
  disabled
  readOnly
  invalid
  autoResize
/>
```

**Behaves identically to Input** for states (default | hover | focus | disabled | readonly | invalid) but:
- Multi-line
- `resize` prop controls browser resize handle visibility
- `autoResize`: when true, height grows with content (JS-based: `textarea.style.height = textarea.scrollHeight + 'px'`)
- Minimum height: `rows` prop × line-height

**Accessibility:** Same as Input. `aria-multiline` not needed (native textarea).

**Token consumption:** Identical to Input. Resize handle styled via `resize` CSS + version override.

---

### D17. `toggle.tsx`

**What it is:** A button that maintains a pressed/on state. Like a button + checkbox hybrid — single item.

**Anatomy:**
```
<Toggle pressed defaultPressed onPressedChange disabled size variant>
  [icon] [label]
</Toggle>
```

**States:**
```
unpressed: ghost or outline button appearance
pressed:   solid or accent-filled appearance
hover:     hover state of current pressed/unpressed state
focus:     focus ring
disabled:  --disabled-opacity
```

**Accessibility:**
- `role="button"` with `aria-pressed="true|false"`
- NOT `role="switch"` (switch implies immediate effect; toggle can be more abstract)

**Types:** Toggle primarily uses `default`, `outline`, `ghost`. Pressed state often auto-maps to `solid`.

**Sizes:** Inherits Button sizes.

---

### D18. `toggle-group.tsx`

**What it is:** A group of Toggle buttons with either single or multiple selection.

**Anatomy:**
```
<ToggleGroup type="single|multiple" value defaultValue onValueChange orientation>
  <ToggleGroupItem value="a">
    [icon] [label]
  </ToggleGroupItem>
  <ToggleGroupItem value="b">
  <ToggleGroupItem value="c">
</ToggleGroup>
```

**Props:**
- `type`: `"single"` (radio-like) | `"multiple"` (checkbox-like)
- `orientation`: affects keyboard navigation direction

**Behavior:**
- Single: selecting one deselects all others
- Multiple: each item toggles independently

**Keyboard:**
- `←` / `→` or `↑` / `↓` → move focus between items
- Single: arrow movement auto-selects (like radio)
- Multiple: `Space` toggles focused item

**Accessibility:**
- `role="group"` on container
- Each item: `role="radio"` (single) or `role="checkbox"` (multiple)
- `aria-checked` or `aria-pressed` accordingly

**Visual:** Attached layout (ButtonGroup mechanics) — shares borders when adjacent. OR detached with gap.

---
---

## GROUP E — DATA DISPLAY

### E1. `avatar.tsx`

**What it is:** A user or entity representation — image, initials, or fallback icon.

**Anatomy:**
```
<Avatar size fallback>
  <AvatarImage src alt>              image layer — shown when loaded
  </AvatarImage>
  <AvatarFallback delayMs={600}>     fallback layer — shown while loading or on error
    [initials text | icon]
  </AvatarFallback>
</Avatar>
```

**Props:**
- `size`: `xs` | `sm` | `md` | `lg` | `xl` | `2xl`
- `fallback`: text initials or icon element

**States:**
```
loading:  AvatarFallback shown (with optional spinner or shimmer)
loaded:   AvatarImage shown, AvatarFallback hidden
error:    AvatarFallback shown (image failed)
```

**Image loading:**
- `delayMs`: AvatarFallback delays visibility by this amount — prevents flash if image loads quickly
- Fade transition: image fades in on load

**Shape:** Circle by default (`border-radius: 50%`). Square variant (`border-radius: --radius-md`) via prop.

**Sizes:**

| Size | Diameter | Font (initials) |
|------|----------|-----------------|
| xs   | 20px     | 8px             |
| sm   | 28px     | 11px            |
| md   | 36px     | 14px            |
| lg   | 48px     | 18px            |
| xl   | 64px     | 24px            |
| 2xl  | 96px     | 36px            |

**Accessibility:**
- AvatarImage: `alt` attribute required (name of person/entity, or empty if decorative)
- AvatarFallback: `aria-hidden` if image alt text is already descriptive

---

### E2. `badge.tsx`

**What it is:** A small label for status, category, count, or metadata. Non-interactive by default.

**Anatomy:**
```
<Badge variant size>
  [leading icon — optional]
  [text]
  [trailing icon / close button — optional]
</Badge>
```

**Props:**
- All 7 types as `variant`
- `size`: `sm` | `md` | `lg`
- `dot`: boolean — shows colored dot instead of/before text

**Interactive badge:** When `onClick` or `onRemove` is provided — gains hover/focus/active states. Otherwise static.

**Sizes:**

| Size | Height | Padding H | Font  |
|------|--------|-----------|-------|
| sm   | 16px   | 6px       | 10px  |
| md   | 20px   | 8px       | 11px  |
| lg   | 24px   | 10px      | 12px  |

**Token consumption:** All 7 type token sets (badge is a common showcase for type variants).

---

### E3. `calendar.tsx`

**What it is:** A month-view date picker grid. Embedded component — used inside DatePicker or standalone.

**Anatomy:**
```
<Calendar
  mode="single|multiple|range"
  selected
  onSelect
  defaultMonth
  fromDate / toDate     (disabled date bounds)
  disabled              (function or date array)
  showOutsideDays
  numberOfMonths={1}    (1 or 2 for range pickers)
>
  <CalendarCaption>                   month + year + navigation
    <CalendarNavButton direction="prev">
    <CalendarNavButton direction="next">
    [MonthDropdown] [YearDropdown]    optional
  </CalendarCaption>
  <CalendarGrid>                      7-col grid
    <CalendarGridHead>
      <CalendarHeadRow>
        <CalendarColumnHeader>        M T W T F S S
    <CalendarGridBody>
      <CalendarRow>
        <CalendarCell>
          <CalendarDay>               individual day button
```

**Day states:**
```
default:       normal day
hover:         cursor over day
focus:         keyboard focus
selected:      chosen day (single) — solid accent
range-start:   first day of range
range-end:     last day of range
range-middle:  within range — lighter accent fill
today:         underline, dot, or ring decoration
outside:       day from prev/next month — dimmed (if showOutsideDays)
disabled:      non-selectable — --disabled-opacity
hidden:        outside days when showOutsideDays=false
```

**Navigation:**
- `←` / `→` → prev/next day
- `↑` / `↓` → prev/next week (same weekday)
- `PageUp` / `PageDown` → prev/next month
- `Home` → first day of week, `End` → last day of week
- `Enter` / `Space` → select day

**Accessibility:**
- `role="grid"` on CalendarGrid
- `role="gridcell"` on CalendarCell
- `role="button"` on CalendarDay
- `aria-label="[day name, month day, year]"` on each day
- `aria-selected` on selected days
- `aria-disabled` on disabled days
- `aria-current="date"` on today

---

### E4. `carousel.tsx`

**What it is:** A horizontal (or vertical) scrolling collection of items, navigated by prev/next controls or dot indicators.

**Anatomy:**
```
<Carousel orientation opts>                         root — manages slide position
  <CarouselContent>                                 inner — the moving strip
    <CarouselItem>                                  individual slide
      [slot: content]
    </CarouselItem>
    ...
  </CarouselContent>
  <CarouselPrevious>                               previous button
  <CarouselNext>                                   next button
  [CarouselDots]                                   optional dot indicators
</Carousel>
```

**Props:**
- `orientation`: `"horizontal"` | `"vertical"`
- `opts`: Embla Carousel options (loop, align, slidesToScroll, etc.)

**States:**
- Prev/Next buttons: default | hover | focus | active | disabled (at bounds, unless loop)
- Dot indicators: default | active (current slide)

**Behavior:**
- Drag / touch swipe → navigate slides (Embla handles)
- Prev/Next click → previous/next slide
- Autoplay: optional, pauses on hover/focus (required for accessibility)
- Loop: wraps from last to first

**Keyboard:**
- `←` / `→` (horizontal) or `↑` / `↓` (vertical) when carousel is focused
- `Tab` should cycle through individual slide content, not carousel slides

**Accessibility:**
- `role="region"` with `aria-roledescription="carousel"` and `aria-label`
- Each slide: `role="group"` with `aria-roledescription="slide"` and `aria-label="X of Y"`
- Live region announces current slide on change
- Prev/Next: explicit `aria-label`
- Dots: `aria-label="Slide X"`, `aria-current` on active

---

### E5. `chart.tsx`

**What it is:** A data visualization wrapper integrating with a charting library (Recharts). Provides consistent theming, tooltips, and legend behavior.

**Anatomy:**
```
<ChartContainer config={chartConfig} className>
  [Recharts component — LineChart, BarChart, PieChart, etc.]
    [ChartTooltip content={<ChartTooltipContent />}>
    [ChartLegend content={<ChartLegendContent />}>
</ChartContainer>
```

**ChartConfig structure:**
```typescript
type ChartConfig = {
  [dataKey: string]: {
    label: string;
    color: string;   // CSS variable reference e.g. "hsl(var(--chart-1))"
    icon?: Component;
  }
}
```

**Chart color scale:**
```css
--chart-1 through --chart-12   /* version defines these color values */
```

**ChartTooltipContent states:**
- Hidden: not hovering data
- Visible: hovering → shows data point values, color indicator, label

**ChartLegendContent:** Renders items horizontally (or vertically). Each item: color swatch + label.

**Accessibility:**
- `role="img"` on chart container with `aria-label` describing what the chart shows
- Data table alternative recommended for complex charts
- Tooltip: `role="tooltip"` on content

**Token consumption:**
```
Chart colors: --chart-1 through --chart-12
Grid lines:   --v-border
Axis text:    --v-text-muted
Tooltip:      --v-bg elevated, --v-border, --v-text
Legend:       --v-text-secondary
```

---

### E6. `data-table.tsx`

**What it is:** A full-featured table with sorting, filtering, pagination, row selection, and column visibility controls. Built on TanStack Table.

**Anatomy:**
```
<DataTable columns data>
  [DataTableToolbar]                   top bar: search, filter, column visibility toggle
  <Table>                              see Table component
  [DataTablePagination]                bottom: page size, page nav
</DataTable>
```

**Toolbar elements:**
- Search input (filters rows by text)
- Filter dropdowns (per-column faceted filters)
- Column visibility dropdown
- Row action buttons (when rows selected)

**Features:**
- **Sorting:** Click column header → sort asc/desc/none (cycles)
- **Filtering:** Global text search + per-column filters
- **Row selection:** Checkbox in first column (select all in header)
- **Pagination:** See Pagination component
- **Column resizing:** Optional — drag column header divider
- **Column reorder:** Optional — drag column header

**States:**
- Row: default | hover | selected | focused (keyboard)
- Header cell: default | hover (sortable) | sorted-asc | sorted-desc
- Loading: skeleton rows replace data rows

**Keyboard:**
- `↑` / `↓` → move between rows
- `Space` → select/deselect row
- `Enter` → activate row action (or expand)
- Column sort: `Enter` on header → cycle sort

**Accessibility:**
- Native `<table>`, `<thead>`, `<tbody>`, `<tr>`, `<th>`, `<td>`
- `scope="col"` on `<th>`
- `aria-sort="ascending|descending|none"` on sortable headers
- `role="checkbox"` on row selection cells
- `aria-label` on action buttons

**Token consumption:**
```
Header row:   --v-bg-elevated, --v-text, --v-text-secondary
Body rows:    --v-bg alternate (zebra optional), --v-text
Selected row: --v-accent at 10% opacity
Hover row:    --v-bg-hover
Border:       --v-border (row dividers)
Sort icon:    --v-text-muted → --v-accent when active
```

---

### E7. `empty-state.tsx`

**What it is:** A structured layout shown when a list, table, or data set has no items. Includes illustration area, heading, description, and action.

**Anatomy:**
```
<EmptyState>
  <EmptyStateIllustration>           icon, SVG, or image (optional)
  </EmptyStateIllustration>
  <EmptyStateContent>
    <EmptyStateTitle>                primary message ("No results found")
    <EmptyStateDescription>          explanation ("Try adjusting your filters")
  </EmptyStateContent>
  <EmptyStateActions>                CTA buttons (optional)
    [slot: Button components]
  </EmptyStateActions>
</EmptyState>
```

**Sizes:**
- `sm`: compact — icon 32px, title h5-scale
- `md`: default — icon 48px, title h4-scale
- `lg`: hero — icon 80px, title h2-scale

**Accessibility:** `aria-live="polite"` on container — announces when it appears (list became empty).

**Token consumption:**
```
Illustration: --v-text-muted (icon color)
Title:        --v-text (h4-h2 scale depending on size)
Description:  --v-text-secondary
Actions:      inherit Button tokens
```

---

### E8. `empty.tsx`

**What it is:** A simpler, inline empty indicator. Used for smaller contexts (empty dropdown, empty search results). Less structured than EmptyState.

**Anatomy:**
```
<Empty>
  [icon — optional]
  [text]
</Empty>
```

Renders inline (not full-page). Typically 40–60px tall. Used inside ComboBox, Select, Command, etc.

**Token consumption:** `--v-text-muted` for both icon and text.

---

### E9. `item.tsx`

**What it is:** A generic list item primitive. Used as the base for menu items, list rows, command items, etc. The "atom" of list-based UI.

**Anatomy:**
```
<Item size disabled selected>
  <ItemIcon>                           leading icon slot
  </ItemIcon>
  <ItemContent>                        main content area
    <ItemLabel>                        primary text
    <ItemDescription>                  secondary text (optional)
  </ItemContent>
  <ItemTrailing>                       right side: badge, shortcut, chevron, etc.
  </ItemTrailing>
</Item>
```

**States:** default | hover | focus | active | selected | disabled

**Purpose:** This is a display + basic behavior primitive. Higher-level components (MenuItem, SidebarMenuButton, CommandItem) extend it.

**Token consumption:**
```
default:   transparent bg, --v-text
hover:     --v-bg-hover
selected:  --v-accent at 10% bg, --v-accent text
disabled:  --disabled-opacity
```

---

### E10. `kbd.tsx`

**What it is:** A styled keyboard key label. Purely presentational.

**Anatomy:**
```
<Kbd>⌘</Kbd>
<Kbd>Ctrl</Kbd>
<Kbd>K</Kbd>
```

**Visual:** `<kbd>` element. Styled to look like a physical key — raised appearance, monospace font, small size.

**Sizes:** `sm` | `md` (default) — xs font, small padding

**No interaction. No states. No types.**

**Token consumption:**
```
bg:     --v-bg-elevated
border: --v-border (top/left lighter, bottom/right darker for raised effect)
text:   --v-text
font:   monospace stack
```

---

### E11. `progress.tsx`

**What it is:** A bar indicating task completion or loading progress.

**Anatomy:**
```
<Progress value={60} max={100} size indeterminate>
  <ProgressTrack>                      full-width container bar
    <ProgressFill>                     filled portion proportional to value
    </ProgressFill>
  </ProgressTrack>
</Progress>
```

**Props:**
- `value`: 0–max (current progress)
- `max`: default 100
- `indeterminate`: boolean — value unknown, shows animation loop

**States:**
```
determinate:    fill width = (value/max) × 100%
indeterminate:  animated fill moves back and forth
complete:       value === max — optional color change to success
```

**Animation:**
```
Value change:   fill width transitions smoothly | duration: --duration-slow | ease: --ease-decelerate
Indeterminate:  fill moves left→right in loop | duration: 1.5s | ease: linear | infinite
```

**Sizes:**

| Size | Track H |
|------|---------|
| sm   | 2px     |
| md   | 6px     |
| lg   | 10px    |
| xl   | 16px    |

**Accessibility:**
- `role="progressbar"`
- `aria-valuemin="0"`, `aria-valuemax={max}`, `aria-valuenow={value}`
- `aria-valuetext` for human-readable value ("60%", "3 of 5 steps")
- Indeterminate: omit `aria-valuenow`

**Token consumption:**
```
Track:  --v-border (dim)
Fill:   --v-accent (default), --success-color (complete)
```

---

### E12. `table.tsx`

**What it is:** The base styled HTML table component. Lower-level than DataTable (no sort/filter/pagination).

**Anatomy:**
```
<Table>
  <TableCaption>                       above/below table description
  <TableHeader>
    <TableRow>
      <TableHead>                      <th> — column header
        [content] [sort icon — optional]
      </TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>                      <td>
      </TableCell>
    </TableRow>
  </TableBody>
  <TableFooter>                        optional summary row
    <TableRow>
      <TableCell>
</Table>
```

**Row states:**
- default: base bg
- hover: row highlight (if interactive rows)
- selected: accent tinted bg (if selectable)

**Column features:**
- `sticky`: first column sticks on horizontal scroll (`position: sticky; left: 0`)
- `align`: `"left"` (default) | `"center"` | `"right"` on cells/headers

**Token consumption:**
```
Header:    --v-bg-elevated, --v-text, font-weight: --font-weight-medium
Body rows: alternating --v-bg / --v-bg-elevated (zebra, optional) OR uniform
Dividers:  --v-border (horizontal between rows)
Caption:   --v-text-muted, sm font
```

---

### E13. `typography.tsx`

**What it is:** Semantic text components for all heading levels, body text, lists, blockquotes, code, and inline text styles.

**Components:**
```
<H1> | <H2> | <H3> | <H4> | <H5> | <H6>    heading hierarchy
<P>                                          paragraph
<Lead>                                       large intro paragraph (1.25× base)
<Large>                                      slightly larger body (1.125×)
<Small>                                      smaller body (0.875×)
<Muted>                                      dimmed text (--v-text-secondary)
<Blockquote>                                 quoted section with left border
<Code>                                       inline code (monospace, bg highlight)
<Pre>                                        code block (full block, scrollable)
<List>     type="ul|ol"                      styled list (bullets or numbers)
<ListItem>                                   list item
<InlineCode>                                 alias for Code
<Mark>                                       highlighted text
<Del>                                        strikethrough
<Kbd>                                        keyboard key (see kbd.tsx)
<Anchor>                                     styled hyperlink
```

**All headings:** Scale, weight, tracking, and leading per the version's typography specification. All map to semantic HTML elements.

**Blockquote visual:**
```
left border: 4px solid --v-accent
padding-left: --space-6
font-style: italic
color: --v-text-secondary
```

**Code block:**
```
bg:      --v-bg-elevated (darker than surface)
border:  --v-border 1px
font:    monospace stack
padding: --space-4 --space-5
overflow: auto
Optional: syntax highlighting integration via Shiki or Prism
```

**Inline code:**
```
bg:      --v-bg-elevated
padding: 2px --space-2
radius:  --radius-sm
font:    monospace, 0.9em
```

**Anchor:**
```
color:          --v-accent
text-decoration: underline (on hover) or always
underline-offset: 3px
```

---
---

## GROUP F — FEEDBACK & STATUS

### F1. `alert.tsx`

**What it is:** An inline message communicating status, feedback, or information to the user. Static — not dismissible by default (unlike Toast).

**Anatomy:**
```
<Alert variant="default|info|success|warning|destructive">
  <AlertIcon>                         status icon matching variant
  </AlertIcon>
  <AlertContent>
    <AlertTitle>                      optional — short summary
    <AlertDescription>               main message
  </AlertContent>
  [AlertClose]                        optional dismiss button
</Alert>
```

**Variants** (semantic, not type variants):
```
default:      --v-accent (informational)
info:         blue palette
success:      green palette
warning:      amber/yellow palette
destructive:  red palette
```

Each variant overrides: icon, border-left/top accent color, bg tint.

**Accessibility:**
- `role="alert"` for live region (auto-announced on mount)
- Or `role="status"` for less urgent info
- Icon: `aria-hidden="true"` (variant text communicates status)
- If dismissible: close button with `aria-label="Dismiss alert"`

**No interactive types** (Alert doesn't accept component type variants — it uses semantic variants only)

---

### F2. `skeleton.tsx`

**What it is:** A placeholder animation shown while content is loading. Mimics the shape of the content it replaces.

**Anatomy:**
```
<Skeleton className="h-4 w-[250px]" />      single block
<Skeleton circle />                          circular (avatar placeholder)
```

**Props:**
- `className`: sets width, height — consumer defines the shape
- `circle`: `border-radius: 50%`
- `animate`: boolean (default true) — shimmer animation

**Animation:**
```
Shimmer: gradient sweeps left-to-right (translateX -100% → 100%)
         duration: 1.5s | ease: linear | infinite
         Gradient: transparent → --v-skeleton-highlight → transparent
```

**Token consumption:**
```
Base bg:    --v-skeleton-bg (slightly lighter than surface)
Highlight:  --v-skeleton-highlight (slightly brighter — shimmer peak)
```

**Accessibility:** `aria-hidden="true"` — skeleton is decorative. The loading state is communicated by a parent `aria-busy="true"` or `aria-live` region.

---

### F3. `sonner.tsx`

**What it is:** A toast notification system (Sonner library integration). Renders toast messages in a portal, stacked and auto-dismissed.

**Anatomy:**
```
<Toaster>                              root — configures position, theme, duration
  (renders toasts from toast() API calls)
</Toaster>

/* Usage */
toast("Message")
toast.success("Success!")
toast.error("Failed!")
toast.warning("Watch out!")
toast.loading("Processing...")
toast.promise(promise, { loading, success, error })
```

**Toast anatomy:**
```
<Toast>
  [icon — type-based: ✓ ✗ ⚠ ⟳]
  [title]
  [description — optional]
  [action button — optional]
  [close button]
</Toast>
```

**Position options:** `top-left` | `top-center` | `top-right` | `bottom-left` | `bottom-center` (default) | `bottom-right`

**Stacking behavior:**
- Multiple toasts stack vertically (newest on top or bottom depending on position)
- Hover over stack → toasts spread out to full height
- Each toast auto-dismisses after `duration` ms (default 4000ms)
- Hover pauses auto-dismiss timer

**Animation:**
```
Enter:   slide in from edge + opacity 0→1 | duration: --duration-slower
Dismiss: slide out + opacity → 0 | duration: --duration-slow
Hover expand: height animates from collapsed stack to individual | duration: --duration-base
```

**Types:** Toast uses semantic types (success/error/warning/info/default), mapped to visual treatments similar to Alert variants.

**Accessibility:**
- `aria-live="polite"` (non-error) or `aria-live="assertive"` (error/destructive)
- `role="status"` or `role="alert"` accordingly
- Close button: `aria-label="Close notification"`

---

### F4. `spinner.tsx`

**What it is:** A circular loading indicator. Used inline within components (Button loading state) or as standalone loader.

**Anatomy:**
```
<Spinner size label />          single SVG/CSS element
```

**Props:**
- `size`: `xs` | `sm` | `md` | `lg`
- `label`: visually hidden text for screen readers (default "Loading...")

**Animation:**
```
Rotation: 360deg continuous | duration: 0.7s | ease: linear | infinite
Optional: stroke-dashoffset animation for "progress arc" style
```

**Sizes:**

| Size | Diameter | Stroke W |
|------|----------|----------|
| xs   | 12px     | 1.5px    |
| sm   | 16px     | 2px      |
| md   | 24px     | 2.5px    |
| lg   | 36px     | 3px      |

**Accessibility:**
- `role="status"` on outer
- Visually hidden `<span>`: "Loading..." text
- `aria-live="polite"`

**Token consumption:**
```
Track:  --v-border (full circle, low opacity)
Fill:   --v-accent (the rotating arc segment)
```

---

### F5. `toast.tsx`

**What it is:** The base Toast primitive (distinct from Sonner — this is the Radix/ShadCN Toast if not using Sonner). A single programmatic notification.

**Anatomy:**
```
<ToastProvider swipeDirection>
  <Toast variant duration open onOpenChange>
    <ToastTitle>
    <ToastDescription>
    <ToastAction altText>             action button
      [slot: button]
    </ToastAction>
    <ToastClose>                       dismiss button
  </Toast>
  <ToastViewport>                      portal target, positions toasts
</ToastProvider>
```

**States:**
- open: visible, countdown running
- closed: dismissed or expired
- swipe: user is swiping to dismiss

**Swipe to dismiss:** Drag horizontally (or direction-based on `swipeDirection`) beyond threshold → dismiss. Released before threshold → snap back.

**Animation:**
```
Open:  slide in + opacity 0→1 | duration: --duration-slow
Close: slide out | duration: --duration-base
Swipe: follow pointer, then slide out fully on release past threshold
```

**Accessibility:**
- `role="status"` or `role="alert"`
- `aria-live` matching urgency
- `aria-atomic="true"`

---
---

## GROUP G — SPECIALTY COMPONENTS

### G1. `analog-clock.tsx`

**What it is:** A visual clock with rotating hour, minute, and second hands. Decorative or informational.

**Anatomy:**
```
<AnalogClock time size showSeconds showNumbers style>
  <ClockFace>                          circular container
    <ClockNumbers>                     optional hour markers (12, 3, 6, 9 or all 12)
    <ClockTicks>                       optional minute tick marks
    <ClockHand name="hour">            hour hand SVG line/rect
    <ClockHand name="minute">
    <ClockHand name="second">
    <ClockCenter>                      center dot
  </ClockFace>
</AnalogClock>
```

**Props:**
- `time`: Date | string | "live" (updates in real-time)
- `size`: diameter (default 200px, responsive)
- `showSeconds`: boolean
- `showNumbers`: boolean
- `showTicks`: boolean

**Hand rotation (CSS custom properties):**
```css
--hour-angle:   calc(var(--hours) * 30deg + var(--minutes) * 0.5deg)
--minute-angle: calc(var(--minutes) * 6deg)
--second-angle: calc(var(--seconds) * 6deg)
transform: rotate(var(--hand-angle));
transform-origin: 50% 100%; /* bottom-center of hand */
```

**Live update:** `setInterval(1000)` updates second hand. Minute/hour update when minute changes.

**Second hand animation:** Two modes:
- `smooth`: `transition: transform 0.1s linear` (continuous rotation)
- `tick`: `transition: none` with snap-to-second

**Accessibility:**
- `role="img"` with `aria-label="Clock showing [time]"` (updated live)
- Or pair with `<DigitalClock>` as the accessible time display

---

### G2. `digital-clock.tsx`

**What it is:** A text-based clock displaying current time (HH:MM:SS).

**Anatomy:**
```
<DigitalClock format="12|24" showSeconds showDate timezone live>
  <ClockSegment>                       HH
  <ClockSeparator>                     :
  <ClockSegment>                       MM
  <ClockSeparator>                     :
  <ClockSegment>                       SS
  [ClockAmPm>                          AM/PM (12hr only)
  [ClockDate>                          date display (optional)
</DigitalClock>
```

**Props:**
- `format`: `"12"` | `"24"`
- `showSeconds`: boolean
- `showDate`: boolean
- `timezone`: IANA timezone string
- `live`: updates every second

**Visual:** Monospace font. Version defines style — e.g. Terminal version uses CRT display style, Neon version uses LED/neon tube treatment.

**Flip animation variant:** Digits "flip" like split-flap display boards (optional).

**Accessibility:**
- `role="timer"` or `role="time"`
- `aria-live="off"` (constantly changing — don't announce every second)
- `aria-label="Current time: [time string]"` updated per minute

---

### G3. `direction.tsx`

**What it is:** A contextual direction/compass indicator showing orientation, heading, or navigation direction.

**Anatomy:**
```
<Direction value heading size label>    value: 0–360 degrees, or cardinal
  <DirectionArrow>                      rotating arrow indicator
  <DirectionLabel>                      optional — "N", "NE", "45°"
</Direction>
```

**Props:**
- `value`: number (degrees 0–360) or `"N"|"NE"|"E"|"SE"|"S"|"SW"|"W"|"NW"`
- `size`: diameter of indicator
- `animated`: smooth rotation transition

**Rotation:**
```css
transform: rotate(calc(var(--direction-deg) * 1deg));
transition: transform --duration-slow --ease-standard; /* when animated */
```

**Accessibility:**
- `role="img"`
- `aria-label="Direction: [label]"` e.g. "Direction: North-East, 45 degrees"

---

### G4. `drawer.tsx`

**What it is:** A panel that slides from a screen edge. Similar to Sheet but designed for mobile-first use — typically full-width on mobile, with a drag-to-dismiss gesture.

**Anatomy:** Mirrors Sheet anatomy exactly:
```
<Drawer>
  <DrawerTrigger>
  <DrawerPortal>
    <DrawerOverlay>
    <DrawerContent side="bottom|top|left|right">
      <DrawerHandle>                   drag handle bar (top of bottom drawer)
      <DrawerHeader>
        <DrawerTitle>
        <DrawerDescription>
      </DrawerHeader>
      [slot: content]
      <DrawerFooter>
        [slot: actions]
      </DrawerFooter>
    </DrawerContent>
  </DrawerPortal>
</Drawer>
```

**Key difference from Sheet:**
- `DrawerHandle`: a visual drag handle (horizontal bar) at the top of bottom drawers
- Drag-to-dismiss: drag down (bottom) or up (top) past a threshold → dismiss
- Snap points: can snap to multiple heights (e.g. 40vh, 70vh, fullscreen)
- `shouldScaleBackground`: scales the page behind the drawer for depth effect

**Animation:**
- Enter: slide from edge | duration: --duration-slower | ease: --ease-decelerate
- Dismiss: slide back + fade overlay | duration: --duration-slow
- Drag: follows pointer in real-time (no transition during drag)
- Snap: spring animation to snap point | ease: --ease-spring

**Accessibility:** Same as Sheet (`role="dialog"`, focus trap, etc.)

---

### G5. `command.tsx`

**What it is:** A command palette / global search. A modal search interface that allows users to search for commands, pages, actions, or items.

**Anatomy:**
```
<Command>                              root — manages search state
  <CommandDialog open onOpenChange>    optional modal wrapper
    <CommandInput placeholder>         search text field
    <CommandEmpty>                     shown when no results
    <CommandList>                      scrollable results container
      <CommandGroup heading>           labeled section of results
        <CommandItem value onSelect>   single result item
          [icon]
          [label]
          [shortcut]
        </CommandItem>
        <CommandSeparator>
      </CommandGroup>
    </CommandList>
  </CommandDialog>
</Command>
```

**Behavior:**
- Type in CommandInput → filters items by fuzzy/exact match in real time
- `↑` / `↓` → navigate items
- `Enter` → execute selected item's onSelect
- `Escape` → close (if modal) or clear search
- Items can have keyboard shortcuts displayed — these are visual only (app handles actual shortcuts)

**Filtering:**
- Default: built-in fuzzy filter (matches label, keywords)
- Custom: `filter` prop accepts function `(value: string, search: string) => number` (0–1 relevance score)
- Score of 0 = item hidden

**Shortcut display:** `<CommandShortcut>` — right-aligned `Kbd` component pair (e.g., `⌘K`)

**Keyboard shortcut to open:** Commonly `⌘K` / `Ctrl+K` — implemented by consumer, not component.

**Accessibility:**
- `role="combobox"` on input
- `aria-controls` → list id
- `aria-autocomplete="list"`
- List: `role="listbox"`
- Items: `role="option"`, `aria-selected`
- Empty: `aria-live="polite"` announcement

---

### G6. `icon-button.tsx`

**What it is:** A square/circular button containing only an icon. No visible text label.

**Anatomy:**
```
<IconButton size variant tooltip>
  [icon]
  <VisuallyHidden>Accessible label</VisuallyHidden>
</IconButton>
```

**Props:**
- All Button props apply (size, variant, loading, disabled)
- `tooltip`: string — shows Tooltip on hover with this text (mandatory when no visible label)
- `shape`: `"square"` | `"circle"`

**Rules:**
- MUST have either `tooltip` prop OR `aria-label` attribute — never icon-only without label
- Tooltip is automatic when `tooltip` prop provided
- Loading state: spinner replaces icon

**Sizes:** Square (width = height):

| Size | Dimension |
|------|-----------|
| xs   | 20px      |
| sm   | 28px      |
| md   | 36px      |
| lg   | 44px      |
| xl   | 52px      |

**Types:** All 7.

---

### G7. `hover-card.tsx`
*(Already covered in Group C — Overlay section)*

---

### G8. `popover.tsx`
*(Already covered in Group C — Overlay section)*

---
---

## SPECIAL COMPONENT NOTES

### `direction.tsx`
Already covered above (G3).

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

*(— indicates size variant not applicable or not differentiated)*

---

## COMPONENT × TYPE SUPPORT MATRIX

| Component           | default | solid | outline | ghost | inverse | contrast | soft |
|---------------------|---------|-------|---------|-------|---------|----------|------|
| Button              | ✓       | ✓     | ✓       | ✓     | ✓       | ✓        | ✓    |
| IconButton          | ✓       | ✓     | ✓       | ✓     | ✓       | ✓        | ✓    |
| Badge               | ✓       | ✓     | ✓       | ✓     | ✓       | ✓        | ✓    |
| Card                | ✓       | ✓     | ✓       | ✓     | ✓       | ✓        | ✓    |
| Input               | ✓       | -     | ✓       | ✓     | -       | -        | ✓    |
| Textarea            | ✓       | -     | ✓       | ✓     | -       | -        | ✓    |
| Select / ComboBox   | ✓       | -     | ✓       | ✓     | -       | -        | ✓    |
| Toggle              | ✓       | ✓     | ✓       | ✓     | -       | ✓        | ✓    |
| ToggleGroup items   | ✓       | ✓     | ✓       | ✓     | -       | ✓        | ✓    |
| Tabs trigger        | ✓       | ✓     | ✓       | ✓     | -       | ✓        | ✓    |
| Pagination link     | ✓       | ✓     | ✓       | ✓     | -       | ✓        | ✓    |
| Accordion trigger   | ✓       | -     | -       | ✓     | -       | -        | ✓    |
| Alert (semantic)    | ✓       | ✓     | ✓       | -     | -       | ✓        | ✓    |
| Sheet / Drawer      | ✓       | ✓     | ✓       | -     | ✓       | ✓        | ✓    |
| Dialog / AlertDialog| ✓       | ✓     | -       | -     | -       | ✓        | -    |
| Tooltip             | ✓       | ✓     | -       | -     | ✓       | ✓        | -    |
| Menubar items       | ✓       | -     | -       | ✓     | -       | -        | -    |
| Sidebar menu button | ✓       | ✓     | -       | ✓     | -       | -        | ✓    |

---

## GLOBAL ACCESSIBILITY REQUIREMENTS

These apply to EVERY component in the system:

1. **Focus visible:** Focus ring ALWAYS visible. Never `outline: none` without replacement. Ring: `--focus-ring-width` offset `--focus-ring-offset` color `--focus-ring-color`.

2. **Color contrast:** Text meets WCAG AA minimum (4.5:1 for normal text, 3:1 for large text). Accent colors against their backgrounds verified per version.

3. **Touch targets:** Minimum 44×44px interactive area, even if visual element is smaller (use padding or pseudo-element expansion).

4. **No motion assumed:** All animations respect `prefers-reduced-motion: reduce` — transitions set to `duration: 0` or simplified when preference is set.

5. **Screen reader text:** Use `<VisuallyHidden>` / `.sr-only` for labels on icon-only or visually-implied elements.

6. **Error association:** Form errors linked to their controls via `aria-describedby`.

7. **Loading states:** `aria-busy="true"` on containers during loading. Spinners have visually-hidden labels.

8. **Dynamic content:** Changes announced via `aria-live` regions (polite for non-urgent, assertive only for errors/alerts).

```css
/* Reduced motion override — global */
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

The theme layer (version files) must provide ALL of these token values for the component system to render correctly:

```css
/* Required tokens every version MUST define */

/* Surface tokens */
--v-bg
--v-bg-hover
--v-bg-active
--v-bg-elevated

/* Border tokens */
--v-border
--v-border-hover

/* Text tokens */
--v-text
--v-text-secondary
--v-text-muted

/* Accent tokens */
--v-accent
--v-accent-hover
--v-accent-active
--v-accent-ghost        /* accent at ~10% opacity */
--v-accent-muted        /* accent at ~6% opacity */
--v-accent-muted-hover  /* accent at ~10% opacity */
--v-on-accent           /* text color ON accent bg */

/* Contrast tokens */
--v-contrast-bg
--v-contrast-border
--v-contrast-text

/* Ghost tokens */
--v-ghost-hover
--v-ghost-active

/* Skeleton tokens */
--v-skeleton-bg
--v-skeleton-highlight

/* Input specific */
--v-input-bg

/* Error/Success/Warning (semantic — consistent across versions) */
--error-color
--success-color
--warning-color
--info-color
```

---

*End of _BASE — Component Mechanics Reference*
*62 components documented. Pairs with version files v01–v20 for complete design system.*