/**
 * Card Components Index
 * Exports all card versions and composite Card component
 * Type-first implementation: only includes versions declared in types/components/card.ts
 */

export { default as Card } from './card-default';
export type { CardVersion, CardVariant, CardProps, CardHeaderProps, CardContentProps, CardFooterProps, CardComponent, CARD_VERSION_CONFIGS } from '../../types/components/card';

// Export individual versions
export { Card as DefaultCard } from './card-default';
export { MinimalCardComponent as MinimalCard } from './card-minimal';
export { CompactCardComponent as CompactCard } from './card-compact';
export { ExpandedCardComponent as ExpandedCard } from './card-expanded';
export { ElevatedCardComponent as ElevatedCard } from './card-elevated';
export { FilledCardComponent as FilledCard } from './card-filled';
export { OutlinedCardComponent as OutlinedCard } from './card-outlined';
export { TonalCardComponent as TonalCard } from './card-tonal';

// Default export is the default card
export { default } from './card-default';
