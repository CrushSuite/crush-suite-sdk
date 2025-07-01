export type StorefrontClient = {
    query: <T = any>(query: string, variables?: Record<string, any>) => Promise<T>;
};
export declare function createCrushSuiteStorefrontClient({ shop, storefrontAccessToken, apiVersion, }: {
    shop: string;
    storefrontAccessToken: string;
    apiVersion?: string;
}): StorefrontClient;
