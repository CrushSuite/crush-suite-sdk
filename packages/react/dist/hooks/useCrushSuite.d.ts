import React from "react";
import { CrushSuiteContext as CrushSuiteContextType } from "../types";
export declare const CrushSuiteContext: React.Context<CrushSuiteContextType>;
export declare const CrushSuiteProvider: React.FC<{
    children: React.ReactNode;
}>;
export declare const useCrushSuite: () => CrushSuiteContextType;
