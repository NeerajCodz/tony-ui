# Cyber UI Showcase Pattern

This document explains how to build showcase/demo pages for Cyber UI components, similar to the Card and Command showcases.

## Overview

Showcase pages allow developers to:
- Preview all visual versions of a component
- Test different variants (colors)
- Test different types (styles)
- Trigger entrance/exit animations
- View available props

## Page Structure

```tsx
export function ComponentShowcase() {
  const [version, setVersion] = useState('angular-corner');
  const [variant, setVariant] = useState('primary');
  const [type, setType] = useState('default');
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationDirection, setAnimationDirection] = useState<'in' | 'out'>('in');

  return (
    <div className="showcase-container">
      {/* Controls Section */}
      <div className="showcase-controls">
        <VersionSelector value={version} onChange={setVersion} />
        <VariantSelector value={variant} onChange={setVariant} />
        <TypeSelector value={type} onChange={setType} />
        <AnimateButton 
          onAnimate={(dir) => {
            setAnimationDirection(dir);
            setIsAnimating(true);
          }}
        />
      </div>

      {/* Preview Section */}
      <div className="showcase-preview">
        <CyberComponent
          version={version}
          variant={variant}
          type={type}
          animate={isAnimating ? animationDirection : undefined}
          onAnimationComplete={() => setIsAnimating(false)}
        />
      </div>

      {/* Props Display */}
      <PropsDisplay
        version={version}
        variant={variant}
        type={type}
      />
    </div>
  );
}
```

## Control Components

### Version Selector Dropdown

A dropdown to select between visual versions:

```tsx
const versions = [
  { value: 'angular-corner', label: 'Angular Corner' },
  { value: 'holo-frame', label: 'Holo Frame' },
  { value: 'data-panel', label: 'Data Panel' },
  { value: 'circuit-board', label: 'Circuit Board' },
  { value: 'quantum-gate', label: 'Quantum Gate' },
  { value: 'tactical-hud', label: 'Tactical HUD' },
  { value: 'energy-shield', label: 'Energy Shield' },
  { value: 'terminal-window', label: 'Terminal Window' },
  { value: 'matrix-grid', label: 'Matrix Grid' },
  { value: 'neon', label: 'Neon Outline' },
];

function VersionSelector({ value, onChange }) {
  return (
    <select value={value} onChange={(e) => onChange(e.target.value)}>
      {versions.map((v) => (
        <option key={v.value} value={v.value}>
          {v.label}
        </option>
      ))}
    </select>
  );
}
```

### Variant Selector

Buttons or dropdown for variant selection:

```tsx
const variants = ['primary', 'info', 'success', 'warning', 'destructive'];

function VariantSelector({ value, onChange }) {
  return (
    <div className="variant-selector">
      {variants.map((v) => (
        <button
          key={v}
          className={`variant-btn variant-${v} ${value === v ? 'active' : ''}`}
          onClick={() => onChange(v)}
        >
          {v}
        </button>
      ))}
    </div>
  );
}
```

### Type Selector

Buttons for type selection:

```tsx
const types = ['default', 'outline', 'solid', 'ghost'];

function TypeSelector({ value, onChange }) {
  return (
    <div className="type-selector">
      {types.map((t) => (
        <button
          key={t}
          className={`type-btn ${value === t ? 'active' : ''}`}
          onClick={() => onChange(t)}
        >
          {t}
        </button>
      ))}
    </div>
  );
}
```

### Animate Toggle Button

A button that toggles between "in" and "out" animations:

```tsx
function AnimateButton({ onAnimate }) {
  const [lastDirection, setLastDirection] = useState<'in' | 'out'>('out');

  const handleClick = () => {
    const nextDirection = lastDirection === 'in' ? 'out' : 'in';
    setLastDirection(nextDirection);
    onAnimate(nextDirection);
  };

  return (
    <button onClick={handleClick}>
      Animate {lastDirection === 'in' ? 'Out' : 'In'}
    </button>
  );
}
```

## Props Display

Show the current configuration as code:

```tsx
function PropsDisplay({ version, variant, type }) {
  const code = `<CyberComponent
  version="${version}"
  variant="${variant}"
  type="${type}"
/>`;

  return (
    <pre className="props-display">
      <code>{code}</code>
    </pre>
  );
}
```

## Animation Integration

### Triggering Animations

```tsx
// Track animation state
const [animateState, setAnimateState] = useState<'in' | 'out' | null>(null);

// Pass to component
<CyberCard
  animate={animateState}
  onAnimationComplete={() => setAnimateState(null)}
/>
```

### Animation Callbacks

Components should support:
- `animate?: 'in' | 'out'` - Trigger animation
- `onAnimationComplete?: () => void` - Callback when animation finishes

## Layout Recommendations

```css
.showcase-container {
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 2rem;
  padding: 2rem;
  min-height: 100vh;
}

.showcase-controls {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 8px;
}

.showcase-preview {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.props-display {
  background: rgba(0, 0, 0, 0.8);
  padding: 1rem;
  border-radius: 4px;
  font-family: monospace;
  overflow-x: auto;
}
```

## Best Practices

1. **Responsive Preview** - Ensure the preview area adapts to component size
2. **Instant Feedback** - Controls should update the preview immediately
3. **Keyboard Navigation** - Support keyboard for accessibility
4. **URL State** - Consider syncing state to URL for shareable links
5. **Reset Button** - Provide a way to reset to defaults
6. **Multiple Instances** - Show multiple components if helpful (e.g., button states)

## Example: Full Card Showcase

```tsx
export function CardShowcase() {
  const [config, setConfig] = useState({
    version: 'angular-corner',
    variant: 'primary',
    type: 'default',
  });
  const [animate, setAnimate] = useState<'in' | 'out' | null>(null);

  return (
    <div className="showcase-container">
      <aside className="showcase-controls">
        <h2>Card Configuration</h2>
        
        <label>Version</label>
        <VersionSelector 
          value={config.version} 
          onChange={(v) => setConfig({ ...config, version: v })} 
        />

        <label>Variant</label>
        <VariantSelector 
          value={config.variant} 
          onChange={(v) => setConfig({ ...config, variant: v })} 
        />

        <label>Type</label>
        <TypeSelector 
          value={config.type} 
          onChange={(v) => setConfig({ ...config, type: v })} 
        />

        <button onClick={() => setAnimate(animate === 'in' ? 'out' : 'in')}>
          Animate {animate === 'in' ? 'Out' : 'In'}
        </button>

        <PropsDisplay {...config} />
      </aside>

      <main className="showcase-preview">
        <CyberCard
          {...config}
          animate={animate}
          onAnimationComplete={() => setAnimate(null)}
        >
          <h3>Card Title</h3>
          <p>Card content goes here...</p>
        </CyberCard>
      </main>
    </div>
  );
}
```
