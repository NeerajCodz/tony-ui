import * as React from 'react';

export const CircuitBoardDecor = () => {
  return (
    <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]">
      {/* Corner dots */}
      <span className="absolute left-0 top-0 h-1 w-1 rounded-full bg-[var(--cb-node,theme(colors.emerald.500))]" />
      <span className="absolute right-0 top-0 h-1 w-1 rounded-full bg-[var(--cb-node,theme(colors.emerald.500))]" />
      <span className="absolute bottom-0 left-0 h-1 w-1 rounded-full bg-[var(--cb-node,theme(colors.emerald.500))]" />
      <span className="absolute bottom-0 right-0 h-1 w-1 rounded-full bg-[var(--cb-node,theme(colors.emerald.500))]" />

      {/* Traces from midpoints */}
      <span className="absolute left-1/2 top-0 h-2 w-[1px] -translate-x-1/2 -translate-y-1/2 bg-[var(--cb-trace,theme(colors.emerald.800))]" />
      <span className="absolute bottom-0 left-1/2 h-2 w-[1px] -translate-x-1/2 translate-y-1/2 bg-[var(--cb-trace,theme(colors.emerald.800))]" />
      <span className="absolute left-0 top-1/2 h-[1px] w-2 -translate-x-1/2 -translate-y-1/2 bg-[var(--cb-trace,theme(colors.emerald.800))]" />
      <span className="absolute right-0 top-1/2 h-[1px] w-2 translate-x-1/2 -translate-y-1/2 bg-[var(--cb-trace,theme(colors.emerald.800))]" />
    </span>
  );
};
