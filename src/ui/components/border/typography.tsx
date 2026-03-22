import * as React from 'react';
import {
  TypographyH1Base,
  TypographyH2Base,
  TypographyH3Base,
  TypographyH4Base,
  TypographyPBase,
  TypographyBlockquoteBase,
  TypographyListBase,
  TypographyListItemBase,
  TypographyCodeBase,
  TypographyLeadBase,
  TypographyLargeBase,
  TypographySmallBase,
  TypographyMutedBase,
  TypographyOrderedListBase,
} from '@/ui/components/_base/typography';
import { cn } from '@/lib/utils';

// Border Theme Typography - IBM Plex Mono based
const monoFont = 'font-mono'; // Assumes 'IBM Plex Mono' is set as mono font in tailwind config

const TypographyH1 = React.forwardRef<HTMLHeadingElement, React.ComponentPropsWithoutRef<typeof TypographyH1Base>>(
  ({ className, ...props }, ref) => (
    <TypographyH1Base
      ref={ref}
      className={cn(
        monoFont,
        'text-5xl font-bold tracking-tight text-[var(--text-primary)]',
        className
      )}
      {...props}
    />
  )
);
TypographyH1.displayName = 'TypographyH1';

const TypographyH2 = React.forwardRef<HTMLHeadingElement, React.ComponentPropsWithoutRef<typeof TypographyH2Base>>(
  ({ className, ...props }, ref) => (
    <TypographyH2Base
      ref={ref}
      className={cn(
        monoFont,
        'text-4xl font-semibold tracking-normal text-[var(--text-primary)]',
        className
      )}
      {...props}
    />
  )
);
TypographyH2.displayName = 'TypographyH2';

const TypographyH3 = React.forwardRef<HTMLHeadingElement, React.ComponentPropsWithoutRef<typeof TypographyH3Base>>(
  ({ className, ...props }, ref) => (
    <TypographyH3Base
      ref={ref}
      className={cn(
        monoFont,
        'text-2xl font-semibold tracking-wide text-[var(--br-accent)]',
        className
      )}
      {...props}
    />
  )
);
TypographyH3.displayName = 'TypographyH3';

const TypographyH4 = React.forwardRef<HTMLHeadingElement, React.ComponentPropsWithoutRef<typeof TypographyH4Base>>(
  ({ className, ...props }, ref) => (
    <TypographyH4Base
      ref={ref}
      className={cn(
        monoFont,
        'text-lg font-medium tracking-widest text-[var(--text-secondary)]',
        className
      )}
      {...props}
    />
  )
);
TypographyH4.displayName = 'TypographyH4';

const TypographyP = React.forwardRef<HTMLParagraphElement, React.ComponentPropsWithoutRef<typeof TypographyPBase>>(
  ({ className, ...props }, ref) => (
    <TypographyPBase
      ref={ref}
      className={cn(
        monoFont,
        'text-[13px] leading-[1.7] text-[var(--text-secondary)]',
        className
      )}
      {...props}
    />
  )
);
TypographyP.displayName = 'TypographyP';

const TypographyBlockquote = React.forwardRef<HTMLQuoteElement, React.ComponentPropsWithoutRef<typeof TypographyBlockquoteBase>>(
  ({ className, ...props }, ref) => (
    <TypographyBlockquoteBase
      ref={ref}
      className={cn(
        monoFont,
        'mt-6 border-l-2 border-[var(--br-border-main)] pl-6 italic text-[var(--text-secondary)]',
        className
      )}
      {...props}
    />
  )
);
TypographyBlockquote.displayName = 'TypographyBlockquote';

const TypographyList = React.forwardRef<HTMLUListElement, React.ComponentPropsWithoutRef<typeof TypographyListBase>>(
  ({ className, showMarker = true, ...props }, ref) => (
    <TypographyListBase
      ref={ref}
      showMarker={showMarker}
      className={cn(
        monoFont,
        'my-6 ml-6 text-[13px] text-[var(--text-secondary)] [&>li]:mt-2',
        showMarker && 'list-disc marker:text-[var(--br-accent)]',
        !showMarker && 'list-none ml-0',
        className
      )}
      {...props}
    />
  )
);
TypographyList.displayName = 'TypographyList';

const TypographyOrderedList = React.forwardRef<HTMLOListElement, React.ComponentPropsWithoutRef<typeof TypographyOrderedListBase>>(
  ({ className, ...props }, ref) => (
    <TypographyOrderedListBase
      ref={ref}
      className={cn(
        monoFont,
        'my-6 ml-6 list-decimal text-[13px] text-[var(--text-secondary)] [&>li]:mt-2 marker:text-[var(--br-accent)]',
        className
      )}
      {...props}
    />
  )
);
TypographyOrderedList.displayName = 'TypographyOrderedList';

const TypographyListItem = React.forwardRef<HTMLLIElement, React.ComponentPropsWithoutRef<typeof TypographyListItemBase>>(
  ({ className, ...props }, ref) => (
    <TypographyListItemBase
      ref={ref}
      className={cn(monoFont, className)}
      {...props}
    />
  )
);
TypographyListItem.displayName = 'TypographyListItem';

const TypographyCode = React.forwardRef<HTMLElement, React.ComponentPropsWithoutRef<typeof TypographyCodeBase>>(
  ({ className, ...props }, ref) => (
    <TypographyCodeBase
      ref={ref}
      className={cn(
        monoFont,
        'relative rounded-none bg-[var(--br-surface)] px-[0.3rem] py-[0.2rem] text-sm font-semibold text-[var(--br-accent)] border border-[var(--br-border-dim)]',
        className
      )}
      {...props}
    />
  )
);
TypographyCode.displayName = 'TypographyCode';

const TypographyLead = React.forwardRef<HTMLParagraphElement, React.ComponentPropsWithoutRef<typeof TypographyLeadBase>>(
  ({ className, ...props }, ref) => (
    <TypographyLeadBase
      ref={ref}
      className={cn(
        monoFont,
        'text-xl text-[var(--text-primary)]',
        className
      )}
      {...props}
    />
  )
);
TypographyLead.displayName = 'TypographyLead';

const TypographyLarge = React.forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<typeof TypographyLargeBase>>(
  ({ className, ...props }, ref) => (
    <TypographyLargeBase
      ref={ref}
      className={cn(
        monoFont,
        'text-lg font-semibold text-[var(--text-primary)]',
        className
      )}
      {...props}
    />
  )
);
TypographyLarge.displayName = 'TypographyLarge';

const TypographySmall = React.forwardRef<HTMLElement, React.ComponentPropsWithoutRef<typeof TypographySmallBase>>(
  ({ className, ...props }, ref) => (
    <TypographySmallBase
      ref={ref}
      className={cn(
        monoFont,
        'text-xs font-medium leading-none text-[var(--text-secondary)] uppercase tracking-wider',
        className
      )}
      {...props}
    />
  )
);
TypographySmall.displayName = 'TypographySmall';

const TypographyMuted = React.forwardRef<HTMLParagraphElement, React.ComponentPropsWithoutRef<typeof TypographyMutedBase>>(
  ({ className, ...props }, ref) => (
    <TypographyMutedBase
      ref={ref}
      className={cn(
        monoFont,
        'text-xs text-[var(--text-muted)]',
        className
      )}
      {...props}
    />
  )
);
TypographyMuted.displayName = 'TypographyMuted';

export {
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyP,
  TypographyBlockquote,
  TypographyList,
  TypographyOrderedList,
  TypographyListItem,
  TypographyCode,
  TypographyLead,
  TypographyLarge,
  TypographySmall,
  TypographyMuted,
};
