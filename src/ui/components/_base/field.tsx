import * as React from 'react';

export interface FieldBaseProps extends React.HTMLAttributes<HTMLDivElement> {}

export const FieldBase = React.forwardRef<HTMLDivElement, FieldBaseProps>(
  ({ ...props }, ref) => <div ref={ref} {...props} />
);
FieldBase.displayName = 'FieldBase';

export interface FieldLabelBaseProps extends React.LabelHTMLAttributes<HTMLLabelElement> {}

export const FieldLabelBase = React.forwardRef<HTMLLabelElement, FieldLabelBaseProps>(
  ({ ...props }, ref) => <label ref={ref} {...props} />
);
FieldLabelBase.displayName = 'FieldLabelBase';

export interface FieldDescriptionBaseProps extends React.HTMLAttributes<HTMLParagraphElement> {}

export const FieldDescriptionBase = React.forwardRef<HTMLParagraphElement, FieldDescriptionBaseProps>(
  ({ ...props }, ref) => <p ref={ref} {...props} />
);
FieldDescriptionBase.displayName = 'FieldDescriptionBase';

export interface FieldErrorBaseProps extends React.HTMLAttributes<HTMLParagraphElement> {}

export const FieldErrorBase = React.forwardRef<HTMLParagraphElement, FieldErrorBaseProps>(
  ({ ...props }, ref) => <p ref={ref} {...props} />
);
FieldErrorBase.displayName = 'FieldErrorBase';
