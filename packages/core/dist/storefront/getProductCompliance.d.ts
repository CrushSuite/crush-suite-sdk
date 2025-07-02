import { CrushSuiteProductQueryResponse } from "../graphql/queries/productQuery";
import type { StorefrontClient } from "./client";
export declare function getProductCompliance(client: StorefrontClient, namespace: string, handle: string): Promise<CrushSuiteProductQueryResponse>;
