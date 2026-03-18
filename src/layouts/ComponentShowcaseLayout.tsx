import { ReactNode, useState } from 'react';
import { Variant } from '../types';

interface ComponentShowcaseLayoutProps {
  componentName: string;
  versions: (string | number)[];
  variants: Variant[];
  description?: string;
  children: (version: string | number, variant: Variant) => ReactNode;
  defaultVersion?: string | number;
  defaultVariant?: Variant;
}

export function ComponentShowcaseLayout({
  componentName,
  versions,
  variants,
  description,
  children,
  defaultVersion = versions[0],
  defaultVariant = 'default',
}: ComponentShowcaseLayoutProps) {
  const [selectedVersion, setSelectedVersion] = useState<string | number>(defaultVersion);
  const [selectedVariant, setSelectedVariant] = useState<Variant>(defaultVariant);

  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-2 text-purple-400">{componentName}</h1>
        {description && <p className="text-gray-400">{description}</p>}
      </div>

      {/* Controls */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Version Selector */}
        <div>
          <label className="block text-sm font-bold text-gray-300 mb-3">VERSION</label>
          <div className="flex flex-wrap gap-2">
            {versions.map((version) => (
              <button
                key={version}
                onClick={() => setSelectedVersion(version)}
                className={`px-4 py-2 rounded transition-all ${
                  selectedVersion === version
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {version}
              </button>
            ))}
          </div>
        </div>

        {/* Variant Selector */}
        <div>
          <label className="block text-sm font-bold text-gray-300 mb-3">VARIANT</label>
          <div className="flex flex-wrap gap-2">
            {variants.map((variant) => (
              <button
                key={variant}
                onClick={() => setSelectedVariant(variant)}
                className={`px-4 py-2 rounded transition-all ${
                  selectedVariant === variant
                    ? 'bg-cyan-600 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {variant}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Component Display */}
      <div className="bg-gray-900 border border-gray-800 rounded-lg p-12 min-h-96">
        <div className="flex items-center justify-center min-h-80">
          {children(selectedVersion, selectedVariant)}
        </div>
      </div>

      {/* Info */}
      <div className="mt-8 text-xs text-gray-500">
        <p>
          Version: <span className="text-gray-300">{selectedVersion}</span> | Variant:{' '}
          <span className="text-gray-300">{selectedVariant}</span>
        </p>
      </div>
    </div>
  );
}
