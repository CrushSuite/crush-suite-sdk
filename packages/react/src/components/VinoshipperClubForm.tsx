import { useCallback, useMemo } from "react";
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

  // callback to run when script has loaded
  const handleLoad = useCallback(() => {
    if (window.Vinoshipper?.init) {
      window.Vinoshipper.init(accountId, { theme: themeValue });
    } else {
      console.error("Vinoshipper is missing on window after script load");
    }
  }, [accountId, themeValue]);

  // inject the script once
  useScript("https://vinoshipper.com/injector/index.js", {
    async: true,
    id: `vinoshipper-script-${accountId}`,
    onLoad: handleLoad,
  });

  return <div id={`vinoshipper-form-${accountId}`} />;
};
