import { useEffect } from "react";
export const useScript = (src, { async = true, id, onLoad, }) => {
    // console.log(`useScript: ${src} (async: ${async}, id: ${id})`);
    useEffect(() => {
        if (typeof window === "undefined")
            return; // Only run on client
        if (!id || !src)
            return; // No source or id provided
        if (window.scriptsInjected && window.scriptsInjected[src]) {
            return; // Script already injected
        }
        else {
            // Mark the script as injected
            if (!window.scriptsInjected) {
                window.scriptsInjected = {};
            }
            window.scriptsInjected[src] = true;
        }
        // Check for existing script by id or src
        let script = id
            ? document.getElementById(id)
            : null;
        if (!script) {
            script = document.querySelector(`script[src="${src}"]`);
        }
        let created = false;
        if (!script) {
            script = document.createElement("script");
            script.src = src;
            script.async = async;
            if (id)
                script.id = id;
            if (onLoad)
                script.onload = onLoad;
            document.body.appendChild(script);
            created = true;
        }
        else if (onLoad && !script.onload) {
            script.onload = onLoad;
        }
        return () => {
            // Only remove the script if we created it
            if (created && script && script.parentNode) {
                script.onload = null;
                script.parentNode.removeChild(script);
                // Clear the injection tracking when script is removed
                if (window.scriptsInjected) {
                    delete window.scriptsInjected[src];
                }
            }
        };
    }, [src, async, id, onLoad]);
};
