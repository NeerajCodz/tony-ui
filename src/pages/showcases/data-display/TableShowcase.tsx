/**
 * Table Showcase
 */

import React from 'react';
import { ShowcaseTemplate } from '../_components';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/ui/handlers/table';

const TABLE_TYPES = ['default', 'striped'];

const sampleData = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
];

export function TableShowcase() {
  return (
    <ShowcaseTemplate
      componentName="Table"
      availableTypes={TABLE_TYPES}
      defaultType="default"
      columns={3}
      renderComponent={({ version, variant, effects }) => (
        <Table version={version} variant={variant} effects={effects}>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sampleData.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.role}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    />
  );
}

export default TableShowcase;
