import {
  CrushSuiteShopQuery,
  type CrushSuiteShopQueryResponse,
} from "../graphql/queries/shopQuery";
import type { StorefrontClient } from "./client";

export async function getShopCompliance(
  client: StorefrontClient,
  namespace: string
) {
  if (!namespace) {
    throw new Error("Namespace is required to get shop compliance");
  }
  if (!client) {
    throw new Error("Storefront client is required to get shop compliance");
  }
  const data = await client.query<CrushSuiteShopQueryResponse>(
    CrushSuiteShopQuery,
    { namespace }
  );
  return data;
}
