import { useEffect } from "react";

export const useScript = (
  src: string,
  {
    async = true,
    id,
    onLoad,
  }: { async?: boolean; id?: string; onLoad?: () => void }
) => {
  useEffect(() => {
    // Prevent injecting twice
    if (document.getElementById(id || src)) return;

    const script = document.createElement("script");
    script.src = src;
    script.async = async;
    if (id) script.id = id;
    if (onLoad) script.onload = onLoad;

    document.body.appendChild(script);

    // Cleanup if the component unmounts
    return () => {
      script.onload = null;
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [src, async, id, onLoad]);
};
