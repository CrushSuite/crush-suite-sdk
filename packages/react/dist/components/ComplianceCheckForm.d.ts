import type { OrderCheckComplianceAddress } from "../../../core/src/api/types";
export interface ComplianceCheckFormProps {
    shipToAddress?: OrderCheckComplianceAddress;
    billToAddress?: OrderCheckComplianceAddress;
    onSubmit?: (data: any) => void;
    onError?: (error: Error) => void;
    sameAsBilling?: boolean;
    children?: React.ReactNode;
}
export declare const ComplianceCheckForm: ({ shipToAddress, billToAddress, onSubmit, onError, sameAsBilling: defaultSameAsBilling, children, }: ComplianceCheckFormProps) => import("react/jsx-runtime").JSX.Element;
