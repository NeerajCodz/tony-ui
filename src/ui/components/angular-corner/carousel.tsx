'use client';

import React, { forwardRef, useState, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { VariantColors } from '../../types/common';

const CLIP_PATH = 'polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)';

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

export const AngularCornerCarousel = forwardRef<HTMLDivElement, CarouselProps>(
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

    const bg = colors?.base || '#06b6d4';
    const fg = colors?.foreground || '#ffffff';
    const border = colors?.border || '#0891b2';
    const glow = colors?.glow || '#22d3ee';

    const goToNext = useCallback(() => {
      setCurrentIndex((prev) => (prev + 1) % itemCount);
    }, [itemCount]);

    const goToPrev = useCallback(() => {
      setCurrentIndex((prev) => (prev - 1 + itemCount) % itemCount);
    }, [itemCount]);

    const goToSlide = useCallback((index: number) => {
      setCurrentIndex(index);
    }, []);

    React.useEffect(() => {
      if (!autoPlay) return;
      const timer = setInterval(goToNext, interval);
      return () => clearInterval(timer);
    }, [autoPlay, interval, goToNext]);

    return (
      <div
        ref={ref}
        className={`angular-corner-carousel ${className}`}
        style={{
          ...styles,
          position: 'relative',
          width: '100%',
        }}
        {...props}
      >
        {/* Border Layer */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            clipPath: CLIP_PATH,
            backgroundColor: border,
            boxShadow: `0 0 20px ${glow}30`,
          }}
        />

        {/* Content */}
        <div
          style={{
            position: 'relative',
            clipPath: CLIP_PATH,
            margin: '1px',
            backgroundColor: '#0a0a0f',
            overflow: 'hidden',
          }}
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
                  backgroundColor: '#0a0a0f',
                  color: glow,
                  border: `1px solid ${border}`,
                  clipPath: 'polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px)',
                  width: '2.5rem',
                  height: '2.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  boxShadow: `0 0 10px ${glow}40`,
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
                  backgroundColor: '#0a0a0f',
                  color: glow,
                  border: `1px solid ${border}`,
                  clipPath: 'polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px)',
                  width: '2.5rem',
                  height: '2.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  boxShadow: `0 0 10px ${glow}40`,
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
                gap: '0.75rem',
              }}
            >
              {items.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  style={{
                    width: index === currentIndex ? '1.5rem' : '0.5rem',
                    height: '0.5rem',
                    clipPath: 'polygon(3px 0, 100% 0, 100% calc(100% - 3px), calc(100% - 3px) 100%, 0 100%, 0 3px)',
                    backgroundColor: index === currentIndex ? glow : `${border}60`,
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    boxShadow: index === currentIndex ? `0 0 8px ${glow}` : 'none',
                  }}
                />
              ))}
            </div>
          )}
        </div>

        {/* Corner Accents */}
        <div
          style={{
            position: 'absolute',
            top: '-2px',
            left: '-2px',
            width: '12px',
            height: '12px',
            borderLeft: `2px solid ${glow}`,
            borderTop: `2px solid ${glow}`,
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-2px',
            right: '-2px',
            width: '12px',
            height: '12px',
            borderRight: `2px solid ${glow}`,
            borderBottom: `2px solid ${glow}`,
          }}
        />
      </div>
    );
  }
);

AngularCornerCarousel.displayName = 'AngularCornerCarousel';

export default AngularCornerCarousel;
