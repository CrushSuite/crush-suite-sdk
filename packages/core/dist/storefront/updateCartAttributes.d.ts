import type { StorefrontClient } from "./client";
import { type CartAttributesUpdateMutationVariables, type CartAttributesUpdateMutationResponse } from "../graphql/mutations/cartAttributesMutation";
export declare function updateCartAttributes(client: StorefrontClient, cartId: CartAttributesUpdateMutationVariables["cartId"], attributes: CartAttributesUpdateMutationVariables["attributes"]): Promise<CartAttributesUpdateMutationResponse>;
