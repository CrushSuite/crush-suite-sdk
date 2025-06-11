"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useState } from "react";
import { CRUSH_SUITE_NAMESPACE, CRUSHSUITE_SHIPPING_STATE, CRUSHSUITE_CUSTOMER_DOB, CRUSHSUITE_AGE_VERIFIED, } from "../constants";
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
    const [ageVerified, setAgeVerified] = useState(getCookie(CRUSHSUITE_AGE_VERIFIED) === "true" ? true : false);
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
    const saveAgeVerified = (verified) => {
        setAgeVerified(verified);
        if (verified) {
            setCookie(CRUSHSUITE_AGE_VERIFIED, "true");
        }
        else {
            removeCookie(CRUSHSUITE_AGE_VERIFIED);
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
        setAgeVerified: saveAgeVerified,
    };
    return (_jsx(CrushSuiteContext.Provider, { value: contextValue, children: children }));
};
