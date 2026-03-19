# Cyber HUD Card System

A comprehensive, fully-dynamic card component system with 12 futuristic versions following Cyber-Industrial and Cyberpunk design principles. All cards read configuration from JSON, support multiple themes, types, and variants, creating a total of **540 unique combinations**.

## 🎯 Design Philosophy

**Core Aesthetic**: "Electric Blue on Deep Charcoal" - A high-tech Heads-Up Display (HUD) and Fictional User Interface (FUI) aesthetic.

**Key Characteristics**:
- 🔷 **Geometry**: Rectangular and polygonal frames with beveled edges, chamfered corners, and asymmetrical cutouts
- ⚡ **Linework**: High-contrast, glowing cyan vector lines with variations in line weight
- 💫 **Effects**: Holographic projections, LED screen simulation, outer glow (bloom), digital noise/scanline textures
- 🎨 **Colors**: Primary Blue (#00A3FF), Deep Charcoal (#0A0C0F), Accent Cyan (#52E5FF)

## 📦 System Architecture

### Fully Dynamic Configuration

All card behavior is driven by JSON configuration files:

- **`card.json`** - Card-specific config (versions, types, animations)
- **`themes.json`** - Global theme palettes (cyan, dark, light)
- **`colors.json`** - Color token definitions
- **`semantic.json`** - Semantic variant colors (success, warning, etc.)

**Zero hardcoded values** - All colors, animations, and styles come from JSON.

### Component Hierarchy

```
themes (global)          → cyan, dark, light
variants (global)        → success, warning, destructive, info, neutral
types (per-component)    → default, outline, solid
versions (per-component) → angular-corner, holo-frame, data-panel, etc.
```

## 🎴 Card Versions (12 Total)

All versions support 3 types × 5 variants × 3 themes = **45 combinations per version**.

### 1. **angular-corner**
Beveled corners with glowing cyan borders and tech-notches.
- Polygon clip-path for angular geometry
- SVG border with drop-shadow glow
- Corner accent indicators
- Popup-corner entrance animation

### 2. **holo-frame**
Holographic iridescent border with animated rainbow gradient.
- Corner bracket decorations
- Floating particle effects
- Iridescent color cycling animation
- Glass-like transparency

### 3. **data-panel**
Side technical panel with status indicators and progress bars.
- Asymmetric polygon shape (side panel cut)
- LED status indicators
- Horizontal progress bars
- Scan line animation

### 4. **circuit-board**
Circuit trace patterns with animated electrical pulses.
- SVG circuit path overlays
- Animated pulse along traces
- Corner node indicators
- Grid pattern background

### 5. **quantum-gate**
Quantum particle effects with wave function visualization.
- Particle field animation
- Quantum state indicators (|0⟩, |1⟩)
- Entanglement connecting lines
- Wave interference patterns

### 6. **tactical-hud**
Military HUD aesthetic with targeting reticle.
- Octagonal clip-path
- Radar sweep animation
- Targeting crosshair
- Corner brackets with status text

### 7. **energy-shield**
Hexagonal shield pattern with pulsating energy waves.
- Hexagon grid overlay
- Energy wave ripples
- Shield strength indicator
- Corner energy nodes

### 8. **terminal-window**
Command terminal aesthetic with CRT effects.
- Terminal header bar (red/yellow/green buttons)
- Scanline texture overlay
- CRT flicker animation
- Monospace font styling

### 9. **matrix-grid**
Animated grid with digital rain effect.
- Octagonal grid clip-path
- Falling character animation (Matrix-style)
- Corner connection nodes
- Grid line glow

### 10. **glass-morphism**
Semi-transparent frosted glass with blur backdrop.
- Backdrop-filter blur
- Gradient border glow
- Soft shadow depth
- Glassmorphic shimmer

### 11. **tech-panel**
Industrial panel with warning stripes.
- Top accent bar with gradient
- Diagonal warning stripes
- Rivet/bolt decorations
- Panel line divisions

### 12. **neon-outline**
High-contrast neon glow with thick bloom.
- Multiple glow layers
- Corner LED indicators
- Pulsing brightness animation
- High saturation colors

## 🎛️ Types (Per-Component)

Each card version supports 3 presentation types:

- **default** - Border with subtle background fill
- **outline** - Border only, transparent background
- **solid** - Filled background, no border

Types are defined in `card.json` and applied dynamically.

## 🎨 Variants (Global Semantic)

All cards support 5 semantic color variants:

- **neutral** (default) - Primary color scheme
- **success** - Green tones for positive states
- **warning** - Amber/yellow for caution
- **info** - Blue tones for information
- **destructive** - Red tones for errors/danger

Variants read colors from `semantic.json`.

## 🌈 Themes (Global)

Three global themes change the entire color palette:

- **cyan** (default) - Electric blue (#00A3FF) on deep charcoal (#0A0C0F)
- **dark** - High-contrast dark mode
- **light** - Clean light mode

Themes are defined in `themes.json` and `colors.json`.

## ✨ Animations

27 custom animations defined in `card.json`:

### Entrance Animations
- `popup-corner` - Scale from corner
- `holo-fade` - Holographic fade-in
- `slide-panel` - Side panel slide
- `circuit-flash` - Electrical flash
- `quantum-collapse` - Wave collapse
- `tactical-deploy` - Military deployment
- `shield-activate` - Energy shield startup
- `terminal-boot` - Boot sequence
- `matrix-drop` - Digital rain
- `glass-fade` - Frosted fade
- `panel-assemble` - Panel construction
- `neon-glow` - Neon power-on

### Continuous Animations
- `border-pulse` - Border glow pulse
- `rainbow-shift` - Color cycling
- `scan-line` - Vertical scan
- `pulse-flow` - Electrical pulse
- `particle-float` - Floating particles
- `radar-sweep` - Rotating radar
- `energy-wave` - Ripple waves
- `crt-flicker` - CRT screen flicker
- `digital-rain` - Matrix characters
- `shimmer` - Glass shimmer
- `warning-blink` - Warning stripe blink
- `neon-pulse` - Intensity pulse

### Hover Animations
- `hover-glow` - Increased glow
- `hover-lift` - Slight elevation
- `hover-ripple` - Ripple effect

All animations use CSS keyframes with timing/easing from JSON.

## 📁 File Structure

```
src/ui/
├── components/card/
│   ├── index.tsx                    # Dynamic renderer
│   ├── card-angular-corner.tsx      # Version 1
│   ├── card-holo-frame.tsx          # Version 2
│   ├── card-data-panel.tsx          # Version 3
│   ├── card-circuit-board.tsx       # Version 4
│   ├── card-quantum-gate.tsx        # Version 5
│   ├── card-tactical-hud.tsx        # Version 6
│   ├── card-energy-shield.tsx       # Version 7
│   ├── card-terminal-window.tsx     # Version 8
│   ├── card-matrix-grid.tsx         # Version 9
│   ├── card-glass-morphism.tsx      # Version 10
│   ├── card-tech-panel.tsx          # Version 11
│   └── card-neon-outline.tsx        # Version 12
├── config/
│   ├── components/
│   │   └── card.json                # Card config
│   ├── themes.json                  # Theme definitions
│   ├── colors.json                  # Color tokens
│   └── semantic.json                # Variant colors
└── types/components/
    └── card.ts                      # TypeScript types
```

## 🚀 Usage

### Basic Usage

```tsx
import { Card } from '@/ui';

// Default angular-corner version
<Card>
  <Card.Header title="Title" />
  <Card.Content>Content here</Card.Content>
  <Card.Footer>Footer</Card.Footer>
</Card>
```

### With Version Selection

```tsx
// Use specific version
<Card version="holo-frame">
  <Card.Header title="Holographic Card" />
  <Card.Content>Iridescent borders with particles</Card.Content>
</Card>
```

### With Types and Variants

```tsx
// Solid success card with quantum-gate version
<Card version="quantum-gate" type="solid" variant="success">
  <Card.Header title="Quantum Success" />
  <Card.Content>Quantum particles with green theme</Card.Content>
</Card>

// Outline destructive card with tactical HUD
<Card version="tactical-hud" type="outline" variant="destructive">
  <Card.Header title="Critical Alert" />
  <Card.Content>Military HUD with red warning theme</Card.Content>
</Card>
```

### All 12 Versions

```tsx
const versions = [
  'angular-corner', 'holo-frame', 'data-panel', 'circuit-board',
  'quantum-gate', 'tactical-hud', 'energy-shield', 'terminal-window',
  'matrix-grid', 'glass-morphism', 'tech-panel', 'neon-outline'
];

{versions.map(v => (
  <Card key={v} version={v} type="default" variant="neutral">
    <Card.Header title={v} />
    <Card.Content>Card content</Card.Content>
  </Card>
))}
```

## 🎬 Showcase Page

Visit `/ui/card` to see the interactive showcase:

- **3 Dropdown Filters**: Theme, Type, Variant
- **12 Card Grid**: Shows all versions simultaneously
- **URL Sync**: Share exact combinations via URL params
- **Real-time Updates**: Change filters to see all cards update instantly

Example URL: `/ui/card?theme=cyan&type=solid&variant=success`

## 📊 Statistics

- **12 Versions** - Each with unique cyber design
- **3 Types** - default, outline, solid
- **5 Variants** - neutral, success, warning, info, destructive
- **3 Themes** - cyan, dark, light
- **= 540 Total Combinations** (12 × 3 × 5 × 3)
- **27 Animations** - entrance, continuous, hover
- **0 Hardcoded Values** - 100% JSON-driven

## 🎯 Design Compliance

All cards follow the specification:

✅ **Geometry**: Beveled edges, chamfered corners, asymmetrical cutouts  
✅ **Linework**: High-contrast cyan glowing vector lines  
✅ **Elements**: Data windows, interactive widgets, tactical buttons  
✅ **Typography**: Monospaced sans-serif (font-mono)  
✅ **Lighting**: Outer glow (drop-shadow filters)  
✅ **Texture**: Scanlines, digital noise, glass-morphism  
✅ **Tone**: Utilitarian, tactical, data-dense HUD aesthetic  

---

**Built with**: React 18 + TypeScript + Vite + Tailwind CSS  
**Architecture**: Type-first, JSON-driven, fully dynamic  
**Style**: Cyber-Industrial / Cyberpunk / HUD-FUI
