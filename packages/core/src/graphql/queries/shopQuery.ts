/**
 * GraphQL query to fetch shop metafields related to CrushSuite.
 */
export const CrushSuiteShopQuery = `#graphql
  query Shop($namespace: String!) {
    shop {
      merchantShippingConfigStates: metafield(namespace: $namespace, key: "merchant_shipping_config_states") {
        key
        value
      }
      merchantSalesUSAStates: metafield(namespace: $namespace, key: "merchant_sales_usa_states") {
        key
        value
      }
    }
  }
` as const;

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
