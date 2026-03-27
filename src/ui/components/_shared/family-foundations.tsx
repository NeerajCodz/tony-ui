'use client';

import { Check, ChevronDown, ChevronUp, Dot, X } from 'lucide-react';
import * as React from 'react';
import type { VariantColors } from '../../types/common';
import { AccordionBase, AccordionContentBase, AccordionHeaderBase, AccordionItemBase, AccordionTriggerBase } from '../_base/accordion';
import { AnalogClockBase } from '../_base/analog-clock';
import { AvatarBase, AvatarFallbackBase, AvatarImageBase } from '../_base/avatar';
import { CarouselBase, CarouselContentBase, CarouselItemBase, CarouselNextBase, CarouselPreviousBase } from '../_base/carousel';
import { DatePickerBase } from '../_base/date-picker';
import { DigitalClockBase } from '../_base/digital-clock';
import { DrawerContentBase, DrawerDescriptionBase, DrawerOverlayBase, DrawerTitleBase } from '../_base/drawer';
import { IconButtonBase } from '../_base/icon-button';
import { InputOTPBase, InputOTPGroupBase, InputOTPSeparatorBase, InputOTPSlotBase } from '../_base/input-otp';
import { ScrollAreaBase, ScrollAreaCornerBase, ScrollAreaViewportBase, ScrollBarBase, ScrollBarThumbBase } from '../_base/scroll-area';
import { SelectBase, SelectContentBase, SelectGroupBase, SelectItemBase, SelectItemIndicatorBase, SelectItemTextBase, SelectLabelBase, SelectScrollDownButtonBase, SelectScrollUpButtonBase, SelectSeparatorBase, SelectTriggerBase, SelectValueBase, SelectViewportBase } from '../_base/select';
import { SheetBase, SheetCloseBase, SheetContentBase, SheetDescriptionBase, SheetFooterBase, SheetHeaderBase, SheetOverlayBase, SheetPortalBase, SheetTitleBase, SheetTriggerBase } from '../_base/sheet';
import { SwitchBase, SwitchThumbBase } from '../_base/switch';
import { TableBase, TableBodyBase, TableCaptionBase, TableCellBase, TableFooterBase, TableHeadBase, TableHeaderBase, TableRowBase } from '../_base/table';
import { TabsBase, TabsContentBase, TabsListBase, TabsTriggerBase } from '../_base/tabs';
import { ToastActionBase, ToastBase, ToastCloseBase, ToastDescriptionBase, ToastProviderBase, ToastTitleBase, ToastViewportBase } from '../_base/toast';
import { ToggleBase } from '../_base/toggle';
import { ToggleGroupBase, ToggleGroupItemBase } from '../_base/toggle-group';
import { TooltipBase, TooltipContentBase, TooltipProviderBase, TooltipTriggerBase } from '../_base/tooltip';
import { getCoreTypeStyles, getSpinnerVisual, getTypographyTone, getVersionStyleProfile, normalizeColors } from './version-styles';

type VisualType = string | undefined;

interface StyledProps {
  version?: string;
  variant?: string;
  type?: VisualType;
  uiType?: VisualType;
  colors?: VariantColors;
  className?: string;
  style?: React.CSSProperties;
}

const shapeClipPaths: Record<string, string | undefined> = {
  clipped: 'polygon(8% 0, 100% 0, 100% 92%, 92% 100%, 0 100%, 0 8%)',
  hex: 'polygon(25% 8%, 75% 8%, 96% 50%, 75% 92%, 25% 92%, 4% 50%)',
  bracket: 'polygon(0 0, 92% 0, 100% 8%, 100% 100%, 8% 100%, 0 92%)',
  tab: 'polygon(0 8px, 8px 0, 100% 0, 100% 100%, 0 100%)',
};

function cx(...parts: Array<string | undefined | null | false>) {
  return parts.filter(Boolean).join(' ');
}

function resolveVisualType(type?: VisualType, uiType?: VisualType) {
  return uiType ?? type ?? 'default';
}

function getSurfaceStyle(
  versionKey: string,
  version: string | undefined,
  type: VisualType,
  colors: VariantColors | undefined,
  style: React.CSSProperties | undefined,
  options?: {
    borderless?: boolean;
    rounded?: boolean;
    disableClip?: boolean;
    disableGlow?: boolean;
  }
): React.CSSProperties {
  const profile = getVersionStyleProfile(version ?? versionKey);
  const palette = normalizeColors(colors);
  const visualType = resolveVisualType(type);
  const core = getCoreTypeStyles(visualType, colors);
  const existingShadow = typeof core.boxShadow === 'string' ? core.boxShadow : undefined;
  const glowShadow =
    !options?.disableGlow && profile.hasGlow && visualType !== 'ghost'
      ? `0 0 12px ${palette.glow}`
      : undefined;
  const boxShadow = [existingShadow, glowShadow].filter(Boolean).join(', ') || undefined;

  return {
    ...core,
    color: (core.color as string | undefined) ?? palette.foreground,
    borderColor: options?.borderless ? 'transparent' : palette.border,
    borderStyle: options?.borderless ? 'none' : 'solid',
    borderWidth: options?.borderless ? 0 : profile.borderWidth,
    borderRadius: options?.rounded === false ? '0px' : profile.radius,
    fontFamily: profile.fontFamily,
    letterSpacing: profile.letterSpacing,
    textTransform: profile.casing === 'uppercase' ? 'uppercase' : undefined,
    clipPath: options?.disableClip ? undefined : shapeClipPaths[profile.shape],
    boxShadow,
    ...style,
  };
}

