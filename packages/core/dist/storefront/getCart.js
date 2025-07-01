import { CrushSuiteCartQuery, } from "../graphql/queries/cart";
export async function getCart(client, cartId) {
    if (!cartId) {
        throw new Error("cartId is required to update cart attributes");
    }
    const data = await client.query(CrushSuiteCartQuery, {
        cartId,
    });
    return data.cart;
}
