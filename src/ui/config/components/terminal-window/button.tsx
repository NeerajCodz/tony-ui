export const buttonConfig = {
  base: {
    borderRadius: '0px',
    padding: '8px 16px',
    fontWeight: '400',
    fontFamily: 'monospace',
    fontSize: '0.9rem',
    backgroundColor: 'rgba(0, 255, 0, 0.05)',
    color: '#00ff00',
  },
  animations: {
    hover: {
      backgroundColor: 'rgba(0, 255, 0, 0.1)',
      color: '#00ff00',
      transition: 'all 0.15s ease',
    },
    focus: {
      outline: '1px solid #00ff00',
      outlineOffset: '1px',
    },
    active: {
      backgroundColor: 'rgba(0, 255, 0, 0.15)',
    },
  },
  effects: {
    glow: {
      boxShadow: 'none',
      textShadow: '0 0 5px rgba(0, 255, 0, 0.5)',
    },
    cursor: {
      position: 'relative' as const,
      '::after': {
        content: '"_"',
        animation: 'blink 1s step-end infinite',
      },
    },
  },
  borders: {
    width: '1px',
    style: 'solid',
    gradient: '#00ff00',
  },
};
