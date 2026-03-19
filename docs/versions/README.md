# UI Versions (Design System)

The Cyber UI system includes 19 distinct visual versions, each with a unique aesthetic and design language. Each version applies consistent styling across all components.

## All Versions

1. **[angular-corner](./angular-corner.md)** - Sharp angles, corner clips
   - Military/stealth aesthetic with octagonal or hex-clipped corners
   - Thick multi-layered borders following clipped paths
   - Sharp directional highlights on angled edges

2. **[border](./border.md)** - Prominent border focus
   - Emphasizes strong, visible borders as primary design element
   - Border-centric visual hierarchy

3. **[circuit-board](./circuit-board.md)** - PCB-like traces and nodes
   - Technical aesthetic with decorative trace extensions
   - Interrupted lines with nodal connections
   - Signal pulses traveling along borders

4. **[compact](./compact.md)** - Dense, minimal spacing
   - Reduced padding and margins for compact layouts
   - High information density
   - Tighter component clustering

5. **[data-panel](./data-panel.md)** - Industrial data visualization
   - Technical data display aesthetic
   - Grid and panel-based layouts
   - Industrial/functional styling

6. **[default](./default.md)** - Clean baseline
   - Standard, neutral appearance
   - Foundation for other versions
   - Balanced and accessible design

7. **[energy-shield](./energy-shield.md)** - Glowing energy barriers
   - Luminous, radiant effect
   - Energy field aesthetic with bright glows
   - Power-based visual metaphor

8. **[ghost](./ghost.md)** - Subtle, minimal presence
   - Faint, almost invisible by default
   - Reveals on interaction
   - Lightweight and unobtrusive

9. **[glass-morphism](./glass-morphism.md)** - Frosted glass effect
   - Frosted rounded rectangles with high blur backdrop
   - Semi-transparent appearance with depth
   - Modern and clean aesthetic

10. **[holo-frame](./holo-frame.md)** - Holographic framing
    - Holographic aesthetic with special framing
    - Sci-fi dimensional effect
    - Multi-layered appearance

11. **[large](./large.md)** - Spacious sizing
    - Increased component sizes
    - Generous padding and margins
    - Prominent visual presence

12. **[matrix-grid](./matrix-grid.md)** - Matrix grid patterns
    - Grid-based geometric patterns
    - Digital/matrix aesthetic
    - Systematic grid layout

13. **[neon](./neon.md)** - Glowing neon borders
    - High-contrast vibrant neon tubes
    - Thick multi-colored glow effects
    - Intense outer glow on variant colors

14. **[padding](./padding.md)** - Generous internal spacing
    - Increased internal padding
    - Breathing room within components
    - Spacious comfortable layout

15. **[quantum-gate](./quantum-gate.md)** - Quantum-tech aesthetic
    - Quantum computing visual metaphor
    - Complex geometric patterns
    - Tech-forward styling

16. **[raised](./raised.md)** - Elevated with shadows
    - Strong shadow depth effects
    - Elevated, floating appearance
    - 3D layering emphasis

17. **[tactical-hud](./tactical-hud.md)** - Military HUD elements
    - Tactical interface aesthetic
    - Military/combat oriented styling
    - Targeting and diagnostic overlays

18. **[tech-panel](./tech-panel.md)** - Technical panels
    - High-tech panel styling
    - Technical control interfaces
    - Functional, instrumental design

19. **[terminal-window](./terminal-window.md)** - Retro terminal console
    - Monospaced fonts and command-line interface
    - CRT-style flicker and scanlines
    - Retro-computing aesthetic

## Using Versions

Each version can be applied to any component via the `version` prop:

```tsx
// Using default version
<CyberButton version="default">Click me</CyberButton>

// Using glass-morphism version
<CyberButton version="glass-morphism">Click me</CyberButton>

// Using neon version
<CyberButton version="neon">Click me</CyberButton>

// Using terminal-window version
<CyberButton version="terminal-window">Click me</CyberButton>
```

## Key Differences from Variants

- **Versions** control **structure, shapes, borders, and visual identity**
- **Variants** control **colors** (semantic meaning)
- A component has both a version (how it looks) and a variant (what color it is)

```tsx
// Version = glass-morphism (structure/style)
// Variant = success (color/semantic meaning)
<CyberButton version="glass-morphism" variant="success">
  Confirm
</CyberButton>
```

## Key Differences from Types

- **Versions** control the **distinct visual design system** (19 different aesthetics)
- **Types** control the **component rendering style** within a version (solid, outline, ghost, etc.)
- Each version can support all types

```tsx
// Version = neon (overall aesthetic)
// Type = solid (rendering style)
// Variant = destructive (color)
<CyberButton version="neon" type="solid" variant="destructive">
  Delete
</CyberButton>
```

## Version Characteristics

Each version includes:
- **Shape/Geometry** - Corner styles, clipping, overall form
- **Border Styling** - Width, style, multi-layered effects
- **Glow/Lighting Effects** - Shadow depth, luminosity, special effects
- **Animation Behaviors** - Transition styles, state changes
- **CSS Variables/Tokens** - Custom properties for fine-tuning

## Implementation Structure

Versions are implemented through:

```
src/ui/
  components/
    <VERSION_NAME>/        # 19 folders, one per version
      button.tsx
      card.tsx
      alert.tsx
      ... (all 60+ components)
  
  config/
    components/
      <VERSION_NAME>/      # Version-specific configuration
        button.tsx         # Animations, effects, shapes
        card.tsx
        ...
```

See [../types.md](../types.md) and [../variants.md](../variants.md) for related concepts.
