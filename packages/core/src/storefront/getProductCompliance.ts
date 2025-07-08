import {
  CrushSuiteProductQuery,
  CrushSuiteProductQueryResponse,
} from "../graphql/queries/productQuery";
import type { StorefrontClient } from "./client";

export async function getProductCompliance(
  client: StorefrontClient,
  namespace: string,
  handle: string
) {
  const data = await client.query<CrushSuiteProductQueryResponse>(
    CrushSuiteProductQuery,
    { namespace, handle }
  );
  return data;
}
