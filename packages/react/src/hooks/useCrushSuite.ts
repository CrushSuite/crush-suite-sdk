import { createContext, useContext } from 'react';
import { CrushSuiteAPI } from '@crushsuite/sdk';

export const CrushSuiteContext = createContext<CrushSuiteAPI | null>(null);

export const useCrushSuite = () => {
  const ctx = useContext(CrushSuiteContext);
  if (!ctx) throw new Error('useCrushSuite must be used within CrushSuiteProvider');
  return ctx;
};
