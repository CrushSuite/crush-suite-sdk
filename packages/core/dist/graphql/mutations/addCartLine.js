export const CartLinesAddMutation = `#graphql
  mutation cartLinesAdd($cartId: ID!, $lines: [CartLineInput!]!) {
  cartLinesAdd(cartId: $cartId, lines: $lines) {
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
