import { CrushSuiteConfig, CrushSuiteAPI, Product } from './types';
import { CS_STAGING_BASE_URL, CS_PRODUCTION_BASE_URL, CS_BASE_PATH, CS_ENDPOINTS } from '../constants';

export function createClient({ privateKey, _environment }: CrushSuiteConfig): CrushSuiteAPI {
  const apiUrl = _environment === 'staging' ? CS_STAGING_BASE_URL : CS_PRODUCTION_BASE_URL;
  const baseUrl = `${apiUrl}/${CS_BASE_PATH}`;

  async function get<T>(endpoint: string): Promise<T> {
    const res = await fetch(`${baseUrl}${endpoint}`, {
      headers: { 'x-api-key': privateKey },
    });
    if (!res.ok) throw new Error(`API Error: ${res.statusText}`);
    return res.json();
  }

  async function post<T>(endpoint: string, body: any): Promise<T> {
    const res = await fetch(`${baseUrl}${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': privateKey,
      },
      body: JSON.stringify(body),
    });
    if (!res.ok) throw new Error(`API Error: ${res.statusText}`);
    return res.json();
  }

  return {
    getProducts: () => get<Product[]>('/products'),
    getProductById: (id: string) => get<Product>(`/products/${id}`),
  };
}
