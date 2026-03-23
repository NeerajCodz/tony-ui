import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-[8px] bg-[rgba(255,255,255,0.05)]", className)}
      {...props}
    />
  )
}

export { Skeleton }
