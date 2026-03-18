/**
 * Feedback Component Type Definitions
 * Alert, Badge, Toast, Progress, Spinner, Skeleton, Empty
 */
import React from 'react';
import type { ColorType } from '../colors.d.js';

export type FeedbackType = 'default' | 'outline' | 'solid';
export type FeedbackVariant = 'neutral' | 'success' | 'warning' | 'info' | 'destructive' | 'primary';

/**
 * Alert Props
 */
export interface AlertProps {
  version?: 'default' | 'filled' | 'outlined' | 'accent';
  type?: FeedbackType;
  variant?: FeedbackVariant;
  colorType?: ColorType;
  animated?: boolean;
  title?: string;
  children?: React.ReactNode;
  onClose?: () => void;
  closable?: boolean;
  className?: string;
  icon?: React.ReactNode;
}

/**
 * Badge Props
 */
export interface BadgeProps {
  version?: 'default' | 'pill' | 'dot' | 'outline';
  type?: FeedbackType;
  variant?: FeedbackVariant;
  colorType?: ColorType;
  animated?: boolean;
  children?: React.ReactNode;
  className?: string;
}

/**
 * Toast Props
 */
export interface ToastProps {
  version?: 'default' | 'compact' | 'expanded';
  type?: FeedbackType;
  variant?: FeedbackVariant;
  colorType?: ColorType;
  animated?: boolean;
  title?: string;
  description?: string;
  onClose?: () => void;
  duration?: number;
  className?: string;
  action?: React.ReactNode;
}

/**
 * Progress Props
 */
export interface ProgressProps {
  version?: 'default' | 'circle' | 'gradient';
  type?: FeedbackType;
  variant?: FeedbackVariant;
  colorType?: ColorType;
  animated?: boolean;
  value?: number;
  max?: number;
  showLabel?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

/**
 * Spinner Props
 */
export interface SpinnerProps {
  version?: 'default' | 'dots' | 'bars' | 'pulse';
  variant?: FeedbackVariant;
  colorType?: ColorType;
  animated?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  label?: string;
}

/**
 * Skeleton Props
 */
export interface SkeletonProps {
  version?: 'default' | 'circle' | 'card';
  variant?: FeedbackVariant;
  colorType?: ColorType;
  animated?: boolean;
  width?: string | number;
  height?: string | number;
  className?: string;
  count?: number;
}

/**
 * Empty Props
 */
export interface EmptyProps {
  version?: 'default' | 'compact' | 'illustrated';
  variant?: FeedbackVariant;
  colorType?: ColorType;
  animated?: boolean;
  title?: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
}
