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

// Common variants mapping
const variantStyles = {
  default: 'text-foreground',
  muted: 'text-muted-foreground',
  primary: 'text-primary',
  secondary: 'text-secondary-foreground',
  destructive: 'text-destructive',
  success: 'text-green-600 dark:text-green-400',
  warning: 'text-yellow-600 dark:text-yellow-400',
};

const alignStyles = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
  justify: 'text-justify',
};

const weightStyles = {
  thin: 'font-thin',
  light: 'font-light',
  normal: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold',
  extrabold: 'font-extrabold',
};

/* -------------------------------------------------------------------------- */
/*                                 Components                                 */
/* -------------------------------------------------------------------------- */

const TypographyH1 = React.forwardRef<HTMLHeadingElement, React.ComponentPropsWithoutRef<typeof TypographyH1Base>>(
  ({ className, variant = 'default', align = 'left', weight = 'extrabold', ...props }, ref) => (
    <TypographyH1Base
      ref={ref}
      variant={variant}
      align={align}
      weight={weight}
      className={cn(
        'scroll-m-20 text-4xl tracking-tight lg:text-5xl',
        variantStyles[variant],
        alignStyles[align],
        weightStyles[weight],
        className
      )}
      {...props}
    />
  )
);
TypographyH1.displayName = 'TypographyH1';

const TypographyH2 = React.forwardRef<HTMLHeadingElement, React.ComponentPropsWithoutRef<typeof TypographyH2Base>>(
  ({ className, variant = 'default', align = 'left', weight = 'semibold', ...props }, ref) => (
    <TypographyH2Base
      ref={ref}
      variant={variant}
      align={align}
      weight={weight}
      className={cn(
        'scroll-m-20 border-b pb-2 text-3xl tracking-tight first:mt-0',
        variantStyles[variant],
        alignStyles[align],
        weightStyles[weight],
        className
      )}
      {...props}
    />
  )
);
TypographyH2.displayName = 'TypographyH2';

const TypographyH3 = React.forwardRef<HTMLHeadingElement, React.ComponentPropsWithoutRef<typeof TypographyH3Base>>(
  ({ className, variant = 'default', align = 'left', weight = 'semibold', ...props }, ref) => (
    <TypographyH3Base
      ref={ref}
      variant={variant}
      align={align}
      weight={weight}
      className={cn(
        'scroll-m-20 text-2xl tracking-tight',
        variantStyles[variant],
        alignStyles[align],
        weightStyles[weight],
        className
      )}
      {...props}
    />
  )
);
TypographyH3.displayName = 'TypographyH3';

const TypographyH4 = React.forwardRef<HTMLHeadingElement, React.ComponentPropsWithoutRef<typeof TypographyH4Base>>(
  ({ className, variant = 'default', align = 'left', weight = 'semibold', ...props }, ref) => (
    <TypographyH4Base
      ref={ref}
      variant={variant}
      align={align}
      weight={weight}
      className={cn(
        'scroll-m-20 text-xl tracking-tight',
        variantStyles[variant],
        alignStyles[align],
        weightStyles[weight],
        className
      )}
      {...props}
    />
  )
);
TypographyH4.displayName = 'TypographyH4';

const TypographyP = React.forwardRef<HTMLParagraphElement, React.ComponentPropsWithoutRef<typeof TypographyPBase>>(
  ({ className, variant = 'default', align = 'left', weight = 'normal', ...props }, ref) => (
    <TypographyPBase
      ref={ref}
      variant={variant}
      align={align}
      weight={weight}
      className={cn(
        'leading-7 [&:not(:first-child)]:mt-6',
        variantStyles[variant],
        alignStyles[align],
        weightStyles[weight],
        className
      )}
      {...props}
    />
  )
);
TypographyP.displayName = 'TypographyP';

