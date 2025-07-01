import type { StorefrontClient } from "./client";
import { CartAttributesUpdateMutationVariables, CartAttributesUpdateMutationResponse } from "../graphql/mutations/cartAttributesMutation";
export declare function updateCartAttributes(client: StorefrontClient, cartId: CartAttributesUpdateMutationVariables["cartId"], attributes: CartAttributesUpdateMutationVariables["attributes"]): Promise<CartAttributesUpdateMutationResponse>;
