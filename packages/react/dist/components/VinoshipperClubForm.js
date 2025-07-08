import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useMemo } from "react";
import { useScript } from "../hooks/useScript";
// Vinoshipper Injector v4
export const VinoshipperClubForm = ({ accountId, theme, darkMode, }) => {
    const themeValue = useMemo(() => {
        if (!!theme) {
            return darkMode ? `${theme}-dark` : theme;
        }
        else if (darkMode) {
            return "dark";
        }
        return undefined;
    }, [theme, darkMode]);
    useEffect(() => {
        window.document.addEventListener("vinoshipper:loaded", () => {
            console.log(`Vinoshipper loaded for account: ${accountId}`);
            // Initialize the Vinoship
            window.Vinoshipper.init(accountId, { theme: themeValue });
        });
    }, [accountId, themeValue]);
    useScript("https://vinoshipper.com/injector/index.js", {
        async: true,
        id: `vinoshipper-script`,
    });
    return _jsx("div", { className: "vs-club-registration" });
};
