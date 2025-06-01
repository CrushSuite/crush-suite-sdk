import { z } from "zod";

export const ComplianceBodyReq = z
  .object({
    variants: z.array(
      z.object({
        quantity: z.number(),
        id: z.number(),
      })
    ),
    email: z.string(),
    dob: z.object({
      day: z.number(),
      month: z.number(),
      year: z.number(),
    }),
    phoneNumber: z.string(),
    shipToAddress: z.object({
      firstName: z.string(),
      lastName: z.string(),
      businessName: z.string().optional(),
      street1: z.string(),
      street2: z.string().optional(),
      city: z.string(),
      postalCode: z.string(),
      stateCode: z.string(),
      country: z.string(),
    }),
    billToAddress: z.object({
      firstName: z.string(),
      lastName: z.string(),
      businessName: z.string().optional(),
      street1: z.string(),
      street2: z.string().optional(),
      city: z.string(),
      postalCode: z.string(),
      stateCode: z.string(),
      country: z.string(),
    }),
  })
  .required();

export const ComplianceFeeBodyReq = z
  .object({
    variants: z.array(
      z.object({
        quantity: z.number(),
        id: z.number(),
      })
    ),
    shippingStateCode: z.string(),
  })
  .required();

export const ComplianceEventReq = z
  .object({
    eventType: z.enum(["INITIATED", "SUBMITTED", "APPROVED", "FAILED"]),
    variants: z.array(
      z.object({
        quantity: z.number(),
        id: z.number(),
      })
    ),
  })
  .required();
