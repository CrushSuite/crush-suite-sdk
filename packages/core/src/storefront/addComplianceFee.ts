import {
  CartLinesAddMutation,
  type CartLinesAddMutationVariables,
  type CartLinesAddResponse,
} from "../graphql/mutations/addCartLine";
import type { StorefrontClient } from "./client";

export async function addComplianceFee(
  client: StorefrontClient,
  lines: CartLinesAddMutationVariables["lines"],
  cartId: CartLinesAddMutationVariables["cartId"]
) {
  if (!cartId) {
    throw new Error("cartId is required to update cart attributes");
  }
  if (
    !Array.isArray(lines) ||
    lines.some((line) => !line.quantity || line.merchandiseId == null)
  ) {
    throw new Error("Invalid data format");
  }
  const data = await client.query<CartLinesAddResponse>(CartLinesAddMutation, {
    lines,
    cartId,
  });
  console.log("Crush Suite updated cart attributes", data.cartLinesAdd.cart);
  return data.cartLinesAdd.cart;
}
