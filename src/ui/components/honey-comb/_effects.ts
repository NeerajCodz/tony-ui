export type TacticalHudEffects = 'on' | 'off';

export const tacticalHudEffectsClass = (effects: TacticalHudEffects = 'on') => {
  if (effects === 'off') {
    return '!filter-none !drop-shadow-none hover:!filter-none active:!filter-none focus:!filter-none [&_*]:!filter-none [&_*]:!drop-shadow-none';
  }
  return '';
};

// Tactical HUD Brackets Style
const bracketSize = '15px';
const bracketWidth = '2px';
const pipSize = '4px';

// Helper to create gradient for L-brackets and Pips
export const getBracketsStyle = (size: string = '15px', width: string = '2px', pip: string = '4px') => ({
  backgroundImage: `
    /* Top Left L */
    linear-gradient(to right, var(--th-bracket) ${width}, transparent ${width}),
    linear-gradient(to bottom, var(--th-bracket) ${width}, transparent ${width}),
    
    /* Top Right L */
    linear-gradient(to left, var(--th-bracket) ${width}, transparent ${width}),
    linear-gradient(to bottom, var(--th-bracket) ${width}, transparent ${width}),
    
    /* Bottom Left L */
    linear-gradient(to right, var(--th-bracket) ${width}, transparent ${width}),
    linear-gradient(to top, var(--th-bracket) ${width}, transparent ${width}),
    
    /* Bottom Right L */
    linear-gradient(to left, var(--th-bracket) ${width}, transparent ${width}),
    linear-gradient(to top, var(--th-bracket) ${width}, transparent ${width}),
    
    /* Top Pip */
    linear-gradient(to bottom, var(--th-pip) ${pip}, transparent ${pip}),
    /* Bottom Pip */
    linear-gradient(to top, var(--th-pip) ${pip}, transparent ${pip}),
    /* Left Pip */
    linear-gradient(to right, var(--th-pip) ${pip}, transparent ${pip}),
    /* Right Pip */
    linear-gradient(to left, var(--th-pip) ${pip}, transparent ${pip})
  `,
  backgroundPosition: `
    top left, top left,
    top right, top right,
    bottom left, bottom left,
    bottom right, bottom right,
    top center,
    bottom center,
    center left,
    center right
  `,
  backgroundSize: `
    ${size} ${size}, ${size} ${size},
    ${size} ${size}, ${size} ${size},
    ${size} ${size}, ${size} ${size},
    ${size} ${size}, ${size} ${size},
    ${pip} ${pip},
    ${pip} ${pip},
    ${pip} ${pip},
    ${pip} ${pip}
  `,
  backgroundRepeat: 'no-repeat',
});

export const bracketsStyle = getBracketsStyle();