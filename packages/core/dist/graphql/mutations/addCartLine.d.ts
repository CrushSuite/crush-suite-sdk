export declare const CartLinesAddMutation: "#graphql\n  mutation cartLinesAdd($cartId: ID!, $lines: [CartLineInput!]!) {\n  cartLinesAdd(cartId: $cartId, lines: $lines) {\n    cart {\n      id\n    }\n    userErrors {\n      field\n      message\n    }\n    warnings {\n      message\n      code\n    }\n  }\n}\n";
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
