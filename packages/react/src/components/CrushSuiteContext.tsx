"use client";
import React, { createContext, useEffect, useState } from "react";
import type { CrushSuiteContextType, USAStateAbbreviation } from "../types";

import {
  CRUSH_SUITE_NAMESPACE,
  CRUSHSUITE_SHIPPING_STATE,
  CRUSHSUITE_CUSTOMER_DOB,
  CRUSHSUITE_AGE_VERIFIED,
  CRUSHSUITE_COMPLIANCE_FEE_KEY,
  createCrushSuiteStorefrontClient,
  getCart,
  removeComplianceFee,
  OrderCheckComplianceResponse,
  OrderCheckComplianceRequest,
  updateCartAttributes,
  addComplianceFee,
} from "../../../core/src";
import { getCookie, setCookie, removeCookie } from "../lib/cookies";
import { formatDob } from "../lib/dob";

const defaultContext: CrushSuiteContextType = {
  namespace: CRUSH_SUITE_NAMESPACE,
  customerDOB: null,
  setCustomerDOB: () => {},
  customerDefaultAddress: null,
  setCustomerDefaultAddress: () => {},
  shippingState: null,
  setShippingState: () => {},
  ageVerified: false,
  setAgeVerified: () => {},
  complianceProduct: null,
  setComplianceProduct: () => {},
  handleComplianceCheck: async (
    _requestData: OrderCheckComplianceRequest,
    _responseData: OrderCheckComplianceResponse,
    _cb: (data: OrderCheckComplianceResponse) => void
  ) => {
    console.warn(
      "CrushSuite: handleComplianceCheck is not implemented in the default context."
    );
  },
};

export const CrushSuiteContext =
  createContext<CrushSuiteContextType>(defaultContext);

