import {
  CrushSuiteRemoveCartLinesMutation,
  type CartLinesRemoveResponse,
} from "../graphql/mutations/removeCartLine";
import type { StorefrontClient } from "./client";

export async function removeComplianceFee(
  client: StorefrontClient,
  lineIds: string[],
  cartId: string
) {
  if (!cartId) {
    throw new Error("cartId is required to update cart attributes");
  }
  if (!Array.isArray(lineIds)) {
    throw new Error("Invalid line ids format");
  }
  const data = await client.query<CartLinesRemoveResponse>(
    CrushSuiteRemoveCartLinesMutation,
    { lineIds, cartId }
  );
  console.log("Crush Suite updated cart attributes", data.cartLinesRemove.cart);
  return data.cartLinesRemove.cart;
}
