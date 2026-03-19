export const buttonConfig = {
  base: {
    borderRadius: '6px',
    padding: '14px 28px',
    fontWeight: '500',
    fontSize: '1rem',
    lineHeight: '1.5',
  },
  animations: {
    hover: {
      backgroundColor: 'var(--primary-hover)',
      transform: 'translateY(-1px)',
      transition: 'all 0.2s ease',
    },
    focus: {
      outline: '2px solid var(--primary)',
      outlineOffset: '3px',
    },
    active: {
      transform: 'translateY(0px)',
    },
  },
  effects: {
    glow: {
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
    },
    highlight: {
      background: 'linear-gradient(180deg, rgba(255,255,255,0.1) 0%, transparent 100%)',
    },
  },
  borders: {
    width: '1px',
    style: 'solid',
    gradient: 'var(--border-color)',
  },
};
