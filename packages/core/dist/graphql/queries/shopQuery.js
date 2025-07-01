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
`;
