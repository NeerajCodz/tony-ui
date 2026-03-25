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
  const safeToasts = toasts.map(({ variant: _variant, ...toast }) => toast);

  return (
    <div className={honeyCombEffectsClass(effects)}>
      <ToastProvider>
      {safeToasts.map(function ({
        id,
        title,
        description,
        action,
        open,
        onOpenChange,
        duration,
        type,
      }) {
        return (
          <Toast
            key={id}
            open={open}
            onOpenChange={onOpenChange}
            duration={duration}
            type={type}
          >
            <div className="grid gap-1">
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
    </div>
  );
}
