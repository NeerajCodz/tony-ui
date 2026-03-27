import { cn } from '@/lib/utils';
import { TypographyBlockquoteBase, TypographyCodeBase, TypographyH1Base, TypographyH2Base, TypographyH3Base, TypographyH4Base, TypographyLargeBase, TypographyLeadBase, TypographyListBase, TypographyListItemBase, TypographyMutedBase, TypographyOrderedListBase, TypographyPBase, TypographySmallBase } from '@/ui/components/_base/typography';
import * as React from 'react';

// Circuit Board Theme Typography
// Display: VT323/Courier New
// Body: Source Code Pro

const TypographyH1 = React.forwardRef<HTMLHeadingElement, React.ComponentPropsWithoutRef<typeof TypographyH1Base>>(
  ({ className, ...props }, ref) => (
    <TypographyH1Base
      ref={ref}
      className={cn(
        'font-mono text-[52px] font-normal tracking-[0.05em] text-[var(--cb-trace-lit)] drop-shadow-[0_0_20px_var(--cb-node)] uppercase',
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
        'font-mono text-[38px] font-normal tracking-[0.04em] text-[var(--text-primary)] uppercase',
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
        'font-mono text-[26px] font-normal tracking-[0.06em] text-[var(--cb-node)] uppercase',
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
        'font-mono text-[18px] font-normal tracking-[0.1em] text-[var(--text-primary)] uppercase',
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
        'font-mono text-[13px] leading-[1.8] text-[rgba(0,255,136,0.7)]',
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
        'font-mono mt-6 border-l-2 border-[var(--cb-trace-lit)] pl-6 italic text-[var(--cb-node)]',
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
        'font-mono my-6 ml-6 text-[13px] text-[rgba(0,255,136,0.7)] [&>li]:mt-2',
        showMarker && 'list-disc marker:text-[var(--cb-trace-lit)]',
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
        'font-mono my-6 ml-6 list-decimal text-[13px] text-[rgba(0,255,136,0.7)] [&>li]:mt-2 marker:text-[var(--cb-trace-lit)]',
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
      className={cn('font-mono', className)}
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
        'font-mono relative rounded-none bg-[var(--cb-soldermask)] px-[0.3rem] py-[0.2rem] text-sm font-semibold text-[var(--cb-trace-lit)] border border-[var(--cb-trace)]',
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
        'font-mono text-xl text-[var(--cb-node)]',
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
        'font-mono text-lg font-semibold text-[var(--cb-node)]',
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
        'font-mono text-xs font-medium leading-none text-[rgba(0,255,136,0.7)] uppercase tracking-wider',
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
        'font-mono text-xs text-[var(--cb-trace-dim)] uppercase tracking-[0.2em]',
        className
      )}
      {...props}
    />
  )
);
TypographyMuted.displayName = 'TypographyMuted';

export {
TypographyBlockquote,TypographyCode,TypographyH1,
TypographyH2,
TypographyH3,
TypographyH4,TypographyLarge,TypographyLead,TypographyList,TypographyListItem,TypographyMuted,TypographyOrderedList,TypographyP,TypographySmall
};
