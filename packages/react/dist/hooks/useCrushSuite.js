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
export const CrushSuiteContext = createContext(defaultContext);
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
    return value = { contextValue } >
        { children }
        < /CrushSuiteContext.Provider>;
};
;
;
export const useCrushSuite = () => {
    return useContext(CrushSuiteContext);
};
