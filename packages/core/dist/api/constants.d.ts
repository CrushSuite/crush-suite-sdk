export declare const STAGING_API = "https://crush-suite-staging.up.railway.app";
export declare const PRODUCTION_API =
  "https://crush-suite-production.up.railway.app";
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
export declare const CART_CUSTOMER_DOB: "customer_dob__";
export declare const CART_VALID_COMPLIANCE_ID: "valid_compliance_id__";
export declare const CRUSHSUITE_COMPLIANCE_FEE_KEY = "cs_compliance_fee";

export const CRUSH_SUITE_NAMESPACE = "app--98845425665--crush_suite";
export const LEGAL_AGE_FOR_ALCOHOL = 21;

export const CRUSHSUITE_SHIPPING_STATE = "CRUSHSUITE_SHIPPING_STATE" as const;
export const CRUSHSUITE_AGE_VERIFIED = "CRUSHSUITE_AGE_VERIFIED" as const;

export const CRUSHSUITE_CUSTOMER_DEFAULT_ADDRESS =
  "CRUSHSUITE_CUSTOMER_DEFAULT_ADDRESS" as const;

export const CRUSHSUITE_CUSTOMER_DOB = "CRUSHSUITE_CUSTOMER_DOB" as const;