const TypographyBlockquote = React.forwardRef<HTMLQuoteElement, React.ComponentPropsWithoutRef<typeof TypographyBlockquoteBase>>(
  ({ className, variant = 'default', ...props }, ref) => (
    <TypographyBlockquoteBase
      ref={ref}
      variant={variant}
      className={cn(
        'mt-6 border-l-2 pl-6 italic',
        variantStyles[variant],
        className
      )}
      {...props}
    />
  )
);
TypographyBlockquote.displayName = 'TypographyBlockquote';

const TypographyList = React.forwardRef<HTMLUListElement, React.ComponentPropsWithoutRef<typeof TypographyListBase>>(
  ({ className, variant = 'default', showMarker = true, ...props }, ref) => (
    <TypographyListBase
      ref={ref}
      variant={variant}
      showMarker={showMarker}
      className={cn(
        'my-6 ml-6 [&>li]:mt-2',
        showMarker && 'list-disc',
        !showMarker && 'list-none ml-0',
        variantStyles[variant],
        className
      )}
      {...props}
    />
  )
);
TypographyList.displayName = 'TypographyList';

const TypographyOrderedList = React.forwardRef<HTMLOListElement, React.ComponentPropsWithoutRef<typeof TypographyOrderedListBase>>(
  ({ className, variant = 'default', listStyleType = 'decimal', ...props }, ref) => (
    <TypographyOrderedListBase
      ref={ref}
      variant={variant}
      listStyleType={listStyleType}
      className={cn(
        'my-6 ml-6 [&>li]:mt-2',
        // Note: list-decimal is handled by CSS list-style-type via style prop if needed,
        // but utility class is good default
        listStyleType === 'decimal' && 'list-decimal',
        variantStyles[variant],
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
      className={cn('', className)}
      {...props}
    />
  )
);
TypographyListItem.displayName = 'TypographyListItem';

const TypographyCode = React.forwardRef<HTMLElement, React.ComponentPropsWithoutRef<typeof TypographyCodeBase>>(
  ({ className, variant = 'default', ...props }, ref) => (
    <TypographyCodeBase
      ref={ref}
      variant={variant}
      className={cn(
        'relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold',
        variantStyles[variant],
        className
      )}
      {...props}
    />
  )
);
TypographyCode.displayName = 'TypographyCode';

const TypographyLead = React.forwardRef<HTMLParagraphElement, React.ComponentPropsWithoutRef<typeof TypographyLeadBase>>(
  ({ className, variant = 'muted', align = 'left', ...props }, ref) => (
    <TypographyLeadBase
      ref={ref}
      variant={variant}
      align={align}
      className={cn(
        'text-xl',
        variantStyles[variant],
        alignStyles[align],
        className
      )}
      {...props}
    />
  )
);
TypographyLead.displayName = 'TypographyLead';

const TypographyLarge = React.forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<typeof TypographyLargeBase>>(
  ({ className, variant = 'default', align = 'left', ...props }, ref) => (
    <TypographyLargeBase
      ref={ref}
      variant={variant}
      align={align}
      className={cn(
        'text-lg font-semibold',
        variantStyles[variant],
        alignStyles[align],
        className
      )}
      {...props}
    />
  )
);
TypographyLarge.displayName = 'TypographyLarge';

const TypographySmall = React.forwardRef<HTMLElement, React.ComponentPropsWithoutRef<typeof TypographySmallBase>>(
  ({ className, variant = 'default', ...props }, ref) => (
    <TypographySmallBase
      ref={ref}
      variant={variant}
      className={cn(
        'text-sm font-medium leading-none',
        variantStyles[variant],
        className
      )}
      {...props}
    />
  )
);
TypographySmall.displayName = 'TypographySmall';

const TypographyMuted = React.forwardRef<HTMLParagraphElement, React.ComponentPropsWithoutRef<typeof TypographyMutedBase>>(
  ({ className, align = 'left', ...props }, ref) => (
    <TypographyMutedBase
      ref={ref}
      align={align}
      className={cn(
        'text-sm text-muted-foreground',
        alignStyles[align],
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
