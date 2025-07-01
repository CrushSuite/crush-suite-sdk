import type { CrushSuiteConfig, CrushSuiteAPI } from "../types";
export declare function createClient({ storefrontPublicKey, storefrontApiVersion, // Default API version
shop, privateKey, sandboxKey, _environment, }: CrushSuiteConfig): CrushSuiteAPI;
