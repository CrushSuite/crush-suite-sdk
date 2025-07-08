declare global {
    interface Window {
        scriptsInjected: {
            [key: string]: boolean;
        };
    }
}
export declare const useScript: (src: string, { async, id, onLoad, }: {
    async?: boolean;
    id: string;
    onLoad?: () => void;
}) => void;
