import { CartAttributesUpdateMutation, } from "../graphql/mutations/cartAttributesMutation";
export async function updateCartAttributes(client, cartId, attributes) {
    if (!cartId) {
        throw new Error("cartId is required to update cart attributes");
    }
    if (!Array.isArray(attributes) ||
        attributes.some((attr) => !attr.key || attr.value == null)) {
        throw new Error("Invalid attributes format");
    }
    const data = await client.query(CartAttributesUpdateMutation, { cartId, attributes });
    return data;
}
