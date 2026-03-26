'use client';

/**
 * Button Handler
 * 
 * Dynamically loads button component based on version, variant, and type.
 * NO hardcoded colors, styles, or variants
 */

import React from 'react';
import { createHandler } from '../core/create-handler';
import type { ButtonProps } from '../types/components/button';
import type { BaseUIProps } from '../types/common';

export const Button = createHandler<ButtonProps & BaseUIProps>({
  componentName: 'button',
  exportName: 'Button'
});

Button.displayName = 'Button';

export default Button;

export type { ButtonProps };
