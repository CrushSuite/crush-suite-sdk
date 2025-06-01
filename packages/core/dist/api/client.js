import { STAGING_API, PRODUCTION_API, BASE_PATH, ENDPOINTS } from "./constants";
import { ComplianceBodyReq } from "./validation";
export function createClient({ privateKey, sandboxKey, _environment, }) {
    const apiUrl = _environment === "staging" ? STAGING_API : PRODUCTION_API;
    const baseUrl = `${apiUrl}/${BASE_PATH}`;
    async function get(endpoint) {
        const res = await fetch(`${baseUrl}${endpoint}`, {
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
        const res = await fetch(`${baseUrl}${endpoint}`, {
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
    return {
        compliance: {
            complianceEvent: (eventData) => {
                const validatedData = ComplianceBodyReq.parse(eventData);
                return post(`${ENDPOINTS.compliance.complianceEvent}`, validatedData);
            },
            prepurchaseCompliance: (complianceData) => {
                const validatedData = ComplianceBodyReq.parse(complianceData);
                return post(`${ENDPOINTS.compliance.prepurchaseCompliance}`, validatedData);
            },
            alcoholFee: (complianceData) => {
                const validatedData = ComplianceBodyReq.parse(complianceData);
                return post(`${ENDPOINTS.compliance.prepurchaseCompliance}`, validatedData);
            },
        },
    };
}
