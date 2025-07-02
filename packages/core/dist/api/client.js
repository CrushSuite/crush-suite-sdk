import { STAGING_API, PRODUCTION_API, BASE_PATH, ENDPOINTS, CRUSH_SUITE_NAMESPACE, } from "../constants";
import { ComplianceBodyReq, ComplianceEventReq, ComplianceFeeBodyReq, } from "./validation";
import { createCrushSuiteStorefrontClient } from "../storefront/client";
import { getShopCompliance } from "../storefront/getShopCompliance";
import { updateCartAttributes } from "../storefront/updateCartAttributes";
import { getProductCompliance } from "../storefront";
export function createClient({ storefrontPublicKey, storefrontApiVersion = "2025-07", // Default API version
shop, privateKey, sandboxKey, _environment, }) {
    const apiUrl = _environment === "staging" ? STAGING_API : PRODUCTION_API;
    const baseUrl = `${apiUrl}/${BASE_PATH}`;
    async function get(endpoint) {
        const res = await fetch(`${baseUrl}/${endpoint}`, {
            headers: {
                "x-api-key": privateKey,
                "x-api-key-sandbox": sandboxKey || "", // Optional for sandbox
            },
        });
        if (!res.ok)
            throw new Error(`API Error: ${res.statusText}`);
        return res.json();
    }
    async function post(endpoint, body) {
        const res = await fetch(`${baseUrl}/${endpoint}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-api-key": privateKey,
            },
            body: JSON.stringify(body),
        });
        if (!res.ok)
            throw new Error(`API Error: ${res.statusText}`);
        return res.json();
    }
    const storefrontClient = createCrushSuiteStorefrontClient({
        shop,
        storefrontAccessToken: storefrontPublicKey || "",
        apiVersion: storefrontApiVersion,
    });
    return {
        compliance: {
            complianceEvent: (eventData) => {
                const validatedData = ComplianceEventReq.parse(eventData);
                return post(`${ENDPOINTS.compliance.complianceEvent}`, validatedData);
            },
            prepurchaseCompliance: (complianceData) => {
                const validatedData = ComplianceBodyReq.parse(complianceData);
                return post(`${ENDPOINTS.compliance.prepurchaseCompliance}`, validatedData);
            },
            alcoholFee: (complianceData) => {
                const validatedData = ComplianceFeeBodyReq.parse(complianceData);
                return post(`${ENDPOINTS.compliance.prepurchaseCompliance}`, validatedData);
            },
        },
        /**
         * CrushSuite will make Storefront API calls on behalf of the merchant
         * to fetch compliance-related metafields etc.
         */
        storefront: {
            getShopCompliance: async () => {
                console.log("Fetching shop compliance data...");
                if (!storefrontClient) {
                    throw new Error("Storefront client is not initialized. Ensure you have provided a valid shop and storefront public key.");
                }
                return getShopCompliance(storefrontClient, CRUSH_SUITE_NAMESPACE);
            },
            getProductCompliance: async (handle) => {
                return getProductCompliance(storefrontClient, CRUSH_SUITE_NAMESPACE, handle);
            },
            updateCartAttributes: async (cartId, attributes) => {
                return updateCartAttributes(storefrontClient, cartId, attributes);
            },
        },
    };
}
