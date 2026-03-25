import React, { useMemo, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShowcaseControls, type ShowcaseControlState, type ShowcaseExtraControl } from '../../components/ShowcaseControls';
import { findUIComponentBySlug, uiComponentRegistry } from './registry';
import { VERSIONS, type Variant } from '../../ui';
import * as UI from '../../ui';
import { ComponentRenderer, DEFAULT_RENDERER_ERROR_FALLBACK, DEFAULT_RENDERER_SUSPENSE_FALLBACK } from '../../ui/core/renderer';

type ShowcaseExtras = {
  duration: number;
  showLoader: boolean;
  size: string;
  progressValue: number;
  sliderValue: number;
};

type ShowcaseExport = React.ElementType | undefined;

const previewSuspenseFallback = DEFAULT_RENDERER_SUSPENSE_FALLBACK;
const previewErrorFallback = DEFAULT_RENDERER_ERROR_FALLBACK;

function renderUnavailablePreview(version: string, reason?: string) {
  return (
    <div className="rounded border border-amber-500/30 p-3 text-xs text-amber-300">
      <div>Preview unavailable for {version}</div>
      {reason ? <div className="mt-1 opacity-80">{reason}</div> : null}
    </div>
  );
}

function isRenderableComponent(value: unknown): value is React.ElementType {
  return typeof value === 'function' || (typeof value === 'object' && value !== null);
}

function getRequiredMembers(component: Record<string, unknown>, members: ReadonlyArray<string>) {
  const resolved: Record<string, React.ElementType> = {};

  for (const member of members) {
    const candidate = component[member];
    if (!isRenderableComponent(candidate)) {
      return undefined;
    }
    resolved[member] = candidate;
  }

  return resolved;
}

