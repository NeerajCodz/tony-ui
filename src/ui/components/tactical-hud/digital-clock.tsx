import * as React from 'react';
import { cn } from '@/lib/utils';
import { tacticalHudEffectsClass, type TacticalHudEffects } from './_effects';

interface DigitalClockProps extends React.HTMLAttributes<HTMLDivElement> {
  effects?: TacticalHudEffects;
    size?: 'sm' | 'md' | 'lg' | 'xl';
}

const DigitalClock = React.forwardRef<HTMLDivElement, DigitalClockProps>(
  ({ className, effects = 'on', size = 'md', ...props }, ref) => {
    const [time, setTime] = React.useState(new Date());

    React.useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const sizeClasses = {
        sm: 'text-lg',
        md: 'text-2xl',
        lg: 'text-4xl',
        xl: 'text-6xl'
    };

    return (
        <div 
            ref={ref} 
            className={cn(tacticalHudEffectsClass(effects), 'font-sans font-bold tracking-widest text-[var(--th-plasma-1)]', sizeClasses[size], className)}
            {...props}
        >
            {time.toLocaleTimeString()}
        </div>
    );
  }
);
DigitalClock.displayName = 'DigitalClock';

export { DigitalClock };
