"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComplianceFeeBodyReq = exports.ComplianceBodyReq = void 0;
const zod_1 = require("zod");
exports.ComplianceBodyReq = zod_1.z
    .object({
    variants: zod_1.z.array(zod_1.z.object({
        quantity: zod_1.z.number(),
        id: zod_1.z.number(),
    })),
    email: zod_1.z.string(),
    dob: zod_1.z.object({
        day: zod_1.z.number(),
        month: zod_1.z.number(),
        year: zod_1.z.number(),
    }),
    phoneNumber: zod_1.z.string(),
    shipToAddress: zod_1.z.object({
        firstName: zod_1.z.string(),
        lastName: zod_1.z.string(),
        businessName: zod_1.z.string().optional(),
        street1: zod_1.z.string(),
        street2: zod_1.z.string().optional(),
        city: zod_1.z.string(),
        postalCode: zod_1.z.string(),
        stateCode: zod_1.z.string(),
        country: zod_1.z.string(),
    }),
    billToAddress: zod_1.z.object({
        firstName: zod_1.z.string(),
        lastName: zod_1.z.string(),
        businessName: zod_1.z.string().optional(),
        street1: zod_1.z.string(),
        street2: zod_1.z.string().optional(),
        city: zod_1.z.string(),
        postalCode: zod_1.z.string(),
        stateCode: zod_1.z.string(),
        country: zod_1.z.string(),
    }),
})
    .required();
exports.ComplianceFeeBodyReq = zod_1.z
    .object({
    variants: zod_1.z.array(zod_1.z.object({
        quantity: zod_1.z.number(),
        id: zod_1.z.number(),
    })),
    shippingStateCode: zod_1.z.string(),
})
    .required();
