import { useCallback, useEffect, useMemo } from "react";
import { useScript } from "../hooks/useScript";

declare global {
  interface Window {
    Vinoshipper: any;
  }
}

// Define the shape of a theme
export type EmbedTheme =
  | "indigo"
  | "purple"
  | "pink"
  | "red"
  | "orange"
  | "yellow"
  | "green"
  | "teal"
  | "cyan"
  | "gray"
  | "black";

export interface VinoshipperClubFormProps {
  accountId: string;
  // Optional theme and dark mode support
  theme?: EmbedTheme;
  darkMode?: boolean;
}

// Vinoshipper Injector v4
export const VinoshipperClubForm = ({
  accountId,
  theme,
  darkMode,
}: VinoshipperClubFormProps) => {
  const themeValue = useMemo<string | undefined>(() => {
    if (!!theme) {
      return darkMode ? `${theme}-dark` : undefined;
    } else if (darkMode) {
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

  return <div className="vs-club-registration"></div>;
};
