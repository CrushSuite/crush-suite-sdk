import { createContext, useContext } from 'react';
export const CrushSuiteContext = createContext(null);
export const useCrushSuite = () => {
    const ctx = useContext(CrushSuiteContext);
    if (!ctx)
        throw new Error('useCrushSuite must be used within CrushSuiteProvider');
    return ctx;
};
