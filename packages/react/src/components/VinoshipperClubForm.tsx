import { useEffect, useMemo, useRef } from "react";

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
  const hasRun = useRef(false); // For strict mode compatibility
  const themeValue = useMemo<string | undefined>(() => {
    if (!!theme) {
      return darkMode ? `${theme}-dark` : theme;
    } else if (darkMode) {
      return "dark";
    }
    return undefined;
  }, [theme, darkMode]);

  useEffect(() => {
    // Prevent multiple runs in strict mode
    // This ensures the effect only runs once even in development mode
    if (hasRun.current) {
      return;
    }
    hasRun.current = true;
    // IDs for scripts to avoid duplicates
    const inlineScriptId = "vs-inline-init";
    const externalScriptId = "vinoshipper-script";

    // Cleanup any existing scripts before injecting new ones
    const removeExistingScripts = () => {
      const inlineScript = document.getElementById(inlineScriptId);
      if (inlineScript) inlineScript.parentNode?.removeChild(inlineScript); // remove inline script

      const externalScript = document.getElementById(externalScriptId);
      if (externalScript)
        externalScript.parentNode?.removeChild(externalScript);

      const links = document.querySelectorAll(
        'link[href*="vinoshipper.com/injector"]'
      );
      links.forEach((l) => l.parentNode?.removeChild(l));

      const cart = document.getElementById("vs-cart");
      if (cart) cart.parentNode?.removeChild(cart); // remove cart element if it exists
    };

    removeExistingScripts();

    // Inject inline init script
    const inlineScript = document.createElement("script");
    inlineScript.id = inlineScriptId;
    inlineScript.type = "text/javascript";
    inlineScript.text = `
      window.document.addEventListener('vinoshipper:loaded', () => {
        if (window.Vinoshipper && typeof window.Vinoshipper.init === 'function') {
          window.Vinoshipper.init(${accountId}, { theme: '${themeValue}' });
        }
      }, false);
    `;
    document.body.appendChild(inlineScript);

    // Inject external script
    const externalScript = document.createElement("script");
    externalScript.id = externalScriptId;
    externalScript.src = "https://vinoshipper.com/injector/index.js";
    externalScript.async = true;
    document.body.appendChild(externalScript);

    return () => {
      // Remove injected scripts on cleanup
      removeExistingScripts();

      // Remove global Vinoshipper object
      try {
        window.Vinoshipper.destroy();
        delete window.Vinoshipper;
      } catch {
        // Some environments may not allow delete, fallback to null
        window.Vinoshipper = undefined;
      }
    };
  }, [accountId]);

  return <div className="vs-club-registration"></div>;
};
