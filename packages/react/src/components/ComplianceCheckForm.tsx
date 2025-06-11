import { getLocalStore } from "../lib/localStorage";
import { CRUSHSUITE_SHIPPING_STATE } from "../constants";
import type { OrderCheckComplianceAddress } from "../../../core/src/api/types";

export interface ComplianceCheckFormProps {
  shipToAddress: OrderCheckComplianceAddress;
  billToAddress: OrderCheckComplianceAddress;
  onSubmit: (data: any) => void;
  onError?: (error: Error) => void;
}

export const ComplianceCheckForm = ({
  shipToAddress,
  billToAddress,
  onSubmit,
  onError,
}: ComplianceCheckFormProps) => {
  const defaultState = getLocalStore(CRUSHSUITE_SHIPPING_STATE);

  return <></>;
};