export const CrushSuiteProvider = ({
  shop,
  storefrontPublicKey,
  storefrontApiVersion = "2025-07", // Default API version
  cartId,
  children,
}: {
  children: React.ReactNode;
  shop: string;
  storefrontPublicKey?: string; // Optional for making storefront requests on behalf of merchant
  storefrontApiVersion?: string; // Optional, defaults to "2025-07"
  cartId?: string;
}) => {
  const storefrontClient = (() => {
    if (!storefrontPublicKey || !shop) return null;
    return createCrushSuiteStorefrontClient({
      shop,
      storefrontAccessToken: storefrontPublicKey,
      apiVersion: storefrontApiVersion,
    });
  })();

  const [customerDOB, setCustomerDOB] = useState<string | null>(
    getCookie(CRUSHSUITE_CUSTOMER_DOB) as string | null
  );
  const [customerDefaultAddress, setCustomerDefaultAddress] = useState<
    string | null
  >(null);
  const [shippingState, setShippingState] =
    useState<USAStateAbbreviation | null>(
      getCookie(CRUSHSUITE_SHIPPING_STATE) as USAStateAbbreviation | null
    );
  const [ageVerified, setAgeVerified] = useState<boolean>(
    getCookie(CRUSHSUITE_AGE_VERIFIED) === "true" ? true : false
  );
  const [complianceProduct, setComplianceProduct] = useState<number | null>(
    getCookie(CRUSHSUITE_COMPLIANCE_FEE_KEY)
      ? parseInt(getCookie(CRUSHSUITE_COMPLIANCE_FEE_KEY) as string, 10)
      : null
  );

  const saveCustomerDOB = (dob: string | null) => {
    setCustomerDOB(dob);

    if (dob) {
      setCookie(CRUSHSUITE_CUSTOMER_DOB, dob);
    } else {
      removeCookie(CRUSHSUITE_CUSTOMER_DOB);
    }
  };

  const saveShippingState = (state: USAStateAbbreviation | null) => {
    setShippingState(state);

    if (state) {
      setCookie(CRUSHSUITE_SHIPPING_STATE, state);
    } else {
      removeCookie(CRUSHSUITE_SHIPPING_STATE);
    }
  };

  const saveAgeVerified = (verified: boolean) => {
    setAgeVerified(verified);
    if (verified) {
      setCookie(CRUSHSUITE_AGE_VERIFIED, "true");
    } else {
      removeCookie(CRUSHSUITE_AGE_VERIFIED);
    }
  };

  const saveComplianceProduct = (productId: number | null) => {
    setComplianceProduct(productId);
    if (productId) {
      setCookie(CRUSHSUITE_COMPLIANCE_FEE_KEY, productId.toString());
    } else {
      removeCookie(CRUSHSUITE_COMPLIANCE_FEE_KEY);
    }
  };

  /**
   * Handles updating the cart with the correct compliance data, is valid
   *
   * Adds the compliance fee to the cart if it exists, and updates the cart attributes
   */
  const handleComplianceCheck = async (
    requestData: OrderCheckComplianceRequest,
    responseData: OrderCheckComplianceResponse,
    cb: (data: OrderCheckComplianceResponse) => void
  ): Promise<void> => {
    if (!storefrontClient || !cartId) {
      console.warn(
        "CrushSuite: Storefront client or cart ID is not available for compliance check."
      );
      return;
    }
    if (responseData.valid) {
      // handle adding compliance data to the cart
      if (responseData.complianceKey) {
        const attributes = [
          {
            key: "customer_dob__" as const,
            value: formatDob(
              requestData.dob.day,
              requestData.dob.month,
              requestData.dob.year
            ),
          },
          {
            key: "valid_compliance_id__" as const,
            value: responseData.complianceKey,
          },
        ];
        await updateCartAttributes(storefrontClient, cartId, attributes);
      }
      if (responseData.complianceFee) {
        const complianceProduct = responseData.complianceFee.fee;
        const variantId = parseInt(Object.keys(complianceProduct)[0]);
        const merchandiseId = `gid://shopify/ProductVariant/${variantId}`;
        const quantity = complianceProduct[variantId];
        await addComplianceFee(
          storefrontClient,
          [
            {
              attributes: [],
              merchandiseId,
              quantity,
            },
          ],
          cartId!
        );
        saveComplianceProduct(variantId);
        await new Promise((resolve) => setTimeout(resolve, 10));
      }
    }
    cb(responseData);
    return;
  };

  /**
   * Initialize the CrushSuite context that uses cookies to store
   * If this gets rendered on the server, the cookies will not be available
   * so we will not set the initial state of null, and they may not be updated
   */
  useEffect(() => {
    const initialDOB = getCookie(CRUSHSUITE_CUSTOMER_DOB);
    const initialShippingState = getCookie(CRUSHSUITE_SHIPPING_STATE);
    const initialAgeVerified = getCookie(CRUSHSUITE_AGE_VERIFIED) === "true";
    const initialComplianceProduct = getCookie(CRUSHSUITE_COMPLIANCE_FEE_KEY)
      ? parseInt(getCookie(CRUSHSUITE_COMPLIANCE_FEE_KEY) as string, 10)
      : null;

    if (initialDOB) {
      setCustomerDOB(initialDOB);
    }
    if (initialShippingState) {
      setShippingState(initialShippingState as USAStateAbbreviation);
    }
    setAgeVerified(initialAgeVerified);
    if (initialComplianceProduct) {
      // This should be removed
      removeComplianceProductOnMount();
    }

    async function removeComplianceProductOnMount() {
      if (typeof cartId !== "string" || !storefrontClient) return;
      const cart = await getCart(storefrontClient, cartId);
      if (cart) {
        const complianceFeeLine = cart.lines.nodes.find((line) => {
          return (
            line.merchandise.id ===
            `gid://shopify/ProductVariant/${initialComplianceProduct}`
          );
        });
        if (complianceFeeLine) {
          // Remove the compliance fee from the cart
          await removeComplianceFee(
            storefrontClient,
            [complianceFeeLine.id],
            cartId!
          );
          setComplianceProduct(null);
          removeCookie(CRUSHSUITE_COMPLIANCE_FEE_KEY);
          // Reload the page to ensure the cart is updated
          setTimeout(() => window.location.reload(), 100);
        }
      }
      setComplianceProduct(null);
      removeCookie(CRUSHSUITE_COMPLIANCE_FEE_KEY);
    }
  }, []);

  const contextValue: CrushSuiteContextType = {
    namespace: CRUSH_SUITE_NAMESPACE,
    customerDOB,
    setCustomerDOB: saveCustomerDOB,
    customerDefaultAddress,
    setCustomerDefaultAddress,
    shippingState,
    setShippingState: saveShippingState,
    ageVerified,
    setAgeVerified: saveAgeVerified,
    complianceProduct,
    setComplianceProduct: saveComplianceProduct,
    handleComplianceCheck,
  };

  return (
    <CrushSuiteContext.Provider value={contextValue}>
      {children}
    </CrushSuiteContext.Provider>
  );
};
