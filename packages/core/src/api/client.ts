import type { CrushSuiteConfig, CrushSuiteAPI } from "./types";
import { STAGING_API, PRODUCTION_API, BASE_PATH, ENDPOINTS } from "./constants";
import {
  ComplianceBodyReq,
  ComplianceEventReq,
  ComplianceFeeBodyReq,
} from "./validation";

export function createClient({
  privateKey,
  sandboxKey,
  _environment,
}: CrushSuiteConfig): CrushSuiteAPI {
  const apiUrl = _environment === "staging" ? STAGING_API : PRODUCTION_API;
  const baseUrl = `${apiUrl}/${BASE_PATH}`;

  async function get<T>(endpoint: string): Promise<T> {
    const res = await fetch(`${baseUrl}/${endpoint}`, {
      headers: {
        "x-api-key": privateKey,
        "x-api-key-sandbox": sandboxKey || "", // Optional for sandbox
      },
    });
    if (!res.ok) throw new Error(`API Error: ${res.statusText}`);
    return res.json();
  }

  async function post<T>(endpoint: string, body: any): Promise<T> {
    const res = await fetch(`${baseUrl}/${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": privateKey,
      },
      body: JSON.stringify(body),
    });
    if (!res.ok) throw new Error(`API Error: ${res.statusText}`);
    return res.json();
  }

  return {
    compliance: {
      complianceEvent: (eventData) => {
        const validatedData = ComplianceEventReq.parse(eventData);
        return post(`${ENDPOINTS.compliance.complianceEvent}`, validatedData);
      },
      prepurchaseCompliance: (complianceData) => {
        const validatedData = ComplianceBodyReq.parse(complianceData);
        return post(
          `${ENDPOINTS.compliance.prepurchaseCompliance}`,
          validatedData
        );
      },
      alcoholFee: (complianceData) => {
        const validatedData = ComplianceFeeBodyReq.parse(complianceData);
        return post(
          `${ENDPOINTS.compliance.prepurchaseCompliance}`,
          validatedData
        );
      },
    },
  };
}
