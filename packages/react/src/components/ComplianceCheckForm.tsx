import { getLocalStore } from "../lib/localStorage";
import { CRUSHSUITE_SHIPPING_STATE } from "../../../core/src";
import type { OrderCheckComplianceAddress } from "../../../core/src/types";
import { useState } from "react";

export interface ComplianceCheckFormProps {
  shipToAddress?: OrderCheckComplianceAddress;
  billToAddress?: OrderCheckComplianceAddress;
  onSubmit?: (data: any) => void;
  onError?: (error: Error) => void;
  sameAsBilling?: boolean;
  children?: React.ReactNode;
}

export const ComplianceCheckForm = ({
  shipToAddress,
  billToAddress,
  onSubmit = () => {},
  onError = () => {},
  sameAsBilling: defaultSameAsBilling = true,
  children,
}: ComplianceCheckFormProps) => {
  const defaultState = getLocalStore(CRUSHSUITE_SHIPPING_STATE);
  const [sameAsBilling, setSameAsBilling] = useState(defaultSameAsBilling);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    onSubmit(formData);
  };

  return <form onSubmit={handleSubmit}>{children}</form>;
};
