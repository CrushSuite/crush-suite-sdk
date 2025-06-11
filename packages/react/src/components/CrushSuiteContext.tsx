"use client";
import React, { createContext, useState } from "react";
import type { CrushSuiteContextType, USAStateAbbreviation } from "../types";
import { CRUSH_SUITE_NAMESPACE } from "../constants";

const defaultContext: CrushSuiteContextType = {
  namespace: CRUSH_SUITE_NAMESPACE,
  customerDOB: null,
  setCustomerDOB: () => {},
  customerDefaultAddress: null,
  setCustomerDefaultAddress: () => {},
  shippingState: null,
  setShippingState: () => {},
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

  const contextValue: CrushSuiteContextType = {
    namespace: CRUSH_SUITE_NAMESPACE,
    customerDOB,
    setCustomerDOB,
    customerDefaultAddress,
    setCustomerDefaultAddress,
    shippingState,
    setShippingState,
  };

  return (
    <CrushSuiteContext.Provider value={contextValue}>
      {children}
    </CrushSuiteContext.Provider>
  );
};
