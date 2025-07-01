import { type CartLinesAddMutationVariables } from "../graphql/mutations/addCartLine";
import type { StorefrontClient } from "./client";
export declare function addComplianceFee(client: StorefrontClient, lines: CartLinesAddMutationVariables["lines"], cartId: CartLinesAddMutationVariables["cartId"]): Promise<{
    id: string;
}>;
