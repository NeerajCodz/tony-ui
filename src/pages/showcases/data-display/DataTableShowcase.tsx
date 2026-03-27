/**
 * DataTable Showcase
 */

import DataTable from '@/ui/handlers/data-table';
import { ShowcaseTemplate } from '../_components';

const DATA_TABLE_TYPES = ['default', 'advanced'];

// Map generic Version to DataTableVersion (10 supported)
const DATA_TABLE_VERSION_MAP: Record<string, 'angular-corner' | 'data-grid' | 'holo-display' | 'circuit-matrix' | 'tactical-readout' | 'terminal-log' | 'quantum-table' | 'energy-panel' | 'matrix-feed' | 'neon-grid'> = {
  'default': 'angular-corner',
  'angular-corner': 'angular-corner',
  'border': 'data-grid',
  'circuit-board': 'circuit-matrix',
  'compact': 'neon-grid',
  'data-panel': 'tactical-readout',
  'energy-shield': 'energy-panel',
  'ghost': 'matrix-feed',
  'glass-morphism': 'holo-display',
  'holo-frame': 'holo-display',
  'large': 'data-grid',
  'matrix-grid': 'matrix-feed',
  'neon': 'neon-grid',
  'padding': 'tactical-readout',
  'quantum-gate': 'quantum-table',
  'pill': 'neon-grid',
  'tactical-hud': 'tactical-readout',
  'tech-panel': 'terminal-log',
  'terminal-window': 'terminal-log',
};

// Map generic Variant to DataTableVariant
const DATA_TABLE_VARIANT_MAP: Record<string, 'primary' | 'neutral' | 'destructive' | 'success' | 'warning' | 'info'> = {
  'primary': 'primary',
  'secondary': 'neutral',
  'destructive': 'destructive',
  'outline': 'neutral',
  'ghost': 'neutral',
  'success': 'success',
  'warning': 'warning',
  'info': 'info',
  'default': 'neutral',
};

const columns: any[] = [
  { accessorKey: 'name', header: 'Name' },
  { accessorKey: 'email', header: 'Email' },
  { accessorKey: 'role', header: 'Role' },
];

const data = [
  { name: 'John Doe', email: 'john@example.com', role: 'Admin' },
  { name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
];

export function DataTableShowcase() {
  return (
    <ShowcaseTemplate
      componentName="DataTable"
      availableTypes={DATA_TABLE_TYPES}
      defaultType="default"
      columns={3}
      renderComponent={({ version, variant, effects }) => (
        <DataTable
          version={DATA_TABLE_VERSION_MAP[version] || 'angular-corner'}
          variant={DATA_TABLE_VARIANT_MAP[variant] || 'neutral'}
          effects={effects}
          columns={columns}
          data={data}
        />
      )}
    />
  );
}

export default DataTableShowcase;
