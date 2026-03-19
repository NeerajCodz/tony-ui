export const buttonConfig = {
  base: {
    borderRadius: '4px',
    padding: '12px 24px',
    fontWeight: '500',
    position: 'relative' as const,
    background: 'rgba(0, 100, 200, 0.05)',
  },
  animations: {
    hover: {
      boxShadow: '0 0 20px rgba(0, 150, 255, 0.4), inset 0 0 10px rgba(0, 150, 255, 0.2)',
      transition: 'all 0.3s ease',
    },
    focus: {
      outline: '2px solid rgba(0, 150, 255, 0.6)',
      outlineOffset: '3px',
    },
    active: {
      transform: 'scale(0.98)',
    },
  },
  effects: {
    glow: {
      boxShadow: '0 0 15px rgba(0, 150, 255, 0.3), 0 2px 4px rgba(0, 0, 0, 0.2)',
    },
    scanline: {
      backgroundImage: 'repeating-linear-gradient(0deg, rgba(0, 150, 255, 0.03) 0px, transparent 2px, transparent 4px)',
    },
  },
  borders: {
    width: '1px',
    style: 'solid',
    gradient: 'linear-gradient(135deg, rgba(0, 150, 255, 0.6) 0%, rgba(0, 200, 255, 0.3) 100%)',
  },
};
