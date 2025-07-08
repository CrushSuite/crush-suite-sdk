import { jsx as _jsx } from "react/jsx-runtime";
import { useCallback, useMemo } from "react";
import { useScript } from "../hooks/useScript";
// Vinoshipper Injector v4
export const VinoshipperClubForm = ({ accountId, theme, darkMode, }) => {
    const themeValue = useMemo(() => {
        if (!!theme) {
            return darkMode ? `${theme}-dark` : undefined;
        }
        else if (darkMode) {
            return "dark";
        }
        return undefined;
    }, [theme, darkMode]);
    // callback to run when script has loaded
    const handleLoad = useCallback(() => {
        if (window.Vinoshipper?.init) {
            window.Vinoshipper.init(accountId, { theme: themeValue });
        }
        else {
            console.error("Vinoshipper is missing on window after script load");
        }
    }, [accountId, themeValue]);
    // inject the script once
    useScript("https://vinoshipper.com/injector/index.js", {
        async: true,
        id: `vinoshipper-script-${accountId}`,
        onLoad: handleLoad,
    });
    return _jsx("div", { id: `vinoshipper-form-${accountId}` });
};
