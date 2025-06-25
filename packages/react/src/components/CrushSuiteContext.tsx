"use client";
import React, { createContext, useState } from "react";
import type { CrushSuiteContextType, USAStateAbbreviation } from "../types";

import {
  CRUSH_SUITE_NAMESPACE,
  CRUSHSUITE_SHIPPING_STATE,
  CRUSHSUITE_CUSTOMER_DOB,
  CRUSHSUITE_AGE_VERIFIED,
  CRUSHSUITE_COMPLIANCE_FEE_KEY,
} from "../../../core/src";
import { getCookie, setCookie, removeCookie } from "../lib/cookies";

const defaultContext: CrushSuiteContextType = {
  namespace: CRUSH_SUITE_NAMESPACE,
  customerDOB: null,
  setCustomerDOB: () => {},
  customerDefaultAddress: null,
  setCustomerDefaultAddress: () => {},
  shippingState: null,
  setShippingState: () => {},
  ageVerified: false,
  setAgeVerified: () => {},
  complianceProduct: null,
  setComplianceProduct: () => {},
};

export const CrushSuiteContext =
  createContext<CrushSuiteContextType>(defaultContext);

export const CrushSuiteProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [customerDOB, setCustomerDOB] = useState<string | null>(
    getCookie(CRUSHSUITE_CUSTOMER_DOB) as string | null
  );
  const [customerDefaultAddress, setCustomerDefaultAddress] = useState<
    string | null
  >(null);
  const [shippingState, setShippingState] =
    useState<USAStateAbbreviation | null>(
      getCookie(CRUSHSUITE_SHIPPING_STATE) as USAStateAbbreviation | null
    );
  const [ageVerified, setAgeVerified] = useState<boolean>(
    getCookie(CRUSHSUITE_AGE_VERIFIED) === "true" ? true : false
  );

  const saveCustomerDOB = (dob: string | null) => {
    setCustomerDOB(dob);

    if (dob) {
      setCookie(CRUSHSUITE_CUSTOMER_DOB, dob);
    } else {
      removeCookie(CRUSHSUITE_CUSTOMER_DOB);
    }
  };

  const saveShippingState = (state: USAStateAbbreviation | null) => {
    setShippingState(state);

    if (state) {
      setCookie(CRUSHSUITE_SHIPPING_STATE, state);
    } else {
      removeCookie(CRUSHSUITE_SHIPPING_STATE);
    }
  };

  const saveAgeVerified = (verified: boolean) => {
    setAgeVerified(verified);
    if (verified) {
      setCookie(CRUSHSUITE_AGE_VERIFIED, "true");
    } else {
      removeCookie(CRUSHSUITE_AGE_VERIFIED);
    }
  };

  const [complianceProduct, setComplianceProduct] = useState<number | null>(
    null
  );

  const contextValue: CrushSuiteContextType = {
    namespace: CRUSH_SUITE_NAMESPACE,
    customerDOB,
    setCustomerDOB: saveCustomerDOB,
    customerDefaultAddress,
    setCustomerDefaultAddress,
    shippingState,
    setShippingState: saveShippingState,
    ageVerified,
    setAgeVerified: saveAgeVerified,
    complianceProduct,
    setComplianceProduct,
  };

  return (
    <CrushSuiteContext.Provider value={contextValue}>
      {children}
    </CrushSuiteContext.Provider>
  );
};
