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
` as const;

/**
 * Input type for the CartAttributesUpdateMutation graphql mutation.
 */
export type CartAttributesUpdateMutationVariables = {
  attributes: { key: string; value: string }[];
  cartId: string;
};

/**
 * Return type for the CartAttributesUpdateMutation graphql mutation.
 */
export type CartAttributesUpdateMutationResponse = {
  cartAttributesUpdate: {
    cart: {
      id: string;
    };
    userErrors: {
      field: string[];
      message: string;
    }[];
  };
};
