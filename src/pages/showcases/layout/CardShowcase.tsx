/**
 * Card Showcase
 */

import Card from '@/ui/handlers/card';
import { ShowcaseTemplate } from '../_components';

const CARD_TYPES = ['default', 'outline', 'solid'];

export function CardShowcase() {
  return (
    <ShowcaseTemplate
      componentName="Card"
      availableTypes={CARD_TYPES}
      defaultType="outline"
      columns={3}
      renderComponent={({ version, type, variant, effects }) => (
        <Card
          version={version}
          uiType={type}
          variant={variant}
          effects={effects}
          className="w-64"
        >
          <div className="p-6">
            <h3 className="text-lg font-bold mb-2">Card Title</h3>
            <p className="text-sm text-muted-foreground mb-4">Card description goes here</p>
            <p className="text-sm">Card content area</p>
          </div>
        </Card>
      )}
    />
  );
}

export default CardShowcase;
