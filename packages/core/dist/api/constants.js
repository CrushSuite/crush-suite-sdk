"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrecomplianceEventType = exports.ENDPOINTS = exports.BASE_PATH = exports.PRODUCTION_API = exports.STAGING_API = void 0;
exports.STAGING_API = 'https://crush-suite-staging.up.railway.app';
exports.PRODUCTION_API = 'https://crush-suite-production.up.railway.app';
exports.BASE_PATH = 'service-api';
exports.ENDPOINTS = {
    compliance: {
        complianceEvent: 'compliance/compliance-event',
        prepurchaseCompliance: 'compliance/prepurchase-compliance',
    }
};
exports.PrecomplianceEventType = {
    INITIATED: 'INITIATED',
    SUBMITTED: 'SUBMITTED',
    APPROVED: 'APPROVED',
    FAILED: 'FAILED'
};
