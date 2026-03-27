import * as React from 'react';
import { EmptyActionsBase, EmptyBase, EmptyDescriptionBase, EmptyIconBase, EmptyTitleBase, type EmptyBaseProps } from './empty';

type EmptyStateIconComponent = React.ComponentType<{ className?: string }>;

export interface EmptyStateBaseProps extends Omit<EmptyBaseProps, 'children' | 'title'> {
  type?: string;
  icon?: React.ReactNode | EmptyStateIconComponent;
  iconClassName?: string;
  title?: React.ReactNode;
  titleProps?: React.HTMLAttributes<HTMLHeadingElement>;
  description?: React.ReactNode;
  descriptionProps?: React.HTMLAttributes<HTMLParagraphElement>;
  action?: React.ReactNode;
  actionsProps?: React.HTMLAttributes<HTMLDivElement>;
  children?: React.ReactNode;
}

export const EmptyStateBase = React.forwardRef<HTMLDivElement, EmptyStateBaseProps>(
  (
    {
      icon,
      iconClassName,
      title,
      titleProps,
      description,
      descriptionProps,
      action,
      actionsProps,
      children,
      ...props
    },
    ref
  ) => {
    const renderIcon = () => {
      if (!icon) return null;
      if (React.isValidElement(icon)) {
        return <EmptyIconBase className={iconClassName}>{icon}</EmptyIconBase>;
      }
      if (typeof icon === 'function') {
        const Icon = icon as EmptyStateIconComponent;
        return (
          <EmptyIconBase>
            <Icon className={iconClassName} />
          </EmptyIconBase>
        );
      }
      return <EmptyIconBase className={iconClassName}>{icon}</EmptyIconBase>;
    };

    return (
      <EmptyBase ref={ref} {...props}>
        {renderIcon()}
        {title ? <EmptyTitleBase {...titleProps}>{title}</EmptyTitleBase> : null}
        {description ? (
          <EmptyDescriptionBase {...descriptionProps}>{description}</EmptyDescriptionBase>
        ) : null}
        {action ? <EmptyActionsBase {...actionsProps}>{action}</EmptyActionsBase> : null}
        {children}
      </EmptyBase>
    );
  }
);
EmptyStateBase.displayName = 'EmptyStateBase';