function renderSample(
  slug: string,
  componentExport: ShowcaseExport,
  version: string,
  controls: ShowcaseControlState<ShowcaseExtras>,
  animateNonce: number
) {
  const unavailable = (reason?: string) => renderUnavailablePreview(version, reason);

  if (!componentExport && slug !== 'toast' && slug !== 'typography') {
    return unavailable();
  }

  const Component = componentExport as React.ElementType;
  const compoundComponent =
    typeof componentExport === 'object' && componentExport !== null
      ? (componentExport as Record<string, unknown>)
      : {};
  const commonProps = {
    version,
    variant: controls.variant as Variant,
    type: controls.type,
  } as const;

  switch (slug) {
    case 'analog-clock':
      return <Component key={`${version}-${animateNonce}`} {...commonProps} timezone="UTC" className="h-28 w-28" />;
    case 'accordion': {
      const parts = getRequiredMembers(compoundComponent, ['Item', 'Trigger', 'Content']);
      if (!parts) {
        return unavailable('Missing compound members: Item, Trigger, or Content');
      }
      const { Item, Trigger, Content } = parts;
      return (
        <Component key={`${version}-${animateNonce}`} {...commonProps} type="single" collapsible>
          <Item value="item-1">
            <Trigger>Section</Trigger>
            <Content>Accordion content</Content>
          </Item>
        </Component>
      );
    }
    case 'alert-dialog': {
      const parts = getRequiredMembers(compoundComponent, [
        'Trigger',
        'Content',
        'Header',
        'Title',
        'Description',
        'Footer',
        'Cancel',
        'Action',
      ]);
      if (!parts) {
        return unavailable('Missing compound members required for alert-dialog preview');
      }
      const { Trigger, Content, Header, Title, Description, Footer, Cancel, Action } = parts;
      return (
        <Component key={`${version}-${animateNonce}`} {...commonProps}>
          <Trigger asChild>
            <button className="rounded border border-cyan-500/50 px-3 py-1 text-xs">Open</button>
          </Trigger>
          <Content>
            <Header>
              <Title>Confirm action</Title>
              <Description>Version {version}</Description>
            </Header>
            <Footer>
              <Cancel>Cancel</Cancel>
              <Action>Continue</Action>
            </Footer>
          </Content>
        </Component>
      );
    }
    case 'button':
      return (
        <Component key={`${version}-${animateNonce}`} {...commonProps} size={controls.extras.size}>
          Trigger
        </Component>
      );
    case 'chart': {
      const parts = getRequiredMembers(compoundComponent, ['Container']);
      if (!parts) {
        return unavailable('Missing compound member: Container');
      }
      const { Container } = parts;
      return (
        <Component key={`${version}-${animateNonce}`} {...commonProps}>
          <Container className="h-24 w-full min-w-[12rem] rounded border border-cyan-500/20 p-3 text-xs">
            Chart preview
          </Container>
        </Component>
      );
    }
    case 'collapsible': {
      const parts = getRequiredMembers(compoundComponent, ['Trigger', 'Content']);
      if (!parts) {
        return unavailable('Missing compound members: Trigger or Content');
      }
      const { Trigger, Content } = parts;
      return (
        <Component key={`${version}-${animateNonce}`} {...commonProps}>
          <Trigger className="rounded border border-cyan-500/30 px-3 py-1 text-xs">Toggle</Trigger>
          <Content className="pt-2 text-xs opacity-80">Collapsible content</Content>
        </Component>
      );
    }
    case 'card':
      return (
        <Component key={`${version}-${animateNonce}`} {...commonProps}>
          <UI.CardHeader>
            <UI.CardTitle>Telemetry</UI.CardTitle>
            <UI.CardDescription>Cyber card preview</UI.CardDescription>
          </UI.CardHeader>
          <UI.CardContent>Version {version}</UI.CardContent>
        </Component>
      );
    case 'alert':
      return (
        <Component key={`${version}-${animateNonce}`} {...commonProps}>
          <UI.AlertTitle>Status</UI.AlertTitle>
          <UI.AlertDescription>Version {version} alert</UI.AlertDescription>
        </Component>
      );
    case 'badge':
      return <Component key={`${version}-${animateNonce}`} {...commonProps}>ACTIVE</Component>;
    case 'input':
      return <Component key={`${version}-${animateNonce}`} {...commonProps} placeholder={`Input • ${version}`} />;
    case 'textarea':
      return <Component key={`${version}-${animateNonce}`} {...commonProps} placeholder={`Textarea • ${version}`} />;
    case 'checkbox':
      return <Component key={`${version}-${animateNonce}`} {...commonProps} defaultChecked />;
    case 'switch':
      return <Component key={`${version}-${animateNonce}`} {...commonProps} defaultChecked />;
    case 'digital-clock':
      return <Component key={`${version}-${animateNonce}`} {...commonProps} timezone="UTC" format="24h" showSeconds className="min-w-[12rem]" />;
    case 'dialog': {
      const parts = getRequiredMembers(compoundComponent, ['Trigger', 'Content', 'Header', 'Title', 'Description', 'Footer', 'Close']);
      if (!parts) {
        return unavailable('Missing compound members required for dialog preview');
      }
      const { Trigger, Content, Header, Title, Description, Footer, Close } = parts;
      return (
        <Component key={`${version}-${animateNonce}`} {...commonProps}>
          <Trigger asChild>
            <button className="rounded border border-cyan-500/50 px-3 py-1 text-xs">Open</button>
          </Trigger>
          <Content>
            <Header>
              <Title>Dialog</Title>
              <Description>Version {version}</Description>
            </Header>
            <Footer>
              <Close>Close</Close>
            </Footer>
          </Content>
        </Component>
      );
    }
    case 'dropdown-menu': {
      const parts = getRequiredMembers(compoundComponent, ['Trigger', 'Content', 'Item', 'Separator']);
      if (!parts) {
        return unavailable('Missing compound members required for dropdown-menu preview');
      }
      const { Trigger, Content, Item, Separator } = parts;
      return (
        <Component key={`${version}-${animateNonce}`} {...commonProps}>
          <Trigger asChild>
            <button className="rounded border border-cyan-500/50 px-3 py-1 text-xs">Menu</button>
          </Trigger>
          <Content>
            <Item>Action</Item>
            <Separator />
            <Item>Secondary</Item>
          </Content>
        </Component>
      );
    }
    case 'hover-card':
      return (
        <Component key={`${version}-${animateNonce}`} {...commonProps}>
          <UI.HoverCardTrigger asChild>
            <button className="rounded border border-cyan-500/50 px-3 py-1 text-xs">Hover</button>
          </UI.HoverCardTrigger>
          <UI.HoverCardContent>Hover card content</UI.HoverCardContent>
        </Component>
      );
    case 'progress':
      return <Component key={`${version}-${animateNonce}`} {...commonProps} value={controls.extras.progressValue} />;
    case 'input-otp':
      return <Component key={`${version}-${animateNonce}`} {...commonProps} maxLength={6} />;
    case 'menubar': {
      const parts = getRequiredMembers(compoundComponent, ['Menu', 'Trigger', 'Content', 'Item']);
      if (!parts) {
        return unavailable('Missing compound members required for menubar preview');
      }
      const { Menu, Trigger, Content, Item } = parts;
      return (
        <Component key={`${version}-${animateNonce}`} {...commonProps}>
          <Menu>
            <Trigger>File</Trigger>
            <Content>
              <Item>New</Item>
              <Item>Open</Item>
            </Content>
          </Menu>
        </Component>
      );
    }
    case 'navigation-menu': {
      const parts = getRequiredMembers(compoundComponent, ['List', 'Item', 'Trigger', 'Content']);
      if (!parts) {
        return unavailable('Missing compound members required for navigation-menu preview');
      }
      const { List, Item, Trigger, Content } = parts;
      return (
        <Component key={`${version}-${animateNonce}`} {...commonProps}>
          <List>
            <Item>
              <Trigger>Docs</Trigger>
              <Content className="p-2 text-xs">Navigation content</Content>
            </Item>
          </List>
        </Component>
      );
    }
    case 'popover': {
      const parts = getRequiredMembers(compoundComponent, ['Trigger', 'Content']);
      if (!parts) {
        return unavailable('Missing compound members: Trigger or Content');
      }
      const { Trigger, Content } = parts;
      return (
        <Component key={`${version}-${animateNonce}`} {...commonProps}>
          <Trigger asChild>
            <button className="rounded border border-cyan-500/50 px-3 py-1 text-xs">Open</button>
          </Trigger>
          <Content>Popover content</Content>
        </Component>
      );
    }
    case 'radio-group':
      return (
        <Component key={`${version}-${animateNonce}`} {...commonProps} defaultValue="a">
          <UI.RadioGroupItem value="a" />
          <UI.RadioGroupItem value="b" />
        </Component>
      );
    case 'resizable':
      return (
        <Component key={`${version}-${animateNonce}`} {...commonProps} direction="horizontal" className="min-h-24 min-w-[14rem] rounded border">
          <UI.ResizablePanel defaultSize={50} className="p-2 text-xs">Left</UI.ResizablePanel>
          <UI.ResizableHandle withHandle />
          <UI.ResizablePanel defaultSize={50} className="p-2 text-xs">Right</UI.ResizablePanel>
        </Component>
      );
    case 'scroll-area':
      return (
        <Component key={`${version}-${animateNonce}`} {...commonProps} className="h-28 w-full rounded border" withHorizontalBar>
          <div className="min-w-[26rem] space-y-1 p-2 text-xs">
            {Array.from({ length: 10 }).map((_, index) => (
              <div key={index}>Scrollable item {index + 1}</div>
            ))}
          </div>
        </Component>
      );
    case 'select': {
      const parts = getRequiredMembers(compoundComponent, ['Trigger', 'Value', 'Content', 'Item']);
      if (!parts) {
        return unavailable('Missing compound members required for select preview');
      }
      const { Trigger, Value, Content, Item } = parts;
      return (
        <Component key={`${version}-${animateNonce}`} {...commonProps}>
          <Trigger className="min-w-[10rem]">
            <Value placeholder="Pick option" />
          </Trigger>
          <Content>
            <Item value="one">Option one</Item>
            <Item value="two">Option two</Item>
          </Content>
        </Component>
      );
    }
    case 'slider':
      return <Component key={`${version}-${animateNonce}`} {...commonProps} value={[controls.extras.sliderValue]} max={100} step={1} />;
    case 'sonner':
      return <Component key={`${version}-${animateNonce}`} {...commonProps} duration={Number(controls.extras.duration ?? 4) * 1000} showLoader={Boolean(controls.extras.showLoader)} />;
    case 'table': {
      const parts = getRequiredMembers(compoundComponent, ['Header', 'Row', 'Head', 'Body', 'Cell']);
      if (!parts) {
        return unavailable('Missing compound members required for table preview');
      }
      const { Header, Row, Head, Body, Cell } = parts;
      return (
        <Component key={`${version}-${animateNonce}`} {...commonProps}>
          <Header>
            <Row>
              <Head>Name</Head>
              <Head>Status</Head>
            </Row>
          </Header>
          <Body>
            <Row>
              <Cell>Node A</Cell>
              <Cell>Active</Cell>
            </Row>
          </Body>
        </Component>
      );
    }
    case 'tabs': {
      const parts = getRequiredMembers(compoundComponent, ['List', 'Trigger', 'Content']);
      if (!parts) {
        return unavailable('Missing compound members required for tabs preview');
      }
      const { List, Trigger, Content } = parts;
      return (
        <Component key={`${version}-${animateNonce}`} {...commonProps} defaultValue="overview" className="w-full">
          <List>
            <Trigger value="overview">Overview</Trigger>
            <Trigger value="details">Details</Trigger>
          </List>
          <Content value="overview" className="pt-2 text-xs">Overview content</Content>
          <Content value="details" className="pt-2 text-xs">Details content</Content>
        </Component>
      );
    }
    case 'toast':
      const toastProps = {
        version,
      } as const;
      return (
        <UI.ToastProvider>
          <UI.Toast key={`${version}-${animateNonce}`} {...toastProps}>
            <UI.ToastTitle>Toast title</UI.ToastTitle>
            <UI.ToastDescription>Version {version}</UI.ToastDescription>
            <UI.ToastClose />
          </UI.Toast>
          <UI.ToastViewport />
        </UI.ToastProvider>
      );
    case 'toggle-group': {
      const parts = getRequiredMembers(compoundComponent, ['Item']);
      if (!parts) {
        return unavailable('Missing compound member: Item');
      }
      const { Item } = parts;
      return (
        <Component key={`${version}-${animateNonce}`} {...commonProps} type="single">
          <Item value="left">L</Item>
          <Item value="center">C</Item>
          <Item value="right">R</Item>
        </Component>
      );
    }
    case 'tooltip':
      return (
        <UI.TooltipProvider>
          <Component key={`${version}-${animateNonce}`} {...commonProps}>
            <UI.TooltipTrigger asChild>
              <button className="rounded border border-cyan-500/50 px-3 py-1 text-xs">Hover</button>
            </UI.TooltipTrigger>
            <UI.TooltipContent>Tooltip content</UI.TooltipContent>
          </Component>
        </UI.TooltipProvider>
      );
    case 'typography':
      return (
        <div className="w-full max-w-2xl space-y-3 text-left">
          <UI.Typography.H2 key={`${version}-${animateNonce}-h2`} {...commonProps}>Typography System</UI.Typography.H2>
          <UI.Typography.P key={`${version}-${animateNonce}-p`} {...commonProps}>
            Body copy with variant/type-driven tone across versions.
          </UI.Typography.P>
          <UI.Typography.Code key={`${version}-${animateNonce}-code`} {...commonProps}>inline_code()</UI.Typography.Code>
          <UI.Typography.Blockquote key={`${version}-${animateNonce}-blockquote`} {...commonProps}>Design language should follow the selected version.</UI.Typography.Blockquote>
          <UI.Typography.Callout key={`${version}-${animateNonce}-callout`} {...commonProps}>Callout block for important notes.</UI.Typography.Callout>
          <UI.Typography.CodeBlock key={`${version}-${animateNonce}-codeblock`} {...commonProps}>{`const status = 'stable';`}</UI.Typography.CodeBlock>
        </div>
      );
    default:
      return <Component key={`${version}-${animateNonce}`} {...commonProps}>Sample {version}</Component>;
  }
}

