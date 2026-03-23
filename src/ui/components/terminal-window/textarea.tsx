import * as React from 'react';
import { TextareaBase, type TextareaBaseProps } from '../_base/textarea';
import { cn } from '@/lib/utils';
import { terminalWindowEffectsClass, type TerminalWindowEffects } from './_effects';

export interface TextareaProps extends TextareaBaseProps {
  effects?: TerminalWindowEffects;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, effects = 'on', ...props }, ref) => {
    return (
      <TextareaBase
        className={cn(terminalWindowEffectsClass(effects), 
          'flex min-h-[80px] w-full rounded-none border border-[var(--tm-phosphor)]/50 bg-transparent px-3 py-2 text-sm text-[var(--tm-phosphor)] placeholder:text-[var(--tm-phosphor-dim)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--tm-phosphor)] disabled:cursor-not-allowed disabled:opacity-50 font-mono tracking-wider',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = 'Textarea';

export { Textarea };
