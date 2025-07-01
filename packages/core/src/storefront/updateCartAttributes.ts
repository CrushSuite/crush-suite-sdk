import type { StorefrontClient } from "./client";
import {
  CartAttributesUpdateMutation,
  CartAttributesUpdateMutationVariables,
  CartAttributesUpdateMutationResponse,
} from "../graphql/mutations/cartAttributesMutation";

export async function updateCartAttributes(
  client: StorefrontClient,
  cartId: CartAttributesUpdateMutationVariables["cartId"],
  attributes: CartAttributesUpdateMutationVariables["attributes"]
) {
  if (!cartId) {
    throw new Error("cartId is required to update cart attributes");
  }
  if (
    !Array.isArray(attributes) ||
    attributes.some((attr) => !attr.key || attr.value == null)
  ) {
    throw new Error("Invalid attributes format");
  }
  const data = await client.query<CartAttributesUpdateMutationResponse>(
    CartAttributesUpdateMutation,
    { cartId, attributes }
  );
  return data;
}
