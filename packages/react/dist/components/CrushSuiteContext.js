"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useState } from "react";
import { CRUSH_SUITE_NAMESPACE, CRUSHSUITE_SHIPPING_STATE, CRUSHSUITE_CUSTOMER_DOB, } from "../constants";
import { getCookie, setCookie, removeCookie } from "../lib/cookies";
const defaultContext = {
    namespace: CRUSH_SUITE_NAMESPACE,
    customerDOB: null,
    setCustomerDOB: () => { },
    customerDefaultAddress: null,
    setCustomerDefaultAddress: () => { },
    shippingState: null,
    setShippingState: () => { },
    ageVerified: false,
    setAgeVerified: () => { },
};
export const CrushSuiteContext = createContext(defaultContext);
export const CrushSuiteProvider = ({ children, }) => {
    const [customerDOB, setCustomerDOB] = useState(getCookie(CRUSHSUITE_CUSTOMER_DOB));
    const [customerDefaultAddress, setCustomerDefaultAddress] = useState(null);
    const [shippingState, setShippingState] = useState(getCookie(CRUSHSUITE_SHIPPING_STATE));
    const [ageVerified, setAgeVerified] = useState(false);
    const saveCustomerDOB = (dob) => {
        setCustomerDOB(dob);
        if (dob) {
            setCookie(CRUSHSUITE_CUSTOMER_DOB, dob);
        }
        else {
            removeCookie(CRUSHSUITE_CUSTOMER_DOB);
        }
    };
    const saveShippingState = (state) => {
        setShippingState(state);
        if (state) {
            setCookie(CRUSHSUITE_SHIPPING_STATE, state);
        }
        else {
            removeCookie(CRUSHSUITE_SHIPPING_STATE);
        }
    };
    const contextValue = {
        namespace: CRUSH_SUITE_NAMESPACE,
        customerDOB,
        setCustomerDOB: saveCustomerDOB,
        customerDefaultAddress,
        setCustomerDefaultAddress,
        shippingState,
        setShippingState: saveShippingState,
        ageVerified,
        setAgeVerified,
    };
    return (_jsx(CrushSuiteContext.Provider, { value: contextValue, children: children }));
};
