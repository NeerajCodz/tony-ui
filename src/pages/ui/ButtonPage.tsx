import { useState } from 'react';
import { 
  Button, 
  IconButton,
  BUTTON_VERSION_CONFIGS,
  ICON_BUTTON_VERSION_CONFIGS
} from '../../ui';
import type { 
  ButtonType, 
  ButtonVariant, 
  ButtonSize,
  ButtonVersion,
  IconButtonVersion
} from '../../ui';
import { VscRocket, VscSave, VscGear, VscTrash, VscBeaker, VscCloudDownload } from "react-icons/vsc";

export function UIButtonPage() {
  const buttonVersions = Object.keys(BUTTON_VERSION_CONFIGS) as ButtonVersion[];
  const iconButtonVersions = Object.keys(ICON_BUTTON_VERSION_CONFIGS) as IconButtonVersion[];
  const variants: ButtonVariant[] = ['neutral', 'primary', 'success', 'warning', 'info', 'destructive'];
  const types: ButtonType[] = ['default', 'outline', 'solid'];
  const sizes: ButtonSize[] = ['sm', 'md', 'lg', 'xl'];

  const [currentType, setCurrentType] = useState<ButtonType>('default');
  const [currentVariant, setCurrentVariant] = useState<ButtonVariant>('primary');
  const [currentSize, setCurrentSize] = useState<ButtonSize>('md');
  const [isAnimated, setIsAnimated] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);

  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2 text-cyan-400">Button & Icon Button Components</h1>
        <p className="text-gray-400">6 button versions and 5 icon button versions, all with dynamic types, variants, sizes, and animations.</p>
      </div>

      <div className="space-y-6 p-4">
        <div className="flex flex-wrap items-center gap-8 p-4 rounded-lg bg-gray-800/50">
          <div>
            <label htmlFor="btn-type" className="block text-sm font-medium text-gray-300 mb-2">Type</label>
            <select
              id="btn-type"
              value={currentType}
              onChange={(e) => setCurrentType(e.target.value as ButtonType)}
              className="bg-gray-900 border border-gray-700 text-white rounded-md p-2"
            >
              {types.map(t => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>
          <div>
            <label htmlFor="btn-variant" className="block text-sm font-medium text-gray-300 mb-2">Variant</label>
            <select
              id="btn-variant"
              value={currentVariant}
              onChange={(e) => setCurrentVariant(e.target.value as ButtonVariant)}
              className="bg-gray-900 border border-gray-700 text-white rounded-md p-2"
            >
              {variants.map(v => <option key={v} value={v}>{v}</option>)}
            </select>
          </div>
          <div>
            <label htmlFor="btn-size" className="block text-sm font-medium text-gray-300 mb-2">Size</label>
            <select
              id="btn-size"
              value={currentSize}
              onChange={(e) => setCurrentSize(e.target.value as ButtonSize)}
              className="bg-gray-900 border border-gray-700 text-white rounded-md p-2"
            >
              {sizes.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
          <div className="flex gap-6 pt-6">
            <label htmlFor="btn-animated" className="flex items-center gap-2 text-sm font-medium text-gray-300">
              <input
                id="btn-animated"
                type="checkbox"
                checked={isAnimated}
                onChange={(e) => setIsAnimated(e.target.checked)}
                className="h-4 w-4 rounded bg-gray-700 border-gray-600 text-cyan-500 focus:ring-cyan-600"
              />
              Animate
            </label>
            <label htmlFor="btn-disabled" className="flex items-center gap-2 text-sm font-medium text-gray-300">
              <input
                id="btn-disabled"
                type="checkbox"
                checked={isDisabled}
                onChange={(e) => setIsDisabled(e.target.checked)}
                className="h-4 w-4 rounded bg-gray-700 border-gray-600 text-cyan-500 focus:ring-cyan-600"
              />
              Disabled
            </label>
          </div>
        </div>
      </div>

      <div className="space-y-16 w-full p-4">
        
        {/* Section 1: All Button Versions */}
        <section>
          <h3 className="text-2xl font-bold mb-8 uppercase tracking-wide text-cyan-300">
            Button Versions
          </h3>
          <div className="flex flex-wrap items-center gap-4">
            {buttonVersions.map(version => (
              <Button 
                key={version}
                version={version}
                type={currentType}
                variant={currentVariant}
                size={currentSize}
                animated={isAnimated}
                disabled={isDisabled}
              >
                {BUTTON_VERSION_CONFIGS[version].name}
              </Button>
            ))}
          </div>
        </section>

        {/* Section 2: All Icon Button Versions */}
        <section>
          <h3 className="text-2xl font-bold mb-8 uppercase tracking-wide text-cyan-300">
            Icon Button Versions
          </h3>
          <div className="flex flex-wrap items-center gap-4">
            {iconButtonVersions.map(version => (
              <IconButton 
                key={version}
                version={version}
                type={currentType}
                variant={currentVariant}
                animated={isAnimated}
                disabled={isDisabled}
                label={ICON_BUTTON_VERSION_CONFIGS[version].name}
                icon={<VscRocket />}
              />
            ))}
          </div>
        </section>

        {/* Section 3: Variant Showcase */}
        <section>
          <h3 className="text-2xl font-bold mb-8 uppercase tracking-wide text-cyan-300">
            Variant Showcase
          </h3>
          <div className="flex flex-wrap items-center gap-4 mb-8">
            {variants.map(variant => (
              <Button 
                key={variant}
                version="default"
                type={currentType}
                variant={variant}
                size={currentSize}
                animated={isAnimated}
                disabled={isDisabled}
              >
                {variant}
              </Button>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-4">
            {variants.map(variant => (
              <IconButton 
                key={variant}
                version="default"
                type={currentType}
                variant={variant}
                animated={isAnimated}
                disabled={isDisabled}
                label={variant}
                icon={<VscBeaker />}
              />
            ))}
          </div>
        </section>

        {/* Section 4: Size Showcase */}
        <section>
          <h3 className="text-2xl font-bold mb-8 uppercase tracking-wide text-cyan-300">
            Size Showcase
          </h3>
          <div className="flex flex-wrap items-center gap-4">
            {sizes.map(size => (
              <Button 
                key={size}
                version="default"
                type={currentType}
                variant={currentVariant}
                size={size}
                animated={isAnimated}
                disabled={isDisabled}
              >
                Size: {size.toUpperCase()}
              </Button>
            ))}
          </div>
        </section>

        {/* Section 5: Full Featured Example */}
        <section>
          <h3 className="text-2xl font-bold mb-8 uppercase tracking-wide text-cyan-300">
            Full Featured Example
          </h3>
          <div className="p-8 rounded-lg bg-gray-900/70 border border-gray-700 flex flex-wrap items-center gap-6">
            <Button version="large" type="solid" variant="success" animated size="lg" disabled={isDisabled}>
              <div className="flex items-center"><VscSave className="mr-2" /> Save Changes</div>
            </Button>
            <Button version="pill" type="outline" variant="info" animated size="md" disabled={isDisabled}>
              <div className="flex items-center"><VscCloudDownload className="mr-2" /> Download</div>
            </Button>
            <IconButton version="circle" type="default" variant="destructive" animated label="Delete" disabled={isDisabled} icon={<VscTrash />} />
            <IconButton version="floating" type="solid" variant="primary" animated label="Settings" disabled={isDisabled} icon={<VscGear />} />
          </div>
        </section>

      </div>
    </div>
  );
}
