"use client";
import React, { createContext, useContext, useState } from "react";
import { CrushSuiteContextType } from "../types";

// 1️⃣ Define your default context value with NOOP setters to prevent runtime errors
const defaultContext: CrushSuiteContextType = {
  namespace: "app--98845425665--crush_suite",
  customerDOB: null,
  setCustomerDOB: () => {},
  customerDefaultAddress: null,
  setCustomerDefaultAddress: () => {},
  shippingState: null,
  setShippingState: () => {},
};

const CrushSuiteContext = createContext<CrushSuiteContextType>(defaultContext);

export const CrushSuiteProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [customerDOB, setCustomerDOB] = useState<string | null>(null);
  const [customerDefaultAddress, setCustomerDefaultAddress] = useState<
    string | null
  >(null);
  const [shippingState, setShippingState] = useState<string | null>(null);

  const contextValue: CrushSuiteContextType = {
    namespace: "app--98845425665--crush_suite", // Keep this consistent
    customerDOB,
    setCustomerDOB,
    customerDefaultAddress,
    setCustomerDefaultAddress,
    shippingState,
    setShippingState,
  };

  // value={contextValue}

  return (
    <CrushSuiteContext.Provider value={contextValue}>
      {children}
    </CrushSuiteContext.Provider>
  );
};

export const useCrushSuite = () => {
  return useContext(CrushSuiteContext);
};