interface ShowcasePreviewTileProps {
  slug: string;
  componentExport: ShowcaseExport;
  version: string;
  controls: ShowcaseControlState<ShowcaseExtras>;
  animateNonce: number;
}

function ShowcasePreviewTile({ slug, componentExport, version, controls, animateNonce }: ShowcasePreviewTileProps) {
  return <div className="flex min-h-24 w-full items-center justify-center">{renderSample(slug, componentExport, version, controls, animateNonce)}</div>;
}

interface UIComponentShowcaseBySlugProps {
  slug?: string;
}

export function UIComponentShowcaseBySlug({ slug }: UIComponentShowcaseBySlugProps) {
  const entry = findUIComponentBySlug(slug);
  const componentExport = useMemo(() => {
    if (!entry) {
      return undefined;
    }
    const exported = (UI as Record<string, unknown>)[entry.exportName];
    return isRenderableComponent(exported) ? (exported as ShowcaseExport) : undefined;
  }, [entry]);

  const [controls, setControls] = useState<ShowcaseControlState<ShowcaseExtras>>({
    type: 'default',
    variant: 'default',
    extras: { duration: 4, showLoader: true, size: 'default', progressValue: 66, sliderValue: 50 },
  });
  const [isVisible, setIsVisible] = useState(true);
  const [animateNonce, setAnimateNonce] = useState(0);
  const extraControls = useMemo<ReadonlyArray<ShowcaseExtraControl<ShowcaseExtras>>>(() => {
    const controlsList: ShowcaseExtraControl<ShowcaseExtras>[] = [];

    if (slug === 'button') {
      controlsList.push({
        key: 'size',
        kind: 'select',
        label: 'Size',
        options: [
          { label: 'Default', value: 'default' },
          { label: 'Small', value: 'sm' },
          { label: 'Large', value: 'lg' },
          { label: 'Icon', value: 'icon' },
        ],
        defaultValue: 'default',
      });
    }

    if (slug === 'progress') {
      controlsList.push({
        key: 'progressValue',
        kind: 'range',
        label: 'Progress',
        min: 0,
        max: 100,
        step: 1,
        defaultValue: 66,
      });
    }

    if (slug === 'slider') {
      controlsList.push({
        key: 'sliderValue',
        kind: 'range',
        label: 'Slider value',
        min: 0,
        max: 100,
        step: 1,
        defaultValue: 50,
      });
    }

    if (slug === 'sonner') {
      controlsList.push(
        {
          key: 'duration',
          kind: 'range',
          label: 'Duration',
          description: 'Toast duration in seconds',
          min: 1,
          max: 15,
          step: 1,
          defaultValue: 4,
        },
        {
          key: 'showLoader',
          kind: 'toggle',
          label: 'Show loader',
          defaultValue: true,
        }
      );
    }

    return controlsList;
  }, [slug]);

  const versionTiles = useMemo(
    () =>
      VERSIONS.map((version) => (
        <ComponentRenderer
          key={version}
          component="article"
          props={{
            className: `rounded-lg border border-gray-800 bg-gray-900/40 p-4 transition-all duration-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'pointer-events-none opacity-0 translate-y-4'
            }`,
          }}
        >
          <h3 className="mb-3 border-b border-gray-800 pb-2 text-xs font-bold uppercase tracking-widest text-cyan-400">{version}</h3>
          <ComponentRenderer
            component={ShowcasePreviewTile}
            props={{
              slug: slug ?? '',
              componentExport,
              version,
              controls,
              animateNonce,
            }}
            wrapInSuspense
            suspenseFallback={previewSuspenseFallback}
            errorFallback={() => renderUnavailablePreview(version)}
          />
        </ComponentRenderer>
      )),
    [animateNonce, componentExport, controls, isVisible, slug]
  );

  if (!entry) {
    return (
      <div className="mx-auto w-full max-w-5xl px-6 py-20 text-center">
        <h1 className="mb-3 text-3xl font-black tracking-wider">Component not found</h1>
        <p className="mb-8 text-sm opacity-70">Check the registry mapping for this route.</p>
        <Link to="/ui" className="rounded border border-cyan-500/40 px-4 py-2 text-sm">
          Back to components
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full">
      <ShowcaseControls<ShowcaseExtras>
        value={controls}
        onChange={setControls}
        extraControls={extraControls}
        onAnimateIn={() => {
          setIsVisible(true);
          setAnimateNonce((value) => value + 1);
        }}
        onAnimateOut={() => setIsVisible(false)}
      />

      <div className="mx-auto w-full max-w-7xl px-6 py-8">
        <header className="mb-8">
          <h1 className="text-3xl font-black tracking-wider">{entry.name}</h1>
          <p className="mt-2 text-sm opacity-70">{entry.description}</p>
          <p className="mt-2 text-xs opacity-60">
            {uiComponentRegistry.length} components • {VERSIONS.length} versions
          </p>
        </header>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {versionTiles}
        </div>
      </div>
    </div>
  );
}

export function UIComponentShowcasePage() {
  const { slug } = useParams<{ slug: string }>();
  return <UIComponentShowcaseBySlug slug={slug} />;
}

