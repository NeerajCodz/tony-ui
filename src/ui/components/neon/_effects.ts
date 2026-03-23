export const neonGlow = (color: string = "var(--ne-primary)") => {
  return `inset 0 0 6px ${color}, 0 0 4px ${color}, 0 0 16px ${color}, 0 0 40px ${color}`
}

export const neonBoxShadow = "shadow-[inset_0_0_6px_var(--ne-primary),0_0_4px_var(--ne-primary),0_0_16px_var(--ne-primary),0_0_40px_rgba(0,245,255,0.3)]"
export const neonBoxShadowSecondary = "shadow-[inset_0_0_6px_var(--ne-secondary),0_0_4px_var(--ne-secondary),0_0_16px_var(--ne-secondary),0_0_40px_rgba(255,0,144,0.3)]"

export const neonTextShadow = "drop-shadow-[0_0_5px_var(--ne-primary)] drop-shadow-[0_0_10px_var(--ne-primary)]"
export const neonTextShadowSecondary = "drop-shadow-[0_0_5px_var(--ne-secondary)] drop-shadow-[0_0_10px_var(--ne-secondary)]"

export const neonClasses = {
  // Common base classes
  base: "rounded-none font-display uppercase tracking-widest transition-all duration-300",
  
  // Box styles
  box: "border-2 border-[var(--ne-primary)] bg-[var(--ne-bg)] text-[var(--ne-primary)] shadow-[inset_0_0_6px_var(--ne-primary),0_0_4px_var(--ne-primary),0_0_16px_var(--ne-primary),0_0_40px_rgba(0,245,255,0.3)]",
  boxSecondary: "border-2 border-[var(--ne-secondary)] bg-[var(--ne-bg)] text-[var(--ne-secondary)] shadow-[inset_0_0_6px_var(--ne-secondary),0_0_4px_var(--ne-secondary),0_0_16px_var(--ne-secondary),0_0_40px_rgba(255,0,144,0.3)]",
  
  // Interactive elements
  button: "hover:brightness-125 hover:shadow-[inset_0_0_8px_var(--ne-primary),0_0_8px_var(--ne-primary),0_0_20px_var(--ne-primary),0_0_50px_rgba(0,245,255,0.4)] active:brightness-150",
  buttonSecondary: "hover:brightness-125 hover:shadow-[inset_0_0_8px_var(--ne-secondary),0_0_8px_var(--ne-secondary),0_0_20px_var(--ne-secondary),0_0_50px_rgba(255,0,144,0.4)] active:brightness-150",
  
  // Text styles
  h1: "font-black tracking-[0.06em] uppercase text-[var(--ne-primary)] drop-shadow-[0_0_10px_var(--ne-primary)] drop-shadow-[0_0_30px_var(--ne-primary)] drop-shadow-[0_0_60px_var(--ne-primary)]",
  h2: "font-black tracking-[0.04em] uppercase text-[var(--ne-text-primary)]",
  h3: "font-bold tracking-[0.06em] uppercase text-[var(--ne-primary)]", 
}
