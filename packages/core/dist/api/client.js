"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createClient = createClient;
const constants_1 = require("./constants");
function createClient({ privateKey, _environment }) {
    const apiUrl = _environment === 'staging' ? constants_1.STAGING_API : constants_1.PRODUCTION_API;
    const baseUrl = `${apiUrl}/${constants_1.BASE_PATH}`;
    async function get(endpoint) {
        const res = await fetch(`${baseUrl}${endpoint}`, {
            headers: { 'x-api-key': privateKey },
        });
        if (!res.ok)
            throw new Error(`API Error: ${res.statusText}`);
        return res.json();
    }
    async function post(endpoint, body) {
        const res = await fetch(`${baseUrl}${endpoint}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': privateKey,
            },
            body: JSON.stringify(body),
        });
        if (!res.ok)
            throw new Error(`API Error: ${res.statusText}`);
        return res.json();
    }
    return {
        // getProducts: () => get<Product[]>('/products'),
        // getProductById: (id: string) => get<Product>(`/products/${id}`),
        compliance: {
            complianceEvent: (eventData) => post(`${constants_1.ENDPOINTS.compliance.complianceEvent}`, eventData),
            prepurchaseCompliance: (complianceData) => post(`${constants_1.ENDPOINTS.compliance.prepurchaseCompliance}`, complianceData),
        },
    };
}
