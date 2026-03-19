export const buttonConfig = {
  base: {
    borderRadius: '6px',
    padding: '10px 24px',
    fontWeight: '500',
    background: 'transparent',
  },
  animations: {
    hover: {
      borderColor: 'var(--primary)',
      transform: 'scale(1.02)',
      transition: 'all 0.2s ease',
    },
    focus: {
      borderColor: 'var(--primary)',
      boxShadow: '0 0 0 3px rgba(var(--primary-rgb), 0.2)',
    },
    active: {
      transform: 'scale(0.98)',
    },
  },
  effects: {
    glow: {
      boxShadow: '0 0 10px rgba(var(--primary-rgb), 0.3)',
    },
    highlight: {
      borderColor: 'var(--primary)',
    },
  },
  borders: {
    width: '2px',
    style: 'solid',
    gradient: 'linear-gradient(90deg, var(--primary) 0%, var(--secondary) 100%)',
  },
};
