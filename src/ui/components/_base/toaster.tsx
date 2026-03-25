import * as React from 'react';
import { SonnerBase } from './sonner';

export type ToasterBaseProps = React.ComponentProps<typeof SonnerBase>;

export const ToasterBase = (props: ToasterBaseProps) => <SonnerBase {...props} />;
ToasterBase.displayName = 'ToasterBase';

export { ToasterBase as Toaster };
