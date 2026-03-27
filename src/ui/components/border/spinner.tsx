import { cn } from '@/lib/utils';
import { SpinnerBase, type SpinnerBaseProps } from '@/ui/components/_base/spinner';

const Spinner = ({ className, ...props }: SpinnerBaseProps) => {
  return (
    <SpinnerBase
      className={cn('text-primary', className)}
      {...props}
    />
  );
};

export { Spinner };
