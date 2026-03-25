'use client';

import React from 'react';
import { createHandler } from '../core/create-handler';
import type { InputProps } from '../types/components/input';

const Input = createHandler<InputProps>({
  componentName: 'input',
  defaultVersion: 'default',
  defaultVariant: 'default',
});

export default Input;
