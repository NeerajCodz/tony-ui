import * as React from 'react';
import { ButtonBase, type ButtonBaseProps } from '../_base/button';
import { cn } from '@/lib/utils';
import { terminalWindowEffectsClass, type TerminalWindowEffects } from './_effects';
import { Loader2 } from 'lucide-react';

export interface ButtonProps extends ButtonBaseProps {
  effects?: TerminalWindowEffects;
}

type TerminalWindowButtonVariantOptions = {
  visualType?: ButtonBaseProps['visualType'];
  size?: ButtonBaseProps['size'];
  className?: string;
};

export const buttonVariants = (_?: TerminalWindowButtonVariantOptions) => '';

const getVisualStyles = (visualType: string = 'default') => {
  switch (visualType) {
    case 'solid':
      return 'bg-[var(--tm-phosphor)] text-[var(--tm-bg)] border border-[var(--tm-phosphor)] hover:bg-[var(--tm-phosphor)]/90 hover:shadow-[0_0_15px_var(--tm-phosphor)]';
    case 'outline':
      return 'bg-transparent text-[var(--tm-phosphor)] border border-[var(--tm-phosphor)] hover:bg-[var(--tm-phosphor)]/10 hover:shadow-[0_0_10px_var(--tm-phosphor)]';
    case 'ghost':
      return 'bg-transparent text-[var(--tm-phosphor-dim)] hover:text-[var(--tm-phosphor)] hover:bg-[var(--tm-phosphor)]/5';
    case 'soft':
      return 'bg-[var(--tm-phosphor)]/10 text-[var(--tm-phosphor)] border border-transparent hover:bg-[var(--tm-phosphor)]/20';
    case 'link':
      return 'text-[var(--tm-phosphor)] underline-offset-4 hover:underline decoration-[var(--tm-phosphor)]';
    default: // default
      return 'bg-[var(--tm-bg)] text-[var(--tm-phosphor)] border border-[var(--tm-phosphor)] hover:bg-[var(--tm-phosphor)] hover:text-[var(--tm-bg)] transition-all duration-75';
  }
};

const getSizeStyles = (size: string = 'md') => {
  switch (size) {
    case 'sm': return 'h-8 px-3 text-xs';
    case 'lg': return 'h-12 px-8 text-lg';
    case 'icon': return 'h-10 w-10';
    default: return 'h-10 px-4 py-2 text-sm'; // md
  }
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, visualType = 'default', size = 'md', effects = 'on', loading, children, ...props }, ref) => {
    return (
      <ButtonBase
        ref={ref}
        visualType={visualType}
        size={size}
        className={cn(terminalWindowEffectsClass(effects), 
          'font-mono uppercase tracking-wider rounded-none focus-visible:ring-1 focus-visible:ring-[var(--tm-phosphor)] focus-visible:ring-offset-0 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]',
          getVisualStyles(visualType),
          getSizeStyles(size),
          className
        )}
        {...props}
      >
        {loading && <Loader2 className='mr-2 h-4 w-4 animate-spin' />}
        {children}
        {/* Blinking cursor effect for hover state could be cool, but maybe overkill here */}
      </ButtonBase>
    );
  }
);
Button.displayName = 'Button';

export { Button };
