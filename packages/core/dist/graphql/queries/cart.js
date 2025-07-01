export const CrushSuiteCartQuery = `#graphql
  query CrushSuiteCartQuery($cartId: ID!) {
    cart(id: $cartId) {
      lines(first: 250) {
        nodes {
          id
          quantity
          merchandise {
            ... on ProductVariant {
              id
              title
            }
          }
        }
      }
    }
  }
`;
