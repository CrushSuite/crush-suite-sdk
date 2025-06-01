export interface CrushSuiteConfig {
  privateKey: string;
  sandboxKey?: string;
  // shopDomain: string;
  _environment?: 'production' | 'staging';
}

export interface Product {
  id: string;
  title: string;
  description: string;
}

export interface CrushSuiteAPI {
  getProducts(): Promise<Product[]>;
  getProductById(id: string): Promise<Product>;
}
