export const CrushSuiteRemoveCartLinesMutation = `#graphql
  mutation cartLinesRemove($cartId: ID!, $lineIds: [ID!]!) {
  cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
    cart {
     id
    }
    userErrors {
      field
      message
    }
    warnings {
      message
      code
    }
  }
}
`;
