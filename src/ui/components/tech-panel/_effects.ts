import * as React from 'react';

export type TechPanelEffects = 'on' | 'off';

export const techPanelEffectsClass = (effects: TechPanelEffects = 'on') => {
  if (effects === 'off') {
    return '!filter-none !drop-shadow-none hover:!filter-none active:!filter-none focus:!filter-none [&_*]:!filter-none [&_*]:!drop-shadow-none';
  }
  return '';
};

export const TechPanelPowerLights = () => (
  React.createElement(
    'div',
    { className: 'flex items-center gap-1', 'aria-hidden': true },
    React.createElement('span', {
      className: 'h-1.5 w-1.5 rounded-full bg-[var(--tp-power-1)]',
    }),
    React.createElement('span', {
      className: 'h-1.5 w-1.5 rounded-full bg-[var(--tp-power-2)]',
    }),
    React.createElement('span', {
      className: 'h-1.5 w-1.5 rounded-full bg-[var(--tp-power-3)]',
    })
  )
);
