'use client';

import React from 'react';
import { createHandler } from '../core/create-handler';
import type { InputProps } from '../types/components/input';
import type { BaseUIProps } from '../types/common';

const Input = createHandler<InputProps & BaseUIProps>({
  componentName: 'input',
  exportName: 'Input'
});

export default Input;

export type { InputProps };
