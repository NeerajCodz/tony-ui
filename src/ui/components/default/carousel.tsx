'use client';

import React, { forwardRef, useState, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { VariantColors } from '../../types/common';

export interface CarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  version?: string;
  variant?: string;
  type?: string;
  size?: string;
  colors?: VariantColors;
  styles?: React.CSSProperties;
  config?: any;
  autoPlay?: boolean;
  interval?: number;
  showDots?: boolean;
  showArrows?: boolean;
}

export const DefaultCarousel = forwardRef<HTMLDivElement, CarouselProps>(
  ({ 
    children,
    styles = {}, 
    colors,
    className = '',
    autoPlay = false,
    interval = 3000,
    showDots = true,
    showArrows = true,
    ...props 
  }, ref) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const items = React.Children.toArray(children);
    const itemCount = items.length;

    const bg = colors?.base || '#64748b';
    const fg = colors?.foreground || '#ffffff';
    const border = colors?.border || '#475569';

    const goToNext = useCallback(() => {
      setCurrentIndex((prev) => (prev + 1) % itemCount);
    }, [itemCount]);

    const goToPrev = useCallback(() => {
      setCurrentIndex((prev) => (prev - 1 + itemCount) % itemCount);
    }, [itemCount]);

    const goToSlide = useCallback((index: number) => {
      setCurrentIndex(index);
    }, []);

    // Auto play
    React.useEffect(() => {
      if (!autoPlay) return;
      const timer = setInterval(goToNext, interval);
      return () => clearInterval(timer);
    }, [autoPlay, interval, goToNext]);

    return (
      <div
        ref={ref}
        className={`default-carousel ${className}`}
        style={{
          ...styles,
          position: 'relative',
          width: '100%',
          overflow: 'hidden',
          borderRadius: '0.5rem',
          border: `1px solid ${border}`,
        }}
        {...props}
      >
        {/* Slides */}
        <div
          style={{
            display: 'flex',
            transition: 'transform 0.3s ease-in-out',
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {items.map((child, index) => (
            <div
              key={index}
              style={{
                minWidth: '100%',
                flexShrink: 0,
              }}
            >
              {child}
            </div>
          ))}
        </div>

        {/* Arrows */}
        {showArrows && itemCount > 1 && (
          <>
            <button
              onClick={goToPrev}
              style={{
                position: 'absolute',
                left: '0.5rem',
                top: '50%',
                transform: 'translateY(-50%)',
                backgroundColor: `${bg}80`,
                color: fg,
                border: 'none',
                borderRadius: '50%',
                width: '2.5rem',
                height: '2.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={goToNext}
              style={{
                position: 'absolute',
                right: '0.5rem',
                top: '50%',
                transform: 'translateY(-50%)',
                backgroundColor: `${bg}80`,
                color: fg,
                border: 'none',
                borderRadius: '50%',
                width: '2.5rem',
                height: '2.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
            >
              <ChevronRight size={20} />
            </button>
          </>
        )}

        {/* Dots */}
        {showDots && itemCount > 1 && (
          <div
            style={{
              position: 'absolute',
              bottom: '1rem',
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              gap: '0.5rem',
            }}
          >
            {items.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                style={{
                  width: '0.5rem',
                  height: '0.5rem',
                  borderRadius: '50%',
                  backgroundColor: index === currentIndex ? bg : `${border}60`,
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
              />
            ))}
          </div>
        )}
      </div>
    );
  }
);

DefaultCarousel.displayName = 'DefaultCarousel';

export default DefaultCarousel;
