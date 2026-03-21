'use client';

import React from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { createHandler } from '../core/create-handler';
import type { Variant, Version } from '../types/common';

export interface CheckboxProps extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {
  version?: Version;
  variant?: Variant;
  uiType?: string;
  colors?: unknown;
  size?: 'sm' | 'md' | 'lg';
}

const Checkbox = createHandler<CheckboxProps>({
  componentName: 'checkbox',
  defaultVersion: 'default',
  defaultVariant: 'default',
});

export default Checkbox;
