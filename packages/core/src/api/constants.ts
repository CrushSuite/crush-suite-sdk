export const STAGING_API = "https://crush-suite-staging.up.railway.app";

export const PRODUCTION_API = "https://crush-suite-production.up.railway.app";

export const BASE_PATH = "service-api";

export const ENDPOINTS = {
  compliance: {
    complianceEvent: "compliance/compliance-event",
    prepurchaseCompliance: "compliance/prepurchase-compliance",
    alcoholFee: "compliance/alcohol-fee",
  },
};

export const PrecomplianceEventType = {
  INITIATED: "INITIATED",
  SUBMITTED: "SUBMITTED",
  APPROVED: "APPROVED",
  FAILED: "FAILED",
};

export const CART_CUSTOMER_DOB = "customer_dob__" as const; //
export const CART_VALID_COMPLIANCE_ID = "valid_compliance_id__" as const;
