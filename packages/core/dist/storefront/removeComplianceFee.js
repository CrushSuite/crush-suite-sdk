import { CrushSuiteRemoveCartLinesMutation, } from "../graphql/mutations/removeCartLine";
export async function removeComplianceFee(client, lineIds, cartId) {
    if (!cartId) {
        throw new Error("cartId is required to update cart attributes");
    }
    if (!Array.isArray(lineIds)) {
        throw new Error("Invalid line ids format");
    }
    const data = await client.query(CrushSuiteRemoveCartLinesMutation, { lineIds, cartId });
    console.log("Crush Suite updated cart attributes", data.cartLinesRemove.cart);
    return data.cartLinesRemove.cart;
}
