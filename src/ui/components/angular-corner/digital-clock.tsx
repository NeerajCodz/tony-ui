import * as React from 'react';
import { cn } from '@/lib/utils';
import type { DigitalClockBaseProps } from '../_base/digital-clock';

interface DigitalClockProps extends React.HTMLAttributes<HTMLDivElement> {
    size?: 'sm' | 'md' | 'lg' | 'xl';
}

const DigitalClock = React.forwardRef<HTMLDivElement, DigitalClockProps>(
  ({ className, size = 'md', ...props }, ref) => {
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
            className={cn('font-mono font-bold tracking-widest text-[var(--ac-accent)]', sizeClasses[size], className)}
            {...props}
        >
            {time.toLocaleTimeString()}
        </div>
    );
  }
);
DigitalClock.displayName = 'DigitalClock';

export { DigitalClock };
