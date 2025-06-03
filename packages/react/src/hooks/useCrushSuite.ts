import { createContext, useContext } from "react";
import { CrushSuiteContext as CrushSuiteContextType } from "../types";

export const CrushSuiteContext = createContext<CrushSuiteContextType>({
  namespace: "app--98845425665--crush_suite",
  customerDOB: null,
  customerDefaultAddress: null,
});

export const useCrushSuite = () => {
  const ctx = useContext(CrushSuiteContext);
  if (!ctx)
    throw new Error("useCrushSuite must be used within CrushSuiteProvider");
  return ctx;
};
