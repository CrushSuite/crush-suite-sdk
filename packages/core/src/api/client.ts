import { CrushSuiteConfig, CrushSuiteAPI, Product } from './types';

export function createCrushSuiteClient(config: CrushSuiteConfig): CrushSuiteAPI {
  const baseUrl = `https://${config.shopDomain}/apps/crushsuite/api`;

  async function get<T>(endpoint: string): Promise<T> {
    const res = await fetch(`${baseUrl}${endpoint}`, {
      headers: { 'Authorization': `Bearer ${config.apiKey}` },
    });
    if (!res.ok) throw new Error(`API Error: ${res.statusText}`);
    return res.json();
  }

  return {
    getProducts: () => get<Product[]>('/products'),
    getProductById: (id: string) => get<Product>(`/products/${id}`),
  };
}
