const fs = require('fs');
const path = require('path');

const UI_PATH = path.join(__dirname, '../src/ui');
const COMPONENT_PATH = path.join(UI_PATH, 'components/carousel');

if (!fs.existsSync(COMPONENT_PATH)) {
  fs.mkdirSync(COMPONENT_PATH, { recursive: true });
}

// Carousel Clip Paths (Similar to Card)
const VERSIONS = {
  'angular-corner': {
    clip: 'polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)',
    anim: 'scale-in'
  },
  'holo-frame': {
    clip: 'polygon(0 0, 100% 0, 100% 100%, 0 100%, 0 20px, 10px 20px, 10px calc(100% - 10px), calc(100% - 10px) calc(100% - 10px), calc(100% - 10px) 10px, 20px 10px, 20px 0)',
    anim: 'holo-fade'
  },
  'data-panel': {
    clip: 'polygon(0 0, calc(100% - 30px) 0, 100% 30px, 100% 100%, 0 100%)',
    anim: 'slide-reveal'
  },
  'circuit-board': {
    clip: 'polygon(10px 0, 40px 0, 50px 10px, 80px 10px, 90px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 40px) 100%, 10px 100%, 0 calc(100% - 10px), 0 10px)',
    anim: 'glitch-in'
  },
  'quantum-gate': {
    clip: 'polygon(20px 0, calc(100% - 20px) 0, 100% 20px, 100% calc(100% - 20px), calc(100% - 20px) 100%, 20px 100%, 0 calc(100% - 20px), 0 20px)',
    anim: 'quantum-fade'
  },
  'tactical-hud': {
    clip: 'polygon(0 15px, 15px 0, 50% 0, calc(50% + 15px) 15px, calc(100% - 15px) 15px, 100% 0, 100% 100%, 0 100%)',
    anim: 'slide-reveal'
  },
  'energy-shield': {
    clip: 'polygon(5% 0, 95% 0, 100% 10%, 100% 90%, 95% 100%, 5% 100%, 0 90%, 0 10%)',
    anim: 'energy-burst'
  },
  'terminal-window': {
    clip: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', 
    anim: 'terminal-boot'
  },
  'matrix-grid': {
    clip: 'polygon(0 10px, 10px 10px, 10px 0, calc(100% - 10px) 0, calc(100% - 10px) 10px, 100% 10px, 100% calc(100% - 10px), calc(100% - 10px) calc(100% - 10px), calc(100% - 10px) 100%, 10px 100%, 10px calc(100% - 10px), 0 calc(100% - 10px))',
    anim: 'matrix-load'
  },
  'neon-outline': {
    clip: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
    anim: 'neon-flicker'
  }
};

const TEMPLATE = (version, clip, anim) => `
import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { cn } from '../../utils/component-helpers.js';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  version?: string;
  variant?: 'neutral' | 'success' | 'warning' | 'info' | 'destructive' | 'primary';
  type?: 'default' | 'outline' | 'solid';
  animated?: boolean;
  loop?: boolean;
  autoplay?: boolean;
  interval?: number;
}

const CLIP_PATH = '${clip}';

const Component = React.forwardRef<HTMLDivElement, CarouselProps>(({
  variant = 'neutral',
  type = 'default',
  animated = true,
  className = '',
  loop = true,
  autoplay = false,
  interval = 4000,
  children,
  ...props
}, ref) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    
    return () => {
        emblaApi.off('select', onSelect);
        emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (!emblaApi || !autoplay) return;
    const timer = setInterval(() => {
      emblaApi.scrollNext();
    }, interval);
    return () => clearInterval(timer);
  }, [emblaApi, autoplay, interval]);

  const colorMap: Record<string, string> = {
    neutral: 'primary', 
    success: 'success', 
    warning: 'warning', 
    info: 'info', 
    destructive: 'destructive',
    primary: 'primary'
  };
  const color = colorMap[variant] || 'primary';

  const getTypeStyles = (): React.CSSProperties => {
    switch (type) {
      case 'outline':
        return {
          backgroundColor: 'transparent',
          border: \`2px solid hsl(var(--\${color}-base))\`,
        };
      case 'solid':
        return {
          backgroundColor: \`hsl(var(--\${color}-base) / 0.15)\`,
          border: \`1px solid hsl(var(--\${color}-base) / 0.5)\`,
        };
      case 'default':
      default:
        return {
          backgroundColor: \`hsl(var(--\${color}-base) / 0.05)\`,
          backdropFilter: 'blur(8px)',
          border: \`1px solid hsl(var(--\${color}-base) / 0.3)\`,
        };
    }
  };

  return (
    <div
      ref={ref}
      className={cn(
        'relative group overflow-hidden',
        animated ? 'animate-in fade-in zoom-in-95 duration-500' : '',
        className
      )}
      style={{
        clipPath: CLIP_PATH,
        ...getTypeStyles(),
      }}
      {...props}
    >
      {/* Viewport */}
      <div className="overflow-hidden p-6" ref={emblaRef}>
        <div className="flex touch-pan-y -ml-4">
           {React.Children.map(children, (child) => (
             <div className="flex-[0_0_100%] min-w-0 pl-4">
               {child}
             </div>
           ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button 
        className={cn(
          "absolute left-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center rounded-sm transition-all",
          "text-cyan-500 hover:bg-cyan-500/20 hover:text-cyan-400 disabled:opacity-30 disabled:cursor-not-allowed",
          "border border-cyan-500/30 bg-black/50 backdrop-blur-sm"
        )}
        onClick={scrollPrev}
        disabled={!prevBtnEnabled}
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button 
        className={cn(
          "absolute right-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center rounded-sm transition-all",
          "text-cyan-500 hover:bg-cyan-500/20 hover:text-cyan-400 disabled:opacity-30 disabled:cursor-not-allowed",
          "border border-cyan-500/30 bg-black/50 backdrop-blur-sm"
        )}
        onClick={scrollNext}
        disabled={!nextBtnEnabled}
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            className={cn(
              "w-2 h-2 rounded-full transition-all duration-300",
              index === selectedIndex ? "bg-cyan-500 w-4 shadow-[0_0_10px_rgba(6,182,212,0.8)]" : "bg-gray-600 hover:bg-gray-500"
            )}
            onClick={() => scrollTo(index)}
          />
        ))}
      </div>

      {/* Glow Effect */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: \`radial-gradient(circle at center, hsl(var(--\${color}-base) / 0.1), transparent 70%)\`,
          zIndex: 0
        }}
      />

      {/* Border Lines */}
       <div className="absolute inset-0 pointer-events-none z-20">
           <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[hsl(var(--\${color}-base))] opacity-50" />
           <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[hsl(var(--\${color}-base))] opacity-50" />
       </div>
    </div>
  );
});

Component.displayName = 'Carousel-${version}';
export default Component;
`;

// Generate files
Object.entries(VERSIONS).forEach(([name, config]) => {
  const content = TEMPLATE(name, config.clip, config.anim);
  const filePath = path.join(COMPONENT_PATH, `carousel-${name}.tsx`);
  fs.writeFileSync(filePath, content);
  console.log(`Generated carousel-${name}.tsx`);
});

console.log('Carousel regeneration complete.');
