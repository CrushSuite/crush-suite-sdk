/**
 * GraphQL query to fetch shop metafields related to CrushSuite.
 */
export declare const CrushSuiteShopQuery: "#graphql\n  query Shop($namespace: String!) {\n    shop {\n      merchantShippingConfigStates: metafield(namespace: $namespace, key: \"merchant_shipping_config_states\") {\n        key\n        value\n      }\n      merchantSalesUSAStates: metafield(namespace: $namespace, key: \"merchant_sales_usa_states\") {\n        key\n        value\n      }\n    }\n  }\n";
/**
 * Return type for the CrushSuiteShopQuery graphql query.
 */
export type CrushSuiteShopQueryResponse = {
    shop: {
        merchantShippingConfigStates: {
            key: string;
            value: string;
        } | null;
        merchantSalesUSAStates: {
            key: string;
            value: string;
        } | null;
    };
};
