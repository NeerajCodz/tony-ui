export const buttonConfig = {
  base: {
    borderRadius: '12px',
    padding: '12px 24px',
    fontWeight: '500',
    backdropFilter: 'blur(10px)',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  animations: {
    hover: {
      backgroundColor: 'rgba(255, 255, 255, 0.15)',
      backdropFilter: 'blur(15px)',
      transition: 'all 0.3s ease',
    },
    focus: {
      outline: '2px solid rgba(255, 255, 255, 0.3)',
      outlineOffset: '2px',
    },
    active: {
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
    },
  },
  effects: {
    glow: {
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
    },
    highlight: {
      background: 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.05) 100%)',
    },
  },
  borders: {
    width: '1px',
    style: 'solid',
    gradient: 'rgba(255, 255, 255, 0.18)',
  },
};
