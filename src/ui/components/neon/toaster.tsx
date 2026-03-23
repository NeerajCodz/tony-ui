import { tacticalHudEffectsClass, type TacticalHudEffects } from './_effects';
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
  effects?: TacticalHudEffects;
}

export function Toaster({ effects = 'on' }: ToasterProps) {
  const { toasts } = useToast();

  return (
    <div className={tacticalHudEffectsClass(effects)}>
      <ToastProvider>
      {toasts.map(function ({
        id,
        title,
        description,
        action,
        open,
        onOpenChange,
        duration,
        variant,
        type,
      }) {
        return (
          <Toast
            key={id}
            effects={effects}
            open={open}
            onOpenChange={onOpenChange}
            duration={duration}
            variant={variant === 'destructive' ? 'destructive' : 'default'}
            type={type}
          >
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
