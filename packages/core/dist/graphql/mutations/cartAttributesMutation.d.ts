export declare const CartAttributesUpdateMutation: "#graphql\n  mutation cartAttributesUpdate($attributes: [AttributeInput!]!, $cartId: ID!) {\n  cartAttributesUpdate(attributes: $attributes, cartId: $cartId) {\n    cart {\n      id\n    }\n    userErrors {\n      field\n      message\n    }\n  }\n}\n";
/**
 * Input type for the CartAttributesUpdateMutation graphql mutation.
 */
export type CartAttributesUpdateMutationVariables = {
    attributes: {
        key: string;
        value: string;
    }[];
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
