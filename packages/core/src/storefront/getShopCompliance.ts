import {
  CrushSuiteShopQuery,
  type CrushSuiteShopQueryResponse,
} from "../graphql/queries/shopQuery";
import type { StorefrontClient } from "./client";

export async function getShopCompliance(
  client: StorefrontClient,
  namespace: string
) {
  const data = await client.query(CrushSuiteShopQuery, { namespace });
  return data as CrushSuiteShopQueryResponse;
}
