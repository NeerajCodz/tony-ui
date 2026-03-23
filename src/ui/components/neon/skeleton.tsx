import { cn } from '@/lib/utils';

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('animate-pulse rounded-md bg-[var(--ne-primary)]/20 shadow-[0_0_10px_var(--ne-primary)]', className)}
      {...props}
    />
  );
}

export { Skeleton };
