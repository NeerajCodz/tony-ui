import { cn } from '@/lib/utils';

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('animate-pulse rounded-none bg-[var(--mg-border)]/50', className)}
      {...props}
    />
  );
}

export { Skeleton };
