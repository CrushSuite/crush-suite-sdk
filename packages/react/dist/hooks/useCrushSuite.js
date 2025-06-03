"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useState } from "react";
// 1️⃣ Define your default context value with NOOP setters to prevent runtime errors
const defaultContext = {
    namespace: "app--98845425665--crush_suite",
    customerDOB: null,
    setCustomerDOB: () => { },
    customerDefaultAddress: null,
    setCustomerDefaultAddress: () => { },
    shippingState: null,
    setShippingState: () => { },
};
const CrushSuiteContext = createContext(defaultContext);
export const CrushSuiteProvider = ({ children, }) => {
    const [customerDOB, setCustomerDOB] = useState(null);
    const [customerDefaultAddress, setCustomerDefaultAddress] = useState(null);
    const [shippingState, setShippingState] = useState(null);
    const contextValue = {
        namespace: "app--98845425665--crush_suite", // Keep this consistent
        customerDOB,
        setCustomerDOB,
        customerDefaultAddress,
        setCustomerDefaultAddress,
        shippingState,
        setShippingState,
    };
    // value={contextValue}
    return (_jsx(CrushSuiteContext.Provider, { value: contextValue, children: children }));
};
export const useCrushSuite = () => {
    return useContext(CrushSuiteContext);
};
