export const buttonConfig = {
  base: {
    borderRadius: '6px',
    padding: '12px 24px',
    fontWeight: '600',
    position: 'relative' as const,
    overflow: 'hidden' as const,
  },
  animations: {
    hover: {
      boxShadow: '0 0 25px rgba(138, 43, 226, 0.6), 0 0 50px rgba(0, 191, 255, 0.3)',
      transform: 'scale(1.05)',
      transition: 'all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    },
    focus: {
      outline: '2px solid rgba(138, 43, 226, 0.6)',
      outlineOffset: '3px',
    },
    active: {
      transform: 'scale(1)',
    },
  },
  effects: {
    glow: {
      boxShadow: '0 0 20px rgba(138, 43, 226, 0.4), 0 0 40px rgba(0, 191, 255, 0.2), inset 0 0 15px rgba(138, 43, 226, 0.2)',
    },
    quantumShimmer: {
      background: 'linear-gradient(45deg, rgba(138, 43, 226, 0.3) 0%, rgba(0, 191, 255, 0.3) 50%, rgba(138, 43, 226, 0.3) 100%)',
      backgroundSize: '200% 200%',
      animation: 'quantumShimmer 3s ease-in-out infinite',
    },
  },
  borders: {
    width: '2px',
    style: 'solid',
    gradient: 'linear-gradient(90deg, #8A2BE2 0%, #00BFFF 50%, #8A2BE2 100%)',
  },
};
