import { CrushSuiteShopQuery, } from "../graphql/queries/shopQuery";
export async function getShopCompliance(client, namespace) {
    const data = await client.query(CrushSuiteShopQuery, { namespace });
    return data;
}
