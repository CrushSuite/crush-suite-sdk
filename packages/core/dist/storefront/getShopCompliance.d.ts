import { type CrushSuiteShopQueryResponse } from "../graphql/queries/shopQuery";
import type { StorefrontClient } from "./client";
export declare function getShopCompliance(client: StorefrontClient, namespace: string): Promise<CrushSuiteShopQueryResponse>;
