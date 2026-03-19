export const buttonConfig = {
  base: {
    borderRadius: '0px',
    padding: '12px 24px',
    fontWeight: '500',
    fontFamily: 'monospace',
    position: 'relative' as const,
  },
  animations: {
    hover: {
      backgroundColor: 'rgba(0, 255, 0, 0.05)',
      boxShadow: '0 0 15px rgba(0, 255, 0, 0.3)',
      transition: 'all 0.3s ease',
    },
    focus: {
      outline: '1px solid rgba(0, 255, 0, 0.6)',
      outlineOffset: '2px',
    },
    active: {
      backgroundColor: 'rgba(0, 255, 0, 0.1)',
    },
  },
  effects: {
    glow: {
      boxShadow: '0 0 10px rgba(0, 255, 0, 0.2), inset 0 0 5px rgba(0, 255, 0, 0.1)',
    },
    gridPattern: {
      backgroundImage: 'linear-gradient(rgba(0, 255, 0, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 0, 0.1) 1px, transparent 1px)',
      backgroundSize: '10px 10px',
    },
  },
  borders: {
    width: '1px',
    style: 'solid',
    gradient: 'rgba(0, 255, 0, 0.4)',
  },
};
