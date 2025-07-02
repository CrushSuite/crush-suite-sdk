export const STAGING_API = "https://crush-suite-staging.up.railway.app";
export const PRODUCTION_API = "https://crush-suite-production.up.railway.app";
export const BASE_PATH = "service-api";
export const ENDPOINTS = {
    compliance: {
        complianceEvent: "compliance/compliance-event",
        prepurchaseCompliance: "compliance/prepurchase-compliance",
        alcoholFee: "compliance/alcohol-fee",
    },
}; // API endpoints for compliance-related operations
export const precomplianceEventType = {
    INITIATED: "INITIATED",
    SUBMITTED: "SUBMITTED",
    APPROVED: "APPROVED",
    FAILED: "FAILED",
}; // Types of precompliance events
export const CART_CUSTOMER_DOB = "customer_dob__"; //  Key for storing customer date of birth in cart attributes
export const CART_VALID_COMPLIANCE_ID = "valid_compliance_id__"; // Key for storing valid compliance ID in cart attributes
export const CRUSHSUITE_COMPLIANCE_FEE_KEY = "cs_compliance_fee";
export const CRUSHSUITE_COMPLIANCE_FEE_TAG = "compliance_fee"; // Tag on the compliance fee product, use for filtering
export const CRUSH_SUITE_NAMESPACE = "app--94371610625--crush_suite"; // Namespace for CrushSuite metafields in Shopify
export const LEGAL_AGE_FOR_ALCOHOL = 21; // Legal age for alcohol in the US, used for age verification
export const CRUSHSUITE_SHIPPING_STATE = "CRUSHSUITE_SHIPPING_STATE";
export const CRUSHSUITE_AGE_VERIFIED = "CRUSHSUITE_AGE_VERIFIED";
export const CRUSHSUITE_CUSTOMER_DEFAULT_ADDRESS = "CRUSHSUITE_CUSTOMER_DEFAULT_ADDRESS";
export const CRUSHSUITE_CUSTOMER_DOB = "CRUSHSUITE_CUSTOMER_DOB";
