import { getLocalStore } from "../lib/localStorage";
import { CRUSHSUITE_SHIPPING_STATE } from "../constants";
import type { OrderCheckComplianceAddress } from "../../../core/src/api/types";

export interface ComplianceCheckFormProps {
  shipToAddress: OrderCheckComplianceAddress;
  billToAddress: OrderCheckComplianceAddress;
  onSubmit: (data: any) => void;
  onError?: (error: Error) => void;
  sameAsBilling?: boolean;
}

export const ComplianceCheckForm = ({
  shipToAddress,
  billToAddress,
  onSubmit,
  onError,
  sameAsBilling = true,
}: ComplianceCheckFormProps) => {
  const defaultState = getLocalStore(CRUSHSUITE_SHIPPING_STATE);

  return <></>;
};
