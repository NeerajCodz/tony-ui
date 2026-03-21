import React, { Suspense, useMemo } from 'react';
import type { Size, StyleComponentType, Variant, Version } from '../types/common';

type RendererPropsMap = Record<string, unknown>;
type ErrorFallback = React.ReactNode | ((error: Error) => React.ReactNode);

export interface RendererSystemProps {
  version?: Version;
  variant?: Variant;
  type?: StyleComponentType;
  size?: Size;
  animated?: boolean;
}

export type RendererComponent<TProps extends RendererPropsMap = RendererPropsMap> =
  | React.ComponentType<TProps>
  | keyof React.JSX.IntrinsicElements;

export interface RendererContext<TProps extends RendererPropsMap = RendererPropsMap> {
  Component: RendererComponent<TProps>;
  props: TProps;
  domSafeProps: Partial<TProps>;
  children?: React.ReactNode;
}

export interface ComponentRendererInput<TProps extends RendererPropsMap = RendererPropsMap> {
  component: RendererComponent<TProps>;
  props?: TProps;
  children?: React.ReactNode;
  render?: (context: RendererContext<TProps>) => React.ReactNode;
  wrapInSuspense?: boolean;
  suspenseFallback?: React.ReactNode;
  errorFallback?: ErrorFallback;
  filterDomProps?: boolean;
}

export const DEFAULT_RENDERER_SUSPENSE_FALLBACK = (
  <div className="text-xs opacity-70">Loading preview…</div>
);

export const DEFAULT_RENDERER_ERROR_FALLBACK = (
  <div className="rounded border border-amber-500/30 p-3 text-xs text-amber-300">Preview unavailable</div>
);

const NON_DOM_PROPS = new Set([
  'animated',
  'colors',
  'component',
  'config',
  'key',
  'render',
  'size',
  'skeleton',
  'styles',
  'type',
  'variant',
  'version',
]);

function normalizeRendererProps<TProps extends RendererPropsMap>(props?: TProps): TProps {
  if (!props) {
    return {} as TProps;
  }

  const normalized: Partial<TProps> = {};
  for (const [key, value] of Object.entries(props)) {
    if (value !== undefined) {
      normalized[key as keyof TProps] = value as TProps[keyof TProps];
    }
  }
  return normalized as TProps;
}

export function filterNonDOMProps<TProps extends RendererPropsMap>(props: TProps): Partial<TProps> {
  const filtered: Partial<TProps> = {};

  for (const [key, value] of Object.entries(props)) {
    if (value === undefined || NON_DOM_PROPS.has(key)) {
      continue;
    }
    filtered[key as keyof TProps] = value as TProps[keyof TProps];
  }

  return filtered;
}

interface RendererErrorBoundaryProps {
  children: React.ReactNode;
  fallback: ErrorFallback;
}

interface RendererErrorBoundaryState {
  error: Error | null;
}

class RendererErrorBoundary extends React.Component<RendererErrorBoundaryProps, RendererErrorBoundaryState> {
  state: RendererErrorBoundaryState = { error: null };

  static getDerivedStateFromError(error: Error): RendererErrorBoundaryState {
    return { error };
  }

  componentDidUpdate(prevProps: Readonly<RendererErrorBoundaryProps>) {
    if (prevProps.children !== this.props.children && this.state.error) {
      this.setState({ error: null });
    }
  }

  render() {
    if (!this.state.error) {
      return this.props.children;
    }

    const { fallback } = this.props;
    if (typeof fallback === 'function') {
      return fallback(this.state.error);
    }
    return fallback;
  }
}

function ComponentRendererImpl<TProps extends RendererPropsMap = RendererPropsMap>({
  component,
  props,
  children,
  render,
  wrapInSuspense = false,
  suspenseFallback = DEFAULT_RENDERER_SUSPENSE_FALLBACK,
  errorFallback = DEFAULT_RENDERER_ERROR_FALLBACK,
  filterDomProps = true,
}: ComponentRendererInput<TProps>) {
  const normalizedProps = useMemo(() => normalizeRendererProps(props), [props]);
  const domSafeProps = useMemo(
    () => (filterDomProps ? filterNonDOMProps(normalizedProps) : normalizedProps),
    [filterDomProps, normalizedProps]
  );

  const content = useMemo(() => {
    if (render) {
      return render({
        Component: component,
        props: normalizedProps,
        domSafeProps,
        children,
      });
    }

    const shouldFilter = typeof component === 'string' && filterDomProps;
    const renderProps = (shouldFilter ? domSafeProps : normalizedProps) as RendererPropsMap;
    return React.createElement(component as React.ElementType, renderProps, children);
  }, [children, component, domSafeProps, filterDomProps, normalizedProps, render]);

  const wrapped = wrapInSuspense ? <Suspense fallback={suspenseFallback}>{content}</Suspense> : content;
  return <RendererErrorBoundary fallback={errorFallback}>{wrapped}</RendererErrorBoundary>;
}

function areRendererInputsEqual<TProps extends RendererPropsMap>(
  previous: Readonly<ComponentRendererInput<TProps>>,
  next: Readonly<ComponentRendererInput<TProps>>
) {
  return (
    previous.component === next.component &&
    previous.props === next.props &&
    previous.children === next.children &&
    previous.render === next.render &&
    previous.wrapInSuspense === next.wrapInSuspense &&
    previous.suspenseFallback === next.suspenseFallback &&
    previous.errorFallback === next.errorFallback &&
    previous.filterDomProps === next.filterDomProps
  );
}

export const ComponentRenderer = React.memo(ComponentRendererImpl, areRendererInputsEqual) as typeof ComponentRendererImpl;

export default ComponentRenderer;
