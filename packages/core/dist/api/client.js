"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCrushSuiteClient = createCrushSuiteClient;
function createCrushSuiteClient(config) {
    const baseUrl = `https://${config.shopDomain}/apps/crushsuite/api`;
    async function get(endpoint) {
        const res = await fetch(`${baseUrl}${endpoint}`, {
            headers: { 'Authorization': `Bearer ${config.apiKey}` },
        });
        if (!res.ok)
            throw new Error(`API Error: ${res.statusText}`);
        return res.json();
    }
    return {
        getProducts: () => get('/products'),
        getProductById: (id) => get(`/products/${id}`),
    };
}
