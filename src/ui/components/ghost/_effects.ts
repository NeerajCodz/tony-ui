import { cn } from "@/lib/utils"

export type GhostEffects = "on" | "off"

export const ghostEffectsClass = (effects: GhostEffects = "on") => {
  if (effects === "off") {
    return ""
  }
  return cn(
    "transition-all duration-150 ease-[cubic-bezier(0.4,0,0.2,1)]",
    // Base styles for ghost components that might be shared
    "hover:bg-[rgba(255,255,255,0.05)] hover:border-[rgba(255,255,255,0.15)]",
    "border border-transparent bg-transparent" // Default invisible state
  )
}

// For input fields which might need to be visible but subtle
export const ghostInputClass = (effects: GhostEffects = "on") => {
  if (effects === "off") {
    return ""
  }
  return cn(
    "transition-all duration-150 ease-[cubic-bezier(0.4,0,0.2,1)]",
    "bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)]", // Slightly visible at rest
    "hover:bg-[rgba(255,255,255,0.05)] hover:border-[rgba(255,255,255,0.15)]",
    "focus:border-[var(--gh-accent)] focus:ring-1 focus:ring-[var(--gh-accent)] focus:bg-[rgba(255,255,255,0.08)]"
  )
}
