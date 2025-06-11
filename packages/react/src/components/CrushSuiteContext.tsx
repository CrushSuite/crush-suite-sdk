"use client";
import React, { createContext, useState } from "react";
import type { CrushSuiteContextType, USAStateAbbreviation } from "../types";
import { CRUSH_SUITE_NAMESPACE } from "../constants";
import { getLocalStore, setLocalStore } from "../lib/localStorage";

const defaultContext: CrushSuiteContextType = {
  namespace: CRUSH_SUITE_NAMESPACE,
  customerDOB: getLocalStore("CRUSHSUITE_CUSTOMER_DOB") as string | null,
  setCustomerDOB: () => {},
  customerDefaultAddress: null,
  setCustomerDefaultAddress: () => {},
  shippingState: getLocalStore(
    "CRUSHSUITE_SHIPPING_STATE"
  ) as USAStateAbbreviation | null,
  setShippingState: () => {},
  ageVerified: false,
  setAgeVerified: () => {},
};

export const CrushSuiteContext =
  createContext<CrushSuiteContextType>(defaultContext);

export const CrushSuiteProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [customerDOB, setCustomerDOB] = useState<string | null>(null);
  const [customerDefaultAddress, setCustomerDefaultAddress] = useState<
    string | null
  >(null);
  const [shippingState, setShippingState] =
    useState<USAStateAbbreviation | null>(null);
  const [ageVerified, setAgeVerified] = useState<boolean>(false);

  const saveCustomerDOB = (dob: string | null) => {
    setCustomerDOB(dob);
    if (dob) {
      setLocalStore("CRUSHSUITE_CUSTOMER_DOB", dob);
    } else {
      localStorage.removeItem("CRUSHSUITE_CUSTOMER_DOB");
    }
  };

  const saveShippingState = (state: USAStateAbbreviation | null) => {
    setShippingState(state);

    if (state) {
      setLocalStore("CRUSHSUITE_SHIPPING_STATE", state);
    } else {
      localStorage.removeItem("CRUSHSUITE_SHIPPING_STATE");
    }
  };

  const contextValue: CrushSuiteContextType = {
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

  return (
    <CrushSuiteContext.Provider value={contextValue}>
      {children}
    </CrushSuiteContext.Provider>
  );
};
