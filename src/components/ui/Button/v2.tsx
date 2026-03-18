import { Button } from './index';
import { Variant } from '../../../types';

interface ButtonV2Props {
  variant?: Variant;
  label?: string;
}

/**
 * Button V2 - Enhanced with icon support
 */
export function ButtonV2({ variant = 'default', label = 'Click Me' }: ButtonV2Props) {
  return (
    <Button variant={variant} size="lg" version="2" className="flex items-center gap-2">
      ✨ {label}
    </Button>
  );
}
