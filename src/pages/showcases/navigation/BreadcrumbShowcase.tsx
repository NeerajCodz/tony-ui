/**
 * Breadcrumb Showcase
 */

import React from 'react';
import { ShowcaseTemplate } from '../_components';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from '@/ui/handlers/breadcrumb';

const BREADCRUMB_TYPES = ['default'];

export function BreadcrumbShowcase() {
  return (
    <ShowcaseTemplate
      componentName="Breadcrumb"
      availableTypes={BREADCRUMB_TYPES}
      defaultType="default"
      columns={3}
      renderComponent={({ version, type, variant, effects }) => (
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
