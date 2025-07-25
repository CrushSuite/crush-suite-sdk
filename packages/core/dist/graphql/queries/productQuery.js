/**
 * GraphQL query to fetch product details including compliance partner name and no-sale states.
 */
export const CrushSuiteProductQuery = `#graphql
  query Product(
    $handle: String!
    $namespace: String!
  )  {
    product(handle: $handle) {
      id
      title
      handle
      productCompliancePartnerName: metafield(namespace: $namespace, key: "product_compliance_partner_name") {
        key
        value
      }
      variants(first: 250) {
        nodes {
          id
          noSaleStates: metafield(namespace: $namespace, key: "variant_no_sale_states") {
            key
            value
          }
        }
      }
    }
  }
`;
