import * as React from 'react';

export interface TypographyH1BaseProps extends React.HTMLAttributes<HTMLHeadingElement> {}

export const TypographyH1Base = React.forwardRef<HTMLHeadingElement, TypographyH1BaseProps>(
  ({ ...props }, ref) => <h1 ref={ref} {...props} />
);
TypographyH1Base.displayName = 'TypographyH1Base';

export interface TypographyH2BaseProps extends React.HTMLAttributes<HTMLHeadingElement> {}

export const TypographyH2Base = React.forwardRef<HTMLHeadingElement, TypographyH2BaseProps>(
  ({ ...props }, ref) => <h2 ref={ref} {...props} />
);
TypographyH2Base.displayName = 'TypographyH2Base';

export interface TypographyH3BaseProps extends React.HTMLAttributes<HTMLHeadingElement> {}

export const TypographyH3Base = React.forwardRef<HTMLHeadingElement, TypographyH3BaseProps>(
  ({ ...props }, ref) => <h3 ref={ref} {...props} />
);
TypographyH3Base.displayName = 'TypographyH3Base';

export interface TypographyH4BaseProps extends React.HTMLAttributes<HTMLHeadingElement> {}

export const TypographyH4Base = React.forwardRef<HTMLHeadingElement, TypographyH4BaseProps>(
  ({ ...props }, ref) => <h4 ref={ref} {...props} />
);
TypographyH4Base.displayName = 'TypographyH4Base';

export interface TypographyPBaseProps extends React.HTMLAttributes<HTMLParagraphElement> {}

export const TypographyPBase = React.forwardRef<HTMLParagraphElement, TypographyPBaseProps>(
  ({ ...props }, ref) => <p ref={ref} {...props} />
);
TypographyPBase.displayName = 'TypographyPBase';

export interface TypographyBlockquoteBaseProps extends React.HTMLAttributes<HTMLQuoteElement> {}

export const TypographyBlockquoteBase = React.forwardRef<HTMLQuoteElement, TypographyBlockquoteBaseProps>(
  ({ ...props }, ref) => <blockquote ref={ref} {...props} />
);
TypographyBlockquoteBase.displayName = 'TypographyBlockquoteBase';

export interface TypographyCodeBaseProps extends React.HTMLAttributes<HTMLElement> {}

export const TypographyCodeBase = React.forwardRef<HTMLElement, TypographyCodeBaseProps>(
  ({ ...props }, ref) => <code ref={ref} {...props} />
);
TypographyCodeBase.displayName = 'TypographyCodeBase';

export interface TypographyLeadBaseProps extends React.HTMLAttributes<HTMLParagraphElement> {}

export const TypographyLeadBase = React.forwardRef<HTMLParagraphElement, TypographyLeadBaseProps>(
  ({ ...props }, ref) => <p ref={ref} {...props} />
);
TypographyLeadBase.displayName = 'TypographyLeadBase';

export interface TypographyLargeBaseProps extends React.HTMLAttributes<HTMLDivElement> {}

export const TypographyLargeBase = React.forwardRef<HTMLDivElement, TypographyLargeBaseProps>(
  ({ ...props }, ref) => <div ref={ref} {...props} />
);
TypographyLargeBase.displayName = 'TypographyLargeBase';

export interface TypographySmallBaseProps extends React.HTMLAttributes<HTMLElement> {}

export const TypographySmallBase = React.forwardRef<HTMLElement, TypographySmallBaseProps>(
  ({ ...props }, ref) => <small ref={ref} {...props} />
);
TypographySmallBase.displayName = 'TypographySmallBase';

export interface TypographyMutedBaseProps extends React.HTMLAttributes<HTMLParagraphElement> {}

export const TypographyMutedBase = React.forwardRef<HTMLParagraphElement, TypographyMutedBaseProps>(
  ({ ...props }, ref) => <p ref={ref} {...props} />
);
TypographyMutedBase.displayName = 'TypographyMutedBase';
