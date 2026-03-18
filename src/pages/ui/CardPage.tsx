import { useState } from 'react';
import { Card, CARD_VERSION_CONFIGS } from '../../ui';
import type { CardType, CardVariant } from '../../ui';

export function UICardPage() {
  const variants: CardVariant[] = ['neutral', 'success', 'warning', 'info', 'destructive'];
  const types: CardType[] = ['default', 'outline', 'solid'];

  const [currentType, setCurrentType] = useState<CardType>('default');
  const [isAnimated, setIsAnimated] = useState(true);

  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2 text-cyan-400">Card Components</h1>
        <p className="text-gray-400">8 versions with JSON-based dynamic theming, 3 types, and optional animations.</p>
      </div>

      <div className="space-y-6 p-4">
        <div className="flex items-center gap-8 p-4 rounded-lg bg-gray-800/50">
          <div>
            <label htmlFor="card-type" className="block text-sm font-medium text-gray-300 mb-2">Card Type</label>
            <select
              id="card-type"
              value={currentType}
              onChange={(e) => setCurrentType(e.target.value as CardType)}
              className="bg-gray-900 border border-gray-700 text-white rounded-md p-2"
            >
              {types.map(t => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>
          <div>
            <label htmlFor="card-animated" className="flex items-center gap-2 text-sm font-medium text-gray-300">
              <input
                id="card-animated"
                type="checkbox"
                checked={isAnimated}
                onChange={(e) => setIsAnimated(e.target.checked)}
                className="h-4 w-4 rounded bg-gray-700 border-gray-600 text-cyan-500 focus:ring-cyan-600"
              />
              Animate on Hover
            </label>
          </div>
        </div>
      </div>

      <div className="space-y-16 w-full">
        
        {/* Section 1: All 8 Card Versions */}
        <section>
          <h3 className="text-2xl font-bold mb-8 uppercase tracking-wide" style={{ color: 'hsl(var(--primary-foreground))' }}>
            All Card Versions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card version="default" type={currentType} animated={isAnimated}>
              <Card.Header title="Default Card" />
              <Card.Content>
                <p className="text-sm">Standard card with border and subtle background</p>
              </Card.Content>
              <Card.Footer>Default version</Card.Footer>
            </Card>

            <Card version="minimal" type={currentType} animated={isAnimated}>
              <Card.Header title="Minimal Card" />
              <Card.Content>
                <p className="text-sm">Minimal styling with just a thin border</p>
              </Card.Content>
              <Card.Footer>Minimal version</Card.Footer>
            </Card>

            <Card version="compact" type={currentType} animated={isAnimated}>
              <Card.Header title="Compact Card" />
              <Card.Content>
                <p className="text-sm">Reduced padding for dense layouts</p>
              </Card.Content>
              <Card.Footer>Compact version</Card.Footer>
            </Card>

            <Card version="expanded" type={currentType} animated={isAnimated}>
              <Card.Header title="Expanded Card" />
              <Card.Content>
                <p className="text-sm">Extra padding and larger shadows for prominence</p>
              </Card.Content>
              <Card.Footer>Expanded version</Card.Footer>
            </Card>

            <Card version="elevated" type={currentType} animated={isAnimated}>
              <Card.Header title="Elevated Card" />
              <Card.Content>
                <p className="text-sm">Floating effect with tall shadow and no border</p>
              </Card.Content>
              <Card.Footer>Elevated version</Card.Footer>
            </Card>

            <Card version="filled" type={currentType} animated={isAnimated}>
              <Card.Header title="Filled Card" />
              <Card.Content>
                <p className="text-sm">Solid background fill without border</p>
              </Card.Content>
              <Card.Footer>Filled version</Card.Footer>
            </Card>

            <Card version="outlined" type={currentType} animated={isAnimated}>
              <Card.Header title="Outlined Card" />
              <Card.Content>
                <p className="text-sm">Prominent border with transparent background</p>
              </Card.Content>
              <Card.Footer>Outlined version</Card.Footer>
            </Card>

            <Card version="tonal" type={currentType} animated={isAnimated}>
              <Card.Header title="Tonal Card" />
              <Card.Content>
                <p className="text-sm">Tinted background for semantic messaging</p>
              </Card.Content>
              <Card.Footer>Tonal version</Card.Footer>
            </Card>
          </div>
        </section>

        {/* Section 2: Color Variants */}
        <section>
          <h3 className="text-2xl font-bold mb-8 uppercase tracking-wide" style={{ color: 'hsl(var(--primary-foreground))' }}>
            Color Variants
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {variants.map((variant) => (
              <Card key={variant} variant={variant} version="tonal" type={currentType} animated={isAnimated}>
                <Card.Header title={`${variant.toUpperCase()} Variant`} />
                <Card.Content>
                  <p className="text-sm">This card uses the {variant} color scheme from semantic colors</p>
                </Card.Content>
              </Card>
            ))}
          </div>
        </section>

        {/* Section 4: Full Featured Example */}
        <section>
          <h3 className="text-2xl font-bold mb-8 uppercase tracking-wide" style={{ color: 'hsl(var(--primary-foreground))' }}>
            Full Featured Example
          </h3>
          <div className="max-w-2xl">
            <Card version="expanded" variant="success" type="solid" animated={isAnimated}>
              <Card.Header title="Project Complete ✓" />
              <Card.Content>
                <div className="space-y-4 text-sm">
                  <p>
                    This card demonstrates the new JSON-based color system:
                  </p>
                  <ul className="space-y-2 ml-4" style={{ color: 'hsl(var(--primary-foreground))' }}>
                    <li>✓ All colors from JSON configuration</li>
                    <li>✓ CSS variables for dynamic theming</li>
                    <li>✓ Type-first component versioning</li>
                    <li>✓ 8 card versions with different styles</li>
                    <li>✓ semantic color variants</li>
                    <li>✓ 3 component types (default, outline, solid)</li>
                    <li>✓ Composable Header/Content/Footer</li>
                    <li>✓ Optional hover animations</li>
                  </ul>
                </div>
              </Card.Content>
              <Card.Footer direction="column">
                <span className="text-sm">All 8 versions working with no hardcoded colors!</span>
              </Card.Footer>
            </Card>
          </div>
        </section>

        {/* Section 5: Dark Mode Support */}
        <section>
          <h3 className="text-2xl font-bold mb-8 uppercase tracking-wide" style={{ color: 'hsl(var(--primary-foreground))' }}>
            Theme Support
          </h3>
          <p className="mb-6 text-sm" style={{ color: 'hsl(var(--primary-border))' }}>
            Switch your theme at the top of the page to see the card system automatically adapt colors!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card version="elevated" variant="info" type="solid" animated={isAnimated}>
              <Card.Header title="Light Theme" />
              <Card.Content>
                <p className="text-sm">Switch to light theme to see bright, clean colors</p>
              </Card.Content>
            </Card>

            <Card version="filled" variant="warning" type="default" animated={isAnimated}>
              <Card.Header title="Dark Theme" />
              <Card.Content>
                <p className="text-sm">Switch to dark theme for comfortable viewing</p>
              </Card.Content>
            </Card>
          </div>
        </section>

      </div>
    </div>
  );
}
