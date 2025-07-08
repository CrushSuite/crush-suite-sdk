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
` as const;

export type CartLinesRemoveResponse = {
  cartLinesRemove: {
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
