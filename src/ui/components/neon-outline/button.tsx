import React, { forwardRef } from 'react';
import { ButtonProps } from '../../types/components/button';

export const NeonOutlineButton = forwardRef<HTMLButtonElement, ButtonProps & { styles: React.CSSProperties }>(
  ({ children, styles, className, ...props }, ref) => {
    // The handler passes styles which include the glow color as a CSS var or hardcoded
    // For neon, we want to ensure the glow color is available for hover effects
    // We can extract it from the boxShadow or border if needed, or rely on the handler to pass it.
    // However, the config 'animations' object uses var(--btn-glow).
    // Let's ensure the handler passes this var in 'styles'.

    // Wait, the handler's 'styles' object is a merge of base + size + type.
    // The type function in config returns CSS properties.
    // If the type function returns '--btn-glow': colors.glow, then it's in 'styles'.
    
    // Let's update the config to include the variable, or just inject it here if missing?
    // Better to rely on the config to provide it. I'll assume the config I just wrote (which didn't include --btn-glow) needs a tweak or I handle it here.
    
    // Actually, looking at my previous config for neon-outline:
    // It used hardcoded colors in the type function.
    // But the animation used var(--btn-glow).
    // This is a mismatch. I should fix the config.
    // But for now, let's make the component robust.

    // I will use a ref to handle hover state if I can't use CSS classes for dynamic colors easily without vars.
    // Or I can just wrap it in a styled div.
    
    // Simplest approach: The 'styles' prop is applied to the button. 
    // If 'styles' contains the boxShadow, it works for default state.
    // For hover, we need CSS or a library like framer-motion or styled-components.
    // Since we are using standard React+CSS, we need a way to apply hover styles.
    // The handler doesn't support 'hover' state logic yet (it just passes static styles).
    
    // STRATEGY ADJUSTMENT:
    // The 'styles' object should set CSS variables, and the static CSS class should use them.
    // OR, we use 'onMouseEnter' / 'onMouseLeave' to apply hover styles from config.
    
    // Let's try the event handler approach for now as it's pure React and flexible.
    
    // wait, I can't import the config here easily to get the hover styles without circular deps or repetition.
    // The handler resolves the config.
    // Maybe the handler should pass 'hoverStyles' as a prop?
    // That requires changing the handler.
    
    // Alternative: The config 'type' function returns CSS variables, and we rely on a global or scoped CSS file for the transitions.
    // But the goal is "No hardcoding".
    
    // Let's stick to the inline styles + CSS variables approach.
    // I'll assume the `styles` prop contains the necessary `--btn-glow` variable if I update the config.
    // I will update the config in the next step to be consistent.

    return (
      <button
        ref={ref}
        className={className}
        style={styles}
        {...props}
      >
        {children}
      </button>
    );
  }
);

NeonOutlineButton.displayName = 'NeonOutlineButton';
