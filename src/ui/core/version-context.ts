import { createContext, useContext } from 'react';
import type { Version } from '../types/common';

export interface VersionContextType {
  version: Version;
  setVersion: (version: Version) => void;
}

export const VersionContext = createContext<VersionContextType | undefined>(undefined);

export function useVersion() {
  const context = useContext(VersionContext);
  return context || { version: 'default' as Version, setVersion: () => {} };
}
