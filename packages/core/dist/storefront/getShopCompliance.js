import { CrushSuiteShopQuery, } from "../graphql/queries/shopQuery";
export async function getShopCompliance(client, namespace) {
    if (!namespace) {
        throw new Error("Namespace is required to get shop compliance");
    }
    if (!client) {
        throw new Error("Storefront client is required to get shop compliance");
    }
    const data = await client.query(CrushSuiteShopQuery, { namespace });
    console.log("Fetched shop compliance data:", data.shop.merchantSalesUSAStates);
    return data;
}
