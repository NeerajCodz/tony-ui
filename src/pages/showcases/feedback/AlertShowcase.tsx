/**
 * Alert Showcase
 */

import { Alert, AlertDescription, AlertTitle } from '@/ui/handlers/alert';
import { ShowcaseTemplate } from '../_components';

const ALERT_TYPES = ['default'];

export function AlertShowcase() {
  return (
    <ShowcaseTemplate
      componentName="Alert"
      availableTypes={ALERT_TYPES}
      defaultType="default"
      columns={3}
      renderComponent={({ version, variant, effects }) => (
        <Alert
          version={version}
          variant={variant}
          effects={effects}
        >
          <AlertTitle>Alert Title</AlertTitle>
          <AlertDescription>This is an alert description</AlertDescription>
        </Alert>
      )}
    />
  );
}

export default AlertShowcase;
