import type { StorefrontClient } from "./client";
export declare function getCart(client: StorefrontClient, cartId: string): Promise<{
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
}>;
