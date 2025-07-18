import { CartAttributesUpdateMutationResponse, CrushSuiteProductQueryResponse, CrushSuiteShopQueryResponse } from "./graphql";
export interface CrushSuiteConfig {
    privateKey: string;
    sandboxKey?: string;
    _environment?: "production" | "staging";
    shop: string;
    storefrontPublicKey?: string;
    storefrontApiVersion?: string;
}
export interface CrushSuiteAPI {
    compliance: {
        complianceEvent(eventData: PrecomplianceEvent): Promise<PrecomplianceEventResponse>;
        prepurchaseCompliance(complianceData: OrderCheckComplianceRequest): Promise<OrderCheckComplianceResponse>;
        alcoholFee(complianceData: OrderCheckComplianceFeeRequest): Promise<OrderCheckComplianceFeeResponse>;
    };
    storefront: {
        getShopCompliance(): Promise<CrushSuiteShopQueryResponse>;
        getProductCompliance(handle: string): Promise<CrushSuiteProductQueryResponse>;
        updateCartAttributes(cartId: string, attributes: {
            key: string;
            value: string;
        }[]): Promise<CartAttributesUpdateMutationResponse>;
    };
}
/**
 * Storefront types
 */
export type { CrushSuiteShopQueryResponse, CartAttributesUpdateMutationResponse, };
/**
 * Precompliance event types
 * These are generated by Prisma and used to track the precompliance process.
 */
export type PrecomplianceEventType = "INITIATED" | "SUBMITTED" | "APPROVED" | "FAILED";
/** Order compliance types
 * These types are used for checking compliance of orders
 * and for the precompliance process.
 */
export type OrderCheckComplianceAddress = {
    firstName: string;
    lastName: string;
    businessName?: string;
    street1: string;
    street2?: string;
    city: string;
    postalCode: string;
    stateCode: USAStateAbbreviation;
    country: string;
};
export type OrderCheckComplianceDOB = {
    day: number;
    month: number;
    year: number;
};
/**
 * bypassKYC is an optional field that allows merchants to skip KYC checks.
 * This is generally used for testing and is not recommended for production use.
 */
export type OrderCheckComplianceRequest = {
    variants: {
        id: number;
        quantity: number;
    }[];
    billToAddress: OrderCheckComplianceAddress;
    shipToAddress: OrderCheckComplianceAddress;
    dob: OrderCheckComplianceDOB;
    email: string;
    phoneNumber: string;
    bypassKYC?: boolean;
};
export type ComplianceFee = {
    fee: {
        [key: VariantId]: Quantity;
    };
    total: number;
};
type VariantId = number;
type Quantity = number;
export interface Compliance {
    valid: boolean;
    errors: string[];
}
export interface OrderCheckComplianceResponse {
    valid: boolean;
    complianceFee: ComplianceFee | null;
    complianceKey: string | null;
    errors: string[];
}
export type OrderCheckComplianceFeeRequest = {
    shippingStateCode: USAStateAbbreviation;
    variants: {
        id: number;
        quantity: number;
    }[];
};
export interface OrderCheckComplianceFeeResponse {
    fee: ComplianceFee | null;
    total: number;
}
export interface PurchasedOrderItem {
    productType: string;
    name: string;
    quantity: number;
    isComplianceProduct: boolean;
    isVinoshipperProduct: boolean;
    isDbProduct: boolean;
    compliancePartnerProductId: string;
    platformVariantId: string;
    dbProductId: number;
}
export interface PrecomplianceEvent {
    sessionId: string;
    eventType: PrecomplianceEventType;
    failedReason?: string;
    failedPayload?: string;
    failedUser?: string;
}
export type PrecomplianceEventResponse = {
    message: string;
};
export interface PrecomplianceCustomer {
    email: string;
    firstName: string;
    lastName: string;
    address: {
        street1: string;
        street2?: string | null;
        city: string;
        postalCode: string;
        stateCode: USAStateAbbreviation;
    };
    dateOfBirth: PrecomplianceCustomerDOB;
}
export type PrecomplianceCustomerDOB = {
    day: number;
    month: number;
    year: number;
};
export type USAStateAbbreviation = "AL" | "AK" | "AZ" | "AR" | "CA" | "CO" | "CT" | "DE" | "DC" | "FL" | "GA" | "HI" | "ID" | "IL" | "IN" | "IA" | "KS" | "KY" | "LA" | "ME" | "MD" | "MA" | "MI" | "MN" | "MS" | "MO" | "MT" | "NE" | "NV" | "NH" | "NJ" | "NM" | "NY" | "NC" | "ND" | "OH" | "OK" | "OR" | "PA" | "RI" | "SC" | "SD" | "TN" | "TX" | "UT" | "VT" | "VA" | "WA" | "WV" | "WI" | "WY";
