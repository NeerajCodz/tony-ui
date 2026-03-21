import * as React from 'react';

export interface InputGroupBaseProps extends React.HTMLAttributes<HTMLDivElement> {}

export const InputGroupBase = React.forwardRef<HTMLDivElement, InputGroupBaseProps>(
  ({ ...props }, ref) => <div ref={ref} {...props} />
);
InputGroupBase.displayName = 'InputGroupBase';

export interface InputLeftAddonBaseProps extends React.HTMLAttributes<HTMLDivElement> {}

export const InputLeftAddonBase = React.forwardRef<HTMLDivElement, InputLeftAddonBaseProps>(
  ({ ...props }, ref) => <div ref={ref} {...props} />
);
InputLeftAddonBase.displayName = 'InputLeftAddonBase';

export interface InputRightAddonBaseProps extends React.HTMLAttributes<HTMLDivElement> {}

export const InputRightAddonBase = React.forwardRef<HTMLDivElement, InputRightAddonBaseProps>(
  ({ ...props }, ref) => <div ref={ref} {...props} />
);
InputRightAddonBase.displayName = 'InputRightAddonBase';

export interface InputLeftElementBaseProps extends React.HTMLAttributes<HTMLDivElement> {}

export const InputLeftElementBase = React.forwardRef<HTMLDivElement, InputLeftElementBaseProps>(
  ({ ...props }, ref) => <div ref={ref} {...props} />
);
InputLeftElementBase.displayName = 'InputLeftElementBase';

export interface InputRightElementBaseProps extends React.HTMLAttributes<HTMLDivElement> {}

export const InputRightElementBase = React.forwardRef<HTMLDivElement, InputRightElementBaseProps>(
  ({ ...props }, ref) => <div ref={ref} {...props} />
);
InputRightElementBase.displayName = 'InputRightElementBase';
