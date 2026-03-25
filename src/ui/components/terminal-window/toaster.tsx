import * as React from 'react';
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from '@/ui/components/terminal-window/toast';
import { useToast } from '@/ui/hooks/use-toast';
import { terminalWindowEffectsClass, type TerminalWindowEffects } from './_effects';

export interface ToasterProps {
  effects?: TerminalWindowEffects;
}

export function Toaster({ effects = 'on' }: ToasterProps) {
  const { toasts } = useToast();
  const safeToasts = toasts.map(({ variant: _variant, ...toast }) => toast);

  return (
    <ToastProvider>
      {safeToasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props} effects={effects}>
            <div className='grid gap-1'>
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>
            {action}
            <ToastClose />
          </Toast>
        );
      })}
      <ToastViewport />
    </ToastProvider>
  );
}
