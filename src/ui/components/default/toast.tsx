'use client';

import { createToastFoundation } from '../_shared/family-foundations';

const foundation = createToastFoundation('default');

export const ToastProvider = foundation.ToastProvider;
export const ToastViewport = foundation.ToastViewport;
export const Toast = foundation.Toast;
export const ToastTitle = foundation.ToastTitle;
export const ToastDescription = foundation.ToastDescription;
export const ToastClose = foundation.ToastClose;
export const ToastAction = foundation.ToastAction;

export default Toast;
