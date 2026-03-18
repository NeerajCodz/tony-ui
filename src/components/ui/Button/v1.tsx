import { Button } from './index';
import { Variant } from '../../../types';

interface ButtonV1Props {
  variant?: Variant;
  label?: string;
}

export function ButtonV1({ variant = 'default', label = 'Click Me' }: ButtonV1Props) {
  return <Button variant={variant} version="1">{label}</Button>;
}
