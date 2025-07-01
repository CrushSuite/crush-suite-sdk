import type { StorefrontClient } from "./client";
import {
  CrushSuiteCartQuery,
  CrushSuiteCartResponse,
} from "../graphql/queries/cart";

export async function getCart(client: StorefrontClient, cartId: string) {
  if (!cartId) {
    throw new Error("cartId is required to update cart attributes");
  }

  const data = await client.query<CrushSuiteCartResponse>(CrushSuiteCartQuery, {
    cartId,
  });
  return data.cart;
}
