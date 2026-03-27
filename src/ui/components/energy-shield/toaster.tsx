import type { ToasterBaseProps } from '@/ui/components/_base/toaster';
import * as React from 'react';
import { Toaster as SonnerToaster } from './sonner';

export type ToasterProps = ToasterBaseProps & React.ComponentProps<typeof SonnerToaster>;

export function Toaster(props: ToasterProps) {
  return <SonnerToaster {...props} />;
}
