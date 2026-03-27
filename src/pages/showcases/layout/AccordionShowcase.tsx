/**
 * Accordion Showcase
 */

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/ui/handlers/accordion';
import { ShowcaseTemplate } from '../_components';

const ACCORDION_TYPES = ['default', 'outline'];

export function AccordionShowcase() {
  return (
    <ShowcaseTemplate
      componentName="Accordion"
      availableTypes={ACCORDION_TYPES}
      defaultType="outline"
      columns={3}
      renderComponent={({ version, type, variant, effects }) => (
        <Accordion
          version={version}
          uiType={type}
          variant={variant}
          effects={effects}
          type="single"
          collapsible
          className="w-full max-w-sm"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger>Section 1</AccordionTrigger>
            <AccordionContent>Content for section 1</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Section 2</AccordionTrigger>
            <AccordionContent>Content for section 2</AccordionContent>
          </AccordionItem>
        </Accordion>
      )}
    />
  );
}

export default AccordionShowcase;
