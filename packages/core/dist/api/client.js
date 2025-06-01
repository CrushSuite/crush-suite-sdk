"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createClient = createClient;
const constants_1 = require("./constants");
const validation_1 = require("./validation");
function createClient({ privateKey, sandboxKey, _environment, }) {
    const apiUrl = _environment === "staging" ? constants_1.STAGING_API : constants_1.PRODUCTION_API;
    const baseUrl = `${apiUrl}/${constants_1.BASE_PATH}`;
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
                const validatedData = validation_1.ComplianceBodyReq.parse(eventData);
                return post(`${constants_1.ENDPOINTS.compliance.complianceEvent}`, validatedData);
            },
            prepurchaseCompliance: (complianceData) => {
                const validatedData = validation_1.ComplianceBodyReq.parse(complianceData);
                return post(`${constants_1.ENDPOINTS.compliance.prepurchaseCompliance}`, validatedData);
            },
            alcoholFee: (complianceData) => {
                const validatedData = validation_1.ComplianceBodyReq.parse(complianceData);
                return post(`${constants_1.ENDPOINTS.compliance.prepurchaseCompliance}`, validatedData);
            },
        },
    };
}