function formatDateForInput(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function parseDateFromInput(value: string): Date | undefined {
  if (!value) return undefined;
  const [year, month, day] = value.split('-').map(Number);
  if (!year || !month || !day) return undefined;
  const parsed = new Date(year, month - 1, day);
  return Number.isNaN(parsed.getTime()) ? undefined : parsed;
}

function normalizeOtp(value: string, maxLength: number) {
  return value.replace(/\D/g, '').slice(0, maxLength);
}

const avatarSizeMap: Record<string, number> = {
  xs: 24,
  sm: 32,
  md: 40,
  lg: 48,
  xl: 64,
  '2xl': 80,
};

const iconButtonSizeMap: Record<string, number> = {
  sm: 28,
  md: 36,
  lg: 44,
  xl: 52,
};

export function createAccordionFoundation(versionKey: string) {
  type AccordionRootProps = React.ComponentPropsWithoutRef<typeof AccordionBase> & {
    className?: string;
  };
  type AccordionItemProps = React.ComponentPropsWithoutRef<typeof AccordionItemBase> & StyledProps;
  type AccordionTriggerProps = Omit<React.ComponentPropsWithoutRef<typeof AccordionTriggerBase>, 'type'> &
    StyledProps & {
      htmlType?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
    };
  type AccordionContentProps = React.ComponentPropsWithoutRef<typeof AccordionContentBase> & StyledProps;

  const Accordion = React.forwardRef<React.ComponentRef<typeof AccordionBase>, AccordionRootProps>(
    ({ className: _className, ...props }, ref) => <AccordionBase ref={ref} {...props} />
  );
  Accordion.displayName = 'Accordion';

  const AccordionItem = React.forwardRef<React.ComponentRef<typeof AccordionItemBase>, AccordionItemProps>(
    ({ className, version, type, uiType, colors, style, ...props }, ref) => (
      <AccordionItemBase
        ref={ref}
        className={cx('overflow-hidden', className)}
        style={getSurfaceStyle(versionKey, version, resolveVisualType(type, uiType), colors, style)}
        {...props}
      />
    )
  );
  AccordionItem.displayName = 'AccordionItem';

  const AccordionTrigger = React.forwardRef<React.ComponentRef<typeof AccordionTriggerBase>, AccordionTriggerProps>(
    ({ className, children, version, type, uiType, colors, style, htmlType = 'button', ...props }, ref) => {
      const visualType = resolveVisualType(type, uiType);
      const palette = normalizeColors(colors);

      return (
        <AccordionHeaderBase className="flex">
          <AccordionTriggerBase
            ref={ref}
            type={htmlType}
            className={cx(
              'flex w-full items-center justify-between px-4 py-3 text-sm transition-colors [&[data-state=open]>svg]:rotate-180',
              className
            )}
            style={{
              ...getSurfaceStyle(versionKey, version, visualType, colors, style, {
                borderless: true,
                disableClip: true,
                disableGlow: true,
              }),
              color: palette.foreground,
            }}
            {...props}
          >
            <span className="truncate">{children}</span>
            <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
          </AccordionTriggerBase>
        </AccordionHeaderBase>
      );
    }
  );
  AccordionTrigger.displayName = 'AccordionTrigger';

  const AccordionContent = React.forwardRef<React.ComponentRef<typeof AccordionContentBase>, AccordionContentProps>(
    ({ className, version, type, uiType, colors, style, children, ...props }, ref) => {
      const palette = normalizeColors(colors);
      return (
        <AccordionContentBase
          ref={ref}
          className={cx(
            'overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down',
            className
          )}
          style={{
            ...getSurfaceStyle(versionKey, version, resolveVisualType(type, uiType), colors, style, {
              borderless: true,
              disableClip: true,
              disableGlow: true,
            }),
            borderTop: `1px solid ${palette.border}`,
          }}
          {...props}
        >
          <div className="px-4 pb-4 pt-2">{children}</div>
        </AccordionContentBase>
      );
    }
  );
  AccordionContent.displayName = 'AccordionContent';

  return {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
    Item: AccordionItem,
    Trigger: AccordionTrigger,
    Content: AccordionContent,
  };
}

export function createAvatarFoundation(versionKey: string) {
  type AvatarProps = React.ComponentPropsWithoutRef<typeof AvatarBase> &
    StyledProps & {
      size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
    };
  type AvatarImageProps = React.ComponentPropsWithoutRef<typeof AvatarImageBase> & StyledProps;
  type AvatarFallbackProps = React.ComponentPropsWithoutRef<typeof AvatarFallbackBase> & StyledProps;

  const Avatar = React.forwardRef<React.ComponentRef<typeof AvatarBase>, AvatarProps>(
    ({ className, version, type, uiType, colors, style, size = 'md', children, ...props }, ref) => {
      const side = avatarSizeMap[size] ?? avatarSizeMap.md;
      return (
        <AvatarBase
          ref={ref}
          className={cx('relative inline-flex shrink-0 items-center justify-center overflow-hidden', className)}
          style={{
            ...getSurfaceStyle(versionKey, version, resolveVisualType(type, uiType), colors, style),
            width: side,
            height: side,
            borderRadius: '9999px',
          }}
          {...props}
        >
          {children}
        </AvatarBase>
      );
    }
  );
  Avatar.displayName = 'Avatar';

  const AvatarImage = React.forwardRef<React.ComponentRef<typeof AvatarImageBase>, AvatarImageProps>(
    ({ className, ...props }, ref) => <AvatarImageBase ref={ref} className={cx('h-full w-full object-cover', className)} {...props} />
  );
  AvatarImage.displayName = 'AvatarImage';

  const AvatarFallback = React.forwardRef<React.ComponentRef<typeof AvatarFallbackBase>, AvatarFallbackProps>(
    ({ className, version, type, uiType, colors, style, ...props }, ref) => (
      <AvatarFallbackBase
        ref={ref}
        className={cx('flex h-full w-full items-center justify-center text-xs font-semibold', className)}
        style={getSurfaceStyle(versionKey, version, resolveVisualType(type, uiType), colors, style)}
        {...props}
      />
    )
  );
  AvatarFallback.displayName = 'AvatarFallback';

  return {
    Avatar,
    AvatarRoot: Avatar,
    AvatarImage,
    AvatarFallback,
  };
}

export function createCarouselFoundation(versionKey: string) {
  type CarouselRootProps = React.ComponentPropsWithoutRef<typeof CarouselBase> & StyledProps;
  type CarouselContentProps = React.ComponentPropsWithoutRef<typeof CarouselContentBase> & StyledProps;
  type CarouselItemProps = React.ComponentPropsWithoutRef<typeof CarouselItemBase> & StyledProps;
  type CarouselPreviousProps = Omit<React.ComponentPropsWithoutRef<typeof CarouselPreviousBase>, 'type'> &
    StyledProps & {
      htmlType?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
    };
  type CarouselNextProps = Omit<React.ComponentPropsWithoutRef<typeof CarouselNextBase>, 'type'> &
    StyledProps & {
      htmlType?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
    };

  const CarouselRoot = React.forwardRef<React.ComponentRef<typeof CarouselBase>, CarouselRootProps>(
    ({ className, version, type, uiType, colors, style, ...props }, ref) => (
      <CarouselBase
        ref={ref}
        className={cx('relative w-full', className)}
        style={getSurfaceStyle(versionKey, version, resolveVisualType(type, uiType), colors, style)}
        {...props}
      />
    )
  );
  CarouselRoot.displayName = 'Carousel';

  const CarouselContent = React.forwardRef<React.ComponentRef<typeof CarouselContentBase>, CarouselContentProps>(
    ({ className, version, type, uiType, colors, style, ...props }, ref) => (
      <CarouselContentBase
        ref={ref}
        className={cx('flex gap-4', className)}
        style={getSurfaceStyle(versionKey, version, resolveVisualType(type, uiType), colors, style, {
          borderless: true,
          disableClip: true,
          disableGlow: true,
        })}
        {...props}
      />
    )
  );
  CarouselContent.displayName = 'CarouselContent';

  const CarouselItem = React.forwardRef<React.ComponentRef<typeof CarouselItemBase>, CarouselItemProps>(
    ({ className, version, type, uiType, colors, style, ...props }, ref) => (
      <CarouselItemBase
        ref={ref}
        className={cx('min-w-0 shrink-0 grow-0 basis-full', className)}
        style={getSurfaceStyle(versionKey, version, resolveVisualType(type, uiType), colors, style)}
        {...props}
      />
    )
  );
  CarouselItem.displayName = 'CarouselItem';

  const CarouselPrevious = React.forwardRef<React.ComponentRef<typeof CarouselPreviousBase>, CarouselPreviousProps>(
    ({ className, version, type, uiType, colors, style, htmlType = 'button', children, ...props }, ref) => (
      <CarouselPreviousBase
        ref={ref}
        type={htmlType}
        className={cx('inline-flex h-9 w-9 items-center justify-center', className)}
        style={getSurfaceStyle(versionKey, version, resolveVisualType(type, uiType), colors, style)}
        {...props}
      >
        {children ?? <span aria-hidden>‹</span>}
      </CarouselPreviousBase>
    )
  );
  CarouselPrevious.displayName = 'CarouselPrevious';

  const CarouselNext = React.forwardRef<React.ComponentRef<typeof CarouselNextBase>, CarouselNextProps>(
    ({ className, version, type, uiType, colors, style, htmlType = 'button', children, ...props }, ref) => (
      <CarouselNextBase
        ref={ref}
        type={htmlType}
        className={cx('inline-flex h-9 w-9 items-center justify-center', className)}
        style={getSurfaceStyle(versionKey, version, resolveVisualType(type, uiType), colors, style)}
        {...props}
      >
        {children ?? <span aria-hidden>›</span>}
      </CarouselNextBase>
    )
  );
  CarouselNext.displayName = 'CarouselNext';

  const Carousel = Object.assign(CarouselRoot, {
    Content: CarouselContent,
    Item: CarouselItem,
    Previous: CarouselPrevious,
    Next: CarouselNext,
  });

  return {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselPrevious,
    CarouselNext,
  };
}

export function createDatePickerFoundation(versionKey: string) {
  type DatePickerProps = React.ComponentPropsWithoutRef<typeof DatePickerBase> &
    StyledProps & {
      placeholder?: string;
      label?: string;
    };

  const DatePicker = React.forwardRef<React.ComponentRef<typeof DatePickerBase>, DatePickerProps>(
    (
      {
        className,
        version,
        type,
        uiType,
        colors,
        style,
        date,
        onDateChange,
        disabled,
        placeholder = 'Pick a date',
        label = 'Date',
        ...props
      },
      ref
    ) => {
      const [internalDate, setInternalDate] = React.useState<Date | undefined>(date);

      React.useEffect(() => {
        setInternalDate(date);
      }, [date]);

      const palette = normalizeColors(colors);
      const selectedDate = date ?? internalDate;
      const visualType = resolveVisualType(type, uiType);

      const handleDateChange = (value: string) => {
        const nextDate = parseDateFromInput(value);
        if (nextDate && disabled?.(nextDate)) {
          return;
        }

        if (date === undefined) {
          setInternalDate(nextDate);
        }
        onDateChange?.(nextDate);
      };

      return (
        <DatePickerBase
          ref={ref}
          date={selectedDate}
          onDateChange={onDateChange}
          disabled={disabled}
          className={cx('inline-flex min-w-[14rem] flex-col gap-2 p-3', className)}
          style={getSurfaceStyle(versionKey, version, visualType, colors, style)}
          {...props}
        >
          <span className="text-[0.62rem] font-semibold tracking-[0.16em] opacity-70">{label}</span>
          <input
            type="date"
            value={selectedDate ? formatDateForInput(selectedDate) : ''}
            onChange={(event) => handleDateChange(event.target.value)}
            className="w-full bg-transparent text-sm outline-none"
            style={{
              color: palette.foreground,
            }}
            aria-label={placeholder}
          />
        </DatePickerBase>
      );
    }
  );

  DatePicker.displayName = 'DatePicker';

  return {
    DatePicker,
  };
}

export function createDrawerFoundation(versionKey: string) {
  type OverlayProps = React.ComponentPropsWithoutRef<typeof DrawerOverlayBase> & StyledProps;
  type ContentProps = React.ComponentPropsWithoutRef<typeof DrawerContentBase> & StyledProps;
  type TitleProps = React.ComponentPropsWithoutRef<typeof DrawerTitleBase> & StyledProps;
  type DescriptionProps = React.ComponentPropsWithoutRef<typeof DrawerDescriptionBase> & StyledProps;

  const Overlay = React.forwardRef<React.ComponentRef<typeof DrawerOverlayBase>, OverlayProps>(
    ({ className, colors, style, ...props }, ref) => {
      const palette = normalizeColors(colors);
      return (
        <DrawerOverlayBase
          ref={ref}
          className={cx('fixed inset-0 z-40', className)}
          style={{
            background: `color-mix(in srgb, ${palette.base} 65%, #000 35%)`,
            ...style,
          }}
          {...props}
        />
      );
    }
  );
  Overlay.displayName = 'DrawerOverlay';

  const Content = React.forwardRef<React.ComponentRef<typeof DrawerContentBase>, ContentProps>(
    ({ className, version, type, uiType, colors, style, ...props }, ref) => (
      <DrawerContentBase
        ref={ref}
        className={cx('fixed inset-x-0 bottom-0 z-50 mx-auto w-full max-w-2xl p-4', className)}
        style={getSurfaceStyle(versionKey, version, resolveVisualType(type, uiType), colors, style)}
        {...props}
      />
    )
  );
  Content.displayName = 'DrawerContent';

  const Title = React.forwardRef<React.ComponentRef<typeof DrawerTitleBase>, TitleProps>(
    ({ className, version, type, uiType, colors, style, ...props }, ref) => {
      const tone = getTypographyTone(resolveVisualType(type, uiType), colors);
      return (
        <DrawerTitleBase
          ref={ref}
          className={cx('text-lg font-semibold', className)}
          style={{ color: tone.heading, ...style }}
          {...props}
        />
      );
    }
  );
  Title.displayName = 'DrawerTitle';

  const Description = React.forwardRef<React.ComponentRef<typeof DrawerDescriptionBase>, DescriptionProps>(
    ({ className, version, type, uiType, colors, style, ...props }, ref) => {
      const tone = getTypographyTone(resolveVisualType(type, uiType), colors);
      return (
        <DrawerDescriptionBase
          ref={ref}
          className={cx('mt-1 text-sm opacity-80', className)}
          style={{ color: tone.body, ...style }}
          {...props}
        />
      );
    }
  );
  Description.displayName = 'DrawerDescription';

  return {
    Overlay,
    Content,
    Title,
    Description,
  };
}

export function createIconButtonFoundation(versionKey: string) {
  type IconButtonProps = Omit<React.ComponentPropsWithoutRef<typeof IconButtonBase>, 'type'> &
    StyledProps & {
      htmlType?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
      size?: 'sm' | 'md' | 'lg' | 'xl';
    };

  const IconButton = React.forwardRef<React.ComponentRef<typeof IconButtonBase>, IconButtonProps>(
    ({
      className,
      version,
      type,
      uiType,
      colors,
      style,
      size = 'md',
      htmlType = 'button',
      children,
      ...props
    }, ref) => {
      const side = iconButtonSizeMap[size] ?? iconButtonSizeMap.md;
      return (
        <IconButtonBase
          ref={ref}
          htmlType={htmlType}
          className={cx('inline-flex items-center justify-center', className)}
          style={{
            ...getSurfaceStyle(versionKey, version, resolveVisualType(type, uiType), colors, style),
            width: side,
            height: side,
          }}
          {...props}
        >
          {children}
        </IconButtonBase>
      );
    }
  );

  IconButton.displayName = 'IconButton';

  return {
    IconButton,
  };
}

export function createInputOtpFoundation(versionKey: string) {
  type InputOTPProps = Omit<React.ComponentPropsWithoutRef<typeof InputOTPBase>, 'onChange'> &
    StyledProps & {
      value?: string;
      onChange?: (value: string) => void;
      maxLength?: number;
    };
  type InputOTPGroupProps = React.ComponentPropsWithoutRef<typeof InputOTPGroupBase> & StyledProps;
  type InputOTPSlotProps = React.ComponentPropsWithoutRef<typeof InputOTPSlotBase> &
    StyledProps & {
      active?: boolean;
    };
  type InputOTPSeparatorProps = React.ComponentPropsWithoutRef<typeof InputOTPSeparatorBase> & StyledProps;

  const InputOTP = React.forwardRef<React.ComponentRef<typeof InputOTPBase>, InputOTPProps>(
    ({
      className,
      version,
      type,
      uiType,
      colors,
      style,
      value,
      onChange,
      maxLength = 6,
      children,
      ...props
    },
    ref) => {
      const [internalValue, setInternalValue] = React.useState(() => normalizeOtp(value ?? '', maxLength));
      const visualType = resolveVisualType(type, uiType);

      React.useEffect(() => {
        if (value !== undefined) {
          setInternalValue(normalizeOtp(value, maxLength));
        }
      }, [value, maxLength]);

      const currentValue = value !== undefined ? normalizeOtp(value, maxLength) : internalValue;

      const updateValue = (nextRawValue: string) => {
        const nextValue = normalizeOtp(nextRawValue, maxLength);
        if (value === undefined) {
          setInternalValue(nextValue);
        }
        onChange?.(nextValue);
      };

      return (
        <InputOTPBase
          ref={ref}
          value={currentValue}
          onChange={updateValue}
          maxLength={maxLength}
          className={cx('relative inline-flex w-full max-w-[16rem] flex-col gap-2 p-2', className)}
          style={getSurfaceStyle(versionKey, version, visualType, colors, style)}
          {...props}
        >
          <input
            value={currentValue}
            onChange={(event) => updateValue(event.target.value)}
            maxLength={maxLength}
            inputMode="numeric"
            autoComplete="one-time-code"
            className="absolute inset-0 z-10 h-full w-full cursor-text opacity-0"
            aria-label="One-time password"
          />

          {children ?? (
            <InputOTPGroupBase className="flex items-center justify-between gap-2">
              {Array.from({ length: maxLength }).map((_, index) => (
                <InputOTPSlotBase
                  key={index}
                  index={index}
                  className="inline-flex h-10 w-9 items-center justify-center text-sm font-semibold"
                  style={getSurfaceStyle(versionKey, version, visualType, colors, undefined)}
                >
                  {currentValue[index] ?? ''}
                </InputOTPSlotBase>
              ))}
            </InputOTPGroupBase>
          )}
        </InputOTPBase>
      );
    }
  );
  InputOTP.displayName = 'InputOTP';

  const InputOTPGroup = React.forwardRef<React.ComponentRef<typeof InputOTPGroupBase>, InputOTPGroupProps>(
    ({ className, ...props }, ref) => <InputOTPGroupBase ref={ref} className={cx('flex items-center gap-2', className)} {...props} />
  );
  InputOTPGroup.displayName = 'InputOTPGroup';

  const InputOTPSlot = React.forwardRef<React.ComponentRef<typeof InputOTPSlotBase>, InputOTPSlotProps>(
    ({ className, version, type, uiType, colors, style, active, ...props }, ref) => (
      <InputOTPSlotBase
        ref={ref}
        className={cx('inline-flex h-10 w-9 items-center justify-center text-sm font-semibold', className)}
        style={{
          ...getSurfaceStyle(versionKey, version, resolveVisualType(type, uiType), colors, style),
          outline: active ? `2px solid ${normalizeColors(colors).accentPrimary}` : undefined,
        }}
        {...props}
      />
    )
  );
  InputOTPSlot.displayName = 'InputOTPSlot';

  const InputOTPSeparator = React.forwardRef<React.ComponentRef<typeof InputOTPSeparatorBase>, InputOTPSeparatorProps>(
    ({ className, children, ...props }, ref) => (
      <InputOTPSeparatorBase ref={ref} className={cx('inline-flex items-center justify-center', className)} {...props}>
        {children ?? <Dot className="h-4 w-4" />}
      </InputOTPSeparatorBase>
    )
  );
  InputOTPSeparator.displayName = 'InputOTPSeparator';

  return {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
    InputOTPSeparator,
  };
}

export function createScrollAreaFoundation(versionKey: string) {
  type ScrollAreaProps = Omit<React.ComponentPropsWithoutRef<typeof ScrollAreaBase>, 'type'> &
    StyledProps & {
      withHorizontalBar?: boolean;
      hideBar?: boolean;
      scrollType?: React.ComponentPropsWithoutRef<typeof ScrollAreaBase>['scrollbarType'];
    };
  type ScrollBarProps = React.ComponentPropsWithoutRef<typeof ScrollBarBase> & StyledProps;

  const ScrollBar = React.forwardRef<React.ComponentRef<typeof ScrollBarBase>, ScrollBarProps>(
    ({ className, version, type, uiType, colors, style, orientation = 'vertical', ...props }, ref) => {
      const resolvedVersion = version ?? versionKey;
      const visualType = resolveVisualType(type, uiType);
      const profile = getVersionStyleProfile(resolvedVersion);
      const palette = normalizeColors(colors);
      const thumbTypeStyles = getCoreTypeStyles(visualType, colors);

      const railPattern = profile.hasHoneycomb
        ? `radial-gradient(circle at 1px 1px, ${palette.accentPrimary}55 1px, transparent 0)`
        : profile.hasGrid
          ? `linear-gradient(${palette.accentPrimary}22 1px, transparent 1px), linear-gradient(90deg, ${palette.accentPrimary}22 1px, transparent 1px)`
          : profile.hasScanline
            ? `repeating-linear-gradient(180deg, ${palette.accentPrimary}22 0px, ${palette.accentPrimary}22 1px, transparent 1px, transparent 3px)`
            : undefined;

      const edgeClip =
        profile.shape === 'hex'
          ? 'polygon(20% 0, 80% 0, 100% 50%, 80% 100%, 20% 100%, 0 50%)'
          : profile.shape === 'clipped'
            ? 'polygon(6% 0, 100% 0, 100% 94%, 94% 100%, 0 100%, 0 6%)'
            : profile.shape === 'bracket'
              ? 'polygon(0 0, 95% 0, 100% 8%, 100% 100%, 5% 100%, 0 92%)'
              : undefined;

      return (
        <ScrollBarBase
          ref={ref}
          orientation={orientation}
          className={cx(
            'flex touch-none select-none transition-colors',
            orientation === 'vertical' ? 'h-full w-2.5 p-[1px]' : 'h-2.5 flex-col p-[1px]',
            className
          )}
          style={{
            ...getSurfaceStyle(versionKey, version, visualType, colors, style, {
              borderless: true,
              disableClip: true,
              disableGlow: true,
            }),
            backgroundColor: `color-mix(in srgb, ${palette.base} 65%, transparent)`,
            border: `1px solid ${palette.border}`,
            borderRadius: profile.shape === 'pill' ? '999px' : '8px',
            backgroundImage: railPattern,
            backgroundSize: profile.hasHoneycomb ? '10px 10px' : profile.hasGrid ? '8px 8px' : undefined,
            clipPath: edgeClip,
          }}
          {...props}
        >
          <ScrollBarThumbBase
            className={cx('relative flex-1', profile.shape === 'pill' ? 'rounded-full' : 'rounded-md')}
            style={{
              ...(thumbTypeStyles as React.CSSProperties),
              backgroundColor:
                visualType === 'ghost'
                  ? `color-mix(in srgb, ${palette.accentPrimary} 35%, transparent)`
                  : visualType === 'outline'
                    ? `color-mix(in srgb, ${palette.accentPrimary} 72%, ${palette.base} 28%)`
                    : (thumbTypeStyles.backgroundColor as string | undefined) ?? palette.accentPrimary,
              color: (thumbTypeStyles.color as string | undefined) ?? palette.foreground,
              border: `1px solid ${palette.border}`,
              boxShadow: profile.hasGlow ? `0 0 10px ${palette.glow}` : undefined,
              clipPath: edgeClip,
            }}
          />
        </ScrollBarBase>
      );
    }
  );
  ScrollBar.displayName = 'ScrollBar';

  const ScrollArea = React.forwardRef<React.ComponentRef<typeof ScrollAreaBase>, ScrollAreaProps>(
    ({
      className,
      version,
      type,
      uiType,
      colors,
      style,
      children,
      withHorizontalBar,
      hideBar,
      scrollType,
      ...props
    },
    ref) => {
      const resolvedVersion = version ?? versionKey;
      const visualType = resolveVisualType(type, uiType);
      const profile = getVersionStyleProfile(resolvedVersion);
      const palette = normalizeColors(colors);

      const panelPattern = profile.hasHoneycomb
        ? `radial-gradient(circle at 1px 1px, ${palette.accentPrimary}2e 1px, transparent 0)`
        : profile.hasGrid
          ? `linear-gradient(${palette.accentPrimary}1e 1px, transparent 1px), linear-gradient(90deg, ${palette.accentPrimary}1e 1px, transparent 1px)`
          : profile.hasScanline
            ? `repeating-linear-gradient(180deg, ${palette.accentPrimary}1a 0px, ${palette.accentPrimary}1a 1px, transparent 1px, transparent 3px)`
            : undefined;

      return (
        <ScrollAreaBase
          ref={ref}
          scrollbarType={scrollType}
          className={cx('relative overflow-hidden', className)}
          style={{
            ...getSurfaceStyle(versionKey, version, visualType, colors, style),
            backgroundImage: panelPattern,
            backgroundSize: profile.hasHoneycomb ? '14px 14px' : profile.hasGrid ? '16px 16px' : undefined,
          }}
          {...props}
        >
          {(profile.hasTerminalBar || profile.hasBrackets || profile.hasInsetDepth) && (
            <span className="pointer-events-none absolute inset-0 z-0">
              {profile.hasTerminalBar ? (
                <span
                  className="absolute inset-x-0 top-0 h-1.5 opacity-80"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${palette.accentPrimary}, transparent)`,
                  }}
                />
              ) : null}
              {profile.hasInsetDepth ? (
                <span
                  className="absolute inset-0"
                  style={{
                    boxShadow: `inset 0 1px 0 ${palette.accentPrimary}40, inset 0 -1px 0 ${palette.border}`,
                  }}
                />
              ) : null}
              {profile.hasBrackets ? (
                <>
                  <span className="absolute left-1 top-1 h-2.5 w-2.5 border-l border-t" style={{ borderColor: palette.accentPrimary }} />
                  <span className="absolute right-1 top-1 h-2.5 w-2.5 border-r border-t" style={{ borderColor: palette.accentPrimary }} />
                  <span className="absolute bottom-1 left-1 h-2.5 w-2.5 border-b border-l" style={{ borderColor: palette.accentPrimary }} />
                  <span className="absolute bottom-1 right-1 h-2.5 w-2.5 border-b border-r" style={{ borderColor: palette.accentPrimary }} />
                </>
              ) : null}
            </span>
          )}
          <ScrollAreaViewportBase className="relative z-[1] h-full w-full rounded-[inherit]">{children}</ScrollAreaViewportBase>
          {!hideBar ? <ScrollBar version={version} type={type} uiType={uiType} colors={colors} /> : null}
          {!hideBar && withHorizontalBar ? (
            <ScrollBar version={version} type={type} uiType={uiType} colors={colors} orientation="horizontal" />
          ) : null}
          <ScrollAreaCornerBase />
        </ScrollAreaBase>
      );
    }
  );
  ScrollArea.displayName = 'ScrollArea';

  return {
    ScrollArea,
    ScrollBar,
  };
}

export function createSelectFoundation(versionKey: string) {
  type SelectTriggerProps = Omit<React.ComponentPropsWithoutRef<typeof SelectTriggerBase>, 'type'> &
    StyledProps & {
      htmlType?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
    };
  type SelectContentProps = React.ComponentPropsWithoutRef<typeof SelectContentBase> & StyledProps;
  type SelectLabelProps = React.ComponentPropsWithoutRef<typeof SelectLabelBase> & StyledProps;
  type SelectItemProps = React.ComponentPropsWithoutRef<typeof SelectItemBase> & StyledProps;
  type SelectSeparatorProps = React.ComponentPropsWithoutRef<typeof SelectSeparatorBase> & StyledProps;

  const Select = SelectBase;
  const SelectGroup = SelectGroupBase;
  const SelectValue = SelectValueBase;

  const SelectTrigger = React.forwardRef<React.ComponentRef<typeof SelectTriggerBase>, SelectTriggerProps>(
    ({ className, version, type, uiType, colors, style, htmlType = 'button', children, ...props }, ref) => (
      <SelectTriggerBase
        ref={ref}
        htmlType={htmlType}
        className={cx('flex h-10 w-full items-center justify-between px-3 text-sm outline-none', className)}
        style={getSurfaceStyle(versionKey, version, resolveVisualType(type, uiType), colors, style)}
        {...props}
      >
        {children}
        <ChevronDown className="h-4 w-4 opacity-70" />
      </SelectTriggerBase>
    )
  );
  SelectTrigger.displayName = 'SelectTrigger';

  const SelectScrollUpButton = React.forwardRef<React.ComponentRef<typeof SelectScrollUpButtonBase>, React.ComponentPropsWithoutRef<typeof SelectScrollUpButtonBase>>(
    ({ className, ...props }, ref) => (
      <SelectScrollUpButtonBase ref={ref} className={cx('flex cursor-default items-center justify-center py-1', className)} {...props}>
        <ChevronUp className="h-4 w-4" />
      </SelectScrollUpButtonBase>
    )
  );
  SelectScrollUpButton.displayName = 'SelectScrollUpButton';

  const SelectScrollDownButton = React.forwardRef<React.ComponentRef<typeof SelectScrollDownButtonBase>, React.ComponentPropsWithoutRef<typeof SelectScrollDownButtonBase>>(
    ({ className, ...props }, ref) => (
      <SelectScrollDownButtonBase ref={ref} className={cx('flex cursor-default items-center justify-center py-1', className)} {...props}>
        <ChevronDown className="h-4 w-4" />
      </SelectScrollDownButtonBase>
    )
  );
  SelectScrollDownButton.displayName = 'SelectScrollDownButton';

  const SelectContent = React.forwardRef<React.ComponentRef<typeof SelectContentBase>, SelectContentProps>(
    ({ className, version, type, uiType, colors, style, children, position = 'popper', ...props }, ref) => (
      <SelectContentBase
        ref={ref}
        className={cx('relative z-50 max-h-96 min-w-[8rem] overflow-hidden p-1 shadow-md', className)}
        position={position}
        style={getSurfaceStyle(versionKey, version, resolveVisualType(type, uiType), colors, style)}
        {...props}
      >
        <SelectScrollUpButton />
        <SelectViewportBase className={cx('p-1', position === 'popper' ? 'min-w-[var(--radix-select-trigger-width)]' : undefined)}>
          {children}
        </SelectViewportBase>
        <SelectScrollDownButton />
      </SelectContentBase>
    )
  );
  SelectContent.displayName = 'SelectContent';

  const SelectLabel = React.forwardRef<React.ComponentRef<typeof SelectLabelBase>, SelectLabelProps>(
    ({ className, version, type, uiType, colors, style, ...props }, ref) => (
      <SelectLabelBase
        ref={ref}
        className={cx('px-2 py-1.5 text-xs font-semibold tracking-wide opacity-80', className)}
        style={getSurfaceStyle(versionKey, version, resolveVisualType(type, uiType), colors, style, {
          borderless: true,
          disableClip: true,
          disableGlow: true,
        })}
        {...props}
      />
    )
  );
  SelectLabel.displayName = 'SelectLabel';

  const SelectItem = React.forwardRef<React.ComponentRef<typeof SelectItemBase>, SelectItemProps>(
    ({ className, version, type, uiType, colors, style, children, ...props }, ref) => (
      <SelectItemBase
        ref={ref}
        className={cx('relative flex w-full cursor-default items-center gap-2 px-2 py-1.5 text-sm outline-none', className)}
        style={getSurfaceStyle(versionKey, version, resolveVisualType(type, uiType), colors, style, {
          borderless: true,
          disableClip: true,
          disableGlow: true,
        })}
        {...props}
      >
        <SelectItemIndicatorBase>
          <Check className="h-3.5 w-3.5" />
        </SelectItemIndicatorBase>
        <SelectItemTextBase>{children}</SelectItemTextBase>
      </SelectItemBase>
    )
  );
  SelectItem.displayName = 'SelectItem';

  const SelectSeparator = React.forwardRef<React.ComponentRef<typeof SelectSeparatorBase>, SelectSeparatorProps>(
    ({ className, version, type, uiType, colors, style, ...props }, ref) => {
      const palette = normalizeColors(colors);
      return (
        <SelectSeparatorBase
          ref={ref}
          className={cx('my-1 h-px', className)}
          style={{
            backgroundColor: palette.border,
            ...getSurfaceStyle(versionKey, version, resolveVisualType(type, uiType), colors, style, {
              borderless: true,
              disableClip: true,
              disableGlow: true,
            }),
          }}
          {...props}
        />
      );
    }
  );
  SelectSeparator.displayName = 'SelectSeparator';

  return {
    Select,
    SelectGroup,
    SelectValue,
    SelectTrigger,
    SelectContent,
    SelectLabel,
    SelectItem,
    SelectSeparator,
    SelectScrollUpButton,
    SelectScrollDownButton,
  };
}

export function createSheetFoundation(versionKey: string) {
  type SheetContentProps = React.ComponentPropsWithoutRef<typeof SheetContentBase> & StyledProps;
  type SheetOverlayProps = React.ComponentPropsWithoutRef<typeof SheetOverlayBase> & StyledProps;
  type SheetHeaderProps = React.ComponentPropsWithoutRef<typeof SheetHeaderBase> & StyledProps;
  type SheetFooterProps = React.ComponentPropsWithoutRef<typeof SheetFooterBase> & StyledProps;
  type SheetTitleProps = React.ComponentPropsWithoutRef<typeof SheetTitleBase> & StyledProps;
  type SheetDescriptionProps = React.ComponentPropsWithoutRef<typeof SheetDescriptionBase> & StyledProps;

  const Sheet = SheetBase;
  const SheetTrigger = SheetTriggerBase;
  const SheetClose = SheetCloseBase;
  const SheetPortal = SheetPortalBase;

  const SheetOverlay = React.forwardRef<React.ComponentRef<typeof SheetOverlayBase>, SheetOverlayProps>(
    ({ className, colors, style, ...props }, ref) => {
      const palette = normalizeColors(colors);
      return (
        <SheetOverlayBase
          ref={ref}
          className={cx('fixed inset-0 z-50', className)}
          style={{ backgroundColor: `color-mix(in srgb, ${palette.base} 55%, #000 45%)`, ...style }}
          {...props}
        />
      );
    }
  );
  SheetOverlay.displayName = 'SheetOverlay';

  const SheetContent = React.forwardRef<React.ComponentRef<typeof SheetContentBase>, SheetContentProps>(
    ({ className, version, type, uiType, colors, style, side = 'right', children, ...props }, ref) => (
      <SheetPortalBase>
        <SheetOverlay colors={colors} />
        <SheetContentBase
          ref={ref}
          side={side}
          className={cx(
            'fixed z-50 flex h-full w-3/4 max-w-md flex-col gap-4 p-4',
            side === 'left' ? 'left-0 top-0' : undefined,
            side === 'right' ? 'right-0 top-0' : undefined,
            side === 'top' ? 'left-0 top-0 h-auto w-full max-w-none' : undefined,
            side === 'bottom' ? 'bottom-0 left-0 h-auto w-full max-w-none' : undefined,
            className
          )}
          style={getSurfaceStyle(versionKey, version, resolveVisualType(type, uiType), colors, style)}
          {...props}
        >
          {children}
          <SheetCloseBase className="absolute right-3 top-3 inline-flex h-7 w-7 items-center justify-center">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </SheetCloseBase>
        </SheetContentBase>
      </SheetPortalBase>
    )
  );
  SheetContent.displayName = 'SheetContent';

  const SheetHeader = ({ className, ...props }: SheetHeaderProps) => (
    <SheetHeaderBase className={cx('flex flex-col gap-1.5 text-left', className)} {...props} />
  );
  SheetHeader.displayName = 'SheetHeader';

  const SheetFooter = ({ className, ...props }: SheetFooterProps) => (
    <SheetFooterBase className={cx('mt-auto flex flex-col gap-2 sm:flex-row sm:justify-end', className)} {...props} />
  );
  SheetFooter.displayName = 'SheetFooter';

  const SheetTitle = React.forwardRef<React.ComponentRef<typeof SheetTitleBase>, SheetTitleProps>(
    ({ className, version, type, uiType, colors, style, ...props }, ref) => {
      const tone = getTypographyTone(resolveVisualType(type, uiType), colors);
      return <SheetTitleBase ref={ref} className={cx('text-lg font-semibold', className)} style={{ color: tone.heading, ...style }} {...props} />;
    }
  );
  SheetTitle.displayName = 'SheetTitle';

  const SheetDescription = React.forwardRef<React.ComponentRef<typeof SheetDescriptionBase>, SheetDescriptionProps>(
    ({ className, version, type, uiType, colors, style, ...props }, ref) => {
      const tone = getTypographyTone(resolveVisualType(type, uiType), colors);
      return <SheetDescriptionBase ref={ref} className={cx('text-sm opacity-80', className)} style={{ color: tone.body, ...style }} {...props} />;
    }
  );
  SheetDescription.displayName = 'SheetDescription';

  return {
    Sheet,
    SheetPortal,
    SheetOverlay,
    SheetTrigger,
    SheetClose,
    SheetContent,
    SheetHeader,
    SheetFooter,
    SheetTitle,
    SheetDescription,
  };
}

export function createSwitchFoundation(versionKey: string) {
  type SwitchProps = Omit<React.ComponentPropsWithoutRef<typeof SwitchBase>, 'type'> &
    StyledProps & {
      htmlType?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
    };

  const Switch = React.forwardRef<React.ComponentRef<typeof SwitchBase>, SwitchProps>(
    ({ className, version, type, uiType, colors, style, htmlType = 'button', ...props }, ref) => {
      const palette = normalizeColors(colors);
      return (
        <SwitchBase
          ref={ref}
          type={htmlType}
          className={cx(
            'peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-[var(--switch-accent)] data-[state=unchecked]:bg-[var(--switch-track)]',
            className
          )}
          style={{
            ...getSurfaceStyle(versionKey, version, resolveVisualType(type, uiType), colors, style, {
              rounded: true,
              disableClip: true,
              disableGlow: true,
            }),
            ['--switch-accent' as string]: palette.accentPrimary,
            ['--switch-track' as string]: palette.base,
            ['--switch-thumb' as string]: palette.foreground,
            borderRadius: 999,
            padding: 2,
          }}
          {...props}
        >
          <SwitchThumbBase
            className="pointer-events-none block h-5 w-5 rounded-full bg-[var(--switch-thumb)] shadow transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
          />
        </SwitchBase>
      );
    }
  );

  Switch.displayName = 'Switch';

  return {
    Switch,
  };
}

export function createTableFoundation(versionKey: string) {
  type TableProps = React.ComponentPropsWithoutRef<typeof TableBase> & StyledProps;
  type TableHeaderProps = React.ComponentPropsWithoutRef<typeof TableHeaderBase> & StyledProps;
  type TableBodyProps = React.ComponentPropsWithoutRef<typeof TableBodyBase> & StyledProps;
  type TableFooterProps = React.ComponentPropsWithoutRef<typeof TableFooterBase> & StyledProps;
  type TableHeadProps = React.ComponentPropsWithoutRef<typeof TableHeadBase> & StyledProps;
  type TableRowProps = React.ComponentPropsWithoutRef<typeof TableRowBase> & StyledProps;
  type TableCellProps = React.ComponentPropsWithoutRef<typeof TableCellBase> & StyledProps;
  type TableCaptionProps = React.ComponentPropsWithoutRef<typeof TableCaptionBase> & StyledProps;

  const Table = React.forwardRef<React.ComponentRef<typeof TableBase>, TableProps>(
    ({ className, version, type, uiType, colors, style, ...props }, ref) => (
      <div className="relative w-full overflow-auto">
        <TableBase
          ref={ref}
          className={cx('w-full caption-bottom text-sm', className)}
          style={getSurfaceStyle(versionKey, version, resolveVisualType(type, uiType), colors, style)}
          {...props}
        />
      </div>
    )
  );
  Table.displayName = 'Table';

  const TableHeader = React.forwardRef<React.ComponentRef<typeof TableHeaderBase>, TableHeaderProps>(
    ({ className, ...props }, ref) => <TableHeaderBase ref={ref} className={cx('[&_tr]:border-b', className)} {...props} />
  );
  TableHeader.displayName = 'TableHeader';

  const TableBody = React.forwardRef<React.ComponentRef<typeof TableBodyBase>, TableBodyProps>(
    ({ className, ...props }, ref) => <TableBodyBase ref={ref} className={cx('[&_tr:last-child]:border-0', className)} {...props} />
  );
  TableBody.displayName = 'TableBody';

  const TableFooter = React.forwardRef<React.ComponentRef<typeof TableFooterBase>, TableFooterProps>(
    ({ className, ...props }, ref) => <TableFooterBase ref={ref} className={cx('border-t font-medium', className)} {...props} />
  );
  TableFooter.displayName = 'TableFooter';

  const TableHead = React.forwardRef<React.ComponentRef<typeof TableHeadBase>, TableHeadProps>(
    ({ className, ...props }, ref) => (
      <TableHeadBase ref={ref} className={cx('h-10 px-3 text-left align-middle text-xs font-semibold uppercase tracking-wide', className)} {...props} />
    )
  );
  TableHead.displayName = 'TableHead';

  const TableRow = React.forwardRef<React.ComponentRef<typeof TableRowBase>, TableRowProps>(
    ({ className, version, type, uiType, colors, style, ...props }, ref) => (
      <TableRowBase
        ref={ref}
        className={cx('border-b transition-colors', className)}
        style={getSurfaceStyle(versionKey, version, resolveVisualType(type, uiType), colors, style, {
          borderless: true,
          disableClip: true,
          disableGlow: true,
        })}
        {...props}
      />
    )
  );
  TableRow.displayName = 'TableRow';

  const TableCell = React.forwardRef<React.ComponentRef<typeof TableCellBase>, TableCellProps>(
    ({ className, ...props }, ref) => <TableCellBase ref={ref} className={cx('p-3 align-middle', className)} {...props} />
  );
  TableCell.displayName = 'TableCell';

  const TableCaption = React.forwardRef<React.ComponentRef<typeof TableCaptionBase>, TableCaptionProps>(
    ({ className, ...props }, ref) => <TableCaptionBase ref={ref} className={cx('mt-3 text-sm opacity-70', className)} {...props} />
  );
  TableCaption.displayName = 'TableCaption';

  return {
    Table,
    TableHeader,
    TableBody,
    TableFooter,
    TableHead,
    TableRow,
    TableCell,
    TableCaption,
  };
}

export function createTabsFoundation(versionKey: string) {
  type TabsProps = React.ComponentPropsWithoutRef<typeof TabsBase> & StyledProps;
  type TabsListProps = React.ComponentPropsWithoutRef<typeof TabsListBase> & StyledProps;
  type TabsTriggerProps = Omit<React.ComponentPropsWithoutRef<typeof TabsTriggerBase>, 'type'> &
    StyledProps & {
      htmlType?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
    };
  type TabsContentProps = React.ComponentPropsWithoutRef<typeof TabsContentBase> & StyledProps;

  const Tabs = React.forwardRef<React.ComponentRef<typeof TabsBase>, TabsProps>(
    ({ className, ...props }, ref) => <TabsBase ref={ref} className={cx('w-full', className)} {...props} />
  );
  Tabs.displayName = 'Tabs';

  const TabsList = React.forwardRef<React.ComponentRef<typeof TabsListBase>, TabsListProps>(
    ({ className, version, type, uiType, colors, style, ...props }, ref) => (
      <TabsListBase
        ref={ref}
        className={cx('inline-flex h-10 items-center gap-1 p-1', className)}
        style={getSurfaceStyle(versionKey, version, resolveVisualType(type, uiType), colors, style)}
        {...props}
      />
    )
  );
  TabsList.displayName = 'TabsList';

  const TabsTrigger = React.forwardRef<React.ComponentRef<typeof TabsTriggerBase>, TabsTriggerProps>(
    ({ className, version, type, uiType, colors, style, htmlType = 'button', ...props }, ref) => (
      <TabsTriggerBase
        ref={ref}
        htmlType={htmlType}
        className={cx(
          'inline-flex items-center justify-center whitespace-nowrap px-3 py-1.5 text-sm transition-all data-[state=active]:opacity-100 data-[state=inactive]:opacity-70',
          className
        )}
        style={getSurfaceStyle(versionKey, version, resolveVisualType(type, uiType), colors, style)}
        {...props}
      />
    )
  );
  TabsTrigger.displayName = 'TabsTrigger';

  const TabsContent = React.forwardRef<React.ComponentRef<typeof TabsContentBase>, TabsContentProps>(
    ({ className, version, type, uiType, colors, style, ...props }, ref) => (
      <TabsContentBase
        ref={ref}
        className={cx('mt-2 outline-none', className)}
        style={getSurfaceStyle(versionKey, version, resolveVisualType(type, uiType), colors, style, {
          borderless: true,
          disableClip: true,
          disableGlow: true,
        })}
        {...props}
      />
    )
  );
  TabsContent.displayName = 'TabsContent';

  return {
    Tabs,
    TabsList,
    TabsTrigger,
    TabsContent,
  };
}

export function createToastFoundation(versionKey: string) {
  type ToastViewportProps = React.ComponentPropsWithoutRef<typeof ToastViewportBase> & StyledProps;
  type ToastProps = React.ComponentPropsWithoutRef<typeof ToastBase> & StyledProps;
  type ToastTitleProps = React.ComponentPropsWithoutRef<typeof ToastTitleBase> & StyledProps;
  type ToastDescriptionProps = React.ComponentPropsWithoutRef<typeof ToastDescriptionBase> & StyledProps;
  type ToastCloseProps = Omit<React.ComponentPropsWithoutRef<typeof ToastCloseBase>, 'type'>;
  type ToastActionProps = Omit<React.ComponentPropsWithoutRef<typeof ToastActionBase>, 'type'>;

  const ToastProvider = ToastProviderBase;

  const ToastViewport = React.forwardRef<React.ComponentRef<typeof ToastViewportBase>, ToastViewportProps>(
    ({ className, ...props }, ref) => (
      <ToastViewportBase
        ref={ref}
        className={cx('fixed top-0 z-[100] flex w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col', className)}
        {...props}
      />
    )
  );
  ToastViewport.displayName = 'ToastViewport';

  const Toast = React.forwardRef<React.ComponentRef<typeof ToastBase>, ToastProps>(
    ({ className, version, type, uiType, colors, style, ...props }, ref) => (
      <ToastBase
        ref={ref}
        className={cx('pointer-events-auto relative flex w-full items-center justify-between gap-3 overflow-hidden p-4', className)}
        style={getSurfaceStyle(versionKey, version, resolveVisualType(type, uiType), colors, style)}
        {...props}
      />
    )
  );
  Toast.displayName = 'Toast';

  const ToastTitle = React.forwardRef<React.ComponentRef<typeof ToastTitleBase>, ToastTitleProps>(
    ({ className, ...props }, ref) => <ToastTitleBase ref={ref} className={cx('text-sm font-semibold', className)} {...props} />
  );
  ToastTitle.displayName = 'ToastTitle';

  const ToastDescription = React.forwardRef<React.ComponentRef<typeof ToastDescriptionBase>, ToastDescriptionProps>(
    ({ className, ...props }, ref) => <ToastDescriptionBase ref={ref} className={cx('text-sm opacity-85', className)} {...props} />
  );
  ToastDescription.displayName = 'ToastDescription';

  const ToastClose = React.forwardRef<React.ComponentRef<typeof ToastCloseBase>, ToastCloseProps>(
    ({ className, children, ...props }, ref) => (
      <ToastCloseBase ref={ref} className={cx('inline-flex h-7 w-7 items-center justify-center', className)} {...props}>
        {children ?? <X className="h-4 w-4" />}
      </ToastCloseBase>
    )
  );
  ToastClose.displayName = 'ToastClose';

  const ToastAction = React.forwardRef<React.ComponentRef<typeof ToastActionBase>, ToastActionProps>(
    ({ className, ...props }, ref) => (
      <ToastActionBase ref={ref} className={cx('inline-flex h-8 items-center justify-center px-3 text-xs', className)} {...props} />
    )
  );
  ToastAction.displayName = 'ToastAction';

  return {
    ToastProvider,
    ToastViewport,
    Toast,
    ToastTitle,
    ToastDescription,
    ToastClose,
    ToastAction,
  };
}

export function createToggleGroupFoundation(versionKey: string) {
  type ToggleGroupProps = React.ComponentPropsWithoutRef<typeof ToggleGroupBase> & Omit<StyledProps, 'type'>;
  type ToggleGroupItemProps = Omit<React.ComponentPropsWithoutRef<typeof ToggleGroupItemBase>, 'type'> &
    StyledProps & {
      htmlType?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
    };

  const ToggleGroup = React.forwardRef<React.ComponentRef<typeof ToggleGroupBase>, ToggleGroupProps>(
    ({ className: _className, ...props }, ref) => <ToggleGroupBase ref={ref} {...props} />
  );
  ToggleGroup.displayName = 'ToggleGroup';

  const ToggleGroupItem = React.forwardRef<React.ComponentRef<typeof ToggleGroupItemBase>, ToggleGroupItemProps>(
    ({ className, version, type, uiType, colors, style, htmlType = 'button', ...props }, ref) => (
      <ToggleGroupItemBase
        ref={ref}
        type={htmlType}
        className={cx('inline-flex items-center justify-center px-3 py-1.5 text-sm', className)}
        style={getSurfaceStyle(versionKey, version, resolveVisualType(type, uiType), colors, style)}
        {...props}
      />
    )
  );
  ToggleGroupItem.displayName = 'ToggleGroupItem';

  return {
    ToggleGroup,
    ToggleGroupItem,
  };
}

export function createToggleFoundation(versionKey: string) {
  type ToggleProps = Omit<React.ComponentPropsWithoutRef<typeof ToggleBase>, 'type'> &
    StyledProps & {
      htmlType?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
    };

  const Toggle = React.forwardRef<React.ComponentRef<typeof ToggleBase>, ToggleProps>(
    ({ className, version, type, uiType, colors, style, htmlType = 'button', ...props }, ref) => (
      <ToggleBase
        ref={ref}
        htmlType={htmlType}
        className={cx('inline-flex items-center justify-center px-3 py-1.5 text-sm', className)}
        style={getSurfaceStyle(versionKey, version, resolveVisualType(type, uiType), colors, style)}
        {...props}
      />
    )
  );
  Toggle.displayName = 'Toggle';

  return {
    Toggle,
  };
}

export function createTooltipFoundation(versionKey: string) {
  type TooltipContentProps = React.ComponentPropsWithoutRef<typeof TooltipContentBase> & StyledProps;

  const TooltipProvider = TooltipProviderBase;
  const Tooltip = TooltipBase;
  const TooltipTrigger = TooltipTriggerBase;

  const TooltipContent = React.forwardRef<React.ComponentRef<typeof TooltipContentBase>, TooltipContentProps>(
    ({ className, version, type, uiType, colors, style, sideOffset = 6, ...props }, ref) => (
      <TooltipContentBase
        ref={ref}
        sideOffset={sideOffset}
        className={cx('z-50 max-w-xs px-3 py-1.5 text-xs shadow-md', className)}
        style={getSurfaceStyle(versionKey, version, resolveVisualType(type, uiType), colors, style)}
        {...props}
      />
    )
  );
  TooltipContent.displayName = 'TooltipContent';

  return {
    Tooltip,
    TooltipTrigger,
    TooltipContent,
    TooltipProvider,
  };
}

export function createDigitalClockFoundation(versionKey: string) {
  type DigitalClockProps = React.ComponentPropsWithoutRef<typeof DigitalClockBase> &
    StyledProps & {
      showTimezone?: boolean;
    };

  const DigitalClock = React.forwardRef<React.ComponentRef<typeof DigitalClockBase>, DigitalClockProps>(
    ({ className, version, type, uiType, colors, style, timezone, showTimezone = true, ...props }, ref) => {
      const resolvedVersion = version ?? versionKey;
      const visualType = resolveVisualType(type, uiType);
      const tone = getTypographyTone(visualType, colors);
      const palette = normalizeColors(colors);
      const profile = getVersionStyleProfile(resolvedVersion);

      const panelPattern = profile.hasHoneycomb
        ? `radial-gradient(circle at 1px 1px, ${palette.accentPrimary}36 1px, transparent 0)`
        : profile.hasGrid
          ? `linear-gradient(${palette.accentPrimary}24 1px, transparent 1px), linear-gradient(90deg, ${palette.accentPrimary}24 1px, transparent 1px)`
          : profile.hasScanline
            ? `repeating-linear-gradient(180deg, ${palette.accentPrimary}1e 0px, ${palette.accentPrimary}1e 1px, transparent 1px, transparent 3px)`
            : undefined;

      return (
        <DigitalClockBase
          ref={ref}
          timezone={timezone}
          className={cx('inline-flex min-w-[11rem] flex-col px-3 py-2', className)}
          style={{
            ...getSurfaceStyle(versionKey, version, visualType, colors, style),
            color: tone.heading,
            backgroundImage: panelPattern,
            backgroundSize: profile.hasHoneycomb ? '12px 12px' : profile.hasGrid ? '14px 14px' : undefined,
            textShadow: profile.hasGlow ? `0 0 8px ${palette.glow}` : undefined,
          }}
          {...props}
        >
          {profile.hasTerminalBar ? (
            <span
              className="mb-2 block h-1 w-full rounded-full opacity-80"
              style={{ background: `linear-gradient(90deg, transparent, ${palette.accentPrimary}, transparent)` }}
            />
          ) : null}
          {profile.hasBrackets ? (
            <span className="pointer-events-none absolute inset-0">
              <span className="absolute left-1 top-1 h-2.5 w-2.5 border-l border-t" style={{ borderColor: palette.accentPrimary }} />
              <span className="absolute bottom-1 right-1 h-2.5 w-2.5 border-b border-r" style={{ borderColor: palette.accentPrimary }} />
            </span>
          ) : null}
          {showTimezone && timezone ? (
            <span
              className="mt-2 text-[0.6rem] tracking-[0.18em]"
              style={{ color: palette.muted }}
            >
              {timezone}
            </span>
          ) : null}
        </DigitalClockBase>
      );
    }
  );

  DigitalClock.displayName = 'DigitalClock';

  return {
    DigitalClock,
  };
}

export function createAnalogClockFoundation(versionKey: string) {
  type AnalogClockProps = React.ComponentPropsWithoutRef<typeof AnalogClockBase> & StyledProps;

  const AnalogClock = React.forwardRef<React.ComponentRef<typeof AnalogClockBase>, AnalogClockProps>(
    ({ className, version, type, uiType, colors, style, ...props }, ref) => {
      const resolvedVersion = version ?? versionKey;
      const visualType = resolveVisualType(type, uiType);
      const visual = getSpinnerVisual(visualType, colors);
      const profile = getVersionStyleProfile(resolvedVersion);
      const palette = normalizeColors(colors);

      const dialPattern = profile.hasHoneycomb
        ? `radial-gradient(circle at 1px 1px, ${palette.accentPrimary}40 1px, transparent 0)`
        : profile.hasGrid
          ? `linear-gradient(${palette.accentPrimary}28 1px, transparent 1px), linear-gradient(90deg, ${palette.accentPrimary}28 1px, transparent 1px)`
          : profile.hasScanline
            ? `repeating-linear-gradient(180deg, ${palette.accentPrimary}1f 0px, ${palette.accentPrimary}1f 1px, transparent 1px, transparent 3px)`
            : undefined;

      const bezelClip =
        profile.shape === 'hex'
          ? 'polygon(22% 6%, 78% 6%, 96% 50%, 78% 94%, 22% 94%, 4% 50%)'
          : profile.shape === 'clipped'
            ? 'polygon(10% 0, 100% 0, 100% 90%, 90% 100%, 0 100%, 0 10%)'
            : profile.shape === 'bracket'
              ? 'polygon(0 0, 92% 0, 100% 8%, 100% 100%, 8% 100%, 0 92%)'
              : undefined;

      return (
        <span
          className={cx('relative inline-flex h-28 w-28 items-center justify-center overflow-hidden', className)}
          style={{
            ...getSurfaceStyle(versionKey, version, visualType, colors, style, { disableClip: true }),
            clipPath: bezelClip,
            borderRadius: profile.shape === 'pill' ? '999px' : undefined,
            backgroundImage: dialPattern,
            backgroundSize: profile.hasHoneycomb ? '10px 10px' : profile.hasGrid ? '12px 12px' : undefined,
            filter: `drop-shadow(0 0 8px ${visual.glow})`,
          }}
        >
          {profile.hasTerminalBar ? (
            <span
              className="pointer-events-none absolute inset-x-3 top-2 z-[2] h-1 rounded-full opacity-80"
              style={{ background: `linear-gradient(90deg, transparent, ${palette.accentPrimary}, transparent)` }}
            />
          ) : null}
          {profile.hasBrackets ? (
            <span className="pointer-events-none absolute inset-0 z-[2]">
              <span className="absolute left-1 top-1 h-2.5 w-2.5 border-l border-t" style={{ borderColor: palette.accentPrimary }} />
              <span className="absolute right-1 top-1 h-2.5 w-2.5 border-r border-t" style={{ borderColor: palette.accentPrimary }} />
              <span className="absolute bottom-1 left-1 h-2.5 w-2.5 border-b border-l" style={{ borderColor: palette.accentPrimary }} />
              <span className="absolute bottom-1 right-1 h-2.5 w-2.5 border-b border-r" style={{ borderColor: palette.accentPrimary }} />
            </span>
          ) : null}
          <AnalogClockBase
            ref={ref}
            className="h-[88%] w-[88%]"
            style={{
              color: visual.color,
            }}
            {...props}
          />
        </span>
      );
    }
  );

  AnalogClock.displayName = 'AnalogClock';

  return {
    AnalogClock,
  };
}
