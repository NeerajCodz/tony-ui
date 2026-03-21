import { useMemo, useState } from 'react';
import { Play, Square, Settings2 } from 'lucide-react';
import { VARIANT_OPTIONS } from '../ui/config/variants';
import { cn } from '../lib/cn';

export const SHOWCASE_TYPE_OPTIONS = [
  'default',
  'solid',
  'outline',
  'ghost',
  'inverse',
  'contrast',
  'soft',
] as const;

export type ShowcaseControlType = (typeof SHOWCASE_TYPE_OPTIONS)[number];
export type ShowcaseControlVariant = (typeof VARIANT_OPTIONS)[number];

export interface ShowcaseControlState<TExtras extends Record<string, unknown> = Record<string, never>> {
  type: ShowcaseControlType;
  variant: ShowcaseControlVariant;
  extras: TExtras;
}

export type ShowcaseControlChangeHandler<TExtras extends Record<string, unknown> = Record<string, never>> = (
  nextState: ShowcaseControlState<TExtras>
) => void;

interface ShowcaseExtraControlBase<TExtras extends Record<string, unknown>> {
  key: Extract<keyof TExtras, string>;
  label: string;
  description?: string;
}

export interface ShowcaseSelectControl<TExtras extends Record<string, unknown>>
  extends ShowcaseExtraControlBase<TExtras> {
  kind: 'select';
  options: ReadonlyArray<{ label: string; value: string }>;
  defaultValue?: string;
}

export interface ShowcaseNumberControl<TExtras extends Record<string, unknown>>
  extends ShowcaseExtraControlBase<TExtras> {
  kind: 'number' | 'range';
  min?: number;
  max?: number;
  step?: number;
  defaultValue?: number;
}

export interface ShowcaseToggleControl<TExtras extends Record<string, unknown>>
  extends ShowcaseExtraControlBase<TExtras> {
  kind: 'toggle';
  defaultValue?: boolean;
}

export type ShowcaseExtraControl<TExtras extends Record<string, unknown>> =
  | ShowcaseSelectControl<TExtras>
  | ShowcaseNumberControl<TExtras>
  | ShowcaseToggleControl<TExtras>;

export interface ShowcaseControlsProps<TExtras extends Record<string, unknown> = Record<string, never>> {
  className?: string;
  value?: ShowcaseControlState<TExtras>;
  defaultValue?: Partial<ShowcaseControlState<TExtras>>;
  onChange?: ShowcaseControlChangeHandler<TExtras>;
  onTypeChange?: (type: ShowcaseControlType) => void;
  onVariantChange?: (variant: ShowcaseControlVariant) => void;
  extraControls?: ReadonlyArray<ShowcaseExtraControl<TExtras>>;
  onExtraChange?: <K extends Extract<keyof TExtras, string>>(key: K, value: TExtras[K]) => void;
  onAnimateIn?: () => void;
  onAnimateOut?: () => void;
  animateInLabel?: string;
  animateOutLabel?: string;
}

const DEFAULT_BASE_STATE: ShowcaseControlState<Record<string, never>> = {
  type: 'default',
  variant: 'default',
  extras: {},
};

function resolveDefaultExtras<TExtras extends Record<string, unknown>>(
  controls: ReadonlyArray<ShowcaseExtraControl<TExtras>>
): Partial<TExtras> {
  const defaults: Partial<TExtras> = {};

  for (const control of controls) {
    if (control.defaultValue !== undefined) {
      defaults[control.key] = control.defaultValue as TExtras[Extract<keyof TExtras, string>];
    }
  }

  return defaults;
}

function ControlField({ label, description, children }: { label: string; description?: string; children: React.ReactNode }) {
  return (
    <label className="flex min-w-[10rem] flex-1 flex-col gap-1 text-xs text-muted-foreground">
      <span className="font-medium text-foreground">{label}</span>
      {children}
      {description ? <span className="text-[11px] text-muted-foreground/80">{description}</span> : null}
    </label>
  );
}

