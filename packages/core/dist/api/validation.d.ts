import { z } from "zod";
export declare const ComplianceBodyReq: z.ZodObject<{
    variants: z.ZodArray<z.ZodObject<{
        quantity: z.ZodNumber;
        id: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        quantity: number;
        id: number;
    }, {
        quantity: number;
        id: number;
    }>, "many">;
    email: z.ZodString;
    dob: z.ZodObject<{
        day: z.ZodNumber;
        month: z.ZodNumber;
        year: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        day: number;
        month: number;
        year: number;
    }, {
        day: number;
        month: number;
        year: number;
    }>;
    phoneNumber: z.ZodString;
    shipToAddress: z.ZodObject<{
        firstName: z.ZodString;
        lastName: z.ZodString;
        businessName: z.ZodOptional<z.ZodString>;
        street1: z.ZodString;
        street2: z.ZodOptional<z.ZodString>;
        city: z.ZodString;
        postalCode: z.ZodString;
        stateCode: z.ZodString;
        country: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        firstName: string;
        lastName: string;
        street1: string;
        city: string;
        postalCode: string;
        stateCode: string;
        country: string;
        businessName?: string | undefined;
        street2?: string | undefined;
    }, {
        firstName: string;
        lastName: string;
        street1: string;
        city: string;
        postalCode: string;
        stateCode: string;
        country: string;
        businessName?: string | undefined;
        street2?: string | undefined;
    }>;
    billToAddress: z.ZodObject<{
        firstName: z.ZodString;
        lastName: z.ZodString;
        businessName: z.ZodOptional<z.ZodString>;
        street1: z.ZodString;
        street2: z.ZodOptional<z.ZodString>;
        city: z.ZodString;
        postalCode: z.ZodString;
        stateCode: z.ZodString;
        country: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        firstName: string;
        lastName: string;
        street1: string;
        city: string;
        postalCode: string;
        stateCode: string;
        country: string;
        businessName?: string | undefined;
        street2?: string | undefined;
    }, {
        firstName: string;
        lastName: string;
        street1: string;
        city: string;
        postalCode: string;
        stateCode: string;
        country: string;
        businessName?: string | undefined;
        street2?: string | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    variants: {
        quantity: number;
        id: number;
    }[];
    email: string;
    dob: {
        day: number;
        month: number;
        year: number;
    };
    phoneNumber: string;
    shipToAddress: {
        firstName: string;
        lastName: string;
        street1: string;
        city: string;
        postalCode: string;
        stateCode: string;
        country: string;
        businessName?: string | undefined;
        street2?: string | undefined;
    };
    billToAddress: {
        firstName: string;
        lastName: string;
        street1: string;
        city: string;
        postalCode: string;
        stateCode: string;
        country: string;
        businessName?: string | undefined;
        street2?: string | undefined;
    };
}, {
    variants: {
        quantity: number;
        id: number;
    }[];
    email: string;
    dob: {
        day: number;
        month: number;
        year: number;
    };
    phoneNumber: string;
    shipToAddress: {
        firstName: string;
        lastName: string;
        street1: string;
        city: string;
        postalCode: string;
        stateCode: string;
        country: string;
        businessName?: string | undefined;
        street2?: string | undefined;
    };
    billToAddress: {
        firstName: string;
        lastName: string;
        street1: string;
        city: string;
        postalCode: string;
        stateCode: string;
        country: string;
        businessName?: string | undefined;
        street2?: string | undefined;
    };
}>;
export declare const ComplianceFeeBodyReq: z.ZodObject<{
    variants: z.ZodArray<z.ZodObject<{
        quantity: z.ZodNumber;
        id: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        quantity: number;
        id: number;
    }, {
        quantity: number;
        id: number;
    }>, "many">;
    shippingStateCode: z.ZodString;
}, "strip", z.ZodTypeAny, {
    variants: {
        quantity: number;
        id: number;
    }[];
    shippingStateCode: string;
}, {
    variants: {
        quantity: number;
        id: number;
    }[];
    shippingStateCode: string;
}>;
export declare const ComplianceEventReq: z.ZodObject<{
    eventType: z.ZodEnum<["INITIATED", "SUBMITTED", "APPROVED", "FAILED"]>;
    sessionId: z.ZodString;
    failedReason: z.ZodOptional<z.ZodString>;
    failedPayload: z.ZodOptional<z.ZodString>;
    failedUser: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    eventType: "INITIATED" | "SUBMITTED" | "APPROVED" | "FAILED";
    sessionId: string;
    failedReason?: string | undefined;
    failedPayload?: string | undefined;
    failedUser?: string | undefined;
}, {
    eventType: "INITIATED" | "SUBMITTED" | "APPROVED" | "FAILED";
    sessionId: string;
    failedReason?: string | undefined;
    failedPayload?: string | undefined;
    failedUser?: string | undefined;
}>;
