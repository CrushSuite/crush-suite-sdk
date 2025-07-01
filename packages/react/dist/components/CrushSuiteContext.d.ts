import React from "react";
import type { CrushSuiteContextType } from "../types";
export declare const CrushSuiteContext: React.Context<CrushSuiteContextType>;
export declare const CrushSuiteProvider: ({ shop, storefrontPublicKey, storefrontApiVersion, cartId, children, }: {
    children: React.ReactNode;
    shop: string;
    storefrontPublicKey?: string;
    storefrontApiVersion?: string;
    cartId?: string;
}) => import("react/jsx-runtime").JSX.Element;