export function ShowcaseControls<TExtras extends Record<string, unknown> = Record<string, never>>({
  className,
  value,
  defaultValue,
  onChange,
  onTypeChange,
  onVariantChange,
  extraControls = [],
  onExtraChange,
  onAnimateIn,
  onAnimateOut,
  animateInLabel = 'Animate in',
  animateOutLabel = 'Animate out',
}: ShowcaseControlsProps<TExtras>) {
  const schemaDefaults = useMemo(() => resolveDefaultExtras(extraControls), [extraControls]);

  const [internalState, setInternalState] = useState<ShowcaseControlState<TExtras>>({
    type: defaultValue?.type ?? DEFAULT_BASE_STATE.type,
    variant: defaultValue?.variant ?? DEFAULT_BASE_STATE.variant,
    extras: {
      ...(schemaDefaults as TExtras),
      ...(defaultValue?.extras ?? ({} as TExtras)),
    },
  });

  const state = value ?? internalState;

  const emit = (next: ShowcaseControlState<TExtras>) => {
    if (!value) {
      setInternalState(next);
    }

    onChange?.(next);
  };

  const updateType = (nextType: ShowcaseControlType) => {
    const nextState = { ...state, type: nextType };
    emit(nextState);
    onTypeChange?.(nextType);
  };

  const updateVariant = (nextVariant: ShowcaseControlVariant) => {
    const nextState = { ...state, variant: nextVariant };
    emit(nextState);
    onVariantChange?.(nextVariant);
  };

  const updateExtra = <K extends Extract<keyof TExtras, string>>(key: K, nextValue: TExtras[K]) => {
    const nextState: ShowcaseControlState<TExtras> = {
      ...state,
      extras: {
        ...state.extras,
        [key]: nextValue,
      },
    };

    emit(nextState);
    onExtraChange?.(key, nextValue);
  };

  return (
    <section
      className={cn(
        'sticky top-0 z-40 w-full border-b border-border bg-background/85 px-4 py-3 backdrop-blur-md',
        className
      )}
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-3">
        <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
          <Settings2 className="h-4 w-4" />
          <span>Showcase controls</span>
        </div>

        <div className="flex flex-wrap items-end gap-3">
          <ControlField label="Type">
            <select
              value={state.type}
              onChange={(event) => updateType(event.target.value as ShowcaseControlType)}
              className="h-9 rounded-md border border-input bg-background px-3 text-sm shadow-sm outline-none ring-0 transition-colors focus-visible:ring-2 focus-visible:ring-ring"
            >
              {SHOWCASE_TYPE_OPTIONS.map((typeOption) => (
                <option key={typeOption} value={typeOption}>
                  {typeOption}
                </option>
              ))}
            </select>
          </ControlField>

          <ControlField label="Variant">
            <select
              value={state.variant}
              onChange={(event) => updateVariant(event.target.value as ShowcaseControlVariant)}
              className="h-9 rounded-md border border-input bg-background px-3 text-sm shadow-sm outline-none ring-0 transition-colors focus-visible:ring-2 focus-visible:ring-ring"
            >
              {VARIANT_OPTIONS.map((variantOption) => (
                <option key={variantOption} value={variantOption}>
                  {variantOption}
                </option>
              ))}
            </select>
          </ControlField>

          {extraControls.map((control) => {
            const controlValue = state.extras[control.key];

            if (control.kind === 'select') {
              return (
                <ControlField key={control.key} label={control.label} description={control.description}>
                  <select
                    value={String(controlValue ?? control.defaultValue ?? '')}
                    onChange={(event) => updateExtra(control.key, event.target.value as TExtras[typeof control.key])}
                    className="h-9 rounded-md border border-input bg-background px-3 text-sm shadow-sm outline-none ring-0 transition-colors focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    {control.options.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </ControlField>
              );
            }

            if (control.kind === 'toggle') {
              return (
                <ControlField key={control.key} label={control.label} description={control.description}>
                  <label className="inline-flex h-9 items-center gap-2 rounded-md border border-input px-3 text-sm text-foreground">
                    <input
                      type="checkbox"
                      checked={Boolean(controlValue)}
                      onChange={(event) => updateExtra(control.key, event.target.checked as TExtras[typeof control.key])}
                      className="h-4 w-4 rounded border-primary"
                    />
                    <span>{Boolean(controlValue) ? 'Enabled' : 'Disabled'}</span>
                  </label>
                </ControlField>
              );
            }

            const isRange = control.kind === 'range';
            return (
              <ControlField key={control.key} label={control.label} description={control.description}>
                <div className="flex h-9 items-center gap-2">
                  <input
                    type={isRange ? 'range' : 'number'}
                    min={control.min}
                    max={control.max}
                    step={control.step}
                    value={Number(controlValue ?? control.defaultValue ?? 0)}
                    onChange={(event) => updateExtra(control.key, Number(event.target.value) as TExtras[typeof control.key])}
                    className={cn(
                      'h-9 rounded-md border border-input bg-background px-3 text-sm shadow-sm outline-none ring-0 transition-colors focus-visible:ring-2 focus-visible:ring-ring',
                      isRange ? 'w-36 px-0' : 'w-24'
                    )}
                  />
                  {isRange ? <span className="min-w-8 text-xs text-muted-foreground">{Number(controlValue ?? 0)}</span> : null}
                </div>
              </ControlField>
            );
          })}

          {(onAnimateIn || onAnimateOut) && (
            <div className="ml-auto flex items-center gap-2 self-stretch sm:self-end">
              {onAnimateIn ? (
                <button
                  type="button"
                  onClick={onAnimateIn}
                  className="inline-flex h-9 items-center gap-1 rounded-md border border-input px-3 text-sm text-foreground transition-colors hover:bg-muted"
                >
                  <Play className="h-4 w-4" />
                  {animateInLabel}
                </button>
              ) : null}
              {onAnimateOut ? (
                <button
                  type="button"
                  onClick={onAnimateOut}
                  className="inline-flex h-9 items-center gap-1 rounded-md border border-input px-3 text-sm text-foreground transition-colors hover:bg-muted"
                >
                  <Square className="h-4 w-4" />
                  {animateOutLabel}
                </button>
              ) : null}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
