/**
 * Pagination Showcase
 */

import React from 'react';
import { ShowcaseTemplate } from '../_components';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationPrevious, PaginationNext } from '@/ui/handlers/pagination';

const PAGINATION_TYPES = ['default'];

export function PaginationShowcase() {
  return (
    <ShowcaseTemplate
      componentName="Pagination"
      availableTypes={PAGINATION_TYPES}
      defaultType="default"
      columns={3}
      renderComponent={({ version, variant, effects }) => (
        <Pagination version={version} variant={variant} effects={effects}>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    />
  );
}

export default PaginationShowcase;
