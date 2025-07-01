export const CartAttributesUpdateMutation = `#graphql
  mutation cartAttributesUpdate($attributes: [AttributeInput!]!, $cartId: ID!) {
  cartAttributesUpdate(attributes: $attributes, cartId: $cartId) {
    cart {
      id
    }
    userErrors {
      field
      message
    }
  }
}
`;
