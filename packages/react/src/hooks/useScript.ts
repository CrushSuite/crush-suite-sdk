import { useEffect } from "react";

declare global {
  interface Window {
    scriptsInjected: { [key: string]: boolean };
  }
}

export const useScript = (
  src: string,
  {
    async = true,
    id,
    onLoad,
  }: { async?: boolean; id: string; onLoad?: () => void }
) => {
  // console.log(`useScript: ${src} (async: ${async}, id: ${id})`);
  useEffect(() => {
    if (typeof window === "undefined") return; // Only run on client

    if (!id || !src) return; // No source or id provided

    if (window.scriptsInjected && window.scriptsInjected[src]) {
      return; // Script already injected
    } else {
      // Mark the script as injected
      if (!window.scriptsInjected) {
        window.scriptsInjected = {};
      }
      window.scriptsInjected[src] = true;
    }

    // Check for existing script by id or src
    let script = id
      ? (document.getElementById(id) as HTMLScriptElement | null)
      : null;
    if (!script) {
      script = document.querySelector(
        `script[src="${src}"]`
      ) as HTMLScriptElement | null;
    }
    let created = false;

    if (!script) {
      script = document.createElement("script");
      script.src = src;
      script.async = async;
      if (id) script.id = id;
      if (onLoad) script.onload = onLoad;
      document.body.appendChild(script);
      created = true;
    } else if (onLoad && !script.onload) {
      script.onload = onLoad;
    }

    return () => {
      // Only remove the script if we created it
      if (created && script && script.parentNode) {
        script.onload = null;
        script.parentNode.removeChild(script);
      }
    };
  }, [src, async, id, onLoad]);
};
