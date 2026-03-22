import { honeyCombEffectsClass, type HoneyCombEffects } from './_effects';
import * as React from 'react';
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from './toast';
import { useToast } from '@/ui/hooks/use-toast';

export interface ToasterProps {
  effects?: HoneyCombEffects;
}

export function Toaster({ effects = 'on' }: ToasterProps) {
  const { toasts } = useToast();

  return (
    <div className={honeyCombEffectsClass(effects)}>
      <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} effects={effects} {...props}>
            <div className="grid gap-1">
              {title && <ToastTitle effects={effects}>{title}</ToastTitle>}
              {description && (
                <ToastDescription effects={effects}>{description}</ToastDescription>
              )}
            </div>
            {action}
            <ToastClose effects={effects} />
          </Toast>
        );
      })}
      <ToastViewport effects={effects} />
      </ToastProvider>
    </div>
  );
}
