export const buttonConfig = {
  base: {
    borderRadius: '2px',
    padding: '10px 20px',
    fontWeight: '700',
    fontFamily: 'monospace',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.1em',
  },
  animations: {
    hover: {
      backgroundColor: 'rgba(var(--primary-rgb), 0.1)',
      borderColor: 'var(--primary)',
      transition: 'all 0.2s ease',
    },
    focus: {
      outline: '2px solid var(--primary)',
      outlineOffset: '2px',
    },
    active: {
      backgroundColor: 'rgba(var(--primary-rgb), 0.2)',
    },
  },
  effects: {
    glow: {
      boxShadow: '0 0 10px rgba(var(--primary-rgb), 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
    },
    targetReticle: {
      position: 'relative' as const,
      '::before': {
        content: '""',
        position: 'absolute' as const,
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        border: '1px solid rgba(var(--primary-rgb), 0.3)',
        pointerEvents: 'none' as const,
      },
    },
  },
  borders: {
    width: '2px',
    style: 'solid',
    gradient: 'var(--primary)',
  },
};
