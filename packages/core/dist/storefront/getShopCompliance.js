import { CrushSuiteShopQuery, } from "../graphql/queries/shopQuery";
export async function getShopCompliance(client, namespace, handle) {
    const data = await client.query(CrushSuiteShopQuery, { handle, namespace });
    return data;
}
