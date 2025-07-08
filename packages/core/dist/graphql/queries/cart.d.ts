export declare const CrushSuiteCartQuery: "#graphql\n  query CrushSuiteCartQuery($cartId: ID!) {\n    cart(id: $cartId) {\n      lines(first: 250) {\n        nodes {\n          id\n          quantity\n          merchandise {\n            ... on ProductVariant {\n              id\n              title\n            }\n          }\n        }\n      }\n    }\n  }\n";
export type CrushSuiteCartResponse = {
    cart: {
        lines: {
            nodes: {
                id: string;
                quantity: number;
                merchandise: {
                    id: string;
                    title: string;
                };
            }[];
        };
    };
};
