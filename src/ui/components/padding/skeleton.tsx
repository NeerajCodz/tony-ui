import * as React from 'react';
import { cn } from "@/lib/utils";
import { SkeletonBase } from '../_base/skeleton';

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <SkeletonBase
      className={cn("animate-pulse rounded-[8px] bg-[rgba(255,255,255,0.05)]", className)}
      {...props}
    />
  )
}

export { Skeleton }
