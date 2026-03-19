export const buttonConfig = {
  base: {
    borderRadius: '2px',
    padding: '12px 24px',
    fontWeight: '500',
    fontFamily: 'monospace',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.1em',
  },
  animations: {
    hover: {
      borderColor: 'var(--primary)',
      backgroundColor: 'rgba(var(--primary-rgb), 0.05)',
      transition: 'all 0.2s ease',
    },
    focus: {
      outline: '2px solid var(--primary)',
      outlineOffset: '2px',
    },
    active: {
      backgroundColor: 'rgba(var(--primary-rgb), 0.1)',
    },
  },
  effects: {
    glow: {
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
    },
    dataGrid: {
      backgroundImage: 'linear-gradient(90deg, rgba(var(--primary-rgb), 0.05) 1px, transparent 1px), linear-gradient(0deg, rgba(var(--primary-rgb), 0.05) 1px, transparent 1px)',
      backgroundSize: '8px 8px',
    },
  },
  borders: {
    width: '1px',
    style: 'solid',
    gradient: 'var(--border-color)',
  },
};
