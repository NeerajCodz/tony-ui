export const buttonConfig = {
  base: {
    borderRadius: '4px',
    padding: '10px 20px',
    fontWeight: '500',
    fontFamily: 'monospace',
    position: 'relative' as const,
  },
  animations: {
    hover: {
      background: 'repeating-linear-gradient(90deg, rgba(var(--primary-rgb), 0.1) 0px, transparent 2px, transparent 4px, rgba(var(--primary-rgb), 0.1) 6px)',
      transition: 'all 0.3s ease',
    },
    focus: {
      outline: '2px dashed var(--primary)',
      outlineOffset: '2px',
    },
    active: {
      transform: 'translateY(1px)',
    },
  },
  effects: {
    glow: {
      boxShadow: '0 0 15px rgba(var(--primary-rgb), 0.3), inset 0 0 5px rgba(var(--primary-rgb), 0.1)',
    },
    circuitPattern: {
      background: 'linear-gradient(90deg, transparent 48%, var(--primary) 48%, var(--primary) 52%, transparent 52%)',
      backgroundSize: '10px 100%',
    },
  },
  borders: {
    width: '1px',
    style: 'solid',
    gradient: 'repeating-linear-gradient(45deg, var(--primary) 0px, var(--primary) 4px, transparent 4px, transparent 8px)',
  },
};
