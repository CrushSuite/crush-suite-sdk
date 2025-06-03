import { createContext, useContext } from "react";
export const CrushSuiteContext = createContext({
    namespace: "app--98845425665--crush_suite",
    customerDOB: null,
    customerDefaultAddress: null,
    shippingState: null,
});
export const useCrushSuite = () => {
    const ctx = useContext(CrushSuiteContext);
    if (!ctx)
        throw new Error("useCrushSuite must be used within CrushSuiteProvider");
    return ctx;
};
