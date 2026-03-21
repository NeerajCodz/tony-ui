'use client';

import React from 'react';
import { createHandler } from '../core/create-handler';
import type { Variant, Version } from '../types/common';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  version?: Version;
  variant?: Variant;
  type?: string;
  uiType?: string;
  colors?: unknown;
  error?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

const Input = createHandler<InputProps>({
  componentName: 'input',
  defaultVersion: 'default',
  defaultVariant: 'default',
});

export default Input;
