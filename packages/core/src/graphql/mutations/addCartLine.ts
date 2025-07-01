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
` as const;

export type CartLinesAddMutationVariables = {
  lines: {
    attributes: {
      key: string;
      value: string;
    }[];
    merchandiseId: string;
    quantity: number;
  }[];
  cartId: string;
};

export type CartLinesAddResponse = {
  cartLinesAdd: {
    cart: {
      id: string;
    };
    userErrors: {
      field: string[];
      message: string;
    }[];
    warnings: {
      message: string;
      code: string;
    }[];
  };
};
