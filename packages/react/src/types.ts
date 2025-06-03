export type CrushSuiteContextType = {
  namespace: string; // Unique namespace for the Crush Suite instance
  customerDOB: string | null; // ISO date string, e.g., "1990-01-01"
  setCustomerDOB: (arg0: string | null) => void;
  customerDefaultAddress: string | null;
  setCustomerDefaultAddress: (arg0: string | null) => void;
  shippingState: string | null; // 2-letter state code, e.g., "CA" for California
  setShippingState: (arg0: string | null) => void;
};
