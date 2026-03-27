import { cn } from '@/lib/utils';
import { SpinnerBase, type SpinnerBaseProps } from '@/ui/components/_base/spinner';

const Spinner = ({ className, ...props }: SpinnerBaseProps) => {
  return (
    <SpinnerBase
      className={cn('text-[var(--cb-trace-lit)] drop-shadow-[0_0_5px_currentColor]', className)}
      {...props}
    />
  );
};

export { Spinner };
