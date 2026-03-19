import React, { forwardRef } from 'react';
import { ButtonProps } from '../types/components/button';
import { DefaultButton } from '../components/default/button';
import { AngularCornerButton } from '../components/angular-corner/button';
import { buttonConfig as defaultButtonConfig } from '../config/components/default/button';
import { buttonConfig as angularCornerButtonConfig } from '../config/components/angular-corner/button';
import defaultVariant from '../config/variants/default.json';
import primaryVariant from '../config/variants/primary.json';
import infoVariant from '../config/variants/info.json';
import successVariant from '../config/variants/success.json';
import warningVariant from '../config/variants/warning.json';
import { NeonOutlineButton } from '../components/neon-outline/button';
import { buttonConfig as neonOutlineButtonConfig } from '../config/components/neon-outline/button';
import destructiveVariant from '../config/variants/destructive.json';
import secondaryVariant from '../config/variants/secondary.json';
import accentVariant from '../config/variants/accent.json';
import neutralVariant from '../config/variants/neutral.json';
import inverseVariant from '../config/variants/inverse.json';
import dangerSoftVariant from '../config/variants/danger-soft.json';
import warningSoftVariant from '../config/variants/warning-soft.json';
import successSoftVariant from '../config/variants/success-soft.json';

// Variant Map
const variants: Record<string, any> = {
  default: defaultVariant,
  primary: primaryVariant,
  info: infoVariant,
  success: successVariant,
  warning: warningVariant,
  destructive: destructiveVariant,
  secondary: secondaryVariant,
  accent: accentVariant,
  neutral: neutralVariant,
  inverse: inverseVariant,
  'danger-soft': dangerSoftVariant,
  'warning-soft': warningSoftVariant,
  'success-soft': successSoftVariant,
};

// Component Map (Version -> Component)
const components: Record<string, React.ComponentType<any>> = {
  default: DefaultButton,
  'angular-corner': AngularCornerButton,
  'neon-outline': NeonOutlineButton,
  // Add other versions here as they are implemented
};

// Config Map (Version -> Config)
const configs: Record<string, any> = {
  default: defaultButtonConfig,
  'angular-corner': angularCornerButtonConfig,
  'neon-outline': neonOutlineButtonConfig,
  // Add other version configs here
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ version = 'default', variant = 'default', type = 'default', size = 'md', style, ...props }, ref) => {
    // 1. Resolve Component
    const Component = components[version] || components.default;

    // 2. Resolve Config
    const config = configs[version] || configs.default;

    // 3. Resolve Variant Data
    const variantData = variants[variant] || variants.default;

    // 4. Resolve Styles
    const baseStyles = config.base || {};
    const sizeStyles = config.sizes?.[size] || {};
    const typeStylesFn = config.types?.[type] || config.types?.default;
    const typeStyles = typeStylesFn ? typeStylesFn(variantData.colors) : {};

    // Combine Styles
    const finalStyles = {
      ...baseStyles,
      ...sizeStyles,
      ...typeStyles,
      ...style, // Allow user override
    };

    return (
      <Component
        ref={ref}
        version={version}
        variant={variant}
        type={type}
        size={size}
        styles={finalStyles}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';
