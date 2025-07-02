import { CrushSuiteProductQuery, } from "../graphql/queries/productQuery";
export async function getProductCompliance(client, namespace, handle) {
    const data = await client.query(CrushSuiteProductQuery, { namespace, handle });
    return data;
}
