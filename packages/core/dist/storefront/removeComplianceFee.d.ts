import type { StorefrontClient } from "./client";
export declare function removeComplianceFee(client: StorefrontClient, lineIds: string[], cartId: string): Promise<{
    id: string;
}>;
