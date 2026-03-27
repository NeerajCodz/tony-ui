import { cn } from "@/lib/utils";
import * as React from "react";
import { TextareaBase } from '../_base/textarea';
import { ghostEffectsClass, type GhostEffects } from "./_effects";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  effects?: GhostEffects
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, effects = "on", ...props }, ref) => {
    return (
      <TextareaBase
        className={cn(ghostEffectsClass(effects),
          "flex min-h-[80px] w-full rounded-sm border border-transparent bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gh-accent)] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 hover:bg-[var(--gh-surface)] hover:border-[var(--gh-border)] text-[var(--gh-text)] font-display transition-all",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea };
