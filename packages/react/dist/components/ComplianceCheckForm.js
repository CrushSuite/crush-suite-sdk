import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
import { getLocalStore } from "../lib/localStorage";
import { CRUSHSUITE_SHIPPING_STATE } from "../constants";
export const ComplianceCheckForm = ({ shipToAddress, billToAddress, onSubmit, onError, sameAsBilling = true, }) => {
    const defaultState = getLocalStore(CRUSHSUITE_SHIPPING_STATE);
    return _jsx(_Fragment, {});
};
