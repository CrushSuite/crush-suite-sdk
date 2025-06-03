export type CrushSuiteContext = {
    namespace: string;
    customerDOB: string | null;
    setCustomerDOB: () => void;
    customerDefaultAddress: string | null;
    setCustomerDefaultAddress: () => void;
    shippingState: string | null;
    setShippingState: () => void;
};
