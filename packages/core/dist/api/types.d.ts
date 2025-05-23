export interface CrushSuiteConfig {
    apiKey: string;
    shopDomain: string;
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
