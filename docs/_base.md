# _BASE Components — Complete Reference Guide

> **Complete reference for the 62 foundational base components** in `src/ui/components/_base/`. This layer provides the structural anatomy, behavior, states, accessibility, and prop interfaces that all version themes extend.

---

## Table of Contents

1. [Overview](#overview)
2. [Architecture](#architecture)
3. [How to Use](#how-to-use)
4. [Prop System](#prop-system)
5. [Data Attributes](#data-attributes)
6. [Size Scale](#size-scale)
7. [Accessibility](#accessibility)
8. [Component Reference](#component-reference)
9. [Integration with Versions](#integration-with-versions)

---

## Overview

### What is _base?

The **_base layer** contains 62 pure React components that define:
- ✅ Component **anatomy** (DOM structure, sub-components)
- ✅ Component **behavior** (keyboard, pointer, states)
- ✅ Component **props** (TypeScript interfaces)
- ✅ **Accessibility** (ARIA, roles, keyboard navigation)
- ✅ **Data attributes** for styling hooks

**What _base does NOT contain:**
- ❌ No Tailwind classes
- ❌ No colors or visual styles
- ❌ No version-specific animations
- ❌ No hardcoded CSS

### Why _base?

**Separation of concerns:**
```
_base/                ← Structure, behavior, accessibility (THIS LAYER)
  ↓
versions/             ← Visual styling (Tailwind, colors, animations)
  ↓
variants/             ← Semantic color palettes (destructive, success, etc.)
```

This architecture allows:
- **62 base components** × **20 visual themes** × **8+ color variants** = thousands of combinations
- Consistent behavior across all themes
- Easy theme switching without breaking functionality
- Full TypeScript support

---

## Architecture

### Layer System

```
┌─────────────────────────────────────────────┐
│  Application Code                           │
│  <Button version="neon" variant="primary">  │
└─────────────────────┬───────────────────────┘
                      │
                      ▼
┌─────────────────────────────────────────────┐
│  Handler Layer (src/ui/handlers/)           │
│  - Resolves version + variant               │
│  - Loads version component                  │
└─────────────────────┬───────────────────────┘
                      │
                      ▼
┌─────────────────────────────────────────────┐
│  Version Component (src/components/neon/)   │
│  - Applies Tailwind classes                 │
│  - Adds version-specific animations         │
│  - Wraps ButtonBase                         │
└─────────────────────┬───────────────────────┘
                      │
                      ▼
┌─────────────────────────────────────────────┐
│  Base Component (src/ui/components/_base/)  │  ← YOU ARE HERE
│  - Renders semantic HTML                    │
│  - Manages state & behavior                 │
│  - Exposes data-* attributes for styling    │
│  - Implements accessibility                 │
└─────────────────────────────────────────────┘
```

### File Structure

```
src/ui/components/_base/
├── button.tsx              # Interactive trigger
├── accordion.tsx           # Collapsible panels
├── input.tsx               # Text entry
├── dialog.tsx              # Modal overlay
├── ... (62 total)
└── index.ts                # Barrel export
```

Each file exports:
- **Type definitions** (`ButtonType`, `ButtonSize`)
- **Props interface** (`ButtonBaseProps`)
- **Component** (`ButtonBase`)
- **Sub-components** (if compound component)

---

## How to Use

### Direct Import (Base Only)

Use base components directly when building custom versions:

```tsx
import { ButtonBase } from '@/ui/components/_base/button';

export function MyCustomButton() {
  return (
    <ButtonBase
      visualType="outline"
      size="md"
      variant="primary"
      className="my-custom-styles"
    >
      Click me
    </ButtonBase>
  );
}
```

### Via Version Components (Recommended)

Version components wrap base components and add styling:

```tsx
// Version component: src/components/neon/button.tsx
import { ButtonBase } from '@/ui/components/_base/button';

export function Button({ type, size, variant, ...props }) {
  return (
    <ButtonBase
      visualType={type}
      size={size}
      variant={variant}
      className={cn(
        // Tailwind classes for neon theme
        'bg-cyan-500 shadow-neon-glow',
        'hover:bg-cyan-400',
        // ... more styling
      )}
      {...props}
    />
  );
}
```

### Via Handler (User-Facing API)

```tsx
import { Button } from '@/ui/handlers/button';

// Handler resolves version + variant automatically
<Button version="neon" variant="destructive" size="lg">
  Delete
</Button>
```

---

## Prop System

All base components follow a consistent prop pattern:

### Common Props

Every interactive base component accepts:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `visualType` | `string` | `'default'` | Visual structural treatment (outline, solid, ghost, etc.) |
| `size` | `string` | `'md'` | Size variant (xs, sm, md, lg, xl) |
| `variant` | `string` | - | Semantic color variant (primary, destructive, success) |
| `disabled` | `boolean` | `false` | Disables interaction |
| `className` | `string` | - | Additional CSS classes |
| `...rest` | `HTMLAttributes` | - | Standard HTML attributes |

### Why `visualType` instead of `type`?

HTML elements like `<button>` and `<input>` have a native `type` attribute:
- `<button type="submit">` — HTML attribute
- `<input type="text">` — HTML attribute

To avoid conflicts, we use:
- `visualType` — Our visual variant (outline, solid, etc.)
- `htmlType` — Maps to native HTML `type` (for buttons/inputs)

```tsx
<ButtonBase
  visualType="outline"     // Our visual style
  htmlType="submit"        // Native HTML type
/>
```

### Component-Specific Props

Each component has unique props based on its purpose:

**Button:**
```tsx
interface ButtonBaseProps {
  visualType?: 'default' | 'solid' | 'outline' | 'ghost' | ...;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  variant?: string;
  loading?: boolean;      // Shows spinner, disables interaction
  fullWidth?: boolean;    // width: 100%
  asChild?: boolean;      // Render as child element (Slot pattern)
}
```

**Input:**
```tsx
interface InputBaseProps {
  visualType?: 'default' | 'outline' | 'ghost' | ...;
  inputSize?: 'sm' | 'md' | 'lg';  // Renamed to avoid conflict
  variant?: string;
  invalid?: boolean;      // Error state styling
}
```

**Dialog (Compound Component):**
```tsx
// Root manages open state
<DialogBase open={open} onOpenChange={setOpen}>
  <DialogTriggerBase>Open</DialogTriggerBase>
  <DialogPortalBase>
    <DialogOverlayBase />
    <DialogContentBase>
      <DialogHeaderBase>
        <DialogTitleBase>Title</DialogTitleBase>
        <DialogDescriptionBase>Description</DialogDescriptionBase>
      </DialogHeaderBase>
      <DialogCloseBase />
    </DialogContentBase>
  </DialogPortalBase>
</DialogBase>
```

---

## Data Attributes

Base components expose **data attributes** for version components to style:

### Standard Data Attributes

All components use:

```tsx
<ButtonBase
  visualType="outline"
  size="lg"
  variant="destructive"
/>
// Renders:
<button
  data-type="outline"
  data-size="lg"
  data-variant="destructive"
>
```

Version components can target these in CSS:

```css
/* Tailwind arbitrary variants */
[data-type="outline"] {
  @apply border-2 bg-transparent;
}

[data-size="lg"] {
  @apply h-11 px-5 text-base;
}

[data-variant="destructive"] {
  @apply border-red-500 text-red-500;
}
```

### State Data Attributes

Components expose interaction states:

| Attribute | Values | When |
|-----------|--------|------|
| `data-state` | `open` \| `closed` | Collapsible components (Dialog, Accordion, etc.) |
| `data-disabled` | present or absent | Component is disabled |
| `data-loading` | present or absent | Component is loading |
| `data-invalid` | present or absent | Form field has error |
| `data-selected` | present or absent | Item is selected |
| `data-active` | present or absent | Tab/item is active |

**Example:**
```tsx
<AccordionItemBase value="item-1">
  {/* Radix sets data-state automatically */}
</AccordionItemBase>
```

```css
/* Rotate chevron when open */
[data-state="open"] .chevron {
  transform: rotate(180deg);
}
```

### Custom Data Attributes

Some components have unique attributes:

**Tabs:**
```tsx
data-orientation="horizontal" | "vertical"
```

**Card:**
```tsx
data-clickable=""
data-animated=""
data-orientation="vertical" | "horizontal"
```

**Slider:**
```tsx
data-orientation="horizontal" | "vertical"
data-disabled=""
```

---

## Size Scale

Standard size scale across all components:

| Size | Height | Padding H | Font | Icon | Use Case |
|------|--------|-----------|------|------|----------|
| `xs` | 20px | 8px | 10px | 12px | Compact UIs, badges |
| `sm` | 28px | 12px | 12px | 14px | Dense layouts, toolbars |
| `md` | 36px | 16px | 14px | 16px | **Default**, most use cases |
| `lg` | 44px | 20px | 16px | 18px | Touch targets, mobile |
| `xl` | 52px | 24px | 18px | 20px | Hero sections, CTAs |

**Touch Target Compliance:**
- `md` and above meet 44×44px minimum (WCAG 2.1)
- `lg`/`xl` recommended for mobile-first apps

**Size Props:**
- Buttons: `xs | sm | md | lg | xl`
- Inputs: `sm | md | lg`
- Spinners: `xs | sm | md | lg | xl`
- Cards: `sm | md | lg`

---

## Accessibility

All base components are **fully accessible** by default:

### Built-in Features

✅ **Semantic HTML**
- Use native elements (`<button>`, `<input>`, `<a>`)
- Avoid `<div role="button">` unless necessary

✅ **Keyboard Navigation**
- All interactive elements are focusable
- Enter/Space activate buttons
- Arrow keys navigate menus, tabs, sliders
- Esc closes dialogs, popovers, dropdowns

✅ **ARIA Attributes**
```tsx
<ButtonBase loading>
  {/* Automatically sets */}
  aria-disabled="true"
  aria-busy="true"
</ButtonBase>

<InputBase invalid>
  {/* Automatically sets */}
  aria-invalid="true"
</InputBase>
```

✅ **Focus Management**
- Visible focus rings (never `outline: none`)
- Focus trapping in modals
- Focus restoration on close

✅ **Screen Reader Support**
- Proper labels (via `aria-label` or `<label>`)
- State announcements (`role="status"`, `aria-live`)
- Hidden loading text for spinners

### Required Props

Some components **require** accessibility props:

**IconButton** (no visible text):
```tsx
<IconButtonBase aria-label="Close">  {/* REQUIRED */}
  <XIcon />
</IconButtonBase>
```

**Toast Action** (button in notification):
```tsx
<ToastActionBase altText="Undo deletion">  {/* REQUIRED */}
  Undo
</ToastActionBase>
```

### Accessibility Features by Component

**Dialog:**
- `role="dialog"`
- `aria-modal="true"`
- Focus trap
- Esc to close
- Focus returns to trigger on close

**Accordion:**
- `role="region"` on panels
- `aria-expanded` on triggers
- `aria-controls` linking trigger → content
- Arrow key navigation

**Tabs:**
- `role="tablist"`, `role="tab"`, `role="tabpanel"`
- `aria-selected` on active tab
- Arrow key navigation with wrapping

**Form Fields:**
- Link `<label>` to input via `htmlFor`
- Error messages with `aria-describedby`
- Required fields with `aria-required`
- Invalid state with `aria-invalid`

---

## Component Reference

### Button & Interactions

#### ButtonBase
Primary interactive trigger for actions.

```tsx
import { ButtonBase } from '@/ui/components/_base/button';

<ButtonBase
  visualType="solid"
  size="lg"
  variant="primary"
  loading={isLoading}
  disabled={!canSubmit}
  onClick={handleClick}
>
  Submit
</ButtonBase>
```

**Props:**
- `visualType`: 15 types (default, solid, outline, ghost, inverse, contrast, soft, neutral, subtle, elevated, flat, tinted, link, disabled, unstyled)
- `size`: xs | sm | md | lg | xl
- `loading`: Shows spinner, prevents clicks
- `fullWidth`: Expands to container width
- `asChild`: Render as child element (for `<Button asChild><a href="...">`)

**States:** default, hover, focus, active, disabled, loading

---

#### IconButtonBase
Square button with icon only.

```tsx
<IconButtonBase
  visualType="ghost"
  size="md"
  shape="circle"
  aria-label="Close dialog"  // REQUIRED
>
  <XIcon />
</IconButtonBase>
```

**Props:**
- Same as Button, plus:
- `shape`: square | rounded | circle
- `aria-label`: **Required** (no visible text)

---

#### ToggleBase
Two-state button (pressed/unpressed).

```tsx
<ToggleBase
  pressed={isBold}
  onPressedChange={setIsBold}
  aria-label="Toggle bold"
>
  <BoldIcon />
</ToggleBase>
```

**Props:**
- `pressed`: Controlled state
- `onPressedChange`: Callback

**States:** unpressed, pressed, hover, focus, disabled

---

#### ToggleGroupBase
Group of toggles (single or multiple selection).

```tsx
// Single selection (like radio)
<ToggleGroupBase type="single" value={align} onValueChange={setAlign}>
  <ToggleGroupItemBase value="left"><AlignLeftIcon /></ToggleGroupItemBase>
  <ToggleGroupItemBase value="center"><AlignCenterIcon /></ToggleGroupItemBase>
  <ToggleGroupItemBase value="right"><AlignRightIcon /></ToggleGroupItemBase>
</ToggleGroupBase>

// Multiple selection (like checkbox)
<ToggleGroupBase type="multiple" value={styles} onValueChange={setStyles}>
  <ToggleGroupItemBase value="bold"><BoldIcon /></ToggleGroupItemBase>
  <ToggleGroupItemBase value="italic"><ItalicIcon /></ToggleGroupItemBase>
</ToggleGroupBase>
```

**Props:**
- `type`: 'single' | 'multiple'
- `appearance`: 'joined' | 'separated'

---

### Form Components

#### InputBase
Single-line text entry.

```tsx
<InputBase
  type="email"
  visualType="outline"
  inputSize="md"
  variant="primary"
  invalid={!!errors.email}
  placeholder="Enter email"
  required
/>
```

**Props:**
- `type`: text | email | password | number | etc.
- `visualType`: Visual style
- `inputSize`: sm | md | lg (renamed to avoid conflict)
- `invalid`: Error state

---

#### TextareaBase
Multi-line text entry.

```tsx
<TextareaBase
  visualType="outline"
  size="md"
  invalid={!!errors.bio}
  resize="vertical"
  autoGrow
  rows={3}
/>
```

**Props:**
- `resize`: none | vertical | horizontal | both
- `autoGrow`: Auto-expand to fit content

---

#### CheckboxBase
Binary toggle for boolean values.

```tsx
<CheckboxBase
  checked={agreed}
  onCheckedChange={setAgreed}
  visualType="default"
  size="md"
  invalid={!agreed && submitted}
>
  <CheckboxIndicatorBase>
    <CheckIcon />
  </CheckboxIndicatorBase>
</CheckboxBase>
```

**States:** unchecked, checked, indeterminate, hover, focus, disabled

---

#### SwitchBase
On/off toggle (like iOS switch).

```tsx
<SwitchBase
  checked={enabled}
  onCheckedChange={setEnabled}
  size="md"
>
  <SwitchThumbBase />
</SwitchBase>
```

**Animation:** Thumb slides left/right, smooth transition

---

#### RadioGroupBase
Single selection from options.

```tsx
<RadioGroupBase value={plan} onValueChange={setPlan}>
  <RadioGroupItemBase value="free">
    <RadioGroupIndicatorBase />
  </RadioGroupItemBase>
  <RadioGroupItemBase value="pro">
    <RadioGroupIndicatorBase />
  </RadioGroupItemBase>
</RadioGroupBase>
```

---

#### SelectBase
Dropdown selection (styled alternative to `<select>`).

```tsx
<SelectBase value={country} onValueChange={setCountry}>
  <SelectTriggerBase visualType="outline">
    <SelectValueBase placeholder="Select country" />
  </SelectTriggerBase>
  <SelectContentBase>
    <SelectItemBase value="us">United States</SelectItemBase>
    <SelectItemBase value="uk">United Kingdom</SelectItemBase>
  </SelectContentBase>
</SelectBase>
```

**Sub-components:**
- `SelectTriggerBase` — Button showing selected value
- `SelectValueBase` — Displays selected value
- `SelectContentBase` — Dropdown panel
- `SelectItemBase` — Individual option
- `SelectGroupBase` — Group of options
- `SelectLabelBase` — Group label
- `SelectSeparatorBase` — Visual divider

---

#### SliderBase
Range input with draggable thumb.

```tsx
<SliderBase
  value={[volume]}
  onValueChange={([v]) => setVolume(v)}
  min={0}
  max={100}
  step={1}
  size="md"
>
  <SliderTrackBase>
    <SliderRangeBase />
  </SliderTrackBase>
  <SliderThumbBase />
</SliderBase>
```

**Features:**
- Single or multi-thumb (range)
- Keyboard: Arrow keys (fine), PageUp/PageDown (coarse)
- Vertical/horizontal orientation

---

### Layout Components

#### CardBase
Container for related content.

```tsx
<CardBase
  type="elevated"
  size="md"
  variant="primary"
  clickable
  onClick={handleClick}
>
  <CardHeaderBase>
    <CardTitleBase>Title</CardTitleBase>
    <CardDescriptionBase>Description</CardDescriptionBase>
  </CardHeaderBase>
  <CardContentBase>
    Content goes here
  </CardContentBase>
  <CardFooterBase>
    <ButtonBase>Action</ButtonBase>
  </CardFooterBase>
</CardBase>
```

**Props:**
- `clickable`: Makes entire card interactive
- `selected`: Highlight state (for selectable cards)
- `orientation`: vertical | horizontal

---

#### AccordionBase
Collapsible content panels.

```tsx
<AccordionBase type="single" collapsible>
  <AccordionItemBase value="item-1">
    <AccordionHeaderBase>
      <AccordionTriggerBase>Question 1?</AccordionTriggerBase>
    </AccordionHeaderBase>
    <AccordionContentBase>
      Answer 1
    </AccordionContentBase>
  </AccordionItemBase>
</AccordionBase>
```

**Props:**
- `type`: 'single' (one open) | 'multiple' (many open)
- `collapsible`: Allow closing all in single mode

**Animation:** Height expand/collapse with smooth transition

---

#### TabsBase
Tabbed navigation.

```tsx
<TabsBase value={tab} onValueChange={setTab}>
  <TabsListBase visualType="underline">
    <TabsTriggerBase value="account">Account</TabsTriggerBase>
    <TabsTriggerBase value="settings">Settings</TabsTriggerBase>
  </TabsListBase>
  <TabsContentBase value="account">Account panel</TabsContentBase>
  <TabsContentBase value="settings">Settings panel</TabsContentBase>
</TabsBase>
```

**Indicator styles** (via visualType):
- `underline`: Line under active tab
- `pill`: Background pill behind active tab

---

#### SeparatorBase
Visual divider.

```tsx
<SeparatorBase orientation="horizontal" decorative />
```

**Props:**
- `orientation`: horizontal | vertical
- `decorative`: If true, uses `role="none"` (purely visual)

---

### Overlay Components

#### DialogBase
Modal overlay.

```tsx
<DialogBase open={open} onOpenChange={setOpen}>
  <DialogTriggerBase>Open</DialogTriggerBase>
  <DialogPortalBase>
    <DialogOverlayBase />
    <DialogContentBase>
      <DialogHeaderBase>
        <DialogTitleBase>Title</DialogTitleBase>
        <DialogDescriptionBase>Description</DialogDescriptionBase>
      </DialogHeaderBase>
      <DialogCloseBase />
    </DialogContentBase>
  </DialogPortalBase>
</DialogBase>
```

**Features:**
- Focus trap
- Esc to close
- Click outside to close
- Body scroll lock

---

#### PopoverBase
Floating content anchored to trigger.

```tsx
<PopoverBase>
  <PopoverTriggerBase>Open popover</PopoverTriggerBase>
  <PopoverContentBase side="bottom" align="start">
    <PopoverArrowBase />
    Popover content
    <PopoverCloseBase />
  </PopoverContentBase>
</PopoverBase>
```

**Props:**
- `side`: top | right | bottom | left
- `align`: start | center | end
- `sideOffset`: Distance from trigger

---

#### TooltipBase
Hover hint.

```tsx
<TooltipProviderBase>
  <TooltipBase>
    <TooltipTriggerBase>Hover me</TooltipTriggerBase>
    <TooltipContentBase side="top">
      Helpful hint
    </TooltipContentBase>
  </TooltipBase>
</TooltipProviderBase>
```

**Delays:**
- Default: 700ms to appear
- Instant: If another tooltip was just shown

---

### Feedback Components

#### AlertBase
Attention-grabbing message.

```tsx
<AlertBase type="elevated" variant="destructive">
  <AlertIconBase><WarningIcon /></AlertIconBase>
  <AlertTitleBase>Error</AlertTitleBase>
  <AlertDescriptionBase>Something went wrong</AlertDescriptionBase>
  <AlertActionBase>Retry</AlertActionBase>
</AlertBase>
```

**Variants:**
- `destructive`: Errors
- `warning`: Warnings
- `success`: Success messages
- `info`: Informational

---

#### ToastBase
Temporary notification.

```tsx
<ToastProviderBase>
  {/* App content */}
  
  <ToastViewportBase />
  
  <ToastBase open={showToast} onOpenChange={setShowToast}>
    <ToastIconBase><CheckIcon /></ToastIconBase>
    <ToastContentBase>
      <ToastTitleBase>Success</ToastTitleBase>
      <ToastDescriptionBase>Changes saved</ToastDescriptionBase>
    </ToastContentBase>
    <ToastActionBase altText="Undo">Undo</ToastActionBase>
    <ToastCloseBase />
  </ToastBase>
</ToastProviderBase>
```

**Features:**
- Auto-dismiss timer
- Swipe to dismiss
- Stacking/queuing
- Pause on hover

---

#### SpinnerBase
Loading indicator.

```tsx
<SpinnerBase size="md" label="Loading data..." />
```

**Props:**
- `size`: xs | sm | md | lg | xl
- `label`: Screen reader text (default: "Loading...")

**Accessibility:**
- `role="status"`
- `aria-live="polite"`
- Visually hidden label

---

#### ProgressBase
Determinate or indeterminate progress.

```tsx
// Determinate
<ProgressBase value={progress} max={100} size="md">
  <ProgressIndicatorBase />
</ProgressBase>

// Indeterminate
<ProgressBase value={null}>
  <ProgressIndicatorBase />
</ProgressBase>
```

**Animation:**
- Determinate: Indicator width animates
- Indeterminate: Sliding animation

---

### Data Display

#### BadgeBase
Small label/tag.

```tsx
<BadgeBase type="soft" variant="success" size="sm">
  Active
</BadgeBase>
```

**Use cases:**
- Status indicators
- Tags
- Counts
- Labels

---

#### AvatarBase
User profile image.

```tsx
<AvatarBase size="md">
  <AvatarImageBase src={user.avatar} alt={user.name} />
  <AvatarFallbackBase>{user.initials}</AvatarFallbackBase>
</AvatarBase>
```

**Fallback chain:**
1. Try to load image
2. Show fallback (initials) if image fails
3. Show generic icon if no fallback

---

#### TableBase
Data table.

```tsx
<TableBase bordered striped hoverable>
  <TableHeaderBase>
    <TableRowBase>
      <TableHeadBase>Name</TableHeadBase>
      <TableHeadBase>Email</TableHeadBase>
    </TableRowBase>
  </TableHeaderBase>
  <TableBodyBase>
    <TableRowBase>
      <TableCellBase>John</TableCellBase>
      <TableCellBase>john@example.com</TableCellBase>
    </TableRowBase>
  </TableBodyBase>
  <TableFooterBase>
    <TableRowBase>
      <TableCellBase colSpan={2}>Total: 1 user</TableCellBase>
    </TableRowBase>
  </TableFooterBase>
</TableBase>
```

**Props:**
- `bordered`: Show borders
- `striped`: Alternate row colors
- `hoverable`: Highlight on hover

---

#### DataTableBase
Advanced table with sorting, filtering, pagination.

```tsx
<DataTableBase
  columns={columns}
  data={data}
  sortable
  filterable
  paginated
  selectable
  stickyHeader
/>
```

**Features:**
- Column sorting (click header)
- Column filtering (per column)
- Row selection (checkboxes)
- Pagination controls
- Column resizing
- Column reordering
- Sticky headers

---

### Navigation

#### BreadcrumbBase
Navigation trail.

```tsx
<BreadcrumbBase>
  <BreadcrumbListBase>
    <BreadcrumbItemBase>
      <BreadcrumbLinkBase href="/">Home</BreadcrumbLinkBase>
    </BreadcrumbItemBase>
    <BreadcrumbSeparatorBase />
    <BreadcrumbItemBase>
      <BreadcrumbLinkBase href="/docs">Docs</BreadcrumbLinkBase>
    </BreadcrumbItemBase>
    <BreadcrumbSeparatorBase />
    <BreadcrumbItemBase>
      <BreadcrumbPageBase>Current</BreadcrumbPageBase>
    </BreadcrumbItemBase>
  </BreadcrumbListBase>
</BreadcrumbBase>
```

---

#### PaginationBase
Page navigation.

```tsx
<PaginationBase>
  <PaginationContentBase>
    <PaginationItemBase>
      <PaginationFirstBase />
    </PaginationItemBase>
    <PaginationItemBase>
      <PaginationPreviousBase />
    </PaginationItemBase>
    <PaginationItemBase>
      <PaginationLinkBase href="?page=1">1</PaginationLinkBase>
    </PaginationItemBase>
    <PaginationItemBase>
      <PaginationEllipsisBase />
    </PaginationItemBase>
    <PaginationItemBase>
      <PaginationNextBase />
    </PaginationItemBase>
    <PaginationItemBase>
      <PaginationLastBase />
    </PaginationItemBase>
  </PaginationContentBase>
</PaginationBase>
```

---

### Specialty

#### CommandBase
Command palette / spotlight search.

```tsx
<CommandBase>
  <CommandInputBase placeholder="Type a command..." />
  <CommandListBase>
    <CommandEmptyBase>No results</CommandEmptyBase>
    <CommandGroupBase heading="Suggestions">
      <CommandItemBase onSelect={handleSelect}>
        <FileIcon />
        New File
        <CommandShortcutBase>⌘N</CommandShortcutBase>
      </CommandItemBase>
    </CommandGroupBase>
  </CommandListBase>
</CommandBase>
```

**Features:**
- Fuzzy search
- Keyboard navigation (arrows, enter)
- Groups with headings
- Custom filtering
- Loading states

---

#### CalendarBase
Date picker.

```tsx
<CalendarBase
  mode="single"
  selected={date}
  onSelect={setDate}
  numberOfMonths={1}
/>
```

**Modes:**
- `single`: Select one date
- `multiple`: Select many dates
- `range`: Select date range

---

#### CarouselBase
Slideshow/carousel.

```tsx
<CarouselBase>
  <CarouselContentBase>
    <CarouselItemBase>Slide 1</CarouselItemBase>
    <CarouselItemBase>Slide 2</CarouselItemBase>
  </CarouselContentBase>
  <CarouselPreviousBase />
  <CarouselNextBase />
  <CarouselDotsBase>
    <CarouselDotBase index={0} />
    <CarouselDotBase index={1} />
  </CarouselDotsBase>
</CarouselBase>
```

**Features:**
- Swipe gestures
- Auto-play
- Loop
- Keyboard navigation

---

## Integration with Versions

### How Versions Use Base Components

Version components wrap base components and add Tailwind styling:

**Example: Neon Button**

```tsx
// src/components/neon/button.tsx
import { ButtonBase, type ButtonBaseProps } from '@/ui/components/_base/button';
import { cn } from '@/lib/utils';

export interface ButtonProps extends Omit<ButtonBaseProps, 'visualType'> {
  type?: ButtonType;  // Our public API uses "type"
  // ... other props
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ type = 'default', size = 'md', variant, className, ...props }, ref) => {
    // Map type to Tailwind classes
    const typeStyles = {
      default: 'bg-slate-800 border border-cyan-500/30',
      solid: 'bg-cyan-500 text-black',
      outline: 'border-2 border-cyan-500 bg-transparent',
      ghost: 'hover:bg-cyan-500/10',
      // ... all 15 types
    };

    // Map size to Tailwind classes
    const sizeStyles = {
      xs: 'h-5 px-2 text-xs',
      sm: 'h-7 px-3 text-sm',
      md: 'h-9 px-4 text-sm',
      lg: 'h-11 px-5 text-base',
      xl: 'h-13 px-6 text-lg',
    };

    // Map variant to colors
    const variantStyles = variant === 'destructive' 
      ? 'border-red-500 text-red-500' 
      : '';

    return (
      <ButtonBase
        ref={ref}
        visualType={type}      // Pass to base
        size={size}
        variant={variant}
        className={cn(
          // Base styles
          'relative transition-all duration-200',
          'focus-visible:outline-none focus-visible:ring-2',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          
          // Type-specific styles
          typeStyles[type],
          
          // Size-specific styles
          sizeStyles[size],
          
          // Variant color override
          variantStyles,
          
          // Neon glow effect
          'shadow-[0_0_20px_rgba(6,182,212,0.3)]',
          'hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]',
          
          // User classes
          className
        )}
        {...props}
      />
    );
  }
);
```

### Styling Hooks

Version components can style based on:

1. **Data attributes** (recommended):
```tsx
className={cn(
  '[data-type="outline"]:border-2',
  '[data-size="lg"]:h-11',
  '[data-variant="destructive"]:text-red-500',
)}
```

2. **Props** (map to Tailwind):
```tsx
const styles = {
  [type]: typeClasses[type],
  [size]: sizeClasses[size],
}
```

3. **State selectors**:
```tsx
'hover:bg-cyan-400'
'focus-visible:ring-2'
'disabled:opacity-50'
'[data-state="open"]:rotate-180'
```

### Best Practices

✅ **DO:**
- Use base components via version wrappers
- Style with Tailwind using data attributes
- Preserve all base component props
- Forward refs properly
- Keep base behavior unchanged

❌ **DON'T:**
- Modify base component files directly
- Add Tailwind to base components
- Override accessibility features
- Remove data attributes
- Change prop interfaces

---

## Summary

The **_base layer** provides:

✅ **62 production-ready components** with full TypeScript support  
✅ **Consistent prop API** across all components  
✅ **Built-in accessibility** (ARIA, keyboard, focus management)  
✅ **Data attributes** for flexible styling  
✅ **Radix UI primitives** for complex components  
✅ **Zero styling** — pure structure and behavior  

**Version themes** extend base components with:
- Tailwind CSS classes
- Visual styles (colors, shadows, borders)
- Animations and transitions
- Theme-specific effects

This separation enables:
- **62 components** × **20 themes** × **8+ variants** = thousands of combinations
- Consistent UX across all themes
- Easy theme switching
- Full design system flexibility

---

## Quick Reference

### Import Pattern
```tsx
import { ButtonBase } from '@/ui/components/_base/button';
import { DialogBase, DialogContentBase } from '@/ui/components/_base/dialog';
```

### Common Props Pattern
```tsx
<ComponentBase
  visualType="outline"    // Visual structure (15 types)
  size="md"               // Size (xs|sm|md|lg|xl)
  variant="destructive"   // Semantic color
  disabled={false}        // Disable interaction
  className="..."         // Additional styles
  {...htmlAttributes}     // Standard HTML props
/>
```

### Data Attributes
```tsx
data-type="outline"         // Visual type
data-size="md"              // Size
data-variant="destructive"  // Color variant
data-state="open"           // Open/closed state
data-disabled=""            // Disabled state
data-loading=""             // Loading state
data-invalid=""             // Error state
```

### Accessibility Checklist
- [ ] All interactive elements have focus styles
- [ ] Icon-only buttons have `aria-label`
- [ ] Form fields have labels
- [ ] Keyboard navigation works
- [ ] Screen readers announce states
- [ ] Focus management in modals

---

**Need help?** Check the individual component files in `src/ui/components/_base/` for detailed prop interfaces and usage examples.
