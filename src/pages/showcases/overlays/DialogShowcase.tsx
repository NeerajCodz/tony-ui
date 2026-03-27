/**
 * Dialog Showcase
 */

import { Button } from '@/ui/handlers/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/ui/handlers/dialog';
import { ShowcaseTemplate } from '../_components';

const DIALOG_TYPES = ['default', 'modal'];

export function DialogShowcase() {
  return (
    <ShowcaseTemplate
      componentName="Dialog"
      availableTypes={DIALOG_TYPES}
      defaultType="default"
      columns={4}
      renderComponent={({ version, variant, effects }) => (
        <Dialog>
          <DialogTrigger asChild>
            <Button version={version} variant="outline" size="sm">
              Open Dialog
            </Button>
          </DialogTrigger>
          <DialogContent version={version} variant={variant} effects={effects}>
            <DialogHeader>
              <DialogTitle>Dialog Title</DialogTitle>
              <DialogDescription>
                This is a dialog description with some sample text.
              </DialogDescription>
            </DialogHeader>
            <div className="py-4">
              <p className="text-sm">Dialog content goes here.</p>
            </div>
          </DialogContent>
        </Dialog>
      )}
    />
  );
}

export default DialogShowcase;
