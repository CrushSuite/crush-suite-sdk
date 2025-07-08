export type StorefrontClient = {
  query: <T = any>(
    query: string,
    variables?: Record<string, any>
  ) => Promise<T>;
};

export function createCrushSuiteStorefrontClient({
  shop,
  storefrontAccessToken,
  apiVersion = "2025-07",
}: {
  shop: string;
  storefrontAccessToken: string;
  apiVersion?: string;
}): StorefrontClient {
  const endpoint = `https://${shop}/api/${apiVersion}/graphql.json`;

  async function query<T = any>(
    query: string,
    variables?: Record<string, any>
  ): Promise<T> {
    if (!shop || !storefrontAccessToken) {
      throw new Error(
        "Shop and Storefront Access Token are required to make queries."
      );
    }
    if (!shop.includes(".myshopify.com")) {
      throw new Error(
        "Invalid shop format. It should be in the format 'your-shop.myshopify.com'."
      );
    }
    const res = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": storefrontAccessToken,
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    });

    const json = (await res.json()) as {
      data?: T;
      errors?: { message: string; [key: string]: any }[];
    };

    if (!res.ok || json.errors) {
      throw new Error(
        `Shopify Storefront API error: ${JSON.stringify(json.errors || json)}`
      );
    }

    return json.data as T;
  }

  return { query };
}
