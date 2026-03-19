export const buttonConfig = {
  base: {
    borderRadius: '8px',
    padding: '12px 24px',
    fontWeight: '600',
    position: 'relative' as const,
    overflow: 'hidden' as const,
  },
  animations: {
    hover: {
      boxShadow: '0 0 30px rgba(var(--primary-rgb), 0.6), inset 0 0 20px rgba(var(--primary-rgb), 0.3)',
      transition: 'all 0.3s ease',
    },
    focus: {
      outline: '2px solid var(--primary)',
      outlineOffset: '3px',
    },
    active: {
      boxShadow: '0 0 15px rgba(var(--primary-rgb), 0.8), inset 0 0 10px rgba(var(--primary-rgb), 0.5)',
    },
  },
  effects: {
    glow: {
      boxShadow: '0 0 20px rgba(var(--primary-rgb), 0.4), 0 0 40px rgba(var(--primary-rgb), 0.2), inset 0 0 15px rgba(var(--primary-rgb), 0.2)',
    },
    energyPulse: {
      animation: 'energyPulse 2s ease-in-out infinite',
      background: 'radial-gradient(circle at center, rgba(var(--primary-rgb), 0.3) 0%, transparent 70%)',
    },
  },
  borders: {
    width: '2px',
    style: 'solid',
    gradient: 'linear-gradient(135deg, var(--primary) 0%, rgba(var(--primary-rgb), 0.5) 100%)',
  },
};
