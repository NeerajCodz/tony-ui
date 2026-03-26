/**
 * AlertDialog Showcase
 */

import React from 'react';
import { ShowcaseTemplate } from '../_components';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/ui/handlers/alert-dialog';
import { Button } from '@/ui/handlers/button';

const ALERT_DIALOG_TYPES = ['default'];

export function AlertDialogShowcase() {
  return (
    <ShowcaseTemplate
      componentName="AlertDialog"
      availableTypes={ALERT_DIALOG_TYPES}
      defaultType="default"
      columns={4}
      renderComponent={({ version, variant, effects }) => (
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button version={version} variant="destructive" size="sm">
              Delete Item
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent version={version} variant={variant} effects={effects}>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete the item.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>Delete</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      )}
    />
  );
}

export default AlertDialogShowcase;
