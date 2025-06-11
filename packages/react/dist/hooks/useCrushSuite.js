import { useContext } from "react";
import { CrushSuiteContext } from "../components";
export const useCrushSuite = () => {
    // Ensure the context is used within a CrushSuiteProvider
    if (!CrushSuiteContext) {
        throw new Error("useCrushSuite must be used within a CrushSuiteProvider");
    }
    return useContext(CrushSuiteContext);
};
