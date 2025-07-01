import { jsx as _jsx } from "react/jsx-runtime";
import { getLocalStore } from "../lib/localStorage";
import { CRUSHSUITE_SHIPPING_STATE } from "../../../core/src";
import { useState } from "react";
export const ComplianceCheckForm = ({ shipToAddress, billToAddress, onSubmit = () => { }, onError = () => { }, sameAsBilling: defaultSameAsBilling = true, children, }) => {
    const defaultState = getLocalStore(CRUSHSUITE_SHIPPING_STATE);
    const [sameAsBilling, setSameAsBilling] = useState(defaultSameAsBilling);
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        onSubmit(formData);
    };
    return _jsx("form", { onSubmit: handleSubmit, children: children });
};
