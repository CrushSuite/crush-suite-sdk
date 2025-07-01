export declare const CrushSuiteRemoveCartLinesMutation: "#graphql\n  mutation cartLinesRemove($cartId: ID!, $lineIds: [ID!]!) {\n  cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {\n    cart {\n     id\n    }\n    userErrors {\n      field\n      message\n    }\n    warnings {\n      message\n      code\n    }\n  }\n}\n";
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
