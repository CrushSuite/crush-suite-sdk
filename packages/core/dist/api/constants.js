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
