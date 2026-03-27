/**
 * Tooltip Showcase
 */

import { Button } from '@/ui/handlers/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/ui/handlers/tooltip';
import { ShowcaseTemplate } from '../_components';

const TOOLTIP_TYPES = ['default'];

export function TooltipShowcase() {
  return (
    <TooltipProvider>
      <ShowcaseTemplate
        componentName="Tooltip"
        availableTypes={TOOLTIP_TYPES}
        defaultType="default"
        columns={5}
        renderComponent={({ version, variant, effects }) => (
          <Tooltip>
            <TooltipTrigger asChild>
              <Button version={version} variant="outline" size="sm">
                Hover
              </Button>
            </TooltipTrigger>
            <TooltipContent version={version} variant={variant} effects={effects}>
              <p>Tooltip content</p>
            </TooltipContent>
          </Tooltip>
        )}
      />
    </TooltipProvider>
  );
}

export default TooltipShowcase;
