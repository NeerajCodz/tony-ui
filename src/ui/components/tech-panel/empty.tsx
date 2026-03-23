import * as React from 'react';
import { cn } from '@/lib/utils';
import { techPanelEffectsClass, type TechPanelEffects } from './_effects';
import { Ghost } from 'lucide-react';

interface EmptyProps extends React.HTMLAttributes<HTMLDivElement> {
    icon?: React.ReactNode;
    title?: string;
    description?: string;
    action?: React.ReactNode;
    effects?: TechPanelEffects;
}

const Empty = React.forwardRef<HTMLDivElement, EmptyProps>(
    ({ className, effects = 'on', icon, title, description, action, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(techPanelEffectsClass(effects), 'flex flex-col items-center justify-center p-8 text-center bg-[var(--tp-panel)] border border-[var(--tp-border-inner)] border-dashed rounded-none', className)}
                {...props}
            >
                <div className='mb-4 text-[var(--text-muted)] opacity-50'>
                    {icon || <Ghost className='w-12 h-12' />}
                </div>
                {title && (
                    <h3 className='mb-1 text-lg font-display font-semibold text-[var(--text-primary)] uppercase tracking-wide'>
                        {title}
                    </h3>
                )}
                {description && (
                    <p className='mb-6 text-sm text-[var(--text-muted)] font-mono max-w-sm'>
                        {description}
                    </p>
                )}
                {action && (
                    <div className='mt-2'>
                        {action}
                    </div>
                )}
            </div>
        );
    }
);
Empty.displayName = 'Empty';

export { Empty };
