/**
 * Breadcrumb Showcase
 */

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/ui/handlers/breadcrumb';
import { ShowcaseTemplate } from '../_components';

const BREADCRUMB_TYPES = ['default'];

export function BreadcrumbShowcase() {
  return (
    <ShowcaseTemplate
      componentName="Breadcrumb"
      availableTypes={BREADCRUMB_TYPES}
      defaultType="default"
      columns={3}
      renderComponent={({ version, variant, effects }) => (
        <Breadcrumb version={version} variant={variant} effects={effects}>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/components">Components</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      )}
    />
  );
}

export default BreadcrumbShowcase;
