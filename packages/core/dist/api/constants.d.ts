export declare const STAGING_API = "https://crush-suite-staging.up.railway.app";
export declare const PRODUCTION_API = "https://crush-suite-production.up.railway.app";
export declare const BASE_PATH = "service-api";
export declare const ENDPOINTS: {
    compliance: {
        complianceEvent: string;
        prepurchaseCompliance: string;
        alcoholFee: string;
    };
};
export declare const precomplianceEventType: {
    INITIATED: string;
    SUBMITTED: string;
    APPROVED: string;
    FAILED: string;
};

export declare const CART_CUSTOMER_DOB: "customer_dob__"; // Key for storing customer date of birth in cart attributes
export declare const CART_VALID_COMPLIANCE_ID: "valid_compliance_id__"; // Key for storing valid compliance ID in cart attributes
