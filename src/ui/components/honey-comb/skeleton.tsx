import { cn } from "@/lib/utils"

function Skeleton({
  className,
  style,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse bg-[var(--hc-surface)]", className)}
      style={{
          clipPath: "polygon(5px 0, 100% 0, 100% calc(100% - 5px), calc(100% - 5px) 100%, 0 100%, 0 5px)",
          ...style
      }}
      {...props}
    />
  )
}

export { Skeleton }
