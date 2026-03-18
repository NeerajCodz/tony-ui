/**
 * Data Display Component Type Definitions
 * Table, DataTable, Avatar, Calendar, DatePicker, Chart, Carousel, AspectRatio
 */
import React from 'react';
import type { ColorType } from '../colors.d.js';

export type DataType = 'default' | 'outline' | 'solid';
export type DataVariant = 'neutral' | 'success' | 'warning' | 'info' | 'destructive' | 'primary';

/**
 * Table Props
 */
export interface TableColumn<T = any> {
  key: string;
  header: string;
  render?: (value: any, row: T) => React.ReactNode;
  width?: string;
  align?: 'left' | 'center' | 'right';
}

export interface TableProps<T = any> {
  version?: 'default' | 'striped' | 'bordered' | 'compact';
  type?: DataType;
  variant?: DataVariant;
  colorType?: ColorType;
  animated?: boolean;
  columns: TableColumn<T>[];
  data: T[];
  className?: string;
  headerClassName?: string;
  rowClassName?: string | ((row: T, index: number) => string);
  onRowClick?: (row: T, index: number) => void;
}

/**
 * Avatar Props
 */
export interface AvatarProps {
  version?: 'default' | 'square' | 'ring';
  type?: DataType;
  variant?: DataVariant;
  colorType?: ColorType;
  animated?: boolean;
  src?: string;
  alt?: string;
  fallback?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

/**
 * Calendar Props
 */
export interface CalendarProps {
  version?: 'default' | 'compact';
  type?: DataType;
  variant?: DataVariant;
  colorType?: ColorType;
  animated?: boolean;
  value?: Date;
  defaultValue?: Date;
  onChange?: (date: Date) => void;
  minDate?: Date;
  maxDate?: Date;
  className?: string;
}

/**
 * Carousel Props
 */
export interface CarouselProps {
  version?: 'default' | 'fade' | 'coverflow';
  type?: DataType;
  variant?: DataVariant;
  colorType?: ColorType;
  animated?: boolean;
  items: React.ReactNode[];
  autoPlay?: boolean;
  interval?: number;
  showDots?: boolean;
  showArrows?: boolean;
  className?: string;
}

/**
 * Aspect Ratio Props
 */
export interface AspectRatioProps {
  version?: 'default';
  ratio?: number;
  children: React.ReactNode;
  className?: string;
}
